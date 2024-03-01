+++
title = "derivative"
author = ["mahmood"]
date = 2024-03-01T00:00:00+02:00
tags = ["math"]
draft = false
+++

<div class="definition">

let <img src="/ltximg/81295985774.svg" alt="\(U\)" style="height: 0.7697em; vertical-align: -0.0590em; display: inline-block" class="org-latex org-latex-inline" /> be an [open subset](20231005T002415--open-set__math.org) of <img src="/ltximg/f66090f21e8.svg" alt="\(\mathbb{R}\)" style="height: 0.7726em; vertical-align: -0.0619em; display: inline-block" class="org-latex org-latex-inline" />, and let <img src="/ltximg/f019c3c91f8.svg" alt="\(f:U \to \mathbb{R}\)" style="height: 1.0597em; vertical-align: -0.3030em; display: inline-block" class="org-latex org-latex-inline" /> be a [function](20231111T073425--function__math.org). then <img src="/ltximg/23458be1d31.svg" alt="\(f\)" style="height: 1.0597em; vertical-align: -0.3030em; display: inline-block" class="org-latex org-latex-inline" /> is _differentiable_ at <img src="/ltximg/586bcc96b98.svg" alt="\(a \in U\)" style="height: 0.7716em; vertical-align: -0.0609em; display: inline-block" class="org-latex org-latex-inline" /> with _derivative_ <img src="/ltximg/524102c8923.svg" alt="\(f'(a)\)" style="height: 1.1396em; vertical-align: -0.3030em; display: inline-block" class="org-latex org-latex-inline" /> if the [limit](20240102T073414--limit__math.org) <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/e7286798052.svg" alt="\begin{equation}
  f'(a) \defeq \lim_{h \to 0} \frac{1}{h}(f(a+h)-f(a)) \quad \text{exists}
\end{equation}
" style="height: 2.1936em; vertical-align: -0.5392em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

(JOHN H. HUBBARD, BARBARA BURKE HUBBARD, 2015) <br/>

</div>

another derivative notation <img src="/ltximg/68a7cb3df9a.svg" alt="\(f'(x)=\frac{df(x)}{dx}\)" style="height: 1.4499em; vertical-align: -0.3948em; display: inline-block" class="org-latex org-latex-inline" /> <br/>
to denote the <img src="/ltximg/71a37455f85.svg" alt="\(n\)" style="height: 0.5629em; vertical-align: -0.0590em; display: inline-block" class="org-latex org-latex-inline" />th derivative of a function we write <img src="/ltximg/5f2764efb03.svg" alt="\(\frac{d^nf(x)}{dx^n}\)" style="height: 1.4979em; vertical-align: -0.3948em; display: inline-block" class="org-latex org-latex-inline" />, this reads "the <img src="/ltximg/71a37455f85.svg" alt="\(n\)" style="height: 0.5629em; vertical-align: -0.0590em; display: inline-block" class="org-latex org-latex-inline" />th derivative of <img src="/ltximg/a27a5c1d3fe.svg" alt="\(f(x)\)" style="height: 1.0823em; vertical-align: -0.3030em; display: inline-block" class="org-latex org-latex-inline" /> with respect to <img src="/ltximg/dc6958ba4e5.svg" alt="\(x\)" style="height: 0.5639em; vertical-align: -0.0600em; display: inline-block" class="org-latex org-latex-inline" />" <br/>

<div class="definition">

an **alternative definition of the derivative in one dimension** <br/>
let <img src="/ltximg/81295985774.svg" alt="\(U\)" style="height: 0.7697em; vertical-align: -0.0590em; display: inline-block" class="org-latex org-latex-inline" /> be an open subset of <img src="/ltximg/f66090f21e8.svg" alt="\(\mathbb{R}\)" style="height: 0.7726em; vertical-align: -0.0619em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/f019c3c91f8.svg" alt="\(f:U \to \mathbb{R}\)" style="height: 1.0597em; vertical-align: -0.3030em; display: inline-block" class="org-latex org-latex-inline" /> a function. then <img src="/ltximg/23458be1d31.svg" alt="\(f\)" style="height: 1.0597em; vertical-align: -0.3030em; display: inline-block" class="org-latex org-latex-inline" /> is _differentiable_ at <img src="/ltximg/863aaa5b4e8.svg" alt="\(a\)" style="height: 0.5570em; vertical-align: -0.0600em; display: inline-block" class="org-latex org-latex-inline" />, with _derivative_ <img src="/ltximg/5126e12f24c.svg" alt="\(m\)" style="height: 0.5629em; vertical-align: -0.0590em; display: inline-block" class="org-latex org-latex-inline" />, if and only if <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/762bf712640.svg" alt="\begin{equation}
  \lim_{h \to 0} \frac{1}{h}\left((\overbrace{f(a+h)-f(a)}^{\Delta f})-\overbrace{(mh)}^{\text{linear function of} \Delta x}\right)
