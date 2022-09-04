+++
title = "linear algebra 2 sample exam 2"
author = ["mahmood"]
description = "[[id:4e292da3-9bbb-4b25-b309-a15c0f49349b][linear algebra]] sample exam 2"
date = 2022-09-04T20:15:00+03:00
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

<div class="question">

define the concept of a [linear operator]({{< relref "linear_algebra2.md#linear-map" >}}) and \\(\ker T\\) where \\(T\\) is a linear operator <br/>
let \\(S,T:V \to V\\) be linear operators <br/>

<div class="subquestion">

prove/disprove \\(\ker S = \\{0\\} \implies \ker(T \circ S) = \\{0\\}\\) <br/>

<div class="answer">

\begin{gather\*}
  S(\vec{v}) = \vec0 \implies \vec{v} = \vec0\\\\
  T(S(\vec{u})) = \vec0\\\\
  S(\vec{u}) = \vec0 \implies T(S(\vec{u})) = \vec0\\\\
  S(\vec{u}) \neq \vec0 \centernot\implies T(S(\vec{u})) \neq \vec0
\end{gather\*}

i think \\(\vec0\\) is in the [kernel]({{< relref "linear_algebra2.md#kernel" >}}) of every linear transformation, because no matter what kind of transformation we apply to a vector of zeros, the result is always gonna be a vector of zeros because any matrix multiplied by zeros will zero out, and just because the kernel of \\(S\\) contains only that vector doesnt mean \\(\ker(T\circ S)\\) will not contain other vectors <br/>
**need to provide a counter example** <br/>

</div>

</div>

<div class="subquestion">

prove/disprove \\(\ker(T\circ S) = \\{0\\} \implies \ker S = \\{0\\}\\) <br/>

<div class="answer">

i think this is true <br/>

\begin{gather\*}
  \ker(T\circ S) = \\{\vec0\\} \implies T(S(\vec{v})) = \vec0 \implies \vec{v} = \vec0 \implies S(\vec{v}) = \vec0\\\\
  \vec{v}=\vec0 \implies T(S(\vec{v}))=\vec0
\end{gather\*}

didnt know how to continue, i thought of a proof by contradiction so imma try it: <br/>
assume \\(\ker S \neq \\{\vec0\\}\\) <br/>
\\[
  \vec{v} \neq \vec0 \in \ker S \implies S(\vec{v})=\vec0 \implies T(S(\vec{v}))=\vec0
\\] <br/>
which contradicts with the fact that \\(\ker(T \circ S) = \\{\vec0\\}\\) because we found a vector \\(\vec{v} \neq \vec0 \in \ker(T \circ S)\\) <br/>

</div>

</div>

</div>

<div class="question">

given the real matrix \\(A = \bmqty{3 & 1 & 1\\\ 2 & 4 & 2\\\ 1 & 1 & 3}\\) <br/>

<div class="subquestion">

find the [characteristic polynomial]({{< relref "linear_algebra2.md#characteristic-polynomial" >}}) and the [eigenvalue]({{< relref "linear_algebra2.md#eigenvalues-and-eigenvectors" >}})s of \\(A\\) <br/>

<div class="answer">

\begin{align\*}
  p(\lambda) &= |A - I\lambda|\\\\
  &= \left\lvert\bmqty{3 & 1 & 1\\\ 2 & 4 & 2\\\ 1 & 1 & 3} - \bmqty{\lambda & 0 & 0\\\ 0 & \lambda & 0\\\ 0 & 0 & \lambda}\right\rvert\\\\
  &= \vmqty{3-\lambda & 1 & 1\\\ 2 & 4-\lambda & 2\\\ 1 & 1 & 3-\lambda}\\\\
  &= -((\lambda - 3)(\lambda - 4) - 2)(\lambda - 3) + 3\lambda - 6\\\\
  &= -((\lambda^2-4\lambda-3\lambda+12)-2)(\lambda-3)+3\lambda-6\\\\
  &= -(\lambda^2-7\lambda+10)(\lambda-3)+3\lambda-6\\\\
  &= -(\lambda-2)(\lambda-5)(\lambda-3)+3\lambda-6\\\\
  &= (\lambda-2)((\lambda-5)(\lambda-3)-3)\\\\
  &= (\lambda-2)(\lambda^2-3\lambda-5\lambda+15-3)\\\\
  &= (\lambda-2)(\lambda^2-8\lambda+12)\\\\
  &= (\lambda-2)^2(x-6)
\end{align\*}

so the eigenvalues are \\(2,2,6\\) <br/>

</div>

</div>

<div class="subquestion">

find the eigenbases of \\(A\\) <br/>

<div class="answer">

