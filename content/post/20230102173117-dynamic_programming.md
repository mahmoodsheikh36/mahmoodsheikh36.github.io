+++
title = "dynamic programming"
author = ["mahmood"]
date = 2023-01-08T23:58:00+02:00
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

<div class="question" id="dynamic_programming_essential_problem">

provide an algorithm that is as efficient as possible that solves the following problem: <br/>
<span class="underline">input</span>: an array of [natural]({{< relref "calculus2.md#natural" >}}) numbers <br/>
<span class="underline">output</span>: a list of k pairs (\\(k \le n/2\\)) of indicies of the form i,i+1 such that none of the indicies of the array appears more than once and the sum \\(\sum A[i]-A[i+1]\\) is maximal <br/>
example: for the input 12,11,2,4,1,10,8,12 the output should be (11,2),(4,1),(10,8) <br/>

<div class="subquestion">

describe the algorithm in words <br/>

<div class="answer">

its all in the next subquestion <br/>

</div>

</div>

<div class="subquestion">

write pseudocode for the algorithm <br/>

<div class="answer">

first, we propose a solution, then optimize it using dynamic programming <br/>

{{< figure src="/ox-hugo/2CcvjGm.svg" >}} <br/>

to make this simpler for implementation and for further optimization we use an additional argument, \\(i\\), thats an index whose initial value should be \\(i=|A|-1\\), because thats how the algorithm i've written works <br/>

{{< figure src="/ox-hugo/oPeEeuE.svg" >}} <br/>

this algorithm has exponential time complexity, we could precompute the values that would be returned by \\(\textsc{Question1-Alg}\\) into an array B, such that \\(B[i] := \textsc{Question1-Alg-Recurse}(A, i-1)\\), we use another array C to keep track of the pairs we pick, because we are required to do so <br/>

{{< figure src="/ox-hugo/N4Ymsmc.svg" >}} <br/>

by running \\(\textsc{Question1-Alg-Efficient}\\), \\(C\\) would contain the pairs of indicies and \\(B[N-1]\\) the sum we're looking for, this algorithm runs in \\(\Theta(n)\\) <br/>

</div>

</div>

<div class="subquestion">

show the [correctness]({{< relref "20221104220603-algorithm_correctness.md" >}}) of the algorithm you proposed <br/>

<div class="answer">

we prove the correctness of the algorithm using [induction]({{< relref "20220707193301-mathematical_induction.md" >}}) on the size of the input array <br/>

1.  base step: for \\(|A|=2\\), the solution, \\(B[1]\\), would equal \\(A[1]-A[2]\\), and C to a singleton of \\((1,2)\\) which is the only pair in the array so it is the solution <br/>
2.  the [induction hypothesis]({{< relref "20230108230724-induction_hypothesis.md" >}}): we assume truth for \\(|A|=n\\) <br/>
3.  the [induction step]({{< relref "20230108230748-induction_step.md" >}}), we show truth for \\(|A|=n+1\\) <br/>
    on the last iteration of the for loop \\(4,\dots,n+1-1\\), we would be checking which of the values \\(A[i-1]-A[i]+B[i-3]\\),\\(A[i]-A[i+1]+B[i-2]\\) is bigger, the first corresponding to a [combination]({{< relref "20221204105120-combinatorics.md#combination" >}}) of pairs whose sum would've been maximal up until \\(A[i-2]\\), and the second corresponding to a combination of pairs whose sum would've been maximal up until \\(A[i-1]\\), of those two, we pick one and add to it yet another pair only if the addition of that pair makes the sum stay or become bigger than the sum of the other combination with the other new pair added to it, so the last sum in B would still be maximal, and the pairs in C, likewise, would be corresponding to the newly found maximal sum <br/>

<div class="note">

im not sure of this proof, should reevaluate it <br/>

</div>

</div>

</div>

<div class="subquestion">

what is the [time complexity]({{< relref "20221130014441-time_complexity.md" >}}) of the algorith? <br/>

<div class="answer">

its simply a single for loop with no added complexity whatsoever, so its just \\(\Theta(n)\\) <br/>

</div>

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

we can stem the following 2 lemmas: <br/>

<div class="lemma">

the optimal solution (i.e. the subarray whose sum is maximal) contains atleast a single element of every three consecutive elements <br/>

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
for the array `A=[3,12,4,6]` we'd have `P1R(A,3) = A[1]+A[3] = 7` <br/>
to understand how the function `P1R` works, we notice that given A[i] is part of the output so A[i-1] cant be included, and A[i-3] and A[i-2] cant both be included so: <br/>
\\[
A[i] + \textsc{Max}\left(\left\\{P1R(A,i-2), P1R(A,i-3)\right\\}\right)
\\] <br/>
so we finally write the algorithm: <br/>

{{< figure src="/ox-hugo/lPe0Ruj.svg" >}} <br/>

this solution works, but its [time complexity]({{< relref "20221130014441-time_complexity.md" >}}) is probably [exponential]({{< relref "calculus2.md#exponential" >}}) <br/>
the arguments that \\(\textsc{P1R}\\) gets called with are the numbers \\(1,2,\dots,n\\), a total of \\(n\\) numbers, so the function gets called with the same arguments many times, to get over this and achieve a [linear]({{< relref "calculus2.md#linear" >}}) time complexity we use some sort of "cache", a **look up table**, which is what dynamic programming essentially proposes <br/>
the cache we propose is an array \\(B\\), of size \\(n\\), such that \\(B[i]\\) is defined as the return value of \\(\textsc{P1R}(A,i)\\), the algorithm finds \\(B[i]\\) without calling \\(\textsc{P1R}(A,i)\\) <br/>

{{< figure src="/ox-hugo/dZ4Qm4h.svg" >}} <br/>

</div>

</div>

<div class="question">

given the vector of integers A of size n, for each pair of indicies i&lt;j we define \\(\text{diff}(i,j) = A[j]-A[i]\\), write an [algorithm]({{< relref "20220706211958-algorithm.md" >}}) that finds \\(\text{maxdiff} = \underset{i<j}{\max} \\{\text{diff}(i,j)\\}\\}\\) <br/>
for example for the vector \\(\\{9,2,8,4,0,6,7\\}\\) the result should be \\(\text{maxdiff} = 7 - 0 = 7\\) <br/>

<div class="answer">

we use an array \\(B[1,\dots,n]\\) such that \\(B[i]=\textsc{Max}(A[i+1,\dots,n])\\) <br/>

{{< figure src="/ox-hugo/LhiSdNn.svg" >}} <br/>

</div>

</div>

<div class="question">

given a vector A of positive integers, find the maximum sum of a subarray whose indicies have a distance of more than 1 <br/>

<div class="answer">

we use the array B such that \\(B[i]\\) is the solution to the problem in the indicies \\(1\dots i\\) under the constraint that we have to pick \\(A[i]\\) <br/>
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

given an \\(n \times n\\) grid board <br/>

</div>

