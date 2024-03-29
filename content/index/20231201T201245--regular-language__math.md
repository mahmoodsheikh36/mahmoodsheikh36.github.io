+++
title = "regular language"
author = ["mahmood"]
date = 2024-02-26T00:00:00+02:00
tags = ["math"]
draft = false
+++

<div class="definition" id="def-reglang">

a language is called a _regular language_ if some finite automaton recognizes it. <br/>
(Michael Sipser, 2012 definition 1.16) <br/>

</div>

<div class="lemma" id="lem-reglang-concat-closure">

the class of [regular language](../20231201T201245--regular-language__math.md)s is closed under the concatenation operation. given regular languages <img src="/ltximg/4053f530eec.svg" alt="\(L_1\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/4c59a684223.svg" alt="\(L_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" />, we can construct a finite automaton that recognizes <img src="/ltximg/7125281a318.svg" alt="\(L_1 \circ L_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
(Michael Sipser, 2012 theorem 1.26) <br/>
(Michael Sipser, 2012 theorem 1.47) <br/>

</div>

<div class="lemma">

the class of regular languages is closed under the star operation. <br/>
(Michael Sipser, 2012 theorem 1.49) <br/>

</div>

<div class="lemma" id="lem-reglang-union-closure">

the class of regular languages is closed under union. <br/>
(Michael Sipser, 2012 theorem 1.25) <br/>
(Michael Sipser, 2012 theorem 1.45) <br/>

</div>

<div class="proof">

