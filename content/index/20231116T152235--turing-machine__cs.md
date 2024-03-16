+++
title = "turing machine"
author = ["mahmood"]
date = 2023-11-16T15:22:00+02:00
tags = ["cs"]
draft = false
+++

<div class="dummy">

_turing machine (TM)/s are named after Alan Turing, who invented them in 1936. turing machines can compute any function normally considered computable; in fact, it is quite reasonable to define /computable_ to mean computable by a TM. <br/>
we describe here a deterministic, one-tape Turing machine. this is the standard off-the-shelf model. there are many variations, apparently more powerful or less powerful but in reality not. <br/>
a TM has a finite set of states <img src="/ltximg/8c5e869bf8f.svg" alt="\(Q\)" style="height: 0.9586em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, a semi-infinite tape that is delimited on the left end by an endmarker <img src="/ltximg/9b0fc82968c.svg" alt="\(\vdash\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> and is infinite to the right, and a head that can move left and right over the tape, reading and writing symbols. <br/>
the input string is of finite length and is initially written on the tape in contiguous tape cells snug up against the left endmarker. the infinitely many cells to the right of the input all contain a special blank symbol <img src="/ltximg/3a623f11cc2.svg" alt="\(\sqcup\)" style="height: 0.6428em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
the machine starts in its start state <img src="/ltximg/81fccc36e19.svg" alt="\(s\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> with its head scanning the left endmarker. in each step it reads the symbol on the tape under its head. depending on that symbol and the current state, it writes a new symbol on that tape cell, moves its head either left or right one cell, and enters a new state. the action it takes in each situation is determined by a transition function <img src="/ltximg/b0c2112531f.svg" alt="\(\sigma\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. it accepts its input by entering a special accept state <img src="/ltximg/e842ee03e68.svg" alt="\(t\)" style="height: 0.7011em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> and rejects by entering a special reject state <img src="/ltximg/1f3fb55ba10.svg" alt="\(r\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. on some inputs it may run infinitely without ever accepting or rejecting, in which case it is said to _loop_ on that input. <br/>

<div class="definition">

a _deterministic one-tape turing machine_ is a 9-[tuple](20231201T170236--tuple__math.org) <br/>
<img src="/ltximg/ada2034f3ff.svg" alt="\[ M=(Q,\Sigma,\Gamma,\vdash,\sqcup,\delta,s,t,r) \]" style="height: 1.5194em; display: block" class="org-latex org-latex-block" /> <br/>
where <br/>

-   <img src="/ltximg/8c5e869bf8f.svg" alt="\(Q\)" style="height: 0.9586em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> is a [finite set](20231015T221141--finite-set__math.org) (the _states_); <br/>
-   <img src="/ltximg/400e9daadfe.svg" alt="\(\Sigma\)" style="height: 0.7735em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is a finite set (the _input [alphabet](20231115T204202--alphabet__math.org)_); <br/>
-   <img src="/ltximg/27459138262.svg" alt="\(\Gamma\)" style="height: 0.7735em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is a finite set (the _tape alphabet_) containing <img src="/ltximg/400e9daadfe.svg" alt="\(\Sigma\)" style="height: 0.7735em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> as a subset; <br/>
-   <img src="/ltximg/7d9cbf7c823.svg" alt="\(\sqcup \in \Gamma - \Sigma\)" style="height: 0.8551em; vertical-align: -0.1309em; display: inline-block" class="org-latex org-latex-inline" />, the _blank symbol_; <br/>
-   <img src="/ltximg/99d4c66a047.svg" alt="\(\vdash \in \Gamma - \Sigma\)" style="height: 0.8606em; vertical-align: -0.1309em; display: inline-block" class="org-latex org-latex-inline" />, the _left endmarker_; <br/>
-   <img src="/ltximg/b67b3396d3f.svg" alt="\(\delta: Q \times \Gamma \to Q \times \Gamma \times \set{L,R}\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, the _transition function_; <br/>
-   <img src="/ltximg/a841f4d6aad.svg" alt="\(s \in Q\)" style="height: 0.9586em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, the _start state_; <br/>
-   <img src="/ltximg/4b0e0626131.svg" alt="\(t \in Q\)" style="height: 0.9586em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, the _accept state_; and <br/>
-   <img src="/ltximg/186645a9947.svg" alt="\(r \in Q\)" style="height: 0.9586em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, the _reject state_; <img src="/ltximg/f6517361f82.svg" alt="\(r \neq t\)" style="height: 0.9695em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />. <br/>

</div>

intuitively, <img src="/ltximg/6fef13179b3.svg" alt="\(\delta(p,a)=(q,b,d)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> means, "when in state <img src="/ltximg/23236afec63.svg" alt="\(p\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> scanning symbol <img src="/ltximg/942eecb938a.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, write <img src="/ltximg/42cac82f75e.svg" alt="\(b\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> on that tape cell, move the head in direction <img src="/ltximg/3c71d685ee3.svg" alt="\(d\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, and enter state <img src="/ltximg/8e22f36a85f.svg" alt="\(q\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />." the symbols <img src="/ltximg/7c012388408.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/89199d9d550.svg" alt="\(R\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> stand for left and right, respectively. <br/>
we restrict TMs so that the left endmarker is never overwritten with another symbol and the machine never moves off the tape to the left of the endmarker; that is, we require that for all <img src="/ltximg/715283480bf.svg" alt="\(p \in Q\)" style="height: 0.9586em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> there exists <img src="/ltximg/0b785e9a8e8.svg" alt="\(q \in Q\)" style="height: 0.9586em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> such that <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/04df283e165.svg" alt="\begin{equation}
  \delta(p,\vdash)=(q,\vdash,R).
\end{equation}
" style="height: 1.5194em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

we also require that once the machine enters its accept state, it never leaves it, and similarly for its reject state; that is, for all <img src="/ltximg/900bec3a00e.svg" alt="\(b \in \Gamma\)" style="height: 0.8172em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" /> there exist <img src="/ltximg/70c637f7b07.svg" alt="\(c,c' \in \Gamma\)" style="height: 1.0257em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/e0915e34654.svg" alt="\(d,d' \in \{L,R\}\)" style="height: 1.0801em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> such that <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/b311e6687fb.svg" alt="\begin{gather*}
  \delta(t,b)=(t,c,d),
  \delta(r,b)=(r,c',d').
\end{gather*}
" style="height: 1.6272em; vertical-align: -0.4020em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

we sometimes refer to the state set and transition function collectively as the _finite control_. <br/>
(copied from Dexter C. Kozen, 1997 lecture 28 turing machines and effective computability) <br/>

</div>

<div class="dummy">

a _Turing machine_ is a kind of idealized typewriter with an infinite tape and a reading head moving back and forth one cell at a time according to a finite state program. in 1936 Turing demonstrated convincingly that this mathematical model captured the informal notion of effectively calculable. turing's model and analysis have been accepted ever since as the most convincing model. <br/>
(taken from robert i. soare, 1977 introduction) <br/>

</div>

<div class="dummy">

<div class="definition">

a _Turing machine_ <img src="/ltximg/bfb79e58d2f.svg" alt="\(M\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> includes a two-way infinite tape divided into cells, a reading head which scans one cell of the tape at a time, and a finite set of _internal states_ <img src="/ltximg/1937baef084.svg" alt="\(Q=\set{q_0, q_1,\dots, q_n}, n\geq 1\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. each cell is either blank (B) or has written on it the symbol 1. in a single step the machine may simultaneously: (1) change from one state to another; (2) change the scanned symbol <img src="/ltximg/81fccc36e19.svg" alt="\(s\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> to another symbol <img src="/ltximg/2f3d6e05942.svg" alt="\(s' \in S=\set{1,B}\)" style="height: 1.0801em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />; and (3) move the reading head one cell to the right (R) or left (L). the operation of <img src="/ltximg/bfb79e58d2f.svg" alt="\(M\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is controlled by a [partial map](20240101T214716--partial-function__math.org) <img src="/ltximg/9c2c8c1e331.svg" alt="\(\delta:Q\times S \to Q \times S \times \set{R,L}\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> (which may be undefined for some arguments). <br/>
(taken from robert i. soare, 1977 definition 1.4.1) <br/>

</div>

the interpretation is that if <img src="/ltximg/27188c1bbef.svg" alt="\((q,s,q',s',X) \in \delta\)" style="height: 1.0801em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> then the machine <img src="/ltximg/bfb79e58d2f.svg" alt="\(M\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> in state <img src="/ltximg/8e22f36a85f.svg" alt="\(q\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, scanning symbol <img src="/ltximg/81fccc36e19.svg" alt="\(s\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, changes to state <img src="/ltximg/b0200881f95.svg" alt="\(q'\)" style="height: 1.0257em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, replaces <img src="/ltximg/81fccc36e19.svg" alt="\(s\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> by <img src="/ltximg/c11758bcaa6.svg" alt="\(s'\)" style="height: 0.8351em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, and moves to scan one square to the right if <img src="/ltximg/bac63954ad3.svg" alt="\(X=R\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> (or left if <img src="/ltximg/d581897fea5.svg" alt="\(X=L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />). the map <img src="/ltximg/bde25235d58.svg" alt="\(\delta\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> viewed as a finite set of quintuples is called a _Turing program_. the input [integer](20240205T193003--integer__math.org) <img src="/ltximg/264a89f023b.svg" alt="\(x\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is represented by a string of <img src="/ltximg/05252d2a239.svg" alt="\(x+1\)" style="height: 0.7968em; vertical-align: -0.1305em; display: inline-block" class="org-latex org-latex-inline" /> consecutive 1’s (with all other cells blank). the Turing machine is pictured in (in robert i. soare, 1977 chapter 1 figure 1.1). <br/>
we begin with <img src="/ltximg/bfb79e58d2f.svg" alt="\(M\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> in the starting state <img src="/ltximg/486b0527d70.svg" alt="\(q_1\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> scanning the leftmost cell containing a 1, called the _starting cell_. if the machine ever reaches the _halting state_ <img src="/ltximg/de31ec49df7.svg" alt="\(q_0\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, after say <img src="/ltximg/81fccc36e19.svg" alt="\(s\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> steps, then we say <img src="/ltximg/bfb79e58d2f.svg" alt="\(M\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> _halts_ and the output <img src="/ltximg/73a97ac470e.svg" alt="\(y\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> is the total number of 1's on the tape. (note that <img src="/ltximg/8f2bf58e82c.svg" alt="\(f(x)=\max\{x+1,s\}\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> bounds the maximum distance from the starting cell to any cell which is either scanned or contains an input symbol. hence the determination of <img src="/ltximg/73a97ac470e.svg" alt="\(y\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> is effective.) <br/>
we may assume that <img src="/ltximg/bfb79e58d2f.svg" alt="\(M\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> never makes any further moves after reaching state <img src="/ltximg/de31ec49df7.svg" alt="\(q_0\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, i.e., that the domain of <img src="/ltximg/bde25235d58.svg" alt="\(\delta\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> contains no element of the form <img src="/ltximg/df61f922e29.svg" alt="\((q_0,s)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. we say that <img src="/ltximg/bfb79e58d2f.svg" alt="\(M\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> computes the partial function <img src="/ltximg/e5782b88c92.svg" alt="\(\psi\)" style="height: 0.9695em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> provided that <img src="/ltximg/e391511c3f3.svg" alt="\(\psi(x)=y\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> if and only if <img src="/ltximg/bfb79e58d2f.svg" alt="\(M\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> with input <img src="/ltximg/264a89f023b.svg" alt="\(x\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> eventually halts and yields output <img src="/ltximg/73a97ac470e.svg" alt="\(y\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />. for example, the following machine computes the function <img src="/ltximg/34f6edbf1cd.svg" alt="\(f(x)=x+3\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>


<div id="orge4eb9fe" class="equation-container">
<span class="equation">
<img src="/ltximg/84b5e241fde.svg" alt="\begin{equation}
  \begin{array}{ccccc}
    q_1 &amp;amp; 1 &amp;amp; q_1 &amp;amp; 1 &amp;amp; R\\
    q_1 &amp;amp; B &amp;amp; q_2 &amp;amp; 1 &amp;amp; R\\
    q_2 &amp;amp; B &amp;amp; q_0 &amp;amp; 1 &amp;amp; R
  \end{array}
\end{equation}
" style="height: 3.7244em; vertical-align: -0.5392em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

the instantaneous condition of <img src="/ltximg/bfb79e58d2f.svg" alt="\(M\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> during each step in a Turing calculation is completely determined by: (1) the current state <img src="/ltximg/ef3e5dc9124.svg" alt="\(q_i\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> of the machine; (2) the symbol <img src="/ltximg/9f0e2ea9b66.svg" alt="\(s_1\)" style="height: 0.6673em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> being scanned; (3) the symbols on the tape to the right of symbol <img src="/ltximg/9f0e2ea9b66.svg" alt="\(s_1\)" style="height: 0.6673em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> up to the last 1, i.e., <img src="/ltximg/4a740b3b79f.svg" alt="\(s_2, s_3, \dots, s_k\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />; and (4) the symbols to the left of <img src="/ltximg/9f0e2ea9b66.svg" alt="\(s_1\)" style="height: 0.6673em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> up to the first 1, i.e., <img src="/ltximg/31af7b83db8.svg" alt="\(t_1,t_2,\dots,t_m\)" style="height: 0.8917em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />. this is the _(instantaneous) configuration_ of the machine at that step and is written <br/>


<div id="orge546378" class="equation-container">
<span class="equation">
<img src="/ltximg/cd4e57ca7b1.svg" alt="\begin{equation}
  c = t_mt_{m-1}t_{m-2} \dots t_2t_1q_is_1s_2s_3 \dots s_k.
\end{equation}
" style="height: 1.5030em; vertical-align: -0.2779em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

for example, the machine of eq-turing-machine-1 in calculating on input <img src="/ltximg/fc9b486eb9c.svg" alt="\(x=0\)" style="height: 0.7155em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> passes through the configurations, <img src="/ltximg/1ea6fea3a9c.svg" alt="\(q_11,1q_1B,11q_2B\)" style="height: 0.9586em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, and <img src="/ltximg/3be5b892ef9.svg" alt="\(111q_0B\)" style="height: 0.9586em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, and it yields output <img src="/ltximg/144e58abfe6.svg" alt="\(y=3\)" style="height: 0.9061em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />. (recall that the input <img src="/ltximg/264a89f023b.svg" alt="\(x\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is coded by <img src="/ltximg/05252d2a239.svg" alt="\(x+1\)" style="height: 0.7968em; vertical-align: -0.1305em; display: inline-block" class="org-latex org-latex-inline" /> consecutive 1's while the output <img src="/ltximg/73a97ac470e.svg" alt="\(y\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> is coded by the total number of 1's on the tape. also notice that the tape contains only finitely many non-blank symbols at the beginning of any calculation and that this condition persists at all later stages, whether the machine halts or not, so that the integers <img src="/ltximg/4d5f5bed723.svg" alt="\(k\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/1c6b9242d2b.svg" alt="\(m\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> in eq-turing-machine-2 exist.) <br/>
if the machine <img src="/ltximg/bfb79e58d2f.svg" alt="\(M\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> enters a state <img src="/ltximg/4b20709a9d8.svg" alt="\(q \neq q_0\)" style="height: 0.9695em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> and reads a symbol <img src="/ltximg/81fccc36e19.svg" alt="\(s\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> from which <img src="/ltximg/d9c3dbfaaa0.svg" alt="\(\delta(q,s)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> gives no moves, then the machine stalls, i.e., makes no further moves, and gives no output. we do not refer to this as halting even though the machine stalls and stops forever. we use the term halting only if <img src="/ltximg/bfb79e58d2f.svg" alt="\(M\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> enters the halting state <img src="/ltximg/de31ec49df7.svg" alt="\(q_0\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />. <br/>

<div class="definition">

a _Turing computation_ according to _Turing program_ <img src="/ltximg/65eedb9b1de.svg" alt="\(P\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> with input <img src="/ltximg/264a89f023b.svg" alt="\(x\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is a sequence of configurations, <img src="/ltximg/9c2ae551455.svg" alt="\(c_0,c_1,\dots,c_n\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> such that <img src="/ltximg/43d2c70e777.svg" alt="\(c_0\)" style="height: 0.6673em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> represents the machine in the starting state <img src="/ltximg/486b0527d70.svg" alt="\(q_1\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> reading the leftmost symbol of the input <img src="/ltximg/264a89f023b.svg" alt="\(x\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, <img src="/ltximg/541b9f1a9ab.svg" alt="\(c_n\)" style="height: 0.6673em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> represents the machine in the halting state <img src="/ltximg/de31ec49df7.svg" alt="\(q_0\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, and the transition <img src="/ltximg/6157aa32528.svg" alt="\(c_i \to c_{i+1}\)" style="height: 0.7483em; vertical-align: -0.2771em; display: inline-block" class="org-latex org-latex-inline" />, for all <img src="/ltximg/892c933a39c.svg" alt="\(i&amp;lt;n\)" style="height: 0.7830em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />, is given by the Turing program <img src="/ltximg/65eedb9b1de.svg" alt="\(P\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. <br/>

</div>

thus, from now on a computation will always refer to a halting, i.e., _convergent_, calculation. a partial function of <img src="/ltximg/b32b0f8a94b.svg" alt="\(n\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> variables is associated with each Turing machine <img src="/ltximg/bfb79e58d2f.svg" alt="\(M\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> by representing the input <img src="/ltximg/75bb3f6422b.svg" alt="\((x_1,x_2,\dots,x_n)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> by the following initial configuration of <img src="/ltximg/1e262d2a549.svg" alt="\(M: q_1 \alpha_1 B \alpha_2 \dots B \alpha_n\)" style="height: 0.9586em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> where <img src="/ltximg/95994808231.svg" alt="\(\alpha_i\)" style="height: 0.6673em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> consists of <img src="/ltximg/54f36f9fc14.svg" alt="\(x_i+1\)" style="height: 0.8625em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> consecutive 1's. <br/>

<div class="definition">

given <img src="/ltximg/b32b0f8a94b.svg" alt="\(n\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> inputs <img src="/ltximg/e838263bab4.svg" alt="\(x_1,\dots,x_n\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, we represent these as an input to a Turing machine by writing each as a block of <img src="/ltximg/f746dd7e1c0.svg" alt="\((x_k+1)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> 1's and separating each block by a <img src="/ltximg/792bcfb99f0.svg" alt="\(B\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. <br/>

</div>

(taken from robert i. soare, 1977 chapter 1 defining computability) <br/>

</div>

<div class="theorem">

a [function](20231111T073425--function__math.org) is effectively calculable by a human being iff it can be computed by a turing machine. <br/>
(taken from robert i. soare, 1977 theorem 1.3.1) <br/>

</div>

