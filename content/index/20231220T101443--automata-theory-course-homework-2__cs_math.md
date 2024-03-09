+++
title = "automata theory course homework 2"
author = ["mahmood"]
description = "homework on nondeterminstic finite automata"
date = 2024-03-01T00:00:00+02:00
tags = ["cs", "math"]
draft = false
+++

<div class="problem">

let <img src="/ltximg/7c012388408.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> be the [language](20231116T134552--language__math.org) of all the words over <img src="/ltximg/6fc6a12653e.svg" alt="\(\{a,b\}\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> of which the first symbol is similar to the second to last one. (note: all possible words of length 2 are in the language). draw a [nondeterministic finite automaton](20231119T191125--nondeterministic-finite-automaton__math.org) that accepts this language. <br/>

</div>

<div class="solution">

applying the union construction to 2 automatons where the first, <img src="/ltximg/48b414399ef.svg" alt="\(A_1\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> (see fig-automata-homework2-1) recognizes words starting with the symbol <img src="/ltximg/942eecb938a.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> and whose second-to-last symbol is also <img src="/ltximg/942eecb938a.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, and the second, <img src="/ltximg/86271645528.svg" alt="\(A_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> recognizes words starting with the symbol <img src="/ltximg/42cac82f75e.svg" alt="\(b\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> and whose second-to-last symbol is also <img src="/ltximg/42cac82f75e.svg" alt="\(b\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> makes the problem easier. <br/>


<div id="org5bb2310" class="equation-container">
<span class="equation">
<img src="/ltximg/81ada6c8961.svg" alt="\begin{tikzpicture}[initial text=, &amp;gt;={Stealth[round]}, node distance=2cm]
  \node[state] (q_0) {\(q_0\)};
  \node[state, initial, left of=q_0] (q) {\(q\)};
  \node[state, above right of=q_0, accepting] (q_1) {\(q_1\)};
  \node[state, below right of=q_0, accepting] (q_2) {\(q_2\)};
  \node[state, below right of=q_1] (q_3) {\(q_3\)};
  \path[-&amp;gt;] (q) edge node [above] {\(a\)} (q_0)
            (q) edge [loop above] node {\(b\)} (q)
            (q_0) edge node [above left] {\(a\)} (q_1)
            (q_0) edge node [below left] {\(b\)} (q_2)
            (q_2) edge node [below right] {\(b\)} (q_3)
            (q_2) edge [bend left=80] node [below left] {\(a\)} (q_0)
            (q_3) edge [loop above] node {\(b\)} (q_3)
            (q_3) edge node [above] {\(a\)} (q_0)
            (q_1) edge [loop above] node {\(a\)} (q_1)
            (q_1) edge [bend left=110, looseness=2.5] node [right] {\(b\)} (q_2)
            ;
\end{tikzpicture}
" style="height: 15.1764em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

an equivalent automaton that recognizes the same pattern where the symbols <img src="/ltximg/f16b4bfd4b6.svg" alt="\(a,b\)" style="height: 0.9695em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> have inverted roles can be constructed in the same fashion, and both automatons can be unionized to construct an NFA that recognizes both patterns. the loop on state <img src="/ltximg/8e22f36a85f.svg" alt="\(q\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> can be dropped when the NFA is constructed to let the computation path simply die if the first symbol isnt <img src="/ltximg/942eecb938a.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> (or <img src="/ltximg/42cac82f75e.svg" alt="\(b\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> in the case of the inverted situation). <br/>

</div>

<div class="solution">

i realized later that it could be done more easily, see fig-automata-homework2-2. <br/>


<div id="org98b433a" class="equation-container">
<span class="equation">
<img src="/ltximg/3b4d863b3f2.svg" alt="\begin{tikzpicture}[initial text=, &amp;gt;={Stealth[round]}, node distance=2cm]
  \node[state, initial] (q_0) {\(q_0\)};
  \node[state, above right of=q_0] (q_1) {\(q_1\)};
  \node[state, below right of=q_0] (q_2) {\(q_2\)};
  \node[state, right of=q_2] (q_3) {\(q_3\)};
  \node[state, right of=q_3, accepting] (q_4) {\(q_4\)};
  \node[state, right of=q_1] (q_5) {\(q_5\)};
  \node[state, right of=q_5, accepting] (q_6) {\(q_6\)};
  \node[state, right of=q_0] (q_7) {\(q_7\)};
  \node[state, right of=q_7, accepting] (q_8) {\(q_8\)};
  \node[state, right of=q_8] (q_9) {\(q_9\)};
  \path[-&amp;gt;] (q_0) edge node [above, left] {\(a\)} (q_1)
            (q_0) edge node [below, left] {\(b\)} (q_2)
            (q_2) edge node [below] {\(b\)} (q_3)
            (q_2) edge [loop below] node [below] {\(a,b\)} (q_3)
            (q_3) edge node [below] {\(a,b\)} (q_4)
            (q_1) edge node [above] {\(a\)} (q_5)
            (q_5) edge node [above] {\(a,b\)} (q_6)
            (q_1) edge [loop above] node {\(a,b\)} (q_1)
            (q_0) edge node [above] {\(a,b\)} (q_7)
            (q_7) edge node [above] {\(a,b\)} (q_8)
            (q_8) edge node [above] {\(a,b\)} (q_9)
            ;
\end{tikzpicture}
" style="height: 16.3891em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

</div>

<div class="problem">

let <img src="/ltximg/020ed90e7fc.svg" alt="\(L_1,L_2\)" style="height: 0.9586em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> be [regular language](20231201T201245--regular-language__math.org)s. we define <img src="/ltximg/7c012388408.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> in the following manner: <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/050a97141c6.svg" alt="\begin{equation}
  L = \{xyz \mid xz \in L_1,\ y \in L_2,\ x,y,z \in \Sigma^*\}.
\end{equation}
" style="height: 1.5194em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

prove that <img src="/ltximg/7c012388408.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is a regular language. <br/>

</div>

<div class="solution">

by lem-reglang-concat-closure, we can assume <img src="/ltximg/7d0f7f6e8eb.svg" alt="\(L_1 = L_x \circ L_z\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> where <img src="/ltximg/b8d48d2ba48.svg" alt="\(L_x,L_z\)" style="height: 0.9586em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> are two regular languages which each contain <img src="/ltximg/264a89f023b.svg" alt="\(x\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/9ab179244a8.svg" alt="\(z\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, respectively. again by lem-reglang-concat-closure we can construct another language <img src="/ltximg/4bb14a24f27.svg" alt="\(L_{xyz}\)" style="height: 1.0484em; vertical-align: -0.3296em; display: inline-block" class="org-latex org-latex-inline" /> such that <img src="/ltximg/ef03b6fceda.svg" alt="\(L_{xyz} = L_x \circ L_y \circ L_z\)" style="height: 1.0484em; vertical-align: -0.3296em; display: inline-block" class="org-latex org-latex-inline" /> where <img src="/ltximg/033ca90d11c.svg" alt="\(L_z\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> contains <img src="/ltximg/9ab179244a8.svg" alt="\(z\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. and by def-langconcat <img src="/ltximg/4bb14a24f27.svg" alt="\(L_{xyz}\)" style="height: 1.0484em; vertical-align: -0.3296em; display: inline-block" class="org-latex org-latex-inline" /> contains <img src="/ltximg/f7b1d6926bf.svg" alt="\(xyz\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> (is a language of all possible <img src="/ltximg/f7b1d6926bf.svg" alt="\(xyz\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />). <br/>
im not sure if im supposed to prove closure under concatenation, but the proof would be simply by concatenating two automatons that recognize each of both languages and connecting the first automaton's accepting states to the second automaton's initial state via arrows with <img src="/ltximg/528554eb55e.svg" alt="\(\varepsilon\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />'s along them (we'd also need to disable the accepting status of the previously accepting states in the first automaton). <br/>

</div>

<div class="problem">

let <img src="/ltximg/7c012388408.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> be a regular language, we define the following language: <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/298a802c5e9.svg" alt="\begin{equation}
  Double(L) = \Set*{\propto_1 \alpha_1 \propto_2 \alpha_2 \propto_3 \alpha_3 \dots \propto_n \alpha_n \given \begin{aligned} &amp;amp;\forall(1 \le i \le n)(\propto_i = \alpha_i \land \alpha_i \in \Sigma)\\ &amp;amp;\propto_1 \propto_2 \dots \propto_n \in L \end{aligned}}
\end{equation}
" style="height: 3.1364em; vertical-align: -0.5392em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

meaning that for each word in <img src="/ltximg/7c012388408.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> we duplicate all its letters to receive a word in <img src="/ltximg/650d3bf2a02.svg" alt="\(Double(L)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, prove that <img src="/ltximg/650d3bf2a02.svg" alt="\(Double(L)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> is also a regular language. <br/>

</div>

<div class="solution">

if i understand it correctly, the problem is about duplicating letters, for example <img src="/ltximg/b199787773a.svg" alt="\(aby \to aabbyy\)" style="height: 0.9695em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />. hopefully i got it right. the notation in the original homework pdf file is unclear and just horrible by the way. <br/>
let <img src="/ltximg/16358959017.svg" alt="\(A=\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> be a DFA (or NFA, doesnt matter) such that <img src="/ltximg/2a646bdf274.svg" alt="\(L(A)=L\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, the idea is to modify this automaton by duplicating the states by making a copy of each and redirecting from the original to it using an arrow with the proper symbol, so that a path to an accepting state would be a modified version of the "original" with duplicated letters. <br/>
let <img src="/ltximg/22405ff16bd.svg" alt="\(A'\)" style="height: 0.8351em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> such that <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/f784fad15b1.svg" alt="\begin{align*}
  A' &amp;amp; =(Q', \Sigma, \delta', q_0, F')\\
  Q_1 &amp;amp;= \Set{q_i' \given q_i \in Q - \Set{q_0},1 \le i &amp;lt; n}\\
  Q' &amp;amp;= Q \cup Q_1\\
  \delta'(q_i \in Q,\sigma) &amp;amp;= \Set{q_i'} &amp;amp; \forall\sigma \in \Set{\theta \given ((q_{i-1},\theta),q_i) \in \delta}\\
  \delta'(q_i' \in Q_1,\sigma) &amp;amp;= \Set{\delta(q_i,\sigma)}\\
  F' &amp;amp;= \Set{q_i' \given q_i \in F}
\end{align*}
" style="height: 8.9772em; vertical-align: -0.4020em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

</div>

<div class="problem">

let <img src="/ltximg/f3b2de5caa1.svg" alt="\(B,C\)" style="height: 0.9586em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> be languages over <img src="/ltximg/174377e3d71.svg" alt="\(\Sigma=\{0,1\}\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, we define <img src="/ltximg/05bfa766f0b.svg" alt="\(L_{B1C}\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" />: <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/ed294175a1f.svg" alt="\begin{equation}
  L_{B1C} = \{w \in B \mid \exists x \in C, \#_1(w)=\#_1(x)\}.
\end{equation}
" style="height: 1.5194em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

prove that if <img src="/ltximg/792bcfb99f0.svg" alt="\(B\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/a4ae72f0ffd.svg" alt="\(C\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> are regular languages then <img src="/ltximg/05bfa766f0b.svg" alt="\(L_{B1C}\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> is aswell. <br/>
note: the notation <img src="/ltximg/615b114bb95.svg" alt="\(\#_1(x)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> denotes the number of times the symbol <img src="/ltximg/7bfe1637077.svg" alt="\(1\)" style="height: 0.7155em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> appears in the word <img src="/ltximg/264a89f023b.svg" alt="\(x\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. <br/>

</div>

<div class="solution">

the idea is this: let <img src="/ltximg/8c517f62919.svg" alt="\(A_B=(Q_B,\Sigma,\delta_B,q_{B0},F_B),A_C=(Q_C,\Sigma,\delta_C,q_{C0},F_C)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> be DFAs that each recognize <img src="/ltximg/f3b2de5caa1.svg" alt="\(B,C\)" style="height: 0.9586em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, respectively. for a word that <img src="/ltximg/910842d6844.svg" alt="\(A_B\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> accepts, we input the same word into <img src="/ltximg/52abc74c33a.svg" alt="\(A_C\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> disregarding all arrows with zeros and only considering the arrows with 1's, if our modified version of <img src="/ltximg/52abc74c33a.svg" alt="\(A_C\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> accepts the word stripped of zeros then we know this word is in <img src="/ltximg/05bfa766f0b.svg" alt="\(L_{B1C}\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" />. (the wording isnt the best, so it may be best to look at the formal solution). <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/957b61c401a.svg" alt="\begin{align*}
  A_C' &amp;amp;= (Q_C,\Sigma,\delta_C',q_{C0},F_C)\\
  \delta_C' &amp;amp;= \Set*{\begin{cases} ((p_1,1),p_2) &amp;amp; \sigma=1\\ ((p_1,\varepsilon),p_2) &amp;amp; \sigma=0 \end{cases} \given ((p_1,\sigma),p_2) \in \delta_C} \cup \Set{((p,0),q) \given p \in Q_C, q \text{ is a sink for }0^*} \label{eq-automata-homework2-1}\\
  A' &amp;amp;= (Q',\Sigma,\delta',q_0',F')\\
  F' &amp;amp;= F_B \times F_C\\
  Q' &amp;amp;= Q_B \times Q_C\\
  \delta' &amp;amp;: ((p_1,p_2),\sigma) \mapsto (\delta_B(p_1,\sigma),\delta_C'(p_2,\sigma))\\
  q_0' &amp;amp;= (q_{B0}, q_{C0})
\end{align*}
" style="height: 12.4072em; vertical-align: -0.4020em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

actually i realize theres no need for a sink, we can just ignore inputs of 0, so the latter expression in eq-automata-homework2-1 can be discarded. <br/>

</div>

