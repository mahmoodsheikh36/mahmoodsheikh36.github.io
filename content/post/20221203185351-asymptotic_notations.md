+++
title = "asymptotic notation"
author = ["mahmood"]
description = "asymptotic notation"
date = 2022-12-04T11:52:00+02:00
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

| notation                  | name      | formal definition                                                                                                                     | limit definition                                                                               |
|---------------------------|-----------|---------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| \\(f(n) = O(g(n))\\)      | Big Oh    | \\(\exists k > 0 \ \exists n\_0 \ \forall n > n\_0 : \vert f(n) \vert \leq k \cdot g(n)\\)                                            | \\(\lim\_{n\to\infty} \frac{\vert f(n) \vert}{g(n)} = c\\), where \\(c \geq 0\\) is a constant |
| \\(f(n) = \Omega(g(n))\\) | Big Omega | \\(\exists k > 0 \ \exists n\_0 \ \forall n > n\_0 : \vert f(n) \vert \geq k \cdot g(n)\\)                                            | \\(\lim\_{n\to\infty} \frac{g(n)}{f(n)} = c\\), where \\(c \geq 0\\) is a constant             |
| \\(f(n) = \Theta(g(n))\\) | Big Theta | \\(\exists k\_1 > 0\ \exists k\_2 > 0\ \exists n\_0\ \forall n > n\_0 : k\_1 \cdot g(n) \leq \vert f(n) \vert \leq k\_2 \cdot g(n)\\) | \\(\lim\_{n\to\infty} \frac{f(n)}{g(n)} = c\\), where \\(c > 0\\) is a constant                |


## <span class="section-num">1</span> Big O {#big-o}

<div class="definition">

**Big O** of a [function]({{< relref "discrete_maths2.md#function" >}}) \\(f\\), denoted by \\(O(f)\\), is an upper asymptotic bound of \\(f\\) <br/>

</div>


## <span class="section-num">2</span> Big Omega {#big-omega}

<div class="definition">

**Big Omega** of a [function]({{< relref "discrete_maths2.md#function" >}}) \\(f\\), denoted by \\(\Omega(f)\\), is a lower asymptotic bound of \\(f\\) <br/>

</div>


## <span class="section-num">3</span> Big Theta {#big-theta}

<div class="definition">

**Big Theta** of a [function]({{< relref "discrete_maths2.md#function" >}}) \\(f\\), denoted by \\(\Theta(f)\\), is tight bound of \\(f\\), so it is both [Big Omega](#big-omega) and [Big O](#big-o) <br/>

</div>


## <span class="section-num">4</span> order of growth {#order-of-growth}

<div class="definition">

the order of growth of an [algorithm]({{< relref "20220706211958-algorithm.md" >}}) is an approximation of the time required to run a computer program as the input size increases, the order of growth ignores the constant factor needed for fixed operations and focuses instead on the operations that increase proportional to input size <br/>
an order of growth is a set of functions whose asymptotic growth behavior is considered equivalent. for example, \\(2n\\), \\(100n\\) and \\(n+1\\) belong to the same order of growth, which is written \\(O(n)\\) in big-oh notation and often called linear because every function in the set grows linearly with \\(n\\) <br/>

</div>

