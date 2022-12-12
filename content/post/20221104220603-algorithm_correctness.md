+++
title = "algorithm correctness"
author = ["mahmood"]
date = 2022-12-13T00:29:00+02:00
tags = ["math", "computer-science"]
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

an algorithm is totally correct if it receives valid input, terminates, and always returns the correct output <br/>

</div>


## <span class="section-num">1</span> proving algorithm correctness by induction {#proving-algorithm-correctness-by-induction}

the only way to prove the [correctness of an algorithm]({{< relref "20221104220603-algorithm_correctness.md" >}}) over all possible inputs is by reasoning formally or mathematically about it. <br/>
here we'll be using [mathematical induction]({{< relref "20220707193301-mathematical_induction.md" >}}) <br/>

<div class="my_example">

![](/ox-hugo/cueVWTf.svg) <br/>
we need to prove the correctness of this algorithm, and we do so using induction <br/>
for each \\(i=1,2,\dots,k\\), when the algorithm arrives to the end of the loop for the `i`'th time, the following [loop invariant]({{< relref "20221104221055-loop_invariant.md" >}}) holds true: <br/>
\\[
sum = \sum\_{j=1}^{i} A[j]
\\] <br/>
with the loop invariant in mind, we use induction <br/>
on the `i+1`'th iteration, we would be adding the value `A[i+1]` to the variable `sum`, so we know on the `i+1`'th iteration the following is true: <br/>
\\[
sum = \sum\_{j=1}^{i} A[j] + A[i+1] = \sum\_{j=1}^{i+1} A[j]
\\] <br/>
which is what we needed to prove <br/>

</div>


## <span class="section-num">2</span> correctness of recursive algorithms {#correctness-of-recursive-algorithms}

<div class="my_example">

consider the following function <br/>

![](/ox-hugo/e8I9jOY.svg) <br/>
<span class="underline">proof that the algorithm terminates</span>: <br/>
assume that \\(\textsc{Recursive-Sum}\\) runs on an array `A`, on each recurring call, the size of the input array `A` is halved, its obvious that at the end of every sequence of calls the size of the input array would arrive to 1 which is the edge case that would cause the function to terminate <br/>
<span class="underline">proof of correctness</span>: <br/>
we prove this by induction on the number of elements in the array <br/>

1.  for \\(|A|=1\\) which is the edge case, the algorithm returns \\(A[1]\\), the only element in \\(A\\), its obvious that the output is correct <br/>
2.  we use [perfect induction]({{< relref "20220707193301-mathematical_induction.md#perfect-induction" >}}) on the size of the input, we assume that the algorithm correctly computes the sum of the elements of any array whose size is smaller than `n` <br/>
3.  let `A` be an arbitrary array of size `n`, the call to \\(\textsc{Recursive-Sum}(A)\\) executes the calls \\(\textsc{Recursive-Sum}(A\_l)\\) and \\(\textsc{Recursive-Sum}(A\_r)\\), the size of the arrays \\(A\_l\\) and \\(A\_r\\) is smaller than \\(n\\), so according to the previous step we know those two recurring calls do return the correct sum of the corresponding subarrays, and since we are returning the sum of those sums we know for sure we are returning the correct sum <br/>

</div>