we have regular languages <img src="/ltximg/48b414399ef.svg" alt="\(A_1\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/86271645528.svg" alt="\(A_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> and want to prove that <img src="/ltximg/5664dcb9006.svg" alt="\(A_1 \cup A_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> is regular. the idea is to take two NFAs, <img src="/ltximg/7fd83df0cb9.svg" alt="\(N_1\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/06f158c2d4d.svg" alt="\(N_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> for <img src="/ltximg/48b414399ef.svg" alt="\(A_1\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/86271645528.svg" alt="\(A_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> , and combine them into one new NFA, <img src="/ltximg/bd89d606b5a.svg" alt="\(N\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
machine <img src="/ltximg/bd89d606b5a.svg" alt="\(N\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> must accept its input if either <img src="/ltximg/7fd83df0cb9.svg" alt="\(N_1\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> or <img src="/ltximg/06f158c2d4d.svg" alt="\(N_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> accepts this input. the new machine has a new start state that branches to the start states of the old machines with <img src="/ltximg/528554eb55e.svg" alt="\(\varepsilon\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> arrows. in this way, the new machine nondeterministically guesses which of the two machines accepts the input. if one of them accepts the input, <img src="/ltximg/bd89d606b5a.svg" alt="\(N\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> will accept it, too. <br/>
we represent this construction in [fig-reglang-1](20231201T201245--regular-language__math.md). on the left, we indicate the start and accept states of machines <img src="/ltximg/7fd83df0cb9.svg" alt="\(N_1\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/06f158c2d4d.svg" alt="\(N_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> with large circles and some additional states with small circles. on the right, we show how to combine <img src="/ltximg/7fd83df0cb9.svg" alt="\(N_1\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/06f158c2d4d.svg" alt="\(N_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> into <img src="/ltximg/bd89d606b5a.svg" alt="\(N\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> by adding additional transition arrows. <br/>


<div id="org8d52951" class="equation-container">
<span class="equation">
<img src="/ltximg/7ecdb636c65.svg" alt="\begin{tikzpicture}[initial text=, &amp;gt;={Stealth[round]}, node distance=2cm]
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

let <img src="/ltximg/78857a9b803.svg" alt="\(N_1=(Q_1,\Sigma,\delta_1,q_1,F_1)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> recognize <img src="/ltximg/48b414399ef.svg" alt="\(A_1\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" />, and <img src="/ltximg/9feeff1d532.svg" alt="\(N_2=(Q_2,\Sigma,\delta_2,q_2,F_2)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> recognize <img src="/ltximg/86271645528.svg" alt="\(A_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
construct <img src="/ltximg/34bcc1de7d9.svg" alt="\(N=(Q,\Sigma,\delta,q_0,F)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> to recognize <img src="/ltximg/5664dcb9006.svg" alt="\(A_1 \cup A_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" />. <br/>

1.  <img src="/ltximg/12a514f7cf2.svg" alt="\(Q=\{q_0\} \cup Q_1 \cup Q_2\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
    the states of <img src="/ltximg/bd89d606b5a.svg" alt="\(N\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> are all the states of <img src="/ltximg/7fd83df0cb9.svg" alt="\(N_1\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/06f158c2d4d.svg" alt="\(N_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" />, with the addition of a new start state <img src="/ltximg/de31ec49df7.svg" alt="\(q_0\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
2.  the state <img src="/ltximg/de31ec49df7.svg" alt="\(q_0\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> is the start state of <img src="/ltximg/bd89d606b5a.svg" alt="\(N\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
3.  the set of accept states <img src="/ltximg/4493fc1b8fd.svg" alt="\(F=F_1 \cup F_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
    the accept states of <img src="/ltximg/bd89d606b5a.svg" alt="\(N\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> are all the accept states of <img src="/ltximg/7fd83df0cb9.svg" alt="\(N_1\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/06f158c2d4d.svg" alt="\(N_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" />. that way, <img src="/ltximg/bd89d606b5a.svg" alt="\(N\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> accepts if either <img src="/ltximg/7fd83df0cb9.svg" alt="\(N_1\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> accepts or <img src="/ltximg/06f158c2d4d.svg" alt="\(N_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> accepts. <br/>
4.  define <img src="/ltximg/bde25235d58.svg" alt="\(\delta\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> so that for any <img src="/ltximg/0b785e9a8e8.svg" alt="\(q \in Q\)" style="height: 0.9586em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> and any <img src="/ltximg/89c9b6da282.svg" alt="\(a \in \Sigma_{\varepsilon}\)" style="height: 0.9205em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" />, <br/>
    
    
    <div class="equation-container">
    <span class="equation">
    <img src="/ltximg/ed399d271e4.svg" alt="   \begin{equation}
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

if <img src="/ltximg/bfb79e58d2f.svg" alt="\(M\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is a DFA that recognizes language <img src="/ltximg/792bcfb99f0.svg" alt="\(B\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, swapping the accept and nonaccept states in <img src="/ltximg/bfb79e58d2f.svg" alt="\(M\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> yields a new DFA recognizing the complement of <img src="/ltximg/792bcfb99f0.svg" alt="\(B\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. consequently, the class of regular languages is closed under complement. <br/>
(Michael Sipser, 2012 exercise 1.14) <br/>

</div>

<div class="lemma" id="lem-reglang-difference-closure">

the class of regular languages is closed under difference. <br/>
(Dr. Noa Lewenstein, ????) <br/>

</div>

<div class="dummy">

<div class="lemma" id="lem-reglang-intersect-closure">

the class of regular languages is closed under intersection. <br/>

</div>

<div class="proof">

let <img src="/ltximg/f07aff772ba.svg" alt="\(M_1\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> recognize <img src="/ltximg/48b414399ef.svg" alt="\(A_1\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" />, where <img src="/ltximg/c4d156d46aa.svg" alt="\(M_1=(Q_1,\Sigma,\delta_1,q_1,F_1)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, and <img src="/ltximg/70226aaacaa.svg" alt="\(M_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> recognize <img src="/ltximg/86271645528.svg" alt="\(A_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" />, where <img src="/ltximg/b911249a080.svg" alt="\(M_2=(Q_2,\Sigma,\delta_2,q_2,F_2)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
construct <img src="/ltximg/bfb79e58d2f.svg" alt="\(M\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> to recognize <img src="/ltximg/c5a37562d45.svg" alt="\(A_1 \cap A_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" />, where <img src="/ltximg/5751c2ff205.svg" alt="\(M=(Q,\Sigma,\delta,q_0,F)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>

1.  <img src="/ltximg/3dd646cc2c3.svg" alt="\(Q=\{(r_1,r_2) \mid r_1 \in Q_1 \text{ and } r_2 \in Q_2\}\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. this set is the cartesian product of sets <img src="/ltximg/70ab3e338cb.svg" alt="\(Q_1\)" style="height: 0.9586em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/125a4810688.svg" alt="\(Q_2\)" style="height: 0.9586em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> and is written <img src="/ltximg/559d53d7fc5.svg" alt="\(Q_1 \times Q_2\)" style="height: 0.9586em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
2.  <img src="/ltximg/400e9daadfe.svg" alt="\(\Sigma\)" style="height: 0.7735em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, the alphabet, is the same as in <img src="/ltximg/f07aff772ba.svg" alt="\(M_1\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/70226aaacaa.svg" alt="\(M_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" />. we assume for simplicity that both <img src="/ltximg/f07aff772ba.svg" alt="\(M_1\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/70226aaacaa.svg" alt="\(M_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> have the same input alphabet <img src="/ltximg/400e9daadfe.svg" alt="\(\Sigma\)" style="height: 0.7735em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. the theorem remains true if they have different alphabets, <img src="/ltximg/4375580e79a.svg" alt="\(\Sigma_1,\Sigma_2\)" style="height: 0.9640em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />. we would then modify the proof to let <img src="/ltximg/e8cd0b9ee2e.svg" alt="\(\Sigma=\Sigma_1 \cap \Sigma_2\)" style="height: 0.9205em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
3.  <img src="/ltximg/bde25235d58.svg" alt="\(\delta\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, the transition function, is defined as follows. for each <img src="/ltximg/3aa638c06d7.svg" alt="\((r_1,r_2) \in Q\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> and each <img src="/ltximg/28bf43e70ed.svg" alt="\(a \in \Sigma\)" style="height: 0.8118em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />, let <br/>
    <img src="/ltximg/de2c8c72b29.svg" alt="\[ \delta((r_1,r_2),a)=(\delta_1(r_1,a),\delta_2(r_2,a)) \]" style="height: 1.5194em; display: block" class="org-latex org-latex-block" />. <br/>
    hence <img src="/ltximg/bde25235d58.svg" alt="\(\delta\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> gets a state of <img src="/ltximg/bfb79e58d2f.svg" alt="\(M\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> (which actually is a pair of states from <img src="/ltximg/f07aff772ba.svg" alt="\(M_1\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/70226aaacaa.svg" alt="\(M_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" />, together with an input symbol, and returns <img src="/ltximg/3fc65cc6c35.svg" alt="\(M's\)" style="height: 0.8351em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> next state. <br/>
4.  <img src="/ltximg/de31ec49df7.svg" alt="\(q_0\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> is the pair <img src="/ltximg/9eae7313363.svg" alt="\((q_1,q_2)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
5.  <img src="/ltximg/93cc2d25a66.svg" alt="\(F=F_1 \times F_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> <br/>

we propose the following equivalence from the definition of <img src="/ltximg/bde25235d58.svg" alt="\(\delta\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, which will help us: <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/8c771f488ac.svg" alt="\begin{equation}
  ((q,s),\sigma w) \sststile{M}{}((q',s'),w) \iff (q,\sigma w) \sststile{M_1}{} (q',w) \text{ and } (s, \sigma w)\sststile{M_2}{}(s',w) \quad \ref{tat-dfa-config}
\end{equation}
" style="height: 1.6963em; vertical-align: -0.4711em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

where <img src="/ltximg/ecb2c62c6d7.svg" alt="\(\sigma \in \Sigma, w \in \Sigma^*\)" style="height: 0.9640em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, and so by induction, we can turn it into: <br/>


<div id="org7ea6d1d" class="equation-container">
<span class="equation">
<img src="/ltximg/e59a19fade3.svg" alt="\begin{equation}
  ((q,s),uw) \sststile{M}{*} ((q',s'),w) \iff (q,uw) \sststile{M_1}{*}(q',w) \text{ and }(s,uw)\sststile{M_1}{*}(s',w)
\end{equation}
" style="height: 1.6963em; vertical-align: -0.4711em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

we need to show that <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/9193290b854.svg" alt="\begin{align}
  L(M) &amp;amp;= L(M_1)\cap L(M_2)\\
  &amp;amp;= \{w\mid(s,w)\sststile{M_1}{*}(q,\varepsilon),q \in F_1\} \cap \{w\mid(s,w)\sststile{M_2}{*}(q,\varepsilon),q \in F_2\}  \label{eq-reglang-2}
\end{align}
" style="height: 3.4081em; vertical-align: -0.4711em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

by definition, the language that <img src="/ltximg/bfb79e58d2f.svg" alt="\(M\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> recognizes is <br/>


<div id="org394d235" class="equation-container">
<span class="equation">
<img src="/ltximg/8ab86d6b761.svg" alt="\begin{equation}
  L(M)=\{w\mid((r_1,r_2),w) \sststile{M}{*}((\hat q_1,\hat q_2),\varepsilon), (\hat q_1,\hat q_2) \in F_1 \times F_2\}
\end{equation}
" style="height: 1.5983em; vertical-align: -0.3731em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

by [eq-reglang-1](20231201T201245--regular-language__math.md), [eq-reglang-2](20231201T201245--regular-language__math.md) and [eq-reglang-3](20231201T201245--regular-language__math.md) are equivalent. <br/>

</div>

(Dr. Noa Lewenstein, ) <br/>
(Michael Sipser, 2012) <br/>

</div>

<div class="my_example">

<div class="problem">

let <img src="/ltximg/020ed90e7fc.svg" alt="\(L_1,L_2\)" style="height: 0.9586em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> be regular languages, we denote by <img src="/ltximg/026276acdef.svg" alt="\(L_1 \triangledown L_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> the language of those words in <img src="/ltximg/4c59a684223.svg" alt="\(L_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> that have a prefix in <img src="/ltximg/4053f530eec.svg" alt="\(L_1\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" />. prove that <img src="/ltximg/026276acdef.svg" alt="\(L_1 \triangledown L_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> is a regular language. <br/>

</div>

<div class="solution">

let <img src="/ltximg/1efc65e3e18.svg" alt="\(A_1,A_2\)" style="height: 0.9586em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> be the DFAs of <img src="/ltximg/020ed90e7fc.svg" alt="\(L_1,L_2\)" style="height: 0.9586em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, respectively. we can construct the DFA that recognizes <img src="/ltximg/026276acdef.svg" alt="\(L_1 \triangledown L_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> as: <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/50d079edd17.svg" alt="\begin{align*}
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

where <img src="/ltximg/bd90e385f64.svg" alt="\(L(A_1)=L_1,L(A_2)=L_2,L(A)=L_1 \triangledown L_2\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/42d8598aa55.svg" alt="\(A_1=({A_1}_Q, {A_1}_{\Sigma}, {A_1}_{\delta}, {A_1}_{q_0}, {A_1}_F),A_1=({A_2}_Q, {A_2}_{\Sigma}, {A_2}_{\delta}, {A_2}_{q_0}, {A_2}_F),(Q, \Sigma, \delta, q_0, F)\)" style="height: 1.1628em; vertical-align: -0.3786em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
for simplicity its assumed that <img src="/ltximg/020ed90e7fc.svg" alt="\(L_1,L_2\)" style="height: 0.9586em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> are over the same alphabet, so <img src="/ltximg/708fd78e7a9.svg" alt="\({A_1}_{\Sigma}={A_2}_{\Sigma}=\Sigma\)" style="height: 0.9695em; vertical-align: -0.2452em; display: inline-block" class="org-latex org-latex-inline" />, the proof that <img src="/ltximg/331a4469ec0.svg" alt="\(A\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> recognizes <img src="/ltximg/026276acdef.svg" alt="\(L_1 \triangledown L_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> can be done by induction. <br/>

</div>

</div>

<div class="my_example">

<div class="problem">

let <img src="/ltximg/7c012388408.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> be a regular language, define <img src="/ltximg/97ebc4bf2f4.svg" alt="\(L'=\{w \mid w_1w \in L, w_1 \in \Sigma^*\}\)" style="height: 1.0801em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. describe <img src="/ltximg/8531524f966.svg" alt="\(L'\)" style="height: 0.8351em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> with words and prove <img src="/ltximg/8531524f966.svg" alt="\(L'\)" style="height: 0.8351em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is a regular language <br/>

</div>

<div class="solution">

<img src="/ltximg/8531524f966.svg" alt="\(L'\)" style="height: 0.8351em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is the language of the suffixes of words from <img src="/ltximg/7c012388408.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
let <img src="/ltximg/72621118944.svg" alt="\(A=(Q,\Sigma,\delta,q_0,F)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> be a dfa such that <img src="/ltximg/2a646bdf274.svg" alt="\(L(A)=L\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, let <img src="/ltximg/1bf1e0f1a27.svg" alt="\(A'=(Q',\Sigma,\delta',q_0',F')\)" style="height: 1.0801em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> where <img src="/ltximg/d017f691e3d.svg" alt="\(Q'=Q \cup \{q_0'\}\)" style="height: 1.0801em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> where <img src="/ltximg/b600a5e2fca.svg" alt="\(q_0' \notin Q,\delta'=\delta \cup \{(q_0',\varepsilon,p) \mid p \text{ is a state reachable by } A\},F'=F\)" style="height: 1.0801em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. here we're treating the transition function as a set (or table) of 3-tuples where the first is the source state, the second is the symbol and the third is the destination state (informal). <img src="/ltximg/22405ff16bd.svg" alt="\(A'\)" style="height: 0.8351em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> recognizes <img src="/ltximg/8531524f966.svg" alt="\(L'\)" style="height: 0.8351em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. <br/>

</div>

</div>

<div class="my_example">

<div class="problem">

let <img src="/ltximg/33f3f6f0b0a.svg" alt="\(L_1 \% L_2 = \{w \mid w \text{ is made up of two disjoint subsequences } w_1 \in L_1,w_2 \in L_2\}\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, prove <img src="/ltximg/46140a590f9.svg" alt="\(L_1 \% L_2\)" style="height: 0.9804em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> is a regular language. <br/>

</div>

<div class="solution">

let <img src="/ltximg/1efc65e3e18.svg" alt="\(A_1,A_2\)" style="height: 0.9586em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> be the DFAs recognizing <img src="/ltximg/020ed90e7fc.svg" alt="\(L_1,L_2\)" style="height: 0.9586em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, i.e. <img src="/ltximg/92fb407f1d2.svg" alt="\(L(A_2)=L_2,L(A_1)=L_1\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, such that <img src="/ltximg/b332542810a.svg" alt="\(A_1=(Q_1,\Sigma,q_0^1,\delta_1,F_1),A_2=(Q_2,\Sigma,q_0^2,\delta_2,F_2)\)" style="height: 1.1411em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, we define <img src="/ltximg/23519bc3159.svg" alt="\(A=(Q,\Sigma,q_0,\delta,F)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> such that <img src="/ltximg/999a6629af2.svg" alt="\(Q=Q_1 \times Q_2,q_0=(q_0^1,q_0^2),F=F_1 \times F_2,\delta=\{((p_1,p_2),\sigma,(\delta_1(p_1,\sigma),p_2)),((p_1,p_2),\sigma,(p_1,\delta_2(p_2,\sigma))) \mid p_1 \in Q_1,p_2 \in Q_2,\sigma \in \Sigma\}\)" style="height: 2.3171em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. the NFA <img src="/ltximg/331a4469ec0.svg" alt="\(A\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> recognizes <img src="/ltximg/46140a590f9.svg" alt="\(L_1 \% L_2\)" style="height: 0.9804em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" />. this works because the words are disjoint (dont share the same letters). <br/>

</div>

</div>

<div class="lemma" id="lem-reglang-reversal-closure">

regular languages are closed under reversal. <br/>

</div>

<div class="my_example">

<div class="problem">

let <img src="/ltximg/7c012388408.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> be a regular language, prove <img src="/ltximg/a1a9925cef5.svg" alt="\(L^R\)" style="height: 0.9228em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is a regular language. <br/>

</div>

<div class="solution">

let <img src="/ltximg/331a4469ec0.svg" alt="\(A\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> be a DFA such that <img src="/ltximg/c59ee99c31e.svg" alt="\(L(A)=L,A=(Q,\Sigma,q_0,\delta,F)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, define <img src="/ltximg/67f3cf4e49d.svg" alt="\(A'=(Q',\Sigma,q_0',\delta',F'),Q'=Q \cup \{q_0'\}\)" style="height: 1.0801em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> such that <img src="/ltximg/fed62327040.svg" alt="\(q_0' \notin Q,\delta'=\{(p,\theta,q) \mid (q,\sigma,p) \in \delta\} \cup \{(q_0',\varepsilon,p) \mid p \in F\},F'=\{q_0\}\)" style="height: 1.0801em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <img src="/ltximg/22405ff16bd.svg" alt="\(A'\)" style="height: 0.8351em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> recognizes <img src="/ltximg/a1a9925cef5.svg" alt="\(L^R\)" style="height: 0.9228em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. <br/>

</div>

</div>

<div class="my_example">

<div class="claim">

the language <img src="/ltximg/9234658e68d.svg" alt="\(L=\Set{a^nb^m \given n \neq m}\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> is irregular. <br/>

</div>

<div class="proof">

assume in contradiction that <img src="/ltximg/7c012388408.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is regular, by [lem-reglang-difference-closure](20231201T201245--regular-language__math.md), regular languages are closed under difference, so the language <img src="/ltximg/f7cbe5b77d9.svg" alt="\(\overline{L}=\Set{a^*b^*}\setminus\Set{a^nb^m \given n \neq m}=\Set{a^nb^m \given n=m}\)" style="height: 1.2090em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> would also be regular, but this contradicts with exa-pumping-lemma-1, which means that our assumption that <img src="/ltximg/7c012388408.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is regular cannot be true. <br/>

</div>

</div>

<div class="lemma" id="lem-reglang-prefix-closure">

let <img src="/ltximg/7c012388408.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> be a regular language, <img src="/ltximg/3a298562365.svg" alt="\(\operatorname{Pref} L\)" style="height: 0.7735em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, defined by <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/c3e350cb0cc.svg" alt="\begin{equation}
  \operatorname{Pref}(L) = \Set{x \in \Sigma^* \given \exists xy \in L( y \in \Sigma^*)},
\end{equation}
" style="height: 1.5194em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

is also a regular language. <br/>
(Dr. Noa Lewenstein, ) <br/>

</div>

<div class="proof">

let <img src="/ltximg/5751c2ff205.svg" alt="\(M=(Q,\Sigma,\delta,q_0,F)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> be a DFA such that <img src="/ltximg/6a362c47e74.svg" alt="\(L(M)=L\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, we construct <img src="/ltximg/175a61889bb.svg" alt="\(M'=(Q',\Sigma',\delta',q_0',F')\)" style="height: 1.0801em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> such that <img src="/ltximg/6050565cd37.svg" alt="\(L(M')=\operatorname{Pref}(L)\)" style="height: 1.0801em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
the idea is: for every state in <img src="/ltximg/bfb79e58d2f.svg" alt="\(M\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> that has a path to an accept state in <img src="/ltximg/bfb79e58d2f.svg" alt="\(M\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> we define an accept state in <img src="/ltximg/cdeed9e2fbb.svg" alt="\(M'\)" style="height: 0.8351em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, the construction is as follows: <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/87983f0cdcc.svg" alt="\begin{equation}
  F'=\Set{q \given \exists y \in \Sigma^*,\exists f \in F((q,y) \sststile{M}{*} (f,\varepsilon))}.
\end{equation}
" style="height: 1.5983em; vertical-align: -0.3731em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

we need to show the correctness of the construction, i.e. <img src="/ltximg/6050565cd37.svg" alt="\(L(M')=\operatorname{Pref}(L)\)" style="height: 1.0801em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, we show this by double inclusion, for <img src="/ltximg/5cfaa2be689.svg" alt="\(\supseteq\)" style="height: 0.8549em; vertical-align: -0.1824em; display: inline-block" class="org-latex org-latex-inline" />: <img src="/ltximg/757c9c0bdb3.svg" alt="\(x \in \operatorname{Pref}(L) \implies \exists y \in \Sigma^*\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> such that <img src="/ltximg/9ac7a3113a4.svg" alt="\(xy \in L \implies \exists y \in \Sigma^*\)" style="height: 0.9695em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> such that <img src="/ltximg/7df026e1f52.svg" alt="\((q,xy) \sststile{M}{*} (f,\varepsilon)\)" style="height: 1.3893em; vertical-align: -0.3731em; display: inline-block" class="org-latex org-latex-inline" /> where <img src="/ltximg/28223a8cff4.svg" alt="\(f \in F\)" style="height: 0.9695em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />. i.e. there exists <img src="/ltximg/0b785e9a8e8.svg" alt="\(q \in Q\)" style="height: 0.9586em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> such that <img src="/ltximg/1c140945540.svg" alt="\((q_0,xy) \sststile{M}{*} (q,y) \sststile{M}{*} (f,\varepsilon)\)" style="height: 1.3893em; vertical-align: -0.3731em; display: inline-block" class="org-latex org-latex-inline" /> where <img src="/ltximg/28223a8cff4.svg" alt="\(f \in F\)" style="height: 0.9695em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />. thus <img src="/ltximg/ddfd23f996b.svg" alt="\(q \in F'\)" style="height: 1.0257em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> and thus <img src="/ltximg/5fd921564ec.svg" alt="\((q_0',x) \sststile{M'}{*} (q,\varepsilon)\)" style="height: 1.4885em; vertical-align: -0.4723em; display: inline-block" class="org-latex org-latex-inline" /> where <img src="/ltximg/ddfd23f996b.svg" alt="\(q \in F'\)" style="height: 1.0257em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> (because the transitions of <img src="/ltximg/cdeed9e2fbb.svg" alt="\(M'\)" style="height: 0.8351em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> are the same as those of <img src="/ltximg/bfb79e58d2f.svg" alt="\(M\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />) and thus <img src="/ltximg/767813c8c9d.svg" alt="\(x \in L(M')\)" style="height: 1.0801em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. for <img src="/ltximg/716ec2779c6.svg" alt="\(\subseteq \)" style="height: 0.8549em; vertical-align: -0.1824em; display: inline-block" class="org-latex org-latex-inline" />: <img src="/ltximg/c6ab3c2ccd8.svg" alt="\(x \in L(M') \implies (q_0',x) \sststile{M'}{*} (q,\varepsilon)\)" style="height: 1.4885em; vertical-align: -0.4723em; display: inline-block" class="org-latex org-latex-inline" /> where <img src="/ltximg/ddfd23f996b.svg" alt="\(q \in F'\)" style="height: 1.0257em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />. because the transitions in <img src="/ltximg/cdeed9e2fbb.svg" alt="\(M'\)" style="height: 0.8351em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> are similar to those in <img src="/ltximg/cdeed9e2fbb.svg" alt="\(M'\)" style="height: 0.8351em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/60a6195fd59.svg" alt="\(q_0'=q_0\)" style="height: 1.0783em; vertical-align: -0.2924em; display: inline-block" class="org-latex org-latex-inline" />, <img src="/ltximg/3647b7a9155.svg" alt="\((q_0,x) \sststile{M'}{*} (q,\varepsilon)\)" style="height: 1.4885em; vertical-align: -0.4723em; display: inline-block" class="org-latex org-latex-inline" /> where <img src="/ltximg/d5ac3ac768b.svg" alt="\(\exists y \in \Sigma^*(q \in F')\)" style="height: 1.0801em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> such that <img src="/ltximg/ef0a99dfdec.svg" alt="\((q,y)\sststile{M'}{*}(f,\varepsilon)\)" style="height: 1.4885em; vertical-align: -0.4723em; display: inline-block" class="org-latex org-latex-inline" /> (by definition of <img src="/ltximg/8346b73b22e.svg" alt="\(F'\)" style="height: 0.8351em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />). thus there exists <img src="/ltximg/6b870188fb7.svg" alt="\(y \in \Sigma^*\)" style="height: 0.9640em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> such that <img src="/ltximg/6beddfd3167.svg" alt="\((q_0,xy)\sststile{M'}{*}(q,y)\sststile{M'}{*}(f,\varepsilon)\)" style="height: 1.4885em; vertical-align: -0.4723em; display: inline-block" class="org-latex org-latex-inline" /> thus <img src="/ltximg/797380323e6.svg" alt="\(x \in \operatorname{Pref}(L)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>

</div>

<div class="lemma">

given <img src="/ltximg/0e1d1ee90fe.svg" alt="\(L_1,L\)" style="height: 0.9586em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> are regular languages, <img src="/ltximg/671798f63a4.svg" alt="\(L/L_1\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, defined by <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/5452710e39e.svg" alt="\begin{equation}
  L/L_1 \defeq \Set{x \in \Sigma^* \given xy \in L, y \in L_1},
\end{equation}
" style="height: 1.5194em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

is also a regular language. <br/>
(Dr. Noa Lewenstein, ) <br/>

</div>

