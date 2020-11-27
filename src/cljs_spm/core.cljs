(ns cljs-spm.core
  (:require [reagent.core :as reagent :refer [atom cursor]]
            [reagent.ratom :refer [reaction]]
            [reagent.dom :as rdom]))

(defonce window-width (atom 0))

(enable-console-print!)

(defonce textarea-text (reagent/atom ""))

(defn maybe-number [s]
  (let [p (js/Number.parseFloat s)]
    (if (js/Number.isNaN p) s p)))

(defonce model-parsed
  (reaction
    (println "Parsing text")
    (let [rows   (clojure.string/split-lines @textarea-text)
          rows   (map (fn [line] (clojure.string/split line ",")) rows)
          header (distinct (map keyword (first rows)))
          rows   (map (partial mapv maybe-number) (next rows))
          rows   (map (partial zipmap header) rows)]
        {:rows rows :axis header})))

(defonce view-opts (atom {:enabled-axis #{} :category nil}))

(defonce active-category (cursor view-opts [:category]))

(defn hist
  ([xs] (hist (apply min xs) (apply max xs) xs))
  ([m- m+ xs]
   ; (assert (<= m- m+))
   (let [n (min 10 (count xs))
         d  (double (- m+ m-))
         w  (/ d n)
         f  (fn [x] (int (quot (- x m- 0.0000001) w)))
         gs (group-by f xs)]
     (mapv (comp count gs) (range 0 n)))))

(defonce data+stats
  (reaction
   (println "Recalculating data stats and histograms")
    (-> @model-parsed
        (assoc :min (into {} (for [a (:axis @model-parsed)]
                               [a (apply min (map a (:rows @model-parsed)))]))
               :max (into {} (for [a (:axis @model-parsed)]
                                      [a (apply max (map a (:rows @model-parsed)))]))
               :type (into {} (for [a (:axis @model-parsed)]
                                 [a (cond (-> @model-parsed :rows first a number?) :numeric
                                          :else                                    :scalar)]))
               :hist (into {} (for [a (:axis @model-parsed)]
                                [a (hist (map a (:rows @model-parsed)))]))))))

(defonce data
  (reaction
   (println "Recalculate enabled axis")
   (update @data+stats :axis (partial keep (:enabled-axis @view-opts)))))

(defonce axis-category-hist
  (->> (for [row (:rows @model-parsed)
             a   (:axis @model-parsed)]
         [[a (get row @active-category)]
          (get row a)])
       (group-by first)
       (reduce (fn [m [[col cat-val] kvs]]
                 (assoc-in m [col cat-val]
                           (hist (minimum col) (maximum col) (map second kvs))))
               {})
       (let [minimum (:min @data+stats)
             maximum (:max @data+stats)])
       (reaction)))

(defonce canvas-size (reaction (- (/ (- @window-width 10) (count (:axis @data))) 30)))

(defn div-with-canvas [draw-canvas-contents]
  (let [dom-node (atom nil)]
    (reagent/create-class
     {:component-did-update #(draw-canvas-contents
                              (-> (.-firstChild @dom-node) (.getContext "2d"))
                              @canvas-size
                              @canvas-size)
      :component-did-mount  #(reset! dom-node (rdom/dom-node %))
      :reagent-render
      #(do
         @canvas-size ;; Trigger re-render on window resizes
         @view-opts
         [:div.with-canvas
          [:canvas (when-let [node @dom-node]
                     {:width  @canvas-size
                      :height @canvas-size})]])})))

(defn on-window-resize [evt]
  (reset! window-width (.-innerWidth js/window)))


(defonce categories
  (reaction
   (println "recalc categories")
   (mapv (fn [row] (get row @active-category :none)) (:rows @model-parsed))))

(defonce category->color
  (reaction (zipmap (set @categories)
                    ["red" "blue" "yellow" "lime" "purple" "pink" "brown"])))

(defn render-table-fn [x-col y-col ctx w h]
  (let [off-x  (-> @data :min x-col)
        off-y  (-> @data :min y-col)
        x-width (- (-> @data :max x-col) off-x)
        y-width (- (-> @data :max y-col) off-y)
        scale-x (/ @canvas-size x-width)
        scale-y (/ @canvas-size y-width)]
    (doseq [[x y c] (map vector
                         (map x-col (:rows @data))
                         (map y-col (:rows @data))
                         (map @category->color @categories))]
      (set! (.-fillStyle ctx) c)
      (.fillRect ctx
                 (* scale-x (- x off-x))
                 (* scale-y (- y off-y))
                 10
                 10))))

(defn- render-table-histogram [y-col ctx w h]
  (assert (keyword? y-col))
  (println "Rendering histogram for " y-col)
  (let [buckets (-> @data :hist y-col)
        x-width (/ @canvas-size (count buckets))
        scale-y (/ (- @canvas-size 5) (apply max buckets))]
    (set! (.-fillStyle ctx) "silver")
    (doseq [[i bucket] (map-indexed vector buckets)
            :let [height (* bucket scale-y)]]
      (.fillRect ctx
                 (* x-width i)
                 (- @canvas-size height)
                 x-width
                 height))
    (doseq [[k buckets] (get @axis-category-hist y-col)
            :when k]
      (doseq [[i bucket] (map-indexed vector buckets)
              :let [height (* bucket scale-y)]]
        (set! (.-fillStyle ctx) (@category->color k))
        (.fillRect ctx
                   (* x-width i)
                   (- @canvas-size height 1)
                   x-width
                   1
                   )))))

(defn render-table []
  [:table {:border "1"}
    [:thead
      [:tr
        (doall (for [col (:axis @data)]
          [:th {:key col}
           (name col)
           [:br]
           [:center [:small "(" (-> @data :min col) "-" (-> @data :max col) ")"]]]))]]
    [:tbody
      (doall (for [[i x-col] (map-indexed vector (:axis @data))]
      [:tr {:key (str "col" x-col)}
       (doall (for [[j y-col] (map-indexed vector (:axis @data))]
       [:td {:key (str x-col y-col)
             :class (when (> i j) "empty")}
         (cond
           (= i j) [div-with-canvas (partial render-table-histogram x-col)]
           (< i j) [div-with-canvas (partial render-table-fn y-col x-col)]
           :else   [:div.empty])]))]))]])

(defn- load-url [url]
  (-> (js/fetch url)
      (.then (fn [response] (.text response)))
      (.then (fn [txt] (reset! textarea-text txt)))
      (.then (fn [_] (println "Success loaded" url)))))

(defn- csv-box []
  [:div.controls
   [:h2 "1. Data Source"]
   [:p "Enter the dataset CSV in the text box or load an example dataset:"]
   [:div {:style {:padding "1em" :background "#fff3f9"}}
    [:button {:on-click #(load-url "https://gist.githubusercontent.com/curran/a08a1080b88344b0c8a7/raw/639388c2cbc2120a14dcf466e85730eb8be498bb/iris.csv")}
     "Load Iris dataset"]
    [:button {:on-click #(load-url "https://raw.githubusercontent.com/selva86/datasets/master/seeds.csv")}
     "Load Wheat Seeds dataset"]]
   [:textarea {:rows 11
               :on-change #(reset! textarea-text (.. % -target -value))
               :style {:resize "none"
                       :width "90%"
                       :display "block"
                       :overflow "auto"}
               :value (str @textarea-text)}]
   [:br]
   [:div (str (count (:rows @model-parsed))) " rows"]])

(defn- opts-box []
  [:div.controls
    [:h2 "2. Display options"]
    [:p "Dimensions:"]
   (doall
    (for [i (:axis @model-parsed)
          :when (= :numeric (get-in @data [:type i]))]
      [:label {:key i
               :style {:padding "0.2em 1em"}}
       [:input {:type "checkbox"
                :defaultChecked (-> @view-opts :enabled-axis i boolean)
                :on-change (fn [e] (if (.-checked (.-target e))
                                     (swap! view-opts update :enabled-axis conj i)
                                     (swap! view-opts update :enabled-axis disj i)))}]
       [:span (str (name i))]]))
   ;; TODO: show color codes.
   [:p "Category: "
    [:select
     {:on-change (fn [e] (swap! view-opts assoc :category (some-> e .-target .-value not-empty keyword)))}
     [:option {:value ""} "No Category"]
     (doall
      (for [i (:axis @model-parsed)
            :when (-> @view-opts :enabled-axis i not)]
        [:option {:key (str i) :value (name i)} (name i)]))]]
   (when @active-category
     (doall
      (for [[cat-val color] @category->color]
        [:span {:key cat-val
                :style {:padding "0.2em 1em"}}
         [:span {:style {:display "inline-block"
                         :width "1em"
                         :height "1em"
                         :margin-right "0.2em"
                         :background color}}]
         [:span [:i (str cat-val)]]])))])

(defn- application []
  [:div
   [csv-box]
   (when (not-empty (:rows @model-parsed))
     [opts-box])
   (when (not-empty (:rows @data))
     [render-table])])

(defn ^:export on-window-load []
  (rdom/render [application] (. js/document (getElementById "app")))
  (.addEventListener js/window "resize" on-window-resize)
  (on-window-resize nil))

(set! (.-onload js/window) on-window-load)

(defn on-js-reload [])
