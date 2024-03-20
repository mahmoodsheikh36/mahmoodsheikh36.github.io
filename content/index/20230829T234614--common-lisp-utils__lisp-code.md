+++
title = "common lisp utils"
author = ["mahmood"]
date = 2024-03-05T00:00:00+02:00
tags = ["lisp-code"]
draft = false
+++

a collection of utility functions for common lisp. <br/>


## arrays {#arrays}

<a id="code-snippet--src-array-dims"></a>
```lisp
;; (defun array-width (2d-array)
;;   (car (cdr (array-dimensions 2d-array))))
;; (defun array-height (2d-array)
;;   (car (array-dimensions 2d-array)))
(defun array-rows (arr)
  "number of rows in array"
  (elt (array-dimensions arr) (- (length (array-dimensions arr)) 2)))
(defun array-cols (arr)
  "number of columns in array"
  (elt (array-dimensions arr) (- (length (array-dimensions arr)) 1)))
(defun array-depth (arr)
  "depth of a tensor of the third order"
  (elt (array-dimensions arr) (- (length (array-dimensions arr)) 3)))
(defun array-size (arr)
  (array-total-size arr))
```

turn multidimensional (nested) list into array: <br/>

<a id="code-snippet--src-list-to-array"></a>
```lisp
(defun list-dimensions (list)
  (if (and (eq (type-of list) 'cons) (eq (type-of (car list)) 'cons))
      (append (list (length list)) (list-dimensions (car list)))
      (list (length list))))
(defun list->array (list)
  (make-array (list-dimensions list)
              :initial-contents list))
```

turn multidimensional array into a list: <br/>

<a id="code-snippet--src-array-to-list"></a>
```lisp
(defun array->list (array)
  (let* ((dimensions (array-dimensions array))
         (depth      (1- (length dimensions)))
         (indices    (make-list (1+ depth) :initial-element 0)))
    (labels ((recurse (n)
               (loop for j below (nth n dimensions)
                     do (setf (nth n indices) j)
                     collect (if (= n depth)
                                 (apply #'aref array indices)
                                 (recurse (1+ n))))))
      (recurse 0))))
```

to generate an array with random elements of arbitrary dimensions: <br/>

<a id="code-snippet--src-random-tensor"></a>
```lisp
(defun random-float (min max)
  (+ min (* (random 1.0) (- max min))))
(defun random-list (dims &optional (min -1) (max 1))
  (let* ((dim (car dims)))
    (let ((list (make-list dim)))
      (if (> (length dims) 1)
          (loop for i from 0 below dim
                do (setf (elt list i) (random-list (cdr dims))))
          (loop for i from 0 below dim
                do (setf (elt list i) (random-float min max))))
      list)))
(defun random-tensor (dims &optional (min -1) (max 1))
  "an inefficient way, but ill take it for now."
  (if (atom dims)
      (list->array (random-list (list dims) min max))
      (list->array (random-list dims min max))))
```

the following utility functions are similar to `map` but for arrays: <br/>
we sometimes may wanna iterate through a multidimensional array and do an action on each of its indicies, the following utility functions helps do that easily, without nesting loops, although notice that this function iterates through every cell in the array, so it may not be what you want (efficiency wise) if you only want to apply something to only a portion of the array <br/>

<a id="code-snippet--src-array-map"></a>
```lisp
(defun array-map (fn &rest arrays)
  "apply fn to elements of arrays. return a new array with the results"
  (apply #'array-map-into
         (append (list fn (make-array (array-dimensions (car arrays))))
                 arrays)))
(defun array-map-into (fn dest-array &rest arrays)
  "call fn with elements of arrays. write results into dest-array"
  (dotimes (i (array-total-size (car arrays)) dest-array)
    (setf (row-major-aref dest-array i)
          (apply fn (loop for array in arrays collect (row-major-aref array i))))))
(defun array-map-indicies-into (array fn dest-array)
  "apply fn to each combination of indicies of array, return a new array with the results, the argument to fn should be the indicies list, e.g. (3 5 3) to be used with aref, e.g. (aref arr 3 5 3)"
  (dotimes (i (array-total-size array) dest-array)
    (setf (row-major-aref dest-array i)
          (apply fn (list array (from-row-major (array-dimensions dest-array) i))))))
(defun array-map-indicies (array fn)
  "see description of array-map-by-idx-into, this function is an alias for it that provides a new array as dest-array"
  (array-map-indicies-into array fn (make-array (array-dimensions array))))
(defun aref-indicies (arr idx-list)
  "to shorten code, not having to use apply everywhere"
  (apply #'aref (cons arr idx-list)))
```

a utility function to copy a subarray of an array <br/>