\end{equation}
" style="height: 3.4302em; vertical-align: -0.5392em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

the letter <img src="/ltximg/ac16e79a587.svg" alt="\(\Delta\)" style="height: 0.7853em; vertical-align: -0.0531em; display: inline-block" class="org-latex org-latex-inline" /> denotes the "change in"; <img src="/ltximg/12bc6d9c3a7.svg" alt="\(\Delta f\)" style="height: 1.0597em; vertical-align: -0.3030em; display: inline-block" class="org-latex org-latex-inline" /> is the change in the function; <img src="/ltximg/4aaf2071f0c.svg" alt="\(\Delta x=h\)" style="height: 0.8167em; vertical-align: -0.0600em; display: inline-block" class="org-latex org-latex-inline" /> is the change in the variable <img src="/ltximg/dc6958ba4e5.svg" alt="\(x\)" style="height: 0.5639em; vertical-align: -0.0600em; display: inline-block" class="org-latex org-latex-inline" />. the function <img src="/ltximg/91d5fd775a3.svg" alt="\(mh\)" style="height: 0.8157em; vertical-align: -0.0590em; display: inline-block" class="org-latex org-latex-inline" /> that multiplies <img src="/ltximg/b3aa9a90473.svg" alt="\(h\)" style="height: 0.8157em; vertical-align: -0.0590em; display: inline-block" class="org-latex org-latex-inline" /> by the derivative <img src="/ltximg/5126e12f24c.svg" alt="\(m\)" style="height: 0.5629em; vertical-align: -0.0590em; display: inline-block" class="org-latex org-latex-inline" /> is thus a [linear function](20231222T080528--linear-map__math.org) of the change in <img src="/ltximg/dc6958ba4e5.svg" alt="\(x\)" style="height: 0.5639em; vertical-align: -0.0600em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
(JOHN H. HUBBARD, BARBARA BURKE HUBBARD, 2015 definition 1.7.5) <br/>

</div>

<div class="definition">

let <img src="/ltximg/1454e4b9a96.svg" alt="\(U \subseteq \mathbb{R}^n\)" style="height: 0.9266em; vertical-align: -0.1188em; display: inline-block" class="org-latex org-latex-inline" /> be an [open subset](20231005T002415--open-set__math.org) and let <img src="/ltximg/d05a03c7c8a.svg" alt="\(\brm{f}: U \to \mathbb{R}^m\)" style="height: 0.8697em; vertical-align: -0.0619em; display: inline-block" class="org-latex org-latex-inline" /> be a mapping; let <img src="/ltximg/26c23b13554.svg" alt="\(\brm{a}\)" style="height: 0.5648em; vertical-align: -0.0629em; display: inline-block" class="org-latex org-latex-inline" /> be a point in <img src="/ltximg/81295985774.svg" alt="\(U\)" style="height: 0.7697em; vertical-align: -0.0590em; display: inline-block" class="org-latex org-latex-inline" />. if there exists a [linear transformation](20231222T080528--linear-map__math.org) <img src="/ltximg/1b145ad4d96.svg" alt="\(L: \mathbb{R}^n \to \mathbb{R}^m\)" style="height: 0.8697em; vertical-align: -0.0619em; display: inline-block" class="org-latex org-latex-inline" /> such that <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/220d9a3a90c.svg" alt="\begin{equation}
  \lim_{\vec{\brm{h}} \to \vec{\brm{0}}} \frac{1}{|\vec{\brm{h}}|}\left(\left(\brm{f}(\brm{a}+\vec{\brm{h}})-\brm{f}(\brm{a})\right)-\left(L(\vec{\brm{h}})\right)\right)=\vec{\brm{0}}
\end{equation}
" style="height: 2.6826em; vertical-align: -0.5392em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

