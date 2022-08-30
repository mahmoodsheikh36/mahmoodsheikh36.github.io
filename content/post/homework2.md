+++
title = "networking homework 2"
author = ["mahmood"]
description = "[[id:AF53D0AF-8039-40A3-8C9C-4D775FFA9A2B][networking]] homework 2"
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

the [probability]({{< relref "20220813151352-probability.md" >}}) of a successful transmission of a packet in the first link is 0.56 <br/>
the probability of a successful transmission of a packet in the second link is 0.24 <br/>
a packet is delivered in both links for it to arrive successfully at the destination <br/>
we have 10 packets to transmit <br/>

<div class="subquestion">

find the probability of 3/10 successful transmissions of packets in both links <br/>

<div class="answer">

the odds of a successful transmission is \\(0.56 \cdot 0.24 = 0.1344\\) <br/>
using [Bernoulli distribution]({{< relref "20220813151352-probability.md#bernoulli-distribution" >}}): <br/>
\\[
  P(3) = \binom{10}{3}0.1344^3{(1-0.1344)}^{10-3} = 0.106072
\\] <br/>

</div>

</div>

<div class="subquestion">

find the probability for **at most** a single packet to be delivered successfully <br/>

<div class="answer">

we find the probabilities for 1/10 and 0/10 successful deliveries using Bernoulli distribution and add them <br/>
\\[
  P(1) + P(0) = \binom{10}{1}0.1344^1{(1-0.1344)}^{10-1} + \binom{10}{0}0.1344^0{(1-0.1344)}^{10-0} = 0.602794
\\] <br/>

</div>

</div>

<div class="subquestion">

find the probability for the transmission of a packet to succeed only on one link atleast 4/10 times <br/>

<div class="answer">

the probability for successful transmission on only one of the lines is \\(0.56\cdot(1-0.24)+0.24\cdot(1-0.56)=0.5312\\) <br/>
each event has a \\(0.5132\\) probability of succeeding, there are 10 events, we use bernoulli distribution: <br/>
the probability that it wont happen 0/10 times: <br/>
\\[
\binom{10}{0}0.5132^0{(1-0.5132)}^{10-0} = 7.47318434878e-4
\\] <br/>
the probability that it wont happen 1/10 times: <br/>
\\[
\binom{10}{1}0.5132^1{(1-0.5132)}^{10-1} = 7.87846797001e-3
\\] <br/>
2/10 times: <br/>
\\[
\binom{10}{2}0.5132^2{(1-0.5132)}^{10-2} = 0.037375788681
\\] <br/>
3/10 times: <br/>
\\[
\binom{10}{3}0.5132^3{(1-0.5132)}^{10-3} = 0.105073978368
\\] <br/>
and so: <br/>
\\[
P(\text{successes } 4 \to 10) = 1 - P(\text{fails } 0 \to 3) = 0.151075553453888
\\] <br/>

</div>

</div>

<div class="subquestion">

at most 1 packet is successfully transmitted on one of the links on most of the transmission attempts <br/>

<div class="answer">

we find the probabilities for 6-10/10 cases where at most only one of the links is successful <br/>
the probability for successful transmission one at most one of the lines is \\((1-0.56)\cdot(1-0.24)+0.24\cdot(1-0.56)+0.56\cdot(1-0.24)=0.8656\\) <br/>

\begin{gather\*}
\binom{10}{6}0.8656^6{(1-0.8656)}^{10-6} = 0.0288217174413\\\\
\binom{10}{7}0.8656^7{(1-0.8656)}^{10-7} = 0.106071762828\\\\
\binom{10}{8}0.8656^8{(1-0.8656)}^{10-8} = 0.256182248616\\\\
\binom{10}{9}0.8656^9{(1-0.8656)}^{10-9} = 0.366652371695\\\\
\binom{10}{10}0.8656^{10}{(1-0.8656)}^{10-10} = 0.236141587009\\\\
0.0288217174413 + 0.106071762828 + 0.256182248616 + 0.366652371695 + 0.236141587009 = \boxed{0.9938696875893}
\end{gather\*}

</div>

</div>

</div>

<div class="question">

assume a communication channel with the probability \\(p\\) that the transmission of a bit would fail <br/>
what are the odds that a packet that consists of \\(X\\) bits would arrive with \\(y\\) errors for \\(Y=1000\text{ bit},X=20000\text{ bit},p=10^{-8}\\) <br/>

<div class="answer">

\\[
\binom{20000}{1000}{10^{-8}}^{1000}{(1-10^{-8})}^{20000-1000}
\\] <br/>

</div>

</div>