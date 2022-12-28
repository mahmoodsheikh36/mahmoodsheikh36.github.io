+++
title = "boolean algebra"
author = ["mahmood"]
description = "boolean algebra course"
date = 2022-12-28T12:33:00+02:00
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

a variable can only be \\(x \in \\{0, 1\\}\\) <br/>


## <span class="section-num">1</span> AND {#and}

AND is a [binary operation]({{< relref "20221219005229-binary_operation.md" >}}) <br/>

\begin{gather\*}
  \begin{cases}
    0 + 0 = 0\\\\
    0 + 1 = 1\\\\
    1 + 0 = 1\\\\
    1 + 1 = 1
  \end{cases}
\end{gather\*}


## <span class="section-num">2</span> OR {#or}

**OR** is a [binary operation]({{< relref "20221219005229-binary_operation.md" >}}) <br/>

\begin{gather\*}
  \begin{cases}
    0 \cdot 0 = 0\\\\
    0 \cdot 1 = 0\\\\
    1 \cdot 0 = 0\\\\
    1 \cdot 1 = 1
  \end{cases}
\end{gather\*}


## <span class="section-num">3</span> NOT {#not}

**NOT** is a [unary operation]({{< relref "20221219005258-unary_operation.md" >}}) <br/>

\begin{gather\*}
  \begin{cases}
    0' = 1\\\\
    1' = 0\\\\
  \end{cases}
\end{gather\*}

all of these expressions are equal: \\(\lnot x,\overline x,x'\\) <br/>


## <span class="section-num">4</span> basic properties of boolean algebra {#basic-properties-of-boolean-algebra}


### <span class="section-num">4.1</span> Idempotency {#idempotency}

<div class="lemma">

\begin{gather\*}
  \begin{cases}
    x + x = x\\\\
    x \cdot x = x
  \end{cases}
\end{gather\*}

</div>


### <span class="section-num">4.2</span> identity {#identity}

<div class="lemma">

\begin{gather\*}
  \begin{cases}
    A \cdot 1 = A\\\\
    A + 0 = A
  \end{cases}
\end{gather\*}

</div>


### <span class="section-num">4.3</span> annulment {#annulment}

<div class="lemma">

\begin{gather\*}
  \begin{cases}
    A \cdot 0 = 0\\\\
    A + 1 = 1
  \end{cases}
\end{gather\*}

</div>


### <span class="section-num">4.4</span> commutative {#commutative}

<div class="lemma">

\begin{gather\*}
  \begin{cases}
    x + y = y + x\\\\
    x \cdot y = y \cdot x
  \end{cases}
\end{gather\*}

</div>


### <span class="section-num">4.5</span> associativity {#associativity}

<div class="lemma">

\begin{gather\*}
  \begin{cases}
    (x + y) + z = x + (y + z)\\\\
    (x \cdot y) \cdot z = x \cdot (y \cdot z)\\\\
  \end{cases}
\end{gather\*}

</div>


### <span class="section-num">4.6</span> complement {#complement}

<div class="lemma">

\begin{gather\*}
  \begin{cases}
    x + x' = 1\\\\
    x \cdot x' = 0
  \end{cases}
\end{gather\*}

</div>


### <span class="section-num">4.7</span> distributivity {#distributivity}

<div class="lemma">

\begin{gather\*}
  \begin{cases}
    x \cdot (y + z) = x \cdot y + x \cdot z\\\\
    x + y \cdot z = (x + y) \cdot (x + z)
  \end{cases}
\end{gather\*}

</div>


### <span class="section-num">4.8</span> absorption 1 {#absorption-1}

<div class="lemma">

\begin{gather\*}
  \begin{cases}
    x + x \cdot y = x\\\\
    x \cdot (x + y) = x
  \end{cases}
\end{gather\*}

<div class="proof">

\begin{align\*}
  x + x \cdot y &= x \cdot 1 + x \cdot y\\\\
                &= x(1 + y)\\\\
                &= x \cdot 1\\\\
                &= x
\end{align\*}

\begin{align\*}
  x \cdot (x + y) &= (x + 0)(x + y)\\\\
                  &= x + 0 \cdot y\\\\
                  &= x + 0\\\\
                  &= x
\end{align\*}

</div>

</div>


### <span class="section-num">4.9</span> absorption 2 {#absorption-2}

<div class="lemma">

\begin{gather\*}
  \begin{cases}
    x + x' \cdot y = x + y\\\\
    x \cdot (x' + y) = x \cdot y
  \end{cases}
\end{gather\*}

<div class="proof">

\begin{align\*}
  x + x' \cdot y &= (x + x') \cdot (x + y)\\\\
                 &= 1 \cdot (x + y)\\\\
                 &= x + y
\end{align\*}

</div>

</div>


### <span class="section-num">4.10</span> consensus {#consensus}

<div class="lemma">

\begin{gather\*}
  \begin{cases}
    x \cdot y + x' \cdot z + y \cdot z = x \cdot y + x' \cdot z\\\\
    (x + y)(x' + z)(y + z) = (x + y)(x' + z)
  \end{cases}
\end{gather\*}

<div class="proof">

\begin{align\*}
  x \cdot y + x' \cdot z + y \cdot z &= x \cdot y + x' \cdot z + y \cdot z \cdot 1\\\\
                                     &= x \cdot y + x' \cdot z + y \cdot z \cdot (x + x')\\\\
                                     &= xy + x'z + yzx + yzx'\\\\
                                     &= xy(1 + z) + x'z(1 + y)\\\\
                                     &= xy + x'z
