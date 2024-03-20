+++
title = "derivative"
author = ["mahmood"]
date = 2024-03-01T00:00:00+02:00
tags = ["math"]
draft = false
+++

<div class="definition">

let <img src="/ltximg/425ec271bb3.svg" alt="\(U\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> be an open subset of <img src="/ltximg/5dfdf6eee4c.svg" alt="\(\mathbb{R}\)" style="height: 0.7735em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, and let <img src="/ltximg/6c5ed2b62c5.svg" alt="\(f:U \to \mathbb{R}\)" style="height: 0.9695em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> be a function. then <img src="/ltximg/36fbd7e1276.svg" alt="\(f\)" style="height: 0.9695em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> is _differentiable_ at <img src="/ltximg/06fef2430f1.svg" alt="\(a \in U\)" style="height: 0.8063em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" /> with _derivative_ <img src="/ltximg/46d92df661f.svg" alt="\(f'(a)\)" style="height: 1.0801em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> if the limit <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/a4cdaa499e7.svg" alt="\begin{equation}
  f'(a) \defeq \lim_{h \to 0} \frac{1}{h}(f(a+h)-f(a)) \quad \text{exists}
\end{equation}
" style="height: 2.2142em; vertical-align: -0.5392em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

(john h. hubbard, barbara burke hubbard, 2015) <br/>

</div>

