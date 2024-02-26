+++
title = "working with graphs in common lisp"
author = ["mahmood"]
tags = ["lispcode"]
draft = false
+++

working with [BROKEN LINK: c9c929ba-a434-44eb-a6ef-6a4cfbde350f]s in [BROKEN LINK: C3E00718-FDF6-457F-9B91-FFCFDE1591E2] <br/>


## my initial approach {#my-initial-approach}

for simplicity ill represent a [graph](20230314T001051--graph__math.org) as a list of cons's, if we are dealing with a [weighted graph](20230412T150436--weighted-graph__math.org), we use the second item in the cons as a cons with the first item being the node and the second being the weight <br/>
i implemented the helper functions `node-weight` and `node` for this purpose <br/>
an edge is written/stored in the format `'(<src> . (<dest> . <weight>))` or simply `'(<src> . <dest>)` if it has no weight <br/>
but what about a directed graph? maybe thats to worry about later (maybe just this structure but use `'(node1 . node2)` and `'(node2 . node1)` for bidirectional edges and pass an argument to functions that specifies whether graphs are directed so they have to respect the order of the cons) <br/>

```lisp
(defun edge-weight (e)
  "get the weight of an edge"
  (let ((dest-cons (cdr e)))
    (cond ((eq (type-of dest-cons) 'cons) (cdr dest-cons))
           (t dest-cons))))

(defun node (n)
  "turn a possible cons into a node"
  (cond ((eq (type-of n) 'cons) (car n)) ;; if a node is a cons, the node itself is the car
        (t n))) ;; if a node is itself (number,symbol,whatever), return it

(defun edge-src (e)
  (node (car e)))

(defun edge-dest (e)
  (node (cdr e)))
```

example: <br/>

```lisp
(let ((mygraph #((0 . a) (a . 2) (1 . (3 . 4)) (3 . |b|))))
  (map nil
       (lambda (mycons)
         (format t "~A -> ~A~%" (edge-src mycons) (edge-dest mycons)))
       mygraph))
```

```text
0 -> A
A -> 2
1 -> 3
3 -> b
```

a function to produce the tikz for a graph to be drawn using <https://tikz.dev/tikz-graphs> with force-based algorithms (<https://tikz.dev/gd-force>) <br/>

```lisp
(defun generate-graph-tikz (g)
  (format t "\\tikz\\graph[spring layout] {~%")
  (map nil
       (lambda (edge)
         (format t "~A -- ~A,~%" (edge-src edge) (edge-dest edge)))
       g)
  (format t "};"))
```

example usage: <br/>

```lisp
(generate-graph-tikz #((0 1) (1 2) (1 3) (0 5))) 
```

```text
\tikz\graph[spring layout] {
0 -- 1,
1 -- 2,
1 -- 3,
0 -- 5,
};
```

this could be placed in a tex file like so: <br/>
and compiled to `dvi` with <br/>

```bash
lualatex --output-format=dvi <yourfile>.tex
```

a `yourfile.dvi` will be generated, use `dvisvgm` to convert that to an `svg`: <br/>

```bash
dvisvgm yourfile
```

this will generate an svg image <br/>
an implementation of [A\* algorithm](20230812T222929--a-algorithm__math.org): <br/>

