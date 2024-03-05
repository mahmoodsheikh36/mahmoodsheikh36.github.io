+++
title = "automata theory course homework 3"
author = ["mahmood"]
date = 2024-03-01T00:00:00+02:00
tags = ["cs", "math"]
draft = false
+++

<div class="problem">

in each of the following problems, prove that if <img src="/ltximg/79e36567062.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is a [regular language](20231201T201245--regular-language__math.org) then the language received by the defined operation is also a regular language. <br/>

<div class="subproblem" id="spb-automata-homework3-1">

<div class="equation-container">
<span class="equation">
<img src="/ltximg/ec27f5c63bb.svg" alt="\begin{equation}
  sub(L) = \Set{w \in \Sigma^* \given \exists x,y \in \Sigma^*(xwy \in L)}
\end{equation}
" style="height: 1.5194em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

</div>

<div class="solution">

given <img src="/ltximg/a37571c6469.svg" alt="\(A=(Q,\Sigma,\delta,q_0,F)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> is a [dfa](20231119T103153--deterministic-finite-automaton__cs_math.org) such that <img src="/ltximg/8c9fab3551f.svg" alt="\(L(A)=L\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, we construct a new automaton <img src="/ltximg/48b15ce2f17.svg" alt="\(M\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> that is similar to <img src="/ltximg/58b6138ac05.svg" alt="\(A\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, in which we turn every state from <img src="/ltximg/58b6138ac05.svg" alt="\(A\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> into an initial state, add a new extra accepting state <img src="/ltximg/6404fc4976e.svg" alt="\(p\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, and place an [empty transition](20240104T114306--empty-transition__.org) from every state in the automaton to <img src="/ltximg/6404fc4976e.svg" alt="\(p\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, except <img src="/ltximg/6404fc4976e.svg" alt="\(p\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> itself. the idea is to start "reading the tape" after whatever <img src="/ltximg/dc6958ba4e5.svg" alt="\(x\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> and allow it to finish successfully before any <img src="/ltximg/f13aa32dd48.svg" alt="\(y\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, so as to capture every <img src="/ltximg/e356be610b8.svg" alt="\(w\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
note that this wont work if <img src="/ltximg/79e36567062.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is empty, as <img src="/ltximg/48b15ce2f17.svg" alt="\(M\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> would still accept an empty string even though <img src="/ltximg/08e80d201fa.svg" alt="\(s \in L\)" style="height: 0.8063em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" /> is never satisfied. <br/>
after more thinking i realized this could be done more simply by turning all states into accepting states, but not <img src="/ltximg/16d1cbb9b84.svg" alt="\(q_0\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, the initial state will behave in <img src="/ltximg/48b15ce2f17.svg" alt="\(M\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> the same as in <img src="/ltximg/58b6138ac05.svg" alt="\(A\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, our resulting automaton <img src="/ltximg/48b15ce2f17.svg" alt="\(M\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> would also be deterministic. <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/716db683bd1.svg" alt="\begin{align*}
  M &amp;amp;= (Q,\Sigma,\delta,q_0,F')\\
  F' &amp;amp;= F \cup Q \setminus \Set{q_0}
\end{align*}
" style="height: 3.0972em; vertical-align: -0.4020em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

</div>

<div class="thought">

how about we turn all states into both initial states and from each state to each other reachable accepting state in the older automaton we turn all the states on the paths to these other accepting states into accepting ones in the new automaton. <br/>

</div>

<div class="subproblem">

<div class="equation-container">
<span class="equation">
<img src="/ltximg/25e33a687a6.svg" alt="\begin{equation}
  TwoLen(L)=\Set{a^{2|w|} \given w \in L}
\end{equation}
" style="height: 1.5194em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

</div>

<div class="solution">

one idea i had was adding an extra state to which the arrows would point to and from with the symbol <img src="/ltximg/863aaa5b4e8.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, so instead of a state pointing to another, a state would point to the extra state and the extra state has a pointer to every other state, this way we'd be detecting <img src="/ltximg/c344a2a7aae.svg" alt="\(aa\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> for every character from <img src="/ltximg/e356be610b8.svg" alt="\(w\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. another idea is to take the automaton that recognizes <img src="/ltximg/79e36567062.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, replace all symbols on all arrows with <img src="/ltximg/863aaa5b4e8.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, and duplicate the automaton, passing an arrow from the first automaton's accepting states (after disabling them) to the second's initial states, so we would be "duplicating" <img src="/ltximg/e356be610b8.svg" alt="\(w\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> itself into <img src="/ltximg/fa36e6cbb61.svg" alt="\(a^{2|w|}\)" style="height: 0.9685em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
let <img src="/ltximg/ecd855ca150.svg" alt="\(A=(Q, \Sigma, \delta, q_0, F)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> be a dfa that recognizes <img src="/ltximg/79e36567062.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, i.e. <img src="/ltximg/8c9fab3551f.svg" alt="\(L(A)=L\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, we construct the DFA <img src="/ltximg/ff99cffd775.svg" alt="\(A'\)" style="height: 0.8351em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />: <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/2720eaa24a6.svg" alt="\begin{align}
  A' &amp;amp;= (Q',\Sigma,\delta',q_0,F),\\
  Q' &amp;amp;= Q \cup \Set{q' \given q \in Q-\Set{q_0}},\\
  \delta' &amp;amp;= \bigcup_{((q_1,\theta),q_2) \in \delta} \Set{((q_1,a),q_1'), ((q_1',a),q_2)} \label{eq-automata-homework3-1}
\end{align}
" style="height: 6.0045em; vertical-align: -0.5392em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

eq-automata-homework3-1 basically means that we're replacing every symbol transition with a symbol <img src="/ltximg/39ae2353dda.svg" alt="\(\theta \in \Sigma\)" style="height: 0.8172em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" /> from state <img src="/ltximg/536371a4d43.svg" alt="\(q_1\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> to <img src="/ltximg/f6e3cf0bea4.svg" alt="\(q_2\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> with two transitions with the symbol <img src="/ltximg/863aaa5b4e8.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. the automaton <img src="/ltximg/ff99cffd775.svg" alt="\(A'\)" style="height: 0.8351em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> recognizes <img src="/ltximg/79c59e1a066.svg" alt="\(TwoLen(L)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>

</div>

<div class="subproblem">

<div class="equation-container">
<span class="equation">
<img src="/ltximg/d0e80efd848.svg" alt="\begin{equation}
  pump1(L)=\Set{xy \given \exists x,y \in \Sigma^* \land \exists \theta \in \Sigma(x \theta y \in L)}
\end{equation}
" style="height: 1.5194em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

</div>

<div class="solution">

the idea is that, for every reachable state <img src="/ltximg/6404fc4976e.svg" alt="\(p\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, we construct new paths from <img src="/ltximg/6404fc4976e.svg" alt="\(p\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> to every accepting state <img src="/ltximg/23458be1d31.svg" alt="\(f\)" style="height: 0.9695em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, those paths being copies of the previously existing paths, except that they start with an empty transition. <br/>
let <img src="/ltximg/58b6138ac05.svg" alt="\(A\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> be a DFA that recognizes <img src="/ltximg/79e36567062.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, we construct <img src="/ltximg/ff99cffd775.svg" alt="\(A'\)" style="height: 0.8351em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />: <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/1ad855bde5c.svg" alt="\begin{align}
  A' &amp;amp;= (Q',\Sigma,\delta',q_0,F),\\
  Q' &amp;amp;= Q \cup \bigcup \Set{\Set{p_1',p_2',\dots,p_n',f} \given (p_1,w) \sststile{A}{*} (f,\varepsilon), f \in F, w \in \Sigma^*, \forall 1 \le i \le n(p_i \in Q), |w|=n} \label{eq-automata-homework3-2}\\
  \delta' &amp;amp;= \delta \setminus \Set{(q,f) \given f \in F, q \in Q} \cup\\
  &amp;amp;\scalebox{3}{\(\bigcup\)} \Set*{\Set*{(p_i',p_{i+1}',\theta_i) \given
    \begin{aligned}
      &amp;amp;1 \le i \le n-1\\
      &amp;amp;(p_i,\cdot)\sststile{A}{\theta_i}(p_{i+1},\cdot)
    \end{aligned}}
    \cup \Set*{(p_n',f,\sigma) \given (p_n,\cdot) \sststile{A}{\sigma} (f,\cdot)}
    \cup \Set{(p_1,p_1',\varepsilon)}
    \given
      \begin{aligned}
        &amp;amp;(p_1,w) \sststile{A}{*} (f,\varepsilon)\\
        &amp;amp;f \in F\\ &amp;amp;w \in \Sigma^*\\
        &amp;amp;|w|=n
      \end{aligned}} \label{eq-automata-homework3-3}
\end{align}
" style="height: 11.2770em; vertical-align: -0.5392em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

in eq-automata-homework3-2 (the equation extends to two lines), <img src="/ltximg/ec37518ab78.svg" alt="\(p_i'\)" style="height: 1.0902em; vertical-align: -0.3043em; display: inline-block" class="org-latex org-latex-inline" /> denotes a copy (duplicate) of another state <img src="/ltximg/9187a42e790.svg" alt="\(p_i\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />. the big unions denote the union of objects (arrows in the case of the third equation, states in the case of the second equation) along all paths from all reachable states to all reachable accepting states. in eq-automata-homework3-3, nodes <img src="/ltximg/ec37518ab78.svg" alt="\(p_i'\)" style="height: 1.0902em; vertical-align: -0.3043em; display: inline-block" class="org-latex org-latex-inline" /> are the corresponding ones that were constructed in eq-automata-homework3-2. hopefully you get my point, the notation here is a little heavy and may be a little ambiguous. <br/>
the automaton <img src="/ltximg/ff99cffd775.svg" alt="\(A'\)" style="height: 0.8351em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> should recognize <img src="/ltximg/e725127a217.svg" alt="\(pump1(L)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> and thus it is a regular language. <br/>

</div>

<div class="subproblem">

<div class="equation-container">
<span class="equation">
<img src="/ltximg/f5ebcce7cc8.svg" alt="\begin{equation}
  pump(L) = \Set{xy \given \exists w \in \Sigma^*,xwy \in L}
\end{equation}
" style="height: 1.5194em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

</div>

<div class="solution">

this problem is similar to the previous one, except its simpler as we dont have to worry about whether the object in the middle (in the previous case, symbol, in this case, string) is there. furthermore, in the previous case we had to duplicate every possible path and make sure that on every path only one symbol is allowed to be "skipped", here we dont have to worry about that, we allow the automaton to skip as many symbols as it wants, so when scanning for symbols, we dont care if the tape is at <img src="/ltximg/dc6958ba4e5.svg" alt="\(x\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> or <img src="/ltximg/e356be610b8.svg" alt="\(w\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> or <img src="/ltximg/f13aa32dd48.svg" alt="\(y\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, because if its at <img src="/ltximg/f13aa32dd48.svg" alt="\(y\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, then it can also be at <img src="/ltximg/e356be610b8.svg" alt="\(w\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> because every symbol that is a part of <img src="/ltximg/f13aa32dd48.svg" alt="\(y\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> can also be a part of <img src="/ltximg/e356be610b8.svg" alt="\(w\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> as <img src="/ltximg/604e89a8d0d.svg" alt="\(w \in \Sigma^*\)" style="height: 0.8118em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" /> and there's no restrictions on <img src="/ltximg/e356be610b8.svg" alt="\(w\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. so the idea i came up with is to simply add a new state that redirects to itself on all symbols, so that all states in the automaton redirect to it with an empty transition, and exit from it to every other state in the automaton with an empty transition aswell, the intuition is that this allows the automaton to "skip" whatever <img src="/ltximg/e356be610b8.svg" alt="\(w\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> and jump from <img src="/ltximg/dc6958ba4e5.svg" alt="\(x\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> to <img src="/ltximg/f13aa32dd48.svg" alt="\(y\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
there is just one problem, which is similar to that i faced in the initial solution for spb-automata-homework3-1, the automaton described would still accept <img src="/ltximg/1e532657953.svg" alt="\(\varepsilon\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> even if <img src="/ltximg/1b3e1adc179.svg" alt="\(L=\emptyset\)" style="height: 0.8878em; vertical-align: -0.1036em; display: inline-block" class="org-latex org-latex-inline" />. i can think of two ways to resolve this issue, first, if the language <img src="/ltximg/79e36567062.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> doesnt contain <img src="/ltximg/1e532657953.svg" alt="\(\varepsilon\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, this would mean the DFA <img src="/ltximg/58b6138ac05.svg" alt="\(A\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> that recognizes <img src="/ltximg/79e36567062.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> has an accepting initial state, so we construct our automaton depending on whether the initial state of <img src="/ltximg/58b6138ac05.svg" alt="\(A\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is an accepting one or not, if it isnt, then we drop the empty transitions from the initial states of the our automaton <img src="/ltximg/48b15ce2f17.svg" alt="\(M\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> (that we are constructing to recognize <img src="/ltximg/b5070aa1c95.svg" alt="\(pump(L)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />) to <img src="/ltximg/6404fc4976e.svg" alt="\(p\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />. second, we could use an additional state <img src="/ltximg/c86123322b4.svg" alt="\(q_0'\)" style="height: 1.0783em; vertical-align: -0.2924em; display: inline-block" class="org-latex org-latex-inline" /> that is an accepting state if <img src="/ltximg/16d1cbb9b84.svg" alt="\(q_0\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> is an accepting state, and has transitions to <img src="/ltximg/16d1cbb9b84.svg" alt="\(q_0\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> for all symbols in <img src="/ltximg/4ddbce7ed65.svg" alt="\(\Sigma\)" style="height: 0.7735em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> (without <img src="/ltximg/1e532657953.svg" alt="\(\varepsilon\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />). im going with the latter approach. <br/>
let <img src="/ltximg/a37571c6469.svg" alt="\(A=(Q,\Sigma,\delta,q_0,F)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, we construct <img src="/ltximg/48b15ce2f17.svg" alt="\(M\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />: <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/61419e60305.svg" alt="\begin{align*}
  M &amp;amp;= (Q',\Sigma,\delta',q_0',F'),\\
  Q' &amp;amp;= Q \cup \Set{q_0',p},\\
  F' &amp;amp;= Q \cup \Set{p} \cup \begin{cases} \Set{q_0'} &amp;amp; q_0 \in F\\ \emptyset &amp;amp; q_0 \notin F \end{cases},\\
  \delta' &amp;amp;= \delta \cup \Set{(q_0', q_0, \theta) \given \theta \in \Sigma} \cup \Set{(q,p,\varepsilon) \given q \in Q \setminus \Set{q_0}} \cup \Set{(p,q,\varepsilon) \given q \in Q \setminus \Set{q_0}}.
\end{align*}
" style="height: 7.9972em; vertical-align: -0.4020em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

<img src="/ltximg/48b15ce2f17.svg" alt="\(M\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> recognizes the <img src="/ltximg/b5070aa1c95.svg" alt="\(pump(L)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> and so its a regular language. <br/>

</div>

<div class="subproblem">

<div class="equation-container">
<span class="equation">
<img src="/ltximg/52140101e70.svg" alt="\begin{equation}
  ChopHead(L)=\Set{w \in \Sigma^* \given \exists \theta \in \Sigma, \theta w \in L}
\end{equation}
" style="height: 1.5194em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

</div>

<div class="solution" id="sol-automata-homework3-3">

we can turn every transition originating from an initial state into an empty transition, or we can get rid of the original initial states altogether and turn the states they are connected to into initial states. obviously when considering a dfa we'd have to deal with only one initial state. <br/>
after more thinking, i found that this was a little trickier than i thought, what about transitions _into_ the initial state? if we got rid of those aswell the automaton wouldnt function properly. this could be resolved by adding yet another state, that inherits all the ingoing transitions of <img src="/ltximg/16d1cbb9b84.svg" alt="\(q_0\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> from <img src="/ltximg/58b6138ac05.svg" alt="\(A\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, but isnt an initial state, call it <img src="/ltximg/536371a4d43.svg" alt="\(q_1\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />. <img src="/ltximg/536371a4d43.svg" alt="\(q_1\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> isnt necessarily a reachable state as <img src="/ltximg/16d1cbb9b84.svg" alt="\(q_0\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> could've not had any ingoing transitions (except the fact that it is an initial state). <br/>
given <img src="/ltximg/58b6138ac05.svg" alt="\(A\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is a dfa such that <img src="/ltximg/8c9fab3551f.svg" alt="\(L(A)=L\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, we construct <img src="/ltximg/48b15ce2f17.svg" alt="\(M\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />: <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/4c1383c3157.svg" alt="\begin{align*}
  M &amp;amp;= (Q',\Sigma,\delta',q_0',F'),\\
  Q' &amp;amp;= Q \setminus \Set{q_0} \cup \Set{q_0',q_1},\\
  \delta' &amp;amp;= \delta \setminus \Set{(q_0,q,\theta) \given q \in Q,\theta \in \Sigma} \cup \Set{(q_0',q,\varepsilon) \given q \in Q' \setminus \Set{q_0'}} \cup \Set{(q_1,q,\theta) \given (\exists q \in Q,\theta \in \Sigma)[(q_0,q,\theta) \in \delta]}\\
  &amp;amp;\quad\cup \Set{(q,q_1,\theta) \given (\exists q \in Q,\theta \in \Sigma)[(q,q_0,\theta) \in \delta]}\\
  F' &amp;amp;= F \setminus \Set{q_0}.
\end{align*}
" style="height: 7.5072em; vertical-align: -0.4020em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

<img src="/ltximg/48b15ce2f17.svg" alt="\(M\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is an NFA that recognizes <img src="/ltximg/cd0ff19c111.svg" alt="\(ChopHead(L)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> and thus it is a regular language. <br/>

</div>

<div class="subproblem">

<div class="equation-container">
<span class="equation">
<img src="/ltximg/4c9095992c5.svg" alt="\begin{equation}
  ChopTail(L) = \Set{w \in \Sigma^* \given \exists \theta \in \Sigma, w\theta \in L}
\end{equation}
" style="height: 1.5194em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

</div>

<div class="solution">

the idea is similar to that of sol-automata-homework3-3, we turn transitions into accepting states into empty transitions so that we may skip that last symbol. <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/9027736c242.svg" alt="\begin{align*}
  M &amp;amp;= (Q,\Sigma,\delta',q_0,F),\\
  \delta' &amp;amp;= \delta \setminus \Set{(q,f,\theta) \given f \in F, q \in Q,\theta \in \Sigma} \cup \Set{(q,f,\varepsilon) \given (\exists q \in Q,f \in F,\theta \in \Sigma)[q,f,\theta] \in \delta}
\end{align*}
" style="height: 3.0972em; vertical-align: -0.4020em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

i realize that some states may have an empty transition to themselves, which may be problematic, im not sure, but i dont want to have to deal with it, i've thought enough about one homework, lol. <br/>

</div>

</div>

