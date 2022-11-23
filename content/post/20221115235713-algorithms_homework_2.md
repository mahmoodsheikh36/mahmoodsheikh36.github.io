+++
title = "algorithms homework 2"
author = ["mahmood"]
description = "proving algorithms with nested loops"
date = 2022-11-23T06:50:00+02:00
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

homework 2 of the [algorithms]({{< relref "algorithms.md" >}}) course, on the subject of [proving algorithm correctness by induction]({{< relref "20221104220603-algorithm_correctness.md#proving-algorithm-correctness-by-induction" >}}) for algorithms with nested loops <br/>

<div class="question">

{{< figure src="/ox-hugo/8hsU9UW.svg" >}} <br/>

<div class="subquestion">

what is the problem that \\(\textsc{Alg1}\\) solves? <br/>

<div class="answer">

imagine the array `A` displayed as a \\(i\times j\\) [matrix]({{< relref "linear_algebra2.md#matrix" >}}), then the algorithm would be returning the smallest of the biggest number of each row, i.e. the smallest number in the list of numbers that are each the biggest in the row they correspond to <br/>

</div>

</div>

<div class="subquestion">

state the law of correctness for \\(\textsc{Alg1}\\) <br/>

<div class="answer">

\\(\textsc{Alg1}\\) is correct if for every given array it terminates and returns the value that is the smallest in the list of numbers that are each the biggest in the subarray they correspond to <br/>

</div>

</div>

<div class="subquestion">

propose a [loop invariant]({{< relref "20221104221055-loop_invariant.md" >}}) for the inner loop and prove it using [induction]({{< relref "20220707193301-mathematical_induction.md" >}}) <br/>

<div class="answer">

after the `j`'th iteration, the following would hold true: (note that `i` here is constant) <br/>
\\[
(\forall 1 \le x \le j)[b \ge A[i,x]]
\\] <br/>
we prove this using induction: <br/>

1.  the condition for the base case is met: \\(j=1 \implies b=A[i,1]\\), in this case `x` would be only tested for the case `x=1` in which it has to be true that \\(x=1 \implies b \ge A[i,1]\\), which it is <br/>
2.  assume truth for the `j`'th iteration, \\((\forall 1 \le x \le j)[b \ge A[i,x]]\\) <br/>
3.  prove truth for the `j+1`'th iteration: on the `j+1`'th iteration, we check whether \\(A[i,j+1] > b\\), and if it is true, we assign the value of \\(A[i,j+1]\\) to \\(b\\), this way it would remain true that \\(b\\) is bigger than all elements \\(A[i,1,\dots,i,j+1]\\) and so \\((\forall 1 \le x \le j+1)[b \ge A[i,x]]\\) <br/>

</div>

</div>

<div class="subquestion">

propose a loop invariant for the outer loop and prove it using induction with the help of the inner loop invariant <br/>

<div class="answer">

after the `i`'th iteration, \\(a\\) would equal the smallest of the biggest numbers of each of the subarrays \\(A[1,\dots,i]\\) <br/>
we prove this using induction: <br/>

1.  the <span class="underline">base</span> case, after the first iteration we know for a fact that \\(a=b\\) because the check \\(b<\infty\\) would certainly pass and \\(a=b\\) would be equal to the biggest element in the subarray `A[1]` (a consequence of the inner loop invariant) and so the loop invariant holds true <br/>
2.  assume truth for the `i`'th iteration, \\(a\\) equals the smallest of the list of numbers that are each biggest in their respective subarray <br/>
3.  on the `i+1`'th iteration, after the inner loop is done, \\(b\\) would hold the biggest value in the subarray `A[i+1]`, we compare that with \\(a\\), and only if it is smaller do we assign it to \\(a\\) and so \\(a\\) would remain the smallest of the list of numbers that are each biggest in their respective subarray <br/>

</div>

</div>

<div class="subquestion">

use the loop invariant you proposed for the outer loop to prove the correctness of the algorithm <br/>

<div class="answer">

we know the algorithm terminates for sure because the loops are limited by the value of `N` <br/>
for each input that the algorithm receives, after the outer loop is done, the algorithm returns the value of `a`, which would be the smallest of the list of numbers that are each biggest in their respective subarray <br/>
and since the algorithm does terminate and return the correct value for any input that it receives it is correct <br/>

</div>

</div>

</div>

<div class="question">

{{< figure src="/ox-hugo/Kj1TKAO.svg" >}} <br/>

<div class="subquestion">

what is the problem that \\(\textsc{Alg2}\\) solves? <br/>

<div class="answer">

finding the smallest difference there is between any given pair of numbers in the array <br/>

</div>

</div>

<div class="subquestion">

state the law of correctness for \\(\textsc{Alg1}\\) <br/>

<div class="answer">

\\(\textsc{Alg2}\\) is correct if for any given array it terminates and returns the smallest difference there is between any given pair of numbers in the array <br/>

</div>

</div>

<div class="subquestion">

propose a loop invariant for the inner loop and prove it using induction <br/>

<div class="answer">

after the `j`'th iteration, `M` holds the smallest difference between the value `A[i]` and any of the values \\(A[i+1,\dots,j]\\) <br/>
we prove it using induction: <br/>

1.  the <span class="underline">base</span> case, after the first iteration where \\(j=2\\), the value of `M` would be the difference between `A[1]` and `A[2]` and so the loop invariant holds true <br/>
2.  assume truth for the `j`'th iteration, \\(M\\) equals the smallest difference between the value of `A[i]` and any of the values \\(A[i+1,\dots,j]\\) <br/>
3.  prove truth for the `j+1`'th iteration: on the `j+1`'th iteration, we assign to `M` the difference between `A[i]` and `A[j]` only if it is smaller than all the previous differences and thus `M` would remain the smallest difference there is <br/>

therefore the loop invariant must be true <br/>

</div>

</div>

<div class="subquestion">

propose a loop invariant for the outer loop and prove it using induction with the help of the inner loop invariant <br/>

<div class="answer">

\\[
(\forall 1 \le x \le i)(\forall (a,b) \in A[1,\dots,x] \times A[x+1,\dots,N])[M \le |a-b|]
\\] <br/>
in other words, for all \\(1 \le x \le i\\), consider the pairs constructed from the subarrays \\(A[1,\dots,x]\\) and \\(A[x+1,\dots,N]\\), \\(M\\) would equal the difference between the pair that contains the numbers that are closest to each other on the real number line <br/>

</div>

</div>

</div>

<div class="question">

{{< figure src="/ox-hugo/RuSpG10.svg" >}} <br/>

</div>

