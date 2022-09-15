+++
title = "calculus"
author = ["mahmood"]
description = "calculus"
date = 2022-09-15T18:41:00+03:00
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

its important to read the exercises provided on every subject because i explain important things with exercises <br/>


## <span class="section-num">1</span> factoring formulas {#factoring-formulas}

\begin{align}
  a^2-b^2 &= (a-b)(a+b)\\\\
  (a+b)^2 &= a^2+2ab+b^2\\\\
  (a-b)^2 &= a^2-2ab+b^2\\\\
  ax^2+bx+c &= a(x-x\_1)(x-x\_2)\\\\
  a^3-b^3 &= (a-b)(a^2+b^2+ab)\\\\
  a^3+b^3 &= (a+b)(a^2-ab+b^2)\\\\
  (a-b)^3 &= a^3-b^3-3ab(a-b)\\\\
  (a+b)^3 &= a^3+b^3+3ab(a+b)\\\\
  (a+b+c)^3 &= a^3+b^3+c^3+3(a+b)(b+c)(c+a)\\\\
  \frac{1}{k(k+1)} &= \frac1k - \frac{1}{k+1}
\end{align}


## <span class="section-num">2</span> trigonometric formulas {#trigonometric-formulas}

\begin{align}
  \sin^2{x} + \cos^2{x} &= 1\\\\
  \cos 2x &= 2\cos^2 x - 1\\\\
  \cos 2x &= 1 - 2\sin^2 x\\\\
  \cos 2x &= \cos^2 x - \sin^2 x\\\\
  \sin 2x &= 2\sin x \cos x\\\\
  1 + \tan^2 x &= \frac{1}{\cos^2 x}\\\\
  1 + \cot^2 x &= \frac{1}{\sin^2 x}
\end{align}


## <span class="section-num">3</span> numbers {#numbers}


### <span class="section-num">3.1</span> integer {#integer}

<div class="definition">

denoted by \\(\mathbb{Z}\\), represents whole numbers (numbers without fractions), \\(\mathbb{Z} = \\{\ldots,-2,-1,0,1,2,\ldots\\}\\) <br/>

</div>


### <span class="section-num">3.2</span> normal {#normal}

<div class="definition">

