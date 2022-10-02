+++
title = "mechanics"
author = ["mahmood"]
description = "mechanics (physics)"
date = 2022-10-02T23:57:00+03:00
tags = ["physics", "math"]
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


## <span class="section-num">6</span> position in polar form {#position-in-polar-form}

<div class="note">

although the directions of \\(\rhat\\) and \\(\thetahat\\) vary with position, the directions depend on \\(\theta\\) only, not on \\(r\\). As a reminder of this $&theta;$-dependence, we sometimes show it explicitly by writing \\(\rhat(\theta)\\) and \\(\thetahat(\theta)\\) <br/>

</div>

the [position](#position-vector--linear-algebra2-dot-md) in a [polar coordinate system]({{< relref "20220928235804-polar_coordinate_system.md" >}}) is represented by <br/>
\\[
\vec r = r\rhat(\theta)
\\] <br/>
using the [chain rule]({{< relref "calculus2.md#chain-rule" >}}) we get <br/>
\\[
\frac{d\vec r}{dt} = \frac{dr}{dt}\rhat(\theta) + r \frac{d\rhat(\theta)}{dt}
\\] <br/>


## <span class="section-num">7</span> motion {#motion}

<div class="question">

suppose that the position of a particle is given by <br/>
\\[
r = A(e^{\alpha t}\ihat + e^{-\alpha t}\jhat)
\\] <br/>
where \\(A\\) and \\(\alpha\\) are constants, find the [velocity](#instantaneous-velocity) and sketch the trajectory <br/>

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

to sketch the trajectory it is often helpful to look at limiting cases, at \\(t=0\\) we have <br/>

\begin{align\*}
  r(0) &= A(\ihat+\jhat)\\\\
  v(0) &= \alpha A(\ihat-\jhat)
\end{align\*}

note that \\(v(0)\\) is perpendicular to \\(r(0)\\) <br/>

![](/ox-hugo/sketch1.png) <br/>
as \\(t\to\infty\\), \\(e^{\alpha t}\to\infty\\) and \\(e^{-\alpha t}\to0\\), in this limit \\(r\to Ae^{\alpha t}\ihat\\), which is a vector along the \\(x\\) axis, and \\(v\to\alpha Ae^{\alpha t}\ihat\\); in this unrealistic example, the point rushes along the \\(x\\) axis and the speed increases without limit <br/>

</div>

</div>


## <span class="section-num">8</span> mass {#mass}


## <span class="section-num">9</span> force {#force}


## <span class="section-num">10</span> gravity {#gravity}

<div class="definition">

according to Newton’s law of **gravitation**, two particles attract each other with a [force](#force) that is proportional to the product of their [mass](#mass)es and inversely proportional to the square of the distance between them. gravity is always attractive. <br/>

</div>

consider two particles, \\(a\\) and \\(b\\), with masses \\(M\_a\\) and \\(M\_b\\), respectively, separated by distance \\(d\\), let \\(F\_{b,a}\\) be the force exerted on particle \\(b\\) by particle \\(a\\), our verbal description of the [magnitude]({{< relref "linear_algebra2.md#magnitude" >}}) of the gravitational force can be expressed mathematically as <br/>
\\[ |F\_{b,a}| = \frac{GM\_aM\_b}{d^2} \\] <br/>
where \\(G\\) is the [gravitational constant](#gravitational-constant) <br/>
the gravitational force between two particles is a central force because it is directed along the line joining them. vector notation is ideally suited for describing these properties mathematically. by convention, we introduce the vector \\(r\_{b,a}\\) that extends from the particle exerting the force, particle \\(a\\) in this case, to the particle experiencing the force, particle \\(b\\). it is evident that \\(r\_{b,a}=-r\_{a,b}\\). note that \\(|r\_{b,a}|=d\\), introducing the unit vector \\(\rhat\_{b,a}=r\_{b,a}/d\\), we have <br/>
\\[
F\_{b,a} = -\frac{GM\_aM\_b}{d^2}\rhat\_{b,a}
\\] <br/>
the negative sign indicates that the force on particle \\(b\\) is directed toward particle \\(a\\), that is, the force is attractive. the force on \\(a\\) due to \\(b\\) is <br/>
\\[
F\_{a,b} = -\frac{GM\_aM\_b}{d^2}\rhat\_{b,a} = +\frac{GM\_aM\_b}{d^2}\rhat\_{a,b} = -F\_{b,a}
\\] <br/>
where we have used \\(\rhat\_{b,a}=-\rhat\_{a,b}\\). thus the forces on the two particles are equal and opposite, as Newton’s third law requires <br/>


### <span class="section-num">10.1</span> gravitational constant {#gravitational-constant}

the **gravitational constant**, denoted by \\(G\\), can be found by measuring the [force](#force) between [mass](#mass)es in a known geometry <br/>
the value of \\(G\\) for earth is \\(6.673(10) \times 10^{-11}m^3kg^{-1}s^{-2}\\) <br/>


### <span class="section-num">10.2</span> sphere gravity {#sphere-gravity}

because [force](#force) obeys the law of superposition, the force due to a collection of particles is the vector sum of the forces exerted by the particles individually. this allows us to mentally divide the body into a collection of small elements that can be treated as particles. we can then sum the forces from all the particles using standard methods from [integral calculus]({{< relref "calculus2.md#integral" >}}) <br/>
the force between a particle of mass \\(m\\) and a uniform thin spherical shell of mass \\(M\\) and radius R is <br/>

\begin{align\*}
  F &= -G\frac{Mm}{r^2}\rhat & d > R\\\\
  F &= 0 & d < R
\end{align\*}

where \\(d\\) is the distance from the center of the shell to the particle. if the particle lies outside the shell \\(d > R\\), the force is the same as if all the [mass](#mass) of the shell were concentrated at its center. if the particle lies inside, the force vanishes <br/>