```lisp
(defun a-star (graph src dest heuristic-function)
  "a (naive?) implementation of A* search algorithm, solely written to avoid doing homework manually"
  (a-star-helper graph src nil dest 0 heuristic-function))

(defun a-star-helper (graph node parent dest cost heuristic-function)
  "a recursive function to help with a-star, return the path"
  (let ((frontier (adjacent-edges graph node)))
    (sort frontier
          (lambda (edge1 edge2)
            (let* ((next1 (cond ((eq (edge-dest edge1) node) (edge-src edge1))
                                ((eq (edge-src edge1) node) (edge-dest edge1))))
                   (next2 (cond ((eq (edge-dest edge2) node) (edge-src edge2))
                                ((eq (edge-src edge2) node) (edge-dest edge2))))
                   (cost1 (+ (edge-weight edge1) (funcall heuristic-function next1)))
                   (cost2 (+ (edge-weight edge2) (funcall heuristic-function next2))))
              (< cost1 cost2))))
    (loop while frontier do
      ;; grab the node with the least cost from the frontier
      (let* ((edge (car frontier))
             (next (cond ((eq (edge-dest edge) node) (edge-src edge))
                         ((eq (edge-src edge) node) (edge-dest edge)))))
        (if (eq next dest)
            (return-from a-star-helper (cons node (cons dest nil))) ;; arrived at destination
            (if (eq next parent)
                (pop frontier) ;; dont go back to parent!, get rid of that edge
                (let ((new-path (a-star-helper graph
                                               next
                                               node
                                               dest
                                               (+ cost (edge-weight edge))
                                               heuristic-function)))
                  (if new-path
                      (return-from a-star-helper (cons node new-path)) ;; keep returning, we're done
                      (pop frontier))))))) ;; subpath hit a dead end, pop it and continue looping
    ;; we exhausted the frontier, we hit a dead end, return false/empty list
    nil))

(defun adjacent-edges (graph node)
  "get a list of the edges adjacent to a node"
  (let ((adjacent-edges-list nil))
    (loop for i from 0 below (length graph) do
      (let* ((edge (elt graph i)))
        (when (or (eq (edge-src edge) node)
                  (eq (edge-dest edge) node))
          (push edge adjacent-edges-list))))
    adjacent-edges-list))

(defun neighbors-of (graph node)
  "get the neighbors of a node"
  (let ((neighbors nil))
    (loop for i from 0 below (length graph) do
      (let* ((edge (elt graph i))
             (neighbor (cond ((eq (edge-src edge) node) (edge-dest edge))
                             ((eq (edge-dest edge) node) (edge-src edge)))))
        (when (and neighbor (not (member neighbor neighbors)))
          (push neighbor neighbors))))
    neighbors))
```


## [adjacency list](20230314T193059--adjacency-list__math.org) implementation {#adjacency-list--20230314t193059-adjacency-list-math-dot-org--implementation}

an adjancy list is list of [linked list](20240201T173115--linked-list__.org)s, where each linked list stores a vertex and its outgoing edges, this makes representing directed graphs simple, so i decided to rewrite my code and to this approach <br/>
a vertex stores a list of edges, an "edge" stores the destination vertex and the weight (if the graph is directed we can tell which direction an edge because its source and destination vertex are determined already in the structure, so its direction must be from the source to the destination), here, an edge need not store its source vertex because the source vertex links to it already, if a function expects to receive a list of edges, not an adjacency list, then perhaps a list could be used in the form `'(source dest weight)`. <br/>
whether a graph is directed or not is not implemented (currently) in code logic, it depends on the programmers intentions with the graph, this code only provides the necessary abstraction, perhaps a type `graph` can be implemented to store a boolean of whether the graph is directed or not, or each edge would store a boolean to denote whether its actually directed from the source to the destination or not <br/>
implementation of basic functions: <br/>

```lisp
(defun edge-dest (e)
  (car e))

(defun edge-weight (e)
  (cdr e))

;; (defun outgoing-edges (v)
;;   "get the outgoing edges of a vertex (an entry in the adjacency list)"
;;   (cdr v))
```

perhaps we should make a graph class to provide a more "abstract interface": <br/>

```lisp
(defclass graph ()
  ((adjacency-list
    :initform nil
    :initarg :adjacency-list
    :accessor graph-adjacency-list
    :documentation "a simple association list, each entry stores the edges associated with a vertex, that vertex being the source for those edges")))

(defun make-graph (&key adjacency-list)
  (make-instance 'graph :adjacency-list adjacency-list))
```

example construction of a graph: <br/>

```lisp
(defmethod print-object ((gr graph) stream)
  (print-unreadable-object (gr stream :type t)
    (format t "source->destination,weight~%")
    (map
     nil
     (lambda (vertex)
       (loop for edge in (cdr vertex) do
         (format
          stream
          "~A -> ~A, ~A~%"
          (car vertex)
          (edge-dest edge)
          (or (edge-weight edge) 0))))
     (graph-adjacency-list gr))))
```

example usage: <br/>

```lisp
;; or equivalently, #((0 (a . 5) (3 . 9)) (a (2 . nil)) (1 (3 . 4)) (3 (|b| . 5)))
(let* ((adjacency-list '((0 . ((a . 5) (3 . 9))) (a . ((2 . nil)))
                         (1 . ((3 . 4))) (3 . ((|b| . 5)))))
       (mygraph (make-graph :adjacency-list adjacency-list)))
  (format t "~A" mygraph))
```

