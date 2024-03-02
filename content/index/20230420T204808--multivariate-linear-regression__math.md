+++
title = "multivariate linear regression"
author = ["mahmood"]
date = 2024-03-01T00:00:00+02:00
tags = ["math"]
draft = false
+++

<div class="dummy">

we can easily extend from [univariate linear regression](20230313T223324--univariate-linear-regression__math.org) to **multivariate linear regression**, such that each example <img src="/ltximg/c5b5a77413e.svg" alt="\(x_j\)" style="height: 0.9386em; vertical-align: -0.4347em; display: inline-block" class="org-latex org-latex-inline" /> is an n-element [vector](20231222T075237--vector__math.org). our [hypothesis space](20230225T234105--hypothesis-space__.org) is the [set](20240205T193039--set__math.org) of [function](20231111T073425--function__math.org)s of the form <br/>


<div id="org546bfd5" class="equation-container">
<span class="equation">
<img src="/ltximg/cf579180e2d.svg" alt="\begin{equation}
  h_{\brm{w}}(\brm{x}_j) = w_0+w_1x_{j,1} + \dots + w_nx_{j,n} = w_0+\sum_{i} w_ix_{j,i}
\end{equation}
" style="height: 2.4318em; vertical-align: -0.5392em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

the <img src="/ltximg/8b280dcceee.svg" alt="\(w_0\)" style="height: 0.7744em; vertical-align: -0.2646em; display: inline-block" class="org-latex org-latex-inline" /> term, the intercept, stands out as different from the others. we can fix that by inventing a dummy input attribute, <img src="/ltximg/19e017cfdd2.svg" alt="\(x_j,_0\)" style="height: 0.9386em; vertical-align: -0.4347em; display: inline-block" class="org-latex org-latex-inline" />, which is defined as always equal to 1. then <img src="/ltximg/b3aa9a90473.svg" alt="\(h\)" style="height: 0.8157em; vertical-align: -0.0590em; display: inline-block" class="org-latex org-latex-inline" /> is simply the [dot product](20231222T081158--dot-product__math.org) of the weights and the input vector, or equivalently the [matrix](20231222T075331--matrix__math.org) product of the [transpose](20240205T193137--transpose__math.org) of the weights and hte input vector: <br/>
<img src="/ltximg/83ee73f8516.svg" alt="\[ h_{\brm{w}}(\brm{x}_j) = \brm{w} \cdot \brm{x}_j = \brm{w}^\mathrm{T} \brm{x}_j = \sum_{i} w_ix_{j,i} \]" style="height: 2.4318em; display: block" class="org-latex org-latex-block" /> <br/>
the best vector of weights, <img src="/ltximg/11d57a698dd.svg" alt="\(\brm{w}^*\)" style="height: 0.8399em; vertical-align: -0.0541em; display: inline-block" class="org-latex org-latex-inline" /> minimizes squared-error loss over the examples: <br/>
<img src="/ltximg/6d02734701e.svg" alt="\[ \brm{w}^* = \argmin_{\brm{w}} \sum_{j} L_2(y_j, \brm{w} \cdot \brm{x}_j) \]" style="height: 2.6040em; display: block" class="org-latex org-latex-block" /> <br/>
here we have a [continuous](20230422T235527--continuous-function__math.org) weight space and we cannot find a closed-form solution. we use a hill-climbing algorithm that follows the gradient of the function. in this case, because we are trying to minimize the loss, we will use [gradient descent](20230422T235640--gradient-descent__math.org). we choose any starting point in weight space--here, a point in the <img src="/ltximg/e14a6a00361.svg" alt="\((w_0,w_1)\)" style="height: 1.0686em; vertical-align: -0.2893em; display: inline-block" class="org-latex org-latex-inline" /> plane--and then move to a neighboring point that is downhill, repeating until we converge on the minimum possible loss, recall that the sum is minimized when the partial derivatives with respect to each of the weights are zero <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/d7d19703dcc.svg" alt="\begin{alg}
  \(\brm{w} \gets\) any point in the parameter space\;
  \Repeat{convergence} {
    \For {\(w_i \in \bm{\mathrm{w}}\)} {
      \(w_i \gets w_i - \alpha \frac{\partial}{\partial w_i} Loss(\bm{\mathrm{w}})\)\;
    }
  }
\end{alg}
" style="height: 7.2637em; vertical-align: -0.5392em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

