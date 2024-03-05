+++
title = "automata theory course homework 4"
author = ["mahmood"]
date = 2024-03-01T00:00:00+02:00
tags = ["cs", "math"]
draft = false
+++

<div class="problem" id="pro-automata-homework4-1">

write the simplest possible [regular expression](20231116T152828--regular-expression__math.org)s that define each of the following [language](20231116T134552--language__math.org)s over <img src="/ltximg/edb4f062b60.svg" alt="\(\Sigma=\Set{a,b}\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> <br/>
a. the language of words that end with an even number of <img src="/ltximg/863aaa5b4e8.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />'s or with an odd number of <img src="/ltximg/70e439bdf17.svg" alt="\(b\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />'s. <br/>
b. the language of words in which the number of <img src="/ltximg/70e439bdf17.svg" alt="\(b\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />'s is not bigger than 2. <br/>
c. the language of words in which the [string](20231115T210736--string__math.org) <img src="/ltximg/bee16696fa5.svg" alt="\(aaa\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> appears exactly once. <br/>
d. the language of words in which the number of <img src="/ltximg/863aaa5b4e8.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />'s is divisible by 2 but not by 3. <br/>

</div>

<div class="solution" id="sol-automata-homework4-1">

<div class="equation-container">
<span class="equation">
<img src="/ltximg/fbcef185884.svg" alt="\begin{align}
  &amp;amp;\underbrace{(((a \cup b)^* b)^*(aa)^*)}_{\text{ends with multiples of }aa} \cup \underbrace{(((a \cup b)^* a)^*(bb)^*b)}_{\text{ends with multiples of }bb\text{ followed by }b}.\\
  &amp;amp;\underbrace{a^*ba^*ba^*}_{2 \times b} \cup \underbrace{a^*ba^*}_{1 \times b} \cup \underbrace{a^*}_{0 \times b}.\\
  &amp;amp;(b \cup ab \cup aab)^*aaa(b \cup ba \cup baa)^*.
\end{align}
" style="height: 7.2705em; vertical-align: -0.4020em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

in relation to (4), that happens when the number of <img src="/ltximg/863aaa5b4e8.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />'s isnt a multiple of 6, so that the number of <img src="/ltximg/863aaa5b4e8.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />'s [modulo](20240119T105558--modulo__.org) 6 is 4 or 2, so we look for patterns of 6 <img src="/ltximg/863aaa5b4e8.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />'s succeeded by 4 or 2. <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/e46bbdb9e87.svg" alt="\begin{equation}
  ((ab^*)^6 \cup \varepsilon)(ab^*)^2 \cup ((ab^*)^6 \cup \varepsilon)(ab^*)^4 = ((ab^*)^6 \cup \varepsilon) \circ ((ab^*)^2 \cup (ab^*)^4)
\end{equation}
" style="height: 1.5194em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

</div>

<div class="problem" id="pro-automata-homework4-2">

a. build a [dfa](20231119T103153--deterministic-finite-automaton__cs_math.org) with 4 states that recognizes the language defined by the expression <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/f59fff6331b.svg" alt="   \begin{equation}
     (a(cd)^*b)^*.
   \end{equation}
" style="height: 1.5194em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

b. build a finite automaton with 4 states that recognizes the language defined by <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/6561b62a205.svg" alt="   \begin{equation}
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
<img src="/ltximg/f34611fae73.svg" alt="   \begin{tikzpicture}[initial text=, &amp;gt;={Stealth[round]}, node distance=2cm]
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
<img src="/ltximg/af00dce76ca.svg" alt="   \begin{tikzpicture}[initial text=, &amp;gt;={Stealth[round]}, node distance=2cm]
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
a. <img src="/ltximg/c993b6a62db.svg" alt="\((ab)^* a=a(ba)^*\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
b. <img src="/ltximg/d3fb729711d.svg" alt="\((a^*b)^*=(a\cup b)^*\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
c. <img src="/ltximg/c4f92cfe638.svg" alt="\((aa)^*(a \cup \emptyset^*)=a^*\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
d. <img src="/ltximg/ced33866d6d.svg" alt="\(a(ba \cup a)^*b=aa^*b(aa^*b)^*\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>

</div>

<div class="solution">

a. incorrect, the string <img src="/ltximg/f311069fb67.svg" alt="\(aaba\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> may be recognized by the expression on the left-hand side but not by the expression on the right-hand side. <br/>
b. <img src="/ltximg/92f38524765.svg" alt="\((a \cup b)^*\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> denotes all possible words over <img src="/ltximg/e880b947ec2.svg" alt="\(\Set{a,b}\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, and so does <img src="/ltximg/54efef95d95.svg" alt="\((a^*b)^*\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
c. the latter can construct all words with any number of <img src="/ltximg/863aaa5b4e8.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />'s, and so can the former, they dont include <img src="/ltximg/70e439bdf17.svg" alt="\(b\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> anywhere, so they're equal. because <img src="/ltximg/c91282fddda.svg" alt="\(\emptyset^*=\varepsilon\)" style="height: 0.8878em; vertical-align: -0.1036em; display: inline-block" class="org-latex org-latex-inline" />, and <img src="/ltximg/55f129e8738.svg" alt="\((aa)^*\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> denotes all words with an even number of <img src="/ltximg/863aaa5b4e8.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />'s, while <img src="/ltximg/a665b16d928.svg" alt="\(a \cup \varepsilon\)" style="height: 0.6428em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> denotes all those with one <img src="/ltximg/863aaa5b4e8.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, so to any even number of <img src="/ltximg/863aaa5b4e8.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />'s we can add one <img src="/ltximg/863aaa5b4e8.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> to get any odd number of <img src="/ltximg/863aaa5b4e8.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />'s. <br/>
d. the expression on the rhs, <img src="/ltximg/369ded3c178.svg" alt="\(aa^*b(aa^*b)^*\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, can be simplified to <img src="/ltximg/50b4bdf54c7.svg" alt="\((aa^*b)^*\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, because the latter denotes any number of words of the form <img src="/ltximg/b2f00424255.svg" alt="\(aa^*b\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> concatenated, including 1 and 2, so <img src="/ltximg/3ff482c31f8.svg" alt="\(L(aa^*b) \subseteq L((aa^*b)^*)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. so the question becomes that of whether <img src="/ltximg/528a0ca8890.svg" alt="\(a(ba \cup a)^*b=(aa^*b)^*\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. it is true because both start with <img src="/ltximg/863aaa5b4e8.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, both then concatenate as many <img src="/ltximg/863aaa5b4e8.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />'s as they'd like, or they can skip straight to adding as many <img src="/ltximg/70e439bdf17.svg" alt="\(b\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />'s as they want then <img src="/ltximg/863aaa5b4e8.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />'s, so basically they'd both can add as many consecutive <img src="/ltximg/4cce0696285.svg" alt="\(ba\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />'s in the middle as possible and then one <img src="/ltximg/70e439bdf17.svg" alt="\(b\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> at the end. <br/>

</div>

<div class="problem" id="pro-automata-homework4-4">

prove/disprove: if <img src="/ltximg/79e36567062.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is a [regular language](20231201T201245--regular-language__math.org), <img src="/ltximg/836e23e04b4.svg" alt="\(\Set{w \given w \not \in L \land \abs{w} \bmod 3 = 2}\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> is regular too. <br/>

</div>

<div class="solution" id="sol-automata-homework4-4">

regular languages are closed under complementation and intersection, so its a matter of constructing an automaton or a regex that recognizes words with a length modded by 3 resulting in 2 and using the usual intersection automaton construction. the regex for the second automaton would be <img src="/ltximg/99e05b52a73.svg" alt="\(M=\left((a+b)^3\right)^*(a+b)^2\)" style="height: 1.3513em; vertical-align: -0.3922em; display: inline-block" class="org-latex org-latex-inline" />, we would construct <img src="/ltximg/55d20164ba2.svg" alt="\(L \cap M\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. <br/>

</div>

<div class="problem" id="pro-automata-homework4-5">

let <img src="/ltximg/79e36567062.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> be a language defined by <img src="/ltximg/544ec4e8cff.svg" alt="\(a^*(b^* \cup a)aab^*\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, build a finite automaton that recognizes <img src="/ltximg/79e36567062.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. <br/>

</div>

<div class="solution" id="sol-automata-homework4-5">

<div class="equation-container">
<span class="equation">
<img src="/ltximg/3a92c240c40.svg" alt="\begin{tikzpicture}[initial text=, &amp;gt;={Stealth[round]}, node distance=2cm]
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

for every language <img src="/ltximg/79e36567062.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> over the [alphabet](20231115T204202--alphabet__math.org) <img src="/ltximg/edb4f062b60.svg" alt="\(\Sigma=\Set{a,b}\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> we define the operation <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/89be4ebd474.svg" alt="\begin{equation}
  \operatorname{Max}(L)=\Set{w \in L \given \forall u \in \Sigma^+(wu \not\in L)}
\end{equation}
" style="height: 1.5194em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

<div class="subproblem">

let <img src="/ltximg/c4ac48f1f65.svg" alt="\(L=\Set{a^nb^m \given 0 \le m \le n}\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, find <img src="/ltximg/549953b9574.svg" alt="\(\operatorname{Max}(L)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>

</div>

<div class="solution">

<img src="/ltximg/549953b9574.svg" alt="\(\operatorname{Max}(L)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> is essentially the set of all words from <img src="/ltximg/79e36567062.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> that dont have a postfixed "clone" in <img src="/ltximg/79e36567062.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. <br/>

the set of strings that arent prefixes in other strings in <img src="/ltximg/79e36567062.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> are ones in which <img src="/ltximg/9a32eaa0695.svg" alt="\(m=n\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, such as <img src="/ltximg/35b58a5b097.svg" alt="\(aabb\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, because of the restriction <img src="/ltximg/92651a355d3.svg" alt="\(m \le n\)" style="height: 0.8549em; vertical-align: -0.1824em; display: inline-block" class="org-latex org-latex-inline" />. a post-fixed string starting with one of these strings would violate that restriction. hence <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/9013f26aede.svg" alt="\begin{equation}
  \operatorname{Max}(L) = \Set{a^kb^k \given k \in \mathbb{Z}^+}
\end{equation}
" style="height: 1.5194em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

</div>

<div class="subproblem">

let <img src="/ltximg/93ed586bad5.svg" alt="\(L=\Set{a^nb^m \given 0 \le m,n}\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, find <img src="/ltximg/549953b9574.svg" alt="\(\operatorname{Max}(L)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>

</div>

<div class="solution">

to every string in <img src="/ltximg/79e36567062.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> we can freely add as many <img src="/ltximg/70e439bdf17.svg" alt="\(b\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />'s as we want, so <img src="/ltximg/ea5db1d8404.svg" alt="\(\operatorname{Max}(L)=\emptyset\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>

</div>

<div class="subproblem">

prove/disprove: if <img src="/ltximg/79e36567062.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is regular then <img src="/ltximg/ea5db1d8404.svg" alt="\(\operatorname{Max}(L)=\emptyset\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> <br/>

</div>

<div class="solution">

the regex <img src="/ltximg/1e532657953.svg" alt="\(\varepsilon\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> defines the regular language containing only <img src="/ltximg/1e532657953.svg" alt="\(\varepsilon\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, <img src="/ltximg/d1a07284c7c.svg" alt="\(L=\Set{\varepsilon}\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, if we assume this language is defined over <img src="/ltximg/edb4f062b60.svg" alt="\(\Sigma=\Set{a,b}\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, then <img src="/ltximg/fd967cebb8f.svg" alt="\(aa \in \operatorname{Max}(L)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, because <img src="/ltximg/c344a2a7aae.svg" alt="\(aa\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is a string of which <img src="/ltximg/1e532657953.svg" alt="\(\varepsilon\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is a prefix. and so this [counter example](20230628T112731--counter-example__.org) disproves the statement. <br/>

</div>

<div class="subproblem">

if <img src="/ltximg/79e36567062.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is regular then <img src="/ltximg/549953b9574.svg" alt="\(\operatorname{Max}(L)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> is regular. <br/>

</div>

<div class="solution">

we construct the regex <img src="/ltximg/62d8c31c38a.svg" alt="\(wu\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> and use the properties of closure under intersection and closure under complementation <br/>

</div>

</div>

<div class="problem">

let <img src="/ltximg/5f797d51da0.svg" alt="\(\Sigma=\Set{a,b},w \in \Set{a,b}^*\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, we define <img src="/ltximg/e7e489b9831.svg" alt="\(\operatorname{separate}(w)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> to be the word received by separating the <img src="/ltximg/863aaa5b4e8.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />'s from <img src="/ltximg/70e439bdf17.svg" alt="\(b\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />'s, i.e. the writing of all occurrences of <img src="/ltximg/863aaa5b4e8.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> and then those of <img src="/ltximg/70e439bdf17.svg" alt="\(b\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. e.g. <img src="/ltximg/2ab342589aa.svg" alt="\(\operatorname{separate}(babba)=aabbb\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
let <img src="/ltximg/1c9f3aa10a0.svg" alt="\(L \subseteq \Sigma^*\)" style="height: 0.9067em; vertical-align: -0.1824em; display: inline-block" class="org-latex org-latex-inline" />. we define <img src="/ltximg/e17096cb207.svg" alt="\(\operatorname{separate}(L)=\Set{\operatorname{separate}(w) \given w \in L}\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>

<div class="subproblem">

if <img src="/ltximg/df4597e4dc2.svg" alt="\(L=\Sigma^*\)" style="height: 0.7735em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, what is <img src="/ltximg/4bcb3254174.svg" alt="\(\operatorname{separate}(L)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />? <br/>

</div>

<div class="solution">

<div class="equation-container">
<span class="equation">
<img src="/ltximg/26fd2773d74.svg" alt="\begin{equation}
  \operatorname{separate}(L) = a^*b^*
\end{equation}
" style="height: 1.5194em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

</div>

<div class="subproblem">

prove/disprove: if <img src="/ltximg/79e36567062.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is a regular language then so is <img src="/ltximg/4bcb3254174.svg" alt="\(\operatorname{separate}(L)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> <br/>

</div>

<div class="solution">

let <img src="/ltximg/7e3ad75fb8e.svg" alt="\(R\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> be the regex recognizing the language <img src="/ltximg/79e36567062.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, i.e. <img src="/ltximg/1f975837398.svg" alt="\(L(R)=L\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. let <img src="/ltximg/f4efa04b367.svg" alt="\(R_a=\Set{b \mapsto \varepsilon}R\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/6d082af25ff.svg" alt="\(R_b=\Set{a \mapsto \varepsilon}R\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, here, the notation <img src="/ltximg/74aab7f0973.svg" alt="\(\Set{\cdot \mapsto \cdot}L\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> denotes the [substitution](20230926T182812--substitution__math.org) of a [symbol](20240205T193014--symbol__.org) for another in the regex <img src="/ltximg/7e3ad75fb8e.svg" alt="\(R\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> (i dont know if this notation is standard, it just looked appealing). by concatenating the new regex's that we constructed into <img src="/ltximg/9dfb3b1bddd.svg" alt="\(R_aR_b\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> we guarantee that <img src="/ltximg/e2b7c34cff2.svg" alt="\(\operatorname{separate}(L)=L(R_aR_b)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, and so <img src="/ltximg/4bcb3254174.svg" alt="\(\operatorname{separate}(L)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> must be a regular language because some regex recognizes it. <br/>
by substituting the symbol <img src="/ltximg/1e532657953.svg" alt="\(\varepsilon\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> for either of the symbols <img src="/ltximg/e880b947ec2.svg" alt="\(\Set{a,b}\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, we would achieving the following: <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/96756001823.svg" alt="\begin{align*}
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

prove/disprove: if <img src="/ltximg/79e36567062.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> isnt a regular language then <img src="/ltximg/4bcb3254174.svg" alt="\(\operatorname{separate}(L)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> isnt. <br/>

</div>

<div class="solution">

assume in contradiction that <img src="/ltximg/4bcb3254174.svg" alt="\(\operatorname{separate}(L)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> of some <img src="/ltximg/79e36567062.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is a regular language, because <img src="/ltximg/4bcb3254174.svg" alt="\(\operatorname{separate}(L)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> is regular, by reordering the symbols are operations we could arrive at a regex that would describe <img src="/ltximg/79e36567062.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, in a similar fashion to the way we reordered the regex of <img src="/ltximg/79e36567062.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> to recognize <img src="/ltximg/4bcb3254174.svg" alt="\(\operatorname{separate}(L)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> previously. and so we would [prove by contradiction](20230204T151719--proof-by-contradiction__math.org) that irregularity of <img src="/ltximg/79e36567062.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> implies irregularity of <img src="/ltximg/4bcb3254174.svg" alt="\(\operatorname{separate}(L)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
this isnt a proof, more like a proof idea, but im too lazy to overthink this. <br/>

</div>

</div>

