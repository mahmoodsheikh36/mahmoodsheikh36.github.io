+++
title = "maxima in lisp"
author = ["mahmood"]
description = "how to use maxima code in common lisp"
date = 2024-02-26T00:00:00+02:00
tags = ["code"]
draft = false
+++

<div class="note">

i ended up giving up on using maxima as a visualization/symbolic math computation library for lisp, it wasnt made with this usecase in mind i guess, and so its an utter nightmare to lisp with it <br/>

</div>

maxima is written in lisp and so it can be used as a modified/extended lisp runtime <br/>


## how to {#how-to}

to start the lisp runtime use the command: <br/>

```bash
rmaxima -r 'to_lisp();'
```

can also run this in emacs' slime/sly with `(sly "rmaxima -r to_lisp();")` <br/>
alternatively, we can clone maxima's source code to the subdirectory `local-projects` of the quicklisp installation directory (usually `~/quicklisp` unless you've modified it), follow the instructions at <https://sourceforge.net/p/maxima/code/ci/master/tree/INSTALL.lisp#l66> to compile maxima and you'll be able to load it as a library: <br/>

```lisp
(ql:quickload "maxima")
```

but then you gotta prefix functions with `maxima::`, e.g. <br/>

```lisp
(maxima::displa (maxima::$integrate #$2/(3*x^5)$ 'x))
```

```text
2 x
----
   5
3 x
```

unless you enter the library itself then you dont need the prefix: <br/>

```lisp
(in-package :maxima)
```

loading maxima as a library works most of the time, but it causes some problems, for example we cant use `draw` when maxima is loaded as a library, thats why using `rmaxima` is better <br/>


## misc {#misc}

to write an expression in infix syntax we do: <br/>

```lisp
(print #$10/13$)
```

```text

((MAXIMA::RAT MAXIMA::SIMP) 10 13) 
```

to display math using ascii art we use the function `displa` (short for **display**) <br/>

```lisp
(maxima::displa #$10/13$)
```

```text
10
--
13
```


## maxima expression to lisp expression {#maxima-expression-to-lisp-expression}

this function helps turn maxima expressions into their corresponding lisp expression <br/>

```lisp
(defun lisp-form (macsyma-string)
  (maxima::macsyma-read-string (concatenate 'string macsyma-string "$")))
```

example: <br/>

```lisp
(print (lisp-form "diff(sin(x),x)"))
```

```text

((MAXIMA::$DIFF) ((MAXIMA::%SIN) MAXIMA::$X) MAXIMA::$X) 
```

some expressions will return symbols instead of functions so they cannot be run directly, e.g. <br/>

```lisp
(print (lisp-form "sin(10d0)"))
```

```text

((MAXIMA::%SIN) 10.0) 
```

so to evaluate these expressions we can use `meval*`: <br/>

```lisp
(print (lisp-form "sin(10d0)"))
(print (maxima::meval* (lisp-form "sin(10d0)")))
(print (maxima::meval* '((maxima::%sin) 10.0)))
```

```text

((MAXIMA::%SIN) 10.0) 
-0.5440211108893698 
-0.5440211108893698 
```

although functions like `$sin` do exist and can be used instead of symbols like `%sin` <br/>
taken from <https://github.com/livelisp/livewlisp/blob/main/maxima-tutorial.txt> <br/>


## integration {#integration}

the main function for integration is `$integrate` (or `sinint`) <br/>

```lisp
(maxima::displa (maxima::$integrate #$2/(3*x^2)$ 'x))
```

```text
2 x
----
   2
3 x
```

```lisp
(maxima::displa (maxima::$integrate '((maxima::%cos) x) 'x))
```

```text
sin(x)
```


## lists {#lists}

i havent a better approach yet <br/>

```lisp
(maxima::displa (maxima::meval* `((maxima::mlist) 2 3 5)))
```

```text
[2, 3, 5]
```

lisp list to maxima list: <br/>

```lisp
(defun list->mlist (list)
  (let ((mlist (maxima::meval* `((maxima::mlist)))))
    (loop for expr in (reverse list)
          do (setf
              mlist
              (maxima::meval* `((maxima::$append) ((maxima::mlist) ,expr) ,mlist))))
    mlist))
```

example: <br/>

```lisp
(print (list->mlist '(1 2 3)))
(maxima::displa (list->mlist '(1 2 3)))
```

```text

((MAXIMA::MLIST MAXIMA::SIMP) 1 2 3) 
[1, 2, 3]
```


## plotting {#plotting}

we need to initialize some variables (like `*maxima-tempdir*`) to be able to plot, this can be done automatically using `initialize-runtime-globals` <br/>

```lisp
(maxima::initialize-runtime-globals)
```

to plot a set of points (discrete plot) using `gnuplot` <br/>

```lisp
(maxima::$plot2d
 '((maxima::mlist)
   maxima::$discrete
   ((maxima::mlist) 1 2 3) ((maxima::mlist) 1 2 3)))
```

this can be (somewhat) simplified using our function `list->mlist` (see above) <br/>

```lisp
(maxima::$plot2d
 `((maxima::mlist)
   ((maxima::mlist) maxima::$discrete
                    ,(list->mlist '(1 2 3)) ,(list->mlist '(1 2 3)))
   ((maxima::mlist) maxima::$discrete
                    ,(list->mlist '(1 2 3)) ,(list->mlist '(1 5 3)))))
```

we can draw multiple plots (this only works when running lisp using `maxima`, see the **how to** section): <br/>

```lisp
(let ((scene1 '((MAXIMA::$GR2D)
                ((MAXIMA::MEQUAL) MAXIMA::$TITLE "first plot")
                ((MAXIMA::MEQUAL) MAXIMA::$NTICKS 300)
                ((MAXIMA::$PARAMETRIC)
                 ((MAXIMA::MTIMES) 2 ((MAXIMA::%COS) MAXIMA::$T))
                 ((MAXIMA::MTIMES) 5 ((MAXIMA::%SIN) MAXIMA::$T)) MAXIMA::$T 0
                 ((MAXIMA::MTIMES) 2 MAXIMA::$%PI))))
      (scene2 `((MAXIMA::$GR2D)
                ((MAXIMA::MEQUAL) MAXIMA::$TITLE "second plot")
                ((MAXIMA::MEQUAL) MAXIMA::$NTICKS 300)
                ((maxima::$points) ((mlist) 1 2 3) ((mlist) 1 2 3)))))
  (maxima::meval* `((MAXIMA::$DRAW) ,scene1 ,scene2 ((MAXIMA::MEQUAL) MAXIMA::$COLUMNS 2))))
```

we implement some abstraction over this to make it less explicit: <br/>

```lisp
(defun plot-points (x-values y-values)
  (maxima::$plot2d
   `((maxima::mlist)
     maxima::$discrete
     ,(list->mlist x-values) ,(list->mlist y-values))))
```

