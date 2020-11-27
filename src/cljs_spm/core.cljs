(ns cljs-spm.core
    (:require [reagent.core :as reagent :refer [atom]]
              [goog.net.XhrIo :as xhr]))

(def window-width (atom 0))

(enable-console-print!)

(defonce textarea-text (atom ""))

(defn maybe-number [s]
  (let [p (js/Number.parseFloat s)]
    (if (js/Number.isNaN p) s p)))

(def model-parsed
  (reagent.ratom/reaction
    (let [rows   (clojure.string/split-lines @textarea-text)
          rows   (map (fn [line] (clojure.string/split line ",")) rows)
          header (distinct (map keyword (first rows)))
          rows   (map (partial mapv maybe-number) (next rows))
          rows   (map (partial zipmap header) rows)]
        {:rows rows :axis header})))

(def view-opts (atom {:enabled-axis #{} :category nil}))

(defn hist
  ([xs] (hist (min 10 (count xs)) xs))
  ([n xs]
   (let [m- (apply min xs)
         m+ (apply max xs)
         d  (double (- m+ m-))
         w  (/ d n)
         f  (fn [x] (int (quot (- x m- 0.0000001) w)))
         gs (group-by f xs)]
     (mapv (comp count gs) (range 0 n)))))

(def data
  (reagent.ratom/reaction
    (-> @model-parsed
        (update :axis (partial keep (:enabled-axis @view-opts)))
        (assoc :min (into {} (for [a (:axis @model-parsed)]
                               [a (apply min (map a (:rows @model-parsed)))]))
               :max (into {} (for [a (:axis @model-parsed)]
                                      [a (apply max (map a (:rows @model-parsed)))]))
               :type (into {} (for [a (:axis @model-parsed)]
                                 [a (cond (-> @model-parsed :rows first a number?) :numeric
                                          :else                                    :scalar)]))
               :hist (into {} (for [a (:axis @model-parsed)]
                                      [a (hist (map a (:rows @model-parsed)))]))))))

(def canvas-size (reagent.ratom/reaction (- (/ (- @window-width 10) (count (:axis @data))) 30)))

(defn div-with-canvas [draw-canvas-contents]
  (let [dom-node (reagent/atom nil)
        -width   (reagent.ratom/reaction (.-clientWidth (.-firstChild @dom-node)))
        -height  (reagent.ratom/reaction (.-clientHeight (.-firstChild @dom-node)))]
    (reagent/create-class
     {:component-did-update #(draw-canvas-contents
                               (-> (.-firstChild @dom-node) (.getContext "2d"))
                               @canvas-size
                               @canvas-size)
      :component-did-mount  #(reset! dom-node (reagent/dom-node %))
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

(def colors ["black" "red" "blue" "yellow" "lime" "purple" "pink" "brown"])

(defn render-table-fn [x-col y-col ctx w h]
  (let [off-x  (-> @data :min x-col)
        off-y  (-> @data :min y-col)
        x-width (- (-> @data :max x-col) off-x)
        y-width (- (-> @data :max y-col) off-y)
        scale-x (/ @canvas-size x-width)
        scale-y (/ @canvas-size y-width)

        colors (atom colors)
        colors (memoize (fn [c] (first (swap! colors next))))]
  (doseq [[x y c] (map (juxt x-col y-col
    (fn [row] (colors (get row (:category @view-opts))))) (:rows @data))]
    (set! (.-fillStyle ctx) c)
    (.fillRect ctx
      (* scale-x (- x off-x))
      (* scale-y (- y off-y))
      10
      10))))

(defn render-table-histogram [y-col ctx w h]
  (let [buckets (-> @data :hist y-col)
        x-width (/ @canvas-size (count buckets))
        off-y   0
        scale-y (/ (- @canvas-size 5) (- (apply max buckets) off-y))]
    (set! (.-fillStyle ctx) "silver")
    (doseq [[i bucket] (map-indexed vector buckets)
            :let [height (->> off-y (- bucket) (* scale-y))]]
      (.fillRect ctx
        (* x-width i)
        (- @canvas-size height)
        x-width
        height))))

(defn render-table []
  [:table {:border "1"}
    [:thead
      [:tr
        (doall (for [col (:axis @data)]
          [:th {:key col}
            (name col)  " " [:small "(" (-> @data :min col) "-" (-> @data :max col) ")"]]))]]
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

(defn load-url [url]
 (xhr/send url
           (fn [event]
             (let [res (-> event .-target .getResponseText)]
               (println "Success loading" url)
               (reset! textarea-text res)))))

(defn csv-box []
  [:div.controls
    [:h2 "1. Data Source"]
    [:p "Enter the dataset CSV here."]
    [:button {:on-click #(load-url "https://gist.githubusercontent.com/curran/a08a1080b88344b0c8a7/raw/639388c2cbc2120a14dcf466e85730eb8be498bb/iris.csv")}
      "Load Iris dataset"]
    [:button {:on-click #(load-url "https://raw.githubusercontent.com/selva86/datasets/master/seeds.csv")}
      "Load Wheat Seeds dataset"]

    ;; [:p (str @textarea-text)]
    ;; [:p (str @model-parsed)]
    [:textarea {:rows 11
      :on-change    #(reset! textarea-text (.. % -target -value))
               :style {:resize "none"
                       :width "90%"
                       :display "block"
                       :overflow "auto"}
               :value (str @textarea-text)}

    ] [:br]
    [:div (str (count (:rows @model-parsed))) " rows"]
    ])

(defn opts-box []
  [:div.controls
    [:h2 "2. Display options"]
    [:p "Dimensions:"]
    (for [i (:axis @model-parsed)
          :when (= :numeric (get-in @data [:type i]))]
     [:label {:key i :style {:padding "0.2em 1em"}}
       [:input {:type "checkbox"
                :defaultChecked (-> @view-opts :enabled-axis i boolean)
                :on-change (fn [e] (if (.-checked (.-target e))
                                    (swap! view-opts update :enabled-axis conj i)
                                    (swap! view-opts update :enabled-axis disj i)))}]
       (str (name i))])
    [:p "Category:"
      [:select
        {:on-change (fn [e] (swap! view-opts assoc :category (some-> e .-target .-value not-empty keyword)))}
      (for [i (:axis @model-parsed)]
                 [:option {:key (str i) :value (name i)} (name i)])]]])

(defn hello-world []
  [:div
   [csv-box]
   (when (not-empty (:rows @model-parsed)) [opts-box])
   (when (not-empty (:rows @data)) [render-table])])

(defn ^:export on-window-load []
  (reagent/render-component [hello-world] (. js/document (getElementById "app")))
  (.addEventListener js/window "resize" on-window-resize)
  (on-window-resize nil))

(set! (.-onload js/window) on-window-load)

(defn on-js-reload [])