<a id="code-snippet--src-subarray"></a>
```lisp
(defun subarray (a offsets dims)
  "copy a subarray of a given array
example usage:
(subarray #2A((0.70462835 0.7893367 0.3833828)
              (0.8126608 0.6136594 0.37239313)
              (0.44657052 0.4761132 0.9504193)) '(1 0) '(2 2))"
  (let* ((b (make-array dims)))
    (subarray-util a b nil nil offsets (array-dimensions a) dims)
    b))

(defun subarray-util (a b a-indicies b-indicies offsets a-dims b-dims)
  (if b-dims
      (let ((use-b-dims (eq (length a-dims) (length b-dims)))
            (offset (car offsets)))
        (if use-b-dims
            (loop for i from offset below (+ offset (car b-dims))
                  do (subarray-util
                      a
                      b
                      (append a-indicies (list i))
                      (append b-indicies (list (- i offset)))
                      (cdr offsets)
                      (cdr a-dims)
                      (cdr b-dims)))
            (subarray-util
             a
             b
             (append a-indicies (list offset))
             nil
             (cdr offsets)
             (cdr a-dims)
             b-dims)))
      (setf (apply #'aref (cons b b-indicies))
            (apply #'aref (cons a a-indicies)))))
```

a utility that copies the n-th element of an array, which is an array itself: <br/>

<a id="code-snippet--src-array-nth"></a>
```lisp
(defun copy-array-nth (arr idx)
  "return a copy of the nth subarray of an array"
  (let* ((new-dims (cdr (array-dimensions arr)))
         (offsets (append (list idx) (make-list (length new-dims) :initial-element 0))))
    (subarray
     arr
     offsets
     new-dims)))
(defun array-nth (arr idx)
  "return the nth subarray of an array without copying"
  (let ((new-dims (cdr (array-dimensions arr))))
    (make-array new-dims
                :displaced-to arr
                :displaced-index-offset (* idx (reduce #'* new-dims)))))
```

a utility function to copy a subarray into an array <br/>

<a id="code-snippet--src-copy-into-array"></a>
```lisp
(defun copy-into-array (a b &optional (offsets (make-list (length (array-dimensions a)) :initial-element 0)))
  "copy an (possibly smaller) array (b) into another array (a)"
  (copy-into-array-util a b nil nil offsets (array-dimensions a) (array-dimensions b))
  a)

(defun copy-into-array-util (a b a-indicies b-indicies offsets a-dims b-dims)
  (if b-dims
      (let ((use-b-dims (eq (length a-dims) (length b-dims)))
            (offset (car offsets)))
        (if use-b-dims
            (loop for i from offset below (+ offset (car b-dims))
                  do (copy-into-array-util
                      a
                      b
                      (append a-indicies (list i))
                      (append b-indicies (list (- i offset)))
                      (cdr offsets)
                      (cdr a-dims)
                      (cdr b-dims)))
            (copy-into-array-util
             a
             b
             (append a-indicies (list offset))
             nil
             (cdr offsets)
             (cdr a-dims)
             b-dims)))
      (setf (apply #'aref (cons a a-indicies))
            (apply #'aref (cons b b-indicies)))))
```

a utility function to copy an array into anothers highest dimension <br/>

<a id="code-snippet--src-set-array-nth"></a>
```lisp
(defun set-array-nth (arr other-arr idx)
  "example usage: (set-array-nth (make-array '(4 4 4)) (random-tensor '(4 4)) 1)"
  (copy-into-array
   arr
   other-arr
   (append (list idx) (make-list (length (array-dimensions other-arr)) :initial-element 0))))
```

vectorizing an array (turning it into a 1d vector) is pretty simple: <br/>

<a id="code-snippet--src-vectorize-array"></a>
```lisp
(defun vectorize-array (arr)
  "turn an array into a 1d vector"
  (make-array (list (array-total-size arr)) :displaced-to arr))
```

