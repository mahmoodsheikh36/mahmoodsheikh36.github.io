+++
title = "emacs"
author = ["mahmood"]
description = "emacs"
date = 2022-06-28T10:43:00+03:00
tags = ["program"]
draft = false
+++

<p style="height:0px; display: none;">
  \(\DeclareMathOperator{\rank}{rank}\)
  \(\DeclareMathOperator{\spn}{span}\)
  \(\DeclareMathOperator{\dom}{domain}\)
  \(\DeclareMathOperator{\ran}{range}\)
  \(\DeclareMathOperator{\rng}{range}\)
  \(\DeclareMathOperator{\img}{Im}\)
  \(\newcommand\dif[1]{\:\textrm{d}#1}\)
  \(\DeclarePairedDelimiter\ceil{\lceil}{\rceil}\)
  \(\DeclarePairedDelimiter\floor{\lfloor}{\rfloor}\)
</p>

<style>
.lemma, .proof, .entailment, .definition, .note, .my_example, .characteristic, .assumption, .question, .subquestion, .answer, .step {
  border-radius: 10px;
  padding: 4px;
  border-style: groove;
  border-width: 4px;
}
.lemma:before, .proof:before, .entailment:before, .definition:before, .note:before, .my_example:before, .characteristic:before, .assumption:before, .question:before, .subquestion:before, .answer:before, .step:before {
  background-color: white;
  position: relative;
  left: -5px;
  top: -7px;
  border-radius: 10px 0 10px 0;
  padding-right: 7px;
  padding-left: 7px;
  font-family: cursive;
}
.lemma {
  background-color: beige;
}
.proof {
  background-color: moccasin;
}
.entailment {
  background-color: lightsteelblue;
}
.lemma:before {
  content: "lemma:";
}
.proof:before {
  content: "proof:";
}
.entailment:before {
  content: "entailment (logical consequence):";
}
.note {
  background-color: blanchedalmond;
}
.note:before {
  /* content: url(/note.png) "note:"; */
  content: "note:";
}
.my_example {
  background-color: #e8cfc8; 
}
.my_example:before {
  content: "example:";
}
p {
  margin: 0px;
  padding: 0px;
}
img {
   display: block;
   margin-left: auto;
   margin-right: auto;
}
.hide {
  display: none;
}
.definition {
  background-color: snow;
}
.definition:before {
  content: "definition:";
}
.characteristic {
  background-color: #dfdada;
}
.characteristic:before {
  content: "characteristic:";
}
.assumption {
  background-color: #65ad98;
}
.question {
  background-color: #e1c6c6;
}
.question:before {
  content: "question:";
}
.subquestion {
  background-color: #e5e2d8;
}
.subquestion:before {
  content: "subquestion:";
}
.answer {
  background-color: #beabc5;
}
.answer:before {
  content: "answer:";
}
.step {
  background-color: #b4d3ad;
}
.step:before {
  content: "step:";
}
</style>

<!-- mathjax -->
<script>
// auto load modules like cancel
window.MathJax = {
  loader: {load: ['[tex]/autoload', '[tex]/mathtools']},
  tex: {
    packages: {'[+]': ['autoload', 'mathtools']}
  }
};
</script>
<script type="text/javascript" id="MathJax-script" async
        src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js">
</script>

<!-- <\!-- katex -\-> -->
<!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css" integrity="sha384-Xi8rHCmBmhbuyyhbI88391ZKP2dmfnOl4rT9ZfRI7mLTdk1wblIUnrIq35nqwEvC" crossorigin="anonymous"> -->
<!-- <\!-- The loading of KaTeX is deferred to speed up page rendering -\-> -->
<!-- <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.js" integrity="sha384-X/XCfMm41VSsqRNQgDerQczD69XqmjOOOwYQvr/uuC+j4OPoNhVgjdGFwhvN02Ja" crossorigin="anonymous"></script> -->
<!-- <\!-- To automatically render math in text elements, include the auto-render extension: -\-> -->
<!-- <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/contrib/auto-render.min.js" integrity="sha384-+XBljXPPiv+OzfbB3cVmLHf4hdUFHlWNZN5spNQ7rmHTXpd7WvJum6fIACpNNfIR" crossorigin="anonymous" -->
<!--         onload="renderMathInElement(document.body);"></script> -->


## <span class="section-num">1</span> query syntax of a char {#query-syntax-of-a-char}

```elisp
(char-syntax (string-to-char "-"))
```


## <span class="section-num">2</span> ob-async with latex {#ob-async-with-latex}

this seems to be the only way to use `ob-async` with `latex` blocks: <br/>

```org
#+HEADER: :fit yes :imagemagick yes
#+HEADER: :packages '("\\usepackage{tikz}")
#+BEGIN_SRC latex :file /tmp/myimg.png :results file graphics :async
  \tikz\draw (0,0) circle (10px);
  \tikz\draw[fill=gray!30!white] (0,0) ellipse (28pt and 20pt);
  \tikz\draw[line width=2mm] (0,0) arc (30:200:1cm);
  \tikz\fill[color=red] (0,0) rectangle (2,1);
#+END_SRC
```


## <span class="section-num">3</span> reset variable to its default value {#reset-variable-to-its-default-value}

```emacs-lisp
(setq foo (eval (car (get 'foo 'standard-value))))
```


## <span class="section-num">4</span> xenops {#xenops}


### <span class="section-num">4.1</span> lag {#lag}

when i have many latex blocks on the screen xenops brings org mode to a crawl, it becomes so unbearably laggy and even stalls <br/>
the reason for this is that xenops messes with font lock and adds keywords of its own to fontify latex blocks and there's no option to disable it by default <br/>
i guess for now im gonna have to live with it, i disable `xenops-mode` temporarily when i need to edit areas with many code blocks <br/>


### <span class="section-num">4.2</span> make xenops not render tikzpicture blocks {#make-xenops-not-render-tikzpicture-blocks}

after some searching using emacs built-in help functions i found that the variable `xenops-elements` is what im looking for, it contains the regex for math block detection <br/>
what we want to do is manipulate this part of the variable <br/>

```elisp
((block-math
  (:delimiters
   ("^[ 	]*\\\\begin{\\(align\\|equation\\|tikzpicture\\|gather\\)\\*?}" "^[ 	]*\\\\end{\\(align\\|equation\\|tikzpicture\\|gather\\)\\*?}")
   ("^[ 	]*\\\\\\[" "^[ 	]*\\\\\\]"))
  (:parser . xenops-math-parse-block-element-at-point)
  (:handlers xenops-math-render xenops-math-regenerate xenops-math-reveal xenops-math-image-increase-size xenops-math-image-decrease-size xenops-element-copy xenops-element-delete))
 (inline-math
```

we need to manipulate the `:delimiters` part to exclude tikzpicture, so we do so: <br/>
to retrieve the value of `:delimiters` we use `car` and `cdr` functions <br/>

```elisp
(car (cdr (car xenops-elements)))
```

```text
(:delimiters ("^[ 	]*\\\\begin{\\(align\\|equation\\|gather\\)\\*?}" "^[ 	]*\\\\end{\\(align\\|equation\\|gather\\)\\*?}") ("^[ 	]*\\\\\\[" "^[ 	]*\\\\\\]"))
```

we can manipulate the value using `setcar` <br/>

```elisp
(setcar (cdr (car xenops-elements))
        '(:delimiters
          ("^[ 	]*\\\\begin{\\(align\\|equation\\|gather\\)\\*?}" "^[ 	]*\\\\end{\\(align\\|equation\\|gather\\)\\*?}")
          ("^[ 	]*\\\\\\[" "^[ 	]*\\\\\\]")))
```

```text
(:delimiters ("^[ 	]*\\\\begin{\\(align\\|equation\\|gather\\)\\*?}" "^[ 	]*\\\\end{\\(align\\|equation\\|gather\\)\\*?}") ("^[ 	]*\\\\\\[" "^[ 	]*\\\\\\]"))
```

and Voilà! now `xenops` doesnt render `tikzpicture` blocks, im adding this to my `init.el` <br/>


## <span class="section-num">5</span> org mode {#org-mode}


### <span class="section-num">5.1</span> linking to blocks {#linking-to-blocks}

```org
[[file:linear_algebra2.org::n_subset_is_basis][this lemma]]
[[linear_algebra2.org:::/#\+name: +n_subset_is_basis/][this lemma]]
```


### <span class="section-num">5.2</span> org latex errors {#org-latex-errors}

make sure when writing latex snippets that there isnt a space before the closing dollar sign otherwise it would cause weird errors <br/>
for example the following line would produce an error that is hard to retrace <br/>

```latex
$x = 10 $
```


### <span class="section-num">5.3</span> coloring of #+RESULTS and code blocks {#coloring-of-plus-results-and-code-blocks}

when exporting using ox-hugo we get the source blocks in html as `<div class="highlight">` followed by a `<p>` with no class or id that contains the results of the evaluation, if the source block doesnt export results then the div will be followed by something other than a paragraph element <br/>
so what we could do is loop through divs with class `highlight`, check if the next element is a `<p>` and style it however we want. <br/>


### <span class="section-num">5.4</span> `org-babel-temp-file` issue {#org-babel-temp-file-issue}

nginx cant serve some of the images because for some reason the function `org-babel-temp-file` creates file without reading permission for other users <br/>
at first i implemented a temporary workaround in my `init.el` which is basically to run chmod on all relavent files on every export but that stopped working for some reason <br/>
so i decided to just write my own functions to generate random files: <br/>

```elisp
(defun generate-random-string (NUM)
  "Insert a random alphanumerics string of length NUM."
  (interactive "P")
  (setq random-str "")
  (let* (($charset "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789")
         ($baseCount (length $charset)))
    (dotimes (_ (if (numberp NUM) (abs NUM) NUM))
      (setq random-str (concat random-str (char-to-string (elt $charset (random $baseCount)))))))
  random-str)
(defun temp-file (EXT)
  (setq dir-path (concat (expand-file-name user-emacs-directory) "tmp/"))
  (ignore-errors (make-directory dir-path))
  (format "%s%s.%s" dir-path (generate-random-string 7) EXT))
```

so now i just pass `(temp-file "png")` to my source blocks and it works great, example: <br/>

```org
#+begin_src latex :results file graphics :file (temp-file "png")
  \nopagecolor\begin{forest}[10,circle,draw[,phantom][,phantom]]\end{forest}
#+end_src
```


### <span class="section-num">5.5</span> interesting packages {#interesting-packages}

<https://github.com/rasendubi/uniorg> <br/>


### <span class="section-num">5.6</span> org-roam {#org-roam}

see <https://www.orgroam.com/manual.html> <br/>


#### <span class="section-num">5.6.1</span> link error `Unable to resolve link` {#link-error-unable-to-resolve-link}

```C
org-export-data: Unable to resolve link: "b9ekxjau-8829-usi1-86ff-f11eb7eacb5b"
```

the solution is to run <br/>

```elisp
(org-roam-update-org-id-locations)
```


### <span class="section-num">5.7</span> org colnames export error {#org-colnames-export-error}

using :colnames gave me a ton of headaches, probably a bug in org mode but my document wouldnt export, would just throw errors, this is probably a consequence of me having the packages up to date (which means im using unstable packages) <br/>

```org
#+begin_src python :exports both :colnames '("height" "nodes")
  def find(height):
    if height == 0:
      return 1
    if height == 1:
      return 2
    return find(height-1) + find(height-2) + 1
  return [(i,find(i)) for i in range(8)]
#+end_src
```

for now `:cache yes` would work to disable execution on export <br/>


## <span class="section-num">6</span> ivy {#ivy}


### <span class="section-num">6.1</span> selection without match {#selection-without-match}

`C-M-j (ivy-immediate-done)` - exit with the current action, calling it on the current input instead of the current candidate. This is useful especially when creating new files or directories - often the input will match an existing file, which you don’t want to select. <br/>


## <span class="section-num">7</span> tiny {#tiny}

[tiny](https://github.com/abo-abo/tiny) is a package to quickly generate linear ranges, examples: <br/>

```C
m6 15|(1,%s),
m6\n15
m1,5|x_%s
m1\n  5|1 \leq x_%s \leq 6\\
```