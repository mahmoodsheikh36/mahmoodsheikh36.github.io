+++
title = "probability"
author = ["mahmood"]
description = "probability theory"
date = 2022-12-05T14:14:00+02:00
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

<div class="note">

some things are incomplete and even wrong <br/>

</div>

<div class="definition">

**probability** is a [function]({{< relref "discrete_maths2.md#function" >}}), denoted by \\(P\\) that describes the probability for a specific incident to occur <br/>

<div class="lemma">

The probability of an impossible event is zero; the probability of a certain event is one. therefore, for any event \\(A\\), the range of possible probabilities is \\(0 \le P(A) \le 1\\) <br/>

</div>

<div class="lemma">

for \\(S\\) the sample space of all possibilities, \\(P(S)=1\\). that is, the sum of all the probabilities for all possible events is equal to one. <br/>

<div class="entailment">

the sum of the probabilities of both \\(A\\) and **not** \\(A\\) is equal to 1 <br/>

</div>

</div>

<div class="lemma">

\\[
P(\varnothing) = 0
\\] <br/>

</div>

<div class="lemma">

\\[
P(\overline{A}) = 1 - P(A)
\\] <br/>

</div>

<div class="lemma">

\\[
A \subset B \implies P(A) < P(B)
\\] <br/>

</div>

<div class="lemma">

let \\(\Omega\\) be a universe that contains \\(n\\) possibilities, and let \\(A \subseteq \Omega\\) such that \\(A\\) contains m elements, then the possibility for \\(A\\) to occur is \\(P(A) = \frac{m}{n}\\) <br/>

<div class="my_example">

we pick a random number between 0 and 9 (including both) <br/>
which means that \\(\Omega=\\{0,1,2,3,4,5,6,7,8,9\\}\\) <br/>
since there are 10 numbers, the odds of picking a number bigger than 5, which could be one of \\(A=\\{6,7,8,9\\}\\) are \\(\frac{4}{10}\\) because here \\(A\\) contains 4 elements and \\(\Omega\\) contains 10 elements <br/>

</div>

</div>

<div class="my_example">

in a family there are 3 kids <br/>
we define the following expressions: <br/>
E - the oldest is a boy <br/>
F - the younger kid (not youngest) is a boy <br/>
G - the youngest is a boy <br/>
find expressions for the following cases: <br/>

<div class="subquestion">

the three kids are boys <br/>

<div class="answer">

\\[
E \cap F \cap G
\\] <br/>

</div>

</div>

<div class="subquestion">

the three kids are girls <br/>

<div class="answer">

\\[
\overline{E} \cap \overline{F} \cap \overline{G}
\\] <br/>

</div>

</div>

<div class="subquestion">

atleast one of the kids is a boy <br/>

<div class="answer">

\\[
E \cup F \cup G
\\] <br/>

</div>

</div>

<div class="subquestion">

the two oldest kids are boys <br/>

<div class="answer">

\\[
E \cap F
\\] <br/>

</div>

</div>

<div class="subquestion">

exactly two kids are boys <br/>

<div class="answer">

\\[
(E \cap F \cap \overline{G}) \cup (E \cap \overline{F} \cap G) \cup (\overline{E} \cap F \cap G)
\\] <br/>

</div>

</div>

</div>

<div class="question">

given \\(A \cup B\\) is a union of 2 independent events, show that \\(P(A \cup B) = P(A) + P(B) - P(A \cap B)\\) <br/>

<div class="answer">

could use some venn diagrams here.. <br/>

\begin{gather\*}
  A \cup B = A \cup (B - A) \implies P(A \cup B) = P(A \cup (B - A)) = P(A) + P(B - A)\\\\
  B = (A \cap B) \cup (B - A) \implies P(B) = P(A \cap B) + P(B - A) \implies P(B - A) = P(B) - P(A \cap B)\\\\
  P(A \cup B) = P(A) + P(B) - P(A \cap B)
\end{gather\*}

</div>

</div>

<div class="question">

prove: <br/>
\\[
A \subset B \implies P(B-A) = P(B)-P(A)
\\] <br/>

<div class="answer">

\begin{gather\*}
  B = (B \cap A) \cup (B - A) \implies P(B) = P(B \cap A) + P(B - A)\\\\
  A \subset B \implies A \cap B = A \implies P(B) = P(A) + P(B - A) \implies P(B - A) - P(B) - P(A)
