+++
title = "artificial intelligence homework 3"
author = ["mahmood"]
description = "homework on constraint satisfaction problems"
date = 2024-03-01T00:00:00+02:00
tags = ["math"]
draft = false
+++

<div class="note">

scroll to the end if you're only interested in the solution and the steps in raw text.. <br/>

</div>

homework on constraint satisfaction problem <br/>
using [common lisp graphs](../20230813T012934--working-with-graphs-in-common-lisp__lispcode.md) <br/>
graph image from homework: <br/>
![](/ox-hugo/Tue_Aug_22_08:26:06_PM_IDT_2023.png) <br/>

-   gotta solve this as an **rgba map coloring problem** <br/>
-   make use of forward checking <br/>
-   variable ordering heuristic: prioritize vertices that are the least constraining (least edges, least constraints on others) to most constraining (most edges), in case of a draw, use the variable with the most remaining colors (least constrained), if there is another tie, choose the leftmost vertex in the constraint graph <br/>
-   no value ordering heuristics <br/>

first we define the graph: <br/>

```lisp
(defparameter
    *mygraph*
  (make-graph
   :adjacency-list
   '((a . ((b . nil) (c . nil) (d . nil))) ;; 3 edges connected to A
     (b . ((c . nil) (j . nil) (e . nil)))
     (c . ((f . nil)))
     (l . ((m . nil) (e . nil) (g . nil) (d . nil)))
     (d . ((g . nil)))
     (j . ((i . nil) (g . nil)))
     (m . ((f . nil) (n . nil)))
     (e . ((h . nil) (g . nil)))
     (g . ((i . nil) (f . nil) (o . nil)))
     (f . ((o . nil) (i . nil)))
     (i . ((k . nil) (n . nil)))
     (o . ((p . nil) (h . nil)))
     (h . ((k . nil)))
     (n . ((k . nil) (p . nil)))
     (p . ((k . nil)))
     (k . nil))))
```

visualize it with tikz: <br/>

```lisp
(graph-generate-tikz *mygraph* :node-distance 80)
```


<div class="equation-container">
<span class="equation">
<img src="/ltximg/c75d9773861.svg" alt="\begin{tikzpicture}
\graph[spring electrical layout, node distance=80] {
A -- B,
A -- C,
A -- D,
B -- C,
B -- J,
B -- E,
C -- F,
L -- M,
L -- E,
L -- G,
L -- D,
D -- G,
J -- I,
J -- G,
M -- F,
M -- N,
E -- H,
E -- G,
G -- I,
G -- F,
G -- O,
F -- O,
F -- I,
I -- K,
I -- N,
O -- P,
O -- H,
H -- K,
N -- K,
N -- P,
P -- K,
};\end{tikzpicture}
" style="height: 33.7388em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

a constraint satisfaction problem is defined by its variables, domains and contrains <br/>
since i had written the problem in its constraint graph form, i had to write a function to convert it into its "original" form, its variables, domains and it defines the constraint of neighbors not having the same color, which is from the map coloring problem (so this method is not really general, but specific to this problem): <br/>

```lisp
(defstruct constraint-satisfaction-problem
  variables domains constraints)

(defun parse-color-map-constraint-graph (g)
  "input g is the constraint graph of the map coloring problem, the function assumes the vector 'values-assoc-list' represents the values of variables, it should take the form '((var1 value1) (var2 value2)) which allows it to be used as an association list"
  (let ((variables)
        (domains)
        (constraints))
    (setf variables (map 'list #'car (graph-adjacency-list g)))
    ;; each domain's variable is just a list of the symbols r,g,b,a representing the 3 colors and the alpha value (in this case alpha is just another "color" tho...)
    (setf domains (make-array (length variables) :initial-element '(r g b a)))
    (setf
     constraints
     (list
      (lambda (csp gr values-assoc-list) ;; one constraint, no equal values for neighboring states
        (let ((wrong nil))
          (loop for entry in (graph-adjacency-list g) do
            (let ((source-vertex (car entry))
                  (edges (cdr entry)))
              (loop for edge in edges do
                (let ((dest-vertex (edge-dest edge)))
                  (when (and (assoc source-vertex values-assoc-list)
                             (assoc dest-vertex values-assoc-list))
                    (setf wrong
                          (or wrong
                              (equal (cdr (assoc source-vertex values-assoc-list))
                                     (cdr (assoc dest-vertex values-assoc-list))))))))))
          (not wrong)))))
    ;; return those values
    (make-constraint-satisfaction-problem
     :variables variables
     :domains domains
     :constraints constraints)))
```

