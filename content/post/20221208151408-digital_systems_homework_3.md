+++
title = "digital systems homework 3"
author = ["mahmood"]
description = "homework on the subject of [[id:8CF57D62-282E-4109-82D0-30B73673EE7B][switching function]]"
date = 2022-12-19T15:53:00+02:00
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

<div class="question">

given the function \\(f(x,y,z)\\) <br/>

| x | y | z | \\(f(x,y,z)\\) | minterm      | maxterm        |
|---|---|---|----------------|--------------|----------------|
| 0 | 0 | 0 | 1              | \\(x'y'z'\\) |                |
| 0 | 0 | 1 | 1              | \\(x'y'z\\)  |                |
| 0 | 1 | 0 | 0              |              | \\(x+y'+z\\)   |
| 0 | 1 | 1 | 1              | \\(x'yz\\)   |                |
| 1 | 0 | 0 | 0              |              | \\(x'+y+z\\)   |
| 1 | 0 | 1 | 0              |              | \\(x'+y+z'\\)  |
| 1 | 1 | 0 | 1              | \\(xyz'\\)   |                |
| 1 | 1 | 1 | 0              |              | \\(x'+y'+z'\\) |

<div class="subquestion">

find a boolean expression for the function <br/>

<div class="answer">

\begin{gather\*}
  f(x,y,z) = x'y'z'+x'y'z+x'yz+xyz'\\\\
  f(x,y,z) = (x+y'+z)(x'+y+z)(x'+y+z')(x'+y'+z')
\end{gather\*}

</div>

</div>

<div class="subquestion">

check whether \\(f(x,y,z)\\) is [functionally complete]({{< relref "boolean_algebra.md#functional-completeness" >}}) <br/>

<div class="answer">

\begin{gather\*}
  f(x,y,z) = x'y'z'+x'y'z+x'yz+xyz'\\\\
  f(x,x,x) = x'x'x' + x'x'x + x'xx + xxx' = x' + 0 + 0 + 0 = x'\\\\
  f(x',0,z) = x''0z' + x''0'z' + x''0z + x'0z = 0 + xz + 0 + 0 = xz
\end{gather\*}

negation is derived from the second equation and the operator \\(AND\\) is derived from the second <br/>
\\(f(x,y,z)\\) is functionally complete <br/>

</div>

</div>

</div>

<div class="question">

check whether the following systems are functionally complete <br/>

<div class="subquestion">

\\[
f\_1(x,y) = x \oplus y \qquad f\_2(x,y) = x + y'
\\] <br/>

<div class="answer">

\\(f\_1(x,y)=x'y+xy'\\) <br/>
\\(f\_1(x,1)=x' \longrightarrow\\) derived negation <br/>
\\(f\_2(x, f\_2(0, y)) = x+y \longrightarrow\\) derived OR operator <br/>
this system partially complete since i used 0/1 (using the set of operands \\(\lnot\\), \\(\lor\\)) <br/>

</div>

</div>

<div class="subquestion">

\\[
f\_1(a,b,c) = a(b+c) \qquad f\_2(a) = a'
\\] <br/>

<div class="answer">

\\(f\_2(a) = a' \longrightarrow\\) derived negation <br/>
\\(f\_1(a,b,a')=a(b+a')=ab+aa'=ab+0=ab \longrightarrow\\) derived AND operator <br/>
since we derived both negation and the AND operator (\\(\lnot, \land\\)) using the system then its functionally complete <br/>

</div>

</div>

<div class="subquestion">

\\[
f\_1(a,b) = a \oplus b \qquad f\_2(a,b) = a'b
\\] <br/>

<div class="answer">

\\(f\_1(a,b)=a'b+ab'\\) <br/>
\\(f\_2(a,b)=a'b\\) <br/>
not a functionally complete system <br/>

</div>

</div>

</div>

<div class="question">

write the truth table of \\(f(x\_1,x\_2,x\_3)\\) which receives the value 1 if \\(x\_1=x\_2'+x\_3\\) <br/>

<div class="answer">

| \\(x\_1\\) | \\(x\_2\\) | \\(x\_3\\) | \\(f(x, x\_2, x\_3)\\) | minterm    | maxterm       |
|------------|------------|------------|------------------------|------------|---------------|
| 0          | 0          | 0          | 0                      |            | \\(x+y+z\\)   |
| 0          | 0          | 1          | 0                      |            | \\(x+y+z'\\)  |
| 0          | 1          | 0          | 0                      |            | \\(x+y'+z\\)  |
| 0          | 1          | 1          | 0                      |            | \\(x+y'+z'\\) |
| 1          | 0          | 0          | 0                      |            | \\(x'+y+z\\)  |
| 1          | 0          | 1          | 1                      | \\(xy'z\\) |               |
| 1          | 1          | 0          | 0                      |            | \\(x'+y'+z\\) |
| 1          | 1          | 1          | 0                      |            | \\(+y'+z'\\)  |
|            |            |            |                        |            |               |

</div>

<div class="subquestion">

find a boolean expression for the function \\(f\\) <br/>

<div class="answer">

\\[f(x,y,z) = xy'z\\] <br/>

</div>

</div>

<div class="subquestion">

prove that \\(f\\) is [partially functionally complete]({{< relref "boolean_algebra.md#partial-functional-completeness" >}}) <br/>

<div class="answer">

\\(f(x,y,z) = xy'z\\) <br/>
\\(f(1,y,1) = 1y'1 = y' \longrightarrow\\) derived negation <br/>
\\(f(1,y',z) = 1yz = yz \longrightarrow\\) derived the AND operator <br/>
the function is partially completely functional because it can derive the already known completely functional set of operators \\(\lnot, \land\\) <br/>

</div>

</div>

<div class="subquestion">

if \\(f\\) functionally complete? explain without proof <br/>

<div class="answer">

\\(f(x,x,x)=xxx=x\neq x'\\) <br/>
\\(f\\) isnt functionally complete <br/>

</div>

</div>

</div>

<div class="question">

given the function \\(f(x,y,z)\\) which outputs the value 1 only when most of the variables are equal to 1 <br/>

<div class="subquestion">

write a truth table for \\(f\\) <br/>

<div class="answer">

| \\(x\_1\\) | \\(x\_2\\) | \\(x\_3\\) | \\(f(x,x\_2,x\_3)\\) | minterm    | maxterm      |
|------------|------------|------------|----------------------|------------|--------------|
| 0          | 0          | 0          | 0                    |            | \\(x+y+z\\)  |
| 0          | 0          | 1          | 0                    |            | \\(x+y+z'\\) |
| 0          | 1          | 0          | 0                    |            | \\(x+y'+z\\) |
| 0          | 1          | 1          | 1                    | \\(x'yz\\) |              |
| 1          | 0          | 0          | 0                    |            | \\(x'+y+z\\) |
| 1          | 0          | 1          | 1                    | \\(xy'z\\) |              |
| 1          | 1          | 0          | 1                    | \\(xyz'\\) |              |
| 1          | 1          | 1          | 1                    | \\(xyz\\)  |              |

</div>

</div>

<div class="subquestion">

prove that \\(f,\lnot\\) is a partially complete system <br/>

<div class="answer">

\\(f(x,y,z)=x'yz+xy'z+xyz'+xyz\\) <br/>
\\(f(x,y,z)=x'yz+xy'z+xy\\) <br/>
\\(f(x,y,0)=0+0+xy\\) <br/>
\\(f(x,y,0)=xy \longrightarrow\\) derived the AND operator <br/>
\\(f\\) can derive AND so we get the set \\(\lnot, \land\\) which is known to provide complete functionality <br/>

</div>

</div>

</div>

<div class="question">

prove that NOR is a completely functional system <br/>

<div class="answer">

| \\(x\\) | \\(y\\) | output | minterm    | maxterm     |
|---------|---------|--------|------------|-------------|
| 0       | 0       | 1      | \\(x'y'\\) |             |
| 0       | 1       | 0      |            | \\(x+y'\\)  |
| 1       | 0       | 0      |            | \\(x'+y\\)  |
| 1       | 1       | 0      |            | \\(x'+y'\\) |

\\(f(x,y)=x'y'\\) <br/>
\\(f(x,x)=x'x'=x' \longrightarrow\\) derived negation (\\(\lnot\\)) <br/>
\\(f(y,y)=y'y'=y'\\) <br/>
\\(f(x',y')=xy \longrightarrow\\) derived AND operator (\\(\land\\)) <br/>
we derived the set of operators (\\(\land\\), \\(\lnot\\)) using this function so its completely functional <br/>

</div>

<div class="subquestion">

build a boolean expression for \\(t(x,y,z) = xy+z'\\) using only NOR <br/>

<div class="answer">

\\[t(x,y,z)=NOR(x',y')+NOR(z,z)\\] <br/>

</div>

</div>

</div>

