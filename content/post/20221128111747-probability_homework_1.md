+++
title = "probability homework 1"
author = ["mahmood"]
description = "probability homework 1"
date = 2022-12-03T17:09:00+02:00
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

let A,B,C be events, find the expressions for the following events: <br/>

<div class="subquestion">

only A happens <br/>

</div>

<div class="subquestion">

atleast one of them happens <br/>

</div>

<div class="subquestion">

only one of them happens <br/>

</div>

<div class="subquestion">

none of the events happen <br/>

</div>

<div class="subquestion">

no more than 2 events happen <br/>

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
hint: use the sum of an infinite convergent series <br/>

</div>

<div class="question">

in a square matrix of the fourth degree we pick 4 different cells randomly, what is the probability that: <br/>

<div class="subquestion">

all of them are in the same field <br/>

</div>

<div class="subquestion">

all of them are in the two upper rows <br/>

</div>

<div class="subquestion">

they form a permutation (exactly one from each row and column) <br/>

</div>

</div>

<div class="question">

in a class there are 20 girls and 30 boys, we randomly pick 5 students, what is the probability that: <br/>

<div class="subquestion">

only boys are picked <br/>

</div>

<div class="subquestion">

all of the chosen are of the same gender <br/>

</div>

<div class="subquestion">

more girls are picked than boys <br/>

</div>

<div class="subquestion">

an equal number of boys and girls are picked <br/>

</div>

</div>

<div class="question">

in an urn 10 balls of which only one is black, how many balls have to be removed and returned so that the probability that black is removed is atleast 0.9 <br/>

</div>

<div class="question">

there are 2 traffic lights, the probability of an error in the first is 0.1, the probability of an error in the second is 0.15, the probability of an error in both is 0.02, what is the probability that none of them error out? <br/>

</div>

<div class="question">

12 people are asked about their month of birth (all of them have equal probabilities to be born on any of the months) <br/>

<div class="subquestion">

what is the probabiblity that all 12 people were born in different months? <br/>

</div>

<div class="subquestion">

what is the probability that all of them were born in the same month <br/>

</div>

<div class="subquestion">

what is the probability that exactly 4 were born in june <br/>

</div>

<div class="subquestion">

what is the probability that 6 people were born in the first 6 months of the year and the rest were born in the later 6 months of the year? <br/>

</div>

</div>