the parameter <img src="/ltximg/cbd564c09b7.svg" alt="\(\alpha\)" style="height: 0.5688em; vertical-align: -0.0649em; display: inline-block" class="org-latex org-latex-inline" /> (the step size), is usually called the [learning rate](20230423T002354--learning-rate__.org) when we are trying to minimize loss in a learning problem. it can be a fixed constant, or it can decay over time as the learning process proceeds. <br/>
here the update equation for each weight <img src="/ltximg/70f47c1f892.svg" alt="\(w_i\)" style="height: 0.7723em; vertical-align: -0.2625em; display: inline-block" class="org-latex org-latex-inline" /> is <br/>
<img src="/ltximg/d65ba9be3da.svg" alt="\[ w_i \gets w_i + \alpha \sum_{j} x_{j,i}(y_j-h_{\brm{w}}(\brm{x}_j)) \]" style="height: 2.6040em; display: block" class="org-latex org-latex-block" /> <br/>
in this equation we're considering not only the derivative of the loss function with respect to the weight we're updating but the derivatives of all of the loss functions with respect to each weight (unlike in the pseudocode above), i think this might be better but im not sure, i should evaluate both methods <br/>
it is also possible to solve analytically for the <img src="/ltximg/7ebeb498b8a.svg" alt="\(\brm{w}\)" style="height: 0.5472em; vertical-align: -0.0541em; display: inline-block" class="org-latex org-latex-inline" /> that minimizes loss. let <img src="/ltximg/b7cb764337c.svg" alt="\(\brm{y}\)" style="height: 0.7883em; vertical-align: -0.2981em; display: inline-block" class="org-latex org-latex-inline" /> be the vector of outputs for the training examples, and <img src="/ltximg/d54f652f064.svg" alt="\(\brm{X}\)" style="height: 0.7510em; vertical-align: -0.0502em; display: inline-block" class="org-latex org-latex-inline" /> be the data matrix, i.e., the matrix of inputs with one n-dimensional example per row. then the solution <br/>
<img src="/ltximg/d841d238d2f.svg" alt="\[ \brm{w}^* = (\brm{X}^T\brm{X})^{-1}\brm{X}^T\brm{y} \]" style="height: 1.5233em; display: block" class="org-latex org-latex-block" /> <br/>
minimizes the squared error. <br/>

<div class="note">

im confused a little here, if we can solve for it analyitcally then why would we consider gradient descent in the first place (solving analytically requires less computing time)? <br/>
turns out, when fitting higher degree functions its not analytically solvable <br/>

</div>

with univariate linear regression we didnt have to worry about [overfitting](20230420T220702--overfitting__.org). but with multivariate linear regression in high-dimensional spaces it is possible that some dimension that is actually irrelevant appears by chance to be useful, resulting in overfitting. <br/>
thus, it is common to use **regularization** on multivariate linear functions to avoid overfitting. recall that with regularization we minimize the total cost of a hypothesis, counting both the empirical loss and the complexity of the hypothesis: <br/>
<img src="/ltximg/f9528b2d4b3.svg" alt="\[ Cost(h) = EmpLoss(h) + \lambda\ Complexity(h) \]" style="height: 1.5409em; display: block" class="org-latex org-latex-block" /> <br/>
for linear functions the complexity can be specified as a function of the weights. we can consider a family of regularization functions: <br/>
<img src="/ltximg/10b493377dd.svg" alt="\[ Complexity(h_{\brm{w}}) = L_q(\brm{w}) = \sum_{i} |w_i|^q \]" style="height: 2.4318em; display: block" class="org-latex org-latex-block" /> <br/>
as with loss functions, with <img src="/ltximg/657c7493fe4.svg" alt="\(q=1\)" style="height: 1.0039em; vertical-align: -0.3030em; display: inline-block" class="org-latex org-latex-inline" />, we have <img src="/ltximg/2e9fe2a34d2.svg" alt="\(L_1\)" style="height: 0.9624em; vertical-align: -0.2557em; display: inline-block" class="org-latex org-latex-inline" /> regularization, which minimizes the sum of the absolute values; with <img src="/ltximg/4246313eab5.svg" alt="\(q=2\)" style="height: 1.0019em; vertical-align: -0.3030em; display: inline-block" class="org-latex org-latex-inline" />, <img src="/ltximg/7d7b9b7b626.svg" alt="\(L_2\)" style="height: 0.9617em; vertical-align: -0.2550em; display: inline-block" class="org-latex org-latex-inline" /> regularization minimizes the sum of squares. which regularization function should you pick? that depends on the specific problem, but <img src="/ltximg/2e9fe2a34d2.svg" alt="\(L_1\)" style="height: 0.9624em; vertical-align: -0.2557em; display: inline-block" class="org-latex org-latex-inline" /> regularization has an important advantage: it tends to produce a **sparse model**. that is, it often sets many weights to zero, effictively declaring the corresponding attributes to be irrelevant--just as <img src="/ltximg/41388b6dd2e.svg" alt="\textsc{Decision-Tree-Learning}" style="height: 0.7697em; vertical-align: -0.0609em; display: inline-block" class="org-latex org-latex-inline" /> does (although by a different mechanism).hypothesis that discard attributes can be easier for a human to understand, and may be less likely to overfit <br/>
(Peter Norvig, Stuart J. Russell, 2020) <br/>

