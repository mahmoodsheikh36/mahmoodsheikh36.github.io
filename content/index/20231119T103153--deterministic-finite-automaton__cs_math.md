+++
title = "deterministic finite automaton"
author = ["mahmood"]
date = 2024-02-26T00:00:00+02:00
tags = ["cs", "math"]
draft = false
+++

<div class="definition" id="def-dfa">

a _finite automaton_ is a 5-tuple <img src="/ltximg/5f775623002.svg" alt="\((Q,\Sigma,\delta,q_0,F)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, where <br/>

1.  <img src="/ltximg/a00edde7e82.svg" alt="\(Q\)" style="height: 0.9586em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> is a [finite](20231015T221141--finite-set__.org) set called the _states_, <br/>
2.  <img src="/ltximg/4ddbce7ed65.svg" alt="\(\Sigma\)" style="height: 0.7735em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is a finite set called the [alphabet](20231115T204202--alphabet__math.org), <br/>
3.  <img src="/ltximg/347893e27f9.svg" alt="\(\delta: Q \times \Sigma \to Q\)" style="height: 0.9695em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> is the _transition function_, <br/>
4.  <img src="/ltximg/66b763018e0.svg" alt="\(q_0 \in Q\)" style="height: 0.9586em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> is the _start state_, and <br/>
5.  <img src="/ltximg/17c5d0d20c1.svg" alt="\(F \subseteq Q\)" style="height: 0.9586em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> is the _set of accept states_. <br/>

(Michael Sipser, 2012 definition 1.5) <br/>

</div>

<div class="definition" id="def-dfa-conf">

a _configuration_ of a finite automaton <img src="/ltximg/86aa2426751.svg" alt="\((Q, \Sigma, \delta, q_0, F)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> is an element of <img src="/ltximg/53a3f79864a.svg" alt="\(Q \times \Sigma^*\)" style="height: 0.9640em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />. the _current configuration_ of an automaton is a pair <br/>
<img src="/ltximg/3f758271576.svg" alt="\[ \{\text{the current state}\} \times \{\text{the unread part of the tape}\}. \]" style="height: 1.5194em; display: block" class="org-latex org-latex-block" /> <br/>
(Mark K. Goldberg, ????) <br/>

</div>

<div class="notation" id="tat-dfa-config">

