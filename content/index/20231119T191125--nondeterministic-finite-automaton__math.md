+++
title = "nondeterministic finite automaton"
author = ["mahmood"]
date = 2024-03-01T00:00:00+02:00
tags = ["math"]
draft = false
+++

<div class="dummy">

<div class="definition" id="def-nfa">

a _nondeterministic finite automaton (NFA)_ is a 5-tuple <img src="/ltximg/5f775623002.svg" alt="\((Q,\Sigma,\delta,q_0,F)\)" style="height: 1.0823em; vertical-align: -0.3030em; display: inline-block" class="org-latex org-latex-inline" />, where <br/>

1.  <img src="/ltximg/a00edde7e82.svg" alt="\(Q\)" style="height: 0.9490em; vertical-align: -0.2275em; display: inline-block" class="org-latex org-latex-inline" /> is a [finite set](20231015T221141--finite-set__.org) of states, <br/>
2.  <img src="/ltximg/4ddbce7ed65.svg" alt="\(\Sigma\)" style="height: 0.7667em; vertical-align: -0.0502em; display: inline-block" class="org-latex org-latex-inline" /> is a finite [alphabet](20231115T204202--alphabet__math.org), <br/>
3.  <img src="/ltximg/c98354ad8aa.svg" alt="\(\delta: Q \times \Sigma_\varepsilon \to \mathcal{P}(Q)\)" style="height: 1.0686em; vertical-align: -0.2893em; display: inline-block" class="org-latex org-latex-inline" /> is the transition function, <br/>
4.  <img src="/ltximg/66b763018e0.svg" alt="\(q_0 \in Q\)" style="height: 1.0245em; vertical-align: -0.3030em; display: inline-block" class="org-latex org-latex-inline" /> is the _start state_, <br/>
5.  <img src="/ltximg/17c5d0d20c1.svg" alt="\(F \subseteq Q\)" style="height: 0.9490em; vertical-align: -0.2275em; display: inline-block" class="org-latex org-latex-inline" /> is the set of _accept states_. <br/>

</div>

usually such an automaton is abbreviated NFA. <br/>
we say an NFA <img src="/ltximg/0047213b92a.svg" alt="\(N\)" style="height: 0.7648em; vertical-align: -0.0580em; display: inline-block" class="org-latex org-latex-inline" /> accepts the [string](20231115T210736--string__math.org) <img src="/ltximg/e356be610b8.svg" alt="\(w\)" style="height: 0.5756em; vertical-align: -0.0658em; display: inline-block" class="org-latex org-latex-inline" /> if we can write <img src="/ltximg/e356be610b8.svg" alt="\(w\)" style="height: 0.5756em; vertical-align: -0.0658em; display: inline-block" class="org-latex org-latex-inline" /> as <img src="/ltximg/2aea0eb2988.svg" alt="\(w=y_1y_2 \cdots y_m\)" style="height: 0.8304em; vertical-align: -0.3157em; display: inline-block" class="org-latex org-latex-inline" />, where each <img src="/ltximg/356db39c410.svg" alt="\(y_i\)" style="height: 0.8304em; vertical-align: -0.3157em; display: inline-block" class="org-latex org-latex-inline" /> is a member of <img src="/ltximg/2773b7d3571.svg" alt="\(\Sigma_\varepsilon\)" style="height: 0.9818em; vertical-align: -0.2653em; display: inline-block" class="org-latex org-latex-inline" /> and a sequene of states <img src="/ltximg/be8669e255d.svg" alt="\(r_0,r_1,\dots,r_m\)" style="height: 0.7685em; vertical-align: -0.2646em; display: inline-block" class="org-latex org-latex-inline" /> exists in <img src="/ltximg/a00edde7e82.svg" alt="\(Q\)" style="height: 0.9490em; vertical-align: -0.2275em; display: inline-block" class="org-latex org-latex-inline" /> with three conditions: <br/>

1.  <img src="/ltximg/52ce75a073d.svg" alt="\(r_0=q_0\)" style="height: 0.8069em; vertical-align: -0.3030em; display: inline-block" class="org-latex org-latex-inline" />, <br/>
2.  <img src="/ltximg/bc63f2e8d5f.svg" alt="\(r_{i+1} \in \delta(r_i,y_{i+1})\)" style="height: 1.0950em; vertical-align: -0.3157em; display: inline-block" class="org-latex org-latex-inline" />, for <img src="/ltximg/fde42a0cb5d.svg" alt="\(i=0,\dots,m-1\)" style="height: 0.8882em; vertical-align: -0.1874em; display: inline-block" class="org-latex org-latex-inline" />, and <br/>
3.  <img src="/ltximg/261eb6ae6a0.svg" alt="\(r_m \in F\)" style="height: 0.9673em; vertical-align: -0.2625em; display: inline-block" class="org-latex org-latex-inline" />. <br/>

