+++
title = "common lisp math utils"
author = ["mahmood"]
date = 2024-03-05T00:00:00+02:00
tags = ["lisp-code"]
draft = false
+++

some math utilities for [common lisp](20230224T163920--common-lisp__code_language.org) <br/>


## essential functions {#essential-functions}

<a id="code-snippet--src-math-functions"></a>
```lisp
(defun sigmoid (x)
  (cond ((< x -70) 0) ;; to avoid float overflow
        (t (/ 1 (1+ (exp (- x)))))))

(defun sigmoid-derivative (x)
  (* (sigmoid x) (- 1 (sigmoid x))))

(defun relu (x)
  (max x 0))

(defun relu-derivative (x)
  "derivative of relu is undefined at x=0, but here we return 0 for x=0 too"
  (if (> x 0)
      1
      0))
```


## vectors {#vectors}

<div class="note">

these functions work, but some use lists and some do redundant operations, they need efficiency improvement <br/>

</div>

<a id="code-snippet--src-vector"></a>
```lisp
;; this might need efficiency improvement, not sure
(defun vector-add (vec1 &rest more-vecs)
  "apply vector addition to two collections"
  (apply #'map (append (list 'vector #'+) (append (list vec1) more-vecs))))

;; this definitely needs efficiency improvement, we can just subtract instead of negating vectors then adding them
(defun vector-sub (vec1 &rest more-vecs)
  "substract each vector in more-vecs from vec1"
  (apply #'vector-add
         (append (list vec1)
                 (map 'list
                      (lambda (vec2)
                        (map 'vector #'- vec2))
                      more-vecs))))

(defun vector-dot (vec1 vec2)
  "dot product"
  (reduce #'+ (map 'vector #'* vec1 vec2)))

(defun vector-mul (vec1 scalar)
  "multiply vectors elements by scalar"
  (map 'vector (lambda (num) (* num scalar)) vec1))

(defun vector-sum (vec1 &rest more-vecs)
  "sum of vectors elements"
  (reduce #'+ (map
               'vector
               (lambda (vec2) (reduce #'+ vec2))
               (append (list vec1) more-vecs))))

(defun vector-elements-prod (vec)
  (reduce #'* vec))
```


## matrices {#matrices}

im using arrays for matrices, which use different functions than vectors/lists <br/>
matrix multiplication: <br/>

<a id="code-snippet--src-matrix-mul"></a>
```lisp
(defun matrix-mul (arr1 arr2)
  "multiply 2 matrices, arr1*arr2"
  (let* ((arr1-rows (array-rows arr1))
         ;; (arr1-cols (car (cdr arr1-dim))) ;; no need
         (arr2-rows (array-rows arr2))
         (arr2-cols (array-cols arr2))
         (out-arr (make-array (list arr1-rows arr2-cols))))
    (loop for arr1-row from 0 below arr1-rows
          do (loop for arr2-col from 0 below arr2-cols
                   do (let ((sum 0))
                        (loop for i from 0 below arr2-rows
                              do (let* ((cell1 (aref arr1 arr1-row i))
                                        (cell2 (aref arr2 i arr2-col)))
                                   (incf sum (* cell1 cell2))))
                        (setf (aref out-arr arr1-row arr2-col) sum))))
    out-arr))
```

<a id="code-snippet--src-tensor-convolution"></a>
```lisp
(defun tensor-convolution-size (img-dims ker-dims)
  "return the expected size of the convolution img*ker"
  (mapcar (lambda (img-d ker-d) (- img-d (1- ker-d)))
          img-dims
          ker-dims))

(defun tensor-convolution (img ker)
  "convolve two tensors of any ranks/dimensions
example usage: (tensor-convolution #(1 2 3 4 5) #(6 7))"
  (let ((ker-dims (array-dimensions ker))
        (img-dims (array-dimensions img)))
    ;; need to make ker-dims,out-dims same rank/order as img-dims
    (loop while (< (length ker-dims) (length img-dims))
          do (push 1 ker-dims)
             (setf ker (make-array ker-dims :displaced-to ker)))
    (let ((out (make-array (tensor-convolution-size img-dims ker-dims)
                           :initial-element 0)))
      (tensor-convolution-util img ker out nil nil (array-dimensions out))
      out)))

(defun tensor-convolution-util (img ker out
                                img-indicies out-indicies
                                out-dims)
  "this util function for tensor-convolution assumes img,ker,out are all of the same rank/order"
  (if out-dims
      ;; iterate through each cell in the output tensor
      (loop for out-i from 0 below (car out-dims)
            ;; iterate through each kernel-sized block in the input tensor
            ;; (length img-indicies) gives us the index of the dimension we're at
            do (loop for img-i from out-i below (+ out-i
                                                   (array-dimension
                                                    ker
                                                    (length img-indicies)))
                     do (tensor-convolution-util
                         img
                         ker
                         out
                         (append img-indicies (list img-i))
                         (append out-indicies (list out-i))
                         (cdr out-dims))))
      (let* ((img-cell (apply #'aref (cons img img-indicies)))
             (flipped-kernel-indicies (mapcar #'-
                                              (mapcar #'1- (array-dimensions ker))
                                              (mapcar #'- img-indicies out-indicies)))
             (ker-cell (apply #'aref (cons ker flipped-kernel-indicies))))
        (incf (apply #'aref (cons out out-indicies)) (* img-cell ker-cell)))))
```


