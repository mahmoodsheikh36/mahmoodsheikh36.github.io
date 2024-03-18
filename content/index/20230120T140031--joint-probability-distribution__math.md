+++
title = "joint probability distribution"
author = ["mahmood"]
date = 2024-03-17T00:00:00+02:00
tags = ["math"]
draft = false
+++

<div class="definition">

given two random variables that are defined on the same [probability space](20240215T214810--probability-space__math.org), the **joint probability distribution** is the corresponding [probability distribution](20230120T140123--probability-distribution__math.org) on all possible pairs of outputs. it is denoted by <img src="/ltximg/10338ebb005.svg" alt="$P(X=x,Y=y)$" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> <br/>

</div>

<div class="characteristic">

<img src="/ltximg/2f2a0f7fb87.svg" alt="\[ P(X=x,Y=y) \geq 0 \]" style="height: 1.5194em; display: block" class="org-latex org-latex-block" /> <br/>

</div>

<div class="characteristic">

<img src="/ltximg/c1887964ffa.svg" alt="\[ \sum_{x} \sum_{y} P(X=x,Y=y)=1 \]" style="height: 2.6328em; display: block" class="org-latex org-latex-block" /> <br/>

</div>

<div class="definition" id="def-jointdist">

for any <img src="/ltximg/440ac992d7e.svg" alt="\(i \in I\)" style="height: 0.8063em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />, let <img src="/ltximg/b537456a35d.svg" alt="\(X_i\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> be a [real random variable](20230104T221353--random-variable__math.org). for any [finite subset](20231015T221141--finite-set__math.org) <img src="/ltximg/3e869d6636f.svg" alt="\(J \subseteq I\)" style="height: 0.9013em; vertical-align: -0.1824em; display: inline-block" class="org-latex org-latex-inline" />, let <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/3af1f8edfa1.svg" alt="\begin{align*}
  F_J \defeq {F_{(X_j)}}_{j \in J}&amp;amp;: \mathbb{R}^J \to [0,1],\\
  &amp;amp;x \mapsto \Pr[\forall j \in J(X_j \le x_j)] = \Pr\left[\bigcap_{j \in J} X^{-1}_j((-\infty,x_j])\right].
\end{align*}
" style="height: 5.7470em; vertical-align: -0.5392em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

then <img src="/ltximg/6d0cef7e774.svg" alt="\(F_J\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> is called the _joint distribution function_ of <img src="/ltximg/2769fe54415.svg" alt="\((X_j)_{j \in J}\)" style="height: 1.1138em; vertical-align: -0.3296em; display: inline-block" class="org-latex org-latex-inline" />. the probability measure <img src="/ltximg/3d51ffd83b0.svg" alt="\({\Pr_{(X_j)}}_{j \in J}\)" style="height: 1.3230em; vertical-align: -0.5392em; display: inline-block" class="org-latex org-latex-inline" /> on <img src="/ltximg/9ba1dd4c817.svg" alt="\(\mathbb{R}^J\)" style="height: 0.9228em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is called the _joint distribution_ of <img src="/ltximg/2769fe54415.svg" alt="\((X_j)_{j \in J}\)" style="height: 1.1138em; vertical-align: -0.3296em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
(Achim Klenke, 2020 definition 2.20) <br/>

</div>

