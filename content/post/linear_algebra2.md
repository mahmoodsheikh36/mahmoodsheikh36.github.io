+++
title = "linear algebra"
author = ["mahmood"]
description = "linear algebra"
date = 2022-09-26T21:43:00+03:00
tags = ["public", "math"]
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

<div class="note">

this document needs some refactoring, some of the proofs may be incomplete <br/>

</div>


## <span class="section-num">1</span> field {#field}


## <span class="section-num">2</span> matrix {#matrix}

<div class="definition">

a **matrix** is a rectangular array or table of numbers, symbols, or expressions, arranged in rows and columns, which is used to represent a mathematical object or a property of such an object <br/>

<div class="characteristic">

a matrix can be constructed over a specific finite/infinite set of numbers for example \\(\mathbb{Z}\\) which is the set of integers, when we say a matrix is over a specific field of numbers we mean that the numbers in the matrix are limited to that field of numbers <br/>

</div>

<div class="my_example">

consider this matrix over the field \\(\mathbb{Z}\\), where all the numbers are integers <br/>
\\[\left[\begin{array}{rrrr} 5 & -3 & 0 & -20 \\\ 1 & -2 & -14 & -2 \\\ -64 & -1 & 3 & -1 \\\ 0 & 0 & 0 & 1 \\\ -1 & -2 & 1 & -3 \end{array}\right]\\] <br/>

</div>

</div>


### <span class="section-num">2.1</span> matrix multiplication {#matrix-multiplication}

<div class="definition">

let \\(A,\ B\\) be matrices <br/>
**matrix multiplication** is possible if and only if the matrices have the dimensions \\(A\_{m \times n},\ B\_{n \times m}\\) <br/>
![](/ox-hugo/matrix-multiplication.gif) <br/>

</div>

<div class="definition">

matrices can be **multiplied by constants**, let \\(A\\) be a matrix and \\(c\\) be a constant, the definition of such multiplication is: <br/>
\\[
  A \cdot c = B \iff A\_{i,j} \cdot c = B\_{i,j}
\\] <br/>

</div>


### <span class="section-num">2.2</span> matrix addition {#matrix-addition}

<div class="definition">

**matrix addition** is defined as the addition of 2 matrices with the same dimensions \\(A\_{m \times n},\ B\_{m \times n}\\) <br/>
\\[
  A + B = C \iff A\_{i,j} + B\_{i,j} = C\_{i,j}
\\] <br/>

<div class="my_example">

\begin{gather\*}
  \begin{bmatrix} A\_1 & A\_2\\\ A\_3 & A\_4 \end{bmatrix} + \begin{bmatrix} B\_1 & B\_2\\\ B\_3 & B\_4 \end{bmatrix} = \begin{bmatrix} A\_1+B\_1 & A\_2+B\_2\\\ A\_3+B\_3 & A\_4+B\_4 \end{bmatrix}
\end{gather\*}

</div>

</div>


### <span class="section-num">2.3</span> elementary row operation {#elementary-row-operation}


### <span class="section-num">2.4</span> augmented matrix {#augmented-matrix}

<div class="definition">

for a given system of equation, an **augmented matrix** is the system of equations represented using a matrix <br/>

<div class="my_example">

\\[
  \begin{aligned} 2x+5y=10\\\ 3x+4y=24 \end{aligned} \\,\iff\\, \left[\begin{array}{cc|c} 2 & 5 & 10\\\ 3 & 4 & 24 \end{array}\right]
\\] <br/>

</div>

</div>


### <span class="section-num">2.5</span> square matrix {#square-matrix}

<div class="definition">