here i implement a generalized algorithm for constraint satisfaction problem solving: <br/>

```lisp
(defun solve-csp-with-graph (csp gr variable-ordering-heuristics
                             &optional (values-alist nil))
  "`csp' is the constraint satisfaction problem, `gr' is the constraint graph, variable-ordering-heuristics are heuristics to decide which variable to pick, applied in order on each branching step until one returns a variable to pick, if no heuristics pick a variable the first nonvisited one will be picked (unless no variables are left with options in which case the function terminates), this doesnt support value ordering heuristics, cuz my homework didnt ask for it :( and i cba, this function may modify the domains during forward checking inference"
  (with-slots (variables domains constraints) csp
    (let* ((unvisited-vars (set-diff
                            variables
                            (mapcar #'car values-alist)
                            :test #'equal))
           (unvisited-reduced-vars unvisited-vars))
      (let ((next-var nil))
        ;; apply the heuristics in order, the reduced list of variables returned by every heuristic is passed to the next heuristic which applies its own reductions and passes it on to the next heuristic, and so on..
        (loop for heuristic in variable-ordering-heuristics if (not next-var)
              do (setf unvisited-reduced-vars (funcall heuristic csp gr unvisited-reduced-vars)))
        ;; last heuristic, choose the leftmost variable in the reduced list of variables, which could be just a list of one item if the preceding heuristics reduced it enough, eitherway, we grab the leftmost variable in the list
        (setf next-var (car unvisited-reduced-vars))
        (when (not next-var)
          (return-from solve-csp-with-graph values-alist)) ;; no vars left
        ;; handle the variable we picked
        (let* ((variable-index (position next-var variables))
               (domain (elt domains variable-index)))
          (when (not domain) ;; no values left for variable, we hit a deadend
;;            (format t "~A has no available values, we hit a deadend, propagating back~%" next-var)
            (return-from solve-csp-with-graph nil))
          ;; no need to check legality of picking a value, since we're doing forward checking and pruning the domains beforehand
          (loop for value in domain do
            (let ((domain-removed-values-alist nil) ;; store the modifications done to the domains so we may undo them if needed
                  (new-values-alist (append values-alist (list (cons next-var value)))))
              (loop for neighbor-var in (graph-vertex-neighbors gr next-var) do
                ;; apply forward checking and modify the domains of connected variables accordingly
                (let* ((neighbor-var-idx (position neighbor-var variables))
                       (neighbor-var-domain (elt domains neighbor-var-idx)))
                  (loop for neighbor-var-value in neighbor-var-domain do
                    (loop for constraint in constraints do
                      (let* ((hypothetical-values-alist (cons (cons neighbor-var
                                                                    neighbor-var-value)
                                                              new-values-alist))
                             (legal (funcall constraint csp gr hypothetical-values-alist)))
                        (when (not legal)
                          (setf domain-removed-values-alist
                                (cons (cons neighbor-var-idx
                                            value)
                                      domain-removed-values-alist))
                          (setf (elt domains neighbor-var-idx)
                                (remove value neighbor-var-domain))))))))
;;             (format t "chose variable ~A with value ~A~%" next-var value)
;;             (format t
;;                     "after forward checking for ~A, domains: ~A~%"
;;                      next-var
;;                      (mapcar (lambda (var)
;;                                (if (assoc var new-values-alist)
;;                                    (format nil "~A=~A" var (cdr (assoc var new-values-alist)))
;;                                    (format nil "~A\\(\\in\\)~A" var (elt domains (position var variables)))))
;;                              variables))
              (let ((propped-values-alist
                      (solve-csp-with-graph csp
                                            gr
                                            variable-ordering-heuristics
                                            new-values-alist)))
                (if propped-values-alist
                    (return-from solve-csp-with-graph propped-values-alist)
                    ;; we hit a deadend somewhere, loop to the next value, but undo modifications
                    (loop for removed-value-entry in domain-removed-values-alist do
                      (let ((modified-var-idx (car removed-value-entry)) ;; the index of the var/domain that was modified
                            (removed-value (cdr removed-value-entry))) ;; the value that was removed
                        (setf (elt domains modified-var-idx)
                              (cons removed-value (elt domains modified-var-idx))))))))))))))

;; this could be implementing by looping through all variables once for each variable 'x' to apply the constraint functions and check how many other variables 'x' constraints, this would take O(n^2), here it takes O(n) because we're just using the constraint graph and can get the number of edges directly
(defun least-constraining-variable-heuristic (csp gr variable-list)
  "checks which variable applies the least constraints on others, only return it if no other variable applies the same number of constraints"
  (multiple-value-bind (var var-idx)
      (argmin
       variable-list
       :key (lambda (variable)
              (length (graph-vertex-neighbors gr variable))))
    (let ((args-to-return)) ;; list of the args that are argmin
      (loop for other-var in variable-list do
        (when (equal (length (graph-vertex-neighbors gr other-var))
                     (length (graph-vertex-neighbors gr var)))
          (setf args-to-return (cons other-var args-to-return))))
      args-to-return)))

(defun most-constrained-variable-heuristic (csp gr variable-list)
  "checks which variable has the least possible values (most constrained)"
  (with-slots (domains variables) csp
    (multiple-value-bind (var var-idx)
        (argmax
         variable-list
         :key (lambda (variable)
                (let ((domain (elt domains (position variable variables))))
                  (length domain))))
      (let ((args-to-return)) ;; list of the args that are argmin
        (loop for other-var in variable-list do
          (when (equal (length (elt domains (position other-var variables)))
                       (length (elt domains (position var variables))))
            (setf args-to-return (cons other-var args-to-return))))
        args-to-return))))

(defun least-constrained-variable-heuristic (csp gr variable-list)
  "checks which variable has the least possible values (most constrained)"
  (with-slots (domains variables) csp
    (multiple-value-bind (var var-idx)
        (argmin
         variable-list
         :key (lambda (variable)
                (let ((domain (elt domains (position variable variables))))
                  (length domain))))
      (let ((args-to-return)) ;; list of the args that are argmin
        (loop for other-var in variable-list do
          (when (equal (length (elt domains (position other-var variables)))
                       (length (elt domains (position var variables))))
            (setf args-to-return (cons other-var args-to-return))))
        args-to-return))))
```

applying the algorithm: <br/>

```lisp
(defun solve ()
  (solve-csp-with-graph
   (PARSE-COLOR-MAP-CONSTRAINT-GRAPH *mygraph*)
   *mygraph*
   (list #'least-constraining-variable-heuristic #'most-constrained-variable-heuristic)))
```

```lisp
(solve)
```

```text
((A . R) (J . R) (M . R) (H . R) (P . R) (C . G) (D . G) (E . G) (O . G) (N . B) (B . B) (L . B) (K . A) (F . B) (I . G) (G . A))
```

visualizing the constraint graph with the colors we obtained by solving the problem: <br/>

```lisp
(let ((values-assoc-list (solve)))
  (graph-generate-tikz
   *mygraph*
   :node-distance 80
   :format-function (lambda (variable)
                      (format nil "~A ~A" variable
                              (case (cdr (assoc variable values-assoc-list))
                                (r "[red]")
                                (g "[green]")
                                (b "[blue]")
                                (a "[orange]")
                                (otherwise "")))))) ;; otherwise for NIL, or use (nil), nil alone doesnt work with case
```


<div class="equation-container">
<span class="equation">
<img src="/ltximg/75ac78f56e5.svg" alt="\begin{tikzpicture}
\graph[spring electrical layout, node distance=80] {
A [red] -- B [blue],
A [red] -- C [green],
A [red] -- D [green],
B [blue] -- C [green],
B [blue] -- J [red],
B [blue] -- E [green],
C [green] -- F [blue],
L [blue] -- M [red],
L [blue] -- E [green],
L [blue] -- G [orange],
L [blue] -- D [green],
D [green] -- G [orange],
J [red] -- I [green],
J [red] -- G [orange],
M [red] -- F [blue],
M [red] -- N [blue],
E [green] -- H [red],
E [green] -- G [orange],
G [orange] -- I [green],
G [orange] -- F [blue],
G [orange] -- O [green],
F [blue] -- O [green],
F [blue] -- I [green],
I [green] -- K [orange],
I [green] -- N [blue],
O [green] -- P [red],
O [green] -- H [red],
H [red] -- K [orange],
N [blue] -- K [orange],
N [blue] -- P [red],
P [red] -- K [orange],
K [orange],
};\end{tikzpicture}
" style="height: 33.7388em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

showing the inference/decision steps (i went back and modified the algorithm to print stuff) <br/>
this just shows the domain of variables at each step <br/>

```lisp
(solve)
```

chose variable A with value R <br/>
after forward checking for A, domains: (A=R B<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A) C<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A) <br/>
                                        L<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(R G B A) D<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A) <br/>
                                        J<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(R G B A) M<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(R G B A) <br/>
                                        E<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(R G B A) G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(R G B A) <br/>
                                        F<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(R G B A) I<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(R G B A) <br/>
                                        O<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(R G B A) H<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(R G B A) <br/>
                                        N<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(R G B A) P<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(R G B A) <br/>
                                        K<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(R G B A)) <br/>
chose variable J with value R <br/>
after forward checking for J, domains: (A=R B<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A) C<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A) <br/>
                                        L<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(R G B A) D<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A) J=R <br/>
                                        M<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(R G B A) E<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(R G B A) <br/>
                                        G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A) F<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(R G B A) <br/>
                                        I<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A) O<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(R G B A) <br/>
                                        H<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(R G B A) N<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(R G B A) <br/>
                                        P<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(R G B A) K<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(R G B A)) <br/>
chose variable M with value R <br/>
after forward checking for M, domains: (A=R B<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A) C<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A) <br/>
                                        L<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A) D<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A) J=R M=R <br/>
                                        E<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(R G B A) G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A) <br/>
                                        F<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A) I<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A) <br/>
                                        O<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(R G B A) H<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(R G B A) <br/>
                                        N<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A) P<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(R G B A) <br/>
                                        K<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(R G B A)) <br/>
chose variable H with value R <br/>
after forward checking for H, domains: (A=R B<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A) C<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A) <br/>
                                        L<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A) D<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A) J=R M=R <br/>
                                        E<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A) G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A) <br/>
                                        F<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A) I<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A) <br/>
                                        O<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A) H=R N<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A) <br/>
                                        P<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(R G B A) K<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A)) <br/>
chose variable P with value R <br/>
after forward checking for P, domains: (A=R B<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A) C<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A) <br/>
                                        L<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A) D<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A) J=R M=R <br/>
                                        E<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A) G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A) <br/>
                                        F<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A) I<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A) <br/>
                                        O<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A) H=R N<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A) P=R <br/>
                                        K<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A)) <br/>
chose variable C with value G <br/>
after forward checking for C, domains: (A=R B<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B A) C=G L<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A) <br/>
                                        D<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A) J=R M=R E<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A) <br/>
                                        G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A) F<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B A) <br/>
                                        I<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A) O<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A) H=R <br/>
                                        N<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A) P=R K<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A)) <br/>
chose variable D with value G <br/>
after forward checking for D, domains: (A=R B<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B A) C=G L<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B A) D=G <br/>
                                        J=R M=R E<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A) G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B A) <br/>
                                        F<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B A) I<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A) <br/>
                                        O<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A) H=R N<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A) P=R <br/>
                                        K<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A)) <br/>
chose variable E with value G <br/>
after forward checking for E, domains: (A=R B<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B A) C=G L<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B A) D=G <br/>
                                        J=R M=R E=G G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B A) F<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B A) <br/>
                                        I<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A) O<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A) H=R <br/>
                                        N<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A) P=R K<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A)) <br/>
chose variable O with value G <br/>
after forward checking for O, domains: (A=R B<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B A) C=G L<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B A) D=G <br/>
                                        J=R M=R E=G G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B A) F<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B A) <br/>
                                        I<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A) O=G H=R N<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A) <br/>
                                        P=R K<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G B A)) <br/>
chose variable N with value G <br/>
after forward checking for N, domains: (A=R B<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B A) C=G L<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B A) D=G <br/>
                                        J=R M=R E=G G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B A) F<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B A) <br/>
                                        I<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B A) O=G H=R N=G P=R <br/>
                                        K<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B A)) <br/>
chose variable B with value B <br/>
after forward checking for B, domains: (A=R B=B C=G L<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B A) D=G J=R M=R <br/>
                                        E=G G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B A) F<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B A) <br/>
                                        I<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B A) O=G H=R N=G P=R <br/>
                                        K<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B A)) <br/>
chose variable L with value B <br/>
after forward checking for L, domains: (A=R B=B C=G L=B D=G J=R M=R E=G <br/>
                                        G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(A) F<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B A) I<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B A) <br/>
                                        O=G H=R N=G P=R K<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B A)) <br/>
chose variable K with value B <br/>
after forward checking for K, domains: (A=R B=B C=G L=B D=G J=R M=R E=G <br/>
                                        G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(A) F<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B A) I<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(A) <br/>
                                        O=G H=R N=G P=R K=B) <br/>
chose variable F with value B <br/>
after forward checking for F, domains: (A=R B=B C=G L=B D=G J=R M=R E=G <br/>
                                        G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(A) F=B I<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(A) O=G H=R N=G <br/>
                                        P=R K=B) <br/>
chose variable I with value A <br/>
after forward checking for I, domains: (A=R B=B C=G L=B D=G J=R M=R E=G <br/>
                                        G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />NIL F=B I=A O=G H=R N=G P=R K=B) <br/>
G has no available values, we hit a deadend, propagating back <br/>
chose variable F with value A <br/>
after forward checking for F, domains: (A=R B=B C=G L=B D=G J=R M=R E=G <br/>
                                        G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />NIL F=A I<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />NIL O=G H=R N=G <br/>
                                        P=R K=B) <br/>
I has no available values, we hit a deadend, propagating back <br/>
chose variable K with value A <br/>
after forward checking for K, domains: (A=R B=B C=G L=B D=G J=R M=R E=G <br/>
                                        G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(A) F<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(A B) I<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B) <br/>
                                        O=G H=R N=G P=R K=A) <br/>
chose variable F with value A <br/>
after forward checking for F, domains: (A=R B=B C=G L=B D=G J=R M=R E=G <br/>
                                        G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />NIL F=A I<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B) O=G H=R N=G <br/>
                                        P=R K=A) <br/>
chose variable I with value B <br/>
after forward checking for I, domains: (A=R B=B C=G L=B D=G J=R M=R E=G <br/>
                                        G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />NIL F=A I=B O=G H=R N=G P=R K=A) <br/>
G has no available values, we hit a deadend, propagating back <br/>
chose variable F with value B <br/>
after forward checking for F, domains: (A=R B=B C=G L=B D=G J=R M=R E=G <br/>
                                        G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(A) F=B I<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />NIL O=G H=R N=G <br/>
                                        P=R K=A) <br/>
I has no available values, we hit a deadend, propagating back <br/>
chose variable L with value A <br/>
after forward checking for L, domains: (A=R B=B C=G L=A D=G J=R M=R E=G <br/>
                                        G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B) F<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B A) I<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(A B) <br/>
                                        O=G H=R N=G P=R K<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B A)) <br/>
chose variable K with value B <br/>
after forward checking for K, domains: (A=R B=B C=G L=A D=G J=R M=R E=G <br/>
                                        G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B) F<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B A) I<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(A) <br/>
                                        O=G H=R N=G P=R K=B) <br/>
chose variable F with value B <br/>
after forward checking for F, domains: (A=R B=B C=G L=A D=G J=R M=R E=G <br/>
                                        G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />NIL F=B I<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(A) O=G H=R N=G <br/>
                                        P=R K=B) <br/>
chose variable I with value A <br/>
after forward checking for I, domains: (A=R B=B C=G L=A D=G J=R M=R E=G <br/>
                                        G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />NIL F=B I=A O=G H=R N=G P=R K=B) <br/>
G has no available values, we hit a deadend, propagating back <br/>
chose variable F with value A <br/>
after forward checking for F, domains: (A=R B=B C=G L=A D=G J=R M=R E=G <br/>
                                        G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B) F=A I<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />NIL O=G H=R N=G <br/>
                                        P=R K=B) <br/>
I has no available values, we hit a deadend, propagating back <br/>
chose variable K with value A <br/>
after forward checking for K, domains: (A=R B=B C=G L=A D=G J=R M=R E=G <br/>
                                        G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B) F<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(A B) I<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B) <br/>
                                        O=G H=R N=G P=R K=A) <br/>
chose variable F with value A <br/>
after forward checking for F, domains: (A=R B=B C=G L=A D=G J=R M=R E=G <br/>
                                        G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B) F=A I<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B) O=G H=R N=G <br/>
                                        P=R K=A) <br/>
chose variable I with value B <br/>
after forward checking for I, domains: (A=R B=B C=G L=A D=G J=R M=R E=G <br/>
                                        G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />NIL F=A I=B O=G H=R N=G P=R K=A) <br/>
G has no available values, we hit a deadend, propagating back <br/>
chose variable F with value B <br/>
after forward checking for F, domains: (A=R B=B C=G L=A D=G J=R M=R E=G <br/>
                                        G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />NIL F=B I<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />NIL O=G H=R N=G <br/>
                                        P=R K=A) <br/>
I has no available values, we hit a deadend, propagating back <br/>
chose variable B with value A <br/>
after forward checking for B, domains: (A=R B=A C=G L<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B A) D=G J=R M=R <br/>
                                        E=G G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(A B) F<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B A) <br/>
                                        I<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(A B) O=G H=R N=G P=R <br/>
                                        K<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B A)) <br/>
chose variable L with value B <br/>
after forward checking for L, domains: (A=R B=A C=G L=B D=G J=R M=R E=G <br/>
                                        G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(A) F<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B A) I<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(A B) <br/>
                                        O=G H=R N=G P=R K<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B A)) <br/>
chose variable K with value B <br/>
after forward checking for K, domains: (A=R B=A C=G L=B D=G J=R M=R E=G <br/>
                                        G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(A) F<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B A) I<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(A) <br/>
                                        O=G H=R N=G P=R K=B) <br/>
chose variable F with value B <br/>
after forward checking for F, domains: (A=R B=A C=G L=B D=G J=R M=R E=G <br/>
                                        G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(A) F=B I<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(A) O=G H=R N=G <br/>
                                        P=R K=B) <br/>
chose variable I with value A <br/>
after forward checking for I, domains: (A=R B=A C=G L=B D=G J=R M=R E=G <br/>
                                        G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />NIL F=B I=A O=G H=R N=G P=R K=B) <br/>
G has no available values, we hit a deadend, propagating back <br/>
chose variable F with value A <br/>
after forward checking for F, domains: (A=R B=A C=G L=B D=G J=R M=R E=G <br/>
                                        G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />NIL F=A I<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />NIL O=G H=R N=G <br/>
                                        P=R K=B) <br/>
I has no available values, we hit a deadend, propagating back <br/>
chose variable K with value A <br/>
after forward checking for K, domains: (A=R B=A C=G L=B D=G J=R M=R E=G <br/>
                                        G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(A) F<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(A B) I<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B) <br/>
                                        O=G H=R N=G P=R K=A) <br/>
chose variable F with value A <br/>
after forward checking for F, domains: (A=R B=A C=G L=B D=G J=R M=R E=G <br/>
                                        G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />NIL F=A I<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B) O=G H=R N=G <br/>
                                        P=R K=A) <br/>
chose variable I with value B <br/>
after forward checking for I, domains: (A=R B=A C=G L=B D=G J=R M=R E=G <br/>
                                        G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />NIL F=A I=B O=G H=R N=G P=R K=A) <br/>
G has no available values, we hit a deadend, propagating back <br/>
chose variable F with value B <br/>
after forward checking for F, domains: (A=R B=A C=G L=B D=G J=R M=R E=G <br/>
                                        G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(A) F=B I<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />NIL O=G H=R N=G <br/>
                                        P=R K=A) <br/>
I has no available values, we hit a deadend, propagating back <br/>
chose variable L with value A <br/>
after forward checking for L, domains: (A=R B=A C=G L=A D=G J=R M=R E=G <br/>
                                        G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B) F<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B A) I<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(A B) <br/>
                                        O=G H=R N=G P=R K<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B A)) <br/>
chose variable K with value B <br/>
after forward checking for K, domains: (A=R B=A C=G L=A D=G J=R M=R E=G <br/>
                                        G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B) F<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B A) I<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(A) <br/>
                                        O=G H=R N=G P=R K=B) <br/>
chose variable F with value B <br/>
after forward checking for F, domains: (A=R B=A C=G L=A D=G J=R M=R E=G <br/>
                                        G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />NIL F=B I<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(A) O=G H=R N=G <br/>
                                        P=R K=B) <br/>
chose variable I with value A <br/>
after forward checking for I, domains: (A=R B=A C=G L=A D=G J=R M=R E=G <br/>
                                        G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />NIL F=B I=A O=G H=R N=G P=R K=B) <br/>
G has no available values, we hit a deadend, propagating back <br/>
chose variable F with value A <br/>
after forward checking for F, domains: (A=R B=A C=G L=A D=G J=R M=R E=G <br/>
                                        G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B) F=A I<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />NIL O=G H=R N=G <br/>
                                        P=R K=B) <br/>
I has no available values, we hit a deadend, propagating back <br/>
chose variable K with value A <br/>
after forward checking for K, domains: (A=R B=A C=G L=A D=G J=R M=R E=G <br/>
                                        G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B) F<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(A B) I<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B) <br/>
                                        O=G H=R N=G P=R K=A) <br/>
chose variable F with value A <br/>
after forward checking for F, domains: (A=R B=A C=G L=A D=G J=R M=R E=G <br/>
                                        G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B) F=A I<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B) O=G H=R N=G <br/>
                                        P=R K=A) <br/>
chose variable I with value B <br/>
after forward checking for I, domains: (A=R B=A C=G L=A D=G J=R M=R E=G <br/>
                                        G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />NIL F=A I=B O=G H=R N=G P=R K=A) <br/>
G has no available values, we hit a deadend, propagating back <br/>
chose variable F with value B <br/>
after forward checking for F, domains: (A=R B=A C=G L=A D=G J=R M=R E=G <br/>
                                        G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />NIL F=B I<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />NIL O=G H=R N=G <br/>
                                        P=R K=A) <br/>
I has no available values, we hit a deadend, propagating back <br/>
chose variable N with value B <br/>
after forward checking for N, domains: (A=R B<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B A) C=G L<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B A) D=G <br/>
                                        J=R M=R E=G G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(A B) F<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B A) <br/>
                                        I<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G A) O=G H=R N=B P=R <br/>
                                        K<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G A)) <br/>
chose variable B with value B <br/>
after forward checking for B, domains: (A=R B=B C=G L<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B A) D=G J=R M=R <br/>
                                        E=G G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(A B) F<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B A) <br/>
                                        I<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G A) O=G H=R N=B P=R <br/>
                                        K<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G A)) <br/>
chose variable L with value B <br/>
after forward checking for L, domains: (A=R B=B C=G L=B D=G J=R M=R E=G <br/>
                                        G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(A) F<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B A) I<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G A) <br/>
                                        O=G H=R N=B P=R K<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G A)) <br/>
chose variable K with value G <br/>
after forward checking for K, domains: (A=R B=B C=G L=B D=G J=R M=R E=G <br/>
                                        G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(A) F<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(B A) I<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(A) <br/>
                                        O=G H=R N=B P=R K=G) <br/>
chose variable F with value B <br/>
after forward checking for F, domains: (A=R B=B C=G L=B D=G J=R M=R E=G <br/>
                                        G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(A) F=B I<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(A) O=G H=R N=B <br/>
                                        P=R K=G) <br/>
chose variable I with value A <br/>
after forward checking for I, domains: (A=R B=B C=G L=B D=G J=R M=R E=G <br/>
                                        G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />NIL F=B I=A O=G H=R N=B P=R K=G) <br/>
G has no available values, we hit a deadend, propagating back <br/>
chose variable F with value A <br/>
after forward checking for F, domains: (A=R B=B C=G L=B D=G J=R M=R E=G <br/>
                                        G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />NIL F=A I<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />NIL O=G H=R N=B <br/>
                                        P=R K=G) <br/>
I has no available values, we hit a deadend, propagating back <br/>
chose variable K with value A <br/>
after forward checking for K, domains: (A=R B=B C=G L=B D=G J=R M=R E=G <br/>
                                        G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(A) F<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(A B) I<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G) <br/>
                                        O=G H=R N=B P=R K=A) <br/>
chose variable F with value A <br/>
after forward checking for F, domains: (A=R B=B C=G L=B D=G J=R M=R E=G <br/>
                                        G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />NIL F=A I<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G) O=G H=R N=B <br/>
                                        P=R K=A) <br/>
chose variable I with value G <br/>
after forward checking for I, domains: (A=R B=B C=G L=B D=G J=R M=R E=G <br/>
                                        G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />NIL F=A I=G O=G H=R N=B P=R K=A) <br/>
G has no available values, we hit a deadend, propagating back <br/>
chose variable F with value B <br/>
after forward checking for F, domains: (A=R B=B C=G L=B D=G J=R M=R E=G <br/>
                                        G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(A) F=B I<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(G) O=G H=R N=B <br/>
                                        P=R K=A) <br/>
chose variable I with value G <br/>
after forward checking for I, domains: (A=R B=B C=G L=B D=G J=R M=R E=G <br/>
                                        G<img src="/ltximg/47adc2624f6.svg" alt="\(\in\)" style="height: 0.6650em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />(A) F=B I=G O=G H=R N=B P=R K=A) <br/>
chose variable G with value A <br/>
after forward checking for G, domains: (A=R B=B C=G L=B D=G J=R M=R E=G G=A F=B <br/>
                                        I=G O=G H=R N=B P=R K=A) <br/>