condition 1 says that the machine starts out in the start state. condition 2 says that state <img src="/ltximg/7b2332ff6a5.svg" alt="\(r_{i+1}\)" style="height: 0.7678em; vertical-align: -0.2639em; display: inline-block" class="org-latex org-latex-inline" /> is one of the allowable next states when <img src="/ltximg/0047213b92a.svg" alt="\(N\)" style="height: 0.7648em; vertical-align: -0.0580em; display: inline-block" class="org-latex org-latex-inline" /> is in state <img src="/ltximg/5c39ebab90f.svg" alt="\(r_i\)" style="height: 0.7664em; vertical-align: -0.2625em; display: inline-block" class="org-latex org-latex-inline" /> and reading <img src="/ltximg/2c5ec820d02.svg" alt="\(y_{i+1}\)" style="height: 0.8304em; vertical-align: -0.3157em; display: inline-block" class="org-latex org-latex-inline" />. observe that <img src="/ltximg/3f830106a10.svg" alt="\(\delta(r_i,y_{i+1})\)" style="height: 1.0950em; vertical-align: -0.3157em; display: inline-block" class="org-latex org-latex-inline" /> is the set of allowable next states and so we say that <img src="/ltximg/7b2332ff6a5.svg" alt="\(r_{i+1}\)" style="height: 0.7678em; vertical-align: -0.2639em; display: inline-block" class="org-latex org-latex-inline" /> is a member of that set. finally, condition 3 says that the machine accepts its input if the last state is an accept state. <br/>
(Michael Sipser, 2012 definition 1.37) <br/>

</div>

<div class="dummy">

although they recognize the same class of languages ([regular language](20231201T201245--regular-language__math.org)s), there are a few differences between a [deterministic finite automaton](20231119T103153--deterministic-finite-automaton__cs_math.org) and a nondeterministic finite automaton. first, every state of a DFA always has exactly one exiting transition arrow for each symbol in the alphabet. NFAs violate that rule. in an NFA, a state may have zero, one, or many exiting arrows for each alphabet symbol. second, in a DFA, labels on the transition arrows are symbols from the alphabet. this NFA has an arrow with the label <img src="/ltximg/1e532657953.svg" alt="\(\varepsilon\)" style="height: 0.5678em; vertical-align: -0.0639em; display: inline-block" class="org-latex org-latex-inline" />. in general, an NFA may have arrows labelled with members of the alphabet or <img src="/ltximg/1e532657953.svg" alt="\(\varepsilon\)" style="height: 0.5678em; vertical-align: -0.0639em; display: inline-block" class="org-latex org-latex-inline" />. zero, one, or many arrows may exit from each state with the label <img src="/ltximg/1e532657953.svg" alt="\(\varepsilon\)" style="height: 0.5678em; vertical-align: -0.0639em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
how does an NFA compute? suppose that we are running an NFA on an input string and come to a state with multiple ways to proceed. the machine splits into multiple copies of itself and follows all the possibilities in parallel. each copy of the machine takes one of the possible ways to proceed and continues as before. if there are subsequent choices, the machine splits again. if the next input symbol doesn’t appear on any of the arrows exiting the state occupied by a copy of the machine, that copy of the machine dies, along with the branch of the computation associated with it. finally, if any one of these copies of the machine is in an accept state at the end of the input, the NFA accepts the input string. <br/>
if a state with an <img src="/ltximg/1e532657953.svg" alt="\(\varepsilon\)" style="height: 0.5678em; vertical-align: -0.0639em; display: inline-block" class="org-latex org-latex-inline" /> symbol on an exiting arrow is encountered, something similar happens. without reading any input, the machine splits into multiple copies, one following each of the exiting <img src="/ltximg/1e532657953.svg" alt="\(\varepsilon\)" style="height: 0.5678em; vertical-align: -0.0639em; display: inline-block" class="org-latex org-latex-inline" />-labeled arrows and one staying at the current state. then the machine proceeds nondeterministically as before. [nondeterminism](20230817T025551--nondeterminism__.org) may be viewed as a kind of parallel computation wherein multiple independent "processes" or "threads" can be running concurrently. <br/>
when the NFA splits to follow several choices, that corresponds to a process "forking" into several children, each proceeding separately. if at least one of these processes accepts, then the entire computation accepts. <br/>
(Michael Sipser, 2012 chapter 1.2 nondeterminism) <br/>

