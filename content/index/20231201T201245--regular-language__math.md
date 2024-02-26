+++
title = "regular language"
author = ["mahmood"]
tags = ["math"]
draft = false
+++

<div class="definition" id="def-reglang">

a [language](20231116T134552--language__math.org) is called a _regular language_ if some [finite automaton](20231204T100246--finite-automaton__cs.org) recognizes it. <br/>
(Michael Sipser, 2012 definition 1.16) <br/>

</div>

<div class="lemma" id="lem-reglang-concat-closure">

the [class](20231128T200405--class__math.org) of [regular language](20231201T201245--regular-language__math.org)s is [closed under](20230920T201339--closure-under-operation__.org) the [concatenation](20231118T083605--language-concatenation__math.org) operation. given regular languages <img src="/ltximg/2e9fe2a34d2.svg" alt="\(L_1\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/7d7b9b7b626.svg" alt="\(L_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" />, we can construct a finite automaton that recognizes <img src="/ltximg/0026edc2f8a.svg" alt="\(L_1 \circ L_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
(Michael Sipser, 2012 theorem 1.26) <br/>
(Michael Sipser, 2012 theorem 1.47) <br/>

</div>

<div class="lemma">

the class of regular languages is closed under the [star operation](20231118T083911--language-closure__math.org). <br/>
(Michael Sipser, 2012 theorem 1.49) <br/>

</div>

<div class="lemma" id="lem-reglang-union-closure">

the class of regular languages is [closed under union](20231128T202345--closed-under-union__math.org). <br/>
(Michael Sipser, 2012 theorem 1.25) <br/>
(Michael Sipser, 2012 theorem 1.45) <br/>

</div>

<div class="proof">