\end{gather\*}

</div>

</div>

<div class="question">

let \\(\Omega = \\{1,2,3,4,5,6\\}\\) such that \\(n=1,2,3,4,5,6\\) and \\(P(\\{n\\}) = \alpha n\\), find \\(\alpha\\) <br/>

<div class="answer">

\\[
P(\Omega) = 1 \implies \alpha + 2\alpha + \dots + 6\alpha = 1 \implies 21\alpha = 1 \implies \alpha = \frac{1}{21}
\\] <br/>

</div>

</div>

</div>


## <span class="section-num">1</span> probability space {#probability-space}

<https://en.wikipedia.org/wiki/Probability_space> <br/>

<div class="definition">

a **probability space** \\((\Omega ,{\mathcal {F}},P)\\) is a mathematical construct that provides a formal model of a random process or "experiment". <br/>
a probability space consists of three elements: <br/>

1.  a **sample space**, \\(\Omega\\), which is the [set]({{< relref "discrete_maths2.md#set" >}}) of all possible outcomes <br/>
2.  an **event space**, which is a set of events \\(\mathcal{F}\\), an event being a set of outcomes in the sample space <br/>
3.  a probability function, \\(P\\), which assigns each event in the event space a probability <br/>

<div class="my_example">

rolling 2 dice cubes: <br/>
\\[
\Omega = \\{(m,n) \mid m=1,2,\dots,6, n=1,2,\dots,6\\}
\\] <br/>

</div>

<div class="lemma">

\\[
P(\Omega) = 1
\\] <br/>

</div>

</div>


## <span class="section-num">2</span> dependance {#dependance}

<div class="definition">

we say two events are **independent** if knowing one event occurred doesn't change the probability of the other event. otherwise they are dependant <&khanacademy_probability_dependance> <br/>
i.e. two events, A and B, are independent if: <br/>
\\[
  P(A\mid B) = P(A) \land P(B\mid A) = P(B)
\\] <br/>

<div class="my_example">

for example, the probability that a fair coin shows "heads" after being flipped is 1/2. what if we knew the day was tuesday? does this change the probability of getting "heads?" of course not. the probability of getting "heads", given that it's a tuesday, is still 1/2. so the result of a coin flip and the day being tuesday are independent 127.0.0.1       youtube.com <br/>
127.0.0.1       www.youtube.com <br/>
events; knowing it was a tuesday didn't change the probability of getting "heads". <br/>
not every situation is this obvious. what about gender and handedness (left handed vs. right handed)? it may seem like a person's gender and whether or not they are left-handed are totally independent events. when we look at probabilities though, we see that about 10% of all people are left-handed, but about 12% of males are left-handed. so these events are not independent, since knowing a random person is a male increases the probability that they are left-handed. <br/>
The big idea is that we check for independence with probabilities. <br/>

</div>

<div class="lemma">

given \\(A\_1,A\_2,\dots,A\_n\\) are independent events, then <br/>
\\[
P\left(\bigcup\_{i=1}^{n} A\_i\right) = \sum\_{i=1}^{n} P(A\_i)
\\] <br/>

</div>

<div class="lemma">

given \\(A\_1,A\_2,\dots\\) are independent events such that \\(i \neq j \implies A\_i \cap A\_j = \varnothing\\) then: <br/>
\\[
P\left(\bigcup\_{i=1}^{\infty} A\_i\right) = \sum\_{i=1}^{\infty} P(A\_i)
\\] <br/>

</div>

<div class="lemma">

given \\(A\_1,A\_2\\) are 2 random events <br/>
\\[
P(A\_1 \cup A\_2) = P(A\_1) - P(A\_2) - P(A\_1 \cap A\_2)
\\] <br/>

</div>

<div class="lemma">

given \\(A\_1,A\_2,A\_3\\) are 3 random events <br/>