</div>


## fitting higher order functions {#fitting-higher-order-functions}

if we wanted to fit a given data set to a higher order function, say quadratic, we just introduce <img src="/ltximg/71a37455f85.svg" alt="\(n\)" style="height: 0.5629em; vertical-align: -0.0590em; display: inline-block" class="org-latex org-latex-inline" /> new weights and apply them to <img src="/ltximg/938ef9f2512.svg" alt="\(x_{j,1}^2 \dots x_{j,n}^2\)" style="height: 1.3434em; vertical-align: -0.4347em; display: inline-block" class="org-latex org-latex-inline" /> and add these new symbols to the [hypothesis set equation](#org546bfd5) <br/>


## lisp implementation {#lisp-implementation}

enough talk, its time to implement this in [common lisp](20230224T163920--common-lisp__code_language.org) <br/>
first we need the data <br/>

```lisp
(defun generate-points-along-line (n)
  "generate `n' points along a line with some random noise."
  (let ((slope 2)          ; slope of the line
        (intercept 1)      ; y-intercept of the line
        (noise-variance 5) ; variance of the noise
        (points))      ; list of points
    (dotimes (i n)
      (let* ((x (+ i 1))
             (y (+ (* slope x) intercept))
             (noise (/ (random (* 1000 noise-variance)) 1000))) ; random noise
        (push (list x (+ y noise)) points)))
    points))

(generate-points-along-line 5)
```

| 5 | 1616/125  |
|---|-----------|
| 4 | 1449/125  |
| 3 | 2567/250  |
| 2 | 9027/1000 |
| 1 | 509/125   |

we need a way to visualize this so we use tikz <br/>

```lisp
(defun tikz-points-plot (points)
  "turn points into a runnable latex tikz block"
  ;; (format t "#+begin_src latex :file (temp-file \"svg\") :exports results~%\\begin{tikzpicture}")
  (format t "\\begin{tikzpicture}")
  (let ((max-x (car (car points)))
        (min-x (car (car points)))
        (max-y (car (car points)))
        (min-y (car (car points))))
    (loop for point in points
          do (cond ((> (car point) max-x) (setf max-x (car point))))
             (cond ((< (car point) min-x) (setf min-x (car point))))
             (cond ((> (nth 1 point) max-y) (setf max-y (nth 1 point))))
             (cond ((< (nth 1 point) min-y) (setf min-y (nth 1 point)))))
    (format t "\\begin{axis}[axis lines=middle, xlabel=\(x\), ylabel=\(y\), xmin=~a, xmax=~a, ymin=~a, ymax=~a]"
            (cond ((< min-x 0) (* 1.1 min-x))
                  ((> min-x 0) (* 0.9 min-x))
                  ((equal 0 min-x) -1))
            (cond ((< max-x 0) (* 0.9 max-x))
                  ((> max-x 0) (* 1.1 max-x))
                  ((equal 0 max-x) 1))
            (cond ((< min-y 0) (* 1.1 min-y))
                  ((> min-y 0) (* 0.9 min-y))
                  ((equal 0 min-y) -1))
            (cond ((< max-y 0) (* 0.9 max-y))
                  ((> max-y 0) (* 1.1 max-y))
                  ((equal 0 max-y) 1))))
  (loop for point in points
        do (format t "\\draw[fill=blue] (axis cs: ~a,~a) circle (2pt);" (car point) (nth 1 point)))
  ;; (format t "\\end{axis}\\end{tikzpicture}~%#+end_src"))
  (format t "\\end{axis}\\end{tikzpicture}"))