then <img src="/ltximg/89df51ad17c.svg" alt="\(\brm{f}\)" style="height: 0.8000em; vertical-align: -0.0502em; display: inline-block" class="org-latex org-latex-inline" /> is _differentiable_ at <img src="/ltximg/26c23b13554.svg" alt="\(\brm{a}\)" style="height: 0.5648em; vertical-align: -0.0629em; display: inline-block" class="org-latex org-latex-inline" />, and <img src="/ltximg/79e36567062.svg" alt="\(L\)" style="height: 0.7569em; vertical-align: -0.0502em; display: inline-block" class="org-latex org-latex-inline" /> is unique and is the _derivative_ of <img src="/ltximg/89df51ad17c.svg" alt="\(\brm{f}\)" style="height: 0.8000em; vertical-align: -0.0502em; display: inline-block" class="org-latex org-latex-inline" /> at <img src="/ltximg/26c23b13554.svg" alt="\(\brm{a}\)" style="height: 0.5648em; vertical-align: -0.0629em; display: inline-block" class="org-latex org-latex-inline" />, denoted <img src="/ltximg/1ffddb38cd2.svg" alt="\(\matderiv{\brm{f}(\brm{a})}\)" style="height: 1.0686em; vertical-align: -0.2893em; display: inline-block" class="org-latex org-latex-inline" />, and whose [transformation matrix](20240205T184408--transformation-matrix__math.org) is of dimensions <img src="/ltximg/c68031bfb39.svg" alt="\(m \times n\)" style="height: 0.5864em; vertical-align: -0.0590em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
(JOHN H. HUBBARD, BARBARA BURKE HUBBARD, 2015 proposition and definition 1.7.9 (derivative)) <br/>

</div>

<div class="lemma">

if <img src="/ltximg/89df51ad17c.svg" alt="\(\brm{f}\)" style="height: 0.8000em; vertical-align: -0.0502em; display: inline-block" class="org-latex org-latex-inline" /> is differentiable at <img src="/ltximg/26c23b13554.svg" alt="\(\brm{a}\)" style="height: 0.5648em; vertical-align: -0.0629em; display: inline-block" class="org-latex org-latex-inline" />, then all [partial derivative](20230313T231007--partial-derivative__math.org)s of <img src="/ltximg/26c23b13554.svg" alt="\(\brm{a}\)" style="height: 0.5648em; vertical-align: -0.0629em; display: inline-block" class="org-latex org-latex-inline" /> exist, and the [matrix](20231222T075331--matrix__math.org) representing <img src="/ltximg/1ffddb38cd2.svg" alt="\(\matderiv{\brm{f}(\brm{a})}\)" style="height: 1.0686em; vertical-align: -0.2893em; display: inline-block" class="org-latex org-latex-inline" /> is <img src="/ltximg/6e12c585a8c.svg" alt="\([\brm{Jf}(\brm{a})]\)" style="height: 1.0686em; vertical-align: -0.2893em; display: inline-block" class="org-latex org-latex-inline" /> (the [jacobian matrix](20231005T025019--jacobian-matrix__math.org)). <br/>

</div>

<div class="my_example">

since the square of an <img src="/ltximg/96eaecadb3e.svg" alt="\(n \times n\)" style="height: 0.5864em; vertical-align: -0.0590em; display: inline-block" class="org-latex org-latex-inline" /> matrix is another <img src="/ltximg/96eaecadb3e.svg" alt="\(n \times n\)" style="height: 0.5864em; vertical-align: -0.0590em; display: inline-block" class="org-latex org-latex-inline" /> matrix, and such a matrix can be "identified" with <img src="/ltximg/150546bf63e.svg" alt="\(\mathbb{R}^{n^2}\)" style="height: 1.1723em; vertical-align: -0.0619em; display: inline-block" class="org-latex org-latex-inline" />, this could be written as a function <img src="/ltximg/efb6c418592.svg" alt="\(\mathbb{R}^{n^2} \to \mathbb{R}^{n^2}\)" style="height: 1.1723em; vertical-align: -0.0619em; display: inline-block" class="org-latex org-latex-inline" />. this is one time when a linear transformation is easier to deal with than the corresponding matrix. we denote by <img src="/ltximg/83693fdd9fd.svg" alt="\(\Mat(n,n)\)" style="height: 1.0686em; vertical-align: -0.2893em; display: inline-block" class="org-latex org-latex-inline" /> the set of <img src="/ltximg/96eaecadb3e.svg" alt="\(n \times n\)" style="height: 0.5864em; vertical-align: -0.0590em; display: inline-block" class="org-latex org-latex-inline" /> matrices, and consider the squaring map <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/070c17e12ed.svg" alt="\begin{equation}
  S: \Mat(n,n) \to \Mat(n,n) \text{ given by } S(A)=A^2.
\end{equation}
" style="height: 1.5311em; vertical-align: -0.3059em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