\end{align\*}

</div>

</div>


### <span class="section-num">4.11</span> De Morgan {#de-morgan}

<div class="lemma">

<div class="note">

not sure yet what the 4th formula refers to <br/>

</div>

\begin{gather\*}
  \begin{cases}
    \overline{(\overline{x})} = x\\\\
    \overline{(x + y)} = \overline{x} \cdot \overline{y}\\\\
    \overline{(xy)} = \overline{x} + \overline{y}\\\\
    [T(x\_1, x\_2, \cdots, x\_n, 0, 1, +, \bullet)]' = T(x\_1', x\_2', \cdots, x\_n', 1, 0, \bullet, +)
  \end{cases}
\end{gather\*}

</div>


## <span class="section-num">5</span> switching expression {#switching-expression}

<div class="definition">

a **switching expression** is a finite combination of switching variables and the operations [AND](#and),[OR](#or),[NOT](#not) <br/>

<div class="characteristic">

a combination of switching expressions results in a switching expression, so if \\(T\_1\\) and \\(T\_2\\) are both switching expressions then \\(T\_1' + T\_2\\) is also a switching expression <br/>

</div>

<div class="my_example">

an example of simplifying a switching expression <br/>

\begin{align\*}
  T(x, y, z) &= x'y'z + yz + xz\\\\
             &= z(x'y' + y + x) & \text{distributive property}\\\\
             &= z(x' + y + x) & \text{absorption 2 property}\\\\
             &= z(1 + y) & \text{complement property}\\\\
             &= z \cdot 1 & \text{annulment property}\\\\
             &= z & \text{identity property}
\end{align\*}

</div>

<div class="my_example">

\begin{align\*}
  T(x, y, z) &= (x + y)[x'(y' + z')]' + x'y' + x'z'\\\\
             &= (x + y)[x + (y' + z')'] + x'y' + x'z'\\\\
             &= (x + y)[x + yz] + x'y' + x'z'\\\\
             &= x + yz + x'y' + x'z'\\\\
             &= x + yz + y' + x'z'\\\\
             &= x + yz + y' + z'\\\\
             &= x + z + y' + z'\\\\
             &= x + 1 + y'\\\\
             &= 1\\\\
\end{align\*}

</div>

</div>


## <span class="section-num">6</span> switching function {#switching-function}

a function \\(f(x\_1, x\_2, \cdots, x\_n)\\) that outputs only \\(1\\) or \\(0\\) for any combination of variables it receives <br/>
\\(f\\) can only output \\(2^n\\) different values <br/>

<div class="my_example">

| \\(x\_1, \cdots, x\_n\\) | \\(f(x\_1, \cdots, x\_n)\\) | \\(f\_1\\) | \\(f\_2\\) |
|--------------------------|-----------------------------|------------|------------|
| \\(0, \cdots, 0\\)       | \\(f(0, \cdots, 0)\\)       | \\(1\\)    | \\(0\\)    |
| \\(0, \cdots, 1\\)       | \\(f(0, \cdots, 1)\\)       | \\(0\\)    | \\(0\\)    |
| \\(0, \cdots, 10\\)      | \\(f(0, \cdots, 10)\\)      | \\(0\\)    | \\(1\\)    |
| \\(1,1,1, \cdots, 10\\)  | \\(f(1,1,1, \cdots, 0)\\)   | \\(0\\)    | \\(1\\)    |
| \\(1,1,1, \cdots, 1\\)   | \\(f(1,1,1, \cdots, 1)\\)   | \\(1\\)    | \\(1\\)    |

</div>

the number of possible functions for \\(n\\) variables is \\({2^2}^n\\) <br/>
the complement of \\(f\\), written as \\(f'\\), is the function that outputs the value 1 wherever \\(f\\) outputs 0 <br/>
\\(f+g\\) is the sum of both functions \\(g\\) and \\(f\\), \\(f + g = 1\\) if and only if atleast one of both functions gives \\(1\\) for a given combination <br/>
\\(f \cdot g\\) is the multiplication of both functinos, for a given combination, it gives 1 if and only if both functions give 1 for that specific combination <br/>

<div class="my_example">

| \\(x\_1\\) | \\(x\_2\\) | \\(x\_3\\) | \\(f\\) | \\(f'\\) | \\(g\\) | \\(f + g\\) | \\(f \cdot g\\) |
|------------|------------|------------|---------|----------|---------|-------------|-----------------|
| \\(0\\)    | \\(0\\)    | \\(0\\)    | \\(0\\) | \\(1\\)  | \\(1\\) | \\(1\\)     | \\(0\\)         |
| \\(0\\)    | \\(0\\)    | \\(1\\)    | \\(1\\) | \\(0\\)  | \\(1\\) | \\(1\\)     | \\(1\\)         |
| \\(0\\)    | \\(1\\)    | \\(0\\)    | \\(1\\) | \\(0\\)  | \\(0\\) | \\(1\\)     | \\(0\\)         |
| \\(0\\)    | \\(1\\)    | \\(1\\)    | \\(0\\) | \\(1\\)  | \\(0\\) | \\(0\\)     | \\(0\\)         |
| \\(1\\)    | \\(0\\)    | \\(0\\)    | \\(1\\) | \\(0\\)  | \\(1\\) | \\(1\\)     | \\(1\\)         |
| \\(1\\)    | \\(0\\)    | \\(1\\)    | \\(0\\) | \\(1\\)  | \\(0\\) | \\(0\\)     | \\(0\\)         |
| \\(1\\)    | \\(1\\)    | \\(0\\)    | \\(1\\) | \\(0\\)  | \\(0\\) | \\(1\\)     | \\(0\\)         |
| \\(1\\)    | \\(1\\)    | \\(1\\)    | \\(0\\) | \\(1\\)  | \\(1\\) | \\(1\\)     | \\(0\\)         |

</div>

given \\(f\\) and \\(g\\) are switching functions with \\(n\\) variables, we say \\(f\\) covers g and write \\(g \subseteq f\\) if <br/>
\\[
  g(x\_1, \cdots, x\_n) = 1 \implies f(x\_1, \cdots, x\_n) = 1
\\] <br/>
if \\(g \subseteq f\\) and \\(g\\) is a multiplication of variables then \\(g\\) is called an _implicant_ of \\(f\\) and we write \\(g \rightarrow f\\) <br/>

<div class="lemma">

\\(g \subseteq h + g\\) <br/>

<div class="proof">

\begin{gather\*}
  g = 1 \Rightarrow g + h = 1\\\\
  g \cdot h = 1 \Rightarrow g = 1
\end{gather\*}

</div>

</div>

<div class="lemma">

if \\(g \subseteq f\\) and \\(f \subseteq g\\) then \\(f = g\\) <br/>

<div class="proof">

\\[
  g = 1 \Leftrightarrow f = 1
\\] <br/>

</div>

</div>

<div class="lemma">

\\(g + h \subseteq\\) if and only if \\(g \subseteq f\\) and \\(h \subseteq f\\) <br/>

<div class="proof">

1st side, assume \\(g \subseteq f\\) and \\(h \subseteq f\\), we need to prove \\(g + h \subseteq f\\) <br/>
assume that \\(g + h = 1\\), then \\(g = 1\\) is a consequence of \\(g \subseteq f\\) that \\(f = 1\\), and \\(h = 1\\) is a consequence of \\(h \subseteq f\\) so that \\(f = 1\\), and so \\(g + h \subseteq f\\) <br/>
2nd side, assume that \\(g + h \subseteq f\\) <br/>
if \\(g = 1\\) then \\(g + h = 1\\) and so \\(f = 1\\) and so \\(g \subseteq f\\) <br/>
if \\(h = 1\\) then \\(g + h = 1\\) and so \\(f = 1\\) and so \\(h \subseteq f\\) <br/>

</div>

</div>


### <span class="section-num">6.1</span> minterm {#minterm}

<div class="definition">

an expression that is a series of multiplications that contain the variables \\(x\_1, \cdots, x\_n\\) of a function \\(f(x\_1, x\_2, \cdots, x\_n)\\) is called a **minterm** <br/>

</div>


### <span class="section-num">6.2</span> maxterm {#maxterm}

<div class="definition">

an expression that is a series of additions that that contain the variables \\(x\_1, \cdots, x\_n\\) of a function \\(f(x\_1, x\_2, \cdots, x\_n)\\) is called a **maxterm** <br/>

</div>


### <span class="section-num">6.3</span> DNF {#dnf}

<div class="definition">

when a function is written as a sum of products we get what is called as **Disjunctive Normal Form** <br/>

</div>


### <span class="section-num">6.4</span> GNF {#gnf}

<div class="definition">

when a function is written as a product of sums we get what is called as **Conjunctive Normal Form** <br/>

</div>


### <span class="section-num">6.5</span> finding the switching expressions of a switching function {#finding-the-switching-expressions-of-a-switching-function}

we write a truth table for the function and for each row we write a minterm or a maxterm depending on whether the function outputs 1 or 0, respectively <br/>

|   | x | y | z | f | [minterm](#minterm)s | [maxterm](#maxterm)s |
|---|---|---|---|---|----------------------|----------------------|
| 0 | 0 | 0 | 0 | 1 | \\(x'y'z'\\)         |                      |
| 1 | 0 | 0 | 1 | 0 |                      | \\(x+y+z'\\)         |
| 2 | 0 | 1 | 0 | 1 | \\(x'yz'\\)          |                      |
| 3 | 0 | 1 | 1 | 1 | \\(x'yz\\)           |                      |
| 4 | 1 | 0 | 0 | 0 |                      | \\(x'+y+z\\)         |
| 5 | 1 | 0 | 1 | 0 |                      | \\(x'+y+z'\\)        |
| 6 | 1 | 1 | 0 | 1 | \\(xyz'\\)           |                      |
| 7 | 1 | 1 | 1 | 1 | \\(xyz\\)            |                      |

\\(f(x, y, z) = \sum(0,2,3,6,7) = x'y'z' + x'yz' + x'yz' + xyz' + xyz \longrightarrow\\) sum of products, [DNF](#dnf) <br/>
\\(f(x, y, z) = \Pi(1,4,5) = (x+y+z')(x'+y+z)(x'+y+z') \longrightarrow\\) product of sums, [GNF](#gnf) <br/>


### <span class="section-num">6.6</span> prime implicant {#prime-implicant}

a multiplication expression \\(p\\) is called a **Prime implicant** of a [switching function](#switching-function) \\(f\\) if: <br/>

1.  \\(p \rightarrow f\\) (\\(f\\) covers \\(p\\) or \\(p\\) is an implicant of \\(f\\)) <br/>
2.  deletion of every literal in \\(p\\) results in product that isnt covered by \\(f\\) meaning \\(p\_1, NOT \rightarrow f\\) (there is atleast one combination where \\(p\_1 = 0\\) but \\(f = 0\\)) <br/>

in the last example \\(h = x'y\\) is a prime implicant of \\(f\\) because \\(x'\\) and \\(y\\) are implicants of \\(f\\), \\(k\\) isnt a prime implicant of \\(f\\) <br/>
the removal of \\(z\\), \\(x'yz\\) turns into \\(x'y\\) which is still an implicant of \\(f\\) <br/>
the removal of \\(y \rightarrow x'z\\) implicant of \\(f\\) <br/>
the removal of \\(x' \rightarrow yz\\) implicant of \\(f\\) <br/>

<div class="lemma">

every sum of products that isnt minimizable that equals \\(f\\) is a sum of prime implicants of \\(f\\) <br/>

<div class="proof">

assume in contradiction that there is a sum of products that isnt minimizable that equals \\(f\\) and contains the product \\(\varphi\\) that isnt a prime implicant of \\(f\\) <br/>
assume \\(f = g + \varphi\\), in case of the sum where \\(\varphi = 1\\) and \\(f = 1\\) and so \\(\varphi \rightarrow f\\), in case that \\(\varphi\\) isnt a prime implicant then its possible to remove from \\(\varphi\\) atleast 1 literal so that we get \\(\varphi\_0\\) so that \\(\varphi\_0 \rightarrow f\\) <br/>
also \\(\varphi \rightarrow \varphi\_0\\) in case \\(\varphi\\) is a product of literals that \\(\varphi\_0\\) is a part of <br/>
..... <br/>

</div>

</div>


### <span class="section-num">6.7</span> essential prime implicant {#essential-prime-implicant}

from previous theorems <br/>

1.  a minimal switching expression of a function is the sum of its _Prime Implicants_ <br/>
2.  _Prime Implicants_ correspond to squares in the Karnaugh map that arent a part of bigger squares <br/>

<span class="underline">question</span>: which _Prime Implicants_ exist in the minimal switching expression <br/>
<span class="underline">definition</span>: a product of literals \\(P\\) is called an _Essential Prime Implicant_ of the function \\(f\\) if: <br/>

1.  \\(P\\) is a _Prime Implicant_ of \\(f\\) <br/>
2.  \\(P\\) covers atleast a minterm of \\(f\\) that cant be covered by another _Prime Implicant_ <br/>
3.  <span class="underline">note</span>: a minimal switching expression has to contain all the possible _EPI's_ (_Essential Prime Implicants_) <br/>


### <span class="section-num">6.8</span> the process of finding a minimal switching expression of a switching function {#the-process-of-finding-a-minimal-switching-expression-of-a-switching-function}

given the [switching function](#switching-function) \\(f\\) <br/>

-   find all the [prime implicant](#prime-implicant)s of \\(f\\) <br/>
-   from the list of prime implicants, find the [essential prime implicant](#essential-prime-implicant)s and put them in an expression <br/>
-   remove from the list of _PI_ all the _EPI_'s and all the _PI_'s that are covered by _EPI_'s <br/>
-   if the set of _EPI_'s covers \\(f\\), then we're done, otherwise, choose more _PI_'s so that \\(f\\) is entirely covered by the resulting set of _PI_'s but make sure to pick a minimal number of _PI_'s to do the job, and make sure to pick the _PI_'s with the least number of literals <br/>

<div class="note">

this isnt a definite solution for the problem but its enough for functions with a small number of literals <br/>

</div>

using karnaugh maps we can apply this process <br/>

{{< figure src="/ox-hugo/cqS6PbM.svg" >}} <br/>

{{< figure src="/ox-hugo/nixxAs4.svg" >}} <br/>

by finding rectangles whose area is a power of 2 in these tables we would be finding minterms and the least amount of rectangles we can find would give us the minimal form we're looking for <br/>

<div class="my_example">

\begin{gather\*}
  f(w,x,y,z) = \sum(4,5,8,12,13,14,15)\\\\
  f = xy' + wx + wy'z'
\end{gather\*}

{{< figure src="/ox-hugo/dQOeJio.svg" caption="<span class=\"figure-number\">Figure 1: </span>_Prime implicants_: \\(x\bar{y}\bar{z}, wx, x\bar{y}\\), all of them are _EPI_" >}} <br/>

</div>

<div class="my_example">

\begin{gather\*}
  f(x,y,z) = \sum(0,2,3,4,5,7)
\end{gather\*}

{{< figure src="/ox-hugo/96j2WfN.svg" caption="<span class=\"figure-number\">Figure 2: </span>_Prime Implicants_: \\(\bar{x}\bar{z}, \bar{x}y, yz, xz, x\bar{y}, \bar{y}\bar{z}\\)" >}} <br/>

none of these _PI_'s are _EPI_ and all of them are the same size <br/>
this function has 2 minimal forms <br/>
\\(f(x,y,z) = \bar{x}y + xz + \bar{y}\bar{z}\\) <br/>
\\(f(x,y,z) = \bar{x}\bar{z} + yz + x\bar{y}\\) <br/>

</div>


### <span class="section-num">6.9</span> _Don't care_ combinations {#don-t-care-combinations}

**Don't care** is a value of a function we get for a combination of values for the variables that isnt defined, and therefore can be either \\(1\\) or \\(0\\) <br/>
the symbol of the value _Don't care_ is \\(\phi\\), its allowed to switch the value \\(\phi\\) with either \\(1\\) or \\(0\\) according to our needs, this is useful when finding the minimal form of a switching function <br/>


### <span class="section-num">6.10</span> map expressions {#map-expressions}

the usage of map exxpressions allows us to describe a function with more than \\(n\\) variables using a karnaugh map with \\(n\\) variables <br/>

<span class="underline">definition</span>: a map expression is a switching expression that appears in the map and that isnt \\(0\\), \\(1\\) or \\(\phi\\) <br/>


## <span class="section-num">7</span> functional completeness {#functional-completeness}

<div class="definition">

a set of operations forms a **functionally complete** system if every switching function can be described as a switching expression that only contains operations from the given set <br/>

<div class="my_example">

for example \\(\\{\lnot, +\\}\\) is functionally complete because \\(x \cdot y = (x'+y')'\\) and in every switching expression where we have \\(x \cdot y\\) we can replace with \\(\lnot(\lnot x + \lnot y)\\) <br/>

</div>

<div class="my_example">

\\(\\{\cdot, \lnot\\}\\) is also functionally complete <br/>

</div>

<div class="lemma">

a functionally complete system consisting of only 1 function returns the complement of a variable if all its passed to all its inputs, and the complement is true, as in a system that doesnt abide by this rule isnt functionally complete <br/>

<div class="my_example">

given the completely functional system \\(\\{f(x,y,z,w)\\}\\), according to this rule, \\(f(x,x,x,x) = \overline{x}\\) <br/>

</div>

<div class="my_example">

take the functionally complete operation _NOR_, we pass \\(x\\) to all its inputs and we get \\(\overline{x}\\): <br/>
\\[ x \downarrow x = \overline{x} \cdot \overline{x} = \overline{x} \\] <br/>

</div>

</div>

<div class="lemma">

one way to prove that a set of operations is completely functional is by describing all the operations of a set that is already known to be functional using the operations in the set we have <br/>

<div class="my_example">

proof of NOR's functional completeness using the already functionally complete set \\(\\{\lnot, +\\}\\): <br/>

\begin{gather\*}
  x \downarrow x = x' \cdot x' = x'\\\\
  (x \downarrow y) \downarrow (x \downarrow y) = (x' \cdot y')' \cdot (x' \cdot y')' = (x + y)(x + y) = (x + y)\\\\
  ((x + y)' + (x + y)')' = (x'y' + x'y')' = (x'y')' \cdot (x'y')' = (x+y)(x+y) = (x+y)
\end{gather\*}

</div>

</div>

</div>


### <span class="section-num">7.1</span> list of systems known to be functionally complete {#list-of-systems-known-to-be-functionally-complete}

-   \\(\\{+, \cdot, \lnot\\}\\) <br/>
-   \\(\\{+, \lnot\\}\\) <br/>
-   \\(\\{\cdot, \lnot\\}\\), because \\(x + y = \overline{(\bar{x} \cdot \bar{y})}\\) <br/>
-   _NOR_: \\(x \downarrow y = \overline{x} \cdot \overline{y} = \overline{(x + y)}\\) <br/>
-   _NAND_: \\(x \uparrow y = \overline{x} + \overline{y} = \overline{(xy)}\\) <br/>


### <span class="section-num">7.2</span> partial functional completeness {#partial-functional-completeness}

a system of operations is partially functionally complete when a set of operations is combined with \\(0\\) and \\(1\\) or both to provide funcitonal completeness <br/>


## <span class="section-num">8</span> Shannon's law {#shannon-s-law}

<div class="definition">

for every switching function \\(f(x\_1, \cdots, x\_n)\\) we get: <br/>

\begin{align\*}
  f(x\_1, \cdots, x\_n) &= x\_1 \cdot f(1, x\_2, \cdots, x\_n) + x\_1' \cdots f(0, x\_2, \cdots, x\_n)\\\\
  f(x\_1, \cdots, x\_n) &= [x\_1 + f(0, x\_2, \cdots, x\_n)] \cdot [x\_1' + f(1, x\_2, \cdots, x\_n)]
\end{align\*}

<div class="characteristic">

this law helps us move between [DNF](#dnf) and [GNF](#gnf) forms without looking at the truth table of a function <br/>

</div>

<div class="my_example">

\begin{align\*}
  f(x, y, z) &= y'xz + y'z'x' + xz\\\\
             &= x(y'1z + y'z'1' + 1z) + x'(y'0z + y'z'0' + 0z)\\\\
             &= x(y'z + y'z'0 + z) + x'(0 + y'z' + 0)\\\\
             &= x(y'z + z) + x'(y'z')
\end{align\*}

</div>

</div>


## <span class="section-num">9</span> XOR {#xor}

| \\(x\\) | \\(y\\) | \\(x \oplus y\\) |
|---------|---------|------------------|
| 0       | 0       | 0                |
| 0       | 1       | 1                |
| 1       | 0       | 1                |
| 1       | 1       | 0                |

<div class="characteristic">

\begin{align}
  A \oplus B &= B \oplus A & \text{commutative}\\\\
  (A \oplus B) \oplus C &= A \oplus (B \oplus C) & \text{associative}\\\\
  A \bullet (B \oplus C) &= (AB) \oplus (AC) & \text{distributive}\\\\
  A \oplus \bar{A} &= 1,\ A \oplus 1 = \bar{A},\ A \oplus 0 = A\\\\
  \overline{A \oplus B} &= 1 \text{ only if } A = B
\end{align}

</div>

<div class="characteristic">

if \\(A \oplus B = C\\) then: <br/>

\begin{align\*}
  A \oplus C &= A \oplus (A \oplus B) = (A \oplus A) \oplus B = B\\\\
  B \oplus C &= B \oplus (A \oplus B) = (B \oplus B) \oplus A = A\\\\
  A \oplus B \oplus C &= A \oplus B \oplus (A \oplus B) = 0
\end{align\*}

</div>


## <span class="section-num">10</span> logic gate {#logic-gate}


### <span class="section-num">10.1</span> AND gate {#and-gate}

\\[
  t = a \bullet b
\\] <br/>

{{< figure src="/ox-hugo/bKKN1Bx.svg" >}} <br/>


### <span class="section-num">10.2</span> OR gate {#or-gate}

\\[
  t = a + b + c
\\] <br/>

{{< figure src="/ox-hugo/JEh5DG2.svg" >}} <br/>


### <span class="section-num">10.3</span> NAND gate {#nand-gate}

\\[
  t = \overline{(a \bullet b \bullet c)}
\\] <br/>

{{< figure src="/ox-hugo/cINGfRg.svg" >}} <br/>


### <span class="section-num">10.4</span> NOR gate {#nor-gate}

\\[
  t = \overline{(a + b)}
\\] <br/>

{{< figure src="/ox-hugo/g8ASPWI.svg" >}} <br/>


### <span class="section-num">10.5</span> XOR gate {#xor-gate}

\\[
  t = a \oplus b
\\] <br/>

{{< figure src="/ox-hugo/FLVi83R.svg" >}} <br/>


### <span class="section-num">10.6</span> NOT gate {#not-gate}

\\[
  b = \overline{a}
\\] <br/>

{{< figure src="/ox-hugo/f4X1VZI.svg" >}} <br/>


## <span class="section-num">11</span> logic circuit {#logic-circuit}

a combination of logical gates to represent a more complex switching function is called a logical circuit or a switching circuit <br/>

the variables of the function are called the _inputs_ of the circuit and the output of the function is the _exit_ of the circuit <br/>

the exit of a logical circuit depends only on the current combination of values of its input <br/>

\\[
  A = T \bullet (H + W) + \overline{W} \bullet P
\\] <br/>

{{< figure src="/ox-hugo/PCw1P6a.svg" >}} <br/>


### <span class="section-num">11.1</span> Digital abstraction {#digital-abstraction}

how do we represent the values \\(0\\) and \\(1\\) using a digital logic circuits? <br/>

on one side the logic circuits have only 2 variables, voltage and time and they can have any value in a given range <br/>

and on the other side, boolean algebra has only 2 values which are the constants \\(0\\) and \\(1\\) <br/>

the <span class="underline">solution</span>: <br/>

-   voltage represents logical value, for example, a high voltage represents \\(1\\) and a low voltage represents \\(0\\), other voltages, for example a voltage between \`\`high'' and \`\`low'' are defined as not represnting of logical values <br/>
-   sometimes, it is agreed upon that the output of a circuit represents the value of the switching function, other times its agreed upon that it doesnt <br/>


#### <span class="section-num">11.1.1</span> Logical levels {#logical-levels}

the two logical values \\(0\\) and \\(1\\) are represented in _Electronic circuits_ using logical levels. <br/>

an electronic circuit receives electrical energy from a power supply like a battery, the power supply is the high voltage _Vplus_ and the low voltage is called _Vminus_ <br/>

the levels of voltages denoted \\(v\\) in a circuit is limited in the range \\(Vminus \leq v \leq Vplus\\), the amplitude of voltages is defined as \\(\Delta{v} = Vplus - Vminus\\) <br/>

as an example: <br/>

\begin{align\*}
  Vplus - 0.2\Delta{v} &= 4volt \leq v \leq 5volt = Vplus & \text{represents logical $1$}\\\\
  Vminus &= 0volt \leq v \leq 1volt = Vminus + 0.2\Delta{v} & \text{represents logical $0$}
\end{align\*}