a **square matrix** is a [matrix](#matrix) whose width is the same as its height, i.e. \\(A\_{n\times n}\\) <br/>

</div>


### <span class="section-num">2.6</span> identity matrix {#identity-matrix}


### <span class="section-num">2.7</span> triangular matrix {#triangular-matrix}


### <span class="section-num">2.8</span> row echelon form {#row-echelon-form}

<div class="characteristic">

once we convert a [matrix](#matrix) to its **echelon form**, we would be able to clearly see how many solutions said matrix has <br/>
a matrix with no solution has the following echelon shape: <br/>

\begin{gather\*}
  \left[
    \begin{array}{ccc|c}
      1 & 0 & 3 & 0 \\\\
      0 & 1 & 1 & 0 \\\\
      0 & 0 & 0 & 5 \\\\
    \end{array}
  \right]
\end{gather\*}

its not possible that \\(0 \cdot x\_1 + 0 \cdot x\_2 + 0 \cdot x\_3 = 5\\) so such a matrix has no solution <br/>

</div>

<div class="characteristic">

a matrix with a single solution has the following echelon shape: <br/>

\begin{gather\*}
  \left[
    \begin{array}{ccc|c}
      1 & 0 & 0 & 2 \\\\
      0 & 1 & 0 & 0 \\\\
      0 & 0 & 1 & 5 \\\\
    \end{array}
  \right]
\end{gather\*}

this is the kind of shape we would hope for when reducing a matrix to its echelon form, because the solution is very easy to read which is: <br/>

\begin{align\*}
  x\_1 = 2\\\\
  x\_2 = 0\\\\
  x\_3 = 5
\end{align\*}

</div>

<div class="characteristic">

a matrix with an \\(\infty\\) number of solutions has the following echelon shape: <br/>

\begin{gather\*}
  \left[
    \begin{array}{ccc|c}
      1 & 0 & 0 & 0 \\\\
      0 & 1 & 1 & 0 \\\\
      0 & 0 & 0 & 0 \\\\
    \end{array}
  \right]
\end{gather\*}

where one of the rows zeros out which makes the third variable in the corresponding system of equations a _free variable_ that can take any value, the other 2 variables depend on the value of the free variable <br/>

</div>


### <span class="section-num">2.9</span> invertible matrix {#invertible-matrix}


### <span class="section-num">2.10</span> transpose {#transpose}


### <span class="section-num">2.11</span> matrix similarity {#matrix-similarity}


### <span class="section-num">2.12</span> determinant {#determinant}

see <https://en.wikipedia.org/wiki/Determinant> <br/>

<div class="definition">

the **determinant** is a [scalar]({{< relref "20220727110413-scalar.md" >}}) value that is a function of the entries of a [square matrix](#square-matrix), it is nonzero if and only if the [matrix](#matrix) is [invertible](#invertible-matrix) and the [linear map](#linear-map) represented by the matrix is an [isomorphism](#linear-isomorphism). the determinant of a matrix A is denoted \\(\det(A)\\), \\(\det A\\), or \\(|A|\\). <br/>
in the case of a \\(2\times2\\) matrix the determinant can be defined as <br/>

\begin{gather\*}
  |A| = \begin{vmatrix} a & b\\\ c & d \end{vmatrix} = ad - bc
\end{gather\*}

similarly, for a \\(3\times3\\) matrix \\(A\\), its determinant is <br/>

\begin{align\*}
  |A| = \begin{vmatrix} a & b & c\\\ d & e & f\\\ g & h & i \end{vmatrix} &= a\begin{vmatrix} e & f\\\ h & i \end{vmatrix} - b\begin{vmatrix} d & f\\\ g & i \end{vmatrix} + c\begin{vmatrix} d & e\\\ g & h \end{vmatrix}\\\\
  &= aei + bfg + cdh - ceg - bdi - afh
\end{align\*}

each determinant of a \\(2\times2\\) matrix in this equation is called a [minor](#minor) of the matrix \\(A\\). this procedure can be extended to give a recursive definition for the determinant of an \\(n\times n\\) matrix, known as [laplace expansion](#laplace-expansion) <br/>

<div class="characteristic">

\\(\det I = 1\\) where \\(I\\) is an [identity matrix](#identity-matrix) <br/>

</div>

<div class="characteristic" id="determinant_multilinear">

the determinant is [multilinear]({{< relref "20220801201511-multilinear.md" >}}) <br/>

</div>

<div class="characteristic" id="determinant_alternating">

the determinant is [alternating]({{< relref "20220801201711-alternating.md" >}}) <br/>

</div>

<div class="lemma">

the determinant is a [homogeneous function]({{< relref "20220801201746-homogeneous_function.md" >}}), i.e. <br/>
\\[
  \det(cA) = c^n\det(A)
\\] <br/>
assuming \\(A\\) is an \\(n\times n\\) matrix <br/>

</div>

<div class="lemma">

interchanging any pair of columns of a matrix multiplies its determinant by \\(-1\\). This follows from the determinant being [multilinear](#org06ce80a) and [alternating](#org38fa390) <br/>

</div>

<div class="lemma">

if the columns of the matrix form a [linearly dependant set](#linear-dependance), the determinant is 0 <br/>

</div>

<div class="lemma">

adding a scalar multiple of one column to another column does not change the value of the determinant. this is a consequence of [multilinearity](#org06ce80a) and being [alternative](#org38fa390) <br/>

</div>

<div class="lemma">

if \\(A\\) is a [triangular matrix](#triangular-matrix) then its determinant equals the product of the diagonal entries: <br/>
\\[
  \det A = a\_{11}a\_{22}\cdots a\_{nn} = \prod\_{i=1}^n a\_{ii}
\\] <br/>

</div>

<div class="lemma">

the determinant of the [transpose](#transpose) of a matrix equals the determinant of the matrix: <br/>
\\[
  \det A^T = \det(A)
\\] <br/>

</div>

<div class="lemma">

\\[
  \det(AB) = \det A \det B
\\] <br/>

</div>

<div class="lemma">

\\[
  \det\left(A^{-1}\right) = \frac{1}{\det A} = \det(A)^{-1}
\\] <br/>

</div>

</div>


#### <span class="section-num">2.12.1</span> Leibniz formula {#leibniz-formula}

see <https://en.wikipedia.org/wiki/Determinant> <br/>
the **Leibniz [formula]({{< relref "20220711175314-formula.md" >}})** for the [determinant](#determinant) of a \\(3\times3\\) [matrix](#matrix) is the following: <br/>
\\[
  \begin{vmatrix} a & b & c\\\ d & e & f\\\ g & h & i \end{vmatrix} = a(ei - fh) - b(di - fg) + c(dh - eg)
\\] <br/>


#### <span class="section-num">2.12.2</span> rule of Sarrus {#rule-of-sarrus}

see <https://en.wikipedia.org/wiki/Rule_of_Sarrus> <br/>
the **rule of Sarrus** is a mnemonic of [Leibniz formula](#leibniz-formula) <br/>

![](/ox-hugo/Schema_sarrus-regel.png) <br/>
\\[
  \det \begin{pmatrix} a\_{11} & a\_{12} & a\_{13}\\\ a\_{21} & a\_{22} & a\_{23}\\\ a\_{31} & a\_{32} & a\_{33} \end{pmatrix} = a\_{11}a\_{22}a\_{33} + a\_{12}a\_{23}a\_{31} + a\_{13}a\_{21}a\_{32} - a\_{31}a\_{22}a\_{13} - a\_{32}a\_{23}a\_{11} - a\_{33}a\_{21}a\_{12}
\\] <br/>


### <span class="section-num">2.13</span> diagonal matrix {#diagonal-matrix}

<div class="definition">

a **diagonal matrix** is a [matrix](#matrix) in which the entries outside the main diagonal are all zero; the term usually refers to [square matrices](#square-matrix). elements of the main diagonal can either be zero or nonzero <br/>

</div>


### <span class="section-num">2.14</span> diagonalizable matrix {#diagonalizable-matrix}

see <https://textbooks.math.gatech.edu/ila/diagonalization.html> <br/>

<div class="definition">

a [square matrix](#square-matrix) \\(A\\) is called **diagonalizable** if it is [similar](#matrix-similarity) to a [diagonal matrix](#diagonal-matrix), i.e., if there exists an [invertible matrix](#invertible-matrix) \\(P\\) which we may call the **eigenbasis matrix** or **eigenmatrix** and a diagonal matrix \\(D\\) such that \\(P^{-1}AP=D\\), or equivalently \\(A=PDP^{-1}\\) <br/>

<div class="characteristic">

diagonalizable matrices are especially easy for computations, once their [eigenvalue](#eigenvalues-and-eigenvectors)s and [eigenvector](#eigenvalues-and-eigenvectors)s are known, one can raise a diagonal matrix \\(D\\) to a power by simply raising the diagonal entries to that power, and the [determinant](#determinant) of a diagonal matrix is simply the product of all diagonal entries, and multiplying diagonal matrices together just multiplies their diagonal entries; such computations generalize easily to \\(A = PDP^{-1}\\): <br/>
\\[
  A^k = T \pmqty{\lambda\_1^k & 0 & 0 & \cdots & 0\\\ 0 & \lambda\_2^k & 0 & \cdots & 0\\\ 0 & 0 & \lambda\_3^k & \cdots & 0\\\ \vdots & \vdots & \vdots & \ddots & \vdots\\\ 0 & 0 & 0 & \cdots & \lambda\_n^k}T^{-1}
\\] <br/>

<div class="my_example">

\\[
  \pmqty{x\_1 & 0 & 0\\\ 0 & x\_2 & 0\\\ 0 & 0 & x\_3}\pmqty{y\_1 & 0 & 0\\\ 0 & y\_2 & 0\\\ 0 & 0 & y\_3} = \pmqty{x\_1y\_1 & 0 & 0\\\ 0 & x\_2y\_2 & 0\\\ 0 & 0 & x\_3y\_3}
\\] <br/>

</div>

<div class="my_example">

\\[
  \pmqty{x & 0 & 0\\\ 0 & y & 0\\\ 0 & 0 & z}^n = \pmqty{x^n & 0 & 0\\\ 0 & y^n & 0\\\ 0 & 0 & z^n}
\\] <br/>

</div>

<div class="my_example">

\begin{gather\*}
  T^{-1}AT = \pmqty{2 & 0 & 0\\\ 0 & 2 & 0\\\ 0 & 0 & 1}\\\\
  TT^{-1}ATT^{-1} = T\pmqty{2 & 0 & 0\\\ 0 & 2 & 0\\\ 0 & 0 & 1}T^{-1}\\\\
  A = T\pmqty{2 & 0 & 0\\\ 0 & 2 & 0\\\ 0 & 0 & 1}T^{-1}\\\\
  A^2 = T\pmqty{2 & 0 & 0\\\ 0 & 2 & 0\\\ 0 & 0 & 1}T^{-1}T\pmqty{2 & 0 & 0\\\ 0 & 2 & 0\\\ 0 & 0 & 1}T^{-1}\\\\
  A^2 = T\pmqty{2 & 0 & 0\\\ 0 & 2 & 0\\\ 0 & 0 & 1}^2T^{-1}\\\\
  A^2 = T\pmqty{2^2 & 0 & 0\\\ 0 & 2^2 & 0\\\ 0 & 0 & 1^2}T^{-1}\\\\
  A^k = T\pmqty{\lambda\_1^k & 0 & 0\\\ 0 & \lambda\_2^k & 0\\\ 0 & 0 & \lambda\_3^k}T^{-1}\\\\
\end{gather\*}

</div>

</div>

<div class="my_example">

any [diagonal matrix](#diagonal-matrix) is [diagonalizable](#diagonalizable-matrix) because it is **similar** to itself <br/>
\\[
  \pmqty{1 & 0 & 0\\\ 0 & 2 & 0\\\ 0 & 0 & 3} = I\_3\pmqty{1 & 0 & 0\\\ 0 & 2 & 0\\\ 0 & 0 & 3}I\_3^{-1}
\\] <br/>

</div>

</div>


#### <span class="section-num">2.14.1</span> diagonalization theorem {#diagonalization-theorem}

a fundamental question about a matrix is whether or not it is [diagonalizable](#diagonalizable-matrix). the following is the primary criterion for diagonalizability. it shows that diagonalizability is an [eigenvalue](#eigenvalues-and-eigenvectors) problem. <br/>

<div class="definition">

an \\(n\times n\\) [matrix](#matrix) \\(A\_{n\times n}\\) is **diagonalizable** if and only if \\(A\\) has \\(n\\) [linearly independant](#linear-dependance) [eigenvector](#eigenvalues-and-eigenvectors)s <br/>
in this case, \\(A = CDC^{-1}\\) for <br/>
\\[
  C = \pmqty{\vert & \vert & & \vert\\\ v\_1 & v\_2 & \cdots & v\_n\\\ \vert & \vert & & \vert} \quad D = \pmqty{\lambda\_1 & 0 & \cdots & 0\\\ 0 & \lambda\_2 & \cdots & 0\\\ \vdots & \vdots & \ddots & \vdots\\\ 0 & 0 & \cdots & \lambda\_n}
\\] <br/>
where \\(v\_1,v\_2,\ldots,v\_n\\) are linearly independant eigenvectors, and \\(\lambda\_1,\lambda\_2,\ldots,\lambda\_n\\) are the corresponding eigenvalues, in the same order. <br/>

<div class="note">

the eigenvectors \\(\lambda\_1,\lambda\_2,\ldots,\lambda\_n\\) dont have to be unique, in case they arent, we call that [Algebraic multiplicity]({{< relref "20220731205450-algebraic_multiplicity.md" >}}) <br/>

</div>

</div>


### <span class="section-num">2.15</span> minor {#minor}

<div class="definition">

a **minor** of a [matrix](#matrix) \\(A\\) is the determinant of some smaller [square matrix](#square-matrix), cut down from \\(A\\) by removing one or more of its rows and columns. <br/>

</div>


#### <span class="section-num">2.15.1</span> first minor {#first-minor}

<div class="definition">

if \\(A\\) is a [square matrix](#square-matrix), then the minor of the entry in the $i$th row and $j$th column (also called the \\((i,j)\\) minor) is the determinant of the submatrix formed by deleting the $i$th row and $j$th column. this number is often denoted \\(M\_{i,j}\\). <br/>

</div>


### <span class="section-num">2.16</span> laplace expansion {#laplace-expansion}


### <span class="section-num">2.17</span> conjugate transpose {#conjugate-transpose}

see <https://en.wikipedia.org/wiki/Conjugate_transpose> <br/>

<div class="definition">

the **conjugate transpose** of an \\(m\times n\\) [matrix](#matrix) \\(A\_{m\times n}\\) with [complex]({{< relref "calculus2.md#complex" >}}) entries is the \\(n\times m\\) matrix obtained from \\(A\\) by taking the transpose and then taking the complex conjugate of each entry (the complex conjugate of \\(a+ib\\) being \\(a-ib\\), for [real]({{< relref "calculus2.md#real" >}}) numbers \\(a\\) and \\(b\\)). it is often denoted as \\(A^H\\) or \\(A^\*\\). <br/>
For real matrices, the conjugate transpose is just the [transpose](#transpose), \\(A^H = A^T\\) <br/>

</div>


### <span class="section-num">2.18</span> cofactor matrix {#cofactor-matrix}

<div class="definition">

a **cofactor matrix** of a [square matrix](#square-matrix) \\(A\\), denoted \\(C\\) is the matrix formed by the [cofactor](#cofactor)s of \\(A\\) <br/>

<div class="characteristic">

the cofator matrix is useful to find the [adjugate](#adjugate-matrix) and the [inverse](#invertible-matrix) of the given matrix. <br/>

</div>

</div>


#### <span class="section-num">2.18.1</span> cofactor {#cofactor}

<div class="definition">

the \\((i,j)\\) **cofactor** of a [matrix](#matrix), often denoted \\(C\_{i,j}\\) is obtained by multiplying the [first minor](#first-minor) \\(M\_{i,j}\\) by \\((-1)^{i+j}\\). <br/>

</div>


### <span class="section-num">2.19</span> adjugate matrix {#adjugate-matrix}

<div class="definition">

the **adjugate** of a [square matrix](#square-matrix) is the [transpose](#transpose) of its [cofactor matrix](#cofactor-matrix). <br/>

<div class="characteristic">

the product of a [matrix](#matrix) with its adjugate gives a [diagonal matrix](#diagonal-matrix) whose diagonal entries are the [determinant](#determinant) of the original matrix. consequently, dividing this product matrix by the determinant produces the identity matrix of that size, which is just a diagonal matrix with all the diagonal entries equal to one. The multiplicative inverse of a square matrix can therefore be found by dividing its adjugate by its determinant, since multiplying this by the original matrix gives the identity. <br/>

</div>

<div class="characteristic">

for any \\(n\times n\\) matrix \\(A\\), [elementary row operation](#elementary-row-operation) show that adjugates have the following properties: <br/>

<div class="lemma">

\\[\adj 0 = 0\\] <br/>

</div>

<div class="lemma">

\\[\adj I = I\\] <br/>

</div>

<div class="lemma">

\\[
  \adj\left(A^T\right) = \adj(A)^T
\\] <br/>

</div>

<div class="lemma">

if \\(A\\) is [invertible]({{< relref "discrete_maths2.md#inverse-function" >}}), or equivalently, if \\(|A| \neq 0\\) <br/>
\\[
  A^{-1} = \frac{\adj A}{|A|}
\\] <br/>

<div class="entailment">

\\(\adj A\\) is [invertible]({{< relref "discrete_maths2.md#inverse-function" >}}) and its inverse is \\({(\det A)}^{-1}A\\) <br/>

</div>

<div class="entailment">

\\[
  \adj A^{-1} = \adj(A)^{-1}
\\] <br/>

</div>

</div>

<div class="lemma">

\\[
  \adj AB\_{n\times n} = \adj B\_{n\times n}\adj A
\\] <br/>

<div class="entailment">

\\[
\adj A^k = \adj(A)^k
\\] <br/>

</div>

</div>

</div>

</div>


### <span class="section-num">2.20</span> matrix from the perspective of vector {#matrix-from-the-perspective-of-vector}


#### <span class="section-num">2.20.1</span> row space {#row-space}

<div class="definition">

the **row space** of a [matrix](#matrix) \\(A\\), denoted by \\(R(A)\\), is the [span](#span) of its rows <br/>

<div class="note">

here we are basically looking at the matrix as a column of rows where each row represents a vector <br/>

</div>

{{< figure src="/ox-hugo/8C0g6w.svg" >}} <br/>

</div>


#### <span class="section-num">2.20.2</span> column space {#column-space}

<div class="definition">

the [span](#span) of the columns of a [matrix](#matrix) \\(A\\), denoted by \\(C(A)\\), is called the **range** or the **column space** of the matrix. the [row space](#row-space) and the **column space** of a matrix always have the same [dimension](#dimension) <br/>
generally when referring to a span of a matrix we refer to the **column space** <br/>
here we are basically looking at the matrix as a row of columns where each column represents a vector <br/>

{{< figure src="/ox-hugo/3cVWJn.svg" >}} <br/>

<div class="note">

please note that elementary row operations change the column space (unlike the row space which doesnt change) so after reducing a matrix you would have to go back to the original matrix and pick the corresponding columns from there not from the matrix you applied row operations to <br/>

</div>

<div class="my_example">

say \\(A\_{m \times n} \in M\_{m \times n}(\mathbb{R})\\) then \\(C(A) \leq \mathbb{R}^m\\) and \\(R(A) \leq \mathbb{R}^n\\) <br/>

</div>

<div class="characteristic">

consider the transposition of \\(A\\), \\((A^t)\_{n \times m}\\), we know \\(C(A^t) = R(A)\\) and \\(R(A^t) = C(A)\\) <br/>

</div>

<div class="characteristic">

we can describe matrix multiplication using vectors and the concept of linear combinations <br/>
if \\(A \cdot B = C\\) then the column \\(C^j\\) (column \\(j\\) of C) is a linear combination of the columns of \\(A\\) using \\(B^j\\) as the set of coefficients <br/>

<div class="my_example">

\\[\left[\begin{array}{rr} 3 & 1 \\\ 2 & 0 \\\ 1 & 2 \end{array}\right] \cdot \left[\begin{array}{rrr} 1 & 0 & 1 \\\ 3 & 2 & 1 \end{array}\right] = \left[\begin{array}{rrr} 6 & 2 & 4 \\\ 2 & 0 & 2 \\\ 7 & 4 & 3 \end{array}\right]\\] <br/>

you might notice that: <br/>
\\[1 \cdot \left[\begin{array}{r} 3 \\\ 2 \\\ 1 \end{array}\right] + 3 \cdot \left[\begin{array}{r} 1 \\\ 0 \\\ 2 \end{array}\right] = \left[\begin{array}{r} 6 \\\ 2 \\\ 7 \end{array}\right]\\] <br/>
here the output vector is a linear combination of the 2 vectors and \\(1,3\\) are the coefficients <br/>

</div>

</div>

<div class="entailment">

the columns of \\(A\\) span the columns of \\(AB\\) <br/>
\\[
  C(AB) \leq C(A)
\\] <br/>
the rows of \\(B\\) span the rows of \\(AB\\) <br/>
\\[
  R(AB) \leq R(B)
\\] <br/>

</div>

<div class="entailment">

\begin{align\*}
  \dim C(AB) \leq \dim C(A)\\\\
  \dim R(AB) \leq \dim R(B)
\end{align\*}

</div>

<div class="entailment">

given \\(A\_{m \times n}\\) <br/>

\begin{gather\*}
  C(A) \leq \mathbb{R}^m\\\\
  R(A) \leq \mathbb{R}^n\\\\
  \dim C(A) \leq m\\\\
  \dim R(A) \leq n\\\\
  \dim C(A) \leq n\\\\
  \dim R(A) \leq m\\\\
  \dim C(A) \leq \min\\{n,m\\}\\\\
  \dim R(A) \leq \min\\{n,m\\}
\end{gather\*}

</div>

<div class="lemma">

if \\(L\\) is an invertible matrix then: <br/>
\\[
  \dim R(LB) \leq \dim R(B)
\\] <br/>

<div class="proof">

\begin{gather\*}
  B = L^{-1}LB\\\\
  R(B) = R(L^{-1}(LB)) \leq R(LB) \leq R(B)
\end{gather\*}

</div>

<div class="entailment">

\\[
  R(LB) = R(B)
\\] <br/>

</div>

</div>

<div class="lemma">

if \\(L\\) is an invertible matrix then <br/>
\\[
  C(BL) \leq C(B)
\\] <br/>

<div class="proof">

\begin{gather\*}
  B = BLL^{-1}\\\\
  C(B) = C((BL)L^{-1}) \leq C(BL)
\end{gather\*}

</div>

<div class="entailment">

\\(R(A) = R(A')\\) where \\(A\\) is the matrix in its reduced echelon form <br/>

</div>

</div>

<div class="lemma">

given the matrix \\(A\_{m \times n}\\) <br/>
\\[
  \dim C(A) \leq \dim R(A)
\\] <br/>

<div class="proof">

let \\(\dim R(A) = k\\) and let \\(b\_1,b\_2\ldots b\_k\\) be a basis of \\(R(A)\\) <br/>
we construct a matrix \\(B\\) <br/>
\\[
  B = \begin{bmatrix} \cdots b\_1 \cdots\\\ \cdots b\_2 \cdots\\\ \vdots\\\ \cdots b\_n \cdots \end{bmatrix}\_{k \times n}
\\] <br/>
we know \\(k \leq m\\) <br/>
there exists \\(\Delta\\) such that \\(\Delta \cdot B = A\\) because the rows of \\(A\\) are spanned by the rows of \\(B\\) <br/>
\\[
  C(\Delta B) \leq C(\Delta)
\\] <br/>
therefore <br/>
\\[
  \dim C(A) = \dim C(\Delta B) \leq \dim(C(\Delta)) \leq k = \dim R(A)
\\] <br/>
we substitute \\(A\\) inplace of \\(A^t\\) in the lemma and we get: <br/>

\begin{align\*}
  \dim C(A^t) \leq \dim R(A^t)\\\\
  \dim R(A) \leq \dim C(A)
\end{align\*}

therefore <br/>
\\[
  \dim C(A) = \dim R(A)
\\] <br/>

</div>

</div>

</div>


#### <span class="section-num">2.20.3</span> rank {#rank}

<div class="definition">

the **rank** of a given matrix \\(A\\) is the [dimension](#dimension) of its [row space](#row-space) which is also equal to the dimension of its [column space](#column-space) <br/>
\\[
  \rank (A) = \dim C(A) = \dim R(A)
\\] <br/>

<div class="note">

if the matrix is given, the **rank** can be simply found by checking how many linearly independant rows (or columns) the matrix has <br/>

</div>

<div class="characteristic">

given the matrix \\(A\_{m \times n}\\), \\(\ker A = \\{v \mid A\vec v = \vec0\\}\\), \\(\ker A \leq \mathbb{R}^n\\), given \\(A'\\) is \\(A\\) in its reduced echelon form then \\(\dim{\ker{A}} =\\) number of free variables in \\(A'\\) and \\(\rank A = \dim R(A) = \dim R(A')\\) <br/>

</div>

<div class="lemma">

for every matrix \\(A\_{m \times n}\\): <br/>

\\[
  \overbrace{\dim \ker A}^{\clap{number of free variables}} + \underbrace{\rank A}\_{\clap{number of basic variables}} = n
\\] <br/>

</div>

<div class="question">

given the matrices \\(A,B\\) such that \\(A\_{n \times k} \cdot B\_{k \times m} = 0\_{n \times m}\\), prove that \\(\ker A \leq C(B)\\) <br/>

</div>

<div class="characteristic">

To find a basis for the span of a set of vectors, write the vectors as rows of a matrix and then row reduce the matrix. The span of the rows of a matrix is called the row space of the matrix. The dimension of the row space is the rank of the matrix. <br/>

</div>

</div>


#### <span class="section-num">2.20.4</span> kernel {#kernel}

<div class="definition">

the **kernel** of a [matrix](#matrix) or [linear transformation](#linear-map) \\(A\\) is a [set]({{< relref "discrete_maths2.md#set" >}}) of all [vector](#vector)s \\(V\\) such that for every \\(v \in V\\) the expression \\(Av = 0\\) holds true in the case of matrix and \\(A(v)=0\\) in the case of linear transformation <br/>

<div class="characteristic">

the kernel of a matrix doesnt change when an [elementary row operation](#elementary-row-operation) is applied to the matrix <br/>

</div>

</div>


#### <span class="section-num">2.20.5</span> image {#image}

<div class="definition">

The **image** of a [linear transformation](#linear-map) or [matrix](#matrix) is the [span](#span) of the column [vector](#vector)s of the linear transformation. (think of it as what you can get from applying the linear transformation or multiplying the matrix by a vector.) it can be written as \\(\img(A)\\) <br/>

</div>


## <span class="section-num">3</span> vector {#vector}

anything can be a vector, so long as we define sensible addition and scalar multiplication operations that abide by the axioms of a [vector space](#vector-space) <br/>
a **vector** can be represented using its components or using length and direction <br/>


### <span class="section-num">3.1</span> magnitude {#magnitude}

<div class="definition">

the **magnitude** of a [vector](#vector) \\(A\\) is its length, denoted by \\(|A|\\) or \\(\left\Vert A \right\Vert\\), it can be calculated from the square root of the total of the squares of of the individual vector components <br/>

</div>


### <span class="section-num">3.2</span> unit vector {#unit-vector}

<div class="definition">

a vector whose [magnitude](#magnitude) is equal to 1, laballed by a caret, e.g. \\(\hat A\\) <br/>

<div class="lemma">

\\(\hat A = \frac{A}{|A|}\\) <br/>

</div>

</div>


### <span class="section-num">3.3</span> vector scalar multiplication {#vector-scalar-multiplication}

<div class="lemma">

if we multiply a [vector](#vector) \\(A\\) by a positive [scalar]({{< relref "20220727110413-scalar.md" >}}) \\(b\\), the result is a new vector \\(C = bA\\). The vector C is parallel to A, and its length is \\(b\\) times greater, thus \\(\hat C = \hat A\\) ([unit vector](#unit-vector)s) and \\(|C| = b|A|\\) <br/>

</div>

<div class="lemma">

the result of multiplying a vector by \\(-1\\) is a new vector opposite in direction to the original vector <br/>
multiplication of a vector by a negative scalar evidently can change both the [magnitude](#magnitude) and the direction sense <br/>

</div>


### <span class="section-num">3.4</span> vector addition and subtraction {#vector-addition-and-subtraction}

the addition of 2 vectors is simply described in the following drawing: <br/>

{{< figure src="/ox-hugo/BlOGLgM.svg" >}} <br/>

the rule is: to add B to A, place the tail of B at the head of A. the sum is a vector from the tail of A to the head of B <br/>
since \\(A-B=A+(-B)\\), in order to subtract B from A we can simply multiply it by -1 and then add, so in a sense, we're "rotating" B and adding it to A to get \\(A-B\\): <br/>

{{< figure src="/ox-hugo/WnuzbR0.svg" >}} <br/>

vector addition is **commutative**, [associative]({{< relref "20220923212917-associative.md" >}}) and [distributive]({{< relref "20220923212922-distributive.md" >}}) <br/>


### <span class="section-num">3.5</span> dot product {#dot-product}

<div class="definition">

the scalar product of 2 vectors A and B is defined as \\(A \cdot B = |A||B|\cos\theta\\) where \\(\theta\\) is the angle between A and B when they are drawn tail to tail (to eliminate ambiguity, \\(\theta\\) is always taken as the angle smaller than \\(\pi\\)): <br/>

{{< figure src="/ox-hugo/dVIhILj.svg" >}} <br/>

when the vectors are in the form of a list of components, e.g. \\((x,y,z)\\) then the dot product is the sum of the products of corresponding components, i.e. given two vectors \\(A=(A\_1,\dots,A\_n),B=(B\_1,\dots,B\_n)\\), their dot product is \\(A\cdot B=A\_1B\_1+\dots+A\_nB\_n\\) <br/>

<div class="question">

find a unit vector in the \\(xy\\) plane which is perpendicular to \\(A=(3,5,1)\\) <br/>

<div class="answer">

we denote the perpendicular vector by \\(B=(B\_x,B\_y,B\_z)\\), since \\(B\\) is in the \\(xy\\) plane, \\(B\_z=0\\), for B to be perpendicular to A, we have \\(A\cdot B=0\\) because \\(\cos90=0\\), so: <br/>

\begin{align\*}
  A \cdot B &= 3B\_x + 5B\_y\\\\
  &= 0
\end{align\*}

hence \\(B\_y=-\frac{3}{5}B\_x\\), however, B is a [unit vector](#unit-vector), which means that \\(\sqrt{B\_x^2+B\_y^2}=1\\) <br/>
combining these gives \\(B\_x^2+\frac{9}{25}B\_x^2=1\\), or \\(B\_x=\sqrt{\frac{25}{34}}=\pm0.857\\) and \\(B\_y=-\frac{3}{5}B\_x=\pm0.514\\) <br/>
the ambiguity in sign of \\(B\_x\\) and \\(B\_y\\) indicates that B can point along a line perpendicular to A in either of two directions <br/>

</div>

</div>

</div>


### <span class="section-num">3.6</span> cross product {#cross-product}

unlike the [dot product](#dot-product) which gives us a scalar as a result, the **cross product** results in a [vector](#vector), so we get a [magnitude](#magnitude) and a direction that represent the vector <br/>
the cross product is defined by the formula: <br/>
\\(A \times B = \left\Vert A \right\Vert \left\Vert B \right\Vert\sin(\theta)n\\) <br/>
where \\(\theta\\) is the angle between A and B when they are drawn tail to tail (to eliminate ambiguity, \\(\theta\\) is always taken as the angle smaller than \\(\pi\\)) <br/>
when we draw A and B tail to tail, they determine a plane, we define \\(n\\) to be a [unit vector](#unit-vector) that is perpendicular to that plane, which means \\(A\times B\\) is in that same direction as the unit vector <br/>
imagine a right hand coordinate system with \\(A\\) and \\(B\\) in the \\(xy\\) plane, A lies on the \\(x\\) axis and \\(B\\) lies toward the \\(y\\) axis, \\(A\\), \\(B\\) and \\(n\\) should form what is called a right hand triple such that \\(n\\) would be represented by the thumb <br/>
a result of our definition of the cross product is that: <br/>
\\(B\times A=-A\times B\\) <br/>
and so obviously cross product isnt [commutative]({{< relref "20220923212910-commutative.md" >}}) but rather anticommutative <br/>


### <span class="section-num">3.7</span> vector space {#vector-space}

<div class="definition">

let \\(V\\) be a non-empty [set]({{< relref "discrete_maths2.md#set" >}}) of [vector](#vector)s containing numbers from the [field](#field) \\(\mathbb{F}\\), consider the 2 operations addition and scalar multiplication, \\(V\_\mathbb{F}\\) is a **vector space** only if it abides by the following axioms: <br/>
**addition axioms**: <br/>

-   addition closure: for every \\(\vec{v}\_1, \vec{v}\_2 \in V\\) we have \\(\vec{v}\_1 + \vec{v}\_2 \in V\\) <br/>
-   associative addition: for every \\(\vec{v}\_1, \vec{v}\_2, \vec{v}\_3 \in V\\) we have \\((\vec{v}\_1 + \vec{v}\_2) + \vec{v}\_3 = \vec{v}\_1 + (\vec{v}\_2 + \vec{v}\_3)\\) <br/>
-   commutative addition: \\(\vec{v}\_1 + \vec{v}\_2 = \vec{v}\_2 + \vec{v}\_1\\) <br/>
-   zero vector: \\(\vec{0} \in V\\) so that \\(\vec{0} + \vec{v} = \vec{v}\\) <br/>
-   negative vector: for every \\(\vec{v} \in V\\) there exists \\(-\vec{v}\\) so that \\(\vec{v} + (-\vec{v}) = \vec{0}\\) <br/>

**multiplication axioms**: <br/>

-   multiplication closure: for every \\(\vec{v} \in V\\) and \\(a \in \mathbb{F}\\) we have \\(a \cdot \vec{v} \in V\\) <br/>
-   associative multiplication: for every \\(\vec{v} \in V\\) and \\(a,b \in \mathbb{F}\\) we have \\((a \cdot b) \cdot \vec{v} = a \cdot (b \cdot \vec{v})\\) <br/>
-   identity vector: for every \\(\vec{v} \in V\\) we have \\(\vec{1} \cdot \vec{v} = \vec{v}\\) <br/>
-   identity law: for every \\(\vec{v} \in V\\) we have \\(1 \cdot \vec{v} = \vec{v}\\) <br/>
-   first distributive law: for every \\(a,b \in \mathbb{F}\\) and \\(\vec{v} \in V\\) we can have \\((a + b) \cdot v = a \cdot v + b \cdot v\\) <br/>
-   second distributive law: for every \\(a \in \mathbb{F}\\) and \\(\vec{v}\_1, \vec{v}\_2 \in V\\) we can have \\(a \cdot (\vec{v}\_1 + \vec{v}\_2) = a \cdot \vec{v}\_1 + a \cdot \vec{v}\_2\\) <br/>

<div class="my_example">

\\(v = \\{\overline{0}\\}\\) over some field \\(\mathbb{F}\\) <br/>

</div>

<div class="my_example">

over some \\(n \in \mathbb{N}\\) and some field \\(\mathbb{F}\\): <br/>
\\[
v = \\{(x\_1, x\_2, x\_3, \ldots x\_n) \ | \ x\_i \in \mathbb{F}, i = 1, \ldots, n\\}
\\] <br/>
the definition of summation would be: <br/>

\begin{gather\*}
  v = (v\_1, v\_2, \dots, v\_n) \in V\\\\
  u = (u\_1, u\_2, \dots, u\_n) \in V\\\\
  u \oplus v = (u\_1 + v\_1, u\_2 + v\_2, \dots, u\_n + v\_n)
\end{gather\*}

and for some \\(a \in \mathbb{F}\\) the definition of multiplication would be: <br/>
\\[
a \odot v = (a \cdot v\_1, a \cdot v\_2, \dots, a \cdot v\_n)
\\] <br/>

</div>

<div class="my_example">

this is an example of the 1st addition axiom <br/>
let \\(\mathbb{F}\\) be a field <br/>
this describes all the polynomials of \\(x\\) over the field \\(\mathbb{F}\\) <br/>
\\[
  \mathbb{F}[x] = \sum\_{i=0}^{n}a\_i \cdot x^i \text{ where $a\_i \in \mathbb{F}$}
\\] <br/>
let \\(\mathbb{F} = \mathbb{R}\\) as an example <br/>
the addition of 2 polynomials is as follows: <br/>

\begin{align\*}
(3x^5 + 2x^3 + x + 1) + (7x^4 + 2x + 3)&=\\\\
(3x^5 + 0x^4 + 2x^3 + 0x^2 + x + 1) + (0x^5 + 7x^4 + 0x^3 + 0x^2 + 2x + 3)&=\\\\
3x^5 + 7x^4 + 2x^3 + 0x^2 + 3x + 4&=\\\\
3x^5 + 7x^4 + 2x^3 + 3x + 4&
\end{align\*}

the symbolic process of addition can be described as follows: <br/>
let \\(f, g \in \mathbb{F}[x]\\) so there exist the polynomial degrees \\(m \leq n\\) <br/>

\begin{align\*}
  f(x) &= \sum\_{i=0}^{m} a\_i \cdot x^i,\ a\_i \in \mathbb{F}\\\\
  g(x) &= \sum\_{i=0}^{n} b\_i \cdot x^i,\ b\_i \in \mathbb{F}\\\\
  f(x) \oplus g(x) &= \sum\_{i=0}^{m} (a\_i + b\_i) \cdot x^i + \sum\_{i=m+1}^{n} b\_i \cdot x^i
\end{align\*}

and the symbolic process of constant multiplication is defined as: <br/>
\\[ a \cdot f(x) = \sum\_{i=0}^{m} a \cdot a\_i \cdot x^i \\] <br/>
as for the degrees of the resulting polynomials after multiplication/addition: <br/>
if \\(n > m\\): <br/>

\begin{align\*}
  \deg(f) &= n\\\\
  \deg(g) &= m\\\\
  \deg(f+g) &= n
\end{align\*}

if \\(n = m\\): <br/>
\\[ \deg(f+g) = \text{cant be predetermined, depends on the polynomials} \\] <br/>

</div>

<div class="my_example">

a vector space could look something like this: <br/>

{{< figure src="/ox-hugo/BdNZek.svg" >}} <br/>

all the vectors that lie on the blue line represent a vector space, because the multiplication of a line would just make it longer (or shorter) it wouldnt make it move out of the blue line, and addition of any 2 vectors that lie on the blue line would also result in a longer (or shorter) vector that lies on the same line which expands across the entire 2d space <br/>

</div>

<div class="my_example">

{{< figure src="/ox-hugo/xt5Zoo.svg" >}} <br/>

this line doesnt represent a vector space because it doesnt contain the vector \\(\begin{bmatrix} 0\\\ 0 \end{bmatrix}\\) <br/>

</div>

<div class="lemma">

**reduction law** <br/>
for every \\(y,v,w \in V\\) <br/>
\\[ u + w = v + w \implies u = v \\] <br/>

<div class="proof">

\begin{align\*}
  (u + w) + (-w) &= (v + w) + (-w) & \text{5th addition axiom (negative vector)}\\\\
  u + (w + (-w)) &= v + (w + (-w)) & \text{2nd addition axiom (associative property)}\\\\
  u + 0 &= v + 0\\\\
  u &= v
\end{align\*}

</div>

</div>

<div class="lemma">

for \\(v \in V\\): <br/>
\\[ 0 \cdot v = \vec{0} \\] <br/>

</div>

<div class="lemma">

for \\(a \in \mathbb{F}\\) <br/>
\\[ a \cdot \vec0 = \vec0 \\] <br/>

<div class="proof">

\begin{align\*}
  a \cdot \vec0 &= a \cdot (\vec0 + \vec0)\\\\
  a \cdot \vec0 &= a \cdot \vec0 + a \cdot \vec0\\\\
  \vec0 + a \cdot \vec0 &= a \cdot \vec0 + a \cdot \vec0\\\\\
  \vec0 &= a \cdot \vec0
\end{align\*}

</div>

</div>

<div class="lemma">

\\(v \in V \implies (-1) \cdot v = -v\\) <br/>

</div>

<div class="lemma">

\\(v\_1 = -v \land v\_2 = -v \implies v\_1 = v\_2\\) <br/>

</div>

<div class="lemma">

for \\(a \in \mathbb{F}\\) and \\(v \in V\\) <br/>
\\[ a \cdot v = \vec0 \iff (a = 0 \text{ or } v = \vec0) \\] <br/>

</div>

</div>


#### <span class="section-num">3.7.1</span> vector subspace {#vector-subspace}

<div class="definition">

let \\(V\_\mathbb{F}\\) be a [vector space](#vector-space) <br/>
if \\(U \subseteq V\_\mathbb{F}\\) we say \\(U\\) is a **subspace** of \\(V\\) and we write \\(U \leq V\\) only if the following is true: <br/>

-   \\(\vec0 \in U\\) <br/>
-   for \\(u\_1,u\_2 \in U\\) its also true that \\(u\_1 + u\_2 \in U\\) (addition closure) <br/>
-   for \\(u \in U,\ a \in F \implies a \cdot u \in U\\) (scalar multiplication closure) <br/>

<div class="lemma">

if \\(U \leq V\\) then \\(U\_\mathbb{F}\\) is a vector space <br/>

<div class="proof">

let \\(u\_1,u\_2 \in U\\) then \\(u\_1 + u\_2 \in U\\), let \\(u\_1,u\_2,u\_3 \in U\\) then \\((u\_1+u\_2)+u\_3 = u\_1+(u\_2+u\_3)\\) <br/>
to be continued.. <br/>

</div>

</div>

<div class="characteristic">

strictly speaking, a **subspace** is a vector space included in another larger vector space. therefore, all properties of a vector space, such as being closed under addition and scalar multiplication still hold true when applied to the subspace. <br/>

</div>

<div class="my_example">

let the set of vectors \\(V\_\mathbb{R} = \mathbb{R}^2\\), consider the following set: <br/>
\\[ V = \\{(x,y) \mid x + y = 0\\} \\] <br/>
by the definition of this set, a vector \\(\vec{v} = (x,y)\\) is in the set \\(V\\) only if \\(x + y = 0\\) <br/>
for \\(V\_\mathbb{R}\\) to be a subspace of \\(\mathbb{R}^2\\), it has to meet 3 conditions: <br/>
condition 1: \\(\vec0 \in V\\), in this case \\(\vec0 = (0,0)\\) <br/>
\\[ 0 + 0 = 0 \ \checkmark \\] <br/>
condition 2: addition closure, meaning if \\(\vec{v}\_1, \vec{v}\_2 \in V\\) then \\(\vec{v}\_1 + \vec{v}\_2 \in V\\) <br/>

\begin{align\*}
  \vec{v}\_1 &= (x\_1, y\_1)\\\\
  \vec{v}\_2 &= (x\_2, y\_2)\\\\
  \vec{v}\_3 &= (x\_1+x\_2, y\_1+y\_2)\\\\
  (x\_1 + x\_2) + (y\_1 + y\_2) &= (x\_1 + y\_1) + (x\_2 + y\_2) = 0 \ \checkmark
\end{align\*}

condition 3: multiplication closure, meaning if \\(\vec{v} \in V, k \in \mathbb{R}\\) then \\(k \cdot v \in V\\) <br/>

\begin{align\*}
  v &= (x, y)\\\\
  k \cdot v &= (kx, ky)\\\\
  kx + ky &= k(x + y) = 0 \ \checkmark
\end{align\*}

</div>

</div>


#### <span class="section-num">3.7.2</span> linear combination {#linear-combination}

<div class="definition">

let \\(V\_\mathbb{F}\\) be a [vector space](#vector-space), let \\(A = \\{\vec{v}\_1, \vec{v}\_2, \ldots, \vec{v}\_n\\} \subseteq V\_\mathbb{F}\\) and \\(x\_1, x\_2, \ldots, x\_n \in \mathbb{F}\\), then \\(x\_1\vec{v}\_1 + x\_2\vec{v}\_2 + \cdots + x\_n\vec{v}\_n\\) is a **linear combination** of elements of \\(A\\) <br/>
although the term **linear combination** is somewhat ambiguous as it can refer to either the combination of vectors and coefficients itself or (in most cases) to its value, i.e. \\(v = x\_1\vec{v}\_1 + x\_2\vec{v}\_2 + \cdots + x\_n\vec{v}\_n\\) means the [vector](#vector) \\(v\\) is a linear combination of the vectors in the [set]({{< relref "discrete_maths2.md#set" >}}) \\(A\\) <br/>

</div>


#### <span class="section-num">3.7.3</span> span {#span}

<div class="definition">

the **span** of a given [set]({{< relref "discrete_maths2.md#set" >}}) of [vector](#vector)s is the collection of all the possible [linear combination](#linear-combination)s of the vectors of the set, i.e.: <br/>
let \\(V\_\mathbb{F}\\) be a [vector space](#vector-space), let \\(A = \\{\vec{v}\_1, \vec{v}\_2, \ldots, \vec{v}\_n\\} \subseteq V\_\mathbb{F}\\) and \\(x\_1, x\_2, \ldots, x\_n \in \mathbb{F}\\), then \\(\spn(\\{\vec{v}\_1, \ldots, \vec{v}\_n\\}) = \\{x\_1\vec{v}\_1, x\_2\vec{v}\_2, \ldots, x\_n\vec{v}\_n \\}\\) <br/>

<div class="lemma">

let \\(A = \\{\vec{v\_1},\ldots,\vec{v\_n}\\} \subseteq V\_\mathbb{F}\\), then \\(\spn(A) = \spn\\{\vec{v}\_1,\ldots,\vec{v}\_n\\} \leq V\_\mathbb{F}\\) <br/>

<div class="proof">

let \\(\vec{v} \in \spn(A),\ \vec{x} \in \mathbb{F}\\) <br/>

\begin{align\*}
  x\_iv\_i &\in V &\text{ multiplication closure of } V\\\\
  \vec{v} = \sum\_{i=1}^{n} x\_iv\_i &\in V &\text{addition closure of } V\\\\
  \spn(A) &\subseteq V &\text{ because every } \vec{v} \in \spn(A) \text{ is also } \vec{v} \in V
\end{align\*}

we have proven that \\(\spn(A)\\) is a subset of \\(V\\), now with that out of the way we need to check the 3 conditions that need to be satisfied for a subset to be a subspace <br/>
condition 1: \\(\vec0 \in \spn(A)\\) <br/>
\\[ \vec{x} = \vec0 \implies \sum\_{i=1}^{n} 0 \cdot v\_i = \vec0 \in \spn(A) \\] <br/>
condition 2: addition closure <br/>
let \\(\vec{v}, \vec{w} \in \spn(A)\\) so there exist \\(\vec{x}, \vec{y} \in \mathbb{F}\\) so that: <br/>

\begin{align\*}
  \vec{v} &= x\_1\vec{v}\_1 + x\_2\vec{v}\_2 + \ldots + x\_n\vec{v}\_n\\\\
  \vec{w} &= y\_1\vec{v}\_1 + y\_2\vec{v}\_2 + \ldots + y\_n\vec{v}\_n\\\\
  \vec{v} + \vec{w} &= (x\_1\vec{v}\_1 + \ldots + x\_n\vec{v}\_n) + (y\_1\vec{v}\_1 + \ldots + y\_n\vec{v}\_n)\\\\
    &= \underbrace{(x\_1+y\_1)\vec{v}\_1}\_{(x\_1+y\_1)\vec{v}\_1 \in V} + \ldots + (\underbrace{x\_n+y\_n}\_{x\_n+y\_n \in \mathbb{F}})\vec{v}\_n \in \spn(A)
\end{align\*}

condition 3: multiplication closure <br/>
let \\(\vec{v} \in \spn\\{\vec{v}\_1 \ldots \vec{v}\_n\\}, a \in \mathbb{F}\\) so there exist \\(x\_1 \ldots x\_n \in \mathbb{F}\\), such that \\(\vec{v} = \sum\_{k=1}^{n} x\_k\vec{v}\_k\\) <br/>
\\[ a\vec{v} = a \sum\_{k=1}^{n} x\_k\vec{v}\_k = \underbrace{(ax\_1)}\_{ax\_1 \in \mathbb{F}}\vec{v}\_1 + (ax\_2)\vec{v}\_2 + \ldots + (ax\_n)\vec{v}\_n \in \spn\\{\vec{v}\_1,\ldots,\vec{v}\_n\\} \\] <br/>

</div>

</div>

</div>


##### <span class="section-num">3.7.3.1</span> spanning set {#spanning-set}

<div class="definition">

consider the [vector space](#vector-space) \\(V\\), let \\(w \subseteq V\_\mathbb{F},\ |w| \in \mathbb{N},\ \spn(w)=V\\), then \\(w\\) is a **spanning set** of \\(V\\) and \\(V\\) is a **finitely spanned set** <br/>

<div class="my_example">

-   \\(\spn\\{(1,0,0),(0,1,0),(0,0,1)\\} = \mathbb{R}^3\\) <br/>
-   \\(\spn\\{(1,0,0),(0,1,0),(1,1,0)\\} \neq \mathbb{R}^3\\) because the third vector is the sum of the first two which makes it a linear combination of them <br/>

which means the first set is a spanning set but the second isnt <br/>

</div>

<div class="my_example">

consider the vector space \\(\mathbb{R}^4\\), given the vectors \\(v\_1= \left[\begin{array}{r} 1 \\\ 2 \\\ -1 \\\ -2 \end{array}\right] ,v\_2= \left[\begin{array}{r} 1 \\\ 2 \\\ 3 \\\ -6 \end{array}\right] ,v\_3= \left[\begin{array}{r} 0 \\\ 0 \\\ 1 \\\ -1 \end{array}\right] ,v= \left[\begin{array}{r} 1 \\\ 2 \\\ 1 \\\ -4 \end{array}\right]\\), check if \\(v \in \spn\\{v\_1,v\_2,v\_3\\}\\) <br/>
this means there exist \\(x,y,z \in \mathbb{R}\\) such that \\(x\cdot \left[\begin{array}{r} 1 \\\ 2 \\\ -1 \\\ -2 \end{array}\right] +y\cdot \left[\begin{array}{r} 1 \\\ 2 \\\ 3 \\\ -6 \end{array}\right] +z\cdot \left[\begin{array}{r} 0 \\\ 0 \\\ 1 \\\ -1 \end{array}\right] = \left[\begin{array}{r} 1 \\\ 2 \\\ 1 \\\ -4 \end{array}\right]\\) <br/>
to solve this we build an augmented matrix: <br/>
\\[\left[\begin{array}{rrr} 1 & 1 & 0 \\\ 2 & 2 & 0 \\\ -1 & 3 & 1 \\\ -2 & -6 & -1 \end{array}\right] \cdot \left[\begin{array}{r} x \\\ y \\\ z \end{array}\right] = \left[\begin{array}{r} 1 \\\ 2 \\\ 1 \\\ -4 \end{array}\right] \implies \left[\begin{array}{rrrr} 1 & 1 & 0 & 1 \\\ 2 & 2 & 0 & 2 \\\ -1 & 3 & 1 & 1 \\\ -2 & -6 & -1 & -4 \end{array}\right]\\] <br/>
we reduce to echelon form: <br/>
\\[\left[\begin{array}{rrrr} 1 & 1 & 0 & 1 \\\ 0 & 4 & 1 & 2 \\\ 0 & 0 & 0 & 0 \\\ 0 & 0 & 0 & 0 \end{array}\right]\\] <br/>
this matrix tells us that we have infinite \\(x,y,z\\) that give us what we want, therefore \\(v \in \spn\\{v\_1,v\_2,v\_3\\}\\) <br/>

</div>

<div class="my_example">

\\(\mathbb{R} ^n\\) is spanned by the set \\(x\_1,x\_2\ldots x\_n\\): <br/>
\\[
  \spn(\mathbb{R}^n) = \sum\_{i=1}^{n} x\_iu\_i
\\] <br/>
\\(\mathbb{R}^n\\) is spanned by the following \\(n\\) vectors: <br/>

\begin{align\*}
  u\_1 &= (1,0,0\ldots 0)\\\\
  u\_2 &= (0,1,0\ldots 0)\\\\
  u\_2 &= (0,0,1\ldots 0)\\\\
  &\vdots\\\\
  u\_n &= (0,0,0\ldots 1)
\end{align\*}

</div>

<div class="my_example">

\\(\mathbb{R}[x]\\) is the space of polynomials over the field \\(\mathbb{R}\\) with a single polynomial \\(x\\) <br/>
\\(\mathbb{R}[x]\\) isnt finitely spanned, to prove this, we assume in contradiction that the set \\(p\_1(x),p\_2(x)\ldots p\_n(x)\\) spans \\(\mathbb{R}[x]\\) <br/>
a linear combination of polynomials cant give us a degree that is higher than the degree of the polynomial with the highest degree in said linear combination, we write: <br/>
\\[
  \sum\_{i=1}^n x\_ip\_i(x) \leq max\\{deg(p\_{1 \rightarrow n}(x))\\}
\\] <br/>
let \\(m\\) be the polynomial with the highest degree, \\(m = max\\{deg(p\_{1 \rightarrow n}(x))\\}\\), we know \\(x^{m+1} \in \mathbb{R}[x]\\) by necessity because \\(\mathbb{R}[x]\\) contains all the polynomials over the field \\(\mathbb{R}\\) <br/>
\\[
  \sum\_{i=1}^n x\_ip\_i(x) \leq m \implies \sum\_{i=1}^{n} x\_ip\_i(x) \neq x^{m+1} \implies x^{m+1} \not \in \mathbb{R}[x] \implies \spn\\{p\_1\ldots p\_n\\} \neq \mathbb{R}[x]
\\] <br/>

</div>

<div class="lemma">

let \\(V\\) be a vector space over the field \\(\mathbb{F}\\), and let \\(T \subseteq V, S \subseteq V\\) be sets of vectors, then \\(\spn(S) \subseteq \spn(T) \iff S \subseteq \spn(T)\\) <br/>

</div>

<div class="lemma">

if \\(V\_\mathbb{F}\\) is finitely spanned, if \\(W \leq V\\) then \\(W\\) is finitely spanned too <br/>

</div>

</div>


##### <span class="section-num">3.7.3.2</span> linear dependance {#linear-dependance}

<div class="definition">

a [set]({{< relref "discrete_maths2.md#set" >}}) of vectors \\(v\_1, v\_2, \ldots, v\_k\\) from a [vector space](#vector-space) is said to be **linearly dependant** if there exists a non-trivial (not all zeros) set of [scalar]({{< relref "20220727110413-scalar.md" >}})s \\(a\_1,a\_2,\ldots,a\_k\\), such that: <br/>
\\[
  a\_1v\_1 + a\_2v\_2 + \cdots + a\_kv\_k = \vec0
\\] <br/>
thus, a set of vectors is linearly dependent if and only if one of them is zero or a linear combination of the others. <br/>
each of the vectors in a linearly dependant set is linearly dependant on the set <br/>

<div class="note">

a **set of vectors** is just a subset of a vector space \\(V\\) while a **sequence of vectors** is a map \\(\mathbb{N} \rightarrow V\\) (can also be written as a infinite tuple). A set does not care about ordering or enumerating elements multiple times in contrast to a sequence. <br/>

</div>

<div class="my_example">

given \\(v\_1= \left[\begin{array}{r} 1 \\\ 0 \\\ 1 \end{array}\right] ,v\_2= \left[\begin{array}{r} 1 \\\ 1 \\\ 0 \end{array}\right] ,v\_3= \left[\begin{array}{r} 2 \\\ 1 \\\ 1 \end{array}\right]\\) check whether these vectors are linearly dependant <br/>

we need to find \\(x,y,z\\) such that \\(xv\_1 + xv\_2 + xv\_3 = \vec0\\), and the first combination that comes to mind is \\(v\_1 + v\_2 - v\_3 = \vec0\\), so these vectors are linearly dependant <br/>

</div>

<div class="lemma">

\\(\\{\vec v\\}\\) is a linearly dependant set if and only if \\(\vec v = \vec0\\) <br/>

<div class="proof">

**first** we prove <br/>
\\[ \\{\vec v\\} \text{ being linearly dependant} \implies \vec v = \vec0 \\] <br/>
\\(\\{\vec v\\}\\) being linearly dependant means there exists \\(a \neq 0 \in \mathbb{F}\\) such that: <br/>
\\[ a\vec v = \vec0 \\] <br/>
we multiply both sides of this equation by \\(a^{-1} \in \mathbb{F}\\) <br/>

\begin{align\*}
  a^{-1}a\vec v &= a^{-1}\vec0\\\\
  \vec v &= \vec0
\end{align\*} 

**second** we prove <br/>
\\[ \vec v = \vec0 \implies \\{\vec v\\} \text{ is linearly dependant} \\] <br/>
we need to find \\(a \neq 0 \in \mathbb{F}\\) such that <br/>
\\[
  a\vec v = \vec0
\\] <br/>
and that \\(a\\) can just be \\(a = 1\\) which would give us \\(1 \cdot \vec v = \vec0\\), therefore \\(\\{\vec v\\}\\) is linearly dependant <br/>

</div>

</div>

</div>


###### <span class="section-num">3.7.3.2.1</span> proportionality {#proportionality}

<div class="definition">

\\(v\_1, v\_2\\) are called **proportional** if there exists \\(a \in \mathbb{F}\\) such that \\(v\_1 = a \cdot v\_2\\) <br/>

<div class="lemma">

\\(\\{v\_1, v\_2\\}\\) is a linearly dependant set if and only if the vectors \\(v\_1,v\_2\\) are proportional <br/>

<div class="proof">

**first** we need to prove <br/>
\\[
  \\{v\_1, v\_2\\} \text{ is linearly dependant} \implies \\{v\_1, v\_2\\} \text{ are proportional}
\\] <br/>
\\(\\{v\_1, v\_2\\}\\) being linearly dependant means there exist \\(a,b \in \mathbb{F}\\) not both 0 such that \\(av\_1 + bv\_2 = \vec0\\) <br/>
we assume **Without loss of generality** that \\(a \neq 0\\) <br/>
so we can manipulate the equation to be: <br/>
\\[
  v\_1 = -\dfrac{b}{a}v\_2
\\] <br/>
and therefore \\(v\_1,v\_2\\) are proportional <br/>
**second** we need to prove <br/>
\\[
  v\_1, v\_2 \text{ are proportional} \implies \\{v\_1, v\_2\\} \text{ are linearly dependant}
\\] <br/>
\\(v\_1, v\_2\\) being proportional means there exists \\(a \in \mathbb{F}\\) such that: <br/>
\\[
  v\_1 = av\_2
\\] <br/>
now we can manipulate this expression to be: <br/>
\\[
  v\_1 - av\_2 = \vec0
\\] <br/>
which obviously tells us that \\(\\{v\_1,v\_2\\}\\) are linearly dependant because there exists a set of coefficients not all 0 that gives us the vector \\(\vec0\\) <br/>

</div>

</div>

<div class="lemma">

if \\(S \subset T\\) and both are finite sets, if \\(S\\) is linearly dependant then \\(T\\) is linearly dependant aswell <br/>

<div class="proof">

let \\(S = \\{s\_1, s\_2, \ldots, s\_n\\}\\), \\(T=\\{s\_1,s\_2,\ldots, s\_n, t\_{n+1}, \ldots, t\_{k+1}\\}\\) <br/>
since \\(S\\) is linearly dependant then we have the scalars \\(x\_1,x\_2,\ldots,x\_n \in \mathbb{F}\\) not all zero that give us: <br/>
\\[
  x\_1s\_1 + x\_2s\_2 + \cdots + x\_ns\_n = \vec0
\\] <br/>
consider the following sum: <br/>
\\[
  x\_1s\_1 + \cdots + x\_ns\_n + 0 \cdot t\_{n+1} + \cdots + 0 \cdot t\_{n+k} = \vec0
\\] <br/>
this sum shows just why \\(T\\) would be linearly dependant, because it is a linear combination whose scalars arent all 0 that gives us \\(\vec0\\) <br/>

</div>

<div class="entailment">

if a sequence of vectors \\(A = \\{v\_1, \ldots, v\_n\\}\\) contains a zero vector \\(\vec0\\) or 2 vectors that are proportional then \\(A\\) is linearly dependant <br/>

</div>

</div>

<div class="lemma">

let \\(A = \\{v\_1,\ldots,v\_n\\}\\) be a sequence of vectors such that \\(v\_1 \neq \vec0\\), therefore the following statements are equal <br/>

1.  \\(A\\) is a linearly dependant set of vectors <br/>
2.  the sequence \\(A\\) contains a vector \\(v\_i,\ i \geq 2\\) which is a linear combination of its preceding vectors <br/>
3.  the sequence \\(A\\) contains a vector \\(v\_i,\ i \geq 2\\) that is a linear combination of other vectors which means \\(v\_i \in \spn\\{v\_1,\ldots,v\_{i-1},v\_{i+1},\ldots,v\_n\\}\\) <br/>

<div class="proof">

we start with proving \\(\text{statement } 1 \implies \text{statement } 2\\) <br/>
according to statement 1, \\(A\\) is a linearly dependant set of vectors, therefore there exists a non-trivial linear combination that gives us \\(\vec0\\) <br/>
\\[
  x\_1v\_1 + x\_2v\_2 + \cdots + x\_nv\_n = \vec0
\\] <br/>
we pick the last coefficient that isnt 0, let \\(x\_k \neq 0\\) be that coefficient, so we know \\(x\_{k+1} \cdots x\_n = 0\\) because \\(x\_k\\) is the last non-zero scalar <br/>
and we can also conclude that the following is a non-trivial sequence that gives us \\(\vec0\\) because all scalars that come after \\(x\_k\\) are \\(0\\) <br/>
\\[
  x\_1v\_1 + x\_2v\_2 + \cdots + x\_kv\_k = \vec0
\\] <br/>
we manipulate this expression: <br/>

\begin{align\*}
  x\_1v\_1 + x\_2v\_2 + \cdots + x\_kv\_k &= \vec0\\\\
  x\_1v\_1 + x\_2v\_2 + \cdots + x\_{k-1}v\_{k-1} &= -x\_kv\_k\\\\
  \dfrac{x\_1}{-x\_k}v\_1 + \dfrac{x\_2}{-x\_k}v\_2 + \cdots \dfrac{x\_{k-1}}{-x\_k}v\_{k-1} &= v\_k\\\\
\end{align\*}

and so we have proved that \\(v\_k\\) is a linear combination of its preceding vectors <br/>
not that \\(k \geq 2\\) because if \\(k = 1\\) and \\(k\\) is the rightmost non-zero scalar then all the scalars are zero <br/>

</div>

<div class="proof">

now we prove \\(\text{statement } 2 \implies \text{statement } 3\\) <br/>
statement 2 tells us there exists \\(i \geq 2\\) such that \\(v\_i \in \spn\\{v\_1 \cdots v\_{i-1}\\}\\) which means: <br/>
\\[
  v\_i = b\_1v\_1 + \cdots + b\_{i-1}v\_{i-1}
\\] <br/>
we can add the rest of the vectors with 0 as the coefficients and not affect the equation <br/>
\\[
  v\_i = b\_1v\_1 + \cdots + b\_{i-1}v\_{i-1} + 0 \cdot v\_{i+1} + \cdots 0 \cdot v\_n
\\] <br/>

</div>

<div class="proof">

now we prove \\(\text{statement } 3 \implies \text{statement } 1\\) <br/>
there exist \\(x\_1, x\_2, x\_{i-1}, x\_{i+1}, x\_n \in \mathbb{F}\\) such that \\(v\_i = x\_1v\_1 + x\_{i-1}v\_{i-1} + x\_{i+1}v\_{i+1} + x\_nv\_n\\) <br/>
we move \\(v\_i\\) to the other side of the equation to get: <br/>
\\[
  \vec0 = x\_1v\_1 + x\_{i-1}v\_{i-1} + (-1)v\_i + x\_{i+1}v\_{i+1} + x\_nv\_n
\\] <br/>
since \\(x\_i=-1\\), this shows that we have a non-trivial linear combination that gives us \\(\vec0\\) which means that the set is linearly dependant <br/>

</div>

<div class="entailment" id="dependant_set_then_exists_dependant_vector">

if \\(S \subseteq V\\) is linearly dependant then there exists \\(\vec s \in S\\) such that \\(\vec s \in \spn(S - \\{s\\})\\) <br/>
in other words, if a given sequence of vectors is linearly dependant then it has atleast one vector that is a linear combination of the other vectors <br/>

</div>

</div>

<div class="lemma" id="can_drop_vector_keep_span">

let \\(S = \\{s\_1,s\_2,\ldots,s\_n\\}\\), if \\(S \subseteq V\\) is a dependant set then there exists \\(\vec s \in S\\) such that \\(\spn(s) = \spn(S - \\{s\\})\\) <br/>
in other words, given a dependant set of vectors, there exists a vector in this set that is possible to drop without changing the span of the set <br/>

<div class="proof">

according to [this entailment](#orgd1ab2f2), there exists \\(s \in S\\) such that \\(s \in \spn(S - \\{s\\})\\) <br/>
to prove \\(\spn(s) = \spn(S - \\{s\\})\\) we show that \\(\spn(s) \subseteq \spn(S - \\{s\\})\\) and \\(\spn(S - \\{s\\}) \subseteq \spn(s)\\) <br/>
we know that \\(\spn(S - \\{s\\}) \subseteq \spn(s)\\) because we can take every linear combination from the former, add \\(0 \cdot s\\) to it, and it would be a linear combination of the latter <br/>
without loss of generality, assume \\(s = s\_1\\) <br/>
since \\(s\_1 \in \spn(S - \\{s\_1\\})\\) then: <br/>
\\[
  s\_1 = y\_2s\_2 + y\_3s\_3 + \cdots + y\_ns\_n
\\] <br/>
where \\(y\_2\ldots y\_n \in \mathbb{F}\\) <br/>
let \\(v \in \spn(S)\\) then: <br/>
\\[
  v = x\_1s\_1 + x\_2s\_2 + \cdots + x\_ns\_n
\\] <br/>
where \\(x\_2\ldots x\_n \in \mathbb{F}\\) <br/>
we substitute \\(s\_1\\) in this equation to get: <br/>

\begin{align\*}
  v &= x\_1(y\_2s\_2 + y\_3s\_3 + \cdots + y\_ns\_n) + x\_2s\_2 + \cdots + x\_ns\_n\\\\
  v &= (x\_1y\_2 + x\_2)s\_2 + \cdots + (x\_1y\_n + x\_n)s\_n\\\\
\end{align\*}

we have showed that \\(v \in \spn(S - \\{s\_1\\})\\) <br/>
and since \\(v \in \spn(S)\\) and \\(v \in \spn(S - \\{s\\})\\) then \\(\spn(S) \subseteq \spn(S - \\{s\\})\\) <br/>
and since \\(\spn(s) \subseteq \spn(S - \\{s\\})\\) and \\(\spn(S - \\{s\\}) \subseteq \spn(s)\\) then \\(\spn(s) = \spn(S - \\{s\\})\\) <br/>

</div>

</div>

<div class="lemma">

for every finite set \\(S \in V\_\mathbb{F}\\), there exists \\(B \subseteq S\\) such that: <br/>

1.  \\(B\\) is linearly indepenedant <br/>
2.  \\(\spn(B) = \spn(S)\\) <br/>

<div class="proof">

in case \\(S\\) is linearly independant we pick \\(B = S\\) and so \\(B\\) is linearly dependant and \\(\spn(B) = \spn(S)\\) <br/>
in case \\(S\\) is linearly dependant we got more work to do: <br/>
according to [this lemma](#org10f3de5), \\(\spn(S) = \spn(S - \\{s\_1\\})\\) <br/>
in case \\(S - \\{s\_1\\}\\) is linearly independant then let \\(B = S - \\{s\_1\\}\\) which means \\(B \subseteq S\\) and \\(\spn(B) = \spn(S)\\) <br/>
in case \\(S - \\{s\_1\\}\\) is linearly dependant, according to [this lemma](#org10f3de5), \\(\spn(S - \\{s\_1,s\_2\\}) = \spn(S - \\{s\_1\\}) = \spn(S)\\) <br/>
in case \\(\spn(S - \\{s\_1,s\_2\\})\\) is linearly independant then the proof is over <br/>
in case it isnt, we repeat the same step of removing a vector <br/>
you might already see the pattern here, we keep dropping vectors from \\(S\\) without changing the span, eventually we would arrive at \\(S - \\{s\_1,s\_2,s\_k\\}\\) that is linearly independant and \\(B \subseteq S\\) and \\(\spn(B) = \spn(S)\\) <br/>

</div>

</div>

</div>


##### <span class="section-num">3.7.3.3</span> visual explanation {#visual-explanation}

by definition of **span**, a span of a set of vectors is the collection of all the possible linear combinations using said vectors <br/>
the span of a single vector would just be its own line expanded across the entire 3d region, because we cant reach other dimensions by constant multiplication or by addition of the vector to itself <br/>

{{< figure src="/ox-hugo/DuGLXT.svg" >}} <br/>

<iframe style="width: 100%; height: 4in" src="/more/vJ75y0.html"></iframe>

the span of 2 **linearly independant** vectors is however more interesting because it would be visualized as a grid across the 3d space <br/>
for simplicity, we take the relatively simple vectors \\(\begin{bmatrix} 0\\\1.3\\\1.8 \end{bmatrix}, \begin{bmatrix} 0\\\ -0.9\\\ 0.9 \end{bmatrix}\\) that lie on the \\(x=0\\) grid which covers the \\(y\\) and \\(z\\) axes <br/>

{{< figure src="/ox-hugo/BkRBEU.svg" >}} <br/>

{{< figure src="/ox-hugo/mW0Cqb.svg" >}} <br/>


#### <span class="section-num">3.7.4</span> basis {#basis}

<div class="definition">

assuming a [vector space](#vector-space) \\(V\\), let \\(B \subseteq V\\) be a finite, [linearly independant](#linear-dependance) and [spanning set](#spanning-set) of \\(V\\) which we call a **basis**, each vector in a basis is called a **basis vector** <br/>
let \\(B = \\{u\_1,\ldots,u\_i,\ldots,u\_n\\}\\) be a basis of \\(\mathbb{R}^n\\): <br/>

\begin{align\*}
  u\_1 &= (1,0,\ldots,0)\\\\
  u\_2 &= (0,1,\ldots,0)\\\\
  &\vdots\\\\
  u\_i &= (0,0,\ldots,1\ldots,0)\\\\
  &\vdots\\\\
  u\_n &= (0,0,\ldots,1)
\end{align\*}

since \\(B\\) is linearly independant then: <br/>
\\[
  \sum\_{i=1}^{n} x\_iu\_i = \vec0 \iff x\_1 = x\_2 = \cdots = x\_n = 0
\\] <br/>
this is necessarily true because \\(x\_i\\) has to be 0 for \\(u\_i\\) to zero out and if it wasnt zero then the output vector would have a non-zero in it and it wouldnt be \\(\vec0\\) anymore <br/>

<div class="note">

a basis doesnt have to be of this simplified form, we can take the basis \\(B\\), apply [elementary row operation](#elementary-row-operation)s to its vectors and we would get another basis for the given vector space <br/>

</div>

<div class="lemma">

every **finitely generated vector space** \\(V\_\mathbb{F}\\) has atleast one basis <br/>

<div class="proof">

since \\(V\_\mathbb{F}\\) is finitely generated there exists a finite set \\(S \subseteq V\\) such that \\(\spn(S) = V\\) <br/>
according to [this lemma](#org10f3de5), there exists \\(B \subseteq S\\) where \\(B\\) is linearly independant and \\(\spn(B) = V\\), therefore \\(B\\) is a basis <br/>

</div>

</div>

<div class="my_example">

\\(V = \\{\vec0\\}\\) <br/>
\\(\spn(\varnothing) = \\{\vec0\\}\\) <br/>
\\(\varnothing\\) is linearly independant <br/>
\\(\varnothing\\) is a basis of \\(V\\) <br/>

</div>

<div class="my_example">

given the vector space \\(W = \\{(x,y,z)\in\mathbb{R}^3 \mid x=y\\}\\), we find a basis of it: <br/>
\\[
(x,y,z) = (x,x,z) = x(1,1,0) + z(0,0,1) \implies B = \\{(1,1,0),(0,0,1)\\}
\\] <br/>
so \\(B\\) is a basis of \\(W\\) and \\(\dim W = 2\\), see [dimension](#dimension) <br/>

</div>

<div class="my_example">

consider the vector space \\(M\_{n \times m}(\mathbb{F})\\) which represents all the matrices with dimensions \\(n \times m\\) over the field \\(\mathbb{F}\\) <br/>
what we are basically looking for is a set of matrices that is linearly independant so that no matrix is a linear combination of the others, which is accomplished with: <br/>
\\[
  u\_{i,j} = i\stackrel{j}{\begin{pmatrix} 0 & \vdots & 0\\\ \cdots & 1 & &\\\ 0 & & 0 \end{pmatrix}}
\\] <br/>
and: <br/>
\\[
  \underbrace{\spn\\{u\_{i,j}\\}}\_{n \cdot m \text{ elements}} = M\_{n \times m}(\mathbb{F})
\\] <br/>
we prove that \\(\\{u\_{i,j}\\}\\) is linearly independant: <br/>
\\[
  \sum\_{i=1}^{n} \sum\_{j=1}^{m} \alpha\_{i,j} \cdot u\_{i,j} = \vec0
\\] <br/>
it must be that \\(a\_{i,j} = 0\\) and so \\(\\{u\_{i,j}\\}\\) is linearly independant because the only linear combination that gives us \\(\vec0\\) is where the coefficients all are 0 <br/>

</div>

<div class="lemma">

given \\(S\\) is a finite set and \\(T \subseteq \spn(S)\\) and \\(|T| > |S|\\), then \\(T\\) is linearly dependant <br/>
in other words, if we have a finitely generated vector space, if \\(T\\) is a subset of that space such that the number of elements in \\(T\\) is bigger than the number of elements in \\(S\\), then \\(T\\) is linearly dependant <br/>

<div class="proof">

let \\(S = \\{s\_1,s\_2 \ldots s\_n\\}\\) and \\(T = \\{t\_1,t\_2 \ldots t\_n\\}\\) such that \\(n > m\\) <br/>
let \\(A\\) denote the coefficients, for every \\(1 \leq i \leq n\\) where \\(t\_i \in \spn(S)\\) there exist the coefficients: <br/>
\\[
  t\_i = \sum\_{j=1}^{m} A\_{j,i} S\_j
\\] <br/>

</div>

<div class="entailment">

let \\(S\\) be a finite set, if \\(T \subseteq \spn(S)\\) and \\(T\\) is linearly independant then \\(|T| \leq |S|\\) <br/>

</div>

<div class="entailment">

let \\(A,B\\) be bases of \\(V\\) then \\(|A| = |B|\\) <br/>

<div class="proof">

\\(B\\) is a spanning set and \\(A \subseteq \spn(B)\\) and \\(A\\) is linearly independant then \\(|A| \leq |B|\\) <br/>
\\(A\\) is a spanning set and \\(B \subseteq \spn(A)\\) and \\(B\\) is linearly independant then \\(|B| \leq |A|\\) <br/>
therefore \\(|B| = |A|\\) <br/>

</div>

</div>

</div>

</div>


##### <span class="section-num">3.7.4.1</span> standard basis {#standard-basis}

<div class="definition">

the **standard basis** of a [vector space](#vector-space) is the set of vectors whose components are all zero, except one that equals 1. <br/>

<div class="my_example">

consider the set \\(\\{(1,0),(0,1)\\}\\) which is a standard basis of the vector space \\(\mathbb{R}^2\\) <br/>
also the dimension of this set is 2 <br/>

</div>

<div class="lemma">

when put in a matrix, a standard basis forms an identity matrix <br/>

<div class="my_example">

consider the set \\(A = \\{(1,0,0),(0,1,0),(0,0,1)\\}\\) which is a standard basis of the vector space \\(\mathbb{R}^3\\) <br/>
we put the vectors in a matrix: <br/>
\\[
\bmqty{1 & 0 & 0\\\ 0 & 1 & 0\\\ 0 & 0 & 1}
\\] <br/>
which is an identity matrix of the 3rd degree <br/>
\\(\dim A = 3\\) <br/>

</div>

</div>

</div>


##### <span class="section-num">3.7.4.2</span> basis of the cartesian coordinate system {#basis-of-the-cartesian-coordinate-system}

the [standard basis](#standard-basis) of the familiar three dimensional coordinate system consists of the [unit vector](#unit-vector)s that lie along the x, y, and z axes <br/>
the x unit vector is denoted by \\(\ihat\\), the y unit vector by \\(\jhat\\), and the z unit vector by \\(\khat\\) <br/>

{{< figure src="/ox-hugo/YzTbRCF.svg" >}} <br/>

<div class="characteristic">

\begin{align\*}
  \ihat \cdot \ihat &= \jhat \cdot \jhat = \khat \cdot \khat = 1\\\\
  \ihat \cdot \jhat &= \jhat \cdot \khat = \khat \cdot \ihat = 0\\\\
  \ihat \times \jhat &= \khat\\\\
  \jhat \times \khat &= \ihat\\\\
  \khat \times \ihat &= \jhat
\end{align\*}

we can write any vector in terms of the base vectors <br/>
\\(A = A\_x\ihat + A\_y\jhat + A\_z\khat\\) <br/>

</div>


#### <span class="section-num">3.7.5</span> dimension {#dimension}

<div class="definition">

the **dimension** of a [vector space](#vector-space) \\(V\_\mathbb{F}\\) is the number of elements in one of its [bases](#basis) <br/>
we write \\(\dim V\_\mathbb{F} = |B|\\) where \\(B\\) is a basis of \\(V\\) <br/>

<div class="my_example">

\\(\dim(\mathbb{F}^n) = n\\) <br/>

</div>

<div class="my_example">

\\(\dim(M\_{n \times m}(\mathbb{F})) = n \times m\\) <br/>

</div>

<div class="my_example">

\\(\dim(P\_n[x]) = n + 1\\) <br/>

</div>

<div class="my_example">

\\(\dim(\ker(A)) =\\) number of free variables <br/>

</div>

<div class="lemma">

let \\(V\_\mathbb{F}\\) be a vector space of dimension \\(n\\), for every subset \\(S \subseteq V\\) that has \\(n\\) elements the following statements are equal <br/>

1.  \\(S\\) is linearly independant <br/>
2.  \\(\spn(S) = V\\) <br/>

<div class="proof">

<div class="step">

we prove \\(\text{statement } 1 \Longrightarrow \text{statement } 2\\) <br/>
given \\(S = \\{s\_1,s\_2\ldots s\_n\\} \subseteq V^n\\) is linearly independant, we need to prove \\(\spn(S) = V\\) <br/>
let \\(v \in V\\), \\(B\\) a basis of \\(V\\), \\(|B| = n\\) <br/>
let \\(T = \\{s\_1,s\_2\ldots s\_n, v\\}\\) <br/>
we know according to previous lemmas that \\(|T| > n\\) therefore \\(T\\) is linearly dependant <br/>
since \\(T\\) is linearly dependant then we have the following non-trivial linear combination that gives us \\(\vec0\\): <br/>
\\[
  \sum\_{i=1}^n x\_is\_i + s\_{n+1}v = \vec0
\\] <br/>
we know \\(x\_{n+1} \neq 0\\) because otherwise another \\(s\_i\\) would be equal to 0 and \\(S\\) wouldnt be linearly independant <br/>
by manipulating the expression we get: <br/>
\\[
  \sum\_{i=1}^n \frac{x\_i}{x\_{n+1}} \cdot s\_i = v
\\] <br/>
therefore \\(v \in \spn(S)\\) therefore \\(\spn(S) = V\\) <br/>

</div>

<div class="step">

we prove \\(\text{statement } 2 \Longrightarrow \text{statement } 1\\) <br/>
given \\(\spn(S) = V^n\\) <br/>
assume in contradiction that \\(S\\) is linearly dependant <br/>
according to a previous lemma we there exists \\(B \subset S\\) that is linearly independant such that \\(\spn(B) = \spn(S)\\) therefore \\(B\\) is a basis therefore \\(|B| = n\\) <br/>
we arrived at a contradiction becacuse \\(|B| < |S| = n\\) <br/>

</div>

</div>

<div class="entailment" id="n_subset_is_basis">

if \\(\dim V = m\\) and \\(B = \\{u\_1,u\_2 \ldots u\_m\\}\\), if \\(\spn(B) = V\\) or \\(B\\) is linearly independant then \\(B\\) is a basis of \\(V\_\mathbb{F}\\) <br/>

</div>

</div>

<div class="lemma">

given \\(V\_\mathbb{F}\\) is finitely spanned, if \\(W \leq V\\) then \\(\dim W \leq \dim V\\) <br/>

<div class="note">

according to the previous lemma, since \\(V\\) is finitely spanned then \\(W\\) is finitely spanned too which means \\(W\\) has a basis and a dimension <br/>

</div>

we assume in contradiction that \\(\dim W > \dim V\\) <br/>
assume \\(\\{v\_1\ldots v\_n\\}\\) is a basis of \\(V\\), then we know \\(\spn\\{v\_1\ldots v\_n\\} = V\\) <br/>
assume \\(\\{w\_1\ldots w\_m\\}\\) where \\(m > n\\) is a basis of \\(W\\), then we know \\(\spn\\{w\_1\ldots w\_m\\} = W\\) which means \\(\\{w\_1\ldots w\_m\\}\\) is linearly independant but it cant be because we have a set where \\(m \leq n\\) with less elements that is linearly independant so a set with \\(m > n\\) cant be linearly independant <br/>

</div>

<div class="lemma">

given \\({V\_\mathbb{F}}^n\\) is finitely spanned, \\(W^n \leq V^n\\) and \\(\dim W = \dim V\\) then \\(W = V\\) <br/>

<div class="proof">

let \\(w\_1\ldots w\_n\\) be a basis of \\(W\\) and so \\(n = |V|\\) and \\(w\_1\ldots w\_n\\) is linearly independant therefore according to [this lemma](#org127e517) \\(\spn\\{w\_1\ldots w\_n\\} = V = W\\) and since it spans \\(V\\) and is of size \\(n = |V|\\) then it is a basis of \\(V\\) <br/>

</div>

</div>

<div class="lemma">

if \\(V\_\mathbb{F}\\) is finitely spanned and \\(W \leq V\\) then for every basis \\(B\\) of \\(W\\) there exists a basis \\(A\\) of \\(V\\) such that \\(B \subseteq A\\) <br/>
we call this operation as complementing the basis \\(B\\) to the basis \\(A\\) <br/>

<div class="proof">

we prove using induction of \\(\dim V - \dim W\\) <br/>

<div class="step">

the first step of an induction proof is a check <br/>
we check if \\(\dim V - \dim W = 0\\) meaning \\(\dim V = \dim W\\) <br/>
we pick \\(A = B\\) <br/>

</div>

to be continued... <br/>

</div>

</div>

<div class="lemma">

let \\(V\\) be a finitely spanned vector space, let \\(U,W \leq V\\) then: <br/>
\\[
  \dim(U + W) = \dim U + \dim W - \dim(U \cap W)
\\] <br/>

<div class="proof">

with previous lemmas in mind, we know \\(U + W,\ U \cap W \leq V\\) <br/>
let \\(a\_1\ldots a\_n\\) be a basis of \\(U + W\\) <br/>
since \\(U \cap W \leq V\\) then we can complement \\(a\_1\ldots a\_n\\) to a basis of \\(U\\) such that \\(a\_1\ldots a\_n + a\_{n+1} \ldots a\_m\\) is a basis of \\(U\\) <br/>
and since \\(U \cap W \leq W\\) then we can complement \\(a\_1\ldots a\_n\\) to a basis of \\(W\\) such that \\(a\_1\ldots a\_n + b\_{n+1} \ldots b\_{k}\\) is a basis of \\(W\\) <br/>
so far we know \\(\dim W = k,\ \dim U = m,\ \dim(W \cap U) = n\\) <br/>
to be continued... <br/>

</div>

</div>

</div>


#### <span class="section-num">3.7.6</span> coordinate vector {#coordinate-vector}

<div class="definition">

let \\(V\_F\\) be a vector space such that \\(\dim V = m\\), and \\(B=\\{v\_1,v\_2\ldots v\_m\\}\\) be a basis of \\(V\\) and \\(u \in V\\) <br/>
the **coordinate vector** of \\(u\\) relative to the basis \\(B\\) is defined as \\([u]\_B=(k\_1,k\_2\ldots k\_m)\\) such that \\(k\_1v\_1+k\_2v\_2+\cdots+k\_mv\_m=u\\) <br/>

<div class="question">

given the vector \\((18,21,20)\\) and the basis \\((1,2,3),(4,5,6),(7,8,8)\\) of \\(\mathbb{R}^3\\), find the coordinates of the given vector relative to the given basis <br/>

<div class="answer">

we place these vectors in a matrix and reduce it: <br/>

\begin{align\*}
  \left(
    \begin{array}{ccc|c}
      1 & 4 & 7 & 18\\\\
      2 & 5 & 8 & 21\\\\
      3 & 6 & 8 & 20
    \end{array}
  \right)
  \xrightarrow[r\_3 - 3r\_1 \to r\_3]{r\_2 - 2r\_1 \to r\_2}&
  \left(
    \begin{array}{ccc|c}
      1 & 4 & 7 & 18\\\\
      0 & -3 & -6 & -15\\\\
      0 & -6 & -13 & -34
    \end{array}
  \right)\\\\
  \xrightarrow{\frac{r\_2}{-3} \to r\_2}&
  \left(
    \begin{array}{ccc|c}
      1 & 4 & 7 & 18\\\\
      0 & 1 & 2 & 5\\\\
      0 & -6 & -13 & -34
    \end{array}
  \right)\\\\
  \xrightarrow[r\_3 + 6r\_2 \to r\_3]{r\_1 - 4r\_2 \to r\_1}&
  \left(
    \begin{array}{ccc|c}
      1 & 0 & -1 & -2\\\\
      0 & 1 & 2 & 5\\\\
      0 & 0 & -1 & -4
    \end{array}
  \right)\\\\
  \xrightarrow{\frac{r\_3}{-1} \to r\_3}&
  \left(
    \begin{array}{ccc|c}
      1 & 0 & -1 & -2\\\\
      0 & 1 & 2 & 5\\\\
      0 & 0 & 1 & 4
    \end{array}
  \right)\\\\
  \xrightarrow[r\_2 - 2r\_3 \to r\_2]{r\_1 + r\_3 \to r\_1}&
  \left(
    \begin{array}{ccc|c}
      1 & 0 & 0 & 2\\\\
      0 & 1 & 0 & -3\\\\
      0 & 0 & 1 & 4
    \end{array}
  \right)
\end{align\*}

which means \\([(18,21,20)]\_B = (2,-3,4)\\) <br/>

</div>

</div>

</div>


##### <span class="section-num">3.7.6.1</span> transformation matrix {#transformation-matrix}

<div class="definition">

let \\(V\_F\\) be a vector space such that \\(\dim v = m\\) and let \\(A=\\{u\_1,u\_2\ldots u\_m\\},B=\\{v\_1,v\_2\ldots v\_m\\}\\) be bases of V, the **transformation matrix** from \\(B\\) to \\(A\\) is defined as \\(\_BT\_A=([u\_1]\_B^T,[u\_2]\_B^T,\ldots,[u\_m]\_B^T)\\) <br/>

<div class="question">

consider the following bases of \\(\mathbb{R}^3\\): <br/>

\begin{gather\*}
  u = \\{(1,0,0),(1,1,0),(1,1,1)\\}\\\\
  v = \\{(1,1,1),(0,1,1),(0,0,1)\\}
\end{gather\*}

find the following: <br/>

1.  \\([u\_1]\_v\\) <br/>
2.  \\([u\_2]\_v\\) <br/>
3.  \\([u\_3]\_v\\) <br/>
4.  \\(\_vT\_u\\) <br/>

instead of putting each of the first 3 in its own matrix and reducing we use 1 matrix for them all <br/>

\begin{align\*}
  \left(
    \begin{array}{ccc|ccc}
      v\_1 & v\_2 & v\_3 & u\_1 & u\_2 & u\_3\\\\
      \hline
      1 & 0 & 0 & 1 & 1 & 1\\\\
      1 & 1 & 0 & 0 & 1 & 1\\\\
      1 & 1 & 1 & 0 & 0 & 1
    \end{array}
  \right)
  \xrightarrow[r\_3 - r\_1 \to r\_3]{r\_2 - r\_1 \to r\_2}&
  \left(
    \begin{array}{ccc|ccc}
      1 & 0 & 0 & 1 & 1 & 1\\\\
      0 & 1 & 0 & -1 & 0 & 0\\\\
      0 & 1 & 1 & -1 & -1 & 0
    \end{array}
  \right)\\\\
  \xrightarrow{r\_3 - r\_2 \to r\_3}&
  \left(
    \begin{array}{ccc|ccc}
      1 & 0 & 0 & 1 & 1 & 1\\\\
      0 & 1 & 0 & -1 & 0 & 0\\\\
      0 & 0 & 1 & 0 & -1 & 0
    \end{array}
  \right)
\end{align\*}

which gives us: <br/>

1.  \\([u\_1]\_v = [(1,0,0)]\_v = (1,-1,0)\\) <br/>
2.  \\([u\_2]\_v = [(1,1,0)]\_v = (1,0,-1)\\) <br/>
3.  \\([u\_3]\_v = [(1,1,1)]\_v = (1,0,0)\\) <br/>
4.  \\(\_vT\_u = \begin{pmatrix} 1 & 1 & 1\\\ -1 & 0 & 0\\\ 0 & -1 & 0 \end{pmatrix}\\) <br/>

</div>

<div class="lemma">

let \\(V\_F\\) be a vector space such that \\(\dim V = m\\) and let \\(A=\\{u\_1,u\_2\ldots u\_m\\},B=\\{v\_1,v\_2\ldots v\_m\\}\\) be bases of \\(V\\) then: <br/>

1.  \\(A \cdot \_AT\_B = B\\) <br/>
2.  \\(\_BT\_A = {(\_AT\_B)}^{-1}\\) <br/>

</div>

</div>


#### <span class="section-num">3.7.7</span> vector space addition {#vector-space-addition}

<div class="definition">

given the [vector space](#vector-space)s \\(U,W\\) that are [subspace](#vector-subspace)s of the vector space \\(V\_\mathbb{F}\\) (meaning \\(U,W \leq V\\)), then the addition of \\(U\\) and \\(W\\) is defined as: <br/>
\\[
  U + W = \\{u+w \mid u \in U \land w \in W\\}
\\] <br/>

<div class="lemma">

\\[
  U + W = \\{u+w \mid u \in U \land w \in W\\} = \spn(\text{basis of }U \cup \text{basis of } W)
\\] <br/>

</div>

<div class="lemma">

\\(U + W \leq V\\) <br/>

<div class="proof">

\begin{align\*}
  U + W \subseteq V \implies &u \in U \subseteq V\\\\
                             &w \in W \subseteq V\\\\
                             &u + w \in V &\text{addition closure under } V\\\\
\end{align\*}

<div class="step">

step 1: prove \\(\vec0 \in U + W\\) <br/>

\begin{align\*}
  \vec0 &\in U &\text{because $U$ is a subspace}\\\\
  \vec0 &\in W &\text{because $W$ is a subspace}\\\\
  \vec0 + \vec0 = \vec0 &\in W + U
\end{align\*}

</div>

<div class="step">

step 2: prove addition closure <br/>
let \\(x\_1, x\_2 \in \mathbb{U} + W\\) <br/>

\begin{gather\*}
  u\_1 + w\_1 = x\_1\\\\
  u\_2 + w\_2 = x\_2\\\\
  x\_1 + x\_2 = (u\_1 + w\_1) + (u\_2 + w\_2) = (u\_1 + u\_2) + (w\_1 + w\_2) \in W + U
\end{gather\*}

</div>

<div class="step">

step 3: prove multiplication closure <br/>
let \\(x \in U + W,\ a \in \mathbb{F},\ u\_1 + w\_1 = x\\) <br/>
\\[
ax = a(u\_1 + w\_1) = au\_1 + aw\_1 \in U + W
\\] <br/>

</div>

</div>

</div>

<div class="my_example">

given \\(U=\spn(\\{(1,2,1,2,1),(2,1,2,1,2)\\}),V=\spn(\\{(0,1,2,3,0),(3,2,1,0,3)\\})\\), we find the basis and dimension of \\(U+V\\): <br/>
\\(U+V = \spn(\\{(1,2,1,2,1),(2,1,2,1,2),(0,1,2,3,0),(3,2,1,0,3)\\})\\) <br/>
we put these vectors in a matrix and reduce it to find out how many linearly independant vectors we have <br/>
\\[
\bmqty{1 & 2 & 0 & 3\\\ 2 & 1 & 1 & 2\\\ 1 & 2 & 2 & 1\\\ 2 & 1 & 3 & 0\\\ 1 & 2 & 0 & 3} \xrightarrow{\text{row reduction}} \begin{bmatrix} 1 & 0 & 0 & 1\\\0 & 1 & 0 & 1\\\0 & 0 & 1 & -1\\\0 & 0 & 0 & 0\\\0 & 0 & 0 & 0 \end{bmatrix}
\\] <br/>
which means that only the first 3 vectors are linearly independant so \\(U+V = \spn(\\{(1,2,1,2,1),(2,1,2,1,2),(0,1,2,3,0)\\})\\) and \\(\dim(U+V)=3\\) <br/>

</div>

</div>


#### <span class="section-num">3.7.8</span> vector space intersection {#vector-space-intersection}

<div class="definition">

given the [vector space](#vector-space)s \\(U,W\\) that are [subspace](#vector-subspace)s of the vector space \\(V\_\mathbb{F}\\) (meaning \\(U,W \leq V\\)), then the intersection of \\(U\\) and \\(W\\) is defined as: <br/>
\\[
  U \cap W = \\{v \mid v \in U \land v \in W\\}
\\] <br/>

<div class="lemma">

\\(U \cap W \leq V\\) <br/>

<div class="proof">

\begin{align\*}
  U \cap W &\subseteq V &\text{because they are subspaces so they must be subsets}\\\\
  \vec0 &\in U &\text{because } U \leq V\\\\
  \vec0 &\in W &\text{because } W \leq V\\\\
  \implies \vec0 &\in U \cap W\\\\
  x\_1,\ x\_2 &\in U \cap W & \text{assumption}\\\\
  \implies x\_1 + x\_2 &\in U \cap W &\text{because both are subspaces of } V\\\\
  a \in \mathbb{F},\ x &\in U \cap W &\text{assumption}\\\\
  \implies a \cdot x &\in U \cap W &\text{because both are subspaces of } V
\end{align\*}

</div>

</div>

<div class="my_example">

given \\(U=\spn(\\{(1,2,1,2,1),(2,1,2,1,2),(3,3,3,3,3)\\}),V=\spn(\\{(0,1,2,3,0),(3,2,1,0,3)\\})\\), we find the basis and dimension of \\(U\cap V\\): <br/>
to find \\(U\cap V\\) we need to write \\(U\\) and \\(V\\) as a system of equations <br/>

<div class="step">

to find the corresponding equations of \\(U\\) we reduce the following matrix: <br/>
\\[
\left[\begin{array}{ccc|c} 1 & 2 & 3 & x\_1\\\ 2 & 1 & 3 & x\_2\\\ 1 & 2 & 3 & x\_3\\\ 2 & 1 & 3 & x\_4\\\ 1 & 2 & 3 & x\_5 \end{array}\right] \xrightarrow{\text{row reduction}} \left[\begin{array}{ccc|c} 1 & 2 & 3 & x\_1\\\ 0 & -3 & -6 & x\_2-2x\_1\\\ 0 & 0 & 0 & x\_3-x\_1\\\ 0 & 0 & 0 & x\_4-x\_2\\\ 0 & 0 & 0 & x\_5-x\_1 \end{array}\right]
\\] <br/>
and so \\(U=\spn(\\{(1,2,1,2,1),(2,1,2,1,2)\\}),\ \dim U = 2\\), and: <br/>
\\[
U = \left\\{\bmqty{x\_1\\\x\_2\\\x\_3\\\x\_4\\\x\_5} \ \middle|\ \begin{aligned} x\_3-x\_1=0\\\ x\_4-x\_2=0\\\ x\_5-x\_1=0 \end{aligned}\right\\}
\\] <br/>

</div>

<div class="step">

now to find the corresponding equations of \\(V\\) we reduce the following matrix: <br/>
\\[
\left[\begin{array}{cc|c} 3 & 0 & x\_1\\\ 2 & 1 & x\_2\\\ 1 & 2 & x\_3\\\ 0 & 3 & x\_4\\\ 3 & 0 & x\_5 \end{array}\right] \xrightarrow{\text{row reduction}} \left[\begin{array}{cc|c} 1 & 2 & x\_3\\\ 0 & -3 & x\_2-2x\_3\\\ 0 & 0 & x\_1-2x\_2+x\_3\\\ 0 & 0 & x\_2-2x\_3+x\_4\\\ 0 & 0 & -2x\_2+x\_3+x\_5 \end{array}\right]
\\] <br/>
and so \\(V=\spn(\\{(3,2,1,0,3),(0,1,2,3,0)\\}),\ \dim V = 2\\), and: <br/>
\\[
  V = \left\\{\bmqty{x\_1\\\x\_2\\\x\_3\\\x\_4\\\x\_5} \ \middle|\ \begin{aligned} x\_1-2x\_2+x\_3=0\\\ x\_2-2x\_3+x\_4=0\\\ -2x\_2+x\_3+x\_5=0 \end{aligned}\right\\}
\\] <br/>

</div>

<div class="step">

\\[
  U \cap V = \left\\{\bmqty{x\_1\\\x\_2\\\x\_3\\\x\_4\\\x\_5} \ \middle|\ \begin{aligned} x\_3-x\_1=0\\\ x\_4-x\_2=0\\\ x\_5-x\_1=0\\\ x\_1-2x\_2+x\_3=0\\\ x\_2-2x\_3+x\_4=0\\\ -2x\_2+x\_3+x\_5=0 \end{aligned}\right\\}
\\] <br/>
we put these equations in a matrix and reduce it: <br/>
\\[
  \left(\begin{array}{ccccc|c} -1 & 0 & 1 & 0 & 0 & 0\\\ 0 & -1 & 0 & 1 & 0 & 0\\\ -1 & 0 & 0 & 0 & 1 & 0\\\ 0 & -2 & 1 & 0 & 1 & 0\\\ 0 & 1 & -2 & 1 & 0 & 0\\\ 1 & -2 & 1 & 0 & 0 & 0 \end{array}\right) \xrightarrow{\text{row reduction}} \left(\begin{array}{ccccc|c} 1 & 0 & 0 & 0 & -1 & 0\\\0 & 1 & 0 & 0 & -1 & 0\\\0 & 0 & 1 & 0 & -1 & 0\\\0 & 0 & 0 & 1 & -1 & 0\\\0 & 0 & 0 & 0 & 0 & 0\\\0 & 0 & 0 & 0 & 0 & 0\end{array}\right)
\\] <br/>
which gives us: <br/>

\begin{gather\*}
  x\_1=x\_5\\\\
  x\_2=x\_5\\\\
  x\_3=x\_5\\\\
  x\_4=x\_5\\\\
  (x\_1,x\_2,x\_3,x\_4,x\_5)=(x\_5,x\_5,x\_5,x\_5,x\_5) = x\_5(1,1,1,1,1)
\end{gather\*}

and so \\(U \cap V = \spn(\\{(1,1,1,1,1)\\})\\) and \\(\dim(U \cap V) = 1\\) <br/>

</div>

</div>

</div>


#### <span class="section-num">3.7.9</span> vector space union {#vector-space-union}


## <span class="section-num">4</span> linear map {#linear-map}

<div class="definition">

let \\(U,V\\) be [vector spaces](#vector-space) over the [field](#field) \\(\mathbb{F}\\), and let \\(L: U \to V\\) be a [function]({{< relref "discrete_maths2.md#function" >}}) which would be called a **linear map** if: <br/>

1.  for every \\(u\_1,u\_2 \in U\\), \\(L(u\_1+u\_2) = L(u\_1) + L(u\_2)\\) <br/>
2.  for every \\(u \in U\\) and \\(k \in \mathbb{F}\\), \\(L(ku) = kL(u)\\) <br/>

<div class="question">

\begin{gather\*}
  L: \mathbb{R}^3 \to \mathbb{R}^3\\\\
  L(x,y,z) = \begin{pmatrix}
                x-y-z\\\\
                2x-y+2z\\\\
                3x-2y+z
              \end{pmatrix}
\end{gather\*}

is \\(L\\) a [linear map](#linear-map)? <br/>

<div class="answer">

<div class="step">

we need to prove \\(L((x\_1,y\_1,z\_1)+(x\_2,y\_2,z\_2)) = L(x\_1,y\_1,z\_1) + L(x\_2,y\_2,z\_2)\\) <br/>

<div class="note">

i should be writing \\(L((x,y,z))\\) not \\(L(x,y,z)\\) <br/>

</div>

\begin{align\*}
  L((x\_1,y\_1,z\_1)+(x\_2,y\_2,z\_2)) & = L(x\_1+x\_2,y\_1+y\_2,z\_1+z\_2)\\\\
  &= \begin{pmatrix}
       x\_1+x\_2-(y\_1+y\_2)-(z\_1+z\_2)\\\\
       2(x\_1+x\_2)-(y\_1+y\_2)+2(z\_1+z\_2)\\\\
       3(x\_1+x\_2)-2(y\_1+y\_2)+(z\_1+z\_2)
     \end{pmatrix}\\\\
  &= \begin{pmatrix}
       (x\_1-y\_1-z\_1)+(x\_2-y\_2-z\_2)\\\\
       (2x\_1-y\_1+2z\_1)+(2x\_2-y\_2+2z\_2)\\\\
       (3x\_1-2y\_1+z\_1)+(3x\_2-2y\_2+z\_2)
     \end{pmatrix}\\\\
  &= \begin{pmatrix}
       x\_1-y\_1-z\_1\\\\
       2x\_1-y\_1+2z\_1\\\\
       3x\_1-2y\_1+z\_1
     \end{pmatrix} +
     \begin{pmatrix}
       x\_2-y\_2-z\_2\\\\
       2x\_2-y\_2+2z\_2\\\\
       3x\_2-2y\_2+z\_2
     \end{pmatrix}\\\\
  &= L(x\_1,y\_1,z\_1) + L(x\_2,y\_2,z\_2)
\end{align\*}

</div>

<div class="step">

we need to prove \\(L(k(x,y,z)) = kL(x,y,z)\\) <br/>

\begin{align\*}
  L(k(x,y,z)) &= L(kx,ky,kz)\\\\
  &= \begin{pmatrix}
       kx-ky-kz\\\\
       2kx-ky+2kz\\\\
       3kx-2ky+kz
     \end{pmatrix}\\\\
  &= k\begin{pmatrix}
        x-y-z\\\\
        2x-y+2z\\\\
        3x-2y+z
      \end{pmatrix}\\\\
  &= kL(x,y,z)
\end{align\*}

</div>

</div>

</div>

<div class="question">

check whether this represents a linear map: <br/>
\\[
  T: \mathbb{R}^3 \to \mathbb{R}^3 \coloneqq T(x,y,z) = (x^2,x+y,y+z)
\\] <br/>

<div class="answer">

it isnt, a counter example: <br/>

\begin{gather\*}
  T(1,0,0) = (1,1,0)\\\\
  T(2,0,0) = (4,2,0)\\\\
  T(1,0,0) + T(2,0,0) = (1,1,0) + (4,2,0) = (5, 3, 0)\\\\
  T((1,0,0) + (2,0,0)) = T(3,0,0) = (9,3,0) \neq (5,3,0)
\end{gather\*}

</div>

</div>

<div class="lemma">

if \\(L: U \to V\\) is a [linear map](#linear-map) then \\(L(\vec0)=\vec0\\) <br/>

<div class="entailment">

if \\(f: U \to V\\) is a function such that \\(f(\vec0)\neq\vec0\\) then \\(f\\) isnt a linear map <br/>

</div>

</div>

<div class="lemma">

if \\(L: U \to V\\) is a [linear map](#linear-map) then: <br/>

1.  the [kernel](#kernel) of \\(L\\) is \\(\ker L = \left\\{u \in U \mid L(u) = \vec0\right\\}\\) <br/>
2.  the **image** of \\(L\\) is \\(\img L = \left\\{L(u) \mid u \in U\right\\} \le V\\), which means all the values that can be returned by \\(L\\), which is also the [column space](#column-space) of its corresponding [transformation matrix](#transformation-matrix) (if it has one) <br/>

</div>

<div class="question">

given the [linear operator](#linear-map) \\(L: \mathbb{R}^4 \to \mathbb{R}^4\\) defined by \\(L((x,y,z,w)) = (x+y, y+z, z+w, w+x)\\) <br/>

<div class="subquestion">

find the matrix of \\(L\\) in the basis \\(b\_1=(1,1,1,1),b\_2=(1,-1,0,0),b\_3=(0,1,-1,0),b\_4=(0,0,1,-1)\\) <br/>

<div class="answer">

\begin{gather\*}
  L(\stackrel{x}{1},\stackrel{y}{1},\stackrel{z}{1},\stackrel{w}{1}) = (1+1,\ 1+1,\ 1+1,\ 1+1) = (2,2,2,2,2)\\\\
  L(\stackrel{x}{1},\stackrel{y}{-1},\stackrel{z}{0},\stackrel{w}{0}) = (1-1,\ -1+0,\ 0+0,\ 0+1) = (0,-1,0,1)\\\\
  L(0,1,-1,0) = (1,0,-1,0)\\\\
  L(0,0,1,-1) = (0,1,0,-1)
\end{gather\*}

on the left columns of the matrix lies the basis and on the right 4 columns lies the image <br/>
\\[\left[\begin{array}{rrrrrrrr} 1 & 1 & 0 & 0 & 2 & 0 & 1 & 0 \\\ 1 & -1 & 1 & 0 & 2 & -1 & 0 & 1 \\\ 1 & 0 & -1 & 1 & 2 & 0 & -1 & 0 \\\ 1 & 0 & 0 & -1 & 2 & 1 & 0 & -1 \end{array}\right] \implies \left[\begin{array}{rrrrrrrr} 1 & 0 & 0 & 0 & 2 & 0 & 0 & 0 \\\ 0 & 1 & 0 & 0 & 0 & 0 & 1 & 0 \\\ 0 & 0 & 1 & 0 & 0 & -1 & 1 & 1 \\\ 0 & 0 & 0 & 1 & 0 & -1 & 0 & 1 \end{array}\right]\\] <br/>
and so the matrix is: <br/>
\\[[L]\_A^B = \left[\begin{array}{rrrr} 2 & 0 & 0 & 0 \\\ 0 & 0 & 1 & 0 \\\ 0 & -1 & 1 & 1 \\\ 0 & -1 & 0 & 1 \end{array}\right]\\] <br/>

</div>

</div>

<div class="subquestion">

find the bases of \\(\ker L, \img L\\) <br/>

<div class="answer">

<div class="step">

finding the basis of \\(\ker L\\) <br/>

\begin{gather\*}\\\\
  L(x,y,z,w) = (0,0,0,0)\\\\
  (x+y,\ y+z,\ z+w,\ w+x) = (0,0,0,0)\\\\
  x+y=0\\\\
  y+z=0\\\\
  z+w=0\\\\
  x+w=0\\\\
  \left(
    \begin{array}{cccc|c}
      1 & 1 & 0 & 0 & 0\\\\
      0 & 1 & 1 & 0 & 0\\\\
      0 & 0 & 1 & 1 & 0\\\\
      1 & 0 & 0 & 1 & 0
    \end{array}
  \right) \implies
  \left(
    \begin{array}{cccc|c}
      1 & 0 & 0 & 1 & 0\\\\
      0 & 1 & 0 & -1 & 0\\\\
      0 & 0 & 1 & 1 & 0\\\\
      0 & 0 & 0 & 0 & 0
    \end{array}
  \right)\\\\
  w\text{ free variable}\\\\
  x=-w\\\\
  y=w\\\\
  z=-w\\\\
  (x,y,z,w) = (-w,w,-w,w) = w(-1,1,-1,1)\\\\
  \text{basis of } \ker L = \\{(-1,1,-1,1)\\}\\\\
  \dim\ker L = 1
\end{gather\*}

</div>

<div class="step">

to find the basis of \\(\img L\\) we reduce the matrix: <br/>

\begin{gather\*}
  \begin{pmatrix} 2 & 0 & 1 & 0\\\ 2 & -1 & 0 & 1\\\ 2 & 0 & -1 & 0\\\ 2 & 1 & 0 & 1 \end{pmatrix} \implies \begin{pmatrix} 2 & 0 & 1 & 0\\\ 0 & -1 & 1 & 0\\\ 0 & 0 & -1 & 0 \end{pmatrix}
\end{gather\*}

and so the basis of \\(\img L\\) is \\(B = \\{(2,2,2,2),(0,-1,0,1),(1,0,-1,0)\\}\\) and \\(\dim\img L = 3\\) <br/>
we apply a simple check: \\(\dim\mathbb{R}^4 = \dim\ker L + \dim\img L = 1 + 3 = 4 \\,\checkmark\\) <br/>

</div>

</div>

</div>

</div>

<div class="question">

given the [linear operator](#linear-map) \\(L: M\_2(\mathbb{R}) \to M\_2(\mathbb{R})\\) defined by \\(L(X) = XA + AX\\) such that \\(A = \begin{pmatrix} 1 & 1\\\ 1 & 1 \end{pmatrix}\\) <br/>

<div class="subquestion">

find the matrix of \\(L\\) in the basis \\(E\_1=\begin{pmatrix} 1 & 0\\\ 0 & 1 \end{pmatrix}, E\_2=\begin{pmatrix} 0 & 1\\\ 1 & 0 \end{pmatrix},E\_3 = \begin{pmatrix} 1 & 0\\\ 0 & -1 \end{pmatrix}, E\_4 = \begin{pmatrix} 0 & 1\\\ -1 & 0 \end{pmatrix}\\) <br/>

<div class="answer">

\begin{gather\*}
  L\begin{pmatrix} x\_1 & x\_2\\\ x\_3 & x\_4 \end{pmatrix} = \begin{pmatrix} x\_1 & x\_2\\\ x\_3 & x\_4 \end{pmatrix} \begin{pmatrix} 1 & 1\\\ 1 & 1 \end{pmatrix} + \begin{pmatrix} 1 & 1\\\ 1 & 1 \end{pmatrix} \begin{pmatrix} x\_1 & x\_2\\\ x\_3 & x\_4 \end{pmatrix}\\\\
  = \begin{pmatrix} x\_1+x\_2 & x\_1+x\_2\\\ x\_3+x\_4 & x\_3+x\_4 \end{pmatrix} + \begin{pmatrix} x\_1+x\_3 & x\_2+x\_4\\\ x\_1+x\_3 & x\_2+x\_4 \end{pmatrix}\\\\
  = \begin{pmatrix} 2x\_1+x\_2+x\_3 & x\_1+2x\_2+x\_4\\\ x\_1+2x\_3+x\_4 & x\_2+x\_3+2x\_4 \end{pmatrix}\\\\
  L\begin{pmatrix} 1 & 0\\\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 2 & 2\\\ 2 & 2 \end{pmatrix}\\\\
  L\begin{pmatrix} 0 & 1\\\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 2 & 2\\\ 2 & 2 \end{pmatrix}\\\\
  L\begin{pmatrix} 1 & 0\\\ 0 & -1 \end{pmatrix} = \begin{pmatrix} 2 & 0\\\ 0 & -2 \end{pmatrix}\\\\
  L\begin{pmatrix} 0 & 1\\\ -1 & 0 \end{pmatrix} = \begin{pmatrix} 0 & 2\\\ -2 & 0 \end{pmatrix}\\\\
  \begin{pmatrix} x\_1 & x\_2\\\ x\_3 & x\_4 \end{pmatrix} \sim \begin{pmatrix} x\_1\\\ x\_2\\\ x\_3\\\ x\_4 \end{pmatrix} \implies \begin{pmatrix} 1 & 0\\\ 0 & 1 \end{pmatrix} \sim \begin{pmatrix} 1\\\ 0\\\ 0\\\ 1 \end{pmatrix}\\\\
  \left(
    \begin{array}{cccc|cccc}
      1 & 0 & 1 & 0 & 2 & 2 & 2 & 0\\\\
      0 & 1 & 0 & 1 & 2 & 2 & 0 & 2\\\\
      0 & 1 & 0 & -1 & 2 & 2 & 0 & -2\\\\
      1 & 0 & -1 & 0 & 2 & 2 & -2 & 0
    \end{array}
  \right) \implies
  \left(
    \begin{array}{cccc|cccc}
      1 & 0 & 0 & 0 & 2 & 2 & -2 & 0\\\\
      0 & 1 & 0 & 0 & 2 & 2 & 0 & -2\\\\
      0 & 0 & 1 & 0 & 0 & 0 & 2 & 0\\\\
      0 & 0 & 0 & 1 & 0 & 0 & 0 & 2
    \end{array}
  \right)\\\\
  [L] = \begin{pmatrix}
          2 & 2 & -2 & 0\\\\
          2 & 2 & 0 & -2\\\\
          0 & 0 & 2 & 0\\\\
          0 & 0 & 0 & 2
        \end{pmatrix}
\end{gather\*}

</div>

</div>

<div class="subquestion">

find the bases of \\(\ker L, \img L\\) <br/>

</div>

</div>

<div class="question">

given the [function]({{< relref "discrete_maths2.md#function" >}}) \\(L: \mathbb{R}\_2[x] \to M\_2(\mathbb{R})\\) defined by \\(L(p(x)) = \begin{pmatrix} p(1) & p(0)\\\ p(0) & -p(1) \end{pmatrix}\\) <br/>

<div class="subquestion">

prove \\(L\\) is a [linear transformation](#linear-map) <br/>

<div class="answer">

\\(L\\)'s [domain]({{< relref "discrete_maths2.md#domain" >}}) is a [vector space](#vector-space) of [polynomial]({{< relref "calculus2.md#polynomial" >}})s of the second degree at most, \\(\mathbb{R}\_2[x] = \\{a\_2x^2+a\_1x+a\_0 \mid a\_2,a\_1,a\_0 \in \mathbb{R}\\}\\) <br/>

<div class="step">

assume \\(p\_1(x),p\_2(x) \in \mathbb{R}\_2[x]\\), need to prove \\(L((p\_1+p\_2)(x)) = L(p\_1(x)) + L(p\_2(x))\\) <br/>

\begin{align\*}
  L((p\_1+p\_2)(x)) &= \begin{pmatrix} (p\_1+p\_2)(1) & (p\_1+p\_2)(0)\\\ (p\_1+p\_2)(0) & -((p\_1+p\_2)(1)) \end{pmatrix}\\\\
  &= \begin{pmatrix} p\_1(1)+p\_2(1) & p\_1(0)+p\_2(0)\\\ p\_1(0)+p\_2(0) & -p\_1(1)-p\_2(1) \end{pmatrix}\\\\
  &= \begin{pmatrix} p\_1(1) & p\_1(0)\\\ p\_1(0) & -p\_1(1) \end{pmatrix} + \begin{pmatrix} p\_2(1) & p\_2(0)\\\ p\_2(0) & -p\_2(1) \end{pmatrix}\\\\
  &= L(p\_1(x)) + L(p\_2(x))
\end{align\*}

</div>

<div class="step">

let \\(p(x) \in \mathbb{R}\_2[x],\ k \in \mathbb{R}\\), need to prove \\(L(kp(x) = kL(p(x))\\) <br/>

\begin{align\*}
  L((kp)(x)) &= \begin{pmatrix} (kp)(1) & (kp)(0)\\\ (kp(0)) & (-kp)(1) \end{pmatrix}\\\\
  &= \begin{pmatrix} kp(1) & kp(0)\\\ kp(0) & -kp(1) \end{pmatrix}\\\\
  &= k\begin{pmatrix} p(1) & p(0)\\\ p(0) & -p(1) \end{pmatrix}\\\\
  &= kL(p(x))
\end{align\*}

</div>

therefore, \\(L\\) indeed is a linear transformation <br/>

</div>

</div>

<div class="subquestion">

find the [matrix](#matrix) of \\(L\\) in [standard basis](#standard-basis) form <br/>

</div>

<div class="subquestion">

find the bases of \\(\img L, \ker L\\) <br/>

</div>

</div>

</div>


### <span class="section-num">4.1</span> eigenvalues and eigenvectors {#eigenvalues-and-eigenvectors}

<div class="definition">

an **eigenvector** of a [linear transformation](#linear-map) is a nonzero [vector](#vector) that changes at most by a scalar factor when that linear transformation is applied to it. The corresponding **eigenvalue**, often denoted by \\(\lambda\\), is the factor by which the eigenvector is scaled. <br/>
\\[
  Av = \lambda v, v \neq 0 \in \mathbb{R}^n
\\] <br/>
here \\(A\\) is a [transformation matrix](#transformation-matrix), \\(v\\) is an eigenvector, and \\(\lambda\\) is the eigenvalue corresponding to \\(v\\) <br/>

</div>


#### <span class="section-num">4.1.1</span> characteristic polynomial {#characteristic-polynomial}

<div class="definition">

considering the [formula]({{< relref "20220711175314-formula.md" >}}) \\(Av = \lambda v, v \neq 0 \in \mathbb{R}^n\\) from the definition of [eigenvalues and eigenvectors](#eigenvalues-and-eigenvectors): <br/>
\\[
  Av = \lambda v \implies Av - \lambda v = \vec0 \implies Av - \lambda I v = \vec0 \implies (A-\lambda I)v = \vec0 \land v \neq \vec0 \implies \infty \text{ solutions} \implies |A - \lambda I| = 0
\\] <br/>
we call \\(p(\lambda) = |A - \lambda I|\\) the **characteristic [polynomial]({{< relref "calculus2.md#polynomial" >}})** of \\(A\\) <br/>

</div>


#### <span class="section-num">4.1.2</span> eigenspace {#eigenspace}

<div class="definition">

an **eigenspace** is the set of [eigenvector](#eigenvalues-and-eigenvectors)s corresponding to the same [eigenvalue](#eigenvalues-and-eigenvectors), plus the zero vector. the [basis](#basis) of an eigenspace is called an **eigenbasis** <br/>

<div class="question">

given the matrix <br/>
\\[
  A = \begin{pmatrix} 1 & 1 & -1\\\ -1 & 3 & -1\\\ -1 & 1 & 1 \end{pmatrix}
\\] <br/>

<div class="subquestion">

find the [characteristic polynomial](#characteristic-polynomial) and the [eigenvalue](#eigenvalues-and-eigenvectors)s,[eigenvector](#eigenvalues-and-eigenvectors)s, and [eigenspace](#eigenspace)s of \\(A\\) <br/>

<div class="answer">

<div class="step">

\begin{gather\*}
  0 = |A - \lambda I| = \left|\begin{pmatrix} 1 & 1 & -1\\\ -1 & 3 & -1\\\ -1 & 1 & 1 \end{pmatrix} - \begin{pmatrix} \lambda & 0 & 0\\\ 0 & \lambda & 0\\\ 0 & 0 & \lambda \end{pmatrix}\right| = \left|\begin{pmatrix} 1-\lambda & 1 & -1\\\ -1 & 3-\lambda & -1\\\ -1 & 1 & 1-\lambda \end{pmatrix}\right|\\\\
  {(1-\lambda)}^2(3-\lambda) + 1 + 1 - \left(-1(1-\lambda)-1(1-\lambda)+(3-\lambda)\right) = 0\\\\
  p(\lambda) = -\lambda^3 + 5\lambda^2 - 8\lambda + 4
\end{gather\*}

</div>

<div class="step">

to find the [eigenvalue](#eigenvalues-and-eigenvectors)s first we need to find the roots of the characteristic polynomial <br/>

\begin{gather\*}
  -\lambda^3 + 5\lambda^2 - 8\lambda + 4 = 0\\\\
  \lambda = 1,2\\\\
  A - I\lambda = \begin{pmatrix} 1-\lambda & 1 & -1\\\ -1 & 3-\lambda & -1\\\ -1 & 1 & 1-\lambda \end{pmatrix}
\end{gather\*}

we substitute the eigenvalue \\(\lambda = 2\\) <br/>

\begin{align\*}
  \lambda = 2 &\implies \begin{pmatrix} 1-2 & 1 & -1\\\ -1 & 3-2 & -1\\\ -1 & 1 & 1-2 \end{pmatrix}\\\\
  &\implies \begin{pmatrix} 1 & -1 & 1\\\ 0 & 0 & 0\\\ 0 & 0 & 0 \end{pmatrix}\\\\
  &\implies x\_1 = x\_2 - x\_3\\\\
  &\implies (x\_1,x\_2,x\_3) = (x\_2-x\_3,x\_2,x\_3) = x\_2(1,1,0) + x\_3(-1,0,1)
\end{align\*}

the eigenvectors for the eigenvalue \\(\lambda = 2\\) are \\((-1,0,1),(1,1,0)\\), the eigenspace for \\(\lambda = 2\\) is \\(\spn\\{(1,1,0),(-1,0,1)\\}\\) of [dimension](#dimension) 2 <br/>
therefore \\(A\\) is a [diagonal matrix](#diagonalizable-matrix) <br/>
we substitute the eigenvalue \\(\lambda = 1\\): <br/>

\begin{gather\*}
  \lambda = 1 \implies \left(\begin{array}{ccc|c} 0 & 1 & -1 & 0\\\ -1 & 2 & -1 & 0\\\ -1 & 1 & 0 & 0 \end{array}\right) \implies \left(\begin{array}{ccc|c} 1 & 0 & -1 & 0\\\ 0 & 1 & -1 & 0\\\ 0 & 0 & 0 & 0 \end{array}\right)\\\\
  x\_1-x\_3=0 \implies x\_1=x\_3\\\\
  x\_2-x\_3=0 \implies x\_2=x\_3\\\\
  (x\_1,x\_2,x\_3) = (x\_3,x\_3,x\_3) = x\_3(1,1,1)
\end{gather\*}

for the eigenvalue \\(\lambda = 1\\), the eigenvector is \\((1,1,1)\\) and the eigenspace is \\(\spn\\{(1,1,1)\\}\\) of dimension 1 <br/>

</div>

</div>

</div>

<div class="subquestion">

find the [diagonal matrix](#diagonalizable-matrix) \\(T\\) of \\(A\\) <br/>

<div class="answer">

\\[
  T = \begin{pmatrix} 1 & 1 & 1\\\ 1 & 0 & 1\\\ 0 & -1 & 1 \end{pmatrix},\ T^{-1}AT = \begin{pmatrix} 2 & 0 & 0\\\ 0 & 2 & 0\\\ 0 & 0 & 1 \end{pmatrix}
\\] <br/>

</div>

</div>

<div class="subquestion">

find \\(A^{2020}\\) <br/>

<div class="answer">

\\[
  A^{2020} = T\begin{pmatrix} 2^{2020} & 0 & 0\\\ 0 & 2^{2020} & 0\\\ 0 & 0 & 1^{2020} \end{pmatrix}T^{-1}
\\] <br/>

</div>

</div>

</div>

<div class="question">

given the matrix <br/>
\\[
  A = \pmqty{-2 & 8 & 6\\\ -4 & 10 & 6\\\ 4 & -8 & -4}
\\] <br/>

<div class="subquestion">

find the [Characteristic polynomial](#characteristic-polynomial), the [eigenvalue](#eigenvalues-and-eigenvectors)s and the [eigenvector](#eigenvalues-and-eigenvectors)s of \\(A\\) <br/>

<div class="answer">

\begin{gather\*}
  0 = |A - \lambda I| = \left|\begin{pmatrix} -2 & 8 & 6\\\ -4 & 10 & 6\\\ 4 & -8 & -4 \end{pmatrix} - \begin{pmatrix} \lambda & 0 & 0\\\ 0 & \lambda & 0\\\ 0 & 0 & \lambda \end{pmatrix}\right| = \left|\begin{pmatrix} -2-\lambda & 8 & 6\\\ -4 & 10-\lambda & 6\\\ 4 & -8 & -4-\lambda \end{pmatrix}\right|\\\\
  0 = (-2-\lambda)(10-\lambda)(-4-\lambda)+192+192-(-32(-4\lambda)-48(-2\lambda)+24(10-\lambda))\\\\
  p(\lambda) = \lambda{(\lambda-2)}^2
\end{gather\*}

the [eigenvalue](#eigenvalues-and-eigenvectors)s are \\(\lambda = 2,2,0\\) <br/>
we substitute the eigenvalue \\(\lambda = 2\\): <br/>

\begin{gather\*}
  \lambda = 2 \implies \left(\begin{array}{ccc|c} -4 & 8 & 6 & 0\\\ -4 & 8 & 6 & 0\\\ 4 & -8 & -6 & 0 \end{array}\right) \implies \left(\begin{array}{ccc|c} 2 & -4 & -3 & 0\\\ 0 & 0 & 0 & 0\\\ 0 & 0 & 0 & 0 \end{array}\right)\\\\
  x\_2,x\_3 \text{ free variables}\\\\
  x\_1 = \frac{4x\_2+3x\_3}{2}\\\\
  (x\_1,x\_2,x\_3) = \left(\frac{4x\_2+3x\_3}{2},x\_2,x\_3\right) = x\_2(2,1,0) + x\_3\left(\frac{3}{2},0,1\right)
\end{gather\*}

the eigenvalue \\(\lambda = 2\\) has the corresponding eigenvectors \\((2,1,0),\left(\frac{3}{2},0,1\right)\\) and an eigenspace \\(\spn\\{(2,1,0),\left(\frac{3}{2},0,1\right)\\}\\) <br/>
we substitute the eigenvalue \\(\lambda = 0\\): <br/>

\begin{gather\*}
  \lambda = 0 \implies \begin{pmatrix} -2 & 8 & 6\\\ -4 & 10 & 6\\\ 4 & -8 & -4 \end{pmatrix} \implies \left(\begin{array}{ccc|c} 1 & 0 & 1 & 0\\\ 0 & 1 & 1 & 0\\\ 0 & 0 & 0 & 0 \end{array}\right)\\\\
  x\_3 \text{ free variable}\\\\
  x\_1 = -x\_3\\\\
  x\_2 = -x\_3\\\\
  (x\_1,x\_2,x\_3) = (-x\_3,-x\_3,x\_3) = x\_3(-1,-1,1)
\end{gather\*}

the eigenvalue \\(\lambda = 2\\) has the corresponding eigenvector \\((-1,-1,1)\\) and an eigenspace \\(\spn\\{(-1,-1,1)\\}\\) <br/>
and so \\(A\\) is [diagonalizable](#diagonalizable-matrix) because it has 3 [linearly independant](#linear-dependance) eigenvectors and 3 eigenvalues <br/>

</div>

</div>

<div class="subquestion">

find the [eigenbasis matrix](#diagonalizable-matrix) of \\(A\\) <br/>

<div class="answer">

\begin{gather\*}
  T = \pmqty{2 & \frac32 & -1\\\ 1 & 0 & -1\\\ 0 & 1 & 1}\\\\
  T^{-1}AT = \pmqty{2 & 0 & 0\\\ 0 & 2 & 0\\\ 0 & 0 & 0}
\end{gather\*}

</div>

</div>

<div class="subquestion">

find \\(A^{2020}\\) <br/>

<div class="answer">

\begin{gather\*}
  T^{-1}AT = \pmqty{2 & 0 & 0\\\ 0 & 2 & 0\\\ 0 & 0 & 0}\\\\
  A = T\pmqty{2 & 0 & 0\\\ 0 & 2 & 0\\\ 0 & 0 & 0}T^{-1}\\\\
  A^{2020} = T\pmqty{2^{2020} & 0 & 0\\\ 0 & 2^{2020} & 0\\\ 0 & 0 & 0}T^{-1}
\end{gather\*}

</div>

</div>

</div>

<div class="question">

given the matrix <br/>
\\[
A = \pmqty{1 & 2 & 1\\\ 0 & 1 & 3\\\ 2 & 7 & 11}
\\] <br/>

<div class="subquestion">

find the [characteristic polynomial](#characteristic-polynomial), the [eigenvalue](#eigenvalues-and-eigenvectors)s and the [eigenvector](#eigenvalues-and-eigenvectors)s of \\(A\\) <br/>

<div class="answer">

<div class="step">

find the characteristic polynomial <br/>

\begin{gather\*}
  p(\lambda) = \left|\pmqty{1 & 2 & 1\\\ 0 & 1 & 3\\\ 2 & 7 & 11} - \pmqty{\lambda & 0 & 0\\\ 0 & \lambda & 0\\\ 0 & 0 & \lambda}\right| = \left|\pmqty{1-\lambda & 2 & 1\\\ 0 & 1-\lambda & 3\\\ 2 & 7 & 11-\lambda}\right|\\\\
  p(\lambda) = -\lambda^3 + 13\lambda^2
\end{gather\*}

</div>

<div class="step">

find the eigenvalues <br/>

\begin{gather\*}
  0 = -\lambda^3 + 13\lambda^2\\\\
  0 = \lambda^2(13 - \lambda)\\\\
  \lambda = 13,0,0
\end{gather\*}

</div>

<div class="step">

find the eigenvectors/eigenspaces <br/>
for \\(\lambda = 13\\) <br/>

\begin{gather\*}
  A - I\lambda = 0\\\\
  \left(\begin{array}{ccc|c} 1-13 & 2 & 1 & 0\\\ 0 & -12 & 3 & 0\\\ 2 & 7 & -2 & 0 \end{array}\right) \implies \left(\begin{array}{ccc|c} 1 & 0 & -\frac18 & 0\\\ 0 & 1 & -\frac14 & 0\\\ 0 & 0 & 0 & 0 \end{array}\right)\\\\
  x = \frac18z\\\\
  y = \frac14z\\\\
  \bmqty{\frac{z}{8} \\\ \frac{z}{4} \\\ z} \implies z\bmqty{\frac{1}{8}\\\ \frac{1}{4}\\\ 1}
\end{gather\*}

so the eigenvalue \\(\lambda = 13\\) has the corresponding eigenvector \\(\bmqty{\frac{1}{8}\\\ \frac{1}{4}\\\ 1}\\) and an eigenspace \\(\spn\left(\left\\{\bmqty{\frac{1}{8}\\\ \frac{1}{4}\\\ 1}\right\\}\right)\\) <br/>
for \\(\lambda = 0\\) <br/>

\begin{gather\*}
  A - I\lambda = 0\\\\
  \bmqty{1 & 2 & 1\\\ 0 & 1 & 3\\\ 2 & 7 & 11} \implies \bmqty{1 & 0 & -5\\\ 0 & 1 & 3\\\ 0 & 0 & 0}\\\\
  x = 5z\\\\
  y = -3z\\\\
  \bmqty{5z\\\ -3z\\\ z} \implies z\bmqty{5\\\ -3\\\ 1}
\end{gather\*}

so the eigenvalue \\(\lambda = 0\\) has the corresponding eigenvector \\(\bmqty{5\\\ -3\\\ 1}\\) and an eigenspace \\(\spn\left(\left\\{\bmqty{5\\\ -3\\\ 1}\right\\}\right)\\) <br/>

</div>

</div>

</div>

<div class="subquestion">

find the [eigenbasis matrix](#diagonalizable-matrix) of \\(A\\) <br/>

<div class="answer">

\\(A\\) isnt [diagonalizable](#diagonalizable-matrix) so there isnt an eigenbasis matrix <br/>

</div>

</div>

</div>

</div>


### <span class="section-num">4.2</span> linear map composition {#linear-map-composition}

remember that [linear map](#linear-map)s are just [function]({{< relref "discrete_maths2.md#function" >}})s, so they can be [composed]({{< relref "discrete_maths2.md#composition" >}}) <br/>

<div class="characteristic">

let \\(S,T,U\\) be [linear space](#vector-space)s, let \\(f:S\to T, g:T\to U\\) be functions, if \\(f\\) and \\(g\\) are linear maps, then also the composite transformation \\(g\circ f:S\to U\\) is a linear map and its [transformation matrix](#transformation-matrix) is equal to the matrix of \\(f\\) multiplied by the matrix of \\(g\\) correspondingly <&statlect_linear_map_composition> <br/>

</div>


### <span class="section-num">4.3</span> linear isomorphism {#linear-isomorphism}