in this case we can compute the derivative without computing the jacobian matrix. we shall see that <img src="/ltximg/fad3bc7ee70.svg" alt="\(S\)" style="height: 0.7863em; vertical-align: -0.0649em; display: inline-block" class="org-latex org-latex-inline" /> is differentiable and that its derivative <img src="/ltximg/8a9137f4517.svg" alt="\(\matderiv{S(A)}\)" style="height: 1.0686em; vertical-align: -0.2893em; display: inline-block" class="org-latex org-latex-inline" /> is the linear transformation that maps <img src="/ltximg/79172984bab.svg" alt="\(H\)" style="height: 0.7569em; vertical-align: -0.0502em; display: inline-block" class="org-latex org-latex-inline" /> to <img src="/ltximg/e7d0e142691.svg" alt="\(AH+HA\)" style="height: 0.7844em; vertical-align: -0.0639em; display: inline-block" class="org-latex org-latex-inline" />: <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/c2842d34738.svg" alt="\begin{equation}
  \matderiv{S(A)}H = AH + HA, \text{ also written } \matderiv{S(A)}: H \mapsto AH + HA.
\end{equation}
" style="height: 1.5154em; vertical-align: -0.2903em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

the first thing to realize is that the map <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/072112cd42a.svg" alt="\begin{equation}
  \matderiv{S(A)}: \Mat(n,n) \mapsto \Mat(n,n), \quad H \mapsto AH+HA
\end{equation}
" style="height: 1.5154em; vertical-align: -0.2903em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

is a linear transformation. the asseration is that <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/1727f9baadf.svg" alt="\begin{equation}
  \lim_{H \to [0]} \frac{1}{|H|} (\underbrace{(S(A+H)-S(A))}_{\text{increment to mapping}}-\underbrace{(AH+HA)}_{\substack{\text{linear function of} \\ \text{increment to variable}}}) = [0].
\end{equation}
" style="height: 3.4728em; vertical-align: -0.5392em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

since <img src="/ltximg/61b32c8ea3d.svg" alt="\(S(A)=A^2\)" style="height: 1.1979em; vertical-align: -0.2893em; display: inline-block" class="org-latex org-latex-inline" />, <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/f95b8bcfc03.svg" alt="\begin{align*}
  |S(A+H)-S(A)-(AH+HA)| &amp;amp;= |(A+H)^2-A^2-AH-HA|\\
  &amp;amp;= |A^2+AH+HA+H^2-A^2-AH-HA|\\
  &amp;amp;= |H^2|.
\end{align*}
" style="height: 4.8357em; vertical-align: -0.4020em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

this gives <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/3e4e7dae203.svg" alt="\begin{equation}
  \lim_{H \to [0]} \frac{|H^2|}{|H|} \le \lim_{H \to [0]} \frac{|H||H|}{|H|}=0,
\end{equation}
" style="height: 2.5807em; vertical-align: -0.5392em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

so <img src="/ltximg/e7d0e142691.svg" alt="\(AH+HA\)" style="height: 0.7844em; vertical-align: -0.0639em; display: inline-block" class="org-latex org-latex-inline" /> is indeed the derivative. <br/>
(JOHN H. HUBBARD, BARBARA BURKE HUBBARD, 2015 example 1.7.17) <br/>

</div>


## derivative table {#derivative-table}