denoted by \\(\mathbb{N}\\), represents all [integer](#integer)s greater than 0, \\(\mathbb{N} = \\{1,2,3,\ldots\\}\\) <br/>

</div>


### <span class="section-num">3.3</span> rational {#rational}

<div class="definition">

denoted by \\(\mathbb{Q}\\), represents all numbers that can be written as a fraction of 2 integers <br/>

</div>


### <span class="section-num">3.4</span> real {#real}

<div class="definition">

denoted by \\(\mathbb{R}\\), represents all numbers <br/>

</div>


### <span class="section-num">3.5</span> complex {#complex}


## <span class="section-num">4</span> [function]({{< relref "discrete_maths2.md#function" >}})s {#function--discrete-maths2-dot-md--s}


### <span class="section-num">4.1</span> linear {#linear}


### <span class="section-num">4.2</span> rational {#rational}


### <span class="section-num">4.3</span> irrational {#irrational}


### <span class="section-num">4.4</span> exponential {#exponential}

<div class="definition">

\\(f(x)=a^x\\) is an **exponential function** if \\(a > 0 \neq 1\\) <br/>

</div>


### <span class="section-num">4.5</span> log {#log}

<div class="definition">

the **logarithmic function** \\(g(x) = log\_a(x)\\) is the inverse of the [exponential function](#exponential) \\(f(x) = a^x\\), meaning \\(a^b = x \equiv \log\_ax=b\\), defined for \\(x > 0\\) <br/>

<div class="characteristic">

**important** logarithm formulas: <br/>

\begin{gather}
  \log\_ax + \log\_ay = \log\_a(xy)\\\\
  \log\_ax - \log\_ay = \log\_a\left(\frac{x}{y}\right)\\\\
  \log\_a(x^n) = n\log\_ax\\\\
  a^{\log\_ax} = x\\\\
  \log\_a b = \frac{1}{\log\_b a}\\\\
  \log\_a b = \frac{\log\_c b}{\log\_c a}
\end{gather}

</div>

</div>


#### <span class="section-num">4.5.1</span> natural log {#natural-log}


### <span class="section-num">4.6</span> polynomial {#polynomial}


### <span class="section-num">4.7</span> trigonometric {#trigonometric}


#### <span class="section-num">4.7.1</span> cosine {#cosine}

{{< figure src="/ox-hugo/IRCODD.svg" >}} <br/>


#### <span class="section-num">4.7.2</span> sine {#sine}

{{< figure src="/ox-hugo/nhJjBHv.svg" >}} <br/>


#### <span class="section-num">4.7.3</span> tangent {#tangent}

{{< figure src="/ox-hugo/JAIRcvb.svg" >}} <br/>


### <span class="section-num">4.8</span> even function {#even-function}

<div class="definition">

let \\(f\\) be a real-valued [function]({{< relref "discrete_maths2.md#function" >}}) of a [real](#real) variable. then \\(f\\) is **even** if the following equation holds for all x such that x and -x are in the domain of \\(f\\) <br/>
\\[
  f(x) = f(-x)
\\] <br/>

</div>


### <span class="section-num">4.9</span> odd function {#odd-function}

<div class="definition">

let \\(f\\) be a real-valued [function]({{< relref "discrete_maths2.md#function" >}}) of a [real](#real) variable. then \\(f\\) is **odd** if the following equation holds for all x such that x and -x are in the domain of \\(f\\) <br/>
\\[
  -f(x) = f(-x)
\\] <br/>

</div>


## <span class="section-num">5</span> limit {#limit}

<div class="definition">

the **limit** of a sequence is denoted as <br/>
\\[
  \lim\_{n\to\infty} \frac1n = L
\\] <br/>
if for every \\(\epsilon > 0\\) there exists \\(0 < N,\ N(\epsilon)\\) such that for every \\(n > N\\) we know \\(|a\_n-L| < \epsilon\\) <br/>

<div class="my_example">

\\[
  \lim\_{n\to\infty} \frac{2n+4}{7n+5}
\\] <br/>
to find this limit we start with \\(|a\_n-L|\\) which we need to show is smaller than \\(\epsilon\\): <br/>
\\[ |a\_n - L| = \left|\frac{2n+4}{7n+5} - \frac27\right| = \left|\frac{7(2n+4)-2(7n+5)}{7(7n+5)}\right| = \frac{18}{49n+35} < \frac{18}{49n} < \epsilon \implies \frac{18}{49\epsilon} < n \implies N(\epsilon) = \left[\frac{18}{49\epsilon}\right]+1 \\] <br/>

</div>

</div>


### <span class="section-num">5.1</span> limit table {#limit-table}

\begin{gather}
  \lim\_{n \to \infty} n = \infty\\\\
  \lim\_{n \to \infty} \frac1n = 0\\\\
  \lim\_{n \to \infty} \left(\frac{x}{x+k}\right)^x = e^{-k}\\\\
  \lim\_{n \to \infty} \left(1+\frac{1}{n}\right)^n = e\\\\
  \lim\_{x\to 0} \frac{\sin{x}}{x} = 1
\end{gather}


### <span class="section-num">5.2</span> limits of rational functions {#limits-of-rational-functions}

<div class="characteristic">

when finding the limit of a rational function where both parts of the fraction diverge we take the coefficient of the variable with the highest degree in the numerator divided by the coefficient of the variable with the heighest degree in the denominator <br/>

</div>


### <span class="section-num">5.3</span> Squeeze theorem {#squeeze-theorem}


### <span class="section-num">5.4</span> indeterminate form {#indeterminate-form}


### <span class="section-num">5.5</span> chain rule {#chain-rule}

\\[
  \lim\_{x\to a} f(g(x)) = f\left(\lim\_{x\to a}g(x)\right)
\\] <br/>


### <span class="section-num">5.6</span> divergence {#divergence}

<div class="definition">

a limit diverges if it doesnt converge, that is, it might diverge to infinity, or it might get stuck like \\(\sin(x)\\) sliding back and forth between -1 and 1 (oscillating) <br/>

<div class="note">

sometimes we also say a [limit](#limit) doesnt exist if it diverges <br/>

</div>

</div>


### <span class="section-num">5.7</span> convergence {#convergence}

<div class="definition">

a limit converges if it converges to (is bounded by) a constant, which is the opposite of [divergence](#divergence) <br/>

<div class="note">

we sometimes refer to a [limit](#limit) that converges by the word **exists**, as in we say **this limit exists** <br/>

</div>

</div>


### <span class="section-num">5.8</span> limits using euler {#limits-using-euler}

<div class="note">

need to add citation to <https://marcocetica.com/posts/euler_number_calculus/> (took lots of stuff from here!) <br/>

</div>

a consequence of the definition of [Euler's Number]({{< relref "20220704213259-euler_s_number.md" >}}) is: <br/>
\\[
  \lim\_{x\to \pm\infty} \left(1+\frac{1}{f(x)}\right)^{f(x)} = e \iff f(x) \to \pm\infty
\\] <br/>
thus, if we have an [indeterminate form](#indeterminate-form) that can be rewritten in this form, it would be easy to calculate it <br/>

<div class="my_example">

\\[
  \lim\_{x\to \infty} \left(1+\frac{3}{x}\right)^x
\\] <br/>
substitution of \\(x=\infty\\) give us \\(1^\infty\\) which is indeterminate, but since \\(f(x)=\frac{x}{3}\to\infty\\) we can use [Euler's Number]({{< relref "20220704213259-euler_s_number.md" >}}) to get its value <br/>
we rewrite the limit as: <br/>
\\[
  \lim\_{x\to\infty} \left(1+\frac{1}{\frac{x}{3}}\right)^x
\\] <br/>
now we need to move the 3 to the exponent, to do that we can multiply and divide the exponent by 3 <br/>
\\[
  \lim\_{x\to\infty} \left(1+\frac{1}{\frac{x}{3}}\right)^{x\cdot\frac{3}{3}} = \lim\_{x\to\infty} \left(\underbrace{\left(1+\frac{1}{\frac{x}{3}}\right)^{\frac{x}{3}}}\_{e}\right)^3 = e^3
\\] <br/>

</div>

<div class="my_example">

\\[
  \lim\_{x \to \infty} \left(  \frac{3x+1}{3x-5} \right)^{x-2}
\\] <br/>
again, this is an indeterminate form \\(1^\infty\\). the first thing we can do to obtain the standard form is to add and subtract a quantity to the numerator of the fraction. in this case this quantity is 5 <br/>
\\[
  \lim\_{x\to\infty} \left(\frac{3x-5+5+1}{3x-5}\right)^{x-2}
\\] <br/>
we can now split the fraction: <br/>
\\[
  \lim\_{x\to\infty} \left(\frac{3x-5}{3x-5} + \frac{6}{3x-5}\right)^{x-2} = \lim\_{x\to\infty} \left(1+\frac{6}{3x-5}\right)^{x-2}
\\] <br/>
at this point we need to "adjust" our fraction in order to have the standard form <br/>
\\[
  \lim\_{x\to\infty} \left(1+\frac{1}{\frac{3x+5}{6}}\right)^{x-2}
\\] <br/>
finally, we multiply and divide the exponent by \\(f(x)\\) <br/>
\\[
  \lim\_{x\to\infty} \left(1+\frac{1}{\frac{3x+5}{6}}\right)^{(x-2) \cdot \frac{3x+5}{6} \cdot \frac{6}{3x+5}}
\\] <br/>
which led us to: <br/>
\\[
  \lim\_{x\to\infty} \left(\left(1+\frac{1}{\frac{3x+5}{6}}\right)^{\frac{3x+5}{6}}\right)^{\frac{6x-12}{3x+5}} = e^\frac{6}{3} = e^2
\\] <br/>

</div>

<div class="my_example">

\\[
  \lim\_{n\to\infty} \left(\frac{n^2-5n+6}{n^2-9n+20}\right)^{2n-1}
\\] <br/>
in this case, we first need to divide the numerator by the denominator (i.e., [polynomial long division](#polynomial-long-division)). This leaves us with two new polynomials: <br/>
\\[
  P(x)=1 \qquad R(x)=4n-14
\\] <br/>
we can rewrite the limit like this: <br/>
\\[
  \lim\_{n\to\infty} \left(1+\frac{4n-14}{n^2-9n+20}\right)^{2n-1}
\\] <br/>
the rest is similar to the previous example <br/>
\\[
  = \lim\_{n\to\infty} \left(1+\frac{1}{\frac{n^2-9n+20}{4n-14}}\right)^{2n-1 \cdot \frac{n^2-9n+20}{4n-14} \cdot \frac{4n-14}{n^2-9n+20}} = \lim\_{n\to\infty} \left( \underbrace{\left(1+\frac{1}{\frac{n^2-9n+20}{4n-14}}\right)^{\frac{n^2-9n+20}{4n-14}}}\_{e}\right)^{\frac{(4n-14)(2n-1)}{n^2-9n+20}} = e^8
\\] <br/>

</div>


### <span class="section-num">5.9</span> L'Hôpital's rule {#l-hôpital-s-rule}

see <https://en.wikipedia.org/wiki/L%27H%C3%B4pital%27s_rule> <br/>
**L'Hôpital's rule** states that for functions \\(f\\) and \\(g\\) which are differentiable on an open interval \\(I\\), except possibly at a point \\(c\\) contained in \\(I\\), if \\(\lim\_{x\to c} f(x) = \lim\_{x\to c} g(x) = 0\\) or \\(\lim\_{x\to c} f(x) = \lim\_{x\to c} g(x) = \pm\infty\\), and \\(g'(x) \neq 0\\) for all \\(x\\) in \\(I\\) with \\(x \neq c\\) and \\(\lim\_{x\to c} \frac{f'(x)}{g'(x)}\\) exists then <br/>
\\[
  \lim\_{x\to c} \frac{f(x)}{g(x)} = \lim\_{x\to c} \frac{f'(x)}{g'(x)}
\\] <br/>
the differentiation of the numerator and denominator often simplifies the quotient or converts it to a limit that can be evaluated directly. <br/>

<div class="my_example">

\\[
  \lim\_{x\to \infty} x\sin\frac1x
\\] <br/>
if we were to substitute \\(x=\infty\\) we would get: <br/>
\\[
   \infty \cdot \sin\frac1\infty = \infty \cdot \sin0 = \infty \cdot 0
\\] <br/>
which is an [indeterminate form](#indeterminate-form) <br/>
we can rewrite the given expression as a fraction of 2 functions: <br/>
\\[
  x\sin\frac1x =\frac{\sin\frac1x}{\frac1x}
\\] <br/>
now we can substitute \\(t=\frac{1}{x}\\) to make our lives easier, so we get: <br/>
\\[
  \lim\_{x\to \infty} \frac{\sin\frac1x}{\frac1x} = \lim\_{t\to 0} \frac{\sin{t}}{t}
\\] <br/>
notice how the limit changed from \\(\lim\_{x\to \infty}\\) to \\(\lim\_{t\to 0}\\), this is because we substituted \\(t=\frac{1}{x}\\), and \\(\lim\_{x\to \infty} \frac{1}{x} = 0\\) <br/>
now since \\(\lim\_{t\to 0} \sin{t} = \lim\_{t\to 0} t = 0\\) we can make use of [L'Hôpital's rule](#l-hôpital-s-rule) <br/>
\\[
  \lim\_{t\to 0} \frac{\sin{t}}{t} = \lim\_{t\to 0} \frac{\cos{t}}{1} = 1
\\] <br/>
and since this limit is equal to the original limit, we finally get: <br/>
\\[
  \lim\_{x\to \infty} x\sin\frac1x = 1
\\] <br/>

</div>


## <span class="section-num">6</span> derivative {#derivative}

<div class="definition">

let \\(f(x)\\) be a function, the derivative of \\(f(x)\\), denoted by \\(f'(x)\\) is the function that describes the slope of \\(f(x)\\) <br/>

</div>


### <span class="section-num">6.1</span> derivative table {#derivative-table}

| \\(f(x)\\)      | \\(f'(x)\\)             |
|-----------------|-------------------------|
| \\(a^x\\)       | \\(a^x\ln a\\)          |
| \\(\ln x\\)     | \\(\frac{1}{x}\\)       |
| \\(\log\_a x\\) | \\(\frac{1}{\ln{ax}}\\) |


### <span class="section-num">6.2</span> chain rule {#chain-rule}


## <span class="section-num">7</span> integral {#integral}

<div class="definition">

integral is the inverse of the derivative <br/>
we write the integral of \\(f(x)\\) as: <br/>
\\[ \text{integral of $f(x)$ with respect to $x$ is denoted by } \int f(x) \text{ dx} \\] <br/>

</div>


### <span class="section-num">7.1</span> integral table {#integral-table}

| \\(f(x)\\)                     | \\(\int{f(x) \ \mathrm{dx}}\\)     |
|--------------------------------|------------------------------------|
| \\(x^n,\ n \neq -1\\)          | \\(\frac{x^{n+1}}{n+1}\\)          |
| \\(\frac{1}{\sqrt{x}}\\)       | \\(2\sqrt{x}\\)                    |
| \\(e^x\\)                      | \\(e^x\\)                          |
| \\(a^x\\)                      | \\(\frac{a^x}{\ln{a}}\\)           |
| \\(\frac{1}{x}\\)              | \\(\ln{x}\\)                       |
| \\(\sin{x}\\)                  | \\(-\cos{x}\\)                     |
| \\(\cos{x}\\)                  | \\(\sin{x}\\)                      |
| \\(\frac{1}{\cos^2{x}}\\)      | \\(\tan{x}\\)                      |
| \\(\frac{1}{\sin^2{x}}\\)      | \\(\cot{x}\\)                      |
| \\(\frac{1}{1+x^2}\\)          | \\(\arctan{x}\\)                   |
| \\(\frac{1}{\sqrt{1-x^2}}\\)   | \\(\arcsin{x}\\)                   |
| \\(\frac{1}{x^2+a^2}\\)        | \\(\frac1a \arctan{\frac{x}{a}}\\) |
| \\(\frac{1}{\sqrt{a^2-x^2}}\\) | \\(\arcsin{\frac{x}{a}}\\)         |
| \\(\ln x\\)                    | \\(x\ln x - x\\)                   |


### <span class="section-num">7.2</span> sum/difference rule {#sum-difference-rule}

\\[
  \int f(x) \pm g(x) \dif{x} = \int f(x) \dif{x} \pm \int g(x) \dif{x}
\\] <br/>


### <span class="section-num">7.3</span> constant multiple rule {#constant-multiple-rule}

\\[
  \int cf(x) \dif{x} = c\int f(x) \dif{x}
\\] <br/>


### <span class="section-num">7.4</span> integration by parts {#integration-by-parts}

this method is the counterpart to the product rule for [differentiation](#derivative) <br/>

\begin{align\*}
  (u \cdot v)' &= u' \cdot v + v' \cdot u & \text{derivative rule}\\\\
  u' \cdot v &= (u \cdot v)' - v' \cdot u\\\\
  \int u' \cdot v &= \int((u \cdot v)' - v' \cdot u)\\\\
  \int u' \cdot v &= \int{(u \cdot v)'} - \int{v' \cdot u} & \text{integral difference rule}\\\\
  \int u' \cdot v &= u \cdot v - \int v' \cdot u
\end{align\*}

\\[
  \boxed{\int u' \cdot v = u \cdot v - \int v' \cdot u}
\\] <br/>


### <span class="section-num">7.5</span> integral of ln {#integral-of-ln}

\begin{align\*}
  \int \ln x \ \mathrm{dx} &= \int 1 \cdot \ln x \ \mathrm{dx}\\\\
                           &= x \cdot \ln x - \int \frac1x \cdot x\\\\
                           &= x \cdot \ln x - \int 1\\\\
                           &= x \cdot \ln x - x
\end{align\*}

\\[
  \boxed{\int \ln x \ \mathrm{dx} = x \cdot \ln x - x + c}
\\] <br/>


### <span class="section-num">7.6</span> integrating rational functions {#integrating-rational-functions}

a [rational function](#rational) \\(\frac{1}{f(x)}\\) can be integrated quickly into \\(\frac{\ln(f(x))}{f'(x)}\\) if \\(f(x)\\) is [linear](#linear) <br/>

<div class="my_example">

\\[
  \int \frac{1}{5-2x} \ \mathrm{dx} = \frac{\ln(5-2x)}{-2} + c
\\] <br/>

</div>


#### <span class="section-num">7.6.1</span> partial fraction decomposition {#partial-fraction-decomposition}

<div class="my_example">

\begin{gather\*}
  \int \frac{1}{(x-3)(x-7)} \ \mathrm{dx}\\\\
  \frac{1}{(x-3)(x-7)} = \frac{A}{x-3} + \frac{B}{x-7}\\\\
  1 = A(x-7) + B(x-3)\\\\
  1 = x(A+B)+(-7A-3B)\\\\
  \begin{cases}
    A+B = 0\\\\
    -7A-3B=1
  \end{cases}
  \Rightarrow
  \ A = \frac{-1}{4},\ B = \frac14\\\\
  \frac{1}{(x-3)(x-7)} = \frac{-1}{4} \cdot \frac{1}{x-3} + \frac14 \cdot \frac{1}{x-7}\\\\
  \int \frac{1}{(x-3)(x-7)} \ \mathrm{dx} = \int \frac{-1}{4} \cdot \frac{1}{x-3} \ \mathrm{dx} + \int \frac14 \cdot \frac{1}{x-7} \ \mathrm{dx}
\end{gather\*}

</div>

<div class="my_example">

<br/>

\begin{gather\*}
  \int \frac{7}{x(x+3)} \ \mathrm{dx}\\\\
  \frac{7}{x(x+3)} = \frac{A}{x} + \frac{B}{x+3}\\\\
  7 = A(x+3) + Bx\\\\
  7 = (A+B)x + 3A\\\\
  \begin{cases}
    A+B = 0\\\\
    3A = 7
  \end{cases}
  \Rightarrow A = \frac73,\ B=-\frac73\\\\
  \frac{7}{x(x+3)} = \frac{A}{x} + \frac{B}{x+3}\\\\
  \int \frac{7}{x(x+3)} \ \mathrm{dx} = \int \frac73 \cdot \frac{1}{x} \ \mathrm{dx} + \int -\frac73 \cdot \frac{1}{x+3} \ \mathrm{dx}\\\\
\end{gather\*}

</div>

<div class="my_example">

\begin{gather\*}
  \int \frac{2x^2-5x+9}{x^3-9x} \ \mathrm{dx}\\\\
  \frac{2x^2-5x+9}{x^3-9x} = \frac{2x^2-5x+9}{x(x^2-9)} = \frac{2x^2-5x+9}{x(x-3)(x+3)}\\\\
  \frac{2x^2-5x+9}{x(x-3)(x+3)} = \frac{A}{x} + \frac{B}{x-3} + \frac{C}{x+3}\\\\
  2x^2-5x+9=A(x-3)(x+3) + Bx(x+3) + Cx(x-3)\\\\
  \text{substitute } x = 0 \Rightarrow 9 = A \cdot -3 \cdot 3 \Rightarrow A = -1\\\\
  \text{substitute } x = 3 \Rightarrow 2 \cdot 9 - 5 \cdot 3 + 9 = 6 \cdot 3 \cdot B \Rightarrow 12 = 9B \Rightarrow B = \frac{12}{9}\\\\
  \text{substitute } x = -3 \Rightarrow 2 \cdot 9 + 5 \cdot 3 + 9 = C \cdot -3 \cdot -6 \Rightarrow C = \frac{42}{18}\\\\
  \frac{2x^2-5x+9}{x(x-3)(x+3)} = \frac{-1}{x} + \frac{12}{9} \cdot \frac{1}{x-3} + \frac{42}{18} \cdot \frac{1}{x+3}\\\\
  \int \frac{2x^2-5x+9}{x^3-9x} \ \mathrm{dx} = \int \frac{-1}{x} \ \mathrm{dx} + \int \frac{12}{9} \cdot \frac{1}{x-3} \ \mathrm{dx} + \int \frac{42}{18} \cdot \frac{1}{x+3} \ \mathrm{dx}
\end{gather\*}

</div>

<div class="my_example">

\\[
  \int \frac{2x + 4}{{(x+2)}^2+4} \text{ dx} = \ln\left((x+2)^2+4\right)
\\] <br/>

</div>


##### <span class="section-num">7.6.1.1</span> polynomial long division {#polynomial-long-division}

{{< figure src="/ox-hugo/polynomdiv.png" >}} <br/>


### <span class="section-num">7.7</span> integration by substitution {#integration-by-substitution}

<div class="definition">

this method is the counterpart to the [chain rule](#chain-rule) for [differentiation](#derivative) <br/>
consider the following equation: <br/>
\\[ t = x^2 + 5 \\] <br/>
we derivate \\(t\\) with respect to \\(x\\): <br/>
\\[
  t = x^2 + 5 \implies \text{dt} = 2x \text{ dx} \implies \frac{\text{dt}}{\text{dx}} = 2x \implies \text{dt} = 2x \text{ dx}
\\] <br/>
the expression \\(\frac{\mathrm{dt}}{\mathrm{dx}}\\) means the derivative of \\(t\\) with respect to \\(x\\) <br/>
consider another equation: <br/>
\\[ t^3 = e^{3x} + 7x^2 \\] <br/>
we can derivate the left side with respect to \\(t\\) and the right side with respect to \\(x\\) <br/>
\\[ 3t^2 \text{ dt} = \left(e^{3x} \cdot 3 + 14x\right) \text{ dx} \\] <br/>

<div class="my_example">

consider the integral: <br/>
\\[ \int 2x\left(x^2+5\right)^{13} \text{ dx} \\] <br/>
to integrate such [polynomial](#polynomial)s, we use the substitution method: <br/>

let \\(t = x^2 + 5\\), the derivative of this with respect to \\(t\\) is \\(1 \cdot \text{dt}\\), the derivative with respect to \\(x\\) is \\(2xdx\\) <br/>

\begin{align\*}
  t &= x^2 + 5\\\\
  \text{dt} &= 2x \text{ dx}\\\\
  \text{dx} &= \frac{\text{dt}}{2x}\\\\
  \int 2x\left(x^2+5\right)^{13} \text{ dx} &= \int 2xt^{13} \frac{\text{dt}}{2x} = \int t^{13} \text{ dt} = \frac{t^{14}}{14} = \frac{{(x^2+5)}^{14}}{14} + c
\end{align\*}

</div>

<div class="my_example">

consider the integral <br/>
\\[
  \int x^2{(2x^3 + 7)}^{10} \text{ dx}
\\] <br/>
we use subtitution: <br/>

\begin{align\*}
  t = 2x^3 + 7\\\\
  dt = 6x^2 dx\\\\
  dx = \frac{dt}{6x^2}\\\\
  \int x^2{(2x^3 + 7)}^{10} \text{ dx} &= \int x^2t^{10} \frac{dt}{6x^2}\\\\
  &= \frac16 \int t^{10} dt\\\\
  &= \frac{1}{66} \cdot t^{11} + c\\\\
  &= \frac{1}{66} \cdot {(2x^3 + 7)}^{11} + c\\\\
\end{align\*}

</div>

<div class="my_example">

consider <br/>
\\[ \int x^5(2x^3 + 1)^7 \text{ dx} \\] <br/>
we use [integration by substitution](#integration-by-substitution) <br/>

\begin{align\*}
  t = 2x^3 + 1\\\\
  dt = 6x^2 dx\\\\
  dx = \frac{dt}{6x^2}\\\\
  \int x^5(2x^3 + 1)^7 \text{ dx} &= \int x^5t^7 \frac{dt}{6x^2}\\\\
  &= \frac16 \int x^3t^7 dt
\end{align\*}

we cant directly integrate \\(\int x^3t^7 dt\\) because we have \\(x^3\\) in the expression <br/>
but if we look at the equations above we see \\(t = 2x^3 + 1\\) which gives us \\(x^3 = \frac{t-1}{2}\\), so we substitute this and integrate <br/>

\begin{align\*}
  \frac16 \int x^3t^7 dt &= \frac{1}{12} \int (t-1)t^7 dt\\\\
  &= \frac{1}{12} \int t^8-t^7 dt\\\\
  &= \frac{1}{12} \int t^8 dt - \int t^7 dt\\\\
  &= \frac{1}{12} \left(\frac{t^9}{9} - \frac{t^8}{9}\right)\\\\
  &= \frac{1}{12} \left(\frac{{(2x^3 + 1)}^9}{9} - \frac{{(2x^3 + 1)}^8}{8}\right) + c\\\\
\end{align\*}

</div>

<div class="my_example">

\\[
  \int \frac{1}{x\ln{x}} \text{ dx}
\\] <br/>
we choose \\(t = \ln{x}\\) <br/>

\begin{align\*}
  t = \ln{x}\\\\
  \text{dt} = \frac1x \text{ dx}\\\\
  \text{dx} = x \text{ dt}\\\\
  \int \frac{1}{x\ln{x}} \text{ dx} &= \int \frac{1}{x\ln{x}} x \text{ dt}\\\\
  &= \int \frac{1}{t} \text{ dt}\\\\
  &= \ln(t) + c\\\\
  &= \ln(\ln(x)) + c
\end{align\*}

</div>

<div class="my_example">

\\[
  \int \frac{1}{x \cdot \ln{x} \cdot \ln(\ln{x})} \text{ dx}
\\] <br/>
we pick \\(t = \ln(\ln{x})\\) <br/>

\begin{align\*}
  t = \ln(\ln{x})\\\\
  \text{dt} = \frac{1}{\ln{x}} \cdot \frac1x \text{ dx} = \frac{1}{x\ln{x}} \text{ dx}\\\\
  dx = x\ln{x} \text{ dt}\\\\
  \int \frac{1}{x \cdot \ln{x} \cdot \ln(\ln{x})} \text{ dx} &= \int \frac{x\ln{x}}{x \cdot \ln{x} \cdot \ln(\ln{x})} \text{ dt}\\\\
  &= \int \frac{1}{\ln(\ln{x})} \text{ dt}\\\\
  &= \int \frac{1}{t} \text{ dt}\\\\
  &= \ln(t) + c\\\\
  &= \ln(\ln(\ln{x})) + c\\\\
\end{align\*}

</div>

<div class="my_example">

<div class="note">

when we integrate a function that is a product of 2 trigonometric functions (cos and sin), if both have odd exponents it doesnt matter which one we choose for \\(t\\) <br/>

</div>

\\[
  \int \sin^7{x} \cos^5{x} \text{ dx}
\\] <br/>
we pick \\(t = \sin x\\) <br/>

\begin{align\*}
  t = \sin{x}\\\\
  \text{dt} = \cos{x} \text{ dx}\\\\
  \text{dx} = \frac{\text{dt}}{\cos x}\\\\
  \int \sin^7{x} \cos^5{x} \text{ dx} &= \int t^7 \cos^5{x} \frac{\text{dt}}{\cos x}\\\\
  &= \int t^7 \cos^4{x} \text{ dt}\\\\
\end{align\*}

we need to get rid of \\(\cos^4 x\\) so we use the formula \\(\cos^2 x + \sin^2 x = 1\\), which gives us: <br/>
\\[
  \cos^2 x + t^2 = 1 \Rightarrow \cos^2 x = 1 - t^2 \Rightarrow \cos^4 x = {(1 - t^2)}^2
\\] <br/>
now that we have \\(\cos^4 x\\) in terms of \\(t\\) we can continue <br/>

\begin{align\*}
  \int t^7 {(1-t^2)}^2 \text{ dt} &= \int t^7(1 - 2t^2 + t^4) \text{ dt}\\\\
  &= \int t^7 - 2t^9 + t^{11} \text{ dt}\\\\
  &= \frac{t^8}{8} - \frac{2t^{10}}{10} + \frac{t^{12}}{12} + c\\\\
  &= \frac{\sin^8{x}}{8} - \frac{\sin^{10} x}{5} + \frac{\sin^{12} x}{12} + c\\\\
\end{align\*}

</div>

<div class="my_example">

\\[ \int \sin^2(2x) \cos^{11}(2x) \text{ dx} \\] <br/>

</div>

<div class="my_example">

<div class="note">

if we have an odd and an even exponent, we take \\(t\\) of the function with the even exponent, check the following exercise <br/>

</div>

\begin{align\*}
  \int \sin^5{x} \cos^4{x} \text{ dx}\\\\
  t = \cos x\\\\
  \text{dt} = -\sin x \text{ dx}\\\\
  \text{dx} = \frac{\text{dt}}{-\sin x}\\\\
  \int \sin^5{x} \cos^4{x} \text{ dx} &= \int \sin^5(x) t^4 \frac{\text{dt}}{-\sin x}\\\\
  &= -\int {(1-t^2)}^2 t^4 \text{ dt} &\sin^2{x} + \cos^2{x} = 1\\\\
  &= -\int (1-2t^2+t^4) t^4 \text{ dt}\\\\
  &= \int -t^4 + 2t^6 - t^8 \text{ dt}\\\\
  &= \frac{-t^5}{5} + \frac{2t^7}{7} - \frac{t^9}{9} + c\\\\
  &= \frac{-\cos^5{x}}{5} + \frac{2\cos^7 x}{7} - \frac{\cos^9 x}{9} + c\\\\
\end{align\*}

</div>

<div class="my_example">

\begin{align\*}
  \int \sin^2 x \text{ dx} &= \int \frac{1 - \cos(2x)}{2} \text{ dx} &\text{usage of the rule } \cos 2x = 1 - 2\sin^2 x\\\\
  &= \frac12 \int 1 - \cos(2x) \text{ dx}\\\\
  &= \frac12 \left(x - \frac12 \sin(2x)\right) + c
\end{align\*}

</div>

<div class="my_example">

<div class="note">

this exercise demonstrates how to solve an integral with of product of 2 trigonometric functions (cos and sin) that both have an even exponent, we dont choose either for \\(t\\), we use one of the formulas for \\(\cos 2x\\) <br/>

</div>

\begin{align\*}
  \int \sin^4 x \cos^2x \text{ dx} &= \int {(\sin x\cos x)}^2 \sin^2 x \text{ dx}\\\\
  &= \int \frac14 \sin^2 2x \sin^2 x \text{ dx} &\text{using the formula } 2\sin x \cos x = \sin 2x\\\\
  &= \int \frac14 \sin^2 2x \frac{1 - \cos 2x}{2} \text{ dx} &\text{using the formula } \cos 2x = 1 - 2\sin^2 x\\\\
  &= \frac18 \int \sin^2 2x (1 - \cos 2x) \text{ dx}\\\\
  &= \frac18 \int \sin^2 2x - \sin^2 2x \cos 2x \text{ dx}\\\\
  &= \frac18 \int \sin^2 2x \text{ dx} - \frac18 \int \sin^2 2x \cos 2x \text{ dx}\\\\
  &= \frac18 \int \frac{1 - \cos 4x}{2} \text{ dx} - \frac18 \int \sin^2 2x \cos 2x \text{ dx} &\text{using the formula } \cos 2x = 1 - 2\sin^2 x\\\\
  &= \frac{1}{16} x - \frac{\sin{4x}}{64} - \frac18 \int \sin^2 2x \cos 2x \text{ dx}
\end{align\*}

to solve the second integral we use substitution, we pick \\(t = \sin 2x\\) <br/>

\begin{align\*}
  t = \sin 2x\\\\
  \text{dt} = 2\cos{2x} \text{ dx}\\\\
  \text{dx} = \frac{\text{dt}}{2\cos 2x}\\\\
  \frac{x}{16} - \frac{\sin{4x}}{64} - \frac18 \int \sin^2 2x \cos 2x \text{ dx} &= \frac{x}{16} - \frac{\sin{4x}}{64} - \frac18 \int t^2 \cos 2x \frac{\text{dt}}{2\cos 2x}\\\\
  &= \frac{x}{16} - \frac{\sin{4x}}{64} - \frac18 \int \frac{t^2}{2} \text{dt}\\\\
  &= \frac{x}{16} - \frac{\sin{4x}}{64} - \frac18 \cdot \frac{t^3}{6} + c\\\\
  &= \frac{x}{16} - \frac{\sin{4x}}{64} - \frac{\sin^3 2x}{48} + c
\end{align\*}

</div>

<div class="my_example">

\\[
  \int \sqrt{1 - x^2} \text{ dx}
\\] <br/>

<div class="note">

the [sin](#sine) function is [invertible]({{< relref "discrete_maths2.md#inverse-function" >}}) in the interval \\([-\frac{\pi}{2}, \frac{\pi}{2}]\\) and the [inverse]({{< relref "discrete_maths2.md#inverse-function" >}}) of it is \\(\arcsin\\), so if we have \\(x = \sin t\\) (in that interval) we can write \\(\arcsin x = t\\) <br/>

</div>

we do \\(x = \sin t\\) <br/>

\begin{align\*}
  x = \sin t\\\\
  \text{dx} = \cos t \text{ dt}\\\\
  \int \sqrt{1 - \sin^2 x} \cos t \text{ dt} &= \int \sqrt{\cos^2 t} \cos t \text{ dt} &\text{using } \sin^2{x} + \cos^2{x} = 1\\\\
  &= \int \cos^2 t \text{ dt}\\\\
  &= \int \frac{1 + \cos 2t}{2} \text{ dt} &\text{using } \cos 2x = 2\cos^2 x - 1\\\\
  &= \frac12 \int 1 + \cos 2t \text{ dt}\\\\
  &= \frac12 \left(t + \frac{\sin 2t}{2}\right) + c\\\\
  &= \frac12 \left(\arcsin x + \frac{\sin(2\arcsin x)}{2}\right) + c\\\\
\end{align\*}

</div>

<div class="my_example">

\begin{align\*}
  \int \frac{x - 1}{\sqrt{1 - x^2}} \text{ dx} &= \int \frac{x}{\sqrt{1-x^2}} \text{ dx} - \int \frac{1}{\sqrt{1-x^2}} \text{ dx}\\\\
  t = \sqrt{1 - x^2} \Rightarrow \text{dt} = \frac{-\cancel{2}x}{\cancel{2}\sqrt{1-x^2}} \text{ dx} &\Rightarrow \text{dx} = \frac{-\sqrt{1-x^2}}{x} \text{ dt}\\\\
  \int \frac{x}{\sqrt{1-x^2}} \text{ dx} - \int \frac{1}{\sqrt{1-x^2}} \text{ dx} &= \int \frac{x}{\sqrt{1-x^2}} \cdot \frac{-\sqrt{1-x^2}}{x} \text{ dt} - \int \frac{1}{\sqrt{1-x^2}} \text{ dx}\\\\
  &= \int (-1 \text{ dt}) - \arcsin x\\\\
  &= -t - \arcsin x + c\\\\
  &= -\sqrt{1 - x^2} - \arcsin x + c\\\\
\end{align\*}

</div>

<div class="my_example">

\\[
  \sin^4 x \text{ dx}
\\] <br/>
this function has both even exponents, as the exponent of cos is 0, because \\(\sin^4 x = \cos^0 x \cdot \sin^4 x\\), so we try to manipulate the function using the formulas of \\(\cos 2x\\) <br/>

\begin{align\*}
  \sin^4 x = {(\sin^2 x)}^2 &= {\left(\frac{1 - \cos 2x}{2}\right)}^2\\\\
  &= \frac14(1 - 2\cos 2x + \cos^2 2x)\\\\
  &= \frac14\left(1 - 2\cos 2x + \frac{1 + \cos 4x}{2}\right)\\\\
  \int \sin^4 x \text{ dx} &= \frac14 \int 1 - 2\cos 2x + \frac12 + \frac{\cos 4x}{2} \text{ dx}\\\\
  &= \frac14\left(1.5x - \sin 2x + \frac{\sin 4x}{8} \right) + c\\\\
\end{align\*}

</div>

</div>


### <span class="section-num">7.8</span> integration of sums of trigonometric functions {#integration-of-sums-of-trigonometric-functions}

<div class="definition">

<div class="note">

when dealing with addition of [sin](#sine) and [cos](#cosine) functions we write <br/>
\\[
  \int \mathbb{R}(\sin x, \cos x)
\\] <br/>
and we pick \\(\boxed{t = \tan \frac{x}{2}}\\) <br/>

</div>

consider the [sin](#sine) function <br/>

\begin{align\*}
  \sin x = 2\sin\frac{x}{2} \cos\frac{x}{2} &= \frac{2\sin\frac{x}{2}}{\cos\frac{x}{2}} \cos^2\frac{x}{2}\\\\
  &= 2\tan\frac{x}{2} \cos^2\frac{x}{2}\\\\
  &= 2t\cos^2\frac{x}{2}\\\\
  &= \frac{2t}{1 + t^2} &\text{using } 1 + \tan^2 x = \frac{1}{\cos^2 x}
\end{align\*}

therefore we write <br/>
\\[
  \boxed{\sin x = \frac{2t}{1 + t^2}}
\\] <br/>
consider the [cos](#cosine) function <br/>

\begin{align\*}
  \cos x = 2\cos^2 \frac{x}{2} - 1 &= 2\left(\frac{1}{1 + t^2}\right) - 1\\\\
  &= \frac{2 - 1 - t^2}{1 + t^2}\\\\
  &= \frac{1 - t^2}{1 + t^2}\\\\
\end{align\*}

therefore we write <br/>
\\[
  \boxed{\cos x = \frac{1 - t^2}{1 + t^2}}
\\] <br/>
this is generally the pattern of substitution of \\(t = \tan \frac{x}{2}\\): <br/>

\begin{align\*}
  t = \tan \frac{x}{2} \Rightarrow \text{dt} &= \frac12 \cdot \frac{1}{\cos^2 \frac{x}{2}} \text{ dx}\\\\
  &= \frac12\left(1 + \tan^2 \frac{x}{2}\right) \text{ dx} &\text{using } 1 + \tan^2 x = \frac{1}{\cos^2 x}\\\\
  &= \frac{1 + t^2}{2} \text{ dx}\\\\
  &\implies \text{dx} = \frac{2 \text{ dt}}{1 + t^2}
\end{align\*}

therefore we write <br/>
\\[
  \boxed{\text{dx} = \frac{2 \text{ dt}}{1 + t^2}}
\\] <br/>

<div class="my_example">

\begin{align\*}
  \int \frac{\text{dx}}{2\sin x + \cos x + 2} &= \int \frac{\frac{2\text{ dt}}{1+t^2}}{2 \cdot \frac{2t}{1+t^2} + \frac{1-t^2}{1+t^2} + 2}\\\\
  &= \int \frac{\frac{2}{\cancel{1+t^2}}}{\frac{4t+1-t^2+2+2t^2}{\cancel{1+t^2}}} \text{ dt}\\\\
  &= \int \frac{2}{3+t^2+4t} \text{ dt}\\\\
  &= \int \frac{A}{t+3} + \frac{B}{t+1} \text{ dt}\\\\
  &= \int \frac{-1}{t+3} + \frac{1}{t+1} \text{ dt}\\\\
  &= -\ln(t+3) + \ln(t+1) + c\\\\
  &= -\ln\left(\tan\left(\frac{x}{2}\right)+3\right) + \ln\left(\tan\left(\frac{x}{2}\right)+1\right) + c\\\\
\end{align\*}

</div>

<div class="my_example">

\begin{align\*}
  \int \frac{1}{\sin x} \text{ dx} &= \int \frac{\frac{2}{1+t^2} \text{ dt}}{\frac{2t}{1+t^2}}\\\\
  &= \int \frac{1}{t} \text{ dt}\\\\
  &= \ln{t} + c\\\\
  &= \ln{\tan \frac{x}{2}} + c
\end{align\*}

</div>

<div class="my_example">

\begin{align\*}
  \int \frac{1}{\cos x} \text{ dx} &= \int \frac{\frac{2 \text{ dt}}{1+t^2}}{\frac{1-t^2}{1+t^2}}\\\\
  &= \int \frac{2}{1-t^2} \text{ dt}\\\\
  &= \int \frac{A}{1-t} + \frac{B}{1+t} \text{ dt}\\\\
  &= \int \frac{1}{1-t} + \frac{1}{1+t} \text{ dt}\\\\
  &= \frac{\ln(1-t)}{-1} + \ln(1+t) + c\\\\
  &= -\ln(1-t) + \ln(1+t) + c\\\\
  &= -\ln\left(1-\tan\frac{x}{2}\right) + \ln\left(1+\tan\frac{x}{2}\right) + c\\\\
\end{align\*}

</div>

<div class="my_example">

\begin{align\*}
  \int \frac{7}{8\cos x + 10 - 10\sin x} \text{ dx} &= \int \frac{7}{8 \cdot \frac{1 - t^2}{1 + t^2} + 10 - 10 \cdot \frac{2t}{1 + t^2}} \cdot \frac{2\text{ dt}}{1+t^2}\\\\
  &= \int \frac{\frac{14\text{ dt}}{1+t^2}}{\frac{8-8t^2+10+10t^2-20t}{1+t^2}}\\\\
  &= \int \frac{14\text{ dt}}{18+2t^2-20t}\\\\
  &= \int \frac{7\text{ dt}}{t^2-10t+9}\\\\
  &= \int \frac{7}{t^2-10t+9} \text{ dt}\\\\
  &= \int \frac{A}{t-9} + \frac{B}{t-1} \text{ dt}\\\\
  &= \int \frac{\frac78}{t-9} + \frac{-\frac78}{t-1} \text{ dt}\\\\
  &= \frac78 \int \frac{1}{t-9} + \frac{-1}{t-1} \text{ dt}\\\\
  &= \frac78\left(\ln\left(\tan\frac{x}{2}-9\right) -\ln\left(\tan\frac{x}{2}-1\right)\right)\\\\
\end{align\*}

</div>

</div>


### <span class="section-num">7.9</span> definite integral {#definite-integral}

<div class="definition">

given a function \\(f(x)\\) that is continuous on the interval \\([a,b]\\), we divide the interval into \\(n\\) subintervals of equal width, \\(\Delta x\\), and from each interval choose a point, \\(x\_i^\*\\). then the **definite integral** of \\(f(x)\\) from \\(a\\) to \\(b\\) is: <br/>
\\[
  \int\_a^b f(x) \text{ dx} = \lim\_{n\rightarrow\infty} \sum\_{i=1}^{n} f(x\_i^\*) \Delta x
\\] <br/>
in practicality: <br/>
\\[ \int f(x) \text{ dx} = F(x) + c \Rightarrow \int\_a^b = F(b) - F(a) \\] <br/>

<div class="my_example">

\\[
  \int\_1^3 x^2 \text{ dx} = \frac{x^3}{3} \Big|\_1^3 = \frac{3^3}{3} - \frac{1^3}{3} = 8\frac23
\\] <br/>

</div>

<div class="my_example">

\\[
  \int\_1^3 x^2 - 4x + 3 \text{ dx} = \frac{x^3}{3} - \frac{4x^2}{2} + 3x \Big|\_1^3 = \frac{3^3}{3} - \frac{4 \cdot 3^2}{2} + 3 \cdot 3 - \left(\frac{1^3}{3} - \frac{4 \cdot 1^2}{2} + 3 \cdot 1\right) = -\frac43
\\] <br/>

</div>

<div class="note">

the `casio` calculator with a model name containing `991` can calculate definite integrals <br/>
![](/ox-hugo/casio-991.png) <br/>
but ofcourse if you're doing homework or you're just doing math in a non-restricting environment you can use [sagemath]({{< relref "sage.md" >}}) <br/>

```sage
integral(sin(x)^3 + sin(x), x, 0, pi)
```

10/3 <br/>

</div>

<div class="my_example">

\\[
  \int e^{-3x}(5x^2+7x-2) \text{ dx}
\\] <br/>
this is our first exercise dealing with integration of a function containing \\(e\\), we use [integration by parts](#integration-by-parts) <br/>

\begin{align\*}
  u' = e^{-3x} \Rightarrow u = \frac{e^{-3x}}{-3}\\\\
  v = 5x^2+7x-2 \Rightarrow v' = 10x + 7\\\\
  \int e^{-3x}(5x^2+7x-2) \text{ dx} &= \frac{e^{-3x}}{-3} \cdot (5x^2+7x-2) - \int (10x + 7) \cdot \frac{e^{-3x}}{-3} \text{ dx}\\\\
  &= \frac{e^{-3x}}{-3} \cdot (5x^2+7x-2) + \frac13 \int (10x + 7) \cdot e^{-3x} \text{ dx}\\\\
\end{align\*}

we use the same method to find the integral on the right <br/>

\begin{align\*}
  \int (10x + 7) \cdot e^{-3x} \text{ dx}\\\\
  u' = e^{-3x} \Rightarrow u = \frac{e^{-3x}}{-3}\\\\
  v = 10x + 7 \Rightarrow v' = 10\\\\
  \int (10x + 7) \cdot e^{-3x} \text{ dx} &= \frac{e^{-3x}}{-3} \cdot (10x + 7) - \int 10 \cdot \frac{e^{-3x}}{-3} \text{ dx}\\\\
  \int (10x + 7) \cdot e^{-3x} \text{ dx} &= \frac{e^{-3x}}{-3} \cdot (10x + 7) - \frac{10e^{-3x}}{9} + c
\end{align\*}

then we substitute the result of the integral in the original equation <br/>
\\[
  \frac{e^{-3x}}{-3} \cdot (5x^2+7x-2) + \frac13 \int (10x + 7) \cdot e^{-3x} \text{ dx} = \frac{e^{-3x}}{-3} \cdot (5x^2+7x-2) + \frac13\left(\frac{e^{-3x}}{-3} \cdot (10x + 7) - \frac{10e^{-3x}}{9}\right) + c
\\] <br/>

</div>

<div class="my_example">

\begin{align\*}
  \int e^{5x} \sin 7x \text{ dx}\\\\
  u' = e^{5x} \Rightarrow u = \frac{e^{5x}}{5}\\\\
  v = \sin 7x \Rightarrow v' = 7\cos 7x\\\\
  \int e^{5x} \sin 7x \text{ dx} &= \frac{e^{5x}}{5} \cdot \sin 7x - \int 7\cos 7x \cdot \frac{e^{5x}}{5} \text{ dx}\\\\
  \int e^{5x} \sin 7x \text{ dx} &= \frac{e^{5x}}{5} \cdot \sin 7x - \frac{7}{5} \int \cos 7x \cdot e^{5x} \text{ dx}\\\\
  u\_2' = e^{5x} \Rightarrow u\_2 = \frac{e^{5x}}{5}\\\\
  v\_2 = \cos 7x \Rightarrow v\_2' = -7\sin 7x\\\\
  \int \cos 7x \cdot e^{5x} \text{ dx} &= \frac{e^{5x}}{5} \cdot \cos 7x - \int -7\sin 7x \cdot \frac{e^{5x}}{5}\\\\
  &= \frac{e^{5x}}{5} \cdot \cos 7x - \int -7\sin 7x \cdot \frac{e^{5x}}{5}\\\\
  \int e^{5x} \sin 7x \text{ dx} &= \frac{e^{5x}}{5} \cdot \sin 7x - \frac{7}{5}\left(\frac{e^{5x}}{5} \cdot \cos 7x - \int -7\sin 7x \cdot \frac{e^{5x}}{5}\right)\\\\
  &= \frac{e^{5x}}{5} \cdot \sin 7x - \frac{7}{5}\left(\frac{e^{5x}}{5} \cdot \cos 7x + \frac75 \int \sin 7x \cdot e^{5x}\right)\\\\
  \int \cos 7x \cdot e^{5x} \text{ dx} &= \frac{e^{5x}}{5} \cdot \sin 7x - \frac{7e^{5x}}{25} \cdot \cos 7x - \frac{49}{25} \int \sin 7x \cdot e^{5x}\\\\
  \frac{74}{25} \int \cos 7x \cdot e^{5x} \text{ dx} &= \frac{e^{5x}}{5} \cdot \sin 7x - \frac{7e^{5x}}{25} \cdot \cos 7x\\\\
  \int \cos 7x \cdot e^{5x} \text{ dx} &= \frac{25}{74}\left(\frac{e^{5x}}{5} \cdot \sin 7x - \frac{7e^{5x}}{25} \cdot \cos 7x\right) + c\\\\
\end{align\*}

</div>

</div>


### <span class="section-num">7.10</span> finding area using definite integral {#finding-area-using-definite-integral}

<div class="definition">

the area between 2 functions \\(f,g\\) in an interval \\([a,b]\\) in which \\(f \geq g\\) or \\(g \geq f\\) is defined as: <br/>
\\[
  S = \left| \int\_a^b (f(x) - g(x)) \text{ dx} \right|
\\] <br/>

<div class="note">

notice that the definition says \\([a,b]\\) in which \\(f \geq g\\) or \\(g \geq f\\) which means that if the functions cross each other in that interval and the lower function becomes the upper and the upper function becomes the lower then the area cant be calculated using this single formula but we split the interval into multiple and add the results <br/>

</div>

<div class="my_example">

consider the area \\(S\\) in the interval \\([0,3]\\) between \\(f(x)=x^2\\) and the \\(x\\) axis (\\(g(x)=0\\)) <br/>

{{< figure src="/ox-hugo/p44azc.svg" >}} <br/>

we calculate using the formula, i didnt mind the fact that the result should be turned to its absolute value because i know the \\(f(x) \geq g(x)\\) <br/>

\\[
  S = \int\_0^3 (f(x) - g(x)) \text{ dx} = \int\_0^3 x^2 \text{ dx} = \frac{x^3}{3} \Big|\_0^3 = \frac{3^3}{3} - \frac{0^3}{3} = 9
\\] <br/>

</div>

<div class="my_example">

consider the area \\(S\_1 + S\_2\\) in red between the polynomials <br/>

{{< figure src="/ox-hugo/PzjSrV.svg" >}} <br/>

we split the area into 2 because if we tried to find the area without splitting we would be adding a negative value to a positive value whereas the areas should be positive, we wouldnt mind this when working with functions that dont cross because we can always take the absolute value of the result <br/>

so we find \\(S\_1\\) and \\(S\_2\\) and the total area would be \\(|S\_1| + |S\_2|\\), assume \\(a=-2,\ b=2\\), \\(S\_1\\) would be the area from \\([0,2]\\) and \\(S\_2\\) the area from \\([0,2]\\) <br/>

for \\(S\_1\\) we take \\(f(x) - g(x)\\) because \\(f(x) \geq g(x)\\) <br/>

\begin{align\*}
  S\_1 = \int\_{-2}^0 (f(x) - g(x)) \text{ dx} &= \int\_{-2}^0 3x^3-x^2-10x-(-x^2+2x) \text{ dx}\\\\
  &= \int\_{-2}^0 3x^3-12x \text{ dx}\\\\
  &= \frac{3x^4}{4}-\frac{12x^2}{2} \Big|\_{-2}^0\\\\
  &= 0 - \left(\frac{3(-2)^4}{4}-\frac{12(-2)^2}{2}\right)\\\\
  &= 12
\end{align\*}

for \\(S\_2\\) we take \\(f(x) - g(x)\\) because \\(f(x) \geq g(x)\\) <br/>

\begin{align\*}
  \int\_0^2 (g(x)-f(x)) \text{ dx} &= \int\_0^2 -x^2+2x-(3x^3-x^2-10x) \text{ dx}\\\\
  &= \int\_0^2 -x^2+2x-3x^3+x^2+10x \text{ dx}\\\\
  &= \int\_0^2 -3x^3+12x \text{ dx}\\\\
  &= \left(\frac{-3x^4}{4} + \frac{12x^2}{2}\right) \Big|\_0^2\\\\
  &= \frac{-3 \cdot 2^4}{4} + \frac{12 \cdot 2^2}{2}\\\\
  &= 12
\end{align\*}

therefore \\(S = S\_1 + S\_2 = 24\\) <br/>

</div>

<div class="note">

notice that these examples provide you with a plot of the functions so its easier to find the area, in general you wouldnt have the plot and you have to find the intersection points yourself so that you can integrate and find the area, see the following exercise for example <br/>

</div>

<div class="my_example">

find the area between \\(f(x)=x^3-4x^2+13x-7,\ g(x)=6x^2-x^3+25x-7\\) <br/>
first we find the intersection points so that we know how to split the integration <br/>

\begin{gather\*}
  x^3-4x^2+13x-7=6x^2-x^3+25x-7\\\\
  2x^3-10x^2-12x=0\\\\
  x(2x^2-10x-12)=0\\\\
  2x(x-6)(x+1)=0\\\\
  \Rightarrow x=0,6,-1
\end{gather\*}

we found that we have intersections at \\(x=0,6,-1\\), so we find the integrals in the intervals \\([-1,0],[0,6]\\) <br/>

\begin{align\*}
  \int\_{-1}^0 (f(x)-g(x)) \text{ dx} &= \int\_{-1}^0 x^3-4x^2+13x-7-(6x^2-x^3+25x-7) \text{ dx}\\\\
  &= \int\_{-1}^0 2x^3 - 10x^2 - 12x \text{ dx}\\\\
  &= \left(\frac{2x^4}{4} - \frac{10x^3}{3} - \frac{12x^2}{2}\right) \Big|\_{-1}^0\\\\
  &= 0-\left(\frac{2(-1)^4}{4} - \frac{10(-1)^3}{3} - \frac{12(-1)^2}{2}\right)\\\\
  &= 0-\left(0.5 + \frac{10}{3} - 6\right)\\\\
  &= \frac{13}{6}
\end{align\*}

\begin{align\*}
  \int\_0^6 (f(x)-g(x)) \text{ dx} &= \int\_0^6 2x^3 - 10x^2 - 12x \text{ dx}\\\\
  &= \left(\frac{2x^4}{4} - \frac{10x^3}{3} - \frac{12x^2}{2}\right) \Big|\_0^6\\\\
  &= \frac{2 \cdot 6^4}{4} - \frac{10 \cdot 6^3}{3} - \frac{12 \cdot 6^2}{2}\\\\
  &= -288
\end{align\*}

area is \\(288\frac{13}{6}\\) <br/>

</div>

</div>


### <span class="section-num">7.11</span> solid of revolution {#solid-of-revolution}

<div class="definition">

**disc integration** is a method for calculating the volume of a **solid of revolution** of a solid-state material when integrating along an axis "parallel" to the axis of revolution <br/>
if the functions rotate around the \\(x\\) axis, the formula is <br/>
\\[
  V = \pi \int\_a^b f^2(x) - g^2(x) \text{ dx}
\\] <br/>
if the functions rotate around the \\(y\\) axis, the formula is <br/>
\\[
  V = 2\pi \int\_a^b x\left(f^2(x) - g^2(x)\right) \text{ dx}
\\] <br/>

<div class="my_example">

we start with a simple example, consider the function \\(y = x\\) <br/>

{{< figure src="/ox-hugo/dbBobk.svg" >}} <br/>

if we were to rotate this function around the \\(x\\) axis we would get a **Right Circular Cone**: <br/>

{{< figure src="/ox-hugo/AeXpjL.svg" >}} <br/>

to find the volume of this cone we use the disc integration formula, in this case \\(g(x)=0\\) <br/>

assume the function stopped at \\(x=a\\) and started at \\(x=0\\) so we find the volume in the interval \\([0,a]\\) <br/>

\begin{align\*}
  V &= \pi \int\_0^a f^2(x) - g^2(x) \text{ dx}\\\\
  &= \pi \int\_0^a x^2 - 0^2 \text{ dx}\\\\
  &= \pi\left(\frac{x^3}{3}\Big|\_0^a\right)\\\\
  &= \pi\left(\frac{a^3}{3}\right)\\\\
  &= \frac{a^3}{3} \cdot \pi
\end{align\*}

</div>

<div class="my_example">

a circle is defined as \\({(x-a)}^2+{(y-b)}^2=r^2\\), consider the circle \\({(x-1)}^2+{(y-1)}^2=1^2\\) <br/>

{{< figure src="/ox-hugo/4C0eoS.svg" >}} <br/>

if we were to rotate the circle \\(360^{\circ}\\) around the \\(x\\) axis we would get a **ball** <br/>

the upright quarter of a circle is defined as \\(y=\sqrt{r^2-x^2}\\) <br/>

consider the quarter of that circle whose formula is \\(y=\sqrt{1^2-x^2}\\) <br/>

{{< figure src="/ox-hugo/Ni02n3.svg" >}} <br/>

if we were to rotate this around the \\(x\\) axis we would get half a ball and since this is easier to find the volume of we just find the volume using this quarter and multiply by 2 because it generates half a ball <br/>

{{< figure src="/ox-hugo/krbfz1.svg" >}} <br/>

in this case \\(g(x)=0\\), we find the volume using the formula: <br/>

\begin{align\*}
  V &= \pi \int\_0^r {\left(\sqrt{r^2-x^2}\right)}^2 \text{ dx}\\\\
  &= \pi \int\_0^r r^2-x^2 \text{ dx}\\\\
  &= \pi \left(r^2x-\frac{x^3}{3} \Big|\_0^r\right)\\\\
  &= \pi \left(r^3-\frac{r^3}{3}\right)\\\\
  &= \pi \left(\frac{2r^3}{3}\right)\\\\
  &= \frac{2\pi r^3}{3}\\\\
\end{align\*}

so the volume of the ball is \\(\frac{4\pi r^3}{3}\\) <br/>

</div>

<div class="my_example">

find the volume of produced by rotating the function \\(f(x)=e^x\\) around the \\(y\\) axis in the interval \\([0,1]\\) <br/>

{{< figure src="/ox-hugo/iryXEl.svg" >}} <br/>

\begin{align\*}
  V &= 2\pi \int\_0^1 xe^x \text{ dx}\\\\
  &= 2\pi (xe^x-e^x) \Big|\_0^1\\\\
  &= 2\pi (e-e-(0-1))\\\\
  &= 2\pi
\end{align\*}

</div>

</div>


### <span class="section-num">7.12</span> arc length {#arc-length}

<div class="definition">

the length of the curve of a continuous function \\(f(x)\\) in the interval \\([a,b]\\) is defined as: <br/>
\\[
  L = \int\_a^b \sqrt{1+(f'(x))^2} \text{ dx}
\\] <br/>

<div class="my_example">

find the length of the following curve in the interval \\([0,3]\\) <br/>
\\[
  f(x) = \frac13{(x^2+2)}^{\frac32}
\\] <br/>
first we find the derivative <br/>
\\[
  f'(x) = \frac13 \cdot \frac32{(x^2+2)}^{\frac12} \cdot 2x = x{(x^2+2)}^{\frac12}
\\] <br/>
we use the formula: <br/>

\begin{align\*}
  L &= \int\_0^3 \sqrt{1+x^2(x^2+2)} \text{ dx}\\\\
  &= \int\_0^3 \sqrt{1+x^4+2x^2} \text{ dx}\\\\
  &= \int\_0^3 \sqrt{{(x^2+1)}^{2}} \text{ dx}\\\\
  &= \int\_0^3 x^2+1 \text{ dx}\\\\
  &= \frac{x^3}{3}+x \Big|\_0^3\\\\
  &= \frac{3^3}{3}+3\\\\
  &= 12
\end{align\*}

</div>

<div class="my_example">

find the length of the curve of the function \\(f(x) = \frac{x^4}{8} + \frac{1}{4x^2}\\) in the interval \\([1,3]\\) <br/>

\begin{align\*}
  f(x) &= \frac{x^4}{8} + \frac{1}{4x^2}\\\\
  f(x) &= \frac{x^4}{8} + \frac{x^{-2}}{4}\\\\
  f'(x) &= \frac{4x^3}{8} + \frac{-2x^{-3}}{4}\\\\
  f'(x) &= \frac{x^3}{2} - \frac{x^{-3}}{2}\\\\
  {(f'(x))}^2 &= \left(\frac{x^3}{2} - \frac{x^{-3}}{2}\right)^2\\\\
  {(f'(x))}^2 &= \left(\frac{x^3}{2}\right)^2 - \frac{x^3 \cdot x^{-3}}{2} + \left(\frac{x^{-3}}{2}\right)^2\\\\
  {(f'(x))}^2 &= \left(\frac{x^3}{2}\right)^2 - \frac12 + \left(\frac{x^{-3}}{2}\right)^2\\\\
  L &= \int\_a^b \sqrt{1+(f'(x))^2} \text{ dx}\\\\
  &= \int\_a^b \sqrt{1+\left(\frac{x^3}{2}\right)^2 - \frac12 + \left(\frac{x^{-3}}{2}\right)^2} \text{ dx}\\\\
  &= \int\_a^b \sqrt{\left(\frac{x^3}{2}\right)^2 + \frac12 + \left(\frac{x^{-3}}{2}\right)^2} \text{ dx}\\\\
  &= \int\_a^b \sqrt{\left(\frac{x^3}{2}+\frac{x^{-3}}{2}\right)^2} \text{ dx}\\\\
  &= \int\_a^b \frac{x^3}{2}+\frac{x^{-3}}{2} \text{ dx}\\\\
  &= \frac{x^4}{8}+\frac{x^{-2}}{-4} \Big|\_a^b\\\\
  &= \frac{x^4}{8}+\frac{x^{-2}}{-4} \Big|\_1^3\\\\
  &= \frac{3^4}{8}+\frac{3^{-2}}{-4} - \left(\frac{1^4}{8}+\frac{1^{-2}}{-4}\right)\\\\
  &= \frac{92}{9}
\end{align\*}

</div>

<div class="my_example">

find the length of the curve of the function \\(f(x) = \ln(\sin x)\\) in the interval \\(\left[\frac{\pi}{6},\frac{\pi}{2}\right]\\) <br/>

\begin{align\*}
  f(x) &= \ln(\sin x)\\\\
  f'(x) &= \frac{1}{\sin x} \cdot \cos x = \cot x\\\\
  L &= \int\_{\frac{\pi}{6}}^{\frac{\pi}{2}} \sqrt{1+(f'(x))^2} \text{ dx}\\\\
  &= \int\_{\frac{\pi}{6}}^{\frac{\pi}{2}} \sqrt{1+\cot^2 x} \text{ dx}\\\\
  &= \int\_{\frac{\pi}{6}}^{\frac{\pi}{2}} \sqrt{\frac{1}{\sin^2 x}} \text{ dx}\\\\
  &= \int\_{\frac{\pi}{6}}^{\frac{\pi}{2}} \frac{1}{\sin x} \text{ dx}\\\\
  &= \int\_{\frac{\pi}{6}}^{\frac{\pi}{2}} \frac{1}{\sin x} \text{ dx}\\\\
  &= \ln\tan\frac{x}{2} \Big|\_{\frac{\pi}{6}}^{\frac{\pi}{2}}\\\\
  &= \ln\tan\frac{\pi}{4} - \ln\tan\frac{\pi}{12}\\\\
  &= 0 - \ln(2-\sqrt3)\\\\
  &= -1.31695789692482
\end{align\*}

</div>

</div>


### <span class="section-num">7.13</span> integrable function {#integrable-function}

<div class="definition">

a function \\(f\\) is an **integrable function** in the interval \\([a,b]\\) if it has an integral in said interval and that integral is finite, the function has to be defined in that interval <br/>

</div>


### <span class="section-num">7.14</span> riemann sum {#riemann-sum}

**Riemann sum** can be applied to [integrable function](#integrable-function)s to find area <br/>

consider the area below the function \\(e^{-x}\\) in the interval \\([1,2]\\) <br/>
we split the shape into rectangles that are as narrow as possible as the more rectangles we use the more accurate the result <br/>
the following image shows the area split into \\(n=8\\) rectangles <br/>

{{< figure src="/ox-hugo/JAIRcvb.svg" >}} <br/>

you can probably tell that the sum of the areas of these rectangles isnt really close to the area we want to find <br/>
to be more accurate we increase the number of rectangles to \\(n=70\\) and we get a nicer result: <br/>

{{< figure src="/ox-hugo/zdfpeYv.svg" >}} <br/>

you can probably already tell that since this is a "narrower" coverage of the area, the sum of the rectangles would be closer to the value of the actual area <br/>
and now that we know that the more rectangles we have the more accurate we get, we know we should be aiming at \\(\infty\\) rectangles <br/>
the width of a rectangle would be \\(\frac{1}{n}\\) and the height would be \\(f\left(\frac{k}{n}\right)\\) where \\(k\\) is the index of the rectangle starting at 1, the sum of the area \\(S\\) of the rectangles would be: <br/>
\\[
  S = f\left(\frac{1}{n}\right) \cdot \frac{1}{n} + f\left(\frac{2}{n}\right) \cdot \frac{1}{n} + \cdots + f\left(\frac{n}{n}\right) \cdot \frac{1}{n}
\\] <br/>
we factor \\(\frac{1}{n}\\) out <br/>
\\[
  S = \frac{1}{n} \left(f\left(\frac{1}{n}\right) + f\left(\frac{2}{n}\right) + \cdots + f\left(\frac{n}{n}\right)\right)
\\] <br/>
and since we want \\(n\\) to be as big as possible, we take \\(n \to \infty\\) <br/>
\\[
  S = \lim\_{n\to\infty} \frac{1}{n} \left(f\left(\frac{1}{n}\right) + f\left(\frac{2}{n}\right) + \cdots + f\left(\frac{n}{n}\right)\right)
\\] <br/>
and since we know that the area in the interval is equal to the [definite integral](#definite-integral) in said interval then: <br/>
\\[
  S = \lim\_{n\to\infty} \frac{1}{n} \left(f\left(\frac{1}{n}\right) + f\left(\frac{2}{n}\right) + \cdots + f\left(\frac{n}{n}\right)\right) = \int\_{0}^{1} f(x) \text{ dx}
\\] <br/>
which is the common pattern for riemann sums <br/>

<div class="my_example">

we find the area of \\(f(x)=x\\) in the interval \\([0,1]\\) <br/>
using the definite integral method we do: <br/>
\\[
 \int\_{0}^{1} x \text{ dx} = \left. \frac{x^2}{2} \right\vert\_0^1 = \frac12
\\] <br/>
using riemann sum: <br/>
\\[
 \lim\_{n\to\infty} \frac{1}{n} \left(\frac{1}{n} + \frac{2}{n} + \cdots + \frac{n}{n}\right) = \lim\_{n\to\infty} \frac1n \cdot \frac{n(n+1)}{2n} = \lim\_{n\to\infty} \frac{n^2+n}{2n^2} = \frac12
\\] <br/>

</div>

<div class="my_example">

consider the following limit <br/>

\begin{align\*}
  \lim\_{n\to\infty} \frac{3n}{(n+1)^2} + \frac{3n}{(n+2)^2} + \cdots + \frac{3n}{(n+n)^2} &= \lim\_{n\to\infty} \frac1n \left(\frac{3n^2}{(n+1)^2} + \frac{3n^2}{(n+2)^2} + \cdots + \frac{3n^2}{(n+n)^2}\right)\\\\
  &= 3\lim\_{n\to\infty} \frac1n \left(\frac{n^2}{(n+1)^2} + \frac{n^2}{(n+2)^2} + \cdots + \frac{n^2}{(n+n)^2}\right)\\\\
  &= 3\lim\_{n\to\infty} \frac1n \left(\left(\frac{n}{n+1}\right)^2 + \left(\frac{n}{n+2}\right)^2 + \cdots + \left(\frac{n}{n+n}\right)^2\right)\\\\
  &= 3\lim\_{n\to\infty} \frac1n \left(\left(\frac{1}{1+\frac1n}\right)^2 + \left(\frac{1}{1+\frac2n}\right)^2 + \cdots + \left(\frac{1}{1+1}\right)^2\right)\\\\
  &= 3\lim\_{n\to\infty} \frac1n \left(\frac{1}{\left(1+\frac1n\right)^2} + \frac{1}{\left(1+\frac2n\right)^2} + \cdots + \frac{1}{{(1+1)}^2}\right)\\\\
  &= 3\int\_{0}^{1} \frac{1}{{(1+x)}^2} \text{ dx}\\\\
  &= 3\int\_{0}^{1} {(1+x)}^{-2} \text{ dx}\\\\
  &= 3 \cdot \frac{{(1+x)}^{-1}}{-1} \Bigg|\_{0}^{1}\\\\
  &= 3\left(\frac{{(1+1)}^{-1}}{-1} - \frac{{(1+0)}^{-1}}{-1}\right)\\\\
  &= \frac{3}{2}\\\\
\end{align\*}

</div>

<div class="my_example">

\begin{align\*}
  \lim\_{n\to\infty} \frac{n}{n^2+1^2} + \frac{n}{n^2+2^2} + \cdots + \frac{n}{n^2+n^2} &= \lim\_{n\to\infty} \frac1n\left(\frac{n^2}{n^2+1^2} + \frac{n^2}{n^2+2^2} + \cdots + \frac{n^2}{n^2+n^2}\right)\\\\
  &= \lim\_{n\to\infty} \frac1n\left(\frac{1}{1+\frac{1^2}{n^2}} + \frac{1}{1+\frac{2^2}{n^2}} + \cdots + \frac{1}{1 + \left(\frac{n}{n}\right)^2}\right)\\\\
  &= \lim\_{n\to\infty} \frac1n\left(\frac{1}{1+\left(\frac{1}{n}\right)^2} + \frac{1}{1+\left(\frac{2}{n}\right)^2} + \cdots + \frac{1}{1 + \left(\frac{n}{n}\right)^2}\right)\\\\
  &= \int\_{0}^{1} \frac{1}{1+x^2} \text{ dx}\\\\
  &= \arctan x \Big|\_{0}^{1}\\\\
  &= \frac{\pi}{4}
\end{align\*}

</div>

<div class="my_example">

\begin{align\*}
  \lim\_{n\to\infty} \frac1n\left(\sin\frac{\pi}{n} + \sin\frac{2\pi}{n} + \cdots + \sin\frac{n\pi}{n}\right) &= \int\_{0}^{1} \sin(\pi x) \text{ dx}\\\\
  &= \frac{-\cos(\pi x)}{\pi} \Bigg|\_{0}^{1}\\\\
  &= \frac{-\cos(\pi)}{\pi} - \frac{-\cos(0)}{\pi}\\\\
  &= \frac2\pi
\end{align\*}

</div>

<div class="my_example">

\begin{align\*}
  \lim\_{n\to\infty} \frac{1^7 + 2^7 + \cdots + n^7}{n^8} &= \lim\_{n\to\infty} \frac1n \left(\frac{1^7 + 2^7 + \cdots + n^7}{n^7}\right)\\\\
  &= \lim\_{n\to\infty} \frac1n \left(\left(\frac{1}{n}\right)^7 + \left(\frac{2}{n}\right)^7 + \cdots + \left(\frac{n}{n}\right)^7\right)\\\\
  &= \int\_0^1 x^7 \text{ dx}\\\\
  &= \frac{x^8}{8} \Big|\_0^1\\\\
  &= \frac18
\end{align\*}

</div>

<div class="my_example">

\begin{align\*}
  \lim\_{n\to\infty} \frac{\pi}{2n} \left(1+\cos{\frac{\pi}{2n}} + \cos{\frac{2\pi}{2n}} + \cdots + \cos{\frac{(n-1)\pi}{2n}}\right) &= \frac{\pi}{2} \lim\_{n\to\infty} \frac{1}{n} \left(1+\cos{\frac{\pi}{2n}} + \cos{\frac{2\pi}{2n}} + \cdots + \cos{\frac{(n-1)\pi}{2n}}\right)\\\\
  &= \frac{\pi}{2} \int\_0^1 \cos{\frac{\pi x}{2}} \text{ dx}\\\\
  &= \frac{\pi}{2} \left(\frac{\sin{\frac{\pi x}{2}}}{\frac{\pi}{2}} \Big|\_0^1\right)\\\\
  &= \frac{2}{\pi} \cdot \frac{\pi}{2}\\\\
  &= 1
\end{align\*}

</div>

<div class="my_example">

\begin{align\*}
  \lim\_{n\to\infty} \frac{1}{\sqrt{9n^2-1^2}} + \frac{1}{\sqrt{9n^2-2^2}} + \cdots + \frac{1}{\sqrt{9n^2-n^2}} &= \lim\_{n\to\infty} \frac{1}{3n\sqrt{1-\frac{1^2}{9n^2}}} + \frac{1}{3n\sqrt{1-\frac{2^2}{9n^2}}} + \cdots + \frac{1}{3n\sqrt{1-\frac{n^2}{9n^2}}}\\\\
  &= \lim\_{n\to\infty} \frac{1}{3n\sqrt{1-\left(\frac{1}{3n}\right)^2}} + \frac{1}{3n\sqrt{1-\left(\frac{2}{3n}\right)^2}} + \cdots + \frac{1}{3n\sqrt{1-\left(\frac{n}{3n}\right)^2}}\\\\
  &= \lim\_{n\to\infty} \frac1n\left(\frac{1}{3\sqrt{1-\left(\frac{1}{3n}\right)^2}} + \frac{1}{3\sqrt{1-\left(\frac{2}{3n}\right)^2}} + \cdots + \frac{1}{3\sqrt{1-\left(\frac{n}{3n}\right)^2}}\right)\\\\
  &= \int\_0^1 \frac{1}{3\sqrt{1-\left(\frac{x}{3}\right)^2}} \text{ dx}\\\\
  &= \frac13 \int\_0^1 \frac{1}{\sqrt{1-\left(\frac{x}{3}\right)^2}} \text{ dx}\\\\
  &= \frac13 \cdot \frac{\arcsin{\frac{x}{3}}}{\frac13} \Bigg|\_0^1\\\\
  &= \arcsin{\frac13}
\end{align\*}

</div>

<div class="my_example">

\begin{align\*}
  \lim\_{n\to\infty} 7n\left(\frac{1}{25n^2 + 1^2} + \frac{1}{25n^2 + 2^2} + \cdots + \frac{1}{25n^2 + n^2}\right) &= 7\lim\_{n\to\infty} n\left(\frac{1}{25n^2 + 1^2} + \frac{1}{25n^2 + 2^2} + \cdots + \frac{1}{25n^2 + n^2}\right)\\\\
  &= 7\lim\_{n\to\infty} \frac1n\left(\frac{1}{25 + \frac{1}{n^2}} + \frac{1}{25 + \frac{2^2}{n^2}} + \cdots + \frac{1}{25 + \frac{n^2}{n^2}}\right)\\\\
  &= 7\lim\_{n\to\infty} \frac1n\left(\frac{1}{25 + \left(\frac{1}{n}\right)^2} + \frac{1}{25 + \left(\frac{2}{n}\right)^2} + \cdots + \frac{1}{25 + \left(\frac{n}{n}\right)^2}\right)\\\\
  &= 7\int\_0^1 \frac{1}{25+x^2} \text{ dx}\\\\
  &= \frac75 \arctan{\frac{x}{5}} \Big|\_0^1\\\\
  &= \frac{7 \cdot \arctan{\frac15}}{5}
\end{align\*}

</div>

<div class="my_example">

\begin{align\*}
  \int\_2^\infty \frac{1}{x\ln x} \text{ dx} &= \int\_2^\infty \frac{\frac1x}{\ln x} \text{ dx}\\\\
  &= \ln{\ln x} \Big|\_2^\infty\\\\
  &= \infty
\end{align\*}

</div>


### <span class="section-num">7.15</span> improper integral {#improper-integral}

<div class="definition">

there are 2 types of **Improper integrals** <br/>
definition of an improper integral of type 1 – when the limits of integration are infinite <br/>
definition of an improper integral of type 2 – when the integrand becomes infinite within the interval of integration (like division by 0 for example) <br/>

<div class="note">

so far we have dealt with integrals that gave us finite results for finite areas, here we deal with finite aswell as infinite integrals <br/>

</div>

</div>


#### <span class="section-num">7.15.1</span> type 1 {#type-1}

<div class="definition">

improper integral of type 1 – when the limits of integration are infinite <br/>

<div class="my_example">

consider the area below the function \\(f(x)=\frac1x\\) in the interval \\([1,\infty]\\): <br/>

{{< figure src="/ox-hugo/yg17D3.png" >}} <br/>

to calculate the area we use the integration method: <br/>

\begin{align\*}
  \int\_1^\infty \frac1x \text{ dx} &= \lim\_{t\to\infty} \int\_1^t \frac1x \text{ dx}\\\\
  &= \lim\_{t\to\infty} \ln{x} \Big|\_1^t\\\\
  &= \lim\_{t\to\infty}\left(\ln{t} - \ln{1}\right)\\\\
  &= \infty - 0\\\\
  &= \infty\\\\
\end{align\*}

</div>

</div>


#### <span class="section-num">7.15.2</span> type 2 {#type-2}

<div class="definition">

improper integral of type 2 – when the integrand becomes infinite within the interval of integration (like division by 0 for example <br/>

<div class="my_example">

\\[
  \int\_0^1 \frac{1}{\sqrt{x}} \text{ dx}
\\] <br/>
this function isnt defined at \\(x=0\\) yet we integrate it which is why its called an improper integral <br/>
\\[
  \int\_0^1 \frac{1}{\sqrt{x}} \text{ dx} = 2\sqrt{x} \Big|\_0^1 = 2 - 0 = 2
\\] <br/>

</div>

<div class="my_example">

\\[
  \int\_0^1 \frac{1}{x} \text{ dx}
\\] <br/>
again this function isnt defined at \\(x=0\\) but we integrate it anyway: <br/>
\\[
  \int\_0^1 \frac{1}{x} \text{ dx} = \ln{x} \Big|\_0^1 = \ln{1} - \ln{0} = \infty
\\] <br/>

</div>

<div class="lemma">

\begin{align\*}
  \int\_1^\infty \frac{1}{x^\alpha} \text{ dx} &= \int\_1^\infty x^{-\alpha} \text{ dx}\\\\
  &= \frac{x^{-\alpha+1}}{-\alpha+1} \bigg|\_1^\infty\\\\
  &= \begin{cases}
       \frac{x^{-\alpha+1}}{-\alpha+1} \Big|\_1^\infty &\alpha \neq 1\\\\
       \ln x \Big|\_1^\infty &\alpha = 1\\\\
     \end{cases}\\\\
  &= \begin{cases}
       \frac{x^{-\alpha+1}}{-\alpha+1} \Big|\_1^\infty &\alpha > 1 \rightarrow \text{converges}\\\\
       \ln x \Big|\_1^\infty &\alpha = 1 \rightarrow \text{diverges}\\\\
       \frac{x^{-\alpha+1}}{-\alpha+1} \Big|\_1^\infty &\alpha < 1 \rightarrow \text{diverges}
     \end{cases}
\end{align\*}

</div>

</div>


### <span class="section-num">7.16</span> convergence tests {#convergence-tests}


#### <span class="section-num">7.16.1</span> direct comparison test {#direct-comparison-test}

<div class="definition">

given \\(f(x) \geq g(x) \geq 0\\) and it follows that \\(\int\_1^\infty g(x) \text{ dx} \leq \int\_1^\infty f(x) \text{ dx}\\), if \\(\int\_1^\infty f(x) \text{ dx}\\) converges then \\(\int\_1^\infty g(x) \text{ dx}\\) converges too and if \\(\int\_1^\infty g(x) \text{ dx}\\) diverges then \\(\int\_1^\infty f(x) \text{ dx}\\) diverges too <br/>

<div class="my_example">

if we wanted to know if the integral \\(\int\_1^\infty \frac{1}{x^3+7} \text{ dx}\\) diverges or converges we look at the expression we arrived at in the last lemma <br/>
we take the function \\(\frac{1}{x^3}\\) which corresponds to the first case in that lemma where \\(a > 1\\) which means this function converges <br/>
and since we know \\(\frac{1}{x^3+7} < \frac{1}{x^3}\\) and \\(\int\_1^\infty \frac{1}{x^3} \text{ dx}\\) converges then we know \\(\int\_1^\infty \frac{1}{x^3+7} \text{ dx}\\) converges too <br/>

</div>

<div class="my_example">

check if the following integral diverges/converges <br/>
\\[
  \int\_2^\infty \frac{1}{\ln{x}} \text{ dx}
\\] <br/>
we consider the function \\(\frac1x\\), we know \\(\ln{x} \leq x\\) is always true, if we were to turn them into fractions we would get \\(\frac{1}{\ln{x}} \geq \frac{1}{x}\\) <br/>
and if we look at the same lemma from before we know \\(\int\_2^\infty \frac{1}{x} \text{ dx}\\) diverges because it corresponds to the case where \\(a=1\\) <br/>
and since \\(\int\_2^\infty \frac{1}{x} \text{ dx}\\) diverges and \\(\int\_2^\infty \frac{1}{x} \text{ dx} \leq \int\_2^\infty \frac{1}{\ln{x}} \text{ dx}\\) then we know \\(\int\_2^\infty \frac{1}{\ln{x}} \text{ dx}\\) diverges <br/>

</div>

<div class="my_example">

consider the integral: <br/>
\\[
  \int\_5^\infty \frac{1}{x\ln^2 x} \text{ dx}
\\] <br/>
we use [integration by substitution](#integration-by-substitution) where \\(t = \ln x\\) <br/>
\\(\text{ dt} = \frac1x \text{ dx} \Longrightarrow \text{ dx} = x\text{ dt}\\) <br/>

\begin{align\*}
  \int \frac{1}{x\ln^2 x} \text{ dx} &= \int \frac{1}{xt^2} \cdot x \text{ dt}\\\\
  &= \int \frac{1}{t^2} \text{ dt}\\\\
  &= \int t^{-2} \text{ dt}\\\\
  &= -t^{-1}\\\\
  &= \frac{-1}{t}\\\\
  &= \frac{-1}{\ln x}\\\\
\end{align\*}

we substitute the interval: <br/>

\begin{align\*}
  \int\_5^\infty \frac{1}{x\ln^2 x} \text{ dx} &= \frac{-1}{\ln x} \Big|\_5^\infty\\\\
  &= \underbrace{\frac{-1}{\ln \infty}}\_{\clap{diverges to 0}} - \frac{-1}{\ln 5}\\\\
  &= \frac{1}{\ln 5}
\end{align\*}

we found that the given integral converges to \\(\frac{1}{\ln 5}\\) (meaning the area between the given function and the \\(x\\) axis is equal to \\(\frac{1}{\ln 5}\\)). <br/>

</div>

<div class="my_example">

this example shows another way to go about it <br/>
consider the integral <br/>
\\[
  \int\_2^7 2x{(x^2 + 3)}^{10} \text{ dx}
\\] <br/>
we use substitution where \\(t = x^2 + 3\\) <br/>
\\(t = x^2 + 3 \Longrightarrow \text{dt} = 2x \text{ dx}\\) <br/>

\begin{align\*}
  \int 2x{(x^2 + 3)}^{10} \text{ dx} &= \int 2xt^{10} \frac{\text{dt}}{2x}\\\\
  &= \int t^{10} \text{ dt}\\\\
\end{align\*}

since \\(t = x^2 + 3\\), we know \\(x = 2 \Longrightarrow t = 7,\ x = 7 \Longrightarrow 52\\), therefore we use the interval \\([7,52]\\) and integrate with respect to \\(t\\) <br/>

\begin{align\*}
  \int\_2^7 2x{(x^2 + 3)}^{10} \text{ dx} &= \int\_7^{52} t^{10} \text{ dt}\\\\
  &= \frac{t^{11}}{11} \Bigg|\_7^{52}\\\\
\end{align\*}

</div>

</div>


#### <span class="section-num">7.16.2</span> limit comparison test {#limit-comparison-test}

<div class="definition">

given \\(f(x),g(x) \geq 0\\), if: <br/>
\\[
  \lim\_{x\to\infty} \frac{f(x)}{g(x)} = L,\ 0 < L < \infty
\\] <br/>
then the integrals of \\(\int\_1^\infty f(x) \text{ dx}\\) and \\(\int\_1^\infty g(x) \text{ dx}\\) either both diverge or both converge <br/>

<div class="my_example">

consider the following integral <br/>
\\[
  \int\_1^\infty \frac{2x^2 + 3}{5x^4 + x^2 - 9} \text{ dx}
\\] <br/>
to tell whether this integral is divergent/convergent we devide it by \\(\frac{1}{x^2}\\) because \\(\frac{x^2}{x^4} = \frac{1}{x^2}\\) is the biggest power in \\(\frac{2x^2 + 3}{5x^4 + x^2 - 9}\\) <br/>
\\[
  \lim\_{x\to\infty} \frac{\frac{2x^2 + 3}{5x^4 + x^2 - 9}}{\frac{1}{x^2}} = \lim\_{x\to\infty} \frac{2x^4+3x^2}{5x^4+x^2-9} = \frac25
\\] <br/>
and since we know \\(\int\_1^\infty \frac{1}{x^2} \text{ dx}\\) is convergent we know \\(\int\_1^\infty \frac{2x^2 + 3}{5x^4 + x^2 - 9} \text{ dx}\\) is convergent too <br/>

</div>

</div>


#### <span class="section-num">7.16.3</span> Dirichlet's test {#dirichlet-s-test}

<div class="definition">

given an [integrable function](#integrable-function) \\(f(x)\\) for all \\(x\\) such that: <br/>
\\[
  \left|\int\_a^b f(x) \text{ dx}\right| \leq M
\\] <br/>
where \\(M\\) is some constant, and given some monotonically decreasing function \\(g(x)\\) such that \\(\lim\_{x\to\infty} g(x) = 0\\) then the integral \\(\int\_a^\infty f(x) \cdot g(x) \text{ dx}\\) converges <br/>

<div class="my_example">

consider the integral: <br/>
\\[
  \int\_1^\infty \frac{\sin x}{x} \text{ dx}
\\] <br/>
we use this test to determine whether this integral diverges or converges <br/>

\begin{gather\*}
  \int\_1^\infty \frac{\sin x}{x} \text{ dx} = \int\_1^\infty \sin x \cdot \frac1x \text{ dx}\\\\
  \left|\int\_a^b \sin x \text{ dx}\right| = \left|-\cos x\big|\_a^b\right| = |-\cos b + \cos a| \leq 2
\end{gather\*}

we take \\(g(x) = \frac1x\\), we know \\(\lim\_{x\to\infty} g(x) = 0\\) and \\(g'(x)=-\frac1{x^2} \leq 0\\) therefore \\(g(x)\\) is a monotonically decreasing function therefore we can use it in our Dirichlet test and therefore \\(\int\_a^\infty f(x) \cdot g(x) \text{ dx}\\) converges therefore the original integral \\(\int\_1^\infty \frac{\sin x}{x} \text{ dx}\\) converges <br/>

</div>

<div class="my_example">

\begin{align\*}
  \int\_1^\infty \frac{\cos^2 x}{x} \text{ dx} &= \int\_1^\infty \frac{1+\cos 2x}{2x} \text{ dx}\\\\
  &= \frac12\int\_1^\infty \frac{1}{x} \text{ dx} + \frac12\int\_1^\infty \frac{\cos 2x}{x} \text{ dx}\\\\
\end{align\*}

we take the second integral \\(\int\_1^\infty \frac{\cos 2x}{x} \text{ dx}\\), this integral is of 2 functions: <br/>

\begin{gather\*}
  \left|\int\_a^b \cos 2x \text{ dx}\right| = \left|\frac{\sin 2x}{2}\Bigg|\_a^b\right| = \left|\frac{\sin 2b}{2} - \frac{\sin 2a}{2}\right| \leq 1\\\\
  g(x) = \frac1x,\ g'(x) = \frac{-1}{x^2} < 0,\ \lim\_{x\to\infty} g(x) = 0
\end{gather\*}

therefore the integral of the second function converges <br/>
and the integral of the first function \\(\frac1x\\) diverges <br/>
therefore the sum of those integrals converges <br/>

</div>

<div class="my_example">

check whether the following integral converges <br/>
\\[
  \int\_1^\infty x^4e^{-x} \cos x \text{ dx}
\\] <br/>
we take \\(f(x) = \cos x\\): <br/>
\\[
  \int\_a^b \cos x \text{ dx} = \left|\sin x\big|\_a^b\right| = \left|\sin b - \sin a\right| \leq 2
\\] <br/>
and we take \\(g(x) = \frac{x^4}{e^x}\\) and we know \\(\lim\_{x\to\infty} g(x) = 0\\) since \\(e^x\\) outgrows any polynomial <br/>
\\[
  g'(x) = \frac{4x^3e^x-e^xx^4}{{(e^x)}^2} = \frac{x^3e^x(4-x)}{e^{2x}}
\\] <br/>
\\(g'(x)\\) is equal to 0 only in \\(x=0,4\\), we can substitute variables in both intervals \\((0,4),(4,\infty]\\) to find that in the interval \\((0,4)\\) the function is increasingly monotonic while in \\((0,\infty]\\) its decreasingly monotonic which is what we're looking for here <br/>
therefore we split this integral in 2: <br/>
\\[
  \int\_1^\infty x^4e^{-x} \cos x \text{ dx} = \underbrace{\int\_1^4 x^4e^{-x}\cos x \text{ dx}}\_{\text{finite}} + \underbrace{\int\_4^\infty x^4e^{-x}\cos x \text{ dx}}\_{\text{converges}}\\\\
\\] <br/>
the second part of the integral converges because it abides by Dirichlet's and the first part is just a finite definite integral that evaluates to some constant <br/>
therefore this integral converges because the sum of 2 finite constants is a constant <br/>
\\[
 \int\_1^\infty \frac{\sin^2 x}{x^3} \text{ dx} \leq \underbrace{\int\_1^\infty \frac{1}{x^3} \text{ dx}}\_{\text{converges}}
\\] <br/>
therefore the first integral also converges because its smaller <br/>

</div>

<div class="question">

\\[
  \int\_1^\infty \sin(x^2) \text{ dx}
\\] <br/>

<div class="answer">

we use [integration by substitution](#integration-by-substitution), let \\(t = x^2 \Longrightarrow \text{dt} = 2x\text{ dx} \Longrightarrow \text{dx} = \frac{\text{dt}}{2x}\\), and the interval in this case is the same for \\(t\\) and \\(x\\) <br/>

\begin{align\*}
  \int\_1^\infty \sin(x^2) \text{ dx} &= \int\_1^\infty \sin t \frac{\text{dt}}{2x}\\\\
  &= \frac12\int\_1^\infty \frac{\sin t}{\sqrt{t}} \text{ dt}\\\\
\end{align\*}

we can notice that the integral we arrived at can be solved using [Dirichlet's test](#dirichlet-s-test) <br/>
we pick \\(f(t) = \sin t\\): <br/>
\\[
  \left|\int\_a^b \sin t \text{ dt}\right| = \left|-\cos t\big|\_a^b\right| = |-\cos b + \cos a| \leq 2
\\] <br/>
we pick \\(g(t) = \frac{1}{\sqrt{t}} = t^{-\frac12}\\) <br/>
\\[
  g'(t) = -\frac12 t^{-\frac32} < 0
\\] <br/>
\\(g(t)\\) is a monotonically decreasing function and \\(\lim\_{t\to\infty} \frac{1}{\sqrt t} = 0\\) therefore according to [Dirichlet's test](#dirichlet-s-test) \\(\frac12\int\_1^\infty \frac{\sin t}{\sqrt{t}} \text{ dt}\\) converges therefore \\(\int\_1^\infty \sin(x^2) \text{ dx}\\) converges too <br/>

</div>

</div>

<div class="question">

\\[
  \int\_8^\infty \frac{\ln^3 x \cdot \cos\frac{x}{3}}{x} \text{ dx}
\\] <br/>

<div class="answer">

again, we use [Dirichlet's test](#dirichlet-s-test) <br/>
we take \\(f(x) = \cos \frac{x}{3}\\) <br/>
\\[
  \left|\int\_a^b \cos \frac{x}{3} \text{ dx}\right| = \left|\frac{\sin \frac{x}{3}}{\frac13} \Bigg|\_a^b\right| = \left|\frac{\sin \frac{b}{3}}{\frac13} - \frac{\sin \frac{a}{3}}{\frac13}\right| \leq 6
\\] <br/>
we take \\(g(x) = \frac{\ln^3 x}{x}\\), we use lhopital to find the limit <br/>
\\[
  \lim\_{x\to\infty} \frac{\ln^3 x}{x} \Rightarrow \lim\_{x\to\infty} \frac{3\ln^2 x \cdot \frac1x}{1} = \lim\_{x\to\infty} \frac{3\ln^2 x}{x} \Rightarrow \lim\_{x\to\infty} \frac{6\ln x \cdot \frac1x}{1} = \lim\_{x\to\infty} \frac{6\ln x}{x} = \lim\_{x\to\infty} \frac6x = 0
\\] <br/>
or we can say that \\(x\\) outgrows \\(\ln^3 x\\) therefore the function converges to 0, we find \\(g'(x)\\): <br/>
\\[
  g'(x) = \frac{3\ln^2 x \cdot \frac1x \cdot x - \ln^3 x}{x^2} = \frac{\ln^2 x(3-\ln x)}{x^2}
\\] <br/>
\\(\frac{\ln^2 x(3-\ln x)}{x^2} = 0\\) gives us the 2 solutions \\(x=1,x=e^3\\), and if we were to substitute \\(x > e^3\\) we would find that the function \\(g(x)\\) is monotonically decreasing in the interval \\((e^3, \infty]\\) and monotonically increasing in \\((1,e^3)\\), therefore these functions abide by [Dirichlet's test](#dirichlet-s-test)'s requirements therefore we write: <br/>
\\[
  \int\_8^\infty \frac{\ln^3 x \cdot \cos\frac{x}{3}}{x} \text{ dx} = \underbrace{\int\_8^{e^3} \frac{\ln^3 x \cdot \cos\frac{x}{3}}{x} \text{ dx}}\_{\text{finite}} + \underbrace{\int\_{e^3}^{\infty} \frac{\ln^3 x \cdot \cos\frac{x}{3}}{x} \text{ dx}}\_{\text{converges}}
\\] <br/>
finite + convergent = convergent therefore \\(\int\_8^\infty \frac{\ln^3 x \cdot \cos\frac{x}{3}}{x} \text{ dx}\\) is convergent <br/>

</div>

</div>

<div class="question">

\\[
  \int\_8^{\infty} \frac{1}{x\ln x\ln\ln x} \text{ dx}
\\] <br/>

<div class="answer">

we use [substitution](#integration-by-substitution) where \\(t = \ln\ln x \Rightarrow \text{dt} = \frac{1}{\ln x} \cdot \frac1x \Rightarrow \text{dx} = x\ln x \text{ dt}\\) <br/>
\\(x = 8 \Rightarrow t = \ln\ln8 = 0.73,\ x = \infty \Rightarrow t = \ln\ln\infty = \infty\\) <br/>

\begin{align\*}
  \int\_8^{\infty} \frac{1}{x\ln x\ln\ln x} \text{ dx} &= \int\_{0.73}^\infty \frac1{\cancel{x\ln x}t} \cancel{x\ln x} \text{ dt}\\\\
  &= \int\_{0.73}^\infty \frac1t \text{ dt} &\text{diverges}
\end{align\*}

therefore the original integral \\(\int\_8^{\infty} \frac{1}{x\ln x\ln\ln x} \text{ dx}\\) diverges <br/>

</div>

</div>

</div>


## <span class="section-num">8</span> series {#series}

<div class="note">

here we're talking about positive series <br/>

</div>

<div class="definition">

consider the following series <br/>

\begin{align}
  \sum\_{n=1}^\infty a\_n &= a\_1 + a\_2 + \cdots + a\_n &\text{diverges, behaves like } f(x) = x\\\\
  \sum\_{n=1}^\infty \frac1n &= \frac11 + \frac12 + \cdots + \frac1n &\text{diverges,  behaves like } f(x)=\frac1x\\\\
  \sum\_{n=1}^\infty \frac1{n^2} &= \frac1{1^2} + \frac1{2^2} + \cdots + \frac1{n^2} &\text{converges,  behaves like } f(x)=\frac1{x^2}\\\\
  \sum\_{n=1}^\infty \frac1{3^n} &= \frac1{3^1} + \frac1{3^2} + \cdots + \frac1{3^n} &\text{diverges, this is an infinite decreasing series}\\\\
  \sum\_{n=1}^\infty 2n + 3 &= 5 + 7 + \cdots + 2n+3 &\text{diverges}\\\\
  \sum\_{n=1}^\infty {(-1)}^n &= -1 + 1 + -1 + 1 + \cdots + {(-1)}^n &\text{diverges, it doesnt converge to a constant}
\end{align}

<div class="my_example">

consider the series: <br/>
\\[
  \sum\_{n=1}^\infty \frac1{n(n+1)} = \sum\_{n=1}^\infty \frac1n - \frac1{n+1} = \frac11 - \frac12 + \frac12 - \frac13 + \frac13 - \frac14 + \cdots + \frac1n - \frac1{n+1} = 1 - \frac{1}{n+1}
\\] <br/>
this series converges to 1 as it ends with \\(1 - \frac{1}{n+1}\\) <br/>

</div>

<div class="my_example">

\\[
  \sum\_{n=1}^\infty \ln\left(1 + \frac1n\right) = \sum\_{n=1}^\infty \ln\left(\frac{1+n}{n}\right) =\sum\_{n= 1}^\infty \ln(1+n) - \ln n = \ln2 - \ln1 + \ln3 - \ln2 + \ln4 - \ln3 + \cdots + \ln(1+n) - \ln n = \ln(n+1)
\\] <br/>
this series diverges <br/>

</div>

<div class="lemma">

a necessary condition for the convergence of a series is \\(\lim\_{n\to\infty} a\_n=0\\) <br/>

<div class="my_example">

consider \\(\sum \frac1n,\ \sum\frac{1}{n^2}\\), the first diverges but the second converges therefore \\(\lim\_{n\to\infty} \frac{1}{n^2} = 0\\) <br/>

</div>

</div>

<div class="lemma">

the sum \\(\sum\_{n=1}^\infty \frac{1}{n^\alpha}\\) converges when \\(\alpha > 1\\) and diverges when \\(a \leq 1\\) <br/>

</div>

</div>


### <span class="section-num">8.1</span> telescoping series {#telescoping-series}


### <span class="section-num">8.2</span> convergence tests {#convergence-tests}

{{< figure src="/ox-hugo/tests.jpg" >}} <br/>


#### <span class="section-num">8.2.1</span> direct comparison test {#direct-comparison-test}

<div class="definition">

given the infinite series \\(\sum^\infty b\_n, \sum^\infty a\_n\\) such that \\(|a\_n| \leq |b\_n|\\) for sufficiently large \\(n\\) then: <br/>

1.  if the series \\(b\_n\\) converges then the series \\(a\_n\\) also converges <br/>
2.  if the series \\(a\_n\\) diverges then the series \\(b\_n\\) also diverges <br/>

<div class="my_example">

\begin{align\*}
  \sum^\infty \frac{1}{n^5+17} \leq& \sum^\infty \frac{1}{n^5}\\\\
  \text{converges} \impliedby& \text{converges}
\end{align\*}

</div>

<div class="my_example">

does this series converge or diverge? <br/>
\\[
  \sum\_{n=2}^\infty \frac{1}{\ln n}
\\] <br/>
it diverges because \\(\frac{1}{\ln x} > \frac{1}{n}\\) and \\(\sum \frac{1}{n}\\) diverges <br/>

</div>

</div>


#### <span class="section-num">8.2.2</span> limit comparison test {#limit-comparison-test}

<div class="definition">

if \\(\\{a\_n\\},\\{b\_n\\} > 0\\) (all elements of the two sequences are positive) and the limit \\(\lim\_{n\to\infty} \frac{a\_n}{b\_n}\\) [exists](#convergence) and is non-zero, then \\(\sum\_{n=1}^\infty a\_n\\) diverges if and only if \\(\sum\_{n=1}^\infty b\_n\\) diverges <br/>

<div class="my_example">

\\[
  \sum \frac{3n^3+7n^2-2}{7n^5+4n^2-3}
\\] <br/>
we divide by \\(\frac{1}{n^2}\\) <br/>
\\[
  \lim\_{n\to\infty} \frac{\frac{3n^3+7n^2-2}{7n^5+4n^2-3}}{\frac{1}{n^2}} = \lim\_{n\to\infty} \frac{3n^5+7n^4-2n^2}{7n^5+4n^2-3} = \frac37
\\] <br/>
we know \\(\sum \frac{1}{n^2}\\) converges therefore \\(\sum \frac{3n^3+7n^2-2}{7n^5+4n^2-3}\\) converges too <br/>

</div>

</div>


#### <span class="section-num">8.2.3</span> Ratio test {#ratio-test}

<div class="definition">

suppose there exists \\(r\\) such that <br/>
\\[
  \lim\_{n\to\infty} \left|\frac{a\_{n+1}}{a\_n}\right| = r
\\] <br/>
If \\(r < 1\\), then the series \\(\sum a\_n\\) is convergent. If \\(r > 1\\), then the series is divergent. If \\(r = 1\\), the **ratio test** is inconclusive, and the series may converge or diverge, and we may use the [root test](#root-test) which might succeed where the [ratio test](#ratio-test) fails <br/>

<div class="my_example">

consider \\(\sum \frac1n\\) which we already know is divergent, \\(\lim\_{n\to\infty} \frac{\frac{1}{n+1}}{\frac{1}{n}} = \lim\_{n\to\infty} \frac{n}{n+1} = 1\\) which means the test is inconclusive (fails) <br/>

</div>

<div class="my_example">

consider \\(\sum \frac{1}{3^n}\\) <br/>
\\[
  \frac{a\_{n+1}}{a\_n} = \frac{3^n}{3^{n+1}} = \frac{3^n}{3 \cdot 3^n} = \frac13 < 1
\\] <br/>
which means \\(\sum \frac{1}{3^n}\\) converges <br/>

</div>

<div class="my_example">

consider the series: <br/>
\\[
  \sum \frac{(n!)^2}{(2n)!}
\\] <br/>
we use the [ratio test](#ratio-test) <br/>

\begin{align\*}
  \frac{a\_{n+1}}{a\_n} &= \frac{((n+1)!)^2}{(2(n+1))!} \cdot \frac{(2n)!}{(n!)^2}\\\\
  &= \frac{(n+1)^2 \cdot (n!)^2}{(2n+2)!} \cdot \frac{(2n)!}{(n!)^2}\\\\
  &= \frac{(n+1)^2 \cdot \cancel{(n!)^2}}{(2n+2)(2n+1)\cancel{((2n)!)}} \cdot \frac{\cancel{(2n)!}}{\cancel{(n!)^2}}\\\\
  &= \frac{n^2+2n+1}{4n^2+6n+2}\\\\
  &\implies \frac14
\end{align\*}

which means this series is convergent <br/>

</div>

<div class="my_example">

consider the series <br/>
\\[
  \sum \frac{2^n \cdot n!}{n^n}
\\] <br/>
we make use of the [ratio test](#ratio-test) <br/>

\begin{align\*}
  \frac{a\_{n+1}}{a\_n} &= \frac{2^{n+1} \cdot (n+1)!}{(n+1)^{n+1}} \cdot \frac{n^n}{2^n \cdot n!}\\\\
  &= \frac{2 \cdot \cancel{2^n \cdot (n+1)n!} \cdot n^n}{\cancel{(n+1)}(n+1)^n \cdot \cancel{2^n \cdot n!}}\\\\
  &= \frac{2n^n}{(n+1)^n}\\\\
  &= 2\left(\frac{n}{n+1}\right)^n
\end{align\*}

we find the limit of \\(\left(\frac{n}{n+1}\right)^n\\) using euler <br/>

\begin{gather\*}
  \lim\_{n\to\infty} \left(\frac{n}{n+1}\right)^n = e^L\\\\
  L = \lim\_{n\to\infty} \left(\frac{n}{n+1} - 1\right)n = \lim\_{n\to\infty} \left(\frac{-1}{n+1}\right)n = \lim\_{n\to\infty} \frac{-n}{n+1} = -1
\end{gather\*}

we continue where we left off: <br/>
\\[
 \lim\_{n\to\infty} 2\left(\frac{n}{n+1}\right)^n = 2e^{-1} = \frac{2}{e} < 1
\\] <br/>
which means this series is convergent <br/>

</div>

<div class="my_example">

\\[
  \sum\_{n=1}^\infty \sin\frac1n
\\] <br/>
we know \\(\sin x\\) behaves like \\(x\\) so we divide by \\(\frac1n\\) and use the [limit comparison test](#limit-comparison-test) <br/>
\\[
  \lim\_{n\to\infty} \frac{\sin\frac1n}{\frac1n} = 1
\\] <br/>
which means the series is divergent because \\(\sum \frac1n\\) diverges <br/>
note that \\(\sum\_{n=1}^\infty \sin^2\frac1n\\) is convergent because we would divide by \\(\frac1{n^2}\\) whose series converges <br/>

</div>

</div>


#### <span class="section-num">8.2.4</span> Root test {#root-test}

<div class="definition">

let <br/>
\\[
  r = \lim\_{n\to\infty} \sqrt[n]{|a\_n|}
\\] <br/>
if \\(r < 1\\), the series converges, if \\(r > 1\\), then the series diverges, if \\(r = 1\\), the root test is inconclusive, and the series may converge or diverge. <br/>

<div class="note">

this is a consequence of the following equality: <br/>
\\[
  \lim \frac{a\_{n+1}}{a\_n} = \lim \sqrt[n]{a\_n}
\\] <br/>

</div>

<div class="my_example">

consider <br/>
\\[
  \sum \frac{1}{3^n}
\\] <br/>
we use the [root test](#root-test) <br/>
\\[
\sqrt[n]{a\_n} = \sqrt[n]{\frac{1}{3^n}} = \frac13 < 1
\\] <br/>
which means that the series converges <br/>

</div>

<div class="my_example">

consider <br/>
\\[
\sum \frac{1}{\left(\frac{n+1}{n+3}\right)^{n(n+1)}}
\\] <br/>
we apply the [root test](#root-test) <br/>
\\[
  \sqrt[n]{a\_n} = \sqrt[n]{\frac{1}{\left(\frac{n+1}{n+3}\right)^{n(n+1)}}} = \frac{1}{\left(\frac{n+1}{n+3}\right)^{n+1}}
\\] <br/>
we find the limit of the fraction: <br/>

\begin{gather\*}
  \lim\_{n\to\infty} \left(\frac{n+1}{n+3}\right)^{n+1} = e^L\\\\
  L = \lim\_{n\to\infty} \left(\frac{n+1}{n+3}-1\right)(n+1) = \lim\_{n\to\infty} \left(\frac{-2}{n+3}\right)(n+1) = \lim\_{n\to\infty} \frac{-2n-2}{n+3} = -2
\end{gather\*}

we go back to the original limit: <br/>

\begin{gather\*}
  \lim\_{n\to\infty} \frac{1}{\left(\frac{n+1}{n+3}\right)^{n+1}} = \lim\_{n\to\infty} \frac{1}{e^{-2}} = e^2 > 1
\end{gather\*}

which means that the series diverges <br/>

</div>

<div class="my_example">

\\[
  \sum \left(\frac{n}{n+1}\right)^{2n}
\\] <br/>
we apply the [root test](#root-test) <br/>

\begin{gather\*}
  \lim\_{n\to\infty} \left(\frac{n}{n+1}\right)^{2n} = \frac{1}{e^L}\\\\
  a\_n = \left(\frac{n}{n+1}\right)^{2n} \implies \frac{1}{e^L} \neq 0\\\\
  L \implies \left(\frac{n}{n+1}-1\right)2n = \left(\frac{-1}{n+1}\right)2n = \frac{-2n}{n+1} \implies -2\\\\
  \lim\_{n\to\infty} \left(\frac{n}{n+1}\right)^{2n} = \frac{1}{e^{-2}} = e^2 > 1
\end{gather\*}

which means that the series diverges <br/>

</div>

</div>


#### <span class="section-num">8.2.5</span> Integral test {#integral-test}

<div class="definition">

let \\(f(x) > 0\\) then the integral \\(\int\_1^\infty f(x) \text{ dx}\\) and the series \\(\sum\_{n=1}^\infty f(n)\\) converge or diverge together <br/>

<div class="my_example">

\\[
  \sum\_{n=5}^\infty \frac{1}{n\ln n}
\\] <br/>
we use the [integral test](#integral-test) and compare the series to the integral \\(\int\_5^\infty \frac{1}{x\ln x} \text{ dx}\\) <br/>

\begin{gather\*}
  t = \ln x\\\\
  \text{dt} = \frac1x \text{ dx}\\\\
  \text{dx} = x \text{ dt}\\\\
  x=5 \implies t = \ln5\\\\
  x=\infty \implies t=\ln\infty=\infty\\\\
  \int\_{\ln5}^\infty \frac{1}{xt}x \text{ dt} = \underbrace{\int\_{\ln5}^\infty \frac{1}{t} \text{ dt}}\_{\text{diverges}}
\end{gather\*}

which means that the series \\(\sum\_{n=5}^\infty \frac{1}{n\ln n}\\) diverges too <br/>

</div>

<div class="my_example">

using both [ratio test](#ratio-test) and [direct comparison test](#direct-comparison-test) <br/>

\begin{gather\*}
  \sum \frac{1!+2!+3!+\cdots+n!}{(2n)!} \leq \sum \frac{n!+n!+n!+\cdots+n!}{(2n)!} = \sum \frac{n\cdot n!}{(2n)!}\\\\
  \frac{a\_{n+1}}{a\_n} = \frac{(n+1)(n+1)!}{(2(n+1))!} \cdot \frac{(2n)!}{n\cdot n!} = \frac{(n+1)\cancel{(n+1)n! \cdot (2n)!}}{\cancelto{2}{(2n+2)}(2n+1)\cancel{(2n)!} \cdot n \cdot \cancel{n!}} = \frac{n+1}{2(2n+1)n} = \frac{n+1}{4n^2+2n} \implies 0 < 1
\end{gather\*}

which means the series converges <br/>

</div>

<div class="my_example">

\begin{gather\*}
  \sum\_{n=1}^\infty 1-\cos\frac1n = \sum\_{n=1}^\infty 2\sin^2\frac{1}{2n}\\\\
  \lim \frac{2\sin^2\frac{1}{2n}}{\frac{1}{n^2}} \implies 8
\end{gather\*}

unfinished <br/>

</div>

<div class="my_example">

\\[
  \sum\_{n=7}^\infty = \frac{\ln^{-3} n}{n}
\\] <br/>
we apply the [integral test](#integral-test) <br/>

\begin{gather\*}
  t = \ln x\\\\
  \text{dt} = \frac1x \text{ dx}\\\\
  \text{dx} = x\text{ dt}\\\\
  x=7 \implies t=\ln7\\\\
  x=\infty \implies t=\ln\infty=\infty\\\\
  \int\_{\ln7}^\infty \frac{1}{x\ln^3 x} \text{ dx} = \int\_{\ln7}^\infty \frac{1}{xt^3} x \text{ dt} = \underbrace{\int\_{\ln7}^\infty \frac{1}{t^3} \text{ dt}}\_{\text{converges}}
\end{gather\*}

which means the series converges too <br/>

</div>

<div class="my_example">

\\[
  \sum \frac{(n+1)! + (n+2)! + \cdots + (2n)!}{(2n+3)!} \leq \sum \frac{n(2n)!}{(2n+3)(2n+2)(2n+1)(2n)!} \leq \sum \frac{n}{n \cdot n \cdot n} = \sum \frac{1}{n^2}
\\] <br/>
and since \\(\sum \frac{1}{n^2}\\) converges we know the original series converges because its smaller <br/>

</div>

<div class="my_example">

\\[
  \sum \frac{2^n}{\left(\frac{3n+2}{3n+1}\right)^{n(2n-3)}}
\\] <br/>
we use the [Root test](#root-test): <br/>
\\[
  \sqrt[n]{\frac{2^n}{\left(\frac{3n+2}{3n+1}\right)^{n(2n-3)}}} = \frac{2}{\left(\frac{3n+2}{3n+1}\right)^{2n-3}} \implies \frac{2}{e^{\frac23}} > 1
\\] <br/>
which means the series diverges <br/>

</div>

</div>


#### <span class="section-num">8.2.6</span> Raabe–Duhamel's test {#raabe-duhamel-s-test}

<div class="definition">

given \\(\lim\_{n\to\infty} \left(\frac{a\_n}{a\_{n+1}}-1\right)n = L\\) <br/>

1.  if \\(L < 1\\) then \\(\sum a\_n\\) diverges <br/>
2.  if \\(L > 1\\) then \\(\sum a\_n\\) converges <br/>
3.  the test is inconclusive <br/>

we use this test when the [Ratio test](#ratio-test) fails <br/>

<div class="my_example">

\\[
  \sum \frac{n!}{(5+1)(5+2)(5+3) \cdots (5+n)}
\\] <br/>
we try [Ratio test](#ratio-test): <br/>

\begin{align\*}
  \frac{a\_{n+1}}{a\_n} &= \frac{(n+1)!}{(5+1)(5+2) \cdots (5+n+1)} \cdot \frac{(5+1)(5+2) \cdots (5+n)}{n!}\\\\
  &= \frac{(n+1)n!}{(5+1)(5+2) \cdots (5+n+1)} \cdot \frac{(5+1)(5+2) \cdots (5+n)}{n!}\\\\
  &= \frac{n+1}{n+6}\\\\
  &\implies 1
\end{align\*}

[Ratio test](#ratio-test) failed because we got 1 so we apply **Raabe's test**: <br/>

\begin{align\*}
  \lim\_{n\to\infty} \left(\frac{a\_n}{a\_{n+1}}-1\right)n &= \lim\_{n\to\infty} \left(\frac{n+6}{n+1}-1\right)n\\\\
  &= \lim\_{n\to\infty} \left(\frac{5}{n+1}\right)n\\\\
  &= \lim\_{n\to\infty} \frac{5n}{n+1}\\\\
  &= 5 > 1
\end{align\*}

we got \\(5 > 1\\) which means the series converges <br/>

</div>

</div>


#### <span class="section-num">8.2.7</span> Alternating series test {#alternating-series-test}

suppose the following statements are true: <br/>

1.  \\(a\_{n}\\) are all positive, <br/>
2.  \\(\lim\_{n\to\infty} a\_n = 0\\) <br/>
3.  for every \\(n\\), \\(a\_{n+1} \leq a\_n\\) <br/>

then \\(\sum\_{n=k}^{\infty} (-1)^n a\_n\\) and \\(\sum\_{n=k}^{\infty} (-1)^{n+1} a\_n\\) are convergent series <br/>

<div class="my_example">

\\[
  \sum\_{n=1}^{\infty} \frac{(-1)^n}{n} = \sum\_{n=1}^{\infty} (-1)^n\frac{1}{n}
\\] <br/>
we check the conditions of the [Alternating series test](#alternating-series-test) <br/>

1.  \\(\frac{1}{n} \geq 0\\) <br/>
2.  \\(\lim\_{n\to \infty} \frac{1}{n} = 0\\) <br/>
3.  \\(\frac{1}{n+1} < \frac{1}{n}\\) <br/>

and since \\(\frac{1}{n}\\) meets all the conditions, we can apply the test to \\(\sum\_{n=1}^{\infty} (-1)^n\frac{1}{n}\\) and find that it converges <br/>

</div>