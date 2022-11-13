+++
title = "algorithms homework 1"
author = ["mahmood"]
description = "algorithms homework 1"
date = 2022-11-13T15:13:00+02:00
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

<div class="note">

i've mostly ignored the base step of induction when proving loop invariants cuz its too obvious what happens when \\(i=1\\) <br/>

</div>

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

give a loop invariant and prove it using induction <br/>

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

<div class="question">

{{< figure src="/ox-hugo/BBWfyIN.svg" >}} <br/>

<div class="subquestion">

describe what the algorithm returns <br/>

<div class="answer">

returns the number of times the number 17 appears in the array <br/>

</div>

</div>

<div class="subquestion">

state the law of correctness <br/>

<div class="answer">

an algorithm is totally correct if it receives valid input, terminates, and always returns the correct output <br/>

</div>

</div>

<div class="subquestion">

give a loop invariant and prove it using induction <br/>

<div class="answer">

at the end of the \\(i\\)'th iteration, \\(m\\) equals the number of 17's in \\(A[1..i]\\) <br/>
on the \\(i+1\\)'th iteration, the number \\(A[i+1]\\) is checked if equal to 17 and if so, \\(m\\) is incremented by 1, so it would become \\(m+1\\) only if \\(A[i+1]\\) is equal to 17, otherwise it would stay as \\(m\\) <br/>
and so the loop invariant has to be true <br/>

</div>

</div>

<div class="subquestion">

use the loop invariant to prove the correctness of the algorithm <br/>

<div class="answer">

for each input (array) that the function receives it finishes with the correct value of \\(m\\) (the number of 17's <br/>

</div>

</div>

</div>

<div class="question">

{{< figure src="/ox-hugo/qii1Qmi.svg" >}} <br/>

<div class="subquestion">

find the [time complexity]({{< relref "data_structures.md#time-complexity" >}}) of the algorithm <br/>

<div class="answer">

\begin{gather\*}
\text{time} = \sum\_{i=1}^{n} \sum\_{j=1}^{i} \sum\_{k=j}^{n} 1 = \frac{n^3}{3} + \frac{n^2}{2} + \frac{n}{6}\\\\
\Theta\left(\frac{n^3}{3} + \frac{n^2}{2} + \frac{n}{6}\right) = n^3
\end{gather\*}

so the time complexity is \\(\Theta(n^3)\\) <br/>

</div>

</div>

</div>

<div class="question">

{{< figure src="/ox-hugo/TGpSaHc.svg" >}} <br/>

<div class="subquestion">

describe what the algorithm returns <br/>

<div class="answer">

returns the length of the descending sequence of numbers starting from 1 up until N-1 <br/>

</div>

</div>

<div class="subquestion">

state the law of correctness <br/>

<div class="answer">

an algorithm is totally correct if it receives valid input, terminates, and always returns the correct output <br/>

</div>

</div>

<div class="subquestion">

give a loop invariant that is true after the `if` statement and prove it using induction <br/>

<div class="answer">

at the end of each iteration, \\(i\\) equals the length of the longest descending sequence starting at 1 <br/>
on the \\(i+1\\)'th iteration, the check \\(A[i] \ge A[i+1]\\) is applied, and if it is false, the loop terminates, and \\(i\\) would still equal the length of \\(A[1,\dots,i]\\) which is the longest descending sequence starting at 1, otherwise it would equal the length of \\(A[1,\dots,i+1]\\) which equals \\(i+1\\), which then would be the longest descending sequence starting at 1 <br/>

</div>

</div>

<div class="subquestion">

use the loop invariant to prove the correctness of the algorithm <br/>

<div class="answer">

for each array that the algorithm runs on the loop terminates with the \\(i\\) containing the length of the descending sequence starting at 1 and the function returns that <br/>
and since for each input it terminates and returns the correct output it is correct <br/>

</div>

</div>

</div>

<div class="question">

{{< figure src="/ox-hugo/9VhLqTx.svg" >}} <br/>

<div class="subquestion">

define the returned value \\(m\\) <br/>

<div class="answer">

\\(m\\) returns the number of descending pairs of numbers that are next to each other in the array <br/>

</div>

</div>

<div class="subquestion">

give a loop invariant that is true after the `if` statement and prove it using induction <br/>

<div class="answer">

after the \\(i\\)'th iteration the value of \\(m\\) equals the number of descending pairs of consecutive numbers <br/>
it is true for \\(i=1\\) as \\(m\\) would equal 1 if \\(A[1] > A[2]\\) <br/>
on the \\(i+1\\)'th iteraiton the value of \\(m\\) is incremented only if \\(A[i+1] > A[i+2]\\) which proves the loop invariant true <br/>

</div>

</div>

<div class="subquestion">

prove the hypothesis you described above about the value of \\(m\\) <br/>

<div class="answer">

after the loop the value of \\(m\\) is returned which we've proved to equal the number of descending pairs of consecutive numbers <br/>

</div>

</div>

</div>

