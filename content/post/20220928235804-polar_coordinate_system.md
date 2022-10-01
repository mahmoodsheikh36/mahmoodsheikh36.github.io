+++
title = "polar coordinate system"
author = ["mahmood"]
description = "polar coordinate system"
date = 2022-10-01T22:12:00+03:00
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

a 2d [coordinate system]({{< relref "20220929000626-coordinate_system.md" >}}) <br/>
points in the \\(x,y\\) plane are described not by \\((x,y)\\) coordinates but by \\((r,\theta)\\) coordinates, where \\(r\\) is the [magnitude]({{< relref "linear_algebra2.md#magnitude" >}}) and \\(\theta\\) is the angle between the [vector]({{< relref "linear_algebra2.md#vector" >}}) and the \\(x\\) axis <br/>

\begin{align\*}
  r &= \sqrt{x^2+y^2}\\\\
  \theta &= \arctan\left(\frac{y}{x}\right)
\end{align\*}

the [base vector]({{< relref "linear_algebra2.md#basis" >}})s of this coordinate system are usually denoted by \\(\rhat\\) and \\(\thetahat\\) <br/>

\begin{align\*}
  \rhat(\theta) &= \cos\theta\ihat + \sin\theta\jhat\\\\
  \thetahat(\theta) &= -\sin\theta\ihat + \cos\theta\jhat
\end{align\*}

{{< figure src="/ox-hugo/mOFGQtH.gif" caption="<span class=\"figure-number\">Figure 1: </span>two-dimensional polar coordinate system" >}} <br/>

{{< figure src="/ox-hugo/n9Brin6.gif" >}} <br/>


## <span class="section-num">1</span> from polar to [cartesian coordinates]({{< relref "20220929001304-cartesian_coordinate_system.md" >}}) {#from-polar-to-cartesian-coordinates--20220929001304-cartesian-coordinate-system-dot-md}

\begin{align\*}
  x &= r\cos(\theta)\\\\
  y &= r\sin(\theta)
\end{align\*}