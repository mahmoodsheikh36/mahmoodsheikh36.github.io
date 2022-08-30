+++
title = "discrete math"
author = ["mahmood"]
description = "discrete math"
date = 2022-06-20T16:11:00+03:00
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

<style>
.lemma, .proof, .entailment, .definition, .note, .my_example, .characteristic, .assumption, .question, .subquestion, .answer, .step {
  border-radius: 10px;
  box-shadow: 10px 10px 15px rgba(0,0,0,.1);
  padding: 2px;
  border: 1px black solid;
}
.lemma:before, .proof:before, .entailment:before, .definition:before, .note:before, .my_example:before, .characteristic:before, .assumption:before, .question:before, .subquestion:before, .answer:before, .step:before {
  background-color: #bbb;
  position: relative;
  border-radius: 10px;
  padding-right: 5px;
  padding-left: 5px;
  padding-top: 1px;
  padding-bottom: 1px;
  border: 1px solid black;
}
.lemma {
  background-color: beige;
}
.proof {
  background-color: moccasin;
}
.entailment {
  background-color: lightsteelblue;
}
.lemma:before {
  content: "lemma:";
}
.proof:before {
  content: "proof:";
}
.entailment:before {
  content: "entailment (logical consequence):";
}
.note {
  background-color: blanchedalmond;
}
.note:before {
  /* content: url(/note.png) "note:"; */
  content: "note:";
}
.my_example {
  background-color: #e8cfc8; 
}
.my_example:before {
  content: "example:";
}
p {
  margin: 0px;
  padding: 0px;
}
img {
   display: block;
   margin-left: auto;
   margin-right: auto;
}
.hide {
  display: none;
}
.definition {
  background-color: snow;
}
.definition:before {
  content: "definition:";
}
.characteristic {
  background-color: #dfdada;
}
.characteristic:before {
  content: "characteristic:";
}
.assumption {
  background-color: #65ad98;
}
.question {
  background-color: #e1c6c6;
}
.question:before {
  content: "question:";
}
.subquestion {
  background-color: #e5e2d8;
}
.subquestion:before {
  content: "subquestion:";
}
.answer {
  background-color: #beabc5;
}
.answer:before {
  content: "answer:";
}
.step {
  background-color: #b4d3ad;
}
.step:before {
  content: "step:";
}
</style>

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
        nextElem = elem.nextElementSibling
        if (nextElem !== null && nextElem.tagName === 'BR')
            nextElem.remove()
    }
}
window.onload = function() {
  removeNewlineAfterDisplayMath()
}
</script>
<script type="text/javascript" id="MathJax-script" defer src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js">
</script>


## <span class="section-num">1</span> set {#set}


### <span class="section-num">1.1</span> disjoint sets {#disjoint-sets}

<div class="definition">

