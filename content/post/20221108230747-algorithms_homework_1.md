+++
title = "algorithms homework 1"
author = ["mahmood"]
description = "algorithms homework 1"
date = 2022-11-11T21:22:00+02:00
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
  \(\def\textsc#1{\dosc#1\csod} \def\dosc#1#2\csod{{\rm #1{\small #2}}}\)
</p>

<!-- mathjax -->
<script>
// auto load modules like cancel
window.MathJax = {
  loader: {load: ['[tex]/autoload', '[tex]/mathtools', '[tex]/physics']},
  tex: {
    packages: {'[+]': ['autoload', 'mathtools', 'physics']}
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

homework 1 of the [algorithms]({{< relref "algorithms.md" >}}) course, on the subject of [algorithm correctness]({{< relref "20221104220603-algorithm_correctness.md" >}}) <br/>

<div class="question">

given the [array]({{< relref "20220728190531-array.md" >}}) `A` that contains `N` integers <br/>
given the following algorithm: <br/>

{{< figure src="/ox-hugo/yEdcB40.svg" >}} <br/>

<div class="subquestion">

describe what the algorithm does <br/>

<div class="answer">

returns the index of the biggest element in the array <br/>

</div>

</div>

<div class="subquestion">

state the law of correctness <br/>

<div class="answer">

an algorithm is totally correct if it receives valid input, terminates, and always returns the correct output <br/>

</div>

</div>

<div class="subquestion">

give a [loop invariant]({{< relref "20221104221055-loop_invariant.md" >}}) and prove it using [induction]({{< relref "20220707193301-mathematical_induction.md" >}}) <br/>

<div class="answer">

\\[
(\forall 1 \le i \le N)[A[i] \le A[m]]
\\] <br/>
for each \\(N=1,2,\dots,k\\), when the algorithm arrives to the end of the loop for the `N`'th time, the loop invariant holds true <br/>
on the `N+1`'th iteration, we would be comparing checking whether \\(A[N+1]\\) is bigger than \\(A[m]\\) and if so we would be changing the value of \\(m\\) to \\(N+1\\) and so it would become true that \\((\forall 1 \le i \le N+1)[A[i] \le A[m]]\\) <br/>

</div>

</div>

<div class="subquestion">

use the loop invariant to prove the correctness of the algorithm <br/>

<div class="answer">

we have proven that \\((\forall 1 \le i \le N)[A[i] \le A[m]]\\), so for any input that the algorithm receives it terminates with the correct value \\(m\\) and so it is a correct algorithm by definition because for all input it terminates and returns the correct output <br/>

</div>

</div>

</div>