| function                                                                                                                                                                     | derivative                                                                                                                                                                                                                                                           | rule name       | rule link |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|-----------|
| c                                                                                                                                                                            | 0                                                                                                                                                                                                                                                                    |                 |           |
| <img src="/ltximg/cf7cfa224b2.svg" alt="\(cx^n\)" style="height: 0.8678em; vertical-align: -0.0600em; display: inline-block" class="org-latex org-latex-inline" />           | <img src="/ltximg/b1ba1cf0509.svg" alt="\(ncx^{n-1}\)" style="height: 0.9686em; vertical-align: -0.0600em; display: inline-block" class="org-latex org-latex-inline" />                                                                                              | power rule      |           |
| <img src="/ltximg/8bddffd0ba9.svg" alt="\(f(x)+g(x)\)" style="height: 1.0823em; vertical-align: -0.3030em; display: inline-block" class="org-latex org-latex-inline" />      | <img src="/ltximg/1d1f12c39d2.svg" alt="\(f'(x)+g'(x)\)" style="height: 1.1396em; vertical-align: -0.3030em; display: inline-block" class="org-latex org-latex-inline" />                                                                                            | sum rule        |           |
| <img src="/ltximg/3c8dd7d2770.svg" alt="\(f(x)-g(x)\)" style="height: 1.0823em; vertical-align: -0.3030em; display: inline-block" class="org-latex org-latex-inline" />      | <img src="/ltximg/ba192a21dad.svg" alt="\(f'(x)-g'(x)\)" style="height: 1.1396em; vertical-align: -0.3030em; display: inline-block" class="org-latex org-latex-inline" />                                                                                            | difference rule |           |
| <img src="/ltximg/56a5ca47f16.svg" alt="\(f(x)\cdot g(x)\)" style="height: 1.0823em; vertical-align: -0.3030em; display: inline-block" class="org-latex org-latex-inline" /> | <img src="/ltximg/5e6e10170f4.svg" alt="\(f(x)g'(x)+f'(x)g(x)\)" style="height: 1.1396em; vertical-align: -0.3030em; display: inline-block" class="org-latex org-latex-inline" />                                                                                    | product rule    |           |
| <img src="/ltximg/80fb73f4104.svg" alt="\(f(x)/g(x)\)" style="height: 1.0823em; vertical-align: -0.3030em; display: inline-block" class="org-latex org-latex-inline" />      | <img src="/ltximg/52c523f8eee.svg" alt="\(\frac{f'(x)g(x)-g'(x)f(x)}{g^2(x)}\)" style="height: 1.7127em; vertical-align: -0.5392em; display: inline-block" class="org-latex org-latex-inline" />                                                                     | quotient rule   |           |
| <img src="/ltximg/d145cd252a6.svg" alt="\(f(g(x))\)" style="height: 1.0823em; vertical-align: -0.3030em; display: inline-block" class="org-latex org-latex-inline" />        | <img src="/ltximg/c2c8197dc1f.svg" alt="\(f'(g(x))g'(x)\)" style="height: 1.1396em; vertical-align: -0.3030em; display: inline-block" class="org-latex org-latex-inline" />                                                                                          | chain rule      |           |
| <img src="/ltximg/124a604fae5.svg" alt="\(e^{cx}\)" style="height: 0.8685em; vertical-align: -0.0600em; display: inline-block" class="org-latex org-latex-inline" />         | <img src="/ltximg/6b5862a1051.svg" alt="\(ce^{cx}\)" style="height: 0.8685em; vertical-align: -0.0600em; display: inline-block" class="org-latex org-latex-inline" />                                                                                                |                 |           |
| <img src="/ltximg/f084067f612.svg" alt="\(a^x\)" style="height: 0.8678em; vertical-align: -0.0600em; display: inline-block" class="org-latex org-latex-inline" />            | <img src="/ltximg/12ff0d70d51.svg" alt="\(a^x\ln a\)" style="height: 0.8678em; vertical-align: -0.0600em; display: inline-block" class="org-latex org-latex-inline" />                                                                                               |                 |           |
| <img src="/ltximg/37fa52b3b72.svg" alt="\(\ln x\)" style="height: 0.8128em; vertical-align: -0.0600em; display: inline-block" class="org-latex org-latex-inline" />          | <img src="/ltximg/c1e37b6db62.svg" alt="\(\frac{1}{x}\)" style="height: 1.2486em; vertical-align: -0.3948em; display: inline-block" class="org-latex org-latex-inline" />                                                                                            |                 |           |
| <img src="/ltximg/131e8943b38.svg" alt="\(\log_a x\)" style="height: 1.1643em; vertical-align: -0.4115em; display: inline-block" class="org-latex org-latex-inline" />       | <img src="/ltximg/7381b72c637.svg" alt="\(\frac{1}{x\ln{a}}\)" style="height: 1.2486em; vertical-align: -0.3948em; display: inline-block" class="org-latex org-latex-inline" />                                                                                      |                 |           |
| <img src="/ltximg/d9f502fb779.svg" alt="\(\sin x\)" style="height: 0.7295em; vertical-align: -0.0649em; display: inline-block" class="org-latex org-latex-inline" />         | <img src="/ltximg/d64100727cc.svg" alt="\(\cos x\)" style="height: 0.5688em; vertical-align: -0.0649em; display: inline-block" class="org-latex org-latex-inline" />                                                                                                 |                 |           |
| <img src="/ltximg/d64100727cc.svg" alt="\(\cos x\)" style="height: 0.5688em; vertical-align: -0.0649em; display: inline-block" class="org-latex org-latex-inline" />         | <img src="/ltximg/be8495887df.svg" alt="\(-\sin x\)" style="height: 0.7295em; vertical-align: -0.0649em; display: inline-block" class="org-latex org-latex-inline" />                                                                                                |                 |           |
| <img src="/ltximg/75628c0d639.svg" alt="\(\tan x\)" style="height: 0.6903em; vertical-align: -0.0609em; display: inline-block" class="org-latex org-latex-inline" />         | <img src="/ltximg/9134b52e1bf.svg" alt="\(\sec^2 x\)" style="height: 0.9735em; vertical-align: -0.0649em; display: inline-block" class="org-latex org-latex-inline" />                                                                                               |                 |           |
| <img src="/ltximg/a97c2e5d3f3.svg" alt="\(\sin^{-1} x\)" style="height: 0.9735em; vertical-align: -0.0649em; display: inline-block" class="org-latex org-latex-inline" />    | <img src="/ltximg/0464bcbf41f.svg" alt="\(\frac{1}{\sqrt{1-x^2}}\)" style="height: 1.4819em; vertical-align: -0.5392em; display: inline-block" class="org-latex org-latex-inline" />                                                                                 |                 |           |
| <img src="/ltximg/cf60463e268.svg" alt="\(\cos^{-1} x\)" style="height: 0.9735em; vertical-align: -0.0649em; display: inline-block" class="org-latex org-latex-inline" />    | <img src="/ltximg/1fa73ded266.svg" alt="\(\frac{-1}{\sqrt{1-x^2}}\)" style="height: 1.4819em; vertical-align: -0.5392em; display: inline-block" class="org-latex org-latex-inline" />                                                                                |                 |           |
| <img src="/ltximg/a7987016d18.svg" alt="\(\tan^{-1} x\)" style="height: 0.9696em; vertical-align: -0.0609em; display: inline-block" class="org-latex org-latex-inline" />    | <img src="/ltximg/a9db4d1674f.svg" alt="\(\frac{1}{1+x^2}\)" style="height: 1.2714em; vertical-align: -0.4177em; display: inline-block" class="org-latex org-latex-inline" />                                                                                        |                 |           |
| <img src="/ltximg/336111576e4.svg" alt="\(\frac{1}{f(x)}\)" style="height: 1.4188em; vertical-align: -0.5392em; display: inline-block" class="org-latex org-latex-inline" /> | <img src="/ltximg/9fe6c42cb58.svg" alt="\(\frac{-f'(x)}{f(x)^2}\)" style="height: 1.7127em; vertical-align: -0.5392em; display: inline-block" class="org-latex org-latex-inline" />                                                                                  | reciprocal Rule |           |
|                                                                                                                                                                              | <img src="/ltximg/06a0bd67b0b.svg" alt="\(\frac{d(\vec{x}^\intercal \vec{a}}{d\vec{x}},\frac{d(\vec{a}^\intercal \vec{x})}{d\vec{x}}=a^\intercal\)" style="height: 1.5371em; vertical-align: -0.4429em; display: inline-block" class="org-latex org-latex-inline" /> |                 |           |


