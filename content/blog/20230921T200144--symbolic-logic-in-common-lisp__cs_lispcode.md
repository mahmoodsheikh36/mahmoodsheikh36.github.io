+++
title = "symbolic logic in common lisp"
author = ["mahmood"]
description = "using the symbolic capabilities of lisp to write inference engines and more"
date = 2024-02-26T00:00:00+02:00
tags = ["cs", "lispcode"]
draft = false
+++

[logic programming](20230921T193636--logic-programming__.org) in [common lisp](20230224T163920--common-lisp__code_language.org) <br/>


## logical statements {#logical-statements}

we make use of the symbolic capabilities of lisp, we use quoting and symbols to represent logical [statement](20230401T175139--statement__math.org)s, e.g. given the following [knowledge base](20230919T190349--knowledge-base__.org) of [horn clause](20230919T154252--horn-clause__.org)s: <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/625db08e1b7.svg" alt="\begin{align*}
  &amp;amp;P \implies Q\\
  &amp;amp;L \land M \implies P\\
  &amp;amp;B \land L \implies M\\
  &amp;amp;A \land P \implies L\\
  &amp;amp;A \land B \land S \implies L\\
  &amp;amp;A\\
  &amp;amp;B
\end{align*}
" style="height: 10.4472em; vertical-align: -0.4020em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

in lisp we could write it as: <br/>

```lisp
(defparameter *kb*
  '((implies p q)
    (implies (and l m) p)
    (implies (and b l) m)
    (implies (and a p) l)
    (implies (and a b s) l)
    A
    B))
*kb*
```

```text
((IMPLIES P Q) (IMPLIES (AND L M) P) (IMPLIES (AND B L) M)
 (IMPLIES (AND A P) L) (IMPLIES (AND A B S) L) A B)
```

the choice of the symbols `implies, and` could vary, but essentially we should write code that deals properly with these symbols based on their names. other symbols we may use are `or, iff`. <br/>
so a knowledge base is just a (nested) list of [proposition](20230401T175139--statement__math.org)s. <br/>
what about [predicate](20230607T114855--predicate__math.org)s? e.g. statements like <img src="/ltximg/9dfa8b51712.svg" alt="\(Human(John)\)" style="height: 1.0686em; vertical-align: -0.2893em; display: inline-block" class="org-latex org-latex-inline" />?, that should be simple enough, we just use `'(Human John)`, so instead of **infix notation**, we use lisp's infamous **prefix notation**, we dont need to worry about `(Human John)` sharing the same form as `(and x1 x2)`, as `and` can be considered just a boolean function like `Human`, after all. any expression that is in the form `(whatever x1 x2 ... xn)` would imply that `whatever` is meant to be treated as a boolean function. <br/>
first obstacle we may face is the issue of distinguishing a variable from a [constant](20220727T110413--scalar__.org) symbol, how can we tell whether a symbol represents a variable or a constant (an immutable object)? after all both are just symbols (in our implementation), for example consider `person` vs `John`, inherently, `person` is a variable that applies to everyone and `John` is a constant that only describes one person (in a simplified context where John refers to a friend, for example). a simple solution to this problem would be to use special syntax for variables, like `?x`, here, `?x` would mean we're dealing with a variable, and a symbol without a question mark prefix, for example `x`, is recognized as a constant. <br/>
in our previous example, this doesnt make much difference as we were dealing with constants only, consider this example which demonstrates how we apply the idea of prefixing variables with a question mark: <br/>

```lisp
(defparameter *kb*
  '((person john) ;; person(john)
    (implies (person ?x) (human ?x)) ;; person(x) => human(x)
    (implies (and (not (widower ?x)) (father ?x)) (married ?x))))
*kb*
```

```text
((PERSON JOHN) (IMPLIES (PERSON ?X) (HUMAN ?X))
 (IMPLIES (AND (NOT (WIDOWER ?X)) (FATHER ?X)) (MARRIED ?X)))
```

how about substitutions? how do we represent for example the substitution <img src="/ltximg/7856bdfd213.svg" alt="\(\{x/val,y/val2\}\)" style="height: 1.0754em; vertical-align: -0.3157em; display: inline-block" class="org-latex org-latex-inline" />, we just use an [association list](20230224T163920--common-lisp__code_language.org): <br/>