```text
#<GRAPH source,weight,destination
0 -> A, 5
0 -> 3, 9
A -> 2, 0
1 -> 3, 4
3 -> b, 5
>
```

generating graph diagrams with tikz: <br/>

```lisp
(defmethod graph-generate-tikz ((g graph) &key (node-distance 50)
                                            (format-function #'identity)
                                            (should-print t)
                                            (directed nil)
                                            (tikz-params nil)
                                            (tikz-postamble nil))
  (let ((tikz-str ""))
    (setf tikz-str (concatenate 'string tikz-str (format nil "\\begin{tikzpicture}~%")))
    (if tikz-params
        (setf tikz-str (concatenate 'string tikz-str (format nil "\\graph[~A] {~%" tikz-params)))
        (setf tikz-str (concatenate 'string tikz-str (format nil "\\graph[spring electrical layout, node distance=~A] {~%" node-distance))))
    (map nil
         (lambda (vertex)
           (if (cdr vertex)
               (loop for edge in (cdr vertex) do
                 (if (edge-weight edge)
                     (setf tikz-str
                           (concatenate 'string
                                        tikz-str
                                        (format nil
                                                "~A ~A [\"~A\"] ~A,~%"
                                                (funcall format-function (car vertex))
                                                (if directed "->" "--")
                                                (edge-weight edge)
                                                (funcall format-function (edge-dest edge)))))
                     (setf tikz-str
                           (concatenate 'string
                                        tikz-str
                                        (format nil
                                                "~A ~A ~A,~%"
                                                (funcall format-function (car vertex))
                                                (if directed "->" "--")
                                                (funcall format-function (edge-dest edge)))))))
               (setf tikz-str
                     (concatenate 'string
                                  tikz-str
                                  (format nil
                                          "~A,~%"
                                          (funcall format-function (car vertex)))))))
         (graph-adjacency-list g))
    (when tikz-postamble
      (setf tikz-str (concatenate 'string tikz-str tikz-postamble)))
    (setf tikz-str (concatenate 'string tikz-str (format nil "};\\end{tikzpicture}")))
    (when should-print
      (format t tikz-str))
    tikz-str))
```

example usage: <br/>

```lisp
(let ((mygraph (make-graph :adjacency-list
                           '((1 . ((3 . 2)))
                             (3 . ((b . 9)))
                             (b . ((1 . 4)))
                             (b . ((3 . 10)))
                             (c . ((b . 5)))
                             (j . ((1 . 8)))
                             (b . ((j . 1)))))))
      (graph-generate-tikz mygraph))
```


<div class="equation-container">
<span class="equation">
<img src="/ltximg/6f803d99b75.svg" alt="\begin{tikzpicture}
\graph[spring electrical layout, node distance=50] {
1 -- [&quot;2&quot;] 3,
3 -- [&quot;9&quot;] B,
B -- [&quot;4&quot;] 1,
B -- [&quot;10&quot;] 3,
C -- [&quot;5&quot;] B,
J -- [&quot;8&quot;] 1,
B -- [&quot;1&quot;] J,
};\end{tikzpicture}
" style="height: 12.8057em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

a function to get all edges that are indicent to a specific vertex: <br/>

```lisp
(defmethod graph-vertex-neighbors ((g graph) vertex)
  (with-slots (adjacency-list) g
    (let ((neighbors nil))
      (loop for entry in adjacency-list do
        (let* ((edges (cdr entry))
               (source-vertex (car entry)))
          (loop for edge in edges do
            (let ((dest-vertex (edge-dest edge)))
              (when (equal vertex dest-vertex)
                (push source-vertex neighbors))
              (when (equal vertex source-vertex)
                (push dest-vertex neighbors))))))
      neighbors)))
```

some simple utility functions for graphs: <br/>

```lisp
(defmethod graph-add-edge ((g graph) src dest &optional (weight nil))
  (let ((vertex-list (assoc src (graph-adjacency-list g)))) ;; the list that stores the edges for the source vertex `src'
    (if vertex-list
        (nconc vertex-list (list (cons dest weight)))
        (setf (graph-adjacency-list g) (acons src (list (cons dest weight)) (graph-adjacency-list g))))))

(defmethod graph-add-vertex ((g graph) v)
  (when (not (has-vertex g v))
    (setf (graph-adjacency-list g) (acons v nil (graph-adjacency-list g)))))

(defmethod has-vertex ((g graph) v)
  (not (null (assoc v (graph-adjacency-list g)))))
```