## vector calculus derivative table {#vector-calculus-derivative-table}

<div class="theorem">

let <img src="/ltximg/1454e4b9a96.svg" alt="\(U \subseteq \mathbb{R}^n\)" style="height: 0.9266em; vertical-align: -0.1188em; display: inline-block" class="org-latex org-latex-inline" /> be open. <br/>

1.  if <img src="/ltximg/1a72665b7ef.svg" alt="\(\brm{f}:U \to \mathbb{R}^m\)" style="height: 0.8697em; vertical-align: -0.0619em; display: inline-block" class="org-latex org-latex-inline" /> is a constant function, then <img src="/ltximg/89df51ad17c.svg" alt="\(\brm{f}\)" style="height: 0.8000em; vertical-align: -0.0502em; display: inline-block" class="org-latex org-latex-inline" /> is differentiable, and its derivative is <img src="/ltximg/1d86d24d8ee.svg" alt="\([0]\)" style="height: 1.0470em; vertical-align: -0.2785em; display: inline-block" class="org-latex org-latex-inline" /> (the zero linear transformation <img src="/ltximg/95ae98e0838.svg" alt="\(\brm{R}^n \to \mathbb{R}^m\)" style="height: 0.8707em; vertical-align: -0.0629em; display: inline-block" class="org-latex org-latex-inline" />, represented by the <img src="/ltximg/c68031bfb39.svg" alt="\(m \times n\)" style="height: 0.5864em; vertical-align: -0.0590em; display: inline-block" class="org-latex org-latex-inline" /> matrix filled with 0's) <br/>
2.  if <img src="/ltximg/89b9a41abb8.svg" alt="\(\brm{f}:\mathbb{R}^n \to \mathbb{R}^m\)" style="height: 0.8697em; vertical-align: -0.0619em; display: inline-block" class="org-latex org-latex-inline" /> is linear, then it is differentiable everywhere, and its derivative at all points <img src="/ltximg/26c23b13554.svg" alt="\(\brm{a}\)" style="height: 0.5648em; vertical-align: -0.0629em; display: inline-block" class="org-latex org-latex-inline" /> is <img src="/ltximg/89df51ad17c.svg" alt="\(\brm{f}\)" style="height: 0.8000em; vertical-align: -0.0502em; display: inline-block" class="org-latex org-latex-inline" />, i.e., <img src="/ltximg/4971ded2277.svg" alt="\(\matderiv{\brm{f}(\brm{a})}\vec{v}=\brm{f}(\vec{v})\)" style="height: 1.1470em; vertical-align: -0.2893em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
3.  if <img src="/ltximg/4aabb17c125.svg" alt="\(f_1,\dots,f_m:U \to \mathbb{R}\)" style="height: 1.0597em; vertical-align: -0.3030em; display: inline-block" class="org-latex org-latex-inline" /> are <img src="/ltximg/5126e12f24c.svg" alt="\(m\)" style="height: 0.5629em; vertical-align: -0.0590em; display: inline-block" class="org-latex org-latex-inline" /> scalar-valued functions differentiable at <img src="/ltximg/26c23b13554.svg" alt="\(\brm{a}\)" style="height: 0.5648em; vertical-align: -0.0629em; display: inline-block" class="org-latex org-latex-inline" />, then the vector-valued mapping <img src="/ltximg/3d0b84bf727.svg" alt="\(\brm{f}=\pmqty{f_1\\ \vdots\\ f_m}:U \to \mathbb{R}^m\)" style="height: 3.6264em; vertical-align: -0.5392em; display: inline-block" class="org-latex org-latex-inline" /> is differentiable at <img src="/ltximg/26c23b13554.svg" alt="\(\brm{a}\)" style="height: 0.5648em; vertical-align: -0.0629em; display: inline-block" class="org-latex org-latex-inline" />, with derivative <br/>
    
    
    <div class="equation-container">
    <span class="equation">
    <img src="/ltximg/8cd2a70b8cb.svg" alt="   \begin{equation}
         \matderiv{\brm{f}(\brm{a})}\vec{v}=\bmqty{\matderiv{f_1(\brm{a})}\vec{v}\\ \vdots\\ \matderiv{f_m(\brm{a})}\vec{v}}.
       \end{equation}
    " style="height: 3.7244em; vertical-align: -0.5392em; display: inline-block" class="org-latex org-latex-inline" />
    </span>
    </div>
    
    conversely, if <img src="/ltximg/89df51ad17c.svg" alt="\(\brm{f}\)" style="height: 0.8000em; vertical-align: -0.0502em; display: inline-block" class="org-latex org-latex-inline" /> is differentiable at <img src="/ltximg/26c23b13554.svg" alt="\(\brm{a}\)" style="height: 0.5648em; vertical-align: -0.0629em; display: inline-block" class="org-latex org-latex-inline" />, each <img src="/ltximg/2a4505e1a1a.svg" alt="\(f_i\)" style="height: 1.0597em; vertical-align: -0.3030em; display: inline-block" class="org-latex org-latex-inline" /> is differentiable at <img src="/ltximg/26c23b13554.svg" alt="\(\brm{a}\)" style="height: 0.5648em; vertical-align: -0.0629em; display: inline-block" class="org-latex org-latex-inline" />, and <img src="/ltximg/ac8ae2081b7.svg" alt="\(\matderiv{f_i(\brm{a})}=[D_1f_i(\brm{a}),\dots,D_nf_i(\brm{a})]\)" style="height: 1.0823em; vertical-align: -0.3030em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
4.  if <img src="/ltximg/f99ed1818e7.svg" alt="\(\brm{f,g}:U \to \mathbb{R}^m\)" style="height: 1.1059em; vertical-align: -0.2981em; display: inline-block" class="org-latex org-latex-inline" /> are differentiable at <img src="/ltximg/26c23b13554.svg" alt="\(\brm{a}\)" style="height: 0.5648em; vertical-align: -0.0629em; display: inline-block" class="org-latex org-latex-inline" />, then so is <img src="/ltximg/42de5a69eff.svg" alt="\(\brm{f}+\brm{g}\)" style="height: 1.0480em; vertical-align: -0.2981em; display: inline-block" class="org-latex org-latex-inline" />, and <br/>
    
    
    <div class="equation-container">
    <span class="equation">
    <img src="/ltximg/28f6ed483b9.svg" alt="   \begin{equation}
         \matderiv{(\brm{f}+\brm{g})(\brm{a})}=\matderiv{\brm{f}(\brm{a})}+\matderiv{\brm{g}(\brm{a})}.
       \end{equation}
    " style="height: 1.5233em; vertical-align: -0.2981em; display: inline-block" class="org-latex org-latex-inline" />
    </span>
    </div>
5.  if <img src="/ltximg/0f1e74e5f1e.svg" alt="\(f: U \to \mathbb{R}\)" style="height: 1.0597em; vertical-align: -0.3030em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/ae3e596010f.svg" alt="\(\brm{g}:U \to \mathbb{R}^m\)" style="height: 1.1059em; vertical-align: -0.2981em; display: inline-block" class="org-latex org-latex-inline" /> are differentiable at <img src="/ltximg/26c23b13554.svg" alt="\(\brm{a}\)" style="height: 0.5648em; vertical-align: -0.0629em; display: inline-block" class="org-latex org-latex-inline" />, then so is <img src="/ltximg/1dff385283b.svg" alt="\(f\brm{g}\)" style="height: 1.0597em; vertical-align: -0.3030em; display: inline-block" class="org-latex org-latex-inline" />, and the derivative is given by <br/>
    
    
    <div class="equation-container">
    <span class="equation">
    <img src="/ltximg/4af05b7e28c.svg" alt="   \begin{equation}
         \matderiv{(f\brm{g})(\brm{a})}\vec{v}=\underbrace{f(\brm{a})}_{\mathbb{R}}\underbrace{\matderiv{\brm{g}(\brm{a})}\vec{v}}_{\mathbb{R}^m}+\underbrace{(\matderiv{f(\brm{a})}\vec{v})}_{\mathbb{R}}\underbrace{\brm{g}(\brm{a})}_{\mathbb{R}^m}.
       \end{equation}
    " style="height: 2.6113em; vertical-align: -0.5392em; display: inline-block" class="org-latex org-latex-inline" />
    </span>
    </div>
6.  if <img src="/ltximg/f019c3c91f8.svg" alt="\(f:U \to \mathbb{R}\)" style="height: 1.0597em; vertical-align: -0.3030em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/ae3e596010f.svg" alt="\(\brm{g}:U \to \mathbb{R}^m\)" style="height: 1.1059em; vertical-align: -0.2981em; display: inline-block" class="org-latex org-latex-inline" /> are differentiable at <img src="/ltximg/26c23b13554.svg" alt="\(\brm{a}\)" style="height: 0.5648em; vertical-align: -0.0629em; display: inline-block" class="org-latex org-latex-inline" />, and <img src="/ltximg/2f57c8e3f02.svg" alt="\(f(\brm{a})\neq 0\)" style="height: 1.0823em; vertical-align: -0.3030em; display: inline-block" class="org-latex org-latex-inline" />, then so is <img src="/ltximg/d0ae0bab46b.svg" alt="\(\brm{g}/f\)" style="height: 1.0597em; vertical-align: -0.3030em; display: inline-block" class="org-latex org-latex-inline" />, and the derivative is given by <br/>
    
    
    <div class="equation-container">
    <span class="equation">
    <img src="/ltximg/990ff630484.svg" alt="   \begin{equation}
         \matderiv{\left(\frac{\brm{g}}{f}\right)\big(\brm{a}\big)}\vec{v} = \frac{\matderiv{\brm{g}(\brm{a})}\vec{v}}{f(\brm{a})}-\frac{(\matderiv{f(\brm{a})}\vec{v})(\brm{g}(\brm{a}))}{(f(\brm{a}))^2}.
       \end{equation}
    " style="height: 2.7248em; vertical-align: -0.5392em; display: inline-block" class="org-latex org-latex-inline" />
    </span>
    </div>
7.  if <img src="/ltximg/d1c4c1cca67.svg" alt="\(\brm{f},\brm{g}:U \to \mathbb{R}^m\)" style="height: 1.1059em; vertical-align: -0.2981em; display: inline-block" class="org-latex org-latex-inline" /> are both differentiable at <img src="/ltximg/26c23b13554.svg" alt="\(\brm{a}\)" style="height: 0.5648em; vertical-align: -0.0629em; display: inline-block" class="org-latex org-latex-inline" />, then so is the dot product <img src="/ltximg/e110b708f5f.svg" alt="\(\brm{f} \cdot \brm{g}:U \to \mathbb{R}\)" style="height: 1.0480em; vertical-align: -0.2981em; display: inline-block" class="org-latex org-latex-inline" />, and (as in one dimension) <br/>
    
    
    <div class="equation-container">
    <span class="equation">
    <img src="/ltximg/06ffb7c2d30.svg" alt="   \begin{equation}
         \matderiv{(\brm{f}\cdot \brm{g})(\brm{a})}\vec{v}=\underbrace{\matderiv{\brm{f}(\brm{a})}\vec{v}}_{\mathbb{R}^m} \cdot \underbrace{\brm{g}(\brm{a})}_{\mathbb{R}^m}+\underbrace{\brm{f}(\brm{a})}_{\mathbb{R}^m} \cdot \underbrace{\matderiv{\brm{g}(\brm{a})}\vec{v}}_{\mathbb{R}^m}.
       \end{equation}
    " style="height: 2.6113em; vertical-align: -0.5392em; display: inline-block" class="org-latex org-latex-inline" />
    </span>
    </div>

(JOHN H. HUBBARD, BARBARA BURKE HUBBARD, 2015 theorem 1.8.1) <br/>

</div>

| function | derivative | rule name | rule link |
|----------|------------|-----------|-----------|
|          |            |           |           |

