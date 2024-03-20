+++
title = "automata theory course homework 4"
author = ["mahmood"]
date = 2024-03-01T00:00:00+02:00
tags = ["cs", "math"]
draft = false
+++

<div class="problem" id="pro-automata-homework4-1">

write the simplest possible [regular expression](../20231116T152828--regular-expression__math.md)s that define each of the following languages over <img src="/ltximg/d2c73b296c9.svg" alt="\(\Sigma=\Set{a,b}\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> <br/>
a. the language of words that end with an even number of <img src="/ltximg/942eecb938a.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />'s or with an odd number of <img src="/ltximg/42cac82f75e.svg" alt="\(b\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />'s. <br/>
b. the language of words in which the number of <img src="/ltximg/42cac82f75e.svg" alt="\(b\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />'s is not bigger than 2. <br/>
c. the language of words in which the string <img src="/ltximg/f331ceb80dd.svg" alt="\(aaa\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> appears exactly once. <br/>
d. the language of words in which the number of <img src="/ltximg/942eecb938a.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />'s is divisible by 2 but not by 3. <br/>

</div>

<div class="solution" id="sol-automata-homework4-1">

<div class="equation-container">
<span class="equation">
<img src="/ltximg/100a32730ff.svg" alt="\begin{align}
  &amp;amp;\underbrace{(((a \cup b)^* b)^*(aa)^*)}_{\text{ends with multiples of }aa} \cup \underbrace{(((a \cup b)^* a)^*(bb)^*b)}_{\text{ends with multiples of }bb\text{ followed by }b}.\\
  &amp;amp;\underbrace{a^*ba^*ba^*}_{2 \times b} \cup \underbrace{a^*ba^*}_{1 \times b} \cup \underbrace{a^*}_{0 \times b}.\\
  &amp;amp;(b \cup ab \cup aab)^*aaa(b \cup ba \cup baa)^*.
\end{align}
" style="height: 7.2705em; vertical-align: -0.4020em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

in relation to (4), that happens when the number of <img src="/ltximg/942eecb938a.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />'s isnt a multiple of 6, so that the number of <img src="/ltximg/942eecb938a.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />'s modulo 6 is 4 or 2, so we look for patterns of 6 <img src="/ltximg/942eecb938a.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />'s succeeded by 4 or 2. <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/fdd2c250865.svg" alt="\begin{equation}
  ((ab^*)^6 \cup \varepsilon)(ab^*)^2 \cup ((ab^*)^6 \cup \varepsilon)(ab^*)^4 = ((ab^*)^6 \cup \varepsilon) \circ ((ab^*)^2 \cup (ab^*)^4)
\end{equation}
" style="height: 1.5194em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

</div>

<div class="problem" id="pro-automata-homework4-2">

a. build a dfa with 4 states that recognizes the language defined by the expression <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/538dd72067a.svg" alt="   \begin{equation}
     (a(cd)^*b)^*.
   \end{equation}
" style="height: 1.5194em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

b. build a finite automaton with 4 states that recognizes the language defined by <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/fa920eb6e6a.svg" alt="   \begin{equation}
     ab \cup (a \cup ab)b^*.
   \end{equation}
" style="height: 1.5194em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

</div>

<div class="solution" id="sol-automata-homework4-2">

a. <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/cbc3c58e391.svg" alt="   \begin{tikzpicture}[initial text=, &amp;gt;={Stealth[round]}, node distance=2cm]
     \node[state, initial, accepting] (q_0) {};
     \node[state, right of=q_0] (q_1) {};
     \node[state, right of=q_1] (q_2) {};
     \node[state, right of=q_2] (q_3) {};
     \path[-&amp;gt;] (q_0) edge node [above] {\(a\)} (q_1)
               (q_1) edge node [above] {\(c\)} (q_2)
               (q_2) edge node [above] {\(d\)} (q_3)
               (q_3) edge [bend left] node [below] {\(c\)} (q_2)
               (q_3) edge [bend right] node [above] {\(b\)} (q_0)
               ;
   \end{tikzpicture}
" style="height: 6.4264em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

b. <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/472dfcfd915.svg" alt="   \begin{tikzpicture}[initial text=, &amp;gt;={Stealth[round]}, node distance=2cm]
     \node[state, initial] (q_0) {\(q_0\)};
     \node[state, above right of=q_0] (q_1) {\(q_1\)};
     \node[state, below right of=q_0] (q_2) {\(q_2\)};
     \node[state, right of=q_1] (q_3) {\(q_3\)};
     \node[state, right of=q_3, accepting] (q_4) {\(q_4\)};
     \node[state, above right of=q_2] (q_5) {\(q_5\)};
     \node[state, right of=q_2] (q_6) {\(q_6\)};
     \node[state, right of=q_5] (q_7) {\(q_7\)};
     \node[state, below right of=q_7, accepting] (q_8) {\(q_8\)};
     \path[-&amp;gt;] (q_0) edge node [above left] {\(\varepsilon\)} (q_1)
               (q_0) edge node [below left] {\(\varepsilon\)} (q_2)
               (q_1) edge node [above] {\(a\)} (q_3)
               (q_3) edge node [above] {\(b\)} (q_4)
               (q_2) edge node [above left] {\(\varepsilon\)} (q_5)
               (q_2) edge node [below] {\(\varepsilon\)} (q_6)
               (q_5) edge node [above] {\(a\)} (q_7)
               (q_6) edge node [below] {\(a\)} (q_8)
               (q_7) edge node [above right] {\(b\)} (q_8)
               (q_8) edge [out=70, in=0, looseness=4] node [above right] {\(b\)} (q_8)
               ;
     \draw[decorate, decoration={brace, amplitude=10px}]
       ($(q_1.west)+(0,20px)$) -- ($(q_4.east)+(0,20px)$) node [midway, above=10pt] {recognizes \(ab\)};
     \draw[decorate, decoration={brace, mirror, amplitude=10px}, yshift=0pt]
       ($(q_2.west)-(0,20px)$) -- ($(q_8.east)-(0,20px)$) node [midway, below=10pt] {recognizes \((a \cup ab)b^*\)};
   \end{tikzpicture}
" style="height: 17.1192em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

</div>

<div class="problem">

which of the following equivalences are correct? explain or find a counter example <br/>
a. <img src="/ltximg/40d05b75dc5.svg" alt="\((ab)^* a=a(ba)^*\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
b. <img src="/ltximg/4e257f3bbcc.svg" alt="\((a^*b)^*=(a\cup b)^*\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
c. <img src="/ltximg/6a6ac700ee3.svg" alt="\((aa)^*(a \cup \emptyset^*)=a^*\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
d. <img src="/ltximg/464b8bc6c35.svg" alt="\(a(ba \cup a)^*b=aa^*b(aa^*b)^*\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>

</div>

<div class="solution">

a. incorrect, the string <img src="/ltximg/372ab0dfdb8.svg" alt="\(aaba\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> may be recognized by the expression on the left-hand side but not by the expression on the right-hand side. <br/>
b. <img src="/ltximg/e6fc4ccab65.svg" alt="\((a \cup b)^*\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> denotes all possible words over <img src="/ltximg/af42d736449.svg" alt="\(\Set{a,b}\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, and so does <img src="/ltximg/97c097e9c8b.svg" alt="\((a^*b)^*\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
c. the latter can construct all words with any number of <img src="/ltximg/942eecb938a.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />'s, and so can the former, they dont include <img src="/ltximg/42cac82f75e.svg" alt="\(b\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> anywhere, so they're equal. because <img src="/ltximg/167e73df17a.svg" alt="\(\emptyset^*=\varepsilon\)" style="height: 0.8878em; vertical-align: -0.1036em; display: inline-block" class="org-latex org-latex-inline" />, and <img src="/ltximg/7b9fd9d39b4.svg" alt="\((aa)^*\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> denotes all words with an even number of <img src="/ltximg/942eecb938a.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />'s, while <img src="/ltximg/7976a7e55d3.svg" alt="\(a \cup \varepsilon\)" style="height: 0.6428em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> denotes all those with one <img src="/ltximg/942eecb938a.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, so to any even number of <img src="/ltximg/942eecb938a.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />'s we can add one <img src="/ltximg/942eecb938a.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> to get any odd number of <img src="/ltximg/942eecb938a.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />'s. <br/>
d. the expression on the rhs, <img src="/ltximg/9ff27a8ed64.svg" alt="\(aa^*b(aa^*b)^*\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, can be simplified to <img src="/ltximg/2895aeda1f3.svg" alt="\((aa^*b)^*\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, because the latter denotes any number of words of the form <img src="/ltximg/205a75fd58a.svg" alt="\(aa^*b\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> concatenated, including 1 and 2, so <img src="/ltximg/8e818579663.svg" alt="\(L(aa^*b) \subseteq L((aa^*b)^*)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. so the question becomes that of whether <img src="/ltximg/141f6bc4437.svg" alt="\(a(ba \cup a)^*b=(aa^*b)^*\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. it is true because both start with <img src="/ltximg/942eecb938a.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, both then concatenate as many <img src="/ltximg/942eecb938a.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />'s as they'd like, or they can skip straight to adding as many <img src="/ltximg/42cac82f75e.svg" alt="\(b\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />'s as they want then <img src="/ltximg/942eecb938a.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />'s, so basically they'd both can add as many consecutive <img src="/ltximg/abd2dbab12c.svg" alt="\(ba\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />'s in the middle as possible and then one <img src="/ltximg/42cac82f75e.svg" alt="\(b\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> at the end. <br/>

</div>

<div class="problem" id="pro-automata-homework4-4">

prove/disprove: if <img src="/ltximg/7c012388408.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is a [regular language](../20231201T201245--regular-language__math.md), <img src="/ltximg/9e93f5203e1.svg" alt="\(\Set{w \given w \not \in L \land \abs{w} \bmod 3 = 2}\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> is regular too. <br/>

</div>

<div class="solution" id="sol-automata-homework4-4">

regular languages are closed under complementation and intersection, so its a matter of constructing an automaton or a regex that recognizes words with a length modded by 3 resulting in 2 and using the usual intersection automaton construction. the regex for the second automaton would be <img src="/ltximg/d4fe840f831.svg" alt="\(M=\left((a+b)^3\right)^*(a+b)^2\)" style="height: 1.3513em; vertical-align: -0.3922em; display: inline-block" class="org-latex org-latex-inline" />, we would construct <img src="/ltximg/6529c71f903.svg" alt="\(L \cap M\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. <br/>

</div>

<div class="problem" id="pro-automata-homework4-5">

let <img src="/ltximg/7c012388408.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> be a language defined by <img src="/ltximg/bd4b69d9724.svg" alt="\(a^*(b^* \cup a)aab^*\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, build a finite automaton that recognizes <img src="/ltximg/7c012388408.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. <br/>

</div>

<div class="solution" id="sol-automata-homework4-5">

<div class="equation-container">
<span class="equation">
<img src="/ltximg/8737fbeda67.svg" alt="\begin{tikzpicture}[initial text=, &amp;gt;={Stealth[round]}, node distance=2cm]
  \node[state, initial] (q_0) {\(q_0\)};
  \node[state, above right of=q_0] (q_1) {\(q_1\)};
  \node[state, below right of=q_0] (q_2) {\(q_2\)};
  \node[state, below right of=q_1] (q_3) {\(q_3\)};
  \node[state, right of=q_3] (q_4) {\(q_4\)};
  \node[state, right of=q_4, accepting] (q_5) {\(q_5\)};
  \path[-&amp;gt;] (q_0) edge [loop above] node [above] {\(a\)} (q_1)
            (q_0) edge node [above left] {\(a\)} (q_1)
            (q_0) edge node [below left] {\(b\)} (q_2)
            (q_2) edge [loop below] node [below] {\(b\)} (q_2)
            (q_1) edge node [above right] {\(a\)} (q_3)
            (q_2) edge node [below right] {\(a\)} (q_3)
            (q_3) edge node [above] {\(a\)} (q_4)
            (q_4) edge node [above] {\(a\)} (q_5)
            (q_5) edge [loop above] node [above] {\(b\)} (q_5)
            ;
\end{tikzpicture}
" style="height: 13.2412em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

</div>

<div class="problem">

for every language <img src="/ltximg/7c012388408.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> over the alphabet <img src="/ltximg/d2c73b296c9.svg" alt="\(\Sigma=\Set{a,b}\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> we define the operation <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/82812481262.svg" alt="\begin{equation}
  \operatorname{Max}(L)=\Set{w \in L \given \forall u \in \Sigma^+(wu \not\in L)}
\end{equation}
" style="height: 1.5194em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

<div class="subproblem">

let <img src="/ltximg/d013b182fb0.svg" alt="\(L=\Set{a^nb^m \given 0 \le m \le n}\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, find <img src="/ltximg/d893c85e599.svg" alt="\(\operatorname{Max}(L)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>

</div>

<div class="solution">

<img src="/ltximg/d893c85e599.svg" alt="\(\operatorname{Max}(L)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> is essentially the set of all words from <img src="/ltximg/7c012388408.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> that dont have a postfixed "clone" in <img src="/ltximg/7c012388408.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. <br/>

the set of strings that arent prefixes in other strings in <img src="/ltximg/7c012388408.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> are ones in which <img src="/ltximg/332e3588fb0.svg" alt="\(m=n\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, such as <img src="/ltximg/072a2707cbc.svg" alt="\(aabb\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, because of the restriction <img src="/ltximg/ffb660a0810.svg" alt="\(m \le n\)" style="height: 0.8549em; vertical-align: -0.1824em; display: inline-block" class="org-latex org-latex-inline" />. a post-fixed string starting with one of these strings would violate that restriction. hence <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/674f484169f.svg" alt="\begin{equation}
  \operatorname{Max}(L) = \Set{a^kb^k \given k \in \mathbb{Z}^+}
\end{equation}
" style="height: 1.5194em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

</div>

<div class="subproblem">

let <img src="/ltximg/f8604ce7f92.svg" alt="\(L=\Set{a^nb^m \given 0 \le m,n}\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, find <img src="/ltximg/d893c85e599.svg" alt="\(\operatorname{Max}(L)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>

</div>

<div class="solution">

to every string in <img src="/ltximg/7c012388408.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> we can freely add as many <img src="/ltximg/42cac82f75e.svg" alt="\(b\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />'s as we want, so <img src="/ltximg/aa66861b580.svg" alt="\(\operatorname{Max}(L)=\emptyset\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>

</div>

<div class="subproblem">

prove/disprove: if <img src="/ltximg/7c012388408.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is regular then <img src="/ltximg/aa66861b580.svg" alt="\(\operatorname{Max}(L)=\emptyset\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> <br/>

</div>

<div class="solution">

the regex <img src="/ltximg/528554eb55e.svg" alt="\(\varepsilon\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> defines the regular language containing only <img src="/ltximg/528554eb55e.svg" alt="\(\varepsilon\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, <img src="/ltximg/fb3b29c4aad.svg" alt="\(L=\Set{\varepsilon}\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, if we assume this language is defined over <img src="/ltximg/d2c73b296c9.svg" alt="\(\Sigma=\Set{a,b}\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, then <img src="/ltximg/abe44bac329.svg" alt="\(aa \in \operatorname{Max}(L)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, because <img src="/ltximg/b9dfcd2d131.svg" alt="\(aa\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is a string of which <img src="/ltximg/528554eb55e.svg" alt="\(\varepsilon\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is a prefix. and so this counter example disproves the statement. <br/>

</div>

<div class="subproblem">

if <img src="/ltximg/7c012388408.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is regular then <img src="/ltximg/d893c85e599.svg" alt="\(\operatorname{Max}(L)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> is regular. <br/>

</div>

<div class="solution">

we construct the regex <img src="/ltximg/9b7eedb5922.svg" alt="\(wu\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> and use the properties of closure under intersection and closure under complementation <br/>

</div>

</div>

<div class="problem">

let <img src="/ltximg/252cf989042.svg" alt="\(\Sigma=\Set{a,b},w \in \Set{a,b}^*\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, we define <img src="/ltximg/6696d1ecff8.svg" alt="\(\operatorname{separate}(w)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> to be the word received by separating the <img src="/ltximg/942eecb938a.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />'s from <img src="/ltximg/42cac82f75e.svg" alt="\(b\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />'s, i.e. the writing of all occurrences of <img src="/ltximg/942eecb938a.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> and then those of <img src="/ltximg/42cac82f75e.svg" alt="\(b\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. e.g. <img src="/ltximg/3299581a4a3.svg" alt="\(\operatorname{separate}(babba)=aabbb\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
let <img src="/ltximg/5cbad61a21b.svg" alt="\(L \subseteq \Sigma^*\)" style="height: 0.9067em; vertical-align: -0.1824em; display: inline-block" class="org-latex org-latex-inline" />. we define <img src="/ltximg/d2783e3c05d.svg" alt="\(\operatorname{separate}(L)=\Set{\operatorname{separate}(w) \given w \in L}\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>

<div class="subproblem">

if <img src="/ltximg/5b79ac479fb.svg" alt="\(L=\Sigma^*\)" style="height: 0.7735em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, what is <img src="/ltximg/c247f559cb1.svg" alt="\(\operatorname{separate}(L)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />? <br/>

</div>

<div class="solution">

<div class="equation-container">
<span class="equation">
<img src="/ltximg/619024f395c.svg" alt="\begin{equation}
  \operatorname{separate}(L) = a^*b^*
\end{equation}
" style="height: 1.5194em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

</div>

<div class="subproblem">

prove/disprove: if <img src="/ltximg/7c012388408.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is a regular language then so is <img src="/ltximg/c247f559cb1.svg" alt="\(\operatorname{separate}(L)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> <br/>

</div>

<div class="solution">

let <img src="/ltximg/89199d9d550.svg" alt="\(R\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> be the regex recognizing the language <img src="/ltximg/7c012388408.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, i.e. <img src="/ltximg/b8e8d2f985e.svg" alt="\(L(R)=L\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. let <img src="/ltximg/450e73ff6ac.svg" alt="\(R_a=\Set{b \mapsto \varepsilon}R\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/9a6b89d34a0.svg" alt="\(R_b=\Set{a \mapsto \varepsilon}R\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, here, the notation <img src="/ltximg/7713dd9715f.svg" alt="\(\Set{\cdot \mapsto \cdot}L\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> denotes the substitution of a symbol for another in the regex <img src="/ltximg/89199d9d550.svg" alt="\(R\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> (i dont know if this notation is standard, it just looked appealing). by concatenating the new regex's that we constructed into <img src="/ltximg/1812951018f.svg" alt="\(R_aR_b\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> we guarantee that <img src="/ltximg/4a3748b72e5.svg" alt="\(\operatorname{separate}(L)=L(R_aR_b)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, and so <img src="/ltximg/c247f559cb1.svg" alt="\(\operatorname{separate}(L)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> must be a regular language because some regex recognizes it. <br/>
by substituting the symbol <img src="/ltximg/528554eb55e.svg" alt="\(\varepsilon\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> for either of the symbols <img src="/ltximg/af42d736449.svg" alt="\(\Set{a,b}\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, we would achieving the following: <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/3a1007a3b82.svg" alt="\begin{align*}
  \left.\begin{array}{l}
    \Set{a \mapsto \varepsilon} \implies a^* \mapsto \varepsilon^* = \varepsilon\\
    \Set{b \mapsto \varepsilon} \implies b^* \mapsto \varepsilon^* = \varepsilon
  \end{array}\right\}&amp;amp;\text{ closure operator}\\
  \left.\begin{array}{l}
    \Set{a \mapsto \varepsilon} \implies a \cup \cdot \mapsto \cdot\\
    \Set{b \mapsto \varepsilon} \implies b \cup \cdot \mapsto \cdot
  \end{array}\right\}&amp;amp;\text{ union operator}\\
  \left.\begin{array}{l}
    \Set{a \mapsto \varepsilon} \implies a \circ \cdot \mapsto \cdot \text{ and } \cdot \circ\ a \mapsto \cdot\\
    \Set{b \mapsto \varepsilon} \implies b \circ \cdot \mapsto \cdot \text{ and } \cdot \circ\ b \mapsto \cdot
  \end{array}\right\}&amp;amp;\text{ concatenation operator}
\end{align*}
" style="height: 8.0364em; vertical-align: -0.5392em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

</div>

<div class="subproblem">

prove/disprove: if <img src="/ltximg/7c012388408.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> isnt a regular language then <img src="/ltximg/c247f559cb1.svg" alt="\(\operatorname{separate}(L)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> isnt. <br/>

</div>

<div class="solution">

assume in contradiction that <img src="/ltximg/c247f559cb1.svg" alt="\(\operatorname{separate}(L)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> of some <img src="/ltximg/7c012388408.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is a regular language, because <img src="/ltximg/c247f559cb1.svg" alt="\(\operatorname{separate}(L)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> is regular, by reordering the symbols are operations we could arrive at a regex that would describe <img src="/ltximg/7c012388408.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, in a similar fashion to the way we reordered the regex of <img src="/ltximg/7c012388408.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> to recognize <img src="/ltximg/c247f559cb1.svg" alt="\(\operatorname{separate}(L)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> previously. and so we would prove by contradiction that irregularity of <img src="/ltximg/7c012388408.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> implies irregularity of <img src="/ltximg/c247f559cb1.svg" alt="\(\operatorname{separate}(L)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
this isnt a proof, more like a proof idea, but im too lazy to overthink this. <br/>

</div>

</div>