we find the eigenvectors ofc.. <br/>
\\[
\lambda=2 \implies \bmqty{3-\lambda & 1 & 1\\\ 2 & 4-\lambda & 2\\\ 1 & 1 & 3-\lambda} \implies \bmqty{1 & 1 & 1\\\ 2 & 2 & 2\\\ 1 & 1 & 1} \implies \bmqty{1 & 1 & 1\\\ 0 & 0 & 0\\\ 0 & 0 & 0}
\\] <br/>
which means \\(x=-y-z \implies (-y-z, y, z) = z(-1,0,1) + y(-1,1,0)\\) and so for the eigenvalue \\(\lambda=2\\) the eigenvectors are \\((-1,0,1),(-1,1,0)\\) and the eigenspace is \\(\spn(\\{(1,0,1),(-1,1,0)\\})\\) <br/>
\\[
\lambda=6 \implies \bmqty{3-\lambda & 1 & 1\\\ 2 & 4-\lambda & 2\\\ 1 & 1 & 3-\lambda} \implies \bmqty{-3 & 1 & 1\\\ 2 & -2 & 2\\\ 1 & 1 & -3} \implies \bmqty{1 & 0 & -1\\\ 0 & 1 & -2\\\ 0 & 0 & 0}
\\] <br/>
which means \\(x=z,y=2z \implies (z,2z,z) = z(1,2,1)\\) and so for the eigenvalue \\(\lambda=6\\) the eigenvector is \\((1,2,1)\\) and the eigenspace is \\(\spn(\\{(1,2,1)\\})\\) <br/>

</div>

</div>

<div class="subquestion">

find the [eigenbasis matrix]({{< relref "linear_algebra2.md#diagonalizable-matrix" >}}) \\(T\\) of \\(A\\) and find \\(A^{2021}\\) <br/>

<div class="answer">

\begin{gather\*}
  T = \bmqty{-1 & -1 & 1\\\ 0 & 1 & 2\\\ 1 & 0 & 1}\\\\
  T^{-1}AT = \bmqty{2 & 0 & 0\\\ 0 & 2 & 0\\\ 0 & 0 & 6}\\\\
  A = T\bmqty{2 & 0 & 0\\\ 0 & 2 & 0\\\ 0 & 0 & 6}T^{-1}\\\\
  A^{2021} = T\bmqty{2 & 0 & 0\\\ 0 & 2 & 0\\\ 0 & 0 & 6}^{2021}T^{-1}\\\\
  A^{2021} = T\bmqty{2^{2021} & 0 & 0\\\ 0 & 2^{2021} & 0\\\ 0 & 0 & 6^{2021}}T^{-1}
\end{gather\*}

</div>

</div>

</div>

<div class="question">

let \\(V\_\mathbb{R}\\) be a [vector space]({{< relref "linear_algebra2.md#vector-space" >}}) and let \\(v\_1,v\_2,v\_3\\) be [linearly independant]({{< relref "linear_algebra2.md#linear-dependance" >}}) vectors, we define: <br/>

\begin{gather\*}
  u\_3=v\_1-v\_2+v\_3\\\\
  u\_2=-v\_1+v\_2+v\_3\\\\
  u\_1=v\_1+v\_2-v\_3
\end{gather\*}

<div class="subquestion">

prove that \\(u\_1,u\_2,u\_3\\) are linearly independant <br/>

</div>

<div class="subquestion">

prove/disprove \\(\spn\\{(1,2,1,0),(1,1,-1,0)\\}=\spn\\{(-1,2,2,0),(2,3,1,0)\\}\\) <br/>

</div>

</div>

<div class="question">

let \\(A \in M\_n(\mathbb{R})\\) be a [matrix]({{< relref "linear_algebra2.md#matrix" >}}), we define the [function]({{< relref "discrete_maths2.md#function" >}}) \\(L:M\_n(\mathbb{R}) \to M\_n(\mathbb{R})\\) using the [formula]({{< relref "20220711175314-formula.md" >}}) \\(L(X)=\bmqty{2 & -1\\\ 1 & 0}X + X\bmqty{-3 & 1\\\ -4 & 1}\\) <br/>

<div class="subquestion">

prove that \\(L\\) is a [linear operator]({{< relref "linear_algebra2.md#linear-map" >}}) <br/>

</div>

<div class="subquestion">

find the matrix of \\(L\\) in the basis \\(E\_1=\bmqty{1 & 0\\\ 0 & 1},E\_2=\bmqty{0 & 1\\\ 1 & 0},E\_3=\bmqty{1 & 0\\\ 0 & -1},E\_4=\bmqty{0 & 1\\\ -1 & 0}\\) of \\(M\_2(\mathbb{R})\\) <br/>

</div>

<div class="subquestion">

find the bases of \\(\img L,\ker L\\) <br/>

</div>

</div>