(defproject cljs-spm "0.1.0-SNAPSHOT"
  :description "scatter plot matrix in the browser"
  :url "http://github.com/erdos/spm-cljs"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :min-lein-version "2.9.1"
  :dependencies [[org.clojure/clojure "1.10.1"]
                 [org.clojure/clojurescript "1.10.764"]
                 [reagent "1.0.0-rc1"]]
  :source-paths ["src"]
  :aliases {"fig" ["trampoline" "run" "-m" "figwheel.main"]
            "fig:build" ["trampoline" "run" "-m" "figwheel.main" "-b" "dev" "-r"]
            "fig:min"   ["run" "-m" "figwheel.main" "-O" "advanced" "-bo" "dev"]}
  :profiles {:dev {:dependencies [[com.bhauman/figwheel-main "0.2.12"]]
                   ;; need to add the compliled assets to the :clean-targets
                   :resource-paths ["target"]
                   :clean-targets ^{:protect false} ["target"]}})