```lisp
(let ((sub nil)) ;; sub is the substitution
  (push (cons '?x 'val1) sub) ;; add pair using push
  (push (cons '?y 'val2) sub)
  sub)
```

```text
((?Y . VAL2) (?X . VAL1))
```


## early [inference engine](20230922T003520--inference-engine__.org)s {#early-inference-engine--20230922t003520-inference-engine-dot-org--s}

imma start off with the [unification](20230918T185446--unification__math.org) algorithm, this one differs a bit from the pseudocode version, as it doesnt apply the **occur check** and doesnt distinguish between a compound statement or a list of expressions, as they are only used to represent predicates <br/>

```lisp
(defun variable? (x)
  "return whether an expression is a variable"
  (if (atom x)
      (equal (char (symbol-name x) 0) #\?) ;; if symbol starts with a question mark
      nil))

(defun compound? (obj)
  "whether an object is compound, or simply whether its a cons cell or not '(atom obj)' returns false for a cons cell"
  (not (atom obj)))

(defun unify (x y &optional (sub nil))
  "x,y are logical statements, sub is the substitution, sub is initalized to `nil', if it ever becomes `failure', it means we've failed to find a substitution, we return `failure' (symbol), otherwise we return a substitution (could be `nil' which denotes an empty substitution)"
  (if (equal sub 'failure)
      'failure
      (if (equal x y)
          sub
          (if (variable? x)
              (unify-var x y sub)
              (if (variable? y)
                  (unify-var y x sub)
                  (if (and (compound? x) (compound? y))
                      (unify (rest x) (rest y) (unify (first x) (first y) sub))
                      'failure)))))) ;; failure

(defun unify-var (var x &optional (sub t))
  "returns a substitution"
  (let* ((sub-entry (assoc var sub)) ;; an entry in the substitution that corresponds to var, if no such entry exists, both sub-entry and val will be nil
         (val (cdr sub-entry)))
    (if sub-entry
        (unify val x sub)
        (if (assoc x sub)
            (unify var val sub)
            ;; (if (occur-check? var x) ;; occur check, not implemented
            ;;     'failure
            ;;     (push (cons var x) sub))))))
            (push (cons var x) sub)))))

(defun unify-success? (unify-out)
  "check whether the value returned by `unify' represents a proper substitution and not a failure"
  ;; (listp unify-out) ;; alternative solution
  (not (eq unify-out 'failure)))
```

a test: <br/>

```lisp
(unify '(person john) '(person ?x))
```

```text
((?X . JOHN))
```

next up, we need to implement [forward chaining](20230919T153235--forward-chaining__math.org) and [backward chaining](20230919T153820--backward-chaining__.org) which take in a knowledge base of statements which are [definite clause](20230919T024957--definite-clause__math.org)s and do [algorithmic inference](20230920T180840--inference-algorithm__.org), this code makes use of [common lisp math utils](20230503T204107--common-lisp-math-utils__lisp-code.org) <br/>

```lisp
(defun find-variables-in-statement (statement)
  "find the variables in the list `statement' (variables are symbols that start with '?')"
  (let ((vars))
    (loop for myelt in statement do
      (if (variable? myelt)
          (setf vars (union (list myelt) vars))
          (when (not (atom myelt))
            (setf vars (union (find-variables-in-statement myelt) vars)))))
    vars))

(defun find-constants-in-statement (statement)
  "find all constants in a statement, constants are non-variable literals, basically words that arent predicates (symbol at the beginning of a list) or variables (symbol starting with '?')"
  (if (atom statement)
      (if (variable? statement)
          nil
          (list statement))
      (let ((constants))
        (loop for myelt in (cdr statement) do
          (if (compound? myelt)
              (setf constants (union (find-constants-in-statement (cdr myelt)) constants))
              (setf constants (union (find-constants-in-statement myelt) constants))))
        constants)))

(defun find-constants-in-knowledge-base (knowledge-base)
  "find all constants in a knowledge base"
  (let ((constants))
    (loop for statement in knowledge-base do
      (setf constants (union (find-constants-in-statement statement) constants)))
    constants))

(defun standardize-variables (formula)
  "replace variables with new unseen unique variable names, implementation is inefficient but it'll do for now
example usage:
CL-USER> (setf a '(hi ?there (whats up) up ?there ?what))
CL-USER> (standardize-variables a)
(HI #:?479 (WHATS UP) UP #:?479 #:?481)
CL-USER> (standardize-variables '(implies (and (king ?x) (greedy ?x)) (evil ?x)))
(IMPLIES (AND (KING #:?495) (GREEDY #:?495)) (EVIL #:?495))
"
  (let ((vars (if (compound? formula)
                  (find-variables-in-statement formula)
                  nil))) ;; nil if the formula is just a constant
    (loop for var in vars do
      ;; generate a new variable (symbol) that starts with '?' to replace each variable
      (setf formula (subst (gensym "?") var formula)))
    formula))

(defun all-substitutions (variables constants)
  "generate all possible substitutions, a substitution is a list of cons's"
  (list* nil ;; nil is a possible substitution too
         (concatenate*
          (let ((variable-combinations (combinations-upto-length variables)))
            (loop for variable-combination in variable-combinations
                  collect (let ((constant-variations (variations-with-repetition constants (length variable-combination))))
                            (loop for constant-variation in constant-variations
                                  collect (pairlis variable-combination constant-variation))))))))

(defun apply-substitution (sub formula)
  "given the substitution `sub', which is a list of conses (basically an alist), apply it to a given formula"
  (loop for entry in sub do
    (setf formula (subst (cdr entry) (car entry) formula)))
  formula)

(defun implication? (formula)
  "check whether a logic formula is an implication formula of the form 'something => something' or in lisp (implies something something)"
  (when (compound? formula)
    (eq (first formula) 'implies)))

(defun parse-implication (formula)
  "given an implication formula `formula', return both the implying expression and the implied expression (precedent and consequent)"
  (if (implication? formula)
      (values (second formula) (third formula))
      (values nil formula)))

(defun conjunction? (formula)
  "check if a formula is a conjunction of predicates"
  (when (compound? formula)
    (eq (first formula) 'and)))

(defun forward-chaining (knowledge-base query &optional (add-query-to-kb t))
  "apply the forward chaining algorithm to the knowledge base `knowledge-base' and the query `query', tries to infer the query from the knowledge base, returns `nil' if it fails, if `add-query-to-kb' is `t', `query' gets added to the knowledge base (along with the other conclusions)"
  (let ((inference-alist-list)) ;; list of association lists that holds the antecedents of the inferences, each association list corresponds to a chaining step
    (loop do
      (let ((new) ;; list to hold newly inferred sentences on each iteration
            (inference-alist))
        (loop for formula in knowledge-base do
          (when (implication? formula)
            ;; in an implication 'a->b', 'a' is the antecedent and 'b' is the consequent
            (multiple-value-bind (antecedent consequent)
                (parse-implication formula)
              (let* ((standardized-antecedent (standardize-variables antecedent)) ;; change variable names in formula to avoid unification problems, see [[id:40d1a33f-7e80-4b94-bc0c-c778beefca01::note:note1]]
                     (vars (append (find-variables-in-statement formula)
                                   (find-variables-in-statement standardized-antecedent))))
                ;; generate possible values for the substitution, see [[id:bd481a5c-e869-440e-be1d-33e0838620f9::note:theta_domain]]
                (loop for sub in (all-substitutions vars (find-constants-in-knowledge-base knowledge-base)) do
                  (loop for some-premises in (variations-upto-length
                                              (remove-if #'implication?
                                                         knowledge-base))
                        do (when (or (equal (apply-substitution sub antecedent)
                                            (apply-substitution sub (list* 'and some-premises))) ;; construct the AND (conjunction) predicate
                                     (equal (apply-substitution sub (list antecedent))
                                            (apply-substitution sub some-premises)))
                             (let ((actual-consequent (apply-substitution sub consequent)) ;; non-standardized (original variables names) consequent
                                   (unifies nil))
                               ;; check if it unifies with another formula something in `new'
                               (loop for other-formula in new do
                                 (setf unifies (or unifies
                                                   (unify-success? (unify actual-consequent other-formula)))))
                               ;; check if it unifies with another formula something in `knowledge-base'
                               (loop for other-formula-again in knowledge-base do
                                 (setf unifies (or unifies
                                                   (unify-success? (unify actual-consequent other-formula-again)))))
                               (when (not unifies)
                                 (setf new (append new (list actual-consequent)))
                                 (setf inference-alist
                                       (append inference-alist
                                               (list (cons actual-consequent
                                                           (apply-substitution sub antecedent)))))
                                 (let ((unify-out (unify actual-consequent query)))
                                   (when (unify-success? unify-out)
                                     (when add-query-to-kb
                                       (nconc knowledge-base new)) ;; final addition to knowledge base before returning
                                     (setf inference-alist-list (append inference-alist-list (list inference-alist)))
                                     (return-from forward-chaining
                                       (values unify-out
                                               inference-alist-list)))))))))))))
        (setf inference-alist-list (append inference-alist-list (list inference-alist)))
        (if new
            (nconc knowledge-base new)
            (return-from forward-chaining (values nil inference-alist-list)))))))
```

example usage: <br/>

```lisp
(defun forward-chaining-test-1 ()
  (setf *forward-chaining-test-1-kb*
        '((implies (and (american ?x) (weapon ?y) (sells ?x ?y ?z) (hostile ?z)) (criminal ?x))
          (implies (and (missile ?x) (owns nono ?x)) (sells west ?x nono))
          (implies (missile ?x) (weapon ?x))
          (implies (enemy ?x america) (hostile ?x))
          (owns nono m1)
          (missile m1)
          (american west)
          (enemy nono america)))
  (let ((kb2 (copy-tree *forward-chaining-test-1-kb*)))
    (multiple-value-bind (substitution inference-alist-list)
        (forward-chaining kb2 '(criminal west))
      ;; not a good idea to use setf but should be fine for debugging
      (setf *forward-chaining-test-1-inference-alist-list* inference-alist-list)
      (setf *forward-chaining-test-1-kb-result* kb2)
      kb2)))
```

some functions (that do their best) to "unpack" a knowledge base by unpacking conjunctions and implications into multiple smaller statements that are easier to deal with (there isnt much we can do when the precedent of an implication is a [logical connective](20230401T203310--logical-connective__math.org)) <br/>

```lisp
(defun unpack-implication (implication)
  (multiple-value-bind (antecedent consequent)
      (parse-implication implication)
    (if (conjunction? consequent)
        (mapcar (lambda (consequent-predicate) ;; one predicate from the conjunction in the consequent
                  (list 'implies antecedent consequent-predicate))
                (unpack-conjunction consequent))
        (list implication))))

(defun unpack-conjunction (conjunction)
  (cdr conjunction))

(defun unpack-formula (formula)
  (if (implication? formula)
      (unpack-implication formula)
      (if (conjunction? formula)
          (unpack-conjunction formula)
          (list formula))))

(defun unpack-knowledge-base (kb)
  (let ((new-kb))
    (loop for formula in kb do
      (setf new-kb (append new-kb (unpack-formula formula))))
    new-kb))
```

a function to generate a graph from a knowledge base, see [common lisp graphs](20230813T012934--working-with-graphs-in-common-lisp__lispcode.org): <br/>

```lisp
(defun generate-graph-from-knowledge-base (kb)
  "generate and-or graph (not really, cant tell OR from AND) for a knowledge base"
  (let ((g (make-graph)))
    (loop for statement in (unpack-knowledge-base kb) do
      (if (implication? statement)
          (multiple-value-bind (antecedent consequent) (parse-implication statement)
            (if (conjunction? antecedent)
                (loop for predicate in (cdr antecedent) do
                  (graph-add-edge g predicate consequent))
                (graph-add-edge g antecedent consequent)))
          (if (conjunction? statement)
              (loop for predicate in (cdr statement) do
                (graph-add-vertex g predicate))
              (graph-add-vertex g statement))))
    g))
```

example usage: <br/>

```lisp
(defun forward-chaining-test-2 ()
  (let ((kb (copy-tree '((implies (and (american ?x) (weapon ?y) (sells ?x ?y ?z) (hostile ?z)) (criminal ?x))
                         (implies (and (missile ?x) (owns nono ?x)) (sells west ?x nono))
                         (implies (missile ?x) (weapon ?x))
                         (implies (enemy ?x america) (hostile ?x))
                         (owns nono m1)
                         (missile m1)
                         (american west)
                         (enemy nono america)))))
    (let ((g (generate-graph-from-knowledge-base kb))
          (vertex-idx 0) ;; to number vertices (gotta do it for proper drawing of the graph), each vertex gets a unique number
          (vertex-indicies-cache nil)) ;; cache vertex indicies
      (graph-generate-tikz
       g
       :format-function (lambda (vertex)
                          (let ((vertex-entry
                                  (assoc
                                   vertex
                                   vertex-indicies-cache
                                   :test #'equal)))
                                   ;; :test (lambda (predicate1 predicate2)
                                   ;;         (unify-success? (unify predicate1 predicate2))))))
                            (if vertex-entry
                                (format nil "v~A/{~A}" (cdr vertex-entry) vertex)
                                (progn
                                  (incf vertex-idx)
                                  (setf vertex-indicies-cache (acons vertex vertex-idx vertex-indicies-cache))
                                  (format nil "v~A/{~A}" vertex-idx vertex)))))
       :tikz-params "layered layout, grow=up, edges={-{Stealth[]}}, edges=rounded corners"
       ;; :node-distance 50
       :directed t))))
```

```lisp
(forward-chaining-test-2)
```


<div class="equation-container">
<span class="equation">
<img src="/ltximg/4ba0bde9505.svg" alt="\begin{tikzpicture}
\graph[layered layout, grow=up, edges={-{Stealth[]}}, edges=rounded corners] {
v1/{(ENEMY NONO AMERICA)},
v2/{(AMERICAN WEST)},
v3/{(MISSILE M1)},
v4/{(OWNS NONO M1)},
v5/{(ENEMY ?X AMERICA)} -&amp;gt; v6/{(HOSTILE ?X)},
v7/{(MISSILE ?X)} -&amp;gt; v8/{(WEAPON ?X)},
v9/{(OWNS NONO ?X)} -&amp;gt; v10/{(SELLS WEST ?X NONO)},
v7/{(MISSILE ?X)} -&amp;gt; v10/{(SELLS WEST ?X NONO)},
v11/{(HOSTILE ?Z)} -&amp;gt; v12/{(CRIMINAL ?X)},
v13/{(SELLS ?X ?Y ?Z)} -&amp;gt; v12/{(CRIMINAL ?X)},
v14/{(WEAPON ?Y)} -&amp;gt; v12/{(CRIMINAL ?X)},
v15/{(AMERICAN ?X)} -&amp;gt; v12/{(CRIMINAL ?X)},
};\end{tikzpicture}
" style="height: 4.5092em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

functions to generate a graph from the forward chaining process (see [common lisp graphs](20230813T012934--working-with-graphs-in-common-lisp__lispcode.org)): <br/>

```lisp
(defun forward-chaining-generate-inference-graph (inference-alist-list)
  "generate and-or graph (not really, cant tell OR from AND) for a knowledge base"
  (let ((g (make-graph)))
    (loop for inference-alist in inference-alist-list do
      (loop for entry in inference-alist do
        (let ((precedent (cdr entry))
              (consequent (car entry)))
          (if (conjunction? precedent)
              (loop for predicate in (cdr precedent) do
                (if (conjunction? consequent)
                    (loop for consequent-predicate in (cdr consequent) do
                      (graph-add-edge g predicate consequent-predicate))
                    (graph-add-edge g predicate consequent)))
              (if (conjunction? consequent)
                  (loop for consequent-predicate in (cdr consequent) do
                    (graph-add-edge g precedent consequent-predicate))
                  (graph-add-edge g precedent consequent))))))
    g))
```

```lisp
(defun forward-chaining-generate-tikz-graph (inference-alist-list)
  (let* ((g (forward-chaining-generate-inference-graph inference-alist-list))
         (vertex-idx 0) ;; to number vertices (gotta do it for proper drawing of the graph), each vertex gets a unique number)
         (vertex-indicies-cache nil) ;; cache vertex indicies
         (vertex-format-function
           (lambda (vertex)
             (let ((vertex-entry
                     (assoc
                      vertex
                      vertex-indicies-cache
                      :test #'equal)))
               (if vertex-entry
                   (format nil "v~A/{~A}" (cdr vertex-entry) vertex)
                   (progn
                     (incf vertex-idx)
                     (setf vertex-indicies-cache (acons vertex vertex-idx vertex-indicies-cache))
                     (format nil "v~A/{~A}" vertex-idx vertex)))))))
    (graph-generate-tikz
     g
     :format-function vertex-format-function
     :tikz-params "layered layout, grow=up, edges={-{Stealth[]}}, edges=rounded corners, level sep=40px"
     ;; incomplete attempt to make the figure look more like [[id:bd481a5c-e869-440e-be1d-33e0838620f9::fig:fig4][forward chaining]]
     ;; :tikz-postamble
     ;; (concatenate*
     ;;  (mapcar (lambda (inference-alist)
     ;;            (apply #'concatenate
     ;;                   (append (list 'string)
     ;;                           (list "{[same layer] ")
     ;;                           (mapcar (lambda (vertex-entry)
     ;;                                     (format nil "~A," (funcall vertex-format-function
     ;;                                                                (car vertex-entry))))
     ;;                                   inference-alist)
     ;;                           (list " };"))))
     ;;          *forward-chaining-test-1-inference-alist-list*))
     :directed t)))
```

example usage: <br/>

```lisp
(defun forward-chaining-test-3 ()
  (let ((kb (copy-tree
             '((implies (and (american ?x) (weapon ?y) (sells ?x ?y ?z) (hostile ?z)) (criminal ?x))
               (implies (and (missile ?x) (owns nono ?x)) (sells west ?x nono))
               (implies (missile ?x) (weapon ?x))
               (implies (enemy ?x america) (hostile ?x))
               (owns nono m1)
               (missile m1)
               (american west)
               (enemy nono america)))))
    (multiple-value-bind (substitution inference-alist-list)
        (forward-chaining kb '(criminal west))
      ;; not a good idea to use setf but should be fine for debugging
      (forward-chaining-generate-tikz-graph inference-alist-list))))
```

```lisp
(forward-chaining-test-3)
```


<div class="equation-container">
<span class="equation">
<img src="/ltximg/79946a04a04.svg" alt="\begin{tikzpicture}
\graph[layered layout, grow=up, edges={-{Stealth[]}}, edges=rounded corners, level sep=40px] {
v1/{(HOSTILE NONO)} -&amp;gt; v2/{(CRIMINAL WEST)},
v3/{(SELLS WEST M1 NONO)} -&amp;gt; v2/{(CRIMINAL WEST)},
v4/{(WEAPON M1)} -&amp;gt; v2/{(CRIMINAL WEST)},
v5/{(AMERICAN WEST)} -&amp;gt; v2/{(CRIMINAL WEST)},
v6/{(ENEMY NONO AMERICA)} -&amp;gt; v1/{(HOSTILE NONO)},
v7/{(MISSILE M1)} -&amp;gt; v4/{(WEAPON M1)},
v8/{(OWNS NONO M1)} -&amp;gt; v3/{(SELLS WEST M1 NONO)},
v7/{(MISSILE M1)} -&amp;gt; v3/{(SELLS WEST M1 NONO)},
};\end{tikzpicture}
" style="height: 12.9135em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

the [backward chaining](20230919T153820--backward-chaining__.org) algorithm (we dont implement it as a generator here): <br/>

```lisp
(defun backward-chaining (knowledge-base query)
  "apply backward chaining, find all proofs for `query'"
  (backward-chaining-or knowledge-base query nil))

(defun backward-chaining-or (knowledge-base goal substitution)
  "returns substitutions that prove `goal'"
  (format t "~A <- " goal)
  (concatenate*
   (loop for implication-formula in knowledge-base
         collect (multiple-value-bind (precedent consequent)
                     (parse-implication (standardize-variables implication-formula))

                   (loop for substitution1 in (backward-chaining-and
                                               knowledge-base
                                               (if (conjunction? precedent)
                                                   (cdr precedent)
                                                   precedent)
                                               (unify consequent
                                                      goal
                                                      substitution))
                         collect substitution1)))))

(defun backward-chaining-and (knowledge-base goals substitution)
  (if (equal 'failure substitution)
      nil
      (if (equal (length goals) 0)
          (list substitution)
          (concatenate*
           (loop for substitution1 in (backward-chaining-or knowledge-base
                                                            (apply-substitution substitution
                                                                                (first goals))
                                                            substitution)
                 collect (loop for substitution2 in (backward-chaining-and knowledge-base
                                                                           (rest goals)
                                                                           substitution1)
                               collect substitution2))))))
```

