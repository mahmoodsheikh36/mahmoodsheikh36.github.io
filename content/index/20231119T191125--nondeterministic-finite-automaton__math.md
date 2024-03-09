+++
title = "nondeterministic finite automaton"
author = ["mahmood"]
date = 2024-03-01T00:00:00+02:00
tags = ["math"]
draft = false
+++

<div class="dummy">

<div class="definition" id="def-nfa">

a _nondeterministic finite automaton (NFA)_ is a 5-tuple <img src="/ltximg/dcbf2ed5d91.svg" alt="\((Q,\Sigma,\delta,q_0,F)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, where <br/>

1.  <img src="/ltximg/8c5e869bf8f.svg" alt="\(Q\)" style="height: 0.9586em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> is a [finite set](20231015T221141--finite-set__math.org) of states, <br/>
2.  <img src="/ltximg/400e9daadfe.svg" alt="\(\Sigma\)" style="height: 0.7735em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is a finite [alphabet](20231115T204202--alphabet__math.org), <br/>
3.  <img src="/ltximg/6194b4aef61.svg" alt="\(\delta: Q \times \Sigma_\varepsilon \to \mathcal{P}(Q)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> is the transition function, <br/>
4.  <img src="/ltximg/ba005a10a63.svg" alt="\(q_0 \in Q\)" style="height: 0.9586em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> is the _start state_, <br/>
5.  <img src="/ltximg/d713219ed6e.svg" alt="\(F \subseteq Q\)" style="height: 0.9586em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> is the set of _accept states_. <br/>

</div>

