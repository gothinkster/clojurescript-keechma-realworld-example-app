(ns keechma.toolbox.ajax
  (:require [promesa.core :as p]
            [ajax.core :as ajax]))

(defn make-error-handler [reject]
  (fn [error]
    (reject (ex-info "AJAX Error" error))))

(defn promisify [method]
  (fn [url opts]
    (p/promise
     (fn [resolve reject on-cancel]
       (let [r (method url (merge opts {:handler resolve :error-handler (make-error-handler reject)}))]
         (when (fn? on-cancel) (on-cancel #(ajax/abort r))))))))

(def GET (promisify ajax/GET))
(def HEAD (promisify ajax/HEAD))
(def POST (promisify ajax/POST))
(def PUT (promisify ajax/PUT))
(def DELETE (promisify ajax/DELETE))
(def OPTIONS (promisify ajax/OPTIONS))
(def TRACE (promisify ajax/TRACE))
(def PATCH (promisify ajax/PATCH))
