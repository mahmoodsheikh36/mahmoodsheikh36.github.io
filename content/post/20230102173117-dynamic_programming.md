+++
title = "dynamic programming"
author = ["mahmood"]
date = 2023-01-04T19:51:00+02:00
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

<div class="definition">

dynamic programming amounts to breaking down an optimization problem into simpler sub-problems, and storing the solution to each sub-problem so that each sub-problem is only solved once. to be honest, this definition may not make total sense until you see an example of a sub-problem <br/>

</div>

<div class="subquestion">

given the vector of integers A of size n, for each pair of indicies i&lt;j we define \\(\text{diff}(i,j) = A[j]-A[i]\\), write an [algorithm]({{< relref "20220706211958-algorithm.md" >}}) that finds \\(\text{maxdiff} = \underset{i<j}{\max} \\{\text{diff}(i,j)\\}\\}\\) <br/>
for example for the vector \\(\\{9,2,8,4,0,6,7\\}\\) the result should be is \\(\text{maxdiff} = 7 - 0 = 7\\) <br/>

<div class="answer">

we use an array \\(B[1,\dots,n]\\) such that \\(B[i]=\textsc{Max}(A[i+1,\dots,n])\\) <br/>

{{< figure src="/ox-hugo/LhiSdNn.svg" >}} <br/>

</div>

</div>

<div class="question">

given a vector A of positive integers, find the maximum sum of a subarray whose indicies have a distance of more than 1 <br/>

<div class="answer">

we use the array B such that \\(B[i]\\) is the solution to the problem in the indicies \\(1\dots i\\) such that we have to pick \\(A[i]\\) <br/>
\\(B[i+1] = A[i+1] + \textsc{Max}\\{B[i-1],B[i-2]\\}\\) is the recursion step <br/>

</div>

</div>

<div class="question">

given an array A of integers, we need to find a subarray whose sum is the maximum <br/>

<div class="answer">

B[i] is the maximum sum that starts with A[i] <br/>

{{< figure src="/ox-hugo/xD6Voyh.svg" >}} <br/>

this algorithm runs in \\(\Theta(n)\\) <br/>

</div>

</div>

<div class="question">

given a square maze of the size \\(n \times n\\), we start in the upper left corner and have to arrive at the lower right corner by going down/right but not through a wall, in how many ways can this be done? <br/>

<div class="answer">

B[i] is the number of ways to arrive from the point (i,j) in the maze to the end <br/>

</div>

</div>

<div class="question">

given the following problem: <br/>
<span class="underline">input</span>: an array of integers <br/>
<span class="underline">output</span>: a subarray (non-consecutive) whose sum is maximal that doesnt contain two consecutive elements <br/>
example: input \\(3,{\bf 12},6\\) output 12 <br/>
example: input \\({\bf 5},4,{\bf 9}\\) output 14 <br/>
example: input \\({\bf 13},3,5,{\bf 9}\\) output 22 <br/>
example: input \\({\bf 12},5,6,{\bf 17},9\\) output 29 <br/>

<div class="answer">

we can conclude from the examples that the number of non-consecutive numbers that arent included in the answer is 2 <br/>
we can also stem the following 2 lemmas: <br/>

<div class="lemma">

the optimal solution contains atleast a single element of every three consecutive elements <br/>

<div class="proof">

we assume in contradiction that for the index i, such that \\(1 \le i \le n-2\\), the optimal solution doesnt contain A[i],A[i+1], and A[i+2], given that A[i+1]&gt;0, appending A[i+1] to the given solution would give us an array with a bigger sum than the array we already have which results in a contradiction <br/>

</div>

</div>

<div class="lemma">

the optimal solution always contains one of A[n],A[n-1], but not both <br/>

<div class="proof">

if A[n-2] is not included in a given solution, then max(A[n-1],A[n]) is included, if A[n-2] is included in a solution, its obvious that a[n] is also included <br/>

</div>

</div>

every optimal subarray (which there are a few) contains A[n-1] or A[n], if we find a subarray that contains A[n] and has the biggest sum of the arrays that contain A[n] and find a subarray that contains A[n-1] that has the biggest sum of those that contain A[n-1] then the one with the bigger sum of both is the solution <br/>
to find them, we define the [recursive]({{< relref "20221105001640-recursive_function.md" >}}) function `P1R` such that the call `P1R(A,i)` would find the solution for `P1` for the subarray \\(A[1,\dots,i]\\) under the assumption that A[i] is included in the solution <br/>
for for the array `A=[3,12,4,6]` we'd have `P1R(A,3) = A[1]+A[3] = 7` <br/>
to understand how the function `P1R` works, we notice that given A[i] is part of the output so A[i-1] cant be included, and A[i-3] and A[i-2] cant both be included so: <br/>
\\[
A[i] + \textsc{Max}\left(\left\\{P1R(A,i-2), P1R(A,i-3)\right\\}\right)
\\] <br/>
so we finally write the algorithm: <br/>

{{< figure src="/ox-hugo/lPe0Ruj.svg" >}} <br/>

</div>

</div>