\begin{align\*}
  P(A\_1 \cup A\_2 \cup A\_3) &= P((A\_1 \cup A\_2) \cup A\_3)\\\\
  &= P(A\_1 \cup A\_2) - P(A\_3) - P((A\_1 \cup A\_2) \cap A\_3)\\\\
  &= P(A\_1) + P(A\_2) - P(A\_1 \cap A\_2) + P(A\_3) - P((A\_1 \cap A\_2) \cup (A\_2 \cap A\_3))\\\\
  &= P(A\_1) + P(A\_2) + P(A\_3) - P(A\_1 \cap A\_2) - [P(A\_1 \cap A\_3) + P(A\_2 \cap A\_3) - P(A\_1 \cap A\_2 \cap A\_3)]\\\\
  &= P(A\_1) + P(A\_2) + P(A\_3) - P(A\_1 \cap A\_2) - P(A\_1 \cap A\_3) - P(A\_2 \cap A\_3) + P(A\_1 \cap A\_2 \cap A\_3)
\end{align\*}

</div>

<div class="lemma">

given \\(A\_1,A\_2,\dots,A\_n\\) are random events <br/>
\\[
P\left(\bigcup\_{i=1}^{n} A\_i\right) = S\_1 - S\_2 + S\_3 - \dots + {(-1)}^{n-1}S\_n
\\] <br/>
such that <br/>

\begin{align\*}
  S\_1 &= \sum\_{i=1}^{n} P(A\_i)\\\\
  S\_2 &= \sum\_{\mathclap{1 \le i < j < n}} P(A\_i \cap A\_j) &\text{union of pairs}\\\\
  S\_3 &= \sum\_{\mathclap{1 \le i < j < k < n}} P(A\_i \cap A\_j \cap A\_k) &\text{union of triples}\\\\
  &\vdots\\\\
  S\_k &= \sum\_{\mathclap{1 \le k < i\_1 < i\_2 < \dots < i\_k < n}} P(A\_{i\_1} \cap A\_{i\_2} \cap \dots \cap A\_{i\_k})\\\\
  &\vdots\\\\
  S\_n &= P(A\_1 \cap A\_2 \cap \dots \cap A\_n)
\end{align\*}

</div>

<div class="my_example">

a secretary has \\(n\\) mails destined for \\(n\\) different people, the secretary sent the letters out randomly to people <br/>

<div class="subquestion">

what is the probability that atleast one person received the correct mail <br/>

<div class="answer">

A = atleast one person received the correct mail <br/>
\\(A = A\_1 \cup A\_2 \cup \dots \cup A\_n\\) <br/>
\\(A\_i\\) the \\(i\\)'th mail arrived to the correct person <br/>
\\(P(A\_i) = \frac{(n-1)!}{n!} = \frac{1}{n},\ S\_i = n \cdot \frac{1}{n} = 1\\) <br/>
\\(P(A\_i \cap A\_j) = \frac{(n-2)!}{n!} = \frac{1}{n(n-1)}\\) <br/>
\\(S\_2 = \frac{1}{n(n-1)} \cdot \binom{n}{2} = \frac{1}{n(n-1)} \cdot \frac{n(n-1)}{2!} = \frac{1}{2!}\\) <br/>
\\(P(A\_{i\_1} \cap A\_{i\_2} \cap \dots \cap A\_{i\_n}) = \frac{(n-k)!}{n!}\\) <br/>
\\(S\_k = \frac{(n-k)!}{n!} = \binom{n}{k} = \frac{1}{k!}\\) <br/>
\\(P(A\_1 \cap A\_2 \cap \dots \cap A\_n) = \frac{1}{n!}\\) <br/>
\\(P(A) = P(A\_1 \cup A\_2 \cup \dots \cup A\_n) = 1 - \frac{1}{2!} + \frac{1}{3!} - \dots + {(-1)}^{n-1} \cdot \frac{1}{n!}\\) <br/>
\\(\lim\_{n \to \infty} P\_n = 1 - \sum\_{n=0}^{\infty} \frac{(-1)^n}{n!} = 1-e^{-1}\\) <br/>

</div>

</div>

</div>

</div>


## <span class="section-num">3</span> conditional probability {#conditional-probability}