(let ((points (generate-points-along-line 50)))
  (tikz-points-plot points))
```


<div class="equation-container">
<span class="equation">
<img src="/ltximg/b4591f981e7.svg" alt="\begin{tikzpicture}\begin{axis}[axis lines=middle, xlabel=(x), ylabel=(y), xmin=0.9, xmax=55.0, ymin=4.8537, ymax=113.7444]\draw[fill=blue] (axis cs: 50,10207/100) circle (2pt);\draw[fill=blue] (axis cs: 49,25851/250) circle (2pt);\draw[fill=blue] (axis cs: 48,20043/200) circle (2pt);\draw[fill=blue] (axis cs: 47,95833/1000) circle (2pt);\draw[fill=blue] (axis cs: 46,97391/1000) circle (2pt);\draw[fill=blue] (axis cs: 45,95361/1000) circle (2pt);\draw[fill=blue] (axis cs: 44,90699/1000) circle (2pt);\draw[fill=blue] (axis cs: 43,89501/1000) circle (2pt);\draw[fill=blue] (axis cs: 42,88427/1000) circle (2pt);\draw[fill=blue] (axis cs: 41,42747/500) circle (2pt);\draw[fill=blue] (axis cs: 40,10526/125) circle (2pt);\draw[fill=blue] (axis cs: 39,20059/250) circle (2pt);\draw[fill=blue] (axis cs: 38,78953/1000) circle (2pt);\draw[fill=blue] (axis cs: 37,39399/500) circle (2pt);\draw[fill=blue] (axis cs: 36,9423/125) circle (2pt);\draw[fill=blue] (axis cs: 35,75403/1000) circle (2pt);\draw[fill=blue] (axis cs: 34,69453/1000) circle (2pt);\draw[fill=blue] (axis cs: 33,8377/125) circle (2pt);\draw[fill=blue] (axis cs: 32,68111/1000) circle (2pt);\draw[fill=blue] (axis cs: 31,16801/250) circle (2pt);\draw[fill=blue] (axis cs: 30,30591/500) circle (2pt);\draw[fill=blue] (axis cs: 29,7548/125) circle (2pt);\draw[fill=blue] (axis cs: 28,12387/200) circle (2pt);\draw[fill=blue] (axis cs: 27,5883/100) circle (2pt);\draw[fill=blue] (axis cs: 26,7188/125) circle (2pt);\draw[fill=blue] (axis cs: 25,52279/1000) circle (2pt);\draw[fill=blue] (axis cs: 24,53403/1000) circle (2pt);\draw[fill=blue] (axis cs: 23,25537/500) circle (2pt);\draw[fill=blue] (axis cs: 22,11697/250) circle (2pt);\draw[fill=blue] (axis cs: 21,383/8) circle (2pt);\draw[fill=blue] (axis cs: 20,1038/25) circle (2pt);\draw[fill=blue] (axis cs: 19,40289/1000) circle (2pt);\draw[fill=blue] (axis cs: 18,19597/500) circle (2pt);\draw[fill=blue] (axis cs: 17,1789/50) circle (2pt);\draw[fill=blue] (axis cs: 16,37267/1000) circle (2pt);\draw[fill=blue] (axis cs: 15,31771/1000) circle (2pt);\draw[fill=blue] (axis cs: 14,16151/500) circle (2pt);\draw[fill=blue] (axis cs: 13,3796/125) circle (2pt);\draw[fill=blue] (axis cs: 12,25129/1000) circle (2pt);\draw[fill=blue] (axis cs: 11,26699/1000) circle (2pt);\draw[fill=blue] (axis cs: 10,23529/1000) circle (2pt);\draw[fill=blue] (axis cs: 9,9577/500) circle (2pt);\draw[fill=blue] (axis cs: 8,17457/1000) circle (2pt);\draw[fill=blue] (axis cs: 7,16497/1000) circle (2pt);\draw[fill=blue] (axis cs: 6,13201/1000) circle (2pt);\draw[fill=blue] (axis cs: 5,2967/250) circle (2pt);\draw[fill=blue] (axis cs: 4,1531/125) circle (2pt);\draw[fill=blue] (axis cs: 3,1489/125) circle (2pt);\draw[fill=blue] (axis cs: 2,4869/500) circle (2pt);\draw[fill=blue] (axis cs: 1,5393/1000) circle (2pt);\end{axis}\end{tikzpicture}
" style="height: 17.5669em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

i decided not to go with random data for now though... maybe later <br/>
i got a [small dataset](/home/mahmooz/brain/notes/data/98/c4ead7-c672-419f-84c2-f7f147be1111/heart.data.csv) from <https://www.scribbr.com/statistics/multiple-linear-regression/>, the goal is to find the rates of heart disease as a function of biking to work and smoking, so we have 3 weights to adjust (never forget the intercept!) <br/>

```lisp
(defun loss (actual-output desired-output)
  (expt (- actual-output desired-output) 2))