usually such an automaton is abbreviated NFA. <br/>
we say an NFA <img src="/ltximg/bd89d606b5a.svg" alt="\(N\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> accepts the [string](20231115T210736--string__math.org) <img src="/ltximg/a4ab3f070f3.svg" alt="\(w\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> if we can write <img src="/ltximg/a4ab3f070f3.svg" alt="\(w\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> as <img src="/ltximg/e44da8cf105.svg" alt="\(w=y_1y_2 \cdots y_m\)" style="height: 0.7245em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, where each <img src="/ltximg/bed092ba16d.svg" alt="\(y_i\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> is a member of <img src="/ltximg/6d1d89d522c.svg" alt="\(\Sigma_\varepsilon\)" style="height: 0.9205em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> and a sequene of states <img src="/ltximg/ac64eac3874.svg" alt="\(r_0,r_1,\dots,r_m\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> exists in <img src="/ltximg/8c5e869bf8f.svg" alt="\(Q\)" style="height: 0.9586em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> with three conditions: <br/>

1.  <img src="/ltximg/35c80e62869.svg" alt="\(r_0=q_0\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, <br/>
2.  <img src="/ltximg/6d90781b8f7.svg" alt="\(r_{i+1} \in \delta(r_i,y_{i+1})\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, for <img src="/ltximg/a2dbd58bb62.svg" alt="\(i=0,\dots,m-1\)" style="height: 0.9353em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, and <br/>
3.  <img src="/ltximg/684276b8514.svg" alt="\(r_m \in F\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" />. <br/>

condition 1 says that the machine starts out in the start state. condition 2 says that state <img src="/ltximg/2b90774ffbf.svg" alt="\(r_{i+1}\)" style="height: 0.7483em; vertical-align: -0.2771em; display: inline-block" class="org-latex org-latex-inline" /> is one of the allowable next states when <img src="/ltximg/bd89d606b5a.svg" alt="\(N\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is in state <img src="/ltximg/44e5ba33ef4.svg" alt="\(r_i\)" style="height: 0.6673em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> and reading <img src="/ltximg/a061edf1bbb.svg" alt="\(y_{i+1}\)" style="height: 0.7483em; vertical-align: -0.2771em; display: inline-block" class="org-latex org-latex-inline" />. observe that <img src="/ltximg/98f82fb5ff2.svg" alt="\(\delta(r_i,y_{i+1})\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> is the set of allowable next states and so we say that <img src="/ltximg/2b90774ffbf.svg" alt="\(r_{i+1}\)" style="height: 0.7483em; vertical-align: -0.2771em; display: inline-block" class="org-latex org-latex-inline" /> is a member of that set. finally, condition 3 says that the machine accepts its input if the last state is an accept state. <br/>
(Michael Sipser, 2012 definition 1.37) <br/>

</div>

<div class="dummy">

although they recognize the same class of languages ([regular language](20231201T201245--regular-language__math.org)s), there are a few differences between a [deterministic finite automaton](20231119T103153--deterministic-finite-automaton__cs_math.org) and a nondeterministic finite automaton. first, every state of a DFA always has exactly one exiting transition arrow for each symbol in the alphabet. NFAs violate that rule. in an NFA, a state may have zero, one, or many exiting arrows for each alphabet symbol. second, in a DFA, labels on the transition arrows are symbols from the alphabet. this NFA has an arrow with the label <img src="/ltximg/528554eb55e.svg" alt="\(\varepsilon\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. in general, an NFA may have arrows labelled with members of the alphabet or <img src="/ltximg/528554eb55e.svg" alt="\(\varepsilon\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. zero, one, or many arrows may exit from each state with the label <img src="/ltximg/528554eb55e.svg" alt="\(\varepsilon\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
how does an NFA compute? suppose that we are running an NFA on an input string and come to a state with multiple ways to proceed. the machine splits into multiple copies of itself and follows all the possibilities in parallel. each copy of the machine takes one of the possible ways to proceed and continues as before. if there are subsequent choices, the machine splits again. if the next input symbol doesn’t appear on any of the arrows exiting the state occupied by a copy of the machine, that copy of the machine dies, along with the branch of the computation associated with it. finally, if any one of these copies of the machine is in an accept state at the end of the input, the NFA accepts the input string. <br/>
if a state with an <img src="/ltximg/528554eb55e.svg" alt="\(\varepsilon\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> symbol on an exiting arrow is encountered, something similar happens. without reading any input, the machine splits into multiple copies, one following each of the exiting <img src="/ltximg/528554eb55e.svg" alt="\(\varepsilon\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />-labeled arrows and one staying at the current state. then the machine proceeds nondeterministically as before. [nondeterminism](20230817T025551--nondeterminism__.org) may be viewed as a kind of parallel computation wherein multiple independent "processes" or "threads" can be running concurrently. <br/>
when the NFA splits to follow several choices, that corresponds to a process "forking" into several children, each proceeding separately. if at least one of these processes accepts, then the entire computation accepts. <br/>
(Michael Sipser, 2012 chapter 1.2 nondeterminism) <br/>

</div>

<div class="my_example">

<div class="equation-container">
<span class="equation">
<img src="/ltximg/44a932d90ed.svg" alt="\begin{tikzpicture}[initial text=, &amp;gt;={Stealth[round]}, node distance=2cm]
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
" style="height: 5.4034em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

</div>

<div class="my_example">

<div class="equation-container">
<span class="equation">
<img src="/ltximg/a3a729d68af.svg" alt="\begin{tikzpicture}[initial text=, &amp;gt;={Stealth[round]}, node distance=2cm]
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
" style="height: 5.5933em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

</div>

<div class="my_example">

<div class="equation-container">
<span class="equation">
<img src="/ltximg/627d6b7c298.svg" alt="\begin{tikzpicture}[initial text=, &amp;gt;={Stealth[round]}, node distance=2cm]
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
" style="height: 8.0205em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

</div>

<div class="my_example">

<div class="equation-container">
<span class="equation">
<img src="/ltximg/b24f47e61b4.svg" alt="\begin{tikzpicture}[initial text=, &amp;gt;={Stealth[round]}, node distance=2cm]
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
" style="height: 12.0620em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

</div>