-   two events are mutually exclusive or [disjoint]({{< relref "discrete_maths2.md#disjoint-sets" >}}) if they cannot occur at the same time. <br/>
-   the [probability]({{< relref "probability.md" >}}) that event \\(A\\) occurs, given that event \\(B\\) has occurred, is called a **conditional probability**. the conditional probability of event \\(A\\), given event \\(B\\), is denoted by \\(P(A\mid B)\\), if \\(A\\) is independent from \\(B\\), this simplifies to \\(P(A\mid B) = P(A)\\), if \\(P(B)=0\\) the conditional probability is undefined. <br/>
-   the complement of an event is the event not occurring. the probability that event \\(A\\) will not occur is denoted by \\(P(A')\\) or \\(P\left(\overline{A}\right)\\). <br/>
-   the probability that events \\(A\\) and \\(B\\) both occur is the probability of the [intersection]({{< relref "discrete_maths2.md#intersection" >}}) of \\(A\\) and \\(B\\). the probability of the intersection of events \\(A\\) and \\(B\\) is denoted by \\(P(A\cap B)\\) which may be found using the [chain rule](#chain-rule). if events \\(A\\) and \\(B\\) are mutually exclusive, \\(P(A\cap B) = 0\\). <br/>
-   the probability that events \\(A\\) or \\(B\\) occur is the probability of the [union]({{< relref "discrete_maths2.md#union" >}}) of \\(A\\) and \\(B\\). the probability of the union of events \\(A\\) and \\(B\\) is denoted by \\(P(A\cup B)\\) which may be found using the [sum rule](#sum-rule). <br/>
-   if the occurrence of event \\(A\\) changes the probability of event \\(B\\), then events \\(A\\) and \\(B\\) are dependent. on the other hand, if the occurrence of event \\(A\\) does not change the probability of event \\(B\\), then events \\(A\\) and \\(B\\) are independent. <br/>

[[<&stattrek_conditional_probability>] <br/>


## <span class="section-num">4</span> sum rule {#sum-rule}

the **sum rule** for two random events \\(A\\) and \\(B\\) states: <br/>
\\[
P(A\cup B)=P(A)+P(B)-P(A\cap B)
\\] <br/>
if the events are disjoint, the formula would simplify to <br/>
\\[
P(A \cup B) = P(A) + P(B)
\\] <br/>


## <span class="section-num">5</span> chain rule {#chain-rule}

the **chain rule** for two random events \\(A\\) and \\(B\\) says: <br/>
\\[
P(A\cap B) = P(B\mid A) \cdot P(A)
\\] <br/>
for more than two events \\(A\_{1},\dots,A\_{n}\\) the chain rule extends to the [formula]({{< relref "20220711175314-formula.md" >}}): <br/>
\\[
P \left(A\_{n}\cap \dots \cap A\_{1}\right)= P\left(A\_{n} \mid A\_{n-1}\cap \dots \cap A\_{1}\right)\cdot P\left(A\_{n-1}\cap \dots \cap A\_{1}\right)
\\] <br/>
which by induction may be turned into: <br/>
\\[
P\left(A\_{n} \cap \dots \cap A\_{1}\right)=\prod\_{k=1}^{n} P\left(A\_{k}\\,\Bigg|\\,\bigcap\_{j=1}^{k-1}A\_{j}\right)
\\] <br/>


## <span class="section-num">6</span> expected value {#expected-value}

expected value is exactly what you might think it means intuitively: the return you can expect for some kind of action, like how many questions you might get right if you guess on a multiple choice test. <br/>


## <span class="section-num">7</span> probability table {#probability-table}


## <span class="section-num">8</span> binomial distribution {#binomial-distribution}


## <span class="section-num">9</span> Bernoulli distribution {#bernoulli-distribution}

<div class="definition">

**Bernoulli distribution** is a special case of the [binomial distribution](#binomial-distribution) <br/>
the probability of a specific incident to occur \\(k\\) times out of \\(n\\) times is a [combination]({{< relref "20221204105120-combinatorics.md#combination" >}}), and so: <br/>
\\[
  P(k) = \binom{n}{k}p^k{(1-p)}^{n-k}
\\] <br/>

<div class="characteristic">

the [expected value](#expected-value) for a random variable, \\(x\\), for a Bernoulli distribution is \\(E[x] = np\\) <br/>

</div>

</div>


## <span class="section-num">10</span> geometric distribution {#geometric-distribution}

<div class="definition">

the probability for a success on the \\(k\\)'th attempt is <br/>
\\[
P(k) = {(1-p)}^{k-1}p
\\] <br/>
because we have \\(k-1\\) failures which gives us \\({(1-p)}^{k-1}\\), and a single success on the last attempt so we multiply by \\(p\\) <br/>

<div class="characteristic">

the [expected](#expected-value) number of trials for a success is \\(E[k] = \frac{1}{p}\\) <br/>

</div>

</div>