### matrix multiplication implementation comparison between lists and arrays {#matrix-multiplication-implementation-comparison-between-lists-and-arrays}

with lists: <br/>

```lisp
(time
 (progn
   (matrix-multiplication
    (make-list 200 :initial-element (make-list 300 :initial-element 10)) ;; 200x300
    (make-list 300 :initial-element (make-list 200 :initial-element 20))) ;; 300x200
   10)) ;; to prevent repl from printing
;; Evaluation took:
;;   4.010 seconds of real time
;;   4.007356 seconds of total run time (4.007356 user, 0.000000 system)
;;   99.93% CPU
;;   10,006,237,672 processor cycles
;;   1,625,600 bytes consed

;; 10 (4 bits, #xA, #o12, #b1010)
```

with arrays: <br/>

```lisp
(time
 (progn
   (matrix-mul
    (make-array '(350 200) :initial-element 10) ;; 200x300
    (make-array '(200 300) :initial-element 20))  ;; 300x200
   10))  ;; to prevent repl from printing
;; Evaluation took:
;;   0.156 seconds of real time
;;   0.154420 seconds of total run time (0.154420 user, 0.000000 system)
;;   98.72% CPU
;;   385,821,252 processor cycles
;;   1,280,048 bytes consed

;; 10 (4 bits, #xA, #o12, #b1010)
```


### 2d transformation matrices {#2d-transformation-matrices}

[linearly mapping a grid to another](20230602T050340--2d-transformations__math.org): <br/>

<a id="code-snippet--src-map-grid"></a>
```lisp
(defun map-grid-matrix (src-x-range dest-x-range src-y-range dest-y-range)
  (let ((src-x-min (elt src-x-range 0))
        (dest-x-min (elt dest-x-range 0))
        (src-y-min (elt src-y-range 0))
        (dest-y-min (elt dest-y-range 0))
        (src-x-max (elt src-x-range 1))
        (dest-x-max (elt dest-x-range 1))
        (src-y-max (elt src-y-range 1))
        (dest-y-max (elt dest-y-range 1)))
    (make-array
     '(3 3)
     :initial-contents
     `((,(/ (- dest-x-max dest-x-min) (- src-x-max src-x-min)) 0 ,(/ (+ (* (- src-x-min) dest-x-max) (* dest-x-min src-x-max)) (- src-x-max src-x-min)))
       (0 ,(/ (- dest-y-max dest-y-min) (- src-y-max src-y-min)) ,(/ (+ (* (- src-y-min) dest-y-max) (* dest-y-min src-y-max)) (- src-y-max src-y-min)))
       (0 0 1)))))
(defun map-grid (mat src-x-range dest-x-range src-y-range dest-y-range)
  "apply the grid mapping matrix and return a new matrix"
  (matrix-mul
   (map-grid-matrix src-x-range dest-x-range src-y-range dest-y-range)
   mat))