two [set](#set)s are said to be **disjoint sets** if they have no element in common <br/>

</div>


### <span class="section-num">1.2</span> multiset {#multiset}

<div class="definition">

a **multiset** is a modification of the concept of a set that, unlike a set, allows for multiple instances for each of its elements. the number of instances given for each element is called the multiplicity of that element in the multiset <br/>

</div>


## <span class="section-num">2</span> ordered pair {#ordered-pair}

<div class="definition">

given \\(a, b\\) are mathematical objects, \\((a,b)\\) is an [ordered pair](#ordered-pair), \\((a,b) \neq (b,a)\\), as an example, the \\((x,y)\\) coordinates on a function is an ordered pair <br/>

</div>


## <span class="section-num">3</span> cartesian product {#cartesian-product}

<div class="definition">

[cartesian product](#cartesian-product) of 2 [set](#set)s is the set of all the possible [ordered pair](#ordered-pair)s that can be obtained by taking an element from \\(A\\) as the first in the [pair](#ordered-pair) and an element from \\(B\\) as the second <br/>

\begin{gather\*}
  A \times B = \\{(a,b) \ | \ a \in A \land b \in B\\}\\\\
  (a,b) \in A \times B \Leftrightarrow a \in A \land b \in B
\end{gather\*}

<div class="my_example">

assume \\(A=\\{a,b,c\\},B=\\{1,2\\}\\) <br/>
\\[
  A \times B = \left\\{\left(c, 1\right), \left(b, 2\right), \left(a, 1\right), \left(b, 1\right), \left(c, 2\right), \left(a, 2\right)\right\\}\\\\
\\] <br/>

</div>

<div class="my_example">

\\[
  A \times \varnothing = \varnothing = \varnothing \times A
\\] <br/>

</div>

<div class="my_example">

the cartesian product of \\(\\{A\_k\\}\_{k=1\ldots n}\\) where \\(2 \leq n\\) is: <br/>
\\[
  A\_1 \times A\_2 \times \ldots A\_n = \\{(a\_1, a\_2, \ldots, a\_n) \ | \ a\_k \in A\_k, 1 \leq k \leq n\\}
\\] <br/>

</div>

<div class="my_example">

assume \\(A\_1 = \\{a,b\\}, A\_2 = \\{1,2\\}, A\_3 = \\{x\\}\\) <br/>
\\[
  A\_1 \times A\_2 \times A\_3 = \left\\{\left(b, 1, x\right), \left(b, 2, x\right), \left(a, 1, x\right), \left(a, 2, x\right)\right\\}
\\] <br/>

</div>

<div class="characteristic">

power: <br/>

\begin{align\*}
  A^2 &= A \times A\\\\
  A^3 &= A \times A \times A\\\\
  &\ \ \vdots\\\\
  A^n &= \underbrace{A \times A \times \ldots \times A}\_{n \text{ times}}\\\\
\end{align\*}

</div>

<div class="lemma">

\\(A \times B = B \times A \Leftrightarrow A = \varnothing\\) or \\(B = \varnothing\\) or \\(A = B\\) <br/>

<div class="proof">

\\(\Rightarrow\\) assume \\(A = \varnothing\\) or \\(B = \varnothing\\) or \\(A = B\\) <br/>
need to prove: \\(A \times B = B \times A\\) <br/>
we split into cases: <br/>
case 1: assume \\(A = \varnothing\\) <br/>

\begin{align\*}
  A &= \varnothing\\\\
  \varnothing \times B &= \varnothing\\\\
  B \times \varnothing &= \varnothing
\end{align\*}

case 2: assume \\(B = \varnothing\\), same as \\(A = \varnothing\\) <br/>
case 3: assume \\(A = B\\) <br/>

\begin{align\*}
  A \times B = B \times B\\\\
  B \times A = B \times B
\end{align\*}

\\(\Rightarrow\\) assume \\(B \times A = A \times B\\) <br/>
need to prove: \\(A = \varnothing\\) or \\(B = \varnothing\\) or \\(A = B\\) <br/>
we assume in contradiction that \\(A \neq \varnothing\\) and \\(B \neq \varnothing\\) and \\(A \neq B\\) <br/>
\\(A \neq B \Rightarrow\\) exists an \\(x\\) so that \\(x \in A\\) and \\(x \not \in B\\) or there exists an \\(x\\) so that \\(x \not \in A\\) and \\(x \in B\\) <br/>
we split into cases: <br/>
case 1: there exists an \\(x\\) so that \\(x \in B\\) and \\(x \not \in A\\) <br/>
\\(A \neq \varnothing \Rightarrow\\) exists \\(a\\) so that \\(a \in A\\) <br/>
\\(B = \varnothing\\) and there exists an \\(x\\) so that \\(x \in B\\) and \\(x \not \in A\\) <br/>
\\(\Rightarrow\\) there exists \\(b\\) so that \\(b \in B\\) and \\(b \not \in A\\) <br/>
\\((a,b) \in A \times B\\) <br/>
\\((a,b) \not \in B \times A\\) <br/>
\\(\Rightarrow A \times B \neq B \times A\\) <br/>
case 2: there exists \\(x\\) so that \\(x \not \in B\\) and \\(x \in A\\), a similar path to the previous case <br/>
we arrived at a contradiction so the theorem is true <br/>

</div>

</div>

</div>


## <span class="section-num">4</span> relation {#relation}

<div class="definition">

assuming \\(A\\) and \\(B\\) are sets, if \\(R \subseteq A \times B\\) then \\(R\\) is a **relation** from \\(A\\) to \\(B\\) <br/>

<div class="my_example">

\begin{gather\*}
  A = \\{a,b,c\\}\\\\
  B = \\{1,2\\}\\\\
  R = \left\\{\left(b, 1\right), \left(b, 2\right), \left(a, 1\right)\right\\} \subseteq A \times B
\end{gather\*}

</div>

</div>


### <span class="section-num">4.1</span> binary relation {#binary-relation}

<div class="definition">

a [relation](#relation) \\(R\\) is a [binary relation](#binary-relation) if \\(R \subseteq A \times A\\) over the field \\(A\\) <br/>

<div class="my_example">

\begin{gather\*}
  A = \\{a,b,c\\}\\\\
  R = \left\\{\left(a, c\right), \left(a, b\right), \left(a, a\right)\right\\} \subseteq A \times A = A^2
\end{gather\*}

</div>

</div>


#### <span class="section-num">4.1.1</span> reflexive relation {#reflexive-relation}

<div class="definition">

let \\(R\\) be a relation over set \\(A\ (R \subseteq A \times A)\\) <br/>
we say \\(R\\) is reflexive if for every \\(a \in A\\) its true that \\((a,a) \in R\\) (or we can write \\(aRa\\)) <br/>

<div class="my_example">

\begin{gather\*}
  A = \\{1,2,3\\}\\\\
  R = \\{(1,1),(2,2),(3,3),(1,2)\\} \in A^2
\end{gather\*}

</div>

<div class="entailment">

\\(R \subseteq A \times A\\) isnt reflexive \\(\Leftrightarrow\\) there exists \\(a \in A\\) so that \\((a,a) \not \in R\\) <br/>

</div>

<div class="entailment">

matrices that represent reflexive relations are always in echelon form, e.g.: <br/>

\\[\left[\begin{array}{rrrrrrr} 1 & 0 & 0 & 0 & 0 & 0 & 0 \\\ 0 & 1 & 0 & 0 & 0 & 0 & 0 \\\ 0 & 0 & 1 & 0 & 0 & 0 & 0 \\\ 0 & 0 & 0 & 1 & 0 & 0 & 0 \\\ 0 & 0 & 0 & 0 & 1 & 0 & 0 \\\ 0 & 0 & 0 & 0 & 0 & 1 & 0 \\\ 0 & 0 & 0 & 0 & 0 & 0 & 1 \end{array}\right]\\] <br/>

</div>

</div>


#### <span class="section-num">4.1.2</span> antireflexive relation {#antireflexive-relation}

<div class="definition">

let \\(R\\) be a relation over the set \\(A\\) (\\(R \subseteq A \times A\\)) <br/>
we say \\(R\\) is an **Antireflexive relation** if for all \\(a \in A\\) it is true that \\((a,a) \not \in R\\) <br/>

<div class="my_example">

\begin{gather\*}
  A = \\{1,2,3\\}\\\\
  R = \\{(1,2),(2,3),(3,2)\\} \subseteq A^2
\end{gather\*}

</div>

</div>


#### <span class="section-num">4.1.3</span> symmetric relation {#symmetric-relation}

<div class="definition">

let \\(R\\) be a relation over set \\(A\\) (\\(R \subseteq A \times A\\)) <br/>
a relation is symmetric if for each \\(a,b \in A\\), if \\((a,b) \in R\\) then \\((b,a) \in R\\) (if \\(aRb\\) then \\(bRa\\)) <br/>

<div class="my_example">

\begin{gather\*}
  A = \\{1,2,3\\}\\\\
  R = \\{(1,1),(2,3),(3,2),(2,2)\\}
\end{gather\*}

</div>

<div class="entailment">

\\(R \subseteq A^2\\) symmetric \\(\Leftrightarrow\\) there exists \\((a,b) \in R\\) so that \\((b,a) \not \in R\\) <br/>

</div>

<div class="entailment">

the matrix that represents such relations has the property \\(m\_{ij} = m\_{ji}\\), e.g. <br/>

\\[\left[\begin{array}{rrr} 0 & 1 & 0 \\\ 1 & 0 & 0 \\\ 0 & 0 & 0 \end{array}\right]\\] <br/>

</div>

</div>


#### <span class="section-num">4.1.4</span> antisymmetric relation {#antisymmetric-relation}

<div class="definition">

let \\(R\\) be a relation over set \\(A\\) (\\(R \subseteq A \times A\\)) <br/>
we say \\(R\\) is an _Antisymmetric relation_ if for each \\(a,b \in A\\), if \\((a,b) \in R\\) and \\((b,a) \in R\\) then \\(a=b\\) <br/>

<div class="my_example">

<br/>

\begin{gather\*}
  A = \\{1,2,3\\}\\\\
  R = \\{(1,1),(2,2),(1,3)\\} \subseteq A^2
\end{gather\*}

</div>

<div class="entailment">

\\(R \subseteq A^2 \Leftrightarrow\\) there exist \\((a,b) \in R\\) and \\((b,a) \in R\\) so that \\(a \neq b\\) <br/>

</div>

</div>


#### <span class="section-num">4.1.5</span> transitive relation {#transitive-relation}

<div class="definition">

let \\(R\\) be a relation over set \\(A\\) (\\(R \subseteq A \times A\\)) <br/>
\\(R\\) is a **Transitive relation** if for every \\(a,b,c \in A\\), if \\((a,b) \in R\\) and \\((b,c) \in R\\) then \\((a,c) \in R\\) <br/>

<div class="my_example">

\begin{gather\*}
  A = \\{1,2,3\\}\\\\
  R = \\{(1,2),(2,3),(1,3),(2,2)\\} \subseteq A^2
\end{gather\*}

</div>

<div class="entailment">

\\(R \subseteq A^2\\) isnt transitive \\(\Leftrightarrow\\) there exist \\((a,b) \in R\\) and \\((b,c) \in R\\) so that \\((a,c) \not \in R\\) <br/>

</div>

</div>


#### <span class="section-num">4.1.6</span> equivalence relation {#equivalence-relation}

<div class="definition">

let \\(R\\) be a [relation](#relation) over the [set](#set) \\(A\\), meaning \\(R \subseteq A \times A\\) <br/>
\\(R\\) is an **[Equivalence relation](#equivalence-relation)** over \\(A\\) if \\(R\\) is [reflexive](#reflexive-relation), [symmetric](#symmetric-relation) and [transitive](#transitive-relation) <br/>

<div class="my_example">

\begin{gather\*}
  A = \\{1,2,3,4,5\\}\\\\
  R = \\{(1,1),(2,2),(3,3),(4,4),(5,5),(1,2),(2,1),(3,4),(4,3)\\}
\end{gather\*}

here \\(R\\) is [reflexive](#reflexive-relation), [antisymmetric](#symmetric-relation) and [transitive](#antisymmetric-relation) so it is an [equivalence relation](#equivalence-relation) <br/>

</div>

<div class="my_example">

let \\(A = \\{1,2,\pi,\sqrt2,\sqrt8\\},\ R = \\{(x,y) \mid x,y \in A \land \frac{x}{y} \in \mathbb{Q}\\}\\) <br/>
first we check for [reflexivity](#reflexive-relation): <br/>
let \\(x \in A\\) then we know \\(\frac{x}{x} = 1 \in \mathbb{Q}\\) and therefore \\((x,x) \in R\\) and therefore \\(R\\) is reflexive <br/>
second we check for [symmetry](#symmetric-relation): <br/>
let \\(x,y \in A\\) so that \\((x,y) \in R\\) and therefore by definition of \\(R\\) we know \\(\frac{x}{y} = \mathbb{Q}\\), but only because \\(\frac{x}{y} \in \mathbb{Q}\\) doesnt mean \\(\frac{y}{x} \in \mathbb{Q}\\) because x might be 0, but we know \\(\frac{x}{y} \neq 0\\) because \\(0 \not \in A\\) therefore \\(\dfrac{y}{x} \in R\\) therefore by definition of \\(R\\) we get \\((y,x) \in \mathbb{R}\\) therefore \\(R\\) is [symmetric](#symmetric-relation) <br/>
third we check for [transitivity](#transitive-relation): <br/>
let \\(x,y,z \in A\\) such that \\((x,y),(y,z) \in R\\) therefore by definition of the [relation](#relation) \\(R\\) we get \\(\frac{x}{y},\frac{y}{z} \in Q\\) and we know \\(\frac{x}{y} \cdot \frac{y}{z} = \frac{x}{z}\\) therefore by definition of \\(R\\) we get \\((x,z) \in R\\) therefore \\(R\\) is [transitive](#transitive-relation) <br/>
therefore \\(R\\) is an [equivalence relation](#equivalence-relation) <br/>

</div>

</div>


#### <span class="section-num">4.1.7</span> equivalence class {#equivalence-class}

<div class="definition">

for every \\(a \in A\\) where \\(A\\) is a non-empty [set](#set) and \\(R \subseteq A \times A\\), an **Equivalence class** of \\(a\\) is the [set](#set): <br/>
\\[
  [a] = \\{x \mid x \in A \land (x,a) \in R\\}
\\] <br/>

<div class="my_example">

\begin{gather\*}
  A = \\{1,2,3,4,5\\}\\\\
  R = \\{(1,1),(2,2),(3,3),(4,4),(5,5),(1,2),(2,1),(3,4),(4,3)\\}\\\\
  [1] = \\{1,2\\}\\\\
  [2] = \\{2,1\\}\\\\
  [3] = \\{3,4\\}\\\\
  [4] = \\{4,3\\}\\\\
  [5] = \\{5\\}
\end{gather\*}

since those are sets, unlike an ordered pair the order of the numbers in sets doesnt matter so \\(\\{2,1\\} = \\{1,2\\}\\), and so we get: <br/>

\begin{gather\*}
  [1] = [2] = \\{1,2\\}\\\\
  [3] = [4] = \\{3,4\\}\\\\
  [5] = \\{5\\}
\end{gather\*}

</div>

<div class="my_example">

consider the sets from a previous example: <br/>

\begin{gather\*}
  A = \\{1,2,\pi,\sqrt2,\sqrt8\\}\\\\
  R = \left\\{(x,y) \ \middle| \ x,y \in A \land \frac{x}{y} \in \mathbb{Q}\right\\}
\end{gather\*}

we get: <br/>

\begin{gather\*}
  [1] = \\{x \mid x \in A \land (x,1) \in R\\} = \\{1,2\\} = [2]\\\\
  [\pi] = \\{x \mid x \in A \land (x,\pi) \in R\\} = \\{\pi\\}\\\\
  [\sqrt2] = \\{x \mid x \in A \land (x,\sqrt2) \in R\\} = \\{\sqrt2,\sqrt8\\} = [\sqrt8]
\end{gather\*}

</div>

</div>


#### <span class="section-num">4.1.8</span> quotient set {#quotient-set}

<div class="definition">

a [Quotient set](#quotient-set) is the [set](#set) of all the [equivalence class](#equivalence-class)es of a given [equivalence relation](#equivalence-relation), if \\(A\\) is a [set](#set) and \\(R\\) is an [equivalence relation](#equivalence-relation) over \\(A\\), the Quotient set is denoted by \\(A/R\\) <br/>
\\[
  A / R = \\{[a] \mid a \in A\\}
\\] <br/>

<div class="my_example">

\begin{gather\*}
  A = \\{1,2,3,4,5\\}\\\\
  R = \\{(1,1),(2,2),(3,3),(4,4),(5,5),(1,2),(2,1),(3,4),(4,3)\\}\\\\
  A/R = \\{[a] \mid a \in A\\} = \\{[1],[2],[3],[4],[5]\\} = \\{\\{1,2\\},\\{3,4\\},\\{5\\}\\}
\end{gather\*}

</div>

<div class="my_example">

consider the sets from a previous example: <br/>

\begin{gather\*}
  A = \\{1,2,\pi,\sqrt2,\sqrt8\\}\\\\
  R = \left\\{(x,y) \ \middle| \ x,y \in A \land \frac{x}{y} \in \mathbb{Q}\right\\}
\end{gather\*}

the Quotient set is: <br/>
\\[
  A/R = \\{[1],[\pi],[\sqrt2]\\}
\\] <br/>

</div>

</div>


#### <span class="section-num">4.1.9</span> partition {#partition}

<div class="definition">

let \\(A\\) be a non-empty set and \\(\Omega = \\{S\_i \mid i \in I\\} \subseteq P(A)\\) (a family of subsets of \\(A\\)) <br/>

if the following conditions are met: <br/>

1.  \\(S\_i \neq \varnothing\\) for every \\(i \in I\\) (meaning every \\(S\_i\\) in \\(\Omega\\) isnt empty) <br/>
2.  \\(S\_i \cap S\_j = \varnothing\\) for every \\(i,j \in I\\) where \\(i \neq j\\) (every 2 sets of \\(\Omega\\) are different) <br/>
3.  \\(\cup \\{S\_I \mid i \in I\\} = A\\) (\\(A\\) is equal to the union of all the sets of \\(\Omega\\)) <br/>

then \\(\Omega\\) is a **[Partition](#partition)** of \\(A\\) <br/>

<div class="my_example">

consider \\(A = \\{1,2,3,4,5\\}\\) and \\(\Omega = \\{\\{1,2\\},\\{3,4\\},\\{5\\}\\}\\) <br/>
let \\(I = \\{1,3,5\\},\ S\_1=\\{1,2\\},\ S\_3=\\{3,4\\},\ S\_5=\\{5\\}\\) <br/>
we check if the set \\(\Omega\\) matches the conditions <br/>

1.  \\(S\_i \neq \varnothing\\) for every \\(i \in I\\), this checks out because \\(S\_1 \neq \varnothing,\ S\_2 \neq \varnothing,\ S\_3 \neq \varnothing\\) <br/>
2.  \\(S\_i \cap S\_j = \varnothing\\) for every \\(i,j \in I\\) where \\(i \neq j\\), this checks out because none of \\(S\_1,\ S\_2,\ S\_3\\) have any common elements <br/>
3.  \\(\cup \\{S\_I \mid i \in I\\} = A\\), this checks out because \\(S\_1 \cup S\_2 \cup S\_3 = \\{1,2,3,4,5\\}\\) <br/>

therefore \\(\Omega\\) is a partition of \\(A\\) <br/>

</div>

<div class="lemma">

if \\(R\\) is an equivalence relation over \\(A\\) then the Quotient set \\(A/R\\) is a partition of \\(A\\) <br/>

</div>

<div class="lemma">

if \\(\Omega = \\{S\_i \mid i \in I\\}\\) is a partition of \\(A\\) then the relation \\(R \subseteq A \times A\\) that is defined as: <br/>
\\[
  xRy \Leftrightarrow (\exists S\_i \in \Omega)[x,y \in S\_i]
\\] <br/>
is an equivalence relation in \\(A\\) and \\(A/R = \Omega\\) <br/>

</div>

</div>


#### <span class="section-num">4.1.10</span> floor {#floor}

<div class="definition">

for every \\(2 \le n \in \mathbb{N}\\) and \\(m \in \mathbb{Z}\\) there exists a single pair \\(q,r \in \mathbb{Z}\\) such that \\(m = n \cdot q + r\\) where \\(0 \leq r \leq n-1\\) <br/>
\\(q = \lfloor m/n \rfloor\\) is called the **quotient** and \\(r = m(\bmod n)\\) is called the **remainder** <br/>

<div class="my_example">

m = 25, n = 7 <br/>
25 = 7 &sdot; 3 + 4 <br/>
here the quotient is 3 and the remainder is \\(25(\bmod 7) = 4\\) <br/>

</div>

<div class="my_example">

m = -15, n = 7 <br/>
-15 = 7 &sdot; -3 + 6 <br/>
here the quotient is -3 and the remainder is \\(-15(\bmod 7) = 6\\) <br/>

</div>

<div class="lemma">

let \\(2 \leq n \in \mathbb{N}\\) and \\(a,b \in \mathbb{Z}\\) then: <br/>
\\[
  a(\bmod n) = b(\bmod n) \Leftrightarrow n|(a-b)
\\] <br/>

</div>

<div class="lemma">

the relation \\(R \subseteq \mathbb{Z} \times \mathbb{Z}\\) that is defined as: <br/>
\\[
  a(\bmod n) = b(\bmod n) \Leftrightarrow aRb
\\] <br/>
which means \\(aRb \Leftrightarrow n|(a-b)\\) is an equivalence relation in \\(\mathbb{Z}\\) <br/>

</div>

<div class="lemma">

the quotient set of the relation \\(R \subseteq \mathbb{Z} \times \mathbb{Z}\\) thats defined as: <br/>
\\[
  aRb \Leftrightarrow a(\bmod n) = b(\bmod n)
\\] <br/>
is: <br/>
\\[
  Z/R = \\{[0],[1],\ldots,[n-1]\\}
\\] <br/>
when: <br/>
\\[
  [j] = \\{a \mid a(\bmod n) = j\\}
\\] <br/>

</div>

</div>


### <span class="section-num">4.2</span> inverse relation {#inverse-relation}

<div class="definition">

let \\(R \subseteq A \times B\\) <br/>
the [inverse relation](#inverse-relation) of \\(R\\) is \\(R^{-1} \subseteq B \times A\\) so that: <br/>
\\[ (a,b) \in R \Leftrightarrow (b,a) \in R^{-1} \\] <br/>

<div class="my_example">

<br/>

\begin{gather\*}
  A = \\{a,b,c,d,e\\}\\\\
  B = \\{1,2,3,4\\}\\\\
  R = \\{(a,1),(b,1),(b,2),(c,3),(a,3)\\} \subseteq A \times B\\\\
  R^{-1} = \\{(b,a) \in B \times A \ | \ (a,b) \in R\\} = \\{(1,a),(1,b),(2,b),(3,c),(3,a)\\} \subseteq B \times A
\end{gather\*}

</div>

</div>


### <span class="section-num">4.3</span> relation equality {#relation-equality}

<div class="definition">

the relations <br/>
\\[ R\_1 \subseteq A\_1 \times B\_1,\ R\_2 \subseteq A\_2 \times B\_2 \\] <br/>
are equal if: <br/>
\\[ A\_1 = A\_2, B\_1 = B\_2, R\_1 = R\_2 \\] <br/>

<div class="my_example">

of the following 4 sets, only the last 2 are equal <br/>

\begin{align\*}
  R\_1 = \\{(a,1),(b,2)\\} \subseteq \\{a,b\\} \times \\{1,2,3\\}\\\\
  R\_2 = \\{(a,1),(b,2)\\} \subseteq \\{a,b\\} \times \\{1,2\\}\\\\
  R\_3 = \\{(a,1),(b,2)\\} \subseteq \\{a,b,c\\} \times \\{1,2\\}\\\\
  R\_4 = \\{(b,2),(a,1)\\} \subseteq \\{a,b,c\\} \times \\{1,2\\}
\end{align\*}

</div>

</div>


### <span class="section-num">4.4</span> relation composition {#relation-composition}

<div class="definition">

let \\(A,B,C\\) be non-empty sets, \\(R \subseteq A \times B, S \subseteq B \times C\\) <br/>
the relation from \\(A\\) to \\(C\\) is written as \\(R \circ S \subseteq A \times C\\) <br/>
defined as: <br/>
\\[ (a,c) \in R \circ S \Leftrightarrow \text{there exists } b \in B \text{ so that } (a,b) \in R \text{ and } (b,c) \in S \\] <br/>

<div class="lemma">

let \\(R \subseteq A \times B,\ S \subseteq B \times C,\ T \subseteq C \times D\\) <br/>
\\[
  (R \circ S) \circ T = R \circ (S \circ T)
\\] <br/>

<div class="proof">

\begin{align\*}
  (a,d) \in (R \circ S) \circ T &\Leftrightarrow (\exists c \in C) \left[ (a,c) \in R \circ S \land (c,d) \in T \right]\\\\
  &\Leftrightarrow (\exists c \in C)[(\exists b \in B)[(a,b) \in R \land (b,c) \in S] \land (c,d) \in T]\\\\
  &\Leftrightarrow (\exists c \in C,\ b \in B)[(a,b) \in R \land (b,c) \in S \land (c,d) \in T]\\\\
  &\Leftrightarrow (\exists b \in B)[(a,b) \in R \land (\exists c \in C)[(b,c) \in S \land (c,d) \in T]]\\\\
  &\Leftrightarrow (\exists b \in B)[(a,b) \in R \land [(b,d) \in S \circ T]]\\\\
  &\Leftrightarrow (\exists b \in B)[(a,b) \in R \land (b,d) \in S \circ T]\\\\
  &\Leftrightarrow (a,d) \in R \circ (S \circ T)
\end{align\*}

</div>

</div>

<div class="lemma">

let \\(R \subseteq A \times B, S \subseteq B \times C, T \subseteq C \times D\\) <br/>
\\[
  {(R \circ S)}^{-1} = S^{-1} \circ R^{-1}
\\] <br/>

<div class="proof">

\begin{align\*}
  (c,a) \in {(R \circ S)}^{-1} &\Leftrightarrow (a,c) \in (R \circ S)\\\\
  &\Leftrightarrow (\exists b \in B)[(a,b) \in R \land (b,c) \in S]\\\\
  &\Leftrightarrow (\exists b \in B)[(b,a) \in R^{-1} \land (c,b) \in S^{-1}]\\\\
  &\Leftrightarrow (\exists b \in B)[(c,b) \in S^{-1} \land (b,a) \in R^{-1}]\\\\
  &\Leftrightarrow (c,a) \in S^{-1} \circ R^{-1}
\end{align\*}

</div>

</div>

</div>


## <span class="section-num">5</span> function {#function}

a function is assumed [total](#total-function) unless stated otherwise ([partial](#partial-function)) <br/>


### <span class="section-num">5.1</span> single-valued relation {#single-valued-relation}

<div class="definition">

let \\(R \subseteq A \times B\\), we say \\(R\\) is an **single-valued relation** if for every \\(a \in A\\) there exists at most a single \\(b \in B\\) such that \\((a,b) \in R\\) <br/>

<div class="my_example">

\begin{gather\*}
  A = \\{a,b,c\\}\\\\
  B = \\{1,2,3,4\\}\\\\
  R = \\{(a,1),(b,1),(b,2),(c,3),(a,3)\\} \subseteq A \times B
\end{gather\*}

{{< figure src="/ox-hugo/vAVPZR.png" >}} <br/>

this relation isnt single-valued because some \\(a \in A\\) have more than 1 corresponding \\(b \in B\\) <br/>

</div>

<div class="my_example">

\begin{gather\*}
  A = \\{a,b,c\\}\\\\
  B = \\{1,2,3,4\\}\\\\
  R = \\{(a,1),(b,3)\\} \subseteq A \times B
\end{gather\*}

this relation is single-valued <br/>

</div>

</div>


### <span class="section-num">5.2</span> partial function {#partial-function}

<div class="definition">

let \\(A,B\\) be non-empty [set](#set)s and let \\(f \subseteq A \times B\\) be a [relation](#relation) from \\(A\\) to \\(B\\) <br/>
we say \\(f\\) is a **partial function** from \\(A\\) to \\(B\\) if \\(f\\) is [single-valued](#single-valued-relation) meaning that for every \\(x \in A\\) there exists **at most** a single \\(y \in B\\) such that \\((x,y) \in f\\) <br/>

<div class="my_example">

\begin{gather\*}
  A = \\{a,b,c\\}\\\\
  B = \\{1,2,3,4\\}\\\\
  f\_3 = \\{(a,1),(b,3),(c,1)\\} \subseteq A \times B\\\\
\end{gather\*}

</div>

</div>


### <span class="section-num">5.3</span> total function {#total-function}

<div class="definition">

let \\(A,B\\) be non-empty [set](#set)s and let \\(f \subseteq A \times B\\) be a [relation](#relation) from \\(A\\) to \\(B\\) <br/>
we say \\(f\\) is a **total function** from \\(A\\) to \\(B\\) if for every \\(x \in A\\) there exists a single \\(y \in B\\) such that \\((x,y) \in f\\), we write \\(f: A \to B\\) and \\(f(x) = y\\) instead of \\((x,y) \in f\\) <br/>

<div class="note">

note that \\(\dom f = A\\) is a necessary condition for \\(f\\) to be **total** <br/>

</div>

<div class="my_example">

consider \\(f: \mathbb{R} \rightarrow \mathbb{R}\\) defined as \\(f(x) = \frac{1}{x}\\) <br/>
this function isnt defined at \\(x = 0\\) therefore there is an \\(x\\) that doesnt have a corresponding \\(y\\) therefore this function isnt a total function but rather a [partial function](#partial-function) <br/>
it is however a total function if we were to take the domain minus the discontinuity, i.e. \\(f: \mathbb{R} - \\{0\\} \rightarrow \mathbb{R}\\) <br/>

</div>

</div>


### <span class="section-num">5.4</span> domain {#domain}

<div class="definition">

given a [function](#function) \\(f: A \to B\\), \\(A\\) is the **domain** of \\(f\\) <br/>

</div>


### <span class="section-num">5.5</span> range {#range}

<div class="definition">

given a [function](#function) \\(f: A \to B\\), \\(B\\) is the **range** of \\(f\\) (sometimes called **codomain**) <br/>

</div>


### <span class="section-num">5.6</span> image {#image}

<div class="definition">

assuming a [function](#function) \\(f: A \to B\\), \\(X \subseteq A,\ Y \subseteq B\\), if \\(f(X) = Y\\) then \\(Y\\) is called the **image** of \\(x\\) and \\(x\\) is an element of the **preimage** of \\(y\\) <br/>
\\(f(A)\\) is called the set of images: <br/>
\\[
  f(A) = Im(f) = \\{b \mid b \in B \land \exists a \in A, f(a) = b\\} \subseteq B
\\] <br/>
note that \\(A\\) here denotes the [domain](#domain) of the function <br/>

</div>


### <span class="section-num">5.7</span> equality of partial functions {#equality-of-partial-functions}

<div class="definition">

the functions \\(f: A\_1 \rightarrow B\_1,\ g: A\_2 \rightarrow B\_2\\) are equal if: <br/>
\\[
  (\forall x \in A\_1)[f(x) = g(x) \land B\_1=B\_2 \land A\_1 = A\_2]
\\] <br/>

<div class="my_example">

of the following functions only 2 are equal <br/>

\begin{gather\*}
  (\forall x \in \mathbb{R})[f\_1(x) = \sin x \land f\_1: R \rightarrow R] \ \checkmark\\\\
  (\forall x \in [0,2\pi))[f\_2(x) = \sin x \land f\_2: [0,2\pi) \rightarrow R]\\\\
  (\forall x \in [0,2\pi))[f\_3(x) = \sin x \land f\_3: [0,2\pi) \rightarrow [-1,1]]\\\\
  (\forall x \in \mathbb{R})[f\_4(x) = \sin(\pi - x) \land f\_4: \mathbb{R} \rightarrow \mathbb{R}] \ \checkmark
\end{gather\*}

</div>

</div>


### <span class="section-num">5.8</span> surjective function {#surjective-function}

<div class="definition">

let \\(f: A \rightarrow B\\) be a [function](#function) <br/>
\\(f\\) is **surjective** if for every \\(b \in B\\) there exists atleast a single \\(a \in A\\) such that \\(f(a) = b\\), which means \\(\img(f) = B\\) <br/>

<div class="characteristic">

its cool to think of a surjective function as one whose image is "stretched out" to fit its range <br/>

</div>

</div>


### <span class="section-num">5.9</span> injective function {#injective-function}

<div class="definition">

\\(f: A \rightarrow B\\) is called **injective** if for every \\(x\_1,x\_2 \in A\\) if \\(x\_1 \neq x\_2\\) then \\(f(x\_1) \neq f(x\_2)\\) <br/>
or, for every \\(f(x\_1),f(x\_2) \in B\\) if \\(f(x\_1) = f(x\_2)\\) then \\(x\_1 = x\_2\\) <br/>

<div class="note">

there is no relation between the injective characteristic and the [surjective](#surjective-function) characteristic <br/>

</div>

</div>


### <span class="section-num">5.10</span> identity function {#identity-function}

<div class="definition">

let \\(A\\) be a [set](#set) <br/>
the [function](#function) \\(I\_A: A \rightarrow A\\) which is defined as \\(I\_a(x) = x\\) for every \\(x \in A\\) is called the **identity map** of \\(A\\) <br/>

<div class="my_example">

\begin{gather\*}
  A = \\{a,b,c\\}\\\\
  (\forall x \in A)[I\_A(x) = x]
\end{gather\*}

</div>

<div class="characteristic">

the [identity function](#identity-function) is [invertible](#inverse-function) which makes it [total](#total-function), [surjective](#surjective-function) and [injective](#injective-function) <br/>

</div>

</div>


### <span class="section-num">5.11</span> characteristic function {#characteristic-function}

<div class="definition">

let \\(A\\) be a [set](#set) <br/>
the [function](#function) \\(f\_B: A \rightarrow \\{0,1\\}\\) that is defined for \\(B \subseteq A\\) <br/>
according to: <br/>
\\(f\_B(x) = 1\\) for every \\(x \in B\\) and \\(f\_B(x)=0\\) for every \\(x \neq B\\) <br/>
\\(f\_B\\) is called the **characteristic function** of \\(B\\) <br/>

<div class="my_example">

\begin{gather\*}
  A = \\{1,2,3,4,5\\}\\\\
  B = \\{1,4,5\\} \subseteq A\\\\
  f\_B(1) = 1\\\\
  f\_B(2) = 0\\\\
  f\_B(3) = 0\\\\
  f\_B(4) = 1\\\\
  f\_B(5) = 1
\end{gather\*}

</div>

</div>


### <span class="section-num">5.12</span> function composition {#function-composition}

<div class="definition">

consider 2 [function](#function)s \\(g:B \rightarrow C, f: A \rightarrow B\\) <br/>
the function from \\(A\\) to \\(C\\) that is denoted as \\(g \circ f: A \rightarrow C\\) when \\((g \circ f)(a) = g(f(a))\\) for all \\(a \in A\\), is called the **composite function** of \\(g\\) over \\(f\\) <br/>

<div class="my_example">

\begin{gather\*}
  f: R \rightarrow R,\ f(x) = 2x\\\\
  g: R \rightarrow R,\ g(x) = 3x+1\\\\
  g \circ f: R \rightarrow R\\\\
  (g \circ f)(x) = g(f(x)) = g(2x) = 3 \cdot (2x) + 1 = 6x + 1\\\\
  f \circ g: R \rightarrow R\\\\
  (f \circ g)(x) = f(g(x)) = 2 \cdot (3x+1) = 6x+2
\end{gather\*}

</div>

<div class="entailment">

\\(f \circ g\\) and \\(g \circ f\\) arent necessarily equal <br/>

</div>

<div class="characteristic">

associativity <br/>
if \\(h: C \rightarrow D,\ g: B \rightarrow C,\ f: A \rightarrow B\\) then this equality holds true: <br/>
\\[
  h \circ (g \circ f) = (h \circ g) \circ f
\\] <br/>
\\(h \circ (g \circ f): A \rightarrow D\\) <br/>
\\((h \circ g) \circ f: A \rightarrow D\\) <br/>

<div class="proof">

\\(f: A \rightarrow B,\ g: B \rightarrow C\\) are functions therefore \\(g \circ f: A \rightarrow C\\) is a function <br/>
\\(g: B \rightarrow C,\ h: C \rightarrow D\\) are functions therefore \\(h \circ g: B \rightarrow D\\) is a function <br/>
therefore \\(h \circ (g \circ f): A \rightarrow D\\) and \\((h \circ g) \circ f: A \rightarrow D\\) are functions and their domain and range are equal <br/>
let \\(a \in A\\), then: <br/>

\begin{align\*}
  ((h \circ g) \circ f)(a) &= (h \circ g)(f(a))\\\\
  &= h(g(f(a)))\\\\
  &= (h \circ (g \circ f))(a)\\\\
  &= h((g \circ f)(a))\\\\
  &= h(g(f(a)))\\\\
  &= ((h \circ g) \circ f)(a)\\\\
  &= (h \circ (g \circ f))(a)
\end{align\*}

</div>

</div>

<div class="lemma">

let \\(f: A \rightarrow B,\ g: B \rightarrow C\\) be functions: <br/>

1.  if \\(f,g\\) are [surjective](#surjective-function), then \\(g \circ f: A \rightarrow C\\) is [surjective](#surjective-function) <br/>
2.  if \\(f,g\\) are [injective](#injective-function), then \\(g \circ f: A \rightarrow C\\) is [injective](#injective-function) <br/>
3.  if \\(f,g\\) are [total](#total-function), then \\(g \circ f: A \rightarrow C\\) is [total](#total-function) <br/>

<div class="note">

\\(g \circ f\\) being [surjective](#surjective-function) or [injective](#injective-function) doesnt necessarily mean \\(g\\) or \\(f\\) are too <br/>

</div>

</div>

</div>


### <span class="section-num">5.13</span> inverse function {#inverse-function}

<div class="definition">

a [function](#function) \\(f: A \rightarrow B\\) is **invertible** if the [inverse relation](#inverse-relation) \\(f^{-1} \subseteq B \times A\\) is a function <br/>
meaning if for every \\(b \in B\\) there exists a single \\(a \in A\\) such that \\((b,a) \in f^{-1}\\) <br/>
meaning if for every \\(b \in B\\) there exists a single \\(a \in A\\) such that \\(f^{-1}(b) = a\\) <br/>
the function \\(f^{-1}\\) is called the **inverse function** of \\(f\\) <br/>

<div class="note">

an invertible function is also called **bijective** which is the more technically correct term for a [function](#function) that is both [surjective](#surjective-function) and [injective](#injective-function) <br/>

</div>

<div class="note">

because \\((b,a) \in f^{-1} \Longleftrightarrow (a,b) \in f\\), if \\(f\\) is invertible, then \\(f(a) = b \Longleftrightarrow f^{-1}(b) = a\\) <br/>

</div>

<div class="lemma">

let \\(f: A \rightarrow B\\) be a function <br/>
if \\(f\\) is invertible, then \\(f^{-1}\\) is invertible and \\({(f^{-1})}^{-1} = f\\) <br/>

</div>

<div class="lemma">

let \\(f: A \rightarrow B\\) be a function <br/>
\\(f\\) is invertible if and only if \\(f\\) is [total](#total-function), [surjective](#surjective-function) and [injective](#injective-function) <br/>

</div>

<div class="lemma">

if \\(f: A \rightarrow B,\ g: B \rightarrow C\\) are invertible functions then \\(g \circ f: A \rightarrow C\\) is invertible and \\({(g \circ f)}^{-1} = f^{-1} \circ g^{-1}\\) <br/>

</div>

<div class="lemma">

if \\(f: A \rightarrow B\\) is invertible then <br/>

\begin{gather\*}
  f \circ f^{-1} = I\_B\\\\
  f^{-1} \circ f = I\_A\\\\
\end{gather\*}

where \\(I\_A: A \rightarrow A\\) is the [identity function](#identity-function) of \\(A\\) and \\(I\_B: B \rightarrow B\\) is the [identity function](#identity-function) of \\(B\\) <br/>

<div class="note">

let \\(f: A \to B\\) then \\(f \circ I\_A = f,\ I\_B \circ f = f\\) <br/>

</div>

</div>

<div class="lemma">

the [composition](#function-composition) of invertible functions results in an invertible function <br/>

</div>

<div class="lemma" id="injective_surjective_lemma">

let \\(f:A \to A,g:A \to A\\) be [total functions](#total-function) <br/>
if \\(f \circ g\\) is [injective](#injective-function) then \\(g\\) is [injective](#injective-function) <br/>
if \\(g \circ f\\) is [surjective](#surjective-function) then \\(g\\) is [surjective](#surjective-function) <br/>
if \\(f \circ g\\) is [injective](#injective-function) **and** \\(g \circ f\\) is [surjective](#surjective-function) then \\(g,f,g \circ f,f \circ g\\) are all [invertible](#inverse-function) (what a life-saver that theorem is!) <br/>

</div>

<div class="lemma">

let \\(f:A \to A,\ g:A \to A\\) be [total functions](#total-function) <br/>

1.  if \\(f \circ g\\) is [injective](#injective-function) and \\(g\\) is [surjective](#surjective-function) then \\(f\\) is [injective](#injective-function) <br/>
2.  if \\(g \circ f\\) is [surjective](#surjective-function) and \\(g\\) is [injective](#injective-function) then \\(f\\) is [surjective](#surjective-function) <br/>

</div>

</div>


## <span class="section-num">6</span> combinatorics {#combinatorics}

{{< figure src="/ox-hugo/combinatorics.jpg" >}} <br/>

<div class="definition">

**combinatorics** is the theory of enumeration, where we look at elements of a set as options <br/>

<div class="lemma">

**rule of sum** <br/>
let \\(A,B\\) be [disjoint finite sets](#disjoint-sets), then \\(|A \cup B| = |A| + |B|\\) <br/>
in other words, if the set \\(A\\) had \\(n\\) elements (\\(n\\) options) and \\(B\\) had \\(m\\) elements (\\(m\\) options) such that \\(A \cap B = \varnothing\\) then there exist \\(n+m\\) total options to pick from \\(A \cup B\\) <br/>

<div class="entailment">

if \\(A,B\\) are finite sets such that \\(A \subseteq B\\), then \\(|B\textbackslash A| = |B|-|A|\\) <br/>

</div>

<div class="my_example">

if a nest had 5 red eggs numbered 1-5 and 3 blue eggs numbered 1-3, how many options do we have if we wanted to pick a single egg? <br/>
the answer is \\(5+3=8\\) because the eggs differ <br/>

</div>

<div class="note">

we use the **rule of sum** when we encounter the word **or** <br/>

</div>

</div>

<div class="lemma">

**rule of product** <br/>
if \\(A,B\\) be finite sets, then \\(|A \times B| = |A| \cdot |B|\\) <br/>
in other words, if \\(A\\) had \\(n\\) elements and \\(B\\) had \\(m\\) elements, then there exist \\(n \cdot m\\) options to pick a [pair](#ordered-pair) from \\(A \times B\\) <br/>

</div>

<div class="lemma">

let \\(A,B\\) be finite sets such that \\(R \subseteq A \times B\\) <br/>

1.  if there exists a natural number \\(s\\) such that \\((\forall a \in A)(\exists b \in B)[|\\{(a,b) \in \mathbb{R}\\}|=s]\\) then \\(|R| = |A| \cdot s\\) <br/>
2.  if there exists a natural number \\(t\\) such that \\((\forall b \in B)(\exists a \in A)[|\\{(a,b) \in \mathbb{R}\\}|=t]\\) then \\(|R| = t \cdot |B|\\) <br/>

</div>

<div class="lemma">

**extended rule of sum** <br/>
let \\(A\_1,A\_2\ldots A\_n\\) be [disjoint finite sets](#disjoint-sets), then \\(\left|\cup\_{i=1}^nA\_i\right| = \sum\_{i=1}^n|A\_i|\\) <br/>

<div class="entailment">

for every 2 finite sets \\(A,B\\), \\(|A\cup B| = |A|+|B|-|A\cap B|\\) <br/>

</div>

</div>

<div class="lemma">

**extended rule of product** <br/>
let \\(A\_1,A\_2\ldots A\_n\\) be finite sets, then \\(|A\_1\times A\_2\times \cdots A\_n|=\prod\_{i=1}^n|A\_i|\\) <br/>

<div class="entailment">

for every 2 finite sets \\(A,B\\), \\(|A\cup B| = |A|+|B|-|A\cap B|\\) <br/>

</div>

</div>

</div>


### <span class="section-num">6.1</span> selection {#selection}

this refers to selecting an option from a given [set](#set) of options <br/>


#### <span class="section-num">6.1.1</span> order {#order}

we say the order of [selection](#selection) matters when the position of the option we pick in the given set of options has an affect on the total number of possible [selection](#selection)s, conversely we say the order doesnt matter when it doesnt have such an affect <br/>

<div class="my_example">

when the order doesnt matter, the [permutation](#permutation)s `ABC` and `BCA` of the letters `A,B,C` is considered the same [permutation](#permutation), because the order doesnt matter <br/>

</div>


#### <span class="section-num">6.1.2</span> repetition {#repetition}

whether the the process of selection allows selecting a specific item multiple times which means the result would be a [multiset](#multiset) <br/>


### <span class="section-num">6.2</span> permutation {#permutation}

<div class="definition">

a **permutation** of a [set](#set) is an arrangement/rearrangement of its elements ([order](#order) matters) <br/>

<div class="lemma">

the number of permutations for a given set containing \\(n\\) elements is \\(P\_n = n!\\) <br/>

</div>

<div class="question">

assuming there are 3 girls and 4 boys, we want them seated on a bench <br/>

<div class="subquestion">

such that the 3 girls are next to each other <br/>

<div class="answer">

if it wasnt for the condition that the girls must be seated next to each other we would have \\(7!\\) permutations <br/>
since the girls are seated next to each other, its safe to look at the girls as a single element in a set of 5 such that each boy takes a seat and the fifth seat is reserved for a single girl, which means we have \\(5!\\) permutations for this set <br/>
now since the girls can switch places and it wouldnt break the condition, because they'd still be seated one next to the other, this property has \\(3!\\) permutations, so the total number of permutations for the seat is \\(5! \cdot 3!\\) <br/>

</div>

</div>

<div class="subquestion">

such that the 4 boys sit all next to one another <br/>

<div class="answer">

the permutations of the boys sitting next to each other is \\(4! \cdot 4!\\), because in total we'd have 3 girls and 1 boy (instead of 4), and the total permutations is \\(7!\\) so the answer is \\(7! - 4! \cdot 4!\\) <br/>

</div>

</div>

</div>

</div>


#### <span class="section-num">6.2.1</span> permutation with repetition {#permutation-with-repetition}

<div class="definition">

given \\(n\\) items and \\(k\\) types, \\(n\_1\\) of the first type, \\(n\_2\\) of the second type and so on.. such that \\(n=n\_1+n\_2+\cdots+n\_k\\), then the total number of possible [permutation](#permutation)s with \\(n\\) items is \\(P\_n(n\_1,n\_2\ldots n\_3) = \frac{n!}{n\_1! \cdot n\_2! \cdots n\_k!}\\) <br/>

</div>


#### <span class="section-num">6.2.2</span> circular permutation {#circular-permutation}

when the [permutation](#permutation)s are circular, the number of options becomes \\(P\_{n-1} = (n-1)!\\) <br/>


### <span class="section-num">6.3</span> variation {#variation}

<div class="definition">

**variation** is the result of selecting \\(k\\) items from a collection of \\(n\\) items such that (like [permutation](#permutation)s) the order of selection matters, the repetition of items is **not** allowed <br/>

<div class="lemma">

the number of variations is: \\(\frac{n!}{(n-k)!}\\) <br/>

</div>

<div class="question">

hwo many possibilities do we have to insert 10 differently colored balls into 15 cells such that every cell would have only 1 ball? <br/>

<div class="answer">

"differently colored balls" implies **order matters** <br/>
"every cell would have only 1 ball" implies **no repetitions** <br/>

\begin{gather\*}
  k=10,\ n=15\\\\
  \text{number of variations } = \frac{15!}{(15-10)!} = \frac{15!}{5!}
\end{gather\*}

</div>

</div>

</div>


#### <span class="section-num">6.3.1</span> variation with repetition {#variation-with-repetition}

<div class="definition">

a **[variation](#variation) with [repetition](#repetition)** is the result of selecting \\(k\\) items from a collection of \\(n\\) items such that the order of selection matters and the [repetition](#repetition) of items is allowed <br/>

<div class="lemma">

the number of [variation with repetition](#variation-with-repetition) items is \\(n^k\\) <br/>

</div>

</div>


### <span class="section-num">6.4</span> combination {#combination}

<div class="definition">

a **combination** is the result of selecting \\(k\\) items from a [set](#set) of \\(n\\) items such that the order of selection doesnt matter, the repetition of items is not allowed <br/>

<div class="lemma">

the number of combinations is \\(\binom{n}{k} = \frac{n!}{(n-k)!k!}\\) <br/>

</div>

<div class="lemma">

the number of sequences built from \\(s\\) 1's and \\(t\\) 0's is \\(\binom{s+t}{s}\\) <br/>

</div>

</div>


#### <span class="section-num">6.4.1</span> combination with repetition {#combination-with-repetition}

<div class="definition">

a [combination](#combination) such that [repetition](#repetition) is allowed when selecting items, the total possible combinations with repetition for a given set \\(A\\) of size \\(n\\) is \\(\binom{k+n-1}{n-1}\\) <br/>

</div>


### <span class="section-num">6.5</span> inclusion–exclusion principle <span class="tag"><span class="ATTACH">ATTACH</span></span> {#inclusion-exclusion-principle}

<div class="lemma">

given \\(U\\) is a finite universe and \\(A,B\\) are finite subsets of that universe <br/>

1.  \\(|\overline A| = |U| - |A|\\) <br/>
2.  \\(|A\cup B|=|A|+|B|-|A\cap B|\\) <br/>
3.  \\(\left|\overline A \cap \overline B\right| = |U|-|A|-|B|+|A\cap B|\\) <br/>

</div>

<div class="lemma">

considering a finite universe and its subsets \\(A\_1,A\_2\ldots A\_r\\) <br/>

\begin{gather\*}
  |A\_1 \cup A\_2 \cup \cdots \cup A\_r| = \sum\_{i=1}^{r}|A\_i| - \sum\_{\mathclap{1 \leq i < j \leq r}}|A\_i \cap A\_j| + \sum\_{\mathclap{1\leq i < j < k \leq r}}|A\_i \cap A\_j \cap A\_k| - \cdots + {(-1)}^r|A\_1 \cap A\_2 \cap \cdots \cap A\_r|
\end{gather\*}

<div class="entailment">

\\[
  \left|\overline{A\_1} \cap \overline{A\_2} \cap \cdots \cap \overline{A\_r}\right| = |U| - \sum\_{i=1}^{r}|A\_i| + \sum\_{\mathclap{1 \leq i < j \leq r}}|A\_i \cap A\_j| - \sum\_{\mathclap{1\leq i < j < k \leq r}}|A\_i \cap A\_j \cap A\_k| + \cdots + {(-1)}^r|A\_1 \cap A\_2 \cap \cdots \cap A\_r|
\\] <br/>

</div>

</div>

<div class="my_example">

how many [permutation](#permutation)s is there of the number 1 to 8 such that the numbers \\(1,2,3,4\\) arent in their natural positions <br/>

<div class="answer">

the total amount of options is \\(8!\\) <br/>
the amount of incorrect options is the sum of \\(A\_1 = \\{1\ ?\ ?\ ?\ ?\ ?\ ?\ ?\\},\ |A\_1|=7!,\ A\_2 = \\{?\ 2\ ?\ ?\ ?\ ?\ ?\ ?\\},\ |A\_2|=7!,\ A\_3 = \\{?\ ?\ 3\ ?\ ?\ ?\ ?\ ?\\},\ |A\_3|=7!,\ A\_4 = \\{?\ ?\ ?\ 4\ ?\ ?\ ?\ ?\\},\ |A\_4|=7!\\) <br/>
which gives us \\(A\_1 \cap A\_2 = \\{1\ 2\ ?\ ?\ ?\ ?\ ?\ ?\\},\ |A\_1 \cap A\_2| = 6!\\) <br/>
all pairs have \\(7!\\) elements, so its enough to find a single pair and multiply it, the amount of intersected pairs is a [combination](#combination) \\(\binom{4}{2} = \frac{4!}{(4-2)!2!} = 6\\) which gives us \\(6 \cdot 6!\\) options as a result of the intersections of pairs <br/>
now for the intersections of pairs of 3 <br/>
again all 3 pair hold the same number of options \\(A\_1 \cap A\_2 \cap A\_3 = \\{1\ 2\ 3\ ?\ ?\ ?\ ?\ ?\\},\ |A\_1 \cap A\_2 \cap A\_3| = 5!\\), we have 4 such pairs, so the total number of options is \\(4 \cdot 5!\\) <br/>
now for pairs of 4 <br/>
\\(A\_1 \cap A\_2 \cap A\_3 \cap A\_4 = \\{1\ 2\ 3\ 4\ ?\ ?\ ?\ ?\\},\ |A\_1 \cap A\_2 \cap A\_3 \cap A\_4| = 4!\\) <br/>
\\(\left|\overline{A\_1} \cap \overline{A\_2} \cap \overline{A\_3} \cap \overline{A\_4}\right|,\ \left|\overline{A\_1 \cup A\_2 \cup A\_3 \cup A\_4}\right| = |U| - |A\_1 \cup A\_2 \cup A\_3 \cup A\_4| = 8! - (4 \cdot 7! - 6 \cdot 6! + 4 \cdot 5! - 4!)\\) <br/>

</div>

</div>

<div class="my_example">

how many [normal]({{< relref "calculus2.md#normal" >}}) numbers smaller than 1000 contain the digit 8 only once? <br/>

<div class="answer">

let \\(A = \\{8,?,?\\}, B=\\{?,8,?\\}, C=\\{?,?,8\\}\\) <br/>
then: <br/>

\begin{gather\*}
  |A|=|B|=|C|=100\\\\
  A \cap B = \\{8,8,?\\}\\\\
  A \cap C = \\{8,?,8\\}\\\\
  B \cap C = \\{?,8,8\\}\\\\
  |A \cap B| = |A \cap C| = |B \cap C| = 10\\\\
  |A \cap B \cap C| = \\{8,8,8\\} = 1\\\\
  |A \cup B \cup C| = |A|+|B|+|C|-(|A \cap B| + |A \cap C| + |B \cap C|) + |A \cap B \cap C| = 3 \cdot 100 - 3 \cdot 10 + 1 = 271
\end{gather\*}

</div>

</div>


#### <span class="section-num">6.5.1</span> euler's identity {#euler-s-identity}

<div class="lemma">

\\[
  n! = n^n - n(n-1)^n + \binom{n}{2}(n-2)^n
\\] <br/>

</div>


#### <span class="section-num">6.5.2</span> derangement {#derangement}

<div class="definition">

a [permutation](#permutation) of \\(n\\) numbers \\(1,2,\ldots,n\\) is called a **[derangement](#derangement)** if all numbers arent in their right positions <br/>

<div class="my_example">

\\(1 2 3 4 5 6 \to 2 3 4 5 6 1\\) is a [derangement](#derangement) <br/>

</div>

<div class="note">

[inclusion–exclusion principle](#inclusion-exclusion-principle) helps find the number of [permutation](#permutation)s that arent derangements <br/>

</div>

</div>


### <span class="section-num">6.6</span> binomial theorem {#binomial-theorem}

<div class="lemma">

let \\(a,b \in \mathbb{R}\\) and \\(n \in \mathbb{N}\\), then: <br/>
\\[
  (a+b)^n = \sum\_{i=0}^{n} \binom{n}{k} a^kb^{n-k}
\\] <br/>

</div>

<div class="lemma">

let \\(n \in \mathbb{N}\\), then: <br/>
\\[
  \sum\_{k=0}^{n} \binom{n}{k} = 2^n
\\] <br/>

</div>

<div class="lemma">

let \\(n,k \in \mathbb{N}\\) such that \\(0 \leq k \leq n\\), then: <br/>
\\[
  \binom{n}{k} = \binom{n}{n-k}
\\] <br/>

</div>


### <span class="section-num">6.7</span> binomial coefficient {#binomial-coefficient}


### <span class="section-num">6.8</span> pascal's rule {#pascal-s-rule}

<div class="lemma">

let \\(n,k \in \mathbb{N}\\) such that \\(0 \leq k \leq n\\), then: <br/>
\\[
  \binom{n-1}{k} + \binom{n-1}{k-1} = \binom{n}{k}
\\] <br/>

</div>


### <span class="section-num">6.9</span> pascal's triangle {#pascal-s-triangle}

using [pascal's rule](#pascal-s-rule) we can find a triangle called **pascal's triangle** which is a tool to find the **binomial coefficients** in an easy recursive way <br/>

-   the root of the triangle has the bionimal coefficient \\(\binom00=1\\) <br/>
-   in every row other than the first the leftmost node is a bionimal coefficient \\(\binom{n}{0}=1\\) <br/>
-   the rightmost node is the bionimal coefficient \\(\binom{n}{n}\\) <br/>
-   every other node in the triangle is the sum of both coefficients of row above it <br/>

<div class="lemma">

let \\(n,k \in \mathbb{N}\\) such that \\(0 \leq k \leq n\\), then: <br/>
\\[
  k\binom{n}{k} = n\binom{n-1}{k-1}
\\] <br/>

</div>

<div class="lemma">

let \\(n,k \in \mathbb{N}\\) such that \\(0 \leq k \leq n\\), then: <br/>
\\[
  \sum\_{k=1}^{n} k\binom{n}{k} = n \cdot 2^{n-1}
\\] <br/>

</div>