a function that refers the row-major index of a cell of an array (shamelessly stolen from <https://groups.google.com/g/comp.lang.lisp/c/CM3MQkyOTHk?pli=1>): <br/>

<a id="code-snippet--src-row-major"></a>
```lisp
(defun array-index-row-major (array rmi)
  "basically the inverse of array-row-major-index, example:
(defvar *a* (make-array '(7 4 9 5)))
(array-row-major-index *a* 3 2 8 1) => 671
(array-index-row-major *a* 671) => (3 2 8 1)
"
  (reduce #'(lambda (dim x)
              (nconc
               (multiple-value-list (truncate (car x) dim))
               (cdr x)))
          (cdr (array-dimensions array))
          :initial-value (list rmi)
          :from-end t))

(defun from-row-major (dims row-major-idx)
  "same function as array-index-row-major, but not specific to arrays"
  (reduce #'(lambda (dim x)
              (nconc
               (multiple-value-list (truncate (car x) dim))
               (cdr x)))
          (cdr dims)
          :initial-value (list row-major-idx)
          :from-end t))
```

a function to simply copy/clone an array/tensor: <br/>

<a id="code-snippet--src-copy-array"></a>
```lisp
(defun copy-array (arr)
  (let ((new-arr (make-array (array-dimensions arr))))
    (copy-into-array new-arr arr)))
```

reducing an array with a function: <br/>

<a id="code-snippet--src-reduce-array"></a>
```lisp
(defun reduce-array (arr fn)
  (apply #'reduce
         (list fn (make-array (array-total-size arr) :displaced-to arr))))
```


## sequences {#sequences}

a function to get the last element in a list (or any sequence): <br/>

<a id="code-snippet--src-last-elt"></a>
```lisp
(defun last-elt (seq)
  "example usage: CL-USER> (last-elt (vector 1 2 3)) => 3"
  (elt seq (1- (length seq))))
```

converting nested lists to nested vectors: <br/>

```lisp
(defun list->vector (mylist)
  "convert nested lists into nested vectors"
  (coerce
   (loop for sublist in mylist
         collect
         (cond
           ((equal (type-of sublist) 'cons) (list->vector sublist))
           (t sublist)))
   'vector))
(let ((mylist '((1 2) 3 4)))
  (print (list->vector mylist))) ;; => #(#(1 2) 3 4) 
```

or this shorter one: <br/>

<a id="code-snippet--src-list-to-vector"></a>
```lisp
(defun list->vector (list)
  (if (atom list) list
      (map 'vector #'list->vector list)))
```

get the type of a sequence (`type-of` is unreliable): <br/>

```lisp
(defun seq-type (seq)
  "get the type of a sequence (`type-of' is unreliable), returns one of 3 values, so its not completely general as the types are hardcoded"
  (typecase seq
    (string 'string)
    (vector 'vector)
    (list 'list)))
```

a concatenate function that acts with respect to the sequence type: <br/>

```lisp
(defun concatenate-type-aware (seqs)
  "get the type of a sequence (`type-of' is unreliable), returns one of 3 values, so its not completely general as the types are hardcoded, the type of sequence to return is determined by the first sequences in the list of sequences
example usages:
CL-USER> (concatenate-type-aware '((1 2 3) (1)))
(1 2 3 1)
CL-USER> (concatenate-type-aware '(\"hi\" \"hey\"))
\"hihey\"
CL-USER> (concatenate-type-aware '(#(1 2 3) #(10)))
#(1 2 3 10)
"
  (apply #'concatenate (list* (seq-type (first seqs)) seqs)))
(defun concatenate* (seqs)
  "an alias for `concatenate-type-aware'"
  (funcall #'concatenate-type-aware seqs))
```

delete nth element of a sequence: <br/>

```lisp
(defun remove-nth (seq n)
  "remove the n-th element from the sequence `seq', returns a new sequence with the desired result, the function doesnt modify `seq'"
  (remove-if (lambda (_) t) seq :start n :count 1))
```

split a sequence into singleton sequences (of the same type as the original sequence) <br/>

```lisp
(defun seq-singletons (seq)
  "turn a sequence into a list of singletons (1-element sequences) of the same type"
  (let ((my-seq-type (seq-type seq)))
    (map 'list my-seq-type seq)))
```


## argmin and argmax {#argmin-and-argmax}

<a id="code-snippet--src-argmin-argmax"></a>
```lisp
(defun argmax (s &key (key #'identity))
  "returns value,index of element in sequence s that maximizes the key function"
  (when s
    (let* ((m (reduce #'max s :key key))
           (idx (position m s :key key)))
      (values (elt s idx) idx))))

(defun argmin (s &key (key #'identity))
  "returns value,index of element in sequence s that minimizes the key function"
  (when s
    (let* ((m (reduce #'min s :key key))
           (idx (position m s :key key)))
      (values (elt s idx) idx))))
```


## open url in browser {#open-url-in-browser}

open a url by its default browser/app on macos/windows/linux <br/>

<a id="code-snippet--src-open-browser"></a>
```lisp
;; from https://github.com/eudoxia0/trivial-open-browser/blob/master/src/trivial-open-browser.lisp

(defparameter +format-string+
              #+(or win32 mswindows windows)
              "explorer ~S"
              #+(or macos darwin)
              "open ~S"
              #-(or win32 mswindows macos darwin windows)
              "xdg-open ~S")

(defun open-browser-through-shell (url)
  "run a shell command to open `url`."
  (uiop:run-program (format nil +format-string+ url)))

(defparameter
 *browser-function*
 #'open-browser-through-shell
 "the function that gets called with the URL to open the browser. defaults to
  `#'open-browser-through-shell`.")

(defun open-browser (url)
  "open the browser to `url`."
  (funcall *browser-function* url))
```

