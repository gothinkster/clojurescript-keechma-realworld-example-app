(ns keechma.toolbox.forms.cursor)

(defn set-selection! [el pos]
  (set! (.-selectionStart el) pos)
  (set! (.-selectionEnd el) pos))

(defn calc-caret-pos-add [format-chars caret-start old-value new-value]
  (loop [start-pos caret-start
         rest-old (drop caret-start old-value)
         rest-new (drop caret-start new-value)]
    (let [first-old (take 1 rest-old)
          first-new (take 1 rest-new)
          clean-old (remove format-chars rest-old)
          clean-new (remove format-chars rest-new)
          is-format-char? (contains? format-chars (first first-new))]
      (cond
        (empty? rest-new) start-pos
        (= clean-new (take (count clean-new) clean-old)) start-pos
        (and (= first-old first-new) is-format-char?) (recur (inc start-pos) (drop 1 rest-old) (drop 1 rest-new))
        (and (not= rest-new rest-old)) (recur (inc start-pos) rest-old (drop 1 rest-new))
        :else start-pos))))

(defn calc-caret-pos-remove [format-chars caret-start old-value new-value old-length new-length]
  (let [diff (- old-length new-length)
        start-pos (- caret-start diff)
        prev-old (reverse (take start-pos old-value))
        prev-new (reverse (take start-pos new-value))]
    (loop [start-pos start-pos
           prev-old prev-old
           prev-new prev-new]
      (let [first-old (take 1 prev-old)
            first-new (take 1 prev-new)
            is-format-char? (contains? format-chars (first first-new))]
        (cond
          (empty? prev-new) start-pos
          (and (= first-old first-new) is-format-char?) (recur (dec start-pos) (drop 1 prev-old) (drop 1 prev-new))
          :else start-pos)))))

(defn set-caret-pos! [el format-chars input-value new-value old-value caret-pos]
  (let [old-length (count old-value)
        new-length (count new-value)
        input-length (count input-value)
        caret-start (- caret-pos (- input-length old-length))]
    (set! (.-value el) new-value)
    (cond
      (and (= new-value old-value) (< input-length old-length)) (set-selection! el (inc (- caret-pos (- old-length input-length))))
      (= new-value old-value) (set-selection! el caret-start)
      (>= new-length old-length) (set-selection! el (calc-caret-pos-add format-chars caret-start old-value new-value))
      (< new-length old-length) (set-selection! el (calc-caret-pos-remove format-chars caret-start old-value new-value old-length new-length))
      :else nil)))