```

example usage: <br/>

```lisp
(matrix-mul (map-grid-matrix '(-1 1) '(0 10) '(0 1) '(0 -10)) #2A((0.5) (0.5) (1)))
```

```text
#2A((7.5) (-5.0) (1.0))
```


## [linearly mapping discrete range onto another](20230608T174403--linearly-mapping-an-interval-onto-another__math.org) {#linearly-mapping-discrete-range-onto-another--20230608t174403-linearly-mapping-an-interval-onto-another-math-dot-org}

<a id="code-snippet--src-map-num"></a>
```lisp
(defun map-num (num src-min src-max dest-min dest-max)
  "(map-num 0.5 -1 1 -50 50) => 25.0"
  (/ (- (+ (* (- num src-min) (- dest-max dest-min)) (* dest-min src-max)) (* dest-min src-min)) (- src-max src-min)))
```


## sets {#sets}

a good resource <https://www.cs.cmu.edu/Groups/AI/html/cltl/clm/node152.html> <br/>
the builtin `set-difference` sometimes reverses the lists it returns for some reason and its bothersome, e.g.: <br/>

```lisp
(set-difference '(K P N A D) '(K P)) ; => (D A N)
```

so i had to use my own: <br/>

<a id="code-snippet--src-set-diff"></a>
```lisp
(defun set-diff (l1 l2 &key (acc '()) (test #'eql))
  (cond ((null l1) (nreverse acc))
        ((null l2) (nreverse (append (reverse l1) acc)))
        ((member (car l1) l2 :test test) (set-diff (cdr l1) l2 :acc acc :test test))
        (t (set-diff (cdr l1) l2 :acc (cons (car l1) acc) :test test))))
```

example: <br/>

```lisp
(set-diff '(K P N A D) '(K P)) ; => (N A D)
```

a function to check whether a list is a [subset](20240205T193040--subset__math.org) of another, with the `test` being `:equal` <br/>

```lisp
(defun subset? (list1 list2)
  "check if improper subset with test `equal', shorthand for `subsetp'
consider the difference:
CL-USER> (subsetp '((1) (2)) '((1) (2)))
NIL
CL-USER> (subset? '((1) (2)) '((1) (2)))
T"
  (subsetp list1 list2 :test #'equal))
```

check for set equality: <br/>

```lisp
(defun set-equal? (list1 list2)
  "the 'mathematical' way of doing it, lol, could've used `set-exclusive-or'"
  (and (subset? list1 list2) (subset? list2 list1)))
```


## [combinatorics](20221204T105120--combinatorics__math.org) {#combinatorics--20221204t105120-combinatorics-math-dot-org}

generating [variation](20221204T105120--combinatorics__math.org)s: <br/>

```lisp
(defun variations (seq &optional (len (length seq)))
  "get all variations of a sequence, order matters, repetition isnt allowed"
  (if (equal len 1)
      (seq-singletons seq)
      (apply
       #'append
       (loop for i from 0 below (length seq)
             collect (let ((subvariations (variations (remove-nth seq i) (1- len))))
                       (loop for variation in subvariations
                             collect (concatenate-type-aware
                                      (list (subseq seq i (1+ i)) variation))))))))
(defun variations-upto-length (seq &optional (len (length seq)))
  (apply #'append
         (loop for i from 1 upto len
               collect (variations seq i))))
```

generating [variations with repetition](20221204T105120--combinatorics__math.org): <br/>

```lisp
(defun variations-with-repetition (seq &optional (len (length seq)))
  "generate all variations of the sequence `seq' of length `len', such that repetition is allowed, returns a list of sequences of length (length(seq)+1)^len"
  (let ((singletons (map 'list (seq-type seq) seq))) ;; construct a singleton (one element sequences) from every element
    (if (equal len 1)
        singletons
        (let ((variations (variations-with-repetition seq (1- len))))
          (concatenate-type-aware 
           (loop for variation in variations
                 collect (loop for singleton in singletons
                               collect (concatenate-type-aware
                                        (list singleton variation)))))))))

(defun variations-with-repetition-upto-length (seq len)
  "generate all variations of the sequence `seq' of lengths 1 to `len', such that repetition is allowed, returns a list of sequences"
  (concatenate-type-aware 
   (loop for i from 1 upto len
         collect (variations-with-repetition seq i))))
```

generating [combination](20221204T105120--combinatorics__math.org)s: <br/>
to make the problem easier to tackle i took some examples: <br/>
assume the sequence "ashey" and the length 3, the [base case](20230207T142803--base-case__.org) for [recursion](20221105T001640--recursive-function__cs.org) would be a sequence of length 3, so if we were to progress letter by letter through the sequence we'd get to a function call with the sequence "hey" and the length 3, then when we exit recursion calls back to the call with the sequence "shey", we need to consider the cell "s" with 3 other sequences, "he","hy","ey", which itself is a combination with the sequence "hey" and length 2, so a call to the function should take care of getting the combinations of the subsequences its concatenating which requires a recursive call to the function by with a reduced length and a reduced subsequence, we may use this as a base case, so when we get a length of 2 we return every combination of length 2, this will satisfy the call with the sequence "hey" and length 3 which in turn satisfies the call with the sequence "shey" and length 4, and so on.. <br/>

```lisp
(defun combinations (seq len)
  "generate all combinations of the sequence `seq' of length `len', such that repetition is allowed and order doesnt matter, returns a list of sequences of length binom{length(seq)}{len}"
  (if (>= len (length seq))
      (list seq)
      (if (equal len 1)
          (seq-singletons seq)
          (if (equal len 2) ;; is this "base case" necessary?
              (concatenate-type-aware
               (loop for i from 0 below (length seq)
                     collect (loop for j from (1+ i) below (length seq)
                                   collect (concatenate-type-aware
                                            (list (subseq seq i (1+ i))
                                                  (subseq seq j (1+ j)))))))
              (concatenate-type-aware
               (loop for i from 0 upto (- (length seq) len)
                     collect (map 'list
                                  (lambda (subcombination)
                                    (concatenate-type-aware
                                     (list (subseq seq i (1+ i)) subcombination)))
                                  (combinations (subseq seq (1+ i)) (1- len)))))))))

(defun combinations-upto-length (seq &optional (max-len (length seq)))
  "generate all combinations of the sequence `seq' of lengths 1 to `max-len', such that repetition is allowed and order doesnt matter, returns a list of sequences"
  (concatenate-type-aware
   (loop for i from 1 upto max-len
         collect (combinations seq i))))
```