another derivative notation <img src="/ltximg/87df7746f05.svg" alt="\(f'(x)=\frac{df(x)}{dx}\)" style="height: 1.4261em; vertical-align: -0.3871em; display: inline-block" class="org-latex org-latex-inline" /> <br/>
to denote the <img src="/ltximg/b32b0f8a94b.svg" alt="\(n\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />th derivative of a function we write <img src="/ltximg/3b33b545d44.svg" alt="\(\frac{d^nf(x)}{dx^n}\)" style="height: 1.4261em; vertical-align: -0.3871em; display: inline-block" class="org-latex org-latex-inline" />, this reads "the <img src="/ltximg/b32b0f8a94b.svg" alt="\(n\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />th derivative of <img src="/ltximg/2423c6907e2.svg" alt="\(f(x)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> with respect to <img src="/ltximg/264a89f023b.svg" alt="\(x\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />" <br/>

<div class="definition">

an **alternative definition of the derivative in one dimension** <br/>
let <img src="/ltximg/425ec271bb3.svg" alt="\(U\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> be an open subset of <img src="/ltximg/5dfdf6eee4c.svg" alt="\(\mathbb{R}\)" style="height: 0.7735em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/6c5ed2b62c5.svg" alt="\(f:U \to \mathbb{R}\)" style="height: 0.9695em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> a function. then <img src="/ltximg/36fbd7e1276.svg" alt="\(f\)" style="height: 0.9695em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> is _differentiable_ at <img src="/ltximg/942eecb938a.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, with _derivative_ <img src="/ltximg/1c6b9242d2b.svg" alt="\(m\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, if and only if <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/b111773c7f8.svg" alt="\begin{equation}
  \lim_{h \to 0} \frac{1}{h}\left((\overbrace{f(a+h)-f(a)}^{\Delta f})-\overbrace{(mh)}^{\text{linear function of} \Delta x}\right)
\end{equation}
" style="height: 3.9037em; vertical-align: -0.5392em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

the letter <img src="/ltximg/619b9ef96ff.svg" alt="\(\Delta\)" style="height: 0.8000em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> denotes the "change in"; <img src="/ltximg/a8fa8ea4280.svg" alt="\(\Delta f\)" style="height: 0.9906em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> is the change in the function; <img src="/ltximg/d61cbce11a1.svg" alt="\(\Delta x=h\)" style="height: 0.8000em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is the change in the variable <img src="/ltximg/264a89f023b.svg" alt="\(x\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. the function <img src="/ltximg/71aee5effa5.svg" alt="\(mh\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> that multiplies <img src="/ltximg/7c0ac91e792.svg" alt="\(h\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> by the derivative <img src="/ltximg/1c6b9242d2b.svg" alt="\(m\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is thus a linear function of the change in <img src="/ltximg/264a89f023b.svg" alt="\(x\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
(john h. hubbard, barbara burke hubbard, 2015 definition 1.7.5) <br/>

</div>

<div class="definition">

let <img src="/ltximg/28b7b899d72.svg" alt="\(U \subseteq \mathbb{R}^n\)" style="height: 0.9067em; vertical-align: -0.1824em; display: inline-block" class="org-latex org-latex-inline" /> be an open subset and let <img src="/ltximg/ba2765fbfa4.svg" alt="\(\brm{f}: U \to \mathbb{R}^m\)" style="height: 0.7735em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> be a mapping; let <img src="/ltximg/b07d3491618.svg" alt="\(\brm{a}\)" style="height: 0.5224em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> be a point in <img src="/ltximg/425ec271bb3.svg" alt="\(U\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. if there exists a linear transformation <img src="/ltximg/e01fe1fd0cd.svg" alt="\(L: \mathbb{R}^n \to \mathbb{R}^m\)" style="height: 0.7735em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> such that <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/7150e7f3db3.svg" alt="\begin{equation}
  \lim_{\vec{\brm{h}} \to \vec{\brm{0}}} \frac{1}{|\vec{\brm{h}}|}\left(\left(\brm{f}(\brm{a}+\vec{\brm{h}})-\brm{f}(\brm{a})\right)-\left(L(\vec{\brm{h}})\right)\right)=\vec{\brm{0}}
\end{equation}
" style="height: 2.5639em; vertical-align: -0.5392em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

then <img src="/ltximg/a5ead3743e6.svg" alt="\(\brm{f}\)" style="height: 0.7704em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is _differentiable_ at <img src="/ltximg/b07d3491618.svg" alt="\(\brm{a}\)" style="height: 0.5224em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, and <img src="/ltximg/7c012388408.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is unique and is the _derivative_ of <img src="/ltximg/a5ead3743e6.svg" alt="\(\brm{f}\)" style="height: 0.7704em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> at <img src="/ltximg/b07d3491618.svg" alt="\(\brm{a}\)" style="height: 0.5224em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, denoted <img src="/ltximg/2d2b4b7a5f0.svg" alt="\(\matderiv{\brm{f}(\brm{a})}\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, and whose transformation matrix is of dimensions <img src="/ltximg/3a14de9ca2e.svg" alt="\(m \times n\)" style="height: 0.7517em; vertical-align: -0.1309em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
(john h. hubbard, barbara burke hubbard, 2015 proposition and definition 1.7.9 (derivative)) <br/>

</div>

<div class="lemma">

if <img src="/ltximg/a5ead3743e6.svg" alt="\(\brm{f}\)" style="height: 0.7704em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is differentiable at <img src="/ltximg/b07d3491618.svg" alt="\(\brm{a}\)" style="height: 0.5224em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, then all partial derivatives of <img src="/ltximg/b07d3491618.svg" alt="\(\brm{a}\)" style="height: 0.5224em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> exist, and the matrix representing <img src="/ltximg/2d2b4b7a5f0.svg" alt="\(\matderiv{\brm{f}(\brm{a})}\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> is <img src="/ltximg/0a5c72c0a67.svg" alt="\([\brm{Jf}(\brm{a})]\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> (the jacobian matrix). <br/>

</div>

<div class="my_example">

since the square of an <img src="/ltximg/380de92f946.svg" alt="\(n \times n\)" style="height: 0.7517em; vertical-align: -0.1309em; display: inline-block" class="org-latex org-latex-inline" /> matrix is another <img src="/ltximg/380de92f946.svg" alt="\(n \times n\)" style="height: 0.7517em; vertical-align: -0.1309em; display: inline-block" class="org-latex org-latex-inline" /> matrix, and such a matrix can be "identified" with <img src="/ltximg/afa31af43d0.svg" alt="\(\mathbb{R}^{n^2}\)" style="height: 1.0583em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, this could be written as a function <img src="/ltximg/85f63dd32e1.svg" alt="\(\mathbb{R}^{n^2} \to \mathbb{R}^{n^2}\)" style="height: 1.0583em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. this is one time when a linear transformation is easier to deal with than the corresponding matrix. we denote by <img src="/ltximg/89bb8202156.svg" alt="\(\Mat(n,n)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> the set of <img src="/ltximg/380de92f946.svg" alt="\(n \times n\)" style="height: 0.7517em; vertical-align: -0.1309em; display: inline-block" class="org-latex org-latex-inline" /> matrices, and consider the squaring map <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/9da8965df8f.svg" alt="\begin{equation}
  S: \Mat(n,n) \to \Mat(n,n) \text{ given by } S(A)=A^2.
\end{equation}
" style="height: 1.5194em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

in this case we can compute the derivative without computing the jacobian matrix. we shall see that <img src="/ltximg/9fc0a83c91b.svg" alt="\(S\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is differentiable and that its derivative <img src="/ltximg/756a22f10e8.svg" alt="\(\matderiv{S(A)}\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> is the linear transformation that maps <img src="/ltximg/ec59f1b1fee.svg" alt="\(H\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> to <img src="/ltximg/cfa6cbd168b.svg" alt="\(AH+HA\)" style="height: 0.8494em; vertical-align: -0.1305em; display: inline-block" class="org-latex org-latex-inline" />: <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/562c3441bfc.svg" alt="\begin{equation}
  \matderiv{S(A)}H = AH + HA, \text{ also written } \matderiv{S(A)}: H \mapsto AH + HA.
\end{equation}
" style="height: 1.5194em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

the first thing to realize is that the map <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/549d621431c.svg" alt="\begin{equation}
  \matderiv{S(A)}: \Mat(n,n) \mapsto \Mat(n,n), \quad H \mapsto AH+HA
\end{equation}
" style="height: 1.5194em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

is a linear transformation. the asseration is that <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/8a6257a07f0.svg" alt="\begin{equation}
  \lim_{H \to [0]} \frac{1}{|H|} (\underbrace{(S(A+H)-S(A))}_{\text{increment to mapping}}-\underbrace{(AH+HA)}_{\substack{\text{linear function of} \\ \text{increment to variable}}}) = [0].
\end{equation}
" style="height: 3.6991em; vertical-align: -0.5392em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

since <img src="/ltximg/2ec65ead1e5.svg" alt="\(S(A)=A^2\)" style="height: 1.1411em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/f454c72c64d.svg" alt="\begin{align*}
  |S(A+H)-S(A)-(AH+HA)| &amp;amp;= |(A+H)^2-A^2-AH-HA|\\
  &amp;amp;= |A^2+AH+HA+H^2-A^2-AH-HA|\\
  &amp;amp;= |H^2|.
\end{align*}
" style="height: 4.8102em; vertical-align: -0.4020em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

this gives <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/951e7da3330.svg" alt="\begin{equation}
  \lim_{H \to [0]} \frac{|H^2|}{|H|} \le \lim_{H \to [0]} \frac{|H||H|}{|H|}=0,
\end{equation}
" style="height: 2.6044em; vertical-align: -0.5392em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

so <img src="/ltximg/cfa6cbd168b.svg" alt="\(AH+HA\)" style="height: 0.8494em; vertical-align: -0.1305em; display: inline-block" class="org-latex org-latex-inline" /> is indeed the derivative. <br/>
(john h. hubbard, barbara burke hubbard, 2015 example 1.7.17) <br/>

</div>


## derivative table {#derivative-table}

| function                                                                                                                                                                     | derivative                                                                                                                                                                                                                                                           | rule name       | rule link |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|-----------|
| c                                                                                                                                                                            | 0                                                                                                                                                                                                                                                                    |                 |           |
| <img src="/ltximg/10b1b36f8cc.svg" alt="\(cx^n\)" style="height: 0.7494em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />           | <img src="/ltximg/3f702ba2457.svg" alt="\(ncx^{n-1}\)" style="height: 0.8961em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />                                                                                              | power rule      |           |
| <img src="/ltximg/4a86d2cbf90.svg" alt="\(f(x)+g(x)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />      | <img src="/ltximg/095f84e1a2b.svg" alt="\(f'(x)+g'(x)\)" style="height: 1.0801em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />                                                                                            | sum rule        |           |
| <img src="/ltximg/5291baf015f.svg" alt="\(f(x)-g(x)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />      | <img src="/ltximg/29ba1a1244c.svg" alt="\(f'(x)-g'(x)\)" style="height: 1.0801em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />                                                                                            | difference rule |           |
| <img src="/ltximg/3a23d86f07c.svg" alt="\(f(x)\cdot g(x)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> | <img src="/ltximg/7afc76b56a7.svg" alt="\(f(x)g'(x)+f'(x)g(x)\)" style="height: 1.0801em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />                                                                                    | product rule    |           |
| <img src="/ltximg/9d33950f9a6.svg" alt="\(f(x)/g(x)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />      | <img src="/ltximg/7cfaf0005b8.svg" alt="\(\frac{f'(x)g(x)-g'(x)f(x)}{g^2(x)}\)" style="height: 1.6511em; vertical-align: -0.5392em; display: inline-block" class="org-latex org-latex-inline" />                                                                     | quotient rule   |           |
| <img src="/ltximg/4251f88109c.svg" alt="\(f(g(x))\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />        | <img src="/ltximg/4cdb0f28009.svg" alt="\(f'(g(x))g'(x)\)" style="height: 1.0801em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />                                                                                          | chain rule      |           |
| <img src="/ltximg/eb34d757e7d.svg" alt="\(e^{cx}\)" style="height: 0.7494em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />         | <img src="/ltximg/b568419acb2.svg" alt="\(ce^{cx}\)" style="height: 0.7494em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />                                                                                                |                 |           |
| <img src="/ltximg/a7bde9a2819.svg" alt="\(a^x\)" style="height: 0.7494em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />            | <img src="/ltximg/036c83448d5.svg" alt="\(a^x\ln a\)" style="height: 0.7735em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />                                                                                               |                 |           |
| <img src="/ltximg/7ce3d782911.svg" alt="\(\ln x\)" style="height: 0.7735em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />          | <img src="/ltximg/c363cbeed4b.svg" alt="\(\frac{1}{x}\)" style="height: 1.2642em; vertical-align: -0.3871em; display: inline-block" class="org-latex org-latex-inline" />                                                                                            |                 |           |
| <img src="/ltximg/10016e356be.svg" alt="\(\log_a x\)" style="height: 1.0130em; vertical-align: -0.2887em; display: inline-block" class="org-latex org-latex-inline" />       | <img src="/ltximg/a0183a7a41c.svg" alt="\(\frac{1}{x\ln{a}}\)" style="height: 1.2642em; vertical-align: -0.3871em; display: inline-block" class="org-latex org-latex-inline" />                                                                                      |                 |           |
| <img src="/ltximg/123611a84b0.svg" alt="\(\sin x\)" style="height: 0.7155em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />         | <img src="/ltximg/973ab08f12d.svg" alt="\(\cos x\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />                                                                                                 |                 |           |
| <img src="/ltximg/973ab08f12d.svg" alt="\(\cos x\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />         | <img src="/ltximg/8c0e183c393.svg" alt="\(-\sin x\)" style="height: 0.7972em; vertical-align: -0.1309em; display: inline-block" class="org-latex org-latex-inline" />                                                                                                |                 |           |
| <img src="/ltximg/12e82b50ccf.svg" alt="\(\tan x\)" style="height: 0.7155em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />         | <img src="/ltximg/7298087fcc5.svg" alt="\(\sec^2 x\)" style="height: 0.8961em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />                                                                                               |                 |           |
| <img src="/ltximg/de2f239b75c.svg" alt="\(\sin^{-1} x\)" style="height: 0.9153em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />    | <img src="/ltximg/5218380b5e0.svg" alt="\(\frac{1}{\sqrt{1-x^2}}\)" style="height: 1.4653em; vertical-align: -0.5392em; display: inline-block" class="org-latex org-latex-inline" />                                                                                 |                 |           |
| <img src="/ltximg/78e846c123f.svg" alt="\(\cos^{-1} x\)" style="height: 0.8961em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />    | <img src="/ltximg/7108ec9eacf.svg" alt="\(\frac{-1}{\sqrt{1-x^2}}\)" style="height: 1.4653em; vertical-align: -0.5392em; display: inline-block" class="org-latex org-latex-inline" />                                                                                |                 |           |
| <img src="/ltximg/cfb8d45e04d.svg" alt="\(\tan^{-1} x\)" style="height: 0.9153em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />    | <img src="/ltximg/310488a9926.svg" alt="\(\frac{1}{1+x^2}\)" style="height: 1.3452em; vertical-align: -0.4681em; display: inline-block" class="org-latex org-latex-inline" />                                                                                        |                 |           |
| <img src="/ltximg/d2f460c5bdc.svg" alt="\(\frac{1}{f(x)}\)" style="height: 1.4357em; vertical-align: -0.5392em; display: inline-block" class="org-latex org-latex-inline" /> | <img src="/ltximg/7c40b42a9f1.svg" alt="\(\frac{-f'(x)}{f(x)^2}\)" style="height: 1.6511em; vertical-align: -0.5392em; display: inline-block" class="org-latex org-latex-inline" />                                                                                  | reciprocal Rule |           |
|                                                                                                                                                                              | <img src="/ltximg/96859acf3d5.svg" alt="\(\frac{d(\vec{x}^\intercal \vec{a}}{d\vec{x}},\frac{d(\vec{a}^\intercal \vec{x})}{d\vec{x}}=a^\intercal\)" style="height: 1.4261em; vertical-align: -0.3871em; display: inline-block" class="org-latex org-latex-inline" /> |                 |           |


## vector calculus derivative table {#vector-calculus-derivative-table}

<div class="theorem">

let <img src="/ltximg/28b7b899d72.svg" alt="\(U \subseteq \mathbb{R}^n\)" style="height: 0.9067em; vertical-align: -0.1824em; display: inline-block" class="org-latex org-latex-inline" /> be open. <br/>

1.  if <img src="/ltximg/59b8b256499.svg" alt="\(\brm{f}:U \to \mathbb{R}^m\)" style="height: 0.7735em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is a constant function, then <img src="/ltximg/a5ead3743e6.svg" alt="\(\brm{f}\)" style="height: 0.7704em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is differentiable, and its derivative is <img src="/ltximg/be0ae6c538a.svg" alt="\([0]\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> (the zero linear transformation <img src="/ltximg/4af48657e82.svg" alt="\(\brm{R}^n \to \mathbb{R}^m\)" style="height: 0.8235em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, represented by the <img src="/ltximg/3a14de9ca2e.svg" alt="\(m \times n\)" style="height: 0.7517em; vertical-align: -0.1309em; display: inline-block" class="org-latex org-latex-inline" /> matrix filled with 0's) <br/>
2.  if <img src="/ltximg/2a7f7af6d97.svg" alt="\(\brm{f}:\mathbb{R}^n \to \mathbb{R}^m\)" style="height: 0.7735em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is linear, then it is differentiable everywhere, and its derivative at all points <img src="/ltximg/b07d3491618.svg" alt="\(\brm{a}\)" style="height: 0.5224em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is <img src="/ltximg/a5ead3743e6.svg" alt="\(\brm{f}\)" style="height: 0.7704em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, i.e., <img src="/ltximg/4981d4eab95.svg" alt="\(\matderiv{\brm{f}(\brm{a})}\vec{v}=\brm{f}(\vec{v})\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
3.  if <img src="/ltximg/8359d5b7b0a.svg" alt="\(f_1,\dots,f_m:U \to \mathbb{R}\)" style="height: 0.9695em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> are <img src="/ltximg/1c6b9242d2b.svg" alt="\(m\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> scalar-valued functions differentiable at <img src="/ltximg/b07d3491618.svg" alt="\(\brm{a}\)" style="height: 0.5224em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, then the vector-valued mapping <img src="/ltximg/126999cfd4a.svg" alt="\(\brm{f}=\pmqty{f_1\\ \vdots\\ f_m}:U \to \mathbb{R}^m\)" style="height: 4.2693em; vertical-align: -0.5392em; display: inline-block" class="org-latex org-latex-inline" /> is differentiable at <img src="/ltximg/b07d3491618.svg" alt="\(\brm{a}\)" style="height: 0.5224em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, with derivative <br/>
    
    
    <div class="equation-container">
    <span class="equation">
    <img src="/ltximg/64aa131977b.svg" alt="   \begin{equation}
         \matderiv{\brm{f}(\brm{a})}\vec{v}=\bmqty{\matderiv{f_1(\brm{a})}\vec{v}\\ \vdots\\ \matderiv{f_m(\brm{a})}\vec{v}}.
       \end{equation}
    " style="height: 4.3673em; vertical-align: -0.5392em; display: inline-block" class="org-latex org-latex-inline" />
    </span>
    </div>
    
    conversely, if <img src="/ltximg/a5ead3743e6.svg" alt="\(\brm{f}\)" style="height: 0.7704em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is differentiable at <img src="/ltximg/b07d3491618.svg" alt="\(\brm{a}\)" style="height: 0.5224em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, each <img src="/ltximg/a1175610007.svg" alt="\(f_i\)" style="height: 0.9695em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> is differentiable at <img src="/ltximg/b07d3491618.svg" alt="\(\brm{a}\)" style="height: 0.5224em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, and <img src="/ltximg/c644f661635.svg" alt="\(\matderiv{f_i(\brm{a})}=[D_1f_i(\brm{a}),\dots,D_nf_i(\brm{a})]\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
4.  if <img src="/ltximg/862a4e0fe88.svg" alt="\(\brm{f,g}:U \to \mathbb{R}^m\)" style="height: 0.9640em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> are differentiable at <img src="/ltximg/b07d3491618.svg" alt="\(\brm{a}\)" style="height: 0.5224em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, then so is <img src="/ltximg/296e6a72b4a.svg" alt="\(\brm{f}+\brm{g}\)" style="height: 0.9609em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, and <br/>
    
    
    <div class="equation-container">
    <span class="equation">
    <img src="/ltximg/f179bc5e860.svg" alt="   \begin{equation}
         \matderiv{(\brm{f}+\brm{g})(\brm{a})}=\matderiv{\brm{f}(\brm{a})}+\matderiv{\brm{g}(\brm{a})}.
       \end{equation}
    " style="height: 1.5194em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />
    </span>
    </div>
5.  if <img src="/ltximg/e7ec4ec3d4f.svg" alt="\(f: U \to \mathbb{R}\)" style="height: 0.9695em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/a23c7efccb4.svg" alt="\(\brm{g}:U \to \mathbb{R}^m\)" style="height: 0.9640em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> are differentiable at <img src="/ltximg/b07d3491618.svg" alt="\(\brm{a}\)" style="height: 0.5224em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, then so is <img src="/ltximg/9254fec4e88.svg" alt="\(f\brm{g}\)" style="height: 0.9695em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, and the derivative is given by <br/>
    
    
    <div class="equation-container">
    <span class="equation">
    <img src="/ltximg/871adad77aa.svg" alt="   \begin{equation}
         \matderiv{(f\brm{g})(\brm{a})}\vec{v}=\underbrace{f(\brm{a})}_{\mathbb{R}}\underbrace{\matderiv{\brm{g}(\brm{a})}\vec{v}}_{\mathbb{R}^m}+\underbrace{(\matderiv{f(\brm{a})}\vec{v})}_{\mathbb{R}}\underbrace{\brm{g}(\brm{a})}_{\mathbb{R}^m}.
       \end{equation}
    " style="height: 2.8772em; vertical-align: -0.5392em; display: inline-block" class="org-latex org-latex-inline" />
    </span>
    </div>
6.  if <img src="/ltximg/6c5ed2b62c5.svg" alt="\(f:U \to \mathbb{R}\)" style="height: 0.9695em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/a23c7efccb4.svg" alt="\(\brm{g}:U \to \mathbb{R}^m\)" style="height: 0.9640em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> are differentiable at <img src="/ltximg/b07d3491618.svg" alt="\(\brm{a}\)" style="height: 0.5224em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, and <img src="/ltximg/146fdb0064e.svg" alt="\(f(\brm{a})\neq 0\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, then so is <img src="/ltximg/a836343514d.svg" alt="\(\brm{g}/f\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, and the derivative is given by <br/>
    
    
    <div class="equation-container">
    <span class="equation">
    <img src="/ltximg/1b366c38dd4.svg" alt="   \begin{equation}
         \matderiv{\left(\frac{\brm{g}}{f}\right)\big(\brm{a}\big)}\vec{v} = \frac{\matderiv{\brm{g}(\brm{a})}\vec{v}}{f(\brm{a})}-\frac{(\matderiv{f(\brm{a})}\vec{v})(\brm{g}(\brm{a}))}{(f(\brm{a}))^2}.
       \end{equation}
    " style="height: 2.5484em; vertical-align: -0.5392em; display: inline-block" class="org-latex org-latex-inline" />
    </span>
    </div>
7.  if <img src="/ltximg/64fea507b46.svg" alt="\(\brm{f},\brm{g}:U \to \mathbb{R}^m\)" style="height: 0.9640em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> are both differentiable at <img src="/ltximg/b07d3491618.svg" alt="\(\brm{a}\)" style="height: 0.5224em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, then so is the dot product <img src="/ltximg/36615f8c9e1.svg" alt="\(\brm{f} \cdot \brm{g}:U \to \mathbb{R}\)" style="height: 0.9640em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, and (as in one dimension) <br/>
    
    
    <div class="equation-container">
    <span class="equation">
    <img src="/ltximg/289d11f92d2.svg" alt="   \begin{equation}
         \matderiv{(\brm{f}\cdot \brm{g})(\brm{a})}\vec{v}=\underbrace{\matderiv{\brm{f}(\brm{a})}\vec{v}}_{\mathbb{R}^m} \cdot \underbrace{\brm{g}(\brm{a})}_{\mathbb{R}^m}+\underbrace{\brm{f}(\brm{a})}_{\mathbb{R}^m} \cdot \underbrace{\matderiv{\brm{g}(\brm{a})}\vec{v}}_{\mathbb{R}^m}.
       \end{equation}
    " style="height: 2.8772em; vertical-align: -0.5392em; display: inline-block" class="org-latex org-latex-inline" />
    </span>
    </div>

(john h. hubbard, barbara burke hubbard, 2015 theorem 1.8.1) <br/>

</div>

| function | derivative | rule name | rule link |
|----------|------------|-----------|-----------|
|          |            |           |           |

