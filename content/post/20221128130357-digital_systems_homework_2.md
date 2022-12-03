+++
title = "digital systems homework 2"
author = ["mahmood"]
description = "homework on boolean expressions"
date = 2022-12-03T15:43:00+02:00
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

<div class="question">

a safe has 5 locks <br/>
person keys for locks X,V <br/>
person keys for locks Y,V <br/>
person keys for locks Y,W <br/>
person keys for locks Z,X <br/>
person E has keys for locks V,Z <br/>

<div class="subquestion">

whats the minimal number of persons needed to open the safe? <br/>

<div class="answer">

\begin{gather\*}
X=A+D\\\\
Y=B+C\\\\
Z=D+E\\\\
W=C\\\\
V=A+B+E\\\\
F(A,B,C,D,E) = XYZWV = (A+D)(B+C)(D+E)( C)(A+B+E) = (A+D)(A+B+E)(D+E)(B+C) = (A+B+E)(A+D)(D+E)C = (A+B+E)(D+AE)C
\end{gather\*}

atleast 3 are needed <br/>

</div>

</div>

<div class="subquestion">

who is the main key holder (the obligatory one)? <br/>

<div class="answer">

C because he's the only one with a key for W <br/>

</div>

</div>

</div>

<div class="question">

show: <br/>

<div class="subquestion">

\\[
xy+\overline{x}\\,\overline{y}+yz = xy+\overline{x}\\,\overline{y}+\overline{x}z
\\] <br/>

<div class="answer">

simplifying the left side: <br/>

\begin{gather\*}
  xy(z+\overline{z}) + \overline{x}\\,\overline{y}+yz\\\\
  xyz + xy\overline{z} + \overline{x}\\,\overline{y}+yz\\\\
  xyz + xy\overline{z} + \overline{x}\\,\overline{y}\\\\
  xy + \overline{x}\\,\overline{y}
\end{gather\*}

simplifying the right side: <br/>

\begin{gather\*}
  xy + \overline{x} \ \overline{y} + \overline{x}z(y + \overline{y})\\\\
  xy + \overline{x} \ \overline{y} + \overline{x}zy + \overline{x}z\overline{y}\\\\
  xy + \overline{x}z\overline{y} + \overline{x}zy\\\\
  xy + \overline{x}z\\\\
  xy + \overline{x}z(y + \overline{y})\\\\
  xy + \overline{x}zy + \overline{x}z\overline{y}\\\\
  y(x + \overline{x}z) + \overline{x}z\overline{y}\\\\
  y(x + z) + \overline{x}z\overline{y}\\\\
  yx + yz + \overline{x}z\overline{y}\\\\
  yx + z(y + \overline{x} \ \overline{y})\\\\
  yx + z(y + \overline{x})\\\\
  yx + zy + z\overline{x}
\end{gather\*}

not sure what i did wrong because the resulting simplified expression for the left side has a truth table different from the original expression which makes it wrong but im confused because i dont think i took any wrong steps when simplifying :/ <br/>

</div>

</div>

<div class="subquestion">

\\[
\overline{x}y+\overline{y}z+x\overline{z} = x\overline{y}+y\overline{z}+\overline{x}z
\\] <br/>

<div class="answer">

attempt at simplifying the left side: <br/>

\begin{gather\*}
  \overline{x}y + \overline{y}z + x\overline{z}(\overline{y}+y)\\\\
  \overline{x}y + \overline{y}z + x\overline{z} \ \overline{y} + x\overline{z}y\\\\
  y(\overline{x} + x\overline{z}) + \overline{y}(z + x\overline{z})\\\\
  y(\overline{x} + \overline{z}) + \overline{y}(z + x)\\\\
  y\overline{x} + y\overline{z} + \overline{y}z + \overline{y}x
\end{gather\*}

attempt at simplifying the right side: <br/>

\begin{gather\*}
  x\overline{y} + y\overline{z} + z\overline{x}(\overline{y}+y)\\\\
  x\overline{y} + y\overline{z} + z\overline{x} \ \overline{y} + z\overline{x}y\\\\
  \overline{y}(x + z\overline{x}) + y(\overline{z} + z\overline{x})\\\\
  \overline{y}(x + z) + y(\overline{z} + \overline{x})\\\\
  \overline{y}x + \overline{y}z + y\overline{z} + y\overline{x}
\end{gather\*}

</div>

</div>