(defun generate-hypothesis (data)
  (let* ((hypothesis-degree (length (car data)))
         (weights (loop for i from 0 below hypothesis-degree collect (/ (random 100) 100))))
    (values
     (lambda (vector) (reduce #'+ (mapcar #'* (append '(1) vector) weights)))
     weights)))

(defun predict (hypothesis vector)
  (funcall hypothesis vector))

(multiple-value-bind (hypothesis weights) (generate-hypothesis '((1 2 3) (2 3 4)))
  (print (predict hypothesis '(1 1))))
```

```text
103/100
```

then we gotta load the dataset using cl-csv <br/>

```lisp
(ql:quickload "cl-csv")
(defparameter *data* (cl-csv:read-csv (pathname data-file)))
(setf *data* (mapcar #'cdr *data*)) ;; get rid of the first column, its useless
(defun parse-float (mystr) ;; hacky way..
  (read-from-string mystr))
(setf *data* (mapcar (lambda (mylist) (mapcar #'parse-float mylist)) (cdr *data*)))
```

now we implement the gradient descent <br/>

```lisp
(defun predict-all (data hypothesis weights)
  (let ((total-loss 0))
    (loop for vector in data
          do (setf total-loss (+ (predict hypothesis vector) total-loss))
             (let ((desired-output (car vector))
                   (x-values (cdr vector))
                   (this-examples-loss 0))
               (setf this-examples-loss (loss desired-output (predict hypothesis x-values)))
               (setf total-loss (+ total-loss this-examples-loss))))
    total-loss))

(setq *learning-rate* 0.000000005)
(multiple-value-setq (hypothesis weights) (generate-hypothesis *data*))
(predict-all *data* hypothesis weights)

(defun step-down-gradient-descent (data weights)
  (let ((old-weights (copy-list weights))
        (counter 0))
    (map-into
     weights
     (lambda (weight)
       (let ((change-in-weight 0))
         (loop for example in data
               do (let ((desired-output (car example))
                        (actual-output (reduce #'+ (mapcar #'* (append '(1) (cdr example)) old-weights)))
                        (my-x (nth counter example)))
                    ;; (format t "~a * (~a - ~a)~%" my-x desired-output actual-output)
                    (incf change-in-weight (* my-x (- desired-output actual-output))))
                  (incf weight (* change-in-weight *learning-rate*)))
         (incf counter))
       weight)
     weights)))

;; (loop for i from 0 below 10
;;       do (step-down-gradient-descent *data* weights)
;;          (format t "weights: ~a, loss: ~a~%" weights (predict-all *data* hypothesis weights)))

;; (loop for i from 0 below 100000
;;       do (step-down-gradient-descent *data* weights))
(loop for i from 0 below 100000
      do (step-down-gradient-descent *data* weights))
(format t "weights: ~a, loss: ~a~%" weights (predict-all *data* hypothesis weights))
```

```text
weights: (15.316911 -0.2039037 0.17000248), loss: 10013.191
```

the function we got is very close to the actual function which is (according to the article i lined) `heart disease = 15 + (-0.2*biking) + (0.178*smoking)` <br/>

<div class="note">

messing with the learning rate dramatically affected the final output, took me a bit of time to find a good value <br/>
if we had higher float decision we would've gotten better results but after some amount of iterations the loss just stops changing and converges to a specific number <br/>
the loss might seem like a high number at first but its really just because the values themselves in the dataset arent small <br/>

</div>

<div class="note">

after messing with the learning-rate value, i realized how huge of an effect it had on the behavior of the algorithm, a slightly bigger step size causes the loss and weights to diverge for some reason and i cant see why <br/>

</div>

