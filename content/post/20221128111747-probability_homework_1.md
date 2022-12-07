+++
title = "probability homework 1"
author = ["mahmood"]
description = "probability homework 1"
date = 2022-12-07T22:41:00+02:00
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

<div class="question">

let A,B,C be events, find the [probability]({{< relref "probability.md" >}}) expressions for the following: <br/>

<div class="subquestion">

only A happens <br/>

<div class="answer">

\\[
P(A) \cap P\left(\overline{B}\right) \cap P\left(\overline{C}\right)
\\] <br/>

</div>

</div>

<div class="subquestion">

atleast one of them happens <br/>

<div class="answer">

\\[
P(A) \cup P(B) \cup P( C)
\\] <br/>

</div>

</div>

<div class="subquestion">

only one of them happens <br/>

<div class="answer">

\\[
\left(P(A) \cap P(\overline{B}) \cap P(\overline{C})\right) \cup \left(P(\overline{A}) \cap P(B) \cap P(\overline{C})\right) \cup \left(P(\overline{A}) \cap P(\overline{B}) \cap P( C)\right)
\\] <br/>

</div>

</div>

<div class="subquestion">

none of the events happen <br/>

<div class="answer">

\\[
P(\overline{A})+P(\overline{B})+P(\overline{C})
\\] <br/>

</div>

</div>

<div class="subquestion">

no more than 2 events happen <br/>

<div class="answer">

1 minus the probability of all 3 events happening: <br/>
\\[
1 - P(A) \cap P(B) \cap P( C)
\\] <br/>

</div>

</div>

</div>

<div class="question">

prove: <br/>
\\[
P(A \cup B \cup C) = P(A)+P(B)+P( C)-P(A \cap B)-P(A \cap C)-P(B \cap C)+P(A \cap B \cap C)
\\] <br/>

</div>

<div class="question">

let \\(\Omega=\\{0,1,2,\dots\\}\\), given that \\(P(\\{n\\})=\frac{c}{6^n}\\) for every \\(n \in \Omega\\), find \\(c\\) <br/>
hint: use the sum of an infinite convergent geometric sequence <br/>

<div class="answer">

we know that \\[\sum\_{n\in\Omega} P(\\{n\\}) = 1\\] and so \\[\sum\_{n \in \Omega} \frac{c}{6^n} = 1 \implies \sum\_{n=1}^{\infty} \frac{c}{6^n} = 1\\] and using the formula for the [sum of infinite geometric progression]({{< relref "20220711182517-sum_of_geometric_progression.md#sum-of-infinite-geometric-progression" >}}) we get \\[\frac{c}{1-\frac{1}{6}} = 1 \implies c = \frac{5}{6}\\] <br/>

</div>

</div>

<div class="question">

in a [square matrix]({{< relref "linear_algebra2.md#square-matrix" >}}) of the fourth degree we pick 4 different cells randomly, what is the probability that: <br/>

<div class="subquestion">

all of them are in the same row <br/>

<div class="answer">

refer to [hypergeometric distribution]({{< relref "probability.md#hypergeometric-distribution" >}}) <br/>
\\[
4 \cdot \frac{\binom{4}{4} \binom{16-4}{4-4}}{\binom{16}{4}} = \frac{1}{455}
\\] <br/>

</div>

</div>

<div class="subquestion">

all of them are in the two upper rows <br/>

<div class="answer">

\\[
\frac{\binom{8}{4} \binom{16-8}{4-4}}{\binom{16}{4}}
\\] <br/>

</div>

</div>

<div class="subquestion">

they form a permutation (exactly one from each row and column) <br/>

<div class="answer">

\\[
8 \cdot \frac{\binom{4}{4} \binom{16-4}{4-4}}{\binom{16}{4}} = \frac{2}{455}
\\] <br/>

</div>

</div>

</div>

<div class="question">

in a class there are 20 girls and 30 boys, we randomly pick 5 students, what is the probability that: <br/>

<div class="subquestion">

only boys are picked <br/>

<div class="answer">

\\[
\frac{\binom{30}{5} \binom{50-30}{5-5}}{\binom{50}{5}}
\\] <br/>

</div>

</div>

<div class="subquestion">

all of the chosen are of the same gender <br/>

<div class="answer">

\\[
\frac{\binom{30}{5} \binom{50-30}{5-5}}{\binom{50}{5}} + \frac{\binom{20}{5} \binom{50-20}{5-5}}{\binom{50}{5}}
\\] <br/>

</div>

</div>

<div class="subquestion">

more girls are picked than boys <br/>

<div class="answer">

\\[
\frac{\binom{20}{3} \binom{50-20}{5-3}}{\binom{50}{5}}
\\] <br/>

</div>

</div>

<div class="subquestion">

an equal number of boys and girls are picked <br/>

<div class="answer">

impossible, 0 <br/>

</div>

</div>

</div>

<div class="question">

in an urn 10 balls of which only one is black, how many balls have to be removed and returned so that the probability that black is removed is atleast 0.9 <br/>

<div class="answer">

the probability of removing the black ball is 0.1 <br/>
\\[
P(k) \ge {(1-p)}^{k-1}p \implies 0.9 \ge {(1-0.1)}^{k-1} \cdot 0.1
\\] <br/>
the number of trials is \\(k\\) rounded up (e.g. 9.1 would be rounded to 10) <br/>

</div>

</div>

<div class="question">

there are 2 traffic lights, the probability of an error in the first is 0.1, the probability of an error in the second is 0.15, the probability of an error in both is 0.02, what is the probability that none of them error out? <br/>

<div class="answer">

apparently the odds of both erroring out arent the odds of each erroring out multiplied 🤔 so im guessing the case of both erroring out is independant <br/>
\\[
1 - 0.1 - 0.15 - 0.02
\\] <br/>

</div>

</div>

<div class="question">

12 people are asked about their month of birth (all of them have equal probabilities to be born on any of the months) <br/>

<div class="subquestion">

what is the probabiblity that all 12 people were born in different months? <br/>

<div class="answer">

this is a [combination]({{< relref "20221204105120-combinatorics.md#combination" >}}), \\(\frac{1}{12!}\\) <br/>

</div>

</div>

<div class="subquestion">

what is the probability that all of them were born in the same month <br/>

<div class="answer">

refer to [variation with repetition]({{< relref "20221204105120-combinatorics.md#variation-with-repetition" >}}) <br/>
\\[
\frac{1}{12^{12}}
\\] <br/>

</div>

</div>

<div class="subquestion">

what is the probability that exactly 4 were born in june <br/>

<div class="answer">

this is a [Bernoulli distribution]({{< relref "probability.md#bernoulli-distribution" >}}) <br/>
\\[
\binom{12}{4} \frac{1}{12}^4\left(1-\frac{1}{12}\right)^{12-4}
\\] <br/>

</div>

</div>

<div class="subquestion">

what is the probability that 6 people were born in the first 6 months of the year and the rest were born in the later 6 months of the year? <br/>

<div class="answer">

yet another Bernoulli distribution <br/>
\\[
\binom{12}{6}0.5^6{(1-0.5)}^{12-6}
\\] <br/>

</div>

</div>

</div>

