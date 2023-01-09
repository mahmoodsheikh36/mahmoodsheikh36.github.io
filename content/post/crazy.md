+++
title = "im crazy"
author = ["mahmood"]
description = "im crazy"
date = 2023-01-09T14:05:00+02:00
tags = ["math"]
draft = false
+++

<p style="height:0px; display: none;">
  \(\DeclareMathOperator{\spn}{span}\)
  \(\DeclareMathOperator{\dom}{domain}\)
  \(\DeclareMathOperator{\ran}{range}\)
  \(\DeclareMathOperator{\rng}{range}\)
  \(\DeclareMathOperator{\img}{Im}\)
  \(\DeclareMathOperator{\adj}{adj}\)
  \(\newcommand\dif[1]{\:\textrm{d}#1}\)
  \(\DeclarePairedDelimiter\ceil{\lceil}{\rceil}\)
  \(\DeclarePairedDelimiter\floor{\lfloor}{\rfloor}\)
  \(\newcommand{\ihat}{\hat{\textbf{i}}}\)
  \(\newcommand{\jhat}{\hat{\textbf{j}}}\)
  \(\newcommand{\khat}{\hat{\textbf{k}}}\)
  \(\newcommand{\rhat}{\hat{\textbf{r}}}\)
  \(\newcommand{\thetahat}{\boldsymbol{\hat{\theta}}}\)
</p>

<!-- mathjax -->
<script>
// auto load modules like cancel
window.MathJax = {
  loader: {load: ['[tex]/autoload', '[tex]/mathtools', '[tex]/physics']},
  tex: {
    packages: {'[+]': ['autoload', 'mathtools', 'physics']},
    macros: {
      textsc: ['\\style{font-variant-caps: small-caps}{\\text{#1}}', 1]
    }
  },
  tex2jax: {preview: "none"}
};
/* since i've configured org mode to insert a new line after every line i need to get rid of those that mess up my html */
function removeNewlineAfterDisplayMath() {
  elems = document.querySelectorAll('mjx-container')
  for (i = 0; i < elems.length; ++i) {
    elem = elems[i]
    if (elem.getAttribute('display') !== 'true')
      continue
    nextElem = elem.nextElementSibling
    if (nextElem !== null && nextElem.tagName === 'BR')
      nextElem.remove()
  }
}
window.onload = function() {
  removeNewlineAfterDisplayMath()
}
</script>

<!-- katex, a lackluster -->
<!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css" integrity="sha384-Xi8rHCmBmhbuyyhbI88391ZKP2dmfnOl4rT9ZfRI7mLTdk1wblIUnrIq35nqwEvC" crossorigin="anonymous"> -->
<!-- <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.js" integrity="sha384-X/XCfMm41VSsqRNQgDerQczD69XqmjOOOwYQvr/uuC+j4OPoNhVgjdGFwhvN02Ja" crossorigin="anonymous"></script> -->
<!-- <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/contrib/auto-render.min.js" integrity="sha384-+XBljXPPiv+OzfbB3cVmLHf4hdUFHlWNZN5spNQ7rmHTXpd7WvJum6fIACpNNfIR" crossorigin="anonymous" -->
<!--     onload="renderMathInElement(document.body);"></script> -->

<script type="text/javascript" id="MathJax-script" defer src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js">
</script>

so i was a bit curious about the size of the files ive been manually writing for the past year since i started college <br/>
and boy was i shocked to see the outcome of this curiousity <br/>


## <span class="section-num">1</span> number of files {#number-of-files}

lets start with the least interesting part, the number of files ive created and edited and still have. <br/>
i write almost everything in `tex` or `org` files so thats what im gonna search for here. <br/>

```bash
echo in total, we have: $(find ../ -name '*.org' -or -name '*.tex' | wc -l) files
```

```text
in total, we have: 624 files
```


## <span class="section-num">2</span> actual file list {#actual-file-list}

now we list them and check how much text each file contains: <br/>

```bash
find ../ -name '*.org' -or -name '*.tex' | grep -v 'logseq' | grep -v 'out/' | xargs wc | sort -k3 -n -r | head -30
```

| lines | words  | characters | filename                                                                |
|-------|--------|------------|-------------------------------------------------------------------------|
| 63336 | 288324 | 2161688    | total                                                                   |
| 3588  | 15679  | 143199     | ../data_structures/data_structures.org                                  |
| 2580  | 16014  | 116370     | ../linear_algebra2/linear_algebra2.org                                  |
| 2296  | 11418  | 96788      | ../calculus2/calculus2.org                                              |
| 1239  | 4764   | 59047      | ../data_structures/homework8.org                                        |
| 945   | 5966   | 48088      | ../networking/networking.org                                            |
| 953   | 4947   | 37896      | ../discrete_maths2/discrete_maths2.org                                  |
| 1197  | 5363   | 34624      | ../linear_algebra2/homework5.org                                        |
| 1093  | 5444   | 33665      | ../notes/data/FC/03889B-04C0-453D-B178-987A12945095/boolean_algebra.tex |
| 881   | 3001   | 32633      | ../code/tikz.org                                                        |
| 280   | 1819   | 30552      | ../notes/wallpaper.org                                                  |
| 1169  | 4877   | 29905      | ../linear_algebra2/homework9.org                                        |
| 153   | 2067   | 29074      | ../notes/movies.org                                                     |
| 768   | 3914   | 27856      | ../notes/boolean_algebra.org                                            |
| 1053  | 5916   | 25682      | ../discrete_maths/homework11.tex                                        |
| 818   | 3084   | 25365      | ../code/sage.org                                                        |
| 652   | 3233   | 24258      | ../notes/probability.org                                                |
| 441   | 3038   | 23297      | ../notes/agenda.org                                                     |
| 1229  | 6328   | 23173      | ../linear_algebra/homework4.tex                                         |
| 745   | 2491   | 22410      | ../gui_programming/gui_programming.org                                  |
| 1158  | 3431   | 21523      | ../linear_algebra/homework11.tex                                        |
| 1929  | 3640   | 21096      | ../linear_algebra/homework9.tex                                         |
| 337   | 2519   | 18441      | ../linear_algebra2/homework6.org                                        |
| 254   | 2514   | 17158      | ../linear_algebra2/homework8.org                                        |
| 431   | 3660   | 16063      | ../discrete_maths/homework10.tex                                        |
| 335   | 845    | 15976      | ../data_structures/homework6.org                                        |
| 596   | 2227   | 15019      | ../linear_algebra2/homework3.tex                                        |
| 343   | 2015   | 14924      | ../notes/20221204105120-combinatorics.org                               |
| 371   | 1855   | 14844      | ../notes/20221105001640-recursive_function.org                          |
| 347   | 1420   | 14516      | ../discrete_maths2/homework7.org                                        |

thats right, more than **2 million** characters ive written **and** saved , who knows how much i have actually written, then edited or deleted, but this is what i have so far. <br/>

<div class="note">

i did trim the file list because there are some private stuff in there <br/>

</div>