given a DFA <img src="/ltximg/33728004858.svg" alt="\(M=(Q, \Sigma, \delta, q_0, F)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, <br/>
for configurations <img src="/ltximg/d539d129efa.svg" alt="\((q',w),(q,\sigma w)\)" style="height: 1.0801em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> such that <img src="/ltximg/83475f535f3.svg" alt="\(\sigma \in \Sigma,w \in \Sigma^*\)" style="height: 0.9640em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, we write <img src="/ltximg/d4af968ba77.svg" alt="\((q,\sigma w)\sststile{M}{} (q',w)\)" style="height: 1.3893em; vertical-align: -0.3731em; display: inline-block" class="org-latex org-latex-inline" /> iff <img src="/ltximg/e3bfbf73ead.svg" alt="\(\delta(q,\sigma)=q'\)" style="height: 1.0801em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
for configurations <img src="/ltximg/bf833bdb76f.svg" alt="\((q',w),(q,uw)\)" style="height: 1.0801em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, where <img src="/ltximg/1519fa37447.svg" alt="\(q,q' \in Q\)" style="height: 1.0257em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, <img src="/ltximg/12c9430ca36.svg" alt="\(u,w \in \Sigma^*\)" style="height: 0.9640em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/d079368a55c.svg" alt="\(u=\sigma_1\sigma_2\dots \sigma_n,n \geq 0\)" style="height: 0.9122em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> we write <img src="/ltximg/4ea75efd201.svg" alt="\((q,uw) \sststile{M}{*} (q',w)\)" style="height: 1.3893em; vertical-align: -0.3731em; display: inline-block" class="org-latex org-latex-inline" /> iff there exist <img src="/ltximg/9d5048d8a50.svg" alt="\(q=q_0,q_1,\dots,q_n=q'\)" style="height: 1.0257em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> where <img src="/ltximg/2d45b24a52e.svg" alt="\(q_i \in Q,0 \le i \le n\)" style="height: 0.9586em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> such that <img src="/ltximg/b5bb14bf2e7.svg" alt="\(\delta(q_{i-1},\sigma_i)=q_i,1 \le i \le n\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
if <img src="/ltximg/3cb3b09b87b.svg" alt="\(n=0\)" style="height: 0.7155em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> then <img src="/ltximg/41b277cd2c6.svg" alt="\((q,w)\sststile{M}{*}(q',w)\)" style="height: 1.3893em; vertical-align: -0.3731em; display: inline-block" class="org-latex org-latex-inline" /> iff <img src="/ltximg/80a7eff1839.svg" alt="\(q=q'\)" style="height: 1.0257em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
(Dr. Noa Lewenstein, ????) <br/>

</div>

<div class="definition">

a DFA <img src="/ltximg/33728004858.svg" alt="\(M=(Q, \Sigma, \delta, q_0, F)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> _accepts_ a [string](20231115T210736--string__math.org) <img src="/ltximg/604e89a8d0d.svg" alt="\(w \in \Sigma^*\)" style="height: 0.8118em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" /> if <img src="/ltximg/32f6a7912a3.svg" alt="\((q_0,w)\sststile{M}{*}(q,\varepsilon)\)" style="height: 1.3893em; vertical-align: -0.3731em; display: inline-block" class="org-latex org-latex-inline" /> for <img src="/ltximg/3059687fdff.svg" alt="\(q \in F\)" style="height: 0.9586em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
(Dr. Noa Lewenstein, ) <br/>

</div>

<div class="definition" id="def-dfa-reglang">

given a DFA <img src="/ltximg/33728004858.svg" alt="\(M=(Q, \Sigma, \delta, q_0, F)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, we denote by <img src="/ltximg/0776b691ff3.svg" alt="\(L(M)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> the language of all words that <img src="/ltximg/48b15ce2f17.svg" alt="\(M\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> accepts: <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/226188ffca7.svg" alt="\begin{equation}
  L(M) \defeq \{w \mid M \text{ accepts } w\} \defeq \{w \mid (s,w) \sststile{M}{*}(q,\varepsilon),q \in F\},
\end{equation}
" style="height: 1.5983em; vertical-align: -0.3731em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

we say <img src="/ltximg/48b15ce2f17.svg" alt="\(M\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> _recognizes_ the language <img src="/ltximg/0776b691ff3.svg" alt="\(L(M)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. and call <img src="/ltximg/0776b691ff3.svg" alt="\(L(M)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> a [regular language](20231201T201245--regular-language__math.org). <br/>
(Dr. Noa Lewenstein, ) <br/>

</div>

<div class="dummy">

let <img src="/ltximg/9a0fff5c8a7.svg" alt="\(M=(Q,\Sigma,\delta,q_0,F)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> be a finite automaton and let <img src="/ltximg/5359fa9e03d.svg" alt="\(w=w_1w_2 \cdots w_n\)" style="height: 0.6809em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> be a string where each <img src="/ltximg/70f47c1f892.svg" alt="\(w_i\)" style="height: 0.6673em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> is a member of the alphabet <img src="/ltximg/4ddbce7ed65.svg" alt="\(\Sigma\)" style="height: 0.7735em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, then <img src="/ltximg/48b15ce2f17.svg" alt="\(M\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> _accepts_ <img src="/ltximg/e356be610b8.svg" alt="\(w\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> if a sequence of states <img src="/ltximg/38e2ea19b04.svg" alt="\(r_0,r_1,\dots,r_n\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> in <img src="/ltximg/a00edde7e82.svg" alt="\(Q\)" style="height: 0.9586em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> exists with three conditions: <br/>

1.  <img src="/ltximg/52ce75a073d.svg" alt="\(r_0=q_0\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, <br/>
2.  <img src="/ltximg/1935d43d786.svg" alt="\(\delta(r_i,w_{i+1})=r_{i+1}\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, for <img src="/ltximg/913eee3a0b9.svg" alt="\(i=0,\dots,n-1\)" style="height: 0.9353em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, and <br/>
3.  <img src="/ltximg/570e706a554.svg" alt="\(r_n \in F\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" />. <br/>

condition 1 says that the machine starts in the start state. condition 2 says that the machine goes from state to state according to the transition function. condition 3 says that the machine accepts its input if it ends up in an accept state. we say that <img src="/ltximg/48b15ce2f17.svg" alt="\(M\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> _recognizes language_ <img src="/ltximg/58b6138ac05.svg" alt="\(A\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> if <img src="/ltximg/76e5980152c.svg" alt="\(A=\{w \mid M \text{ accepts } w\}\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
(Michael Sipser, 2012) <br/>

</div>

<div class="dummy">

if <img src="/ltximg/58b6138ac05.svg" alt="\(A\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is the set of all strings that machine <img src="/ltximg/48b15ce2f17.svg" alt="\(M\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> accepts, we say that <img src="/ltximg/58b6138ac05.svg" alt="\(A\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is the language of machine <img src="/ltximg/48b15ce2f17.svg" alt="\(M\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> and write <img src="/ltximg/221cc23a372.svg" alt="\(L(M)=A\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. we say that <img src="/ltximg/48b15ce2f17.svg" alt="\(M\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> _recognizes_ <img src="/ltximg/58b6138ac05.svg" alt="\(A\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> or that <img src="/ltximg/48b15ce2f17.svg" alt="\(M\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> _accepts_ <img src="/ltximg/58b6138ac05.svg" alt="\(A\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. because the term accept has different meanings when we refer to machines accepting strings and machines accepting languages, we prefer the term recognize for languages in order to avoid confusion. <br/>
a machine may accept several strings, but it always recognizes only one language. if the machine accepts no strings, it still recognizes one language--namely, the empty language <img src="/ltximg/3bf2bc24260.svg" alt="\(\emptyset\)" style="height: 0.8878em; vertical-align: -0.1036em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
(Michael Sipser, 2012 chapter 1 regular languages) <br/>

</div>

<div class="note">

(Michael Sipser, 2012 chapter 1.1 designing finite automata) describes how to build automatons in detail. <br/>

</div>

<div class="my_example">

<div class="equation-container">
<span class="equation">
<img src="/ltximg/8efa701f0b2.svg" alt="\begin{tikzpicture}[initial text=, &amp;gt;={Stealth[round]}, node distance=2cm]
  \node[state, initial] (q_0) {\(q_0\)};
  \node[state, right of=q_0] (q_1) {\(q_1\)};
  \node[state, right of=q_1] (q_2) {\(q_2\)};
  \node[state, right of=q_2, accepting] (q_3) {\(q_3\)};
  \path[-&amp;gt;] (q_0) edge node [above] {\(b\)} (q_1)                 % from q0 to q1
            (q_0) edge [loop below] node {\(a\)} (q_0)            % from q0 to itself
            (q_1) edge node [above] {\(b\)} (q_2)                 % from q1 back to q2
            (q_1) edge [bend left=45] node [below] {\(a\)} (q_0)  % from q1 to q0
            (q_2) edge [bend right=45] node [above] {\(a\)} (q_0) % from q2 to q0
                  edge node [above] {\(b\)} (q_3)                 % from q2 to q3
            (q_3) edge [loop below] node {\(a,b\)} (q_3)          % from q3 to itself
            ;
\end{tikzpicture}
" style="height: 8.2807em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

a string input starts at <img src="/ltximg/16d1cbb9b84.svg" alt="\(q_0\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, if we detect an <img src="/ltximg/863aaa5b4e8.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, we move forward to the state <img src="/ltximg/536371a4d43.svg" alt="\(q_1\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> which represents a progress of 1 in detecting 3 occurrences of <img src="/ltximg/70e439bdf17.svg" alt="\(b\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, if the next character is in <img src="/ltximg/863aaa5b4e8.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, our progress would be cancelled and we go back to <img src="/ltximg/16d1cbb9b84.svg" alt="\(q_0\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, otherwise we move to <img src="/ltximg/f6e3cf0bea4.svg" alt="\(q_2\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, if we detect a <img src="/ltximg/70e439bdf17.svg" alt="\(b\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> we move to the accept state and stay there since we've achieved our goal of detecting 3 <img src="/ltximg/70e439bdf17.svg" alt="\(b\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />'s, otherwise we "cancel our progress" and go back to <img src="/ltximg/16d1cbb9b84.svg" alt="\(q_0\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />. <br/>

</div>

<div class="my_example">

<div class="equation-container">
<span class="equation">
<img src="/ltximg/529e3a19da1.svg" alt="\begin{tikzpicture}[initial text=, &amp;gt;={Stealth[round]}, node distance=2cm]
  \node[state, initial] (q_0) {\(q_0\)};
  \node[state, right of=q_0, initial] (q_1) {\(q_1\)};
  \node[state, right of=q_1, accepting] (q_2) {\(q_2\)};
  \node[state, below left of=q_2, accepting] (q_3) {\(q_3\)};
  \path[-&amp;gt;] (q_0) edge node [above] {\(a\)} (q_1)
                  edge [loop above] node {\(b\)} (q_0)
            (q_1) edge node [above] {\(a\)} (q_2)
            (q_2) edge [loop above] node {\(a\)} (q_3)
            (q_2) edge [bend left=45] node [below right] {\(b\)} (q_3)
            (q_3) edge [bend left=30] node [below left] {\(a\)} (q_1)
            (q_1) edge [bend left=40] node [right] {\(b\)} (q_3)
            (q_3) edge [bend left=40] node [below left] {\(b\)} (q_0)
            ;
\end{tikzpicture}
" style="height: 9.3468em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

at first glance this may seem impossible because DFA's cant tell the length of the string and have no record of its symbols, but it can "store" knowledge in the form of states. <br/>
here is my line of reasoning for this problem: <br/>
the possible states for this problem are <br/>

1.  string length is 1, so the DFA shouldnt accept, that is the state <img src="/ltximg/536371a4d43.svg" alt="\(q_1\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> <br/>
2.  second-to-last seen symbol was <img src="/ltximg/863aaa5b4e8.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, and the current symbol is <img src="/ltximg/863aaa5b4e8.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, we should accept <br/>
3.  second-to-last seen symbol was <img src="/ltximg/863aaa5b4e8.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, and the current symbol is <img src="/ltximg/70e439bdf17.svg" alt="\(b\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, we should accept <br/>
4.  second-to-last seen symbol was <img src="/ltximg/70e439bdf17.svg" alt="\(b\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, and the current symbol is <img src="/ltximg/863aaa5b4e8.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, we shouldnt accept <br/>
5.  second-to-last seen symbol was <img src="/ltximg/70e439bdf17.svg" alt="\(b\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, and the current symbol is <img src="/ltximg/70e439bdf17.svg" alt="\(b\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, we shouldnt accept <br/>

states 4 and 5 cannot be unified into a single non-accepting state that says "last symbol wasnt <img src="/ltximg/863aaa5b4e8.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />" because if we're currently at a state that says "last symbol wasnt <img src="/ltximg/863aaa5b4e8.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />", we cant know what the character is, we just know that before it there wasnt an <img src="/ltximg/863aaa5b4e8.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, and so we wouldnt know where to move from there, this might not make much sense for the reader as its merely someone else's thoughts put into few words, so perhaps it helps to consider an automaton that unifies those states into one, how would it behave for the input string <img src="/ltximg/09562b4be95.svg" alt="\(abba\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />? <br/>
states 2 and 3 also cant be unified into a single accepting state, because the automaton needs to be able to tell the difference between those states to decide whether it should accept the sequence <img src="/ltximg/444ad2d9e63.svg" alt="\(aba\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, for example. <br/>
this hints that we need a total of 4 states (2 accepting, 2 non-accepting) beside the initial state, but perhaps we can reuse the initial state and unify it with state 4 or 5. <br/>

</div>

<div class="my_example">

fig-automata-homework1-1 <br/>

</div>