<div class="subquestion">

\\[
\overline{y}+\overline{z}+yz\overline{w}=1
\\] <br/>

<div class="answer">

\begin{gather\*}
  yzw + yz\overline{w} = yz \longrightarrow \overline{y} + \overline{z} + yz\\\\
  \overline{y} + \overline{z} = \overline{yz} \longrightarrow \overline{yz} + yz\\\\
  \overline{yz} + yz = 1
\end{gather\*}

</div>

</div>

</div>

<div class="question">

simplify the following expressions <br/>

<div class="subquestion">

\\[
\overline{\overline{\overline{xy}x}\\,\overline{\overline{xy}y}}
\\] <br/>

<div class="answer">

\begin{gather\*}
  [\overline{(xy)}x] + [\overline{(xy)}y]\\\\
  [(\overline{x} + \overline{y})x] + [(\overline{x} + \overline{y})y]\\\\
  [\overline{x}x + \overline{y}x] + [\overline{x}y + \overline{y}y]\\\\
  \overline{x}x + \overline{y}x + \overline{x}y + \overline{y}y\\\\
  1 + \overline{y}x + \overline{x}y + 1\\\\
  1
\end{gather\*}

</div>

</div>

<div class="subquestion">

\\[
\overline{\overline{\overline{x}y\overline{w}+xwz} + \overline{\overline{xwz}+\overline{y}\\,\overline{w}\\,\overline{z} + yw\overline{z}}}
\\] <br/>

<div class="answer">

\begin{gather\*}
  [\overline{x}y\overline{w}+xwz] \ [\overline{(xwz)} + \overline{y} \ \overline{w} \ \overline{z} + yw\overline{z}] \\\\
  [\overline{x}y\overline{w}+xwz] \ [(\overline{x} + \overline{w} + \overline{z}) + \overline{y} \ \overline{w} \ \overline{z} + yw\overline{z}]\\\\
  [\overline{x}y\overline{w}+xwz] \ [\overline{x} + \overline{w} + \overline{z} + \overline{y} \ \overline{w} \ \overline{z} + yw\overline{z}]\\\\
  [\overline{x}y\overline{w}+xwz] \ [\overline{x} + \overline{y} \ \overline{w} \ \overline{z} + yw\overline{z}]\\\\
  \overline{x}y\overline{w} \ \overline{x} + \overline{x}y\overline{w} \ \overline{y} \ \overline{w} \ \overline{z} + \overline{x}y\overline{w}yw\overline{z} + xwz\overline{x} + xwz\overline{y} \ \overline{w} \ \overline{z} + xwzyw\overline{z}\\\\
  y\overline{w} \ \overline{x} + 0 + 0 + 0 + 0 + 0\\\\
  y\overline{w} \ \overline{x}
\end{gather\*}

</div>

</div>

<div class="subquestion">

\\[
\overline{x+y} \ \overline{\overline{x} + \overline{y}}
\\] <br/>

<div class="answer">

\begin{gather\*}
  \overline{(x + y) + (\overline{x} + \overline{y})}\\\\
  \overline{x + y + \overline{x} + \overline{y}}\\\\
  1 + 1\\\\
  1
\end{gather\*}

</div>

</div>

<div class="subquestion">

\\[
y(w\overline{z}+wz)+xy
\\] <br/>

<div class="answer">

\begin{gather\*}
  y(w(\overline{z} + z)) + xy\\\\
  y(w(1)) + xy\\\\
  y(w) + xy\\\\
  yw + xy = y(x + w)
\end{gather\*}

</div>

</div>

<div class="subquestion">

\\[
xyz + \overline{x}\\,\overline{y}z + \overline{x}yz + xy\overline{z} + \overline{x}\\,\overline{y}\\,\overline{z}
\\] <br/>

<div class="answer">

\begin{gather\*}
  xy + \overline{x} \ \overline{y}z + \overline{x}yz + \overline{x} \ \overline{y} \ \overline{z} \leftarrow xyz + xy\overline{z}=xy\\\\
  xy + \overline{x} \ \overline{y} + \overline{x}yz \leftarrow \overline{x} \ \overline{y}z + \overline{x} \ \overline{y} \ \overline{z} = \overline{x} \ \overline{y}\\\\
  xy + \overline{x} \ \overline{y} + \overline{x}yz
\end{gather\*}

not sure if this is the simplest form :/ <br/>

</div>

</div>

</div>