we have regular languages <img src="/ltximg/28e7bf7791e.svg" alt="\(A_1\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/8cd43227df9.svg" alt="\(A_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> and want to prove that <img src="/ltximg/14fd8931b90.svg" alt="\(A_1 \cup A_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> is regular. the idea is to take two [NFA](20231119T191125--nondeterministic-finite-automaton__math.org)s, <img src="/ltximg/34a208dd0d5.svg" alt="\(N_1\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/2d5e5a45444.svg" alt="\(N_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> for <img src="/ltximg/28e7bf7791e.svg" alt="\(A_1\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/8cd43227df9.svg" alt="\(A_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> , and combine them into one new NFA, <img src="/ltximg/0047213b92a.svg" alt="\(N\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
machine <img src="/ltximg/0047213b92a.svg" alt="\(N\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> must accept its input if either <img src="/ltximg/34a208dd0d5.svg" alt="\(N_1\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> or <img src="/ltximg/2d5e5a45444.svg" alt="\(N_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> accepts this input. the new machine has a new start state that branches to the start states of the old machines with <img src="/ltximg/1e532657953.svg" alt="\(\varepsilon\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> arrows. in this way, the new machine nondeterministically guesses which of the two machines accepts the input. if one of them accepts the input, <img src="/ltximg/0047213b92a.svg" alt="\(N\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> will accept it, too. <br/>
we represent this construction in fig-reglang-1. on the left, we indicate the start and accept states of machines <img src="/ltximg/34a208dd0d5.svg" alt="\(N_1\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/2d5e5a45444.svg" alt="\(N_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> with large circles and some additional states with small circles. on the right, we show how to combine <img src="/ltximg/34a208dd0d5.svg" alt="\(N_1\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/2d5e5a45444.svg" alt="\(N_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> into <img src="/ltximg/0047213b92a.svg" alt="\(N\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> by adding additional transition arrows. <br/>


<div id="orgbe18038" class="equation-container">
<span class="equation">
<img src="/ltximg/c9a3069f039.svg" alt="\begin{tikzpicture}[initial text=, &amp;gt;={Stealth[round]}, node distance=2cm]
  \node[state, initial] (q_0) {\(q_0\)};
  % upper group
  \node[state, above right=5px and 30px of q_0, minimum width=110px, minimum height=40px, rectangle, rounded corners=10] (q_1) {};
  \node[state, right=20px of q_1.west, anchor=west, initial] (q_3) {\(q_1\)};
  \node[right=2px of q_3, anchor=west, font=\Large] {\(\dots\)};
  \node[state, right=22px of q_3, accepting] {};
  % lower group
  \node[state, below right=5px and 30px of q_0, minimum width=110px, minimum height=40px, rectangle, rounded corners=10] (q_2) {};
  \node[state, right=20px of q_2.west, anchor=west, initial] (q_4) {\(q_2\)};
  \node[right=2px of q_4, anchor=west, font=\Large] {\(\dots\)};
  \node[state, right=22px of q_4, accepting] {};
  % paths from initial node to other groups (automatons)
  \path[-&amp;gt;] (q_0) edge [bend left=35] node [above left] {\(\varepsilon\)} (q_1.west)
            (q_0) edge [bend right=35] node [below left] {\(\varepsilon\)} (q_2.west)
            ;
\end{tikzpicture}
" style="height: 10.7899em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

let <img src="/ltximg/fa6976d1af1.svg" alt="\(N_1=(Q_1,\Sigma,\delta_1,q_1,F_1)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> recognize <img src="/ltximg/28e7bf7791e.svg" alt="\(A_1\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" />, and <img src="/ltximg/ca1bcfd9e0c.svg" alt="\(N_2=(Q_2,\Sigma,\delta_2,q_2,F_2)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> recognize <img src="/ltximg/8cd43227df9.svg" alt="\(A_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
[construct](20231118T150110--proof-by-construction__.org) <img src="/ltximg/452c2458aab.svg" alt="\(N=(Q,\Sigma,\delta,q_0,F)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> to recognize <img src="/ltximg/14fd8931b90.svg" alt="\(A_1 \cup A_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" />. <br/>

1.  <img src="/ltximg/998bda638c6.svg" alt="\(Q=\{q_0\} \cup Q_1 \cup Q_2\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
    the states of <img src="/ltximg/0047213b92a.svg" alt="\(N\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> are all the states of <img src="/ltximg/34a208dd0d5.svg" alt="\(N_1\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/2d5e5a45444.svg" alt="\(N_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" />, with the addition of a new start state <img src="/ltximg/16d1cbb9b84.svg" alt="\(q_0\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
2.  the state <img src="/ltximg/16d1cbb9b84.svg" alt="\(q_0\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> is the start state of <img src="/ltximg/0047213b92a.svg" alt="\(N\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
3.  the set of accept states <img src="/ltximg/d939072a1ce.svg" alt="\(F=F_1 \cup F_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
    the accept states of <img src="/ltximg/0047213b92a.svg" alt="\(N\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> are all the accept states of <img src="/ltximg/34a208dd0d5.svg" alt="\(N_1\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/2d5e5a45444.svg" alt="\(N_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" />. that way, <img src="/ltximg/0047213b92a.svg" alt="\(N\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> accepts if either <img src="/ltximg/34a208dd0d5.svg" alt="\(N_1\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> accepts or <img src="/ltximg/2d5e5a45444.svg" alt="\(N_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> accepts. <br/>
4.  define <img src="/ltximg/2592d04fa09.svg" alt="\(\delta\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> so that for any <img src="/ltximg/a0ce93e9ce3.svg" alt="\(q \in Q\)" style="height: 0.9586em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> and any <img src="/ltximg/e77e9e8a239.svg" alt="\(a \in \Sigma_{\varepsilon}\)" style="height: 0.9205em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" />, <br/>
    
    
    <div class="equation-container">
    <span class="equation">
    <img src="/ltximg/3ba54b6635b.svg" alt="   \begin{equation}
         \delta(q,a) = \begin{cases}
                         \delta_1(q,a) &amp;amp; q \in Q_1\\
                         \delta_2(q,a) &amp;amp; q \in Q_2\\
                         \{q_1,q_2\} &amp;amp; q=q_0 \text{ and } a=\varepsilon\\
                         \emptyset &amp;amp; q=q_0 \text{ and } a \neq \varepsilon.
                       \end{cases}
       \end{equation}
    " style="height: 5.8411em; vertical-align: -0.5392em; display: inline-block" class="org-latex org-latex-inline" />
    </span>
    </div>

(Michael Sipser, 2012 theorem 1.45) <br/>

</div>

<div class="lemma" id="lem-reglang-complement-closure">

if <img src="/ltximg/48b15ce2f17.svg" alt="\(M\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is a DFA that recognizes language <img src="/ltximg/4f4a7e13274.svg" alt="\(B\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, swapping the accept and nonaccept states in <img src="/ltximg/48b15ce2f17.svg" alt="\(M\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> yields a new DFA recognizing the complement of <img src="/ltximg/4f4a7e13274.svg" alt="\(B\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. consequently, the class of regular languages is [closed under complement](20231128T202412--closed-under-complement__.org). <br/>
(Michael Sipser, 2012 exercise 1.14) <br/>

</div>

<div class="lemma" id="lem-reglang-difference-closure">

the class of regular languages is [closed under difference](20231128T202403--closed-under-difference__.org). <br/>
(Dr. Noa Lewenstein, ????) <br/>

</div>

<div class="dummy">

<div class="lemma" id="lem-reglang-intersect-closure">

the class of regular languages is [closed under intersection](20231128T202341--closed-under-intersection__.org). <br/>

</div>

<div class="proof">

let <img src="/ltximg/ecdc462b27c.svg" alt="\(M_1\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> recognize <img src="/ltximg/28e7bf7791e.svg" alt="\(A_1\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" />, where <img src="/ltximg/91ba64d998d.svg" alt="\(M_1=(Q_1,\Sigma,\delta_1,q_1,F_1)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, and <img src="/ltximg/4a406956665.svg" alt="\(M_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> recognize <img src="/ltximg/8cd43227df9.svg" alt="\(A_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" />, where <img src="/ltximg/30da79e0aa6.svg" alt="\(M_2=(Q_2,\Sigma,\delta_2,q_2,F_2)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
construct <img src="/ltximg/48b15ce2f17.svg" alt="\(M\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> to recognize <img src="/ltximg/be23ea7d4fb.svg" alt="\(A_1 \cap A_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" />, where <img src="/ltximg/9a0fff5c8a7.svg" alt="\(M=(Q,\Sigma,\delta,q_0,F)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>

1.  <img src="/ltximg/c9ad86a918a.svg" alt="\(Q=\{(r_1,r_2) \mid r_1 \in Q_1 \text{ and } r_2 \in Q_2\}\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. this set is the [cartesian product](20240101T215600--cartesian-product__math.org) of sets <img src="/ltximg/f7cf61c09b6.svg" alt="\(Q_1\)" style="height: 0.9586em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/e5a5eaede2e.svg" alt="\(Q_2\)" style="height: 0.9586em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> and is written <img src="/ltximg/8c1c93c1726.svg" alt="\(Q_1 \times Q_2\)" style="height: 0.9586em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
2.  <img src="/ltximg/4ddbce7ed65.svg" alt="\(\Sigma\)" style="height: 0.7735em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, the alphabet, is the same as in <img src="/ltximg/ecdc462b27c.svg" alt="\(M_1\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/4a406956665.svg" alt="\(M_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" />. we assume for simplicity that both <img src="/ltximg/ecdc462b27c.svg" alt="\(M_1\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/4a406956665.svg" alt="\(M_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> have the same input alphabet <img src="/ltximg/4ddbce7ed65.svg" alt="\(\Sigma\)" style="height: 0.7735em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. the theorem remains true if they have different alphabets, <img src="/ltximg/4975e9766d7.svg" alt="\(\Sigma_1,\Sigma_2\)" style="height: 0.9640em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />. we would then modify the proof to let <img src="/ltximg/dfb9918bcd9.svg" alt="\(\Sigma=\Sigma_1 \cap \Sigma_2\)" style="height: 0.9205em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
3.  <img src="/ltximg/2592d04fa09.svg" alt="\(\delta\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, the transition function, is defined as follows. for each <img src="/ltximg/b69b82a272e.svg" alt="\((r_1,r_2) \in Q\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> and each <img src="/ltximg/6ebce98463c.svg" alt="\(a \in \Sigma\)" style="height: 0.8118em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />, let <br/>
    <img src="/ltximg/a34e8ee49df.svg" alt="\[ \delta((r_1,r_2),a)=(\delta_1(r_1,a),\delta_2(r_2,a)) \]" style="height: 1.5194em; display: block" class="org-latex org-latex-block" />. <br/>
    hence <img src="/ltximg/2592d04fa09.svg" alt="\(\delta\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> gets a state of <img src="/ltximg/48b15ce2f17.svg" alt="\(M\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> (which actually is a pair of states from <img src="/ltximg/ecdc462b27c.svg" alt="\(M_1\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/4a406956665.svg" alt="\(M_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" />, together with an input symbol, and returns <img src="/ltximg/3d247ced5c9.svg" alt="\(M's\)" style="height: 0.8351em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> next state. <br/>
4.  <img src="/ltximg/16d1cbb9b84.svg" alt="\(q_0\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> is the pair <img src="/ltximg/3330ea71807.svg" alt="\((q_1,q_2)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
5.  <img src="/ltximg/40ff82eabf0.svg" alt="\(F=F_1 \times F_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> <br/>

we propose the following equivalence from the definition of <img src="/ltximg/2592d04fa09.svg" alt="\(\delta\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, which will help us: <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/3ec40980bb4.svg" alt="\begin{equation}
  ((q,s),\sigma w) \sststile{M}{}((q',s'),w) \iff (q,\sigma w) \sststile{M_1}{} (q',w) \text{ and } (s, \sigma w)\sststile{M_2}{}(s',w) \quad \ref{tat-dfa-config}
\end{equation}
" style="height: 1.6963em; vertical-align: -0.4711em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

where <img src="/ltximg/7c919ce6dc3.svg" alt="\(\sigma \in \Sigma, w \in \Sigma^*\)" style="height: 0.9640em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, and so by [induction](20220707T193301--induction__math.org), we can turn it into: <br/>


<div id="orgab4f662" class="equation-container">
<span class="equation">
<img src="/ltximg/229b70fe64a.svg" alt="\begin{equation}
  ((q,s),uw) \sststile{M}{*} ((q',s'),w) \iff (q,uw) \sststile{M_1}{*}(q',w) \text{ and }(s,uw)\sststile{M_1}{*}(s',w)
\end{equation}
" style="height: 1.6963em; vertical-align: -0.4711em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

we need to show that <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/60a9b470cbe.svg" alt="\begin{align}
  L(M) &amp;amp;= L(M_1)\cap L(M_2)\\
  &amp;amp;= \{w\mid(s,w)\sststile{M_1}{*}(q,\varepsilon),q \in F_1\} \cap \{w\mid(s,w)\sststile{M_2}{*}(q,\varepsilon),q \in F_2\}  \label{eq-reglang-2}
\end{align}
" style="height: 3.4081em; vertical-align: -0.4711em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

by def-dfa-reglang, the language that <img src="/ltximg/48b15ce2f17.svg" alt="\(M\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> recognizes is <br/>


<div id="org1107452" class="equation-container">
<span class="equation">
<img src="/ltximg/80be478f1c4.svg" alt="\begin{equation}
  L(M)=\{w\mid((r_1,r_2),w) \sststile{M}{*}((\hat q_1,\hat q_2),\varepsilon), (\hat q_1,\hat q_2) \in F_1 \times F_2\}
\end{equation}
" style="height: 1.5983em; vertical-align: -0.3731em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

by eq-reglang-1, eq-reglang-2 and eq-reglang-3 are equivalent. <br/>

</div>

(Dr. Noa Lewenstein, ) <br/>
(Michael Sipser, 2012) <br/>

</div>

<div class="my_example">

<div class="problem">

let <img src="/ltximg/98991d8c3e8.svg" alt="\(L_1,L_2\)" style="height: 0.9586em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> be regular languages, we denote by <img src="/ltximg/1f939c7e36e.svg" alt="\(L_1 \triangledown L_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> the language of those words in <img src="/ltximg/7d7b9b7b626.svg" alt="\(L_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> that have a prefix in <img src="/ltximg/2e9fe2a34d2.svg" alt="\(L_1\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" />. prove that <img src="/ltximg/1f939c7e36e.svg" alt="\(L_1 \triangledown L_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> is a regular language. <br/>

</div>

<div class="solution">

let <img src="/ltximg/ca2dd2daa45.svg" alt="\(A_1,A_2\)" style="height: 0.9586em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> be the DFAs of <img src="/ltximg/98991d8c3e8.svg" alt="\(L_1,L_2\)" style="height: 0.9586em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, respectively. we can construct the DFA that recognizes <img src="/ltximg/1f939c7e36e.svg" alt="\(L_1 \triangledown L_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> as: <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/49ef43c42aa.svg" alt="\begin{align*}
  q_0 &amp;amp;= \begin{cases}
           ({A_2}_{q_0}, {A_1}_{q_0}, 1) &amp;amp; {A_1}_{q_0} \in {A_1}_F \text{ and } {A_2}_{q_0} \in {A_2}_F\\
           ({A_2}_{q_0}, {A_1}_{q_0}, 0) &amp;amp; {A_1}_{q_0} \notin {A_1}_F \text{ or } {A_2}_{q_0} \notin {A_2}_F\\
        \end{cases},\\
  Q &amp;amp;= {A_2}_Q \times {A_1}_Q \times \{0,1\}\\
  \delta(({A_2}_q, {A_1}_q, i), \sigma) &amp;amp;= \begin{cases}
                                   ({A_2}_\delta({A_2}_q), {A_1}_\delta({A_1}_q), 1) &amp;amp; i=1\\
                                   ({A_2}_\delta({A_2}_q), {A_1}_\delta({A_1}_q), 1) &amp;amp; {A_1}_\delta({A_1}_q) \in {A_1}_F\\
                                   ({A_2}_\delta({A_2}_q), {A_1}_\delta({A_1}_q), 0) &amp;amp; {A_1}_\delta({A_1}_q) \notin {A_1}_F\\
                                 \end{cases}\\
  F &amp;amp;= {A_2}_F \times {A_1}_Q\times \{1\}
\end{align*}
" style="height: 10.8980em; vertical-align: -0.4020em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

where <img src="/ltximg/6332eb5b3f2.svg" alt="\(L(A_1)=L_1,L(A_2)=L_2,L(A)=L_1 \triangledown L_2\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/f54542c684e.svg" alt="\(A_1=({A_1}_Q, {A_1}_{\Sigma}, {A_1}_{\delta}, {A_1}_{q_0}, {A_1}_F),A_1=({A_2}_Q, {A_2}_{\Sigma}, {A_2}_{\delta}, {A_2}_{q_0}, {A_2}_F),(Q, \Sigma, \delta, q_0, F)\)" style="height: 1.1628em; vertical-align: -0.3786em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
for simplicity its assumed that <img src="/ltximg/98991d8c3e8.svg" alt="\(L_1,L_2\)" style="height: 0.9586em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> are over the same alphabet, so <img src="/ltximg/7234f94bb20.svg" alt="\({A_1}_{\Sigma}={A_2}_{\Sigma}=\Sigma\)" style="height: 0.9695em; vertical-align: -0.2452em; display: inline-block" class="org-latex org-latex-inline" />, the proof that <img src="/ltximg/58b6138ac05.svg" alt="\(A\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> recognizes <img src="/ltximg/1f939c7e36e.svg" alt="\(L_1 \triangledown L_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> can be done by [induction](20220707T193301--induction__math.org). <br/>

</div>

</div>

<div class="my_example">

<div class="problem">

let <img src="/ltximg/79e36567062.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> be a regular language, define <img src="/ltximg/9fe0af61aa7.svg" alt="\(L'=\{w \mid w_1w \in L, w_1 \in \Sigma^*\}\)" style="height: 1.0801em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. describe <img src="/ltximg/4117b8165d5.svg" alt="\(L'\)" style="height: 0.8351em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> with words and prove <img src="/ltximg/4117b8165d5.svg" alt="\(L'\)" style="height: 0.8351em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is a regular language <br/>

</div>

<div class="solution">

<img src="/ltximg/4117b8165d5.svg" alt="\(L'\)" style="height: 0.8351em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is the language of the suffixes of words from <img src="/ltximg/79e36567062.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
let <img src="/ltximg/a37571c6469.svg" alt="\(A=(Q,\Sigma,\delta,q_0,F)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> be a dfa such that <img src="/ltximg/8c9fab3551f.svg" alt="\(L(A)=L\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, let <img src="/ltximg/56dd4861196.svg" alt="\(A'=(Q',\Sigma,\delta',q_0',F')\)" style="height: 1.0801em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> where <img src="/ltximg/fa61f98e1dd.svg" alt="\(Q'=Q \cup \{q_0'\}\)" style="height: 1.0801em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> where <img src="/ltximg/562aeaaef4d.svg" alt="\(q_0' \notin Q,\delta'=\delta \cup \{(q_0',\varepsilon,p) \mid p \text{ is a state reachable by } A\},F'=F\)" style="height: 1.0801em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. here we're treating the transition function as a set (or table) of 3-tuples where the first is the source state, the second is the symbol and the third is the destination state (informal). <img src="/ltximg/ff99cffd775.svg" alt="\(A'\)" style="height: 0.8351em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> recognizes <img src="/ltximg/4117b8165d5.svg" alt="\(L'\)" style="height: 0.8351em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. <br/>

</div>

</div>

<div class="my_example">

<div class="problem">

let <img src="/ltximg/1fa0b4411da.svg" alt="\(L_1 \% L_2 = \{w \mid w \text{ is made up of two disjoint subsequences } w_1 \in L_1,w_2 \in L_2\}\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, prove <img src="/ltximg/3fc8ebd1944.svg" alt="\(L_1 \% L_2\)" style="height: 0.9804em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> is a regular language. <br/>

</div>

<div class="solution">

let <img src="/ltximg/ca2dd2daa45.svg" alt="\(A_1,A_2\)" style="height: 0.9586em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> be the DFAs recognizing <img src="/ltximg/98991d8c3e8.svg" alt="\(L_1,L_2\)" style="height: 0.9586em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, i.e. <img src="/ltximg/3c88ed3596b.svg" alt="\(L(A_2)=L_2,L(A_1)=L_1\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, such that <img src="/ltximg/5ba8c2a120a.svg" alt="\(A_1=(Q_1,\Sigma,q_0^1,\delta_1,F_1),A_2=(Q_2,\Sigma,q_0^2,\delta_2,F_2)\)" style="height: 1.1411em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, we define <img src="/ltximg/7234c84c484.svg" alt="\(A=(Q,\Sigma,q_0,\delta,F)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> such that <img src="/ltximg/664815e0d32.svg" alt="\(Q=Q_1 \times Q_2,q_0=(q_0^1,q_0^2),F=F_1 \times F_2,\delta=\{((p_1,p_2),\sigma,(\delta_1(p_1,\sigma),p_2)),((p_1,p_2),\sigma,(p_1,\delta_2(p_2,\sigma))) \mid p_1 \in Q_1,p_2 \in Q_2,\sigma \in \Sigma\}\)" style="height: 1.1411em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. the NFA <img src="/ltximg/58b6138ac05.svg" alt="\(A\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> recognizes <img src="/ltximg/3fc8ebd1944.svg" alt="\(L_1 \% L_2\)" style="height: 0.9804em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" />. this works because the words are disjoint (dont share the same letters). <br/>

</div>

</div>

<div class="lemma" id="lem-reglang-reversal-closure">

regular languages are closed under [reversal](20231229T155810--language-reversal__math.org). <br/>

</div>

<div class="my_example">

<div class="problem">

let <img src="/ltximg/79e36567062.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> be a regular language, prove <img src="/ltximg/faa2ba4b5e1.svg" alt="\(L^R\)" style="height: 0.9228em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is a regular language. <br/>

</div>

<div class="solution">

let <img src="/ltximg/58b6138ac05.svg" alt="\(A\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> be a DFA such that <img src="/ltximg/b1fdc487a72.svg" alt="\(L(A)=L,A=(Q,\Sigma,q_0,\delta,F)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, define <img src="/ltximg/2ebf140746a.svg" alt="\(A'=(Q',\Sigma,q_0',\delta',F'),Q'=Q \cup \{q_0'\}\)" style="height: 1.0801em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> such that <img src="/ltximg/23c24c9d611.svg" alt="\(q_0' \notin Q,\delta'=\{(p,\theta,q) \mid (q,\sigma,p) \in \delta\} \cup \{(q_0',\varepsilon,p) \mid p \in F\},F'=\{q_0\}\)" style="height: 1.0801em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <img src="/ltximg/ff99cffd775.svg" alt="\(A'\)" style="height: 0.8351em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> recognizes <img src="/ltximg/faa2ba4b5e1.svg" alt="\(L^R\)" style="height: 0.9228em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. <br/>

</div>

</div>

<div class="my_example">

<div class="claim">

the language <img src="/ltximg/42e85c988c5.svg" alt="\(L=\Set{a^nb^m \given n \neq m}\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> is irregular. <br/>

</div>

<div class="proof">

assume in contradiction that <img src="/ltximg/79e36567062.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is regular, by lem-reglang-difference-closure, regular languages are closed under difference, so the language <img src="/ltximg/5019d9dbadb.svg" alt="\(\overline{L}=\Set{a^*b^*}\setminus\Set{a^nb^m \given n \neq m}=\Set{a^nb^m \given n=m}\)" style="height: 1.2090em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> would also be regular, but this contradicts with exa-pumping-lemma-1, which means that our assumption that <img src="/ltximg/79e36567062.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is regular cannot be true. <br/>

</div>

</div>

<div class="lemma" id="lem-reglang-prefix-closure">

let <img src="/ltximg/79e36567062.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> be a regular language, <img src="/ltximg/3bf6fc27515.svg" alt="\(\operatorname{Pref} L\)" style="height: 0.7735em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, defined by <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/dba11a9395d.svg" alt="\begin{equation}
  \operatorname{Pref}(L) = \Set{x \in \Sigma^* \given \exists xy \in L( y \in \Sigma^*)},
\end{equation}
" style="height: 1.5194em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

is also a regular language. <br/>
(Dr. Noa Lewenstein, ) <br/>

</div>

<div class="proof">

let <img src="/ltximg/9a0fff5c8a7.svg" alt="\(M=(Q,\Sigma,\delta,q_0,F)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> be a DFA such that <img src="/ltximg/3b724cc36ae.svg" alt="\(L(M)=L\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, we construct <img src="/ltximg/a4ee04dd467.svg" alt="\(M'=(Q',\Sigma',\delta',q_0',F')\)" style="height: 1.0801em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> such that <img src="/ltximg/f9738b517cc.svg" alt="\(L(M')=\operatorname{Pref}(L)\)" style="height: 1.0801em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
the idea is: for every state in <img src="/ltximg/48b15ce2f17.svg" alt="\(M\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> that has a path to an accept state in <img src="/ltximg/48b15ce2f17.svg" alt="\(M\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> we define an accept state in <img src="/ltximg/5e67ab3af98.svg" alt="\(M'\)" style="height: 0.8351em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, the construction is as follows: <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/980887c025a.svg" alt="\begin{equation}
  F'=\Set{q \given \exists y \in \Sigma^*,\exists f \in F((q,y) \sststile{M}{*} (f,\varepsilon))}.
\end{equation}
" style="height: 1.5983em; vertical-align: -0.3731em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

we need to show the correctness of the construction, i.e. <img src="/ltximg/f9738b517cc.svg" alt="\(L(M')=\operatorname{Pref}(L)\)" style="height: 1.0801em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, we show this by [double inclusion](20240103T175830--set-equality__.org), for <img src="/ltximg/43404de1d01.svg" alt="\(\supseteq\)" style="height: 0.8549em; vertical-align: -0.1824em; display: inline-block" class="org-latex org-latex-inline" />: <img src="/ltximg/9ede356ab3c.svg" alt="\(x \in \operatorname{Pref}(L) \implies \exists y \in \Sigma^*\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> such that <img src="/ltximg/310fd469e8e.svg" alt="\(xy \in L \implies \exists y \in \Sigma^*\)" style="height: 0.9695em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> such that <img src="/ltximg/102ee34ee24.svg" alt="\((q,xy) \sststile{M}{*} (f,\varepsilon)\)" style="height: 1.3893em; vertical-align: -0.3731em; display: inline-block" class="org-latex org-latex-inline" /> where <img src="/ltximg/f0aba0811a8.svg" alt="\(f \in F\)" style="height: 0.9695em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />. i.e. there exists <img src="/ltximg/a0ce93e9ce3.svg" alt="\(q \in Q\)" style="height: 0.9586em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> such that <img src="/ltximg/3d875c6da56.svg" alt="\((q_0,xy) \sststile{M}{*} (q,y) \sststile{M}{*} (f,\varepsilon)\)" style="height: 1.3893em; vertical-align: -0.3731em; display: inline-block" class="org-latex org-latex-inline" /> where <img src="/ltximg/f0aba0811a8.svg" alt="\(f \in F\)" style="height: 0.9695em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />. thus <img src="/ltximg/d5d61b138dc.svg" alt="\(q \in F'\)" style="height: 1.0257em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> and thus <img src="/ltximg/5a86bc6ba5f.svg" alt="\((q_0',x) \sststile{M'}{*} (q,\varepsilon)\)" style="height: 1.4885em; vertical-align: -0.4723em; display: inline-block" class="org-latex org-latex-inline" /> where <img src="/ltximg/d5d61b138dc.svg" alt="\(q \in F'\)" style="height: 1.0257em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> (because the transitions of <img src="/ltximg/5e67ab3af98.svg" alt="\(M'\)" style="height: 0.8351em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> are the same as those of <img src="/ltximg/48b15ce2f17.svg" alt="\(M\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />) and thus <img src="/ltximg/4a7dae16d30.svg" alt="\(x \in L(M')\)" style="height: 1.0801em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. for <img src="/ltximg/0d403dfa791.svg" alt="\(\subseteq \)" style="height: 0.8549em; vertical-align: -0.1824em; display: inline-block" class="org-latex org-latex-inline" />: <img src="/ltximg/bfe131b154b.svg" alt="\(x \in L(M') \implies (q_0',x) \sststile{M'}{*} (q,\varepsilon)\)" style="height: 1.4885em; vertical-align: -0.4723em; display: inline-block" class="org-latex org-latex-inline" /> where <img src="/ltximg/d5d61b138dc.svg" alt="\(q \in F'\)" style="height: 1.0257em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />. because the transitions in <img src="/ltximg/5e67ab3af98.svg" alt="\(M'\)" style="height: 0.8351em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> are similar to those in <img src="/ltximg/5e67ab3af98.svg" alt="\(M'\)" style="height: 0.8351em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/9b1af15382a.svg" alt="\(q_0'=q_0\)" style="height: 1.0783em; vertical-align: -0.2924em; display: inline-block" class="org-latex org-latex-inline" />, <img src="/ltximg/83f1657db21.svg" alt="\((q_0,x) \sststile{M'}{*} (q,\varepsilon)\)" style="height: 1.4885em; vertical-align: -0.4723em; display: inline-block" class="org-latex org-latex-inline" /> where <img src="/ltximg/c6ec566130d.svg" alt="\(\exists y \in \Sigma^*(q \in F')\)" style="height: 1.0801em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> such that <img src="/ltximg/abe80429ea6.svg" alt="\((q,y)\sststile{M'}{*}(f,\varepsilon)\)" style="height: 1.4885em; vertical-align: -0.4723em; display: inline-block" class="org-latex org-latex-inline" /> (by definition of <img src="/ltximg/9558ba5755c.svg" alt="\(F'\)" style="height: 0.8351em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />). thus there exists <img src="/ltximg/ba292cdafe0.svg" alt="\(y \in \Sigma^*\)" style="height: 0.9640em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> such that <img src="/ltximg/e2162b14245.svg" alt="\((q_0,xy)\sststile{M'}{*}(q,y)\sststile{M'}{*}(f,\varepsilon)\)" style="height: 1.4885em; vertical-align: -0.4723em; display: inline-block" class="org-latex org-latex-inline" /> thus <img src="/ltximg/f3cfd87508b.svg" alt="\(x \in \operatorname{Pref}(L)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>

</div>

<div class="lemma">

given <img src="/ltximg/d92510dcf86.svg" alt="\(L_1,L\)" style="height: 0.9586em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> are regular languages, <img src="/ltximg/bf6668d40b2.svg" alt="\(L/L_1\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, defined by <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/eb9e6284c09.svg" alt="\begin{equation}
  L/L_1 \defeq \Set{x \in \Sigma^* \given xy \in L, y \in L_1},
\end{equation}
" style="height: 1.5194em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

is also a regular language. <br/>
(Dr. Noa Lewenstein, ) <br/>

</div>

