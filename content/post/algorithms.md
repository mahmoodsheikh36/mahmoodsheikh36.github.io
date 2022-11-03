+++
title = "algorithms"
author = ["mahmood"]
description = "algorithms course from college"
date = 2022-11-03T23:29:00+02:00
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


## <span class="section-num">1</span> algorithm correctness {#algorithm-correctness}

<div class="definition">

an algorithm is totally correct if it receives valid input, terminates, and always returns the correct output <br/>

</div>


### <span class="section-num">1.1</span> proving algorithm correctness by induction {#proving-algorithm-correctness-by-induction}

the only way to prove the correctness of an algorithm over all possible inputs is by reasoning formally or mathematically about it. <br/>
here we'll be using [induction]({{< relref "20220707193301-mathematical_induction.md" >}}) <br/>

<div class="my_example">

consider the following algorithm: <br/>

{{< figure src="/ox-hugo/QW3OLMD.svg" >}} <br/>

we can **observe** that \\(A[1] \geq A[j]\\) for \\(1 \leq j \leq i-1\\) <br/>
we can prove this by [induction]({{< relref "20220707193301-mathematical_induction.md" >}}) <br/>
we assume that our "observation" is true for \\(i=k\\), i.e. \\(A[1] \geq A[j]\\) for \\(1 \leq j \leq k-1\\) <br/>
we assume that we arrived to this point when \\(i=k+1\\), hence, since we arrived at this point then we know the condition hasnt been met yet so \\(A[k] \leq A[1]\\), then for \\(1 \leq j \leq k\\) we know \\(A[1] \geq A[j]\\), which is what we wanted to prove <br/>

</div>