</div>

<div class="my_example">

<div class="equation-container">
<span class="equation">
<img src="/ltximg/ea412f35938.svg" alt="\begin{tikzpicture}[initial text=, &amp;gt;={Stealth[round]}, node distance=2cm]
  \node[state, initial] (q_0) {};
  \node[state, right of=q_0] (q_1) {};
  \node[state, right of=q_1, accepting] (q_2) {};
  \path[-&amp;gt;] (q_0) edge node [above] {\(\varepsilon\)} (q_1)
            (q_0) edge [loop above] node {\(a\)} (q_0)
            (q_1) edge [loop above] node {\(b\)} (q_1)
            (q_1) edge node [above] {\(\varepsilon\)} (q_2)
            (q_2) edge [loop above] node {\(c\)} (q_2)
            ;
\end{tikzpicture}
" style="height: 5.4383em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

</div>

<div class="my_example">

<div class="equation-container">
<span class="equation">
<img src="/ltximg/cb000be814d.svg" alt="\begin{tikzpicture}[initial text=, &amp;gt;={Stealth[round]}, node distance=2cm]
  \node[state, initial] (q_0) {};
  \node[state, right of=q_0] (q_1) {};
  \node[state, right of=q_1] (q_2) {};
  \node[state, right of=q_2] (q_3) {};
  \node[state, right of=q_3, accepting] (q_4) {};
  \path[-&amp;gt;] (q_0) edge node [above] {\(0\)} (q_1)
            (q_0) edge [loop above] node {\(0,1\)} (q_0)
            (q_1) edge node [above] {\(1\)} (q_2)
            (q_2) edge node [above] {\(0\)} (q_3)
            (q_3) edge node [above] {\(1\)} (q_4)
            (q_4) edge [loop above] node {\(0,1\)} (q_4)
            ;
\end{tikzpicture}
" style="height: 5.5755em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

</div>

<div class="my_example">

<div class="equation-container">
<span class="equation">
<img src="/ltximg/81ff034e85e.svg" alt="\begin{tikzpicture}[initial text=, &amp;gt;={Stealth[round]}, node distance=2cm]
  \node[state, initial] (q_0) {};
  \node[state, right of=q_0, accepting] (q_1) {};
  \node[state, right of=q_1] (q_2) {};
  \node[state, right of=q_2, accepting] (q_3) {};
  \path[-&amp;gt;] (q_0) edge [bend left=30] node [above] {\(0\)} (q_1)
            (q_1) edge [bend left=30] node [below] {\(0\)} (q_0)
            (q_1) edge node [above] {\(\varepsilon\)} (q_2)
            (q_2) edge [bend left=30] node [above] {\(1\)} (q_3)
            (q_3) edge [bend left=30] node [below] {\(1\)} (q_2)
            (q_3) edge [bend left=50] node [below] {\(\varepsilon\)} (q_0)
            ;
\end{tikzpicture}
" style="height: 8.0688em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

</div>

<div class="my_example">

<div class="equation-container">
<span class="equation">
<img src="/ltximg/7a51ccfc4ee.svg" alt="\begin{tikzpicture}[initial text=, &amp;gt;={Stealth[round]}, node distance=2cm]
  \node[state, initial] (q_0) {};
  \node[state, right of=q_0] (q_1) {};
  \node[state, right of=q_1, accepting] (q_2) {};
  \node[state, right of=q_2, accepting] (q_3) {};
  \node[state, right of=q_3] (q_4) {};
  \path[-&amp;gt;] (q_0) edge node [above] {\(b\)} (q_1)
            (q_0) edge [loop above] node {\(a\)} (q_0)
            (q_1) edge [bend left=30] node [below] {\(a\)} (q_0)
            (q_1) edge node [above] {\(b\)} (q_2)
            (q_2) edge [bend left=50] node [below] {\(a\)} (q_0)
            (q_2) edge node [above] {\(b\)} (q_3)
            (q_3) edge [bend left=60] node [below] {\(a\)} (q_0)
            (q_3) edge node [above] {\(b\)} (q_4)
            (q_4) edge [bend left=60] node [below] {\(a\)} (q_0)
            (q_4) edge [loop above] node {\(a\)} (q_4)
            ;
\end{tikzpicture}
" style="height: 12.0987em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

</div>

