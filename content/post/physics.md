+++
title = "mechanics"
author = ["mahmood"]
description = "mechanics (physics)"
date = 2022-09-26T19:37:00+03:00
tags = ["todo"]
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
  \(\newcommand{\ihat}{\hat{\textbf{\i}}}\)
  \(\newcommand{\jhat}{\hat{\textbf{\j}}}\)
  \(\newcommand{\khat}{\hat{\textbf{k}}}\)
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

<&kleppner1973> <br/>


## <span class="section-num">1</span> true physics vector {#true-physics-vector}

a [vector]({{< relref "linear_algebra2.md#vector" >}}) in physics may differ a bit from that of a math vector <br/>
a "true" physics vector is independant of the coordinate system we pick while a non-true physics vector may be dependant and its values may change when we change the coordinate system <br/>


## <span class="section-num">2</span> position [vector]({{< relref "linear_algebra2.md#vector" >}}) {#position-vector--linear-algebra2-dot-md}

<div class="definition">

the **position** of an arbitrary point P at \\((x,y,z)\\) is written as <br/>
\\[
r = (x,y,z) = x\ihat + y\jhat + z\khat
\\] <br/>

<div class="characteristic">

the position vector isnt a [true physics vector](#true-physics-vector), because it doesnt really have a direction since it just represents a position in space <br/>
and so the position vector of a specific point in space may differ from one coordinate system to another, as we can pick any coordinate system we want and it wouldnt affect the position of a point <br/>

</div>

</div>


## <span class="section-num">3</span> displacement vector {#displacement-vector}

<div class="definition">

if we move from the point \\(x\_1,y\_1,z\_1\\) to some new position \\(x\_2,y\_2,z\_2\\) then the **displacement** defines a "true" [vector]({{< relref "linear_algebra2.md#vector" >}}) \\(S\\) with coordinates <br/>
\\[
S = (x\_2-x\_1,\ y\_2-y\_1,\ z\_2-z\_1)
\\] <br/>

{{< figure src="/ox-hugo/d5v4Lfb.svg" >}} <br/>

<div class="characteristic">

a displacement vector is a [true physics vector](#true-physics-vector) <br/>

</div>

</div>


## <span class="section-num">4</span> instantaneous velocity {#instantaneous-velocity}

<div class="definition">

**instantaneous velocity**, usually called just **velocity** is a quantity that tells us how fast an object is moving at a single point in time and space <br/>
the SI unit for acceleration is metre per second (\\(\frac{\mathrm{m}}{\mathrm{s}}\\)) <br/>
velocity can also be defined as the [derivative]({{< relref "calculus2.md#derivative" >}}) of position with respect to time, as it is the [limit]({{< relref "calculus2.md#limit" >}}) of the [average velocity](#average-velocity) as the time interval approaches zero: <br/>
\\[
v = \lim\_{\Delta t \to 0} \frac{x(t+\Delta t)-x(t)}{\Delta t} = \frac{dx}{dt}
\\] <br/>
using notation due to Gottfried Leibniz, who independently invented [calculus]({{< relref "calculus2.md" >}}). as Newton would have written <br/>
\\[
v = \dot x
\\] <br/>
where the dot stands for \\(\frac{d}{dt}\\) <br/>

</div>


### <span class="section-num">4.1</span> average velocity {#average-velocity}

<div class="definition">

**average velocity** is defined as the change in [position](#position-vector--linear-algebra2-dot-md) or [displacement](#displacement-vector) \\(\Delta x\\) divided by the time intervals \\(\Delta t\\) in which the displacement occurs. the average velocity can be positive or negative depending upon the sign of the displacement. the SI unit of average velocity is meters per second (m/s). <br/>
\\[
\bar v = \frac{x(t\_2)-x(t\_1)}{t\_2-t\_1}
\\] <br/>

</div>


### <span class="section-num">4.2</span> speed {#speed}

<div class="definition">

the concept of speed is sometimes useful. speed is simply the [magnitude]({{< relref "linear_algebra2.md#magnitude" >}}) of the [velocity](#instantaneous-velocity): \\(s = |v|\\). in one dimension, speed and velocity are synonymous <br/>

</div>


## <span class="section-num">5</span> acceleration {#acceleration}

<div class="definition">

**acceleration** is the rate of change of the [velocity](#instantaneous-velocity) of an object with respect to time <br/>
it can also be defined as the [derivative]({{< relref "calculus2.md#derivative" >}}) of velocity with respect to time or the second derivative of [position](#position-vector--linear-algebra2-dot-md) with respect to time <br/>
the SI unit for acceleration is metre per second squared (\\(\frac{\mathrm{m}}{\mathrm{s}^2}\\)) <br/>

</div>


### <span class="section-num">5.1</span> average acceleration {#average-acceleration}

an object's **average acceleration** over a period of time is its change in [velocity](#instantaneous-velocity), \\(\Delta v\\), divided by the duration of the period, \\(\Delta t\\): <br/>
\\[
\bar a = \frac{\Delta v}{\Delta t}
\\] <br/>


### <span class="section-num">5.2</span> instantaneous acceleration {#instantaneous-acceleration}

**instantaneous acceleration** is a continuous [function]({{< relref "discrete_maths2.md#function" >}}) of time and gives the acceleration at a single point in time and space: <br/>
\\[
a = \lim\_{\Delta t \to 0} \frac{v(t+\Delta t)-v(t)}{\Delta t} = \frac{dv}{dt} = \frac{d^2r}{dt^2}
\\] <br/>


## <span class="section-num">6</span> motion {#motion}

<div class="my_question">

suppose that the position of a particle is given by <br/>
\\[
r = A(e^{\alpha t}\ihat + e^{-\alpha t}\jhat)
\\] <br/>
where A and \\(\alpha\\) are constants, find the [velocity](#instantaneous-velocity) and sketch the trajectory <br/>

<div class="answer">

\begin{align\*}
  v &= \frac{dr}{dt}\\\\
  &= A(\alpha e^{\alpha t}\ihat - ae^{-\alpha t}\jhat)\\\\
  v\_x &= A\alpha e^{\alpha t}\\\\
  v\_y &= -A\alpha e^{-\alpha t}
\end{align\*}

the [magnitude]({{< relref "linear_algebra2.md#magnitude" >}}) of \\(v\\) is <br/>

\begin{align\*}
  |v| &= \sqrt{v\_x^2 + v\_y^2}\\\\
  &= A\alpha\sqrt{e^{2\alpha t} + e^{-2\alpha t}}
\end{align\*}

</div>

</div>