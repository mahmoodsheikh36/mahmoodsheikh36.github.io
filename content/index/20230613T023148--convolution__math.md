+++
title = "convolution"
author = ["mahmood"]
date = 2024-03-01T00:00:00+02:00
tags = ["math"]
draft = false
+++

<div class="definition" id="def-conv">

the convolution operation is defined as the [integral](20240102T073445--integral__math.org) of the product of two [function](20231111T073425--function__math.org)s <img src="/ltximg/0aebd621cde.svg" alt="\((f,g)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> after one is reflected about the y-axis and shifted: <br/>
<img src="/ltximg/3d46cdb1e73.svg" alt="\[ (f*g)(t) = \int_{-\infty}^{\infty} f(\tau)g(t-\tau) \dif{\tau} \]" style="height: 2.5579em; display: block" class="org-latex org-latex-block" /> <br/>
(Maria Vakalopoulou, Stergios Christodoulidis, Ninon Burgos, Olivier Colliot, Vincent Lepetit. Deep learning: basics and convolutional neural networks (CNN). Olivier Colliot. Machine Learning for Brain Disorders, Springer, In press. hal-03957224, 2023) <br/>

</div>

in essence, the convolution operation shows how one function affects the other <br/>

<div class="definition" id="def-conv-dicrete">

for two functions <img src="/ltximg/a1806501330.svg" alt="\(f:\mathbb{Z} \to \mathbb{C},g:\mathbb{Z} \to \mathbb{C}\)" style="height: 0.9695em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, the discrete convolution of <img src="/ltximg/36fbd7e1276.svg" alt="\(f\)" style="height: 0.9695em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/2631cefd988.svg" alt="\(g\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> is given by: <br/>
<img src="/ltximg/3155053807b.svg" alt="\[ (f*g)[n] = \sum_{m=-\infty}^{\infty} f[m]g[n-m] \]" style="height: 3.1214em; display: block" class="org-latex org-latex-block" /> <br/>
extending to 2 dimensional functions we'd get: <br/>
<img src="/ltximg/7a1baf45605.svg" alt="\[ (f*g)[i,j] = \sum_{m} \sum_{n} f[m,n]g[i-m,j-n] \]" style="height: 2.4994em; display: block" class="org-latex org-latex-block" /> <br/>

</div>

<div class="my_example">

in [machine learning](20230225T233819--machine-learning__cs.org), specifically in [convolutional neural network](20230520T175032--convolutional-neural-network__cs_lispcode_math.org), the convolution operation is used do detect features in an **image**, one of the operands is the image and the second is the **kernel**, see [1](#orgd7d16c9) <br/>


<div id="orgd7d16c9" class="equation-container">
<span class="equation">
<img src="/ltximg/ce8e875d112.svg" alt="\begin{tikzpicture}[mmat/.style={matrix of math nodes,column sep=-\pgflinewidth/2,
    row sep=-\pgflinewidth/2,cells={nodes={draw,inner sep=3pt,thin}},draw=#1,thick,inner sep=0pt},
  mmat/.default=black,
  node distance=0.3em]
  \matrix[mmat](mat1){
    0 &amp;amp; 1 &amp;amp; 1 &amp;amp; 1 &amp;amp; 0 &amp;amp; 0 &amp;amp; 0 \\
    0 &amp;amp; 0 &amp;amp; 1 &amp;amp; 1 &amp;amp; 1 &amp;amp; 0 &amp;amp; 0 \\
    0 &amp;amp; 0 &amp;amp; 0 &amp;amp; 1 &amp;amp; 1 &amp;amp; 1 &amp;amp; 0 \\
    0 &amp;amp; 0 &amp;amp; 0 &amp;amp; 1 &amp;amp; 1 &amp;amp; 0 &amp;amp; 0 \\
    0 &amp;amp; 0 &amp;amp; 1 &amp;amp; 1 &amp;amp; 0 &amp;amp; 0 &amp;amp; 0 \\
    0 &amp;amp; 1 &amp;amp; 1 &amp;amp; 0 &amp;amp; 0 &amp;amp; 0 &amp;amp; 0 \\
    0 &amp;amp; 1 &amp;amp; 0 &amp;amp; 0 &amp;amp; 0 &amp;amp; 0 &amp;amp; 0 \\
  };
  \def\myarray{{1,0,1},{0,1,0},{1,0,1}}
  \foreach \X in {0,1,2}
  {\foreach \Y in {0,1,2}
    {\pgfmathsetmacro{\myentry}{{\myarray}[\Y][\X]}
      \path (mat1-\the\numexpr\Y+1\relax-\the\numexpr\X+4\relax.south east)
      node[anchor=south east,blue,scale=0.3,inner sep=1.2pt]{\(\times\myentry\)};
    }}
  \node[fit=(mat1-1-4)(mat1-3-6),inner sep=0pt,draw,red,thick,name path=fit](f1){};
  \node[right=of mat1] (mul) {\(*\)};
  \matrix[mmat=blue,fill=blue!20,right=of mul,name path=mat2](mat2){
    1 &amp;amp; 0 &amp;amp; 1 \\
    0 &amp;amp; 1 &amp;amp; 0 \\
    1 &amp;amp; 0 &amp;amp; 1 \\ };
  \node[right=of mat2] (eq) {\(=\)};
  \matrix[mmat,right=of eq](mat3){
    1 &amp;amp; 4 &amp;amp; 3 &amp;amp; |[draw=green,thick,fill=green!20,alias=4]|4 &amp;amp; 1\\
    1 &amp;amp; 2 &amp;amp; 4 &amp;amp; 3 &amp;amp; 3 \\
    1 &amp;amp; 2 &amp;amp; 3 &amp;amp; 4 &amp;amp; 1 \\
    1 &amp;amp; 3 &amp;amp; 3 &amp;amp; 1 &amp;amp; 1 \\
    3 &amp;amp; 3 &amp;amp; 1 &amp;amp; 1 &amp;amp; 0 \\
  };
  \foreach \Anchor in {south west,north west,south east,north east}
  {\path[name path=test] (f1.\Anchor) -- (mat2.\Anchor);
    \draw[blue,thick,dotted,name intersections={of=test and fit,total=\t}]
    \ifnum\t&amp;gt;0 (intersection-\t) -- (mat2.\Anchor) \else
      (f1.\Anchor) -- (mat2.\Anchor)\fi;
    \path[name path=test2]  (4.\Anchor) -- (mat2.\Anchor);
    \draw[green,thick,dotted,name intersections={of=test2 and mat2,total=\tt}]
    \ifnum\tt&amp;gt;0 (intersection-1) -- (4.\Anchor) \else
      (mat2.\Anchor) --  (4.\Anchor)\fi;
  }
  \path (mat1.south) node[below] {\(\mathbf{I}\)}
  (mat2|-mat1.south) node[below] {\(\mathbf{K}\)}
  (mat3|-mat1.south) node[below] {\(\mathbf{I}*\mathbf{K}\)};
  \begin{scope}[on background layer]
    \fill[red!20] (f1.north west) rectangle (f1.south east);
  \end{scope}
\end{tikzpicture}
" style="height: 10.0359em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

although the kernel has to be rotated around every axis before we begin sliding it over the image, otherwise we'd be doing cross-correlation instead of convolution <br/>
an example of a flipped kernel: <br/>
<img src="/ltximg/e769f1883ae.svg" alt="\[ \bmqty{a &amp;amp; b &amp;amp; c\\ d &amp;amp; e &amp;amp; f\\ g &amp;amp; h &amp;amp; i} \xrightarrow{\text{vertical+horizontal rotation}} \bmqty{i &amp;amp; h &amp;amp; g\\ f &amp;amp; e &amp;amp; d\\ c &amp;amp; b &amp;amp; a} \]" style="height: 1.4649em; display: block" class="org-latex org-latex-block" /> <br/>

</div>

<div class="dummy">

if you look at fig-conv-1, you may notice the edges essentially get "trimmed off", converting a 7x7 matrix into a 5×5 one. the pixels on the edge are never at the center of the kernel, because there is nothing for the kernel to extend to beyond the edge. but we often would like the size of the output to equal the input. <br/>
to solve this, a _padding_ is introduced to the image, where "fake" pixels are placed around the image to extend its dimensions so that the result of the convolution would grow to equal the size we want. <br/>

</div>

<div class="dummy">

often when applying a convolution, we want an output with a lower size than the input. one way of accomplishing this is by using a _stride_, which is the amount of pixels the kernel **slides** over (skips) in a given dimension. <br/>

</div>

<div class="dummy">

convolution is [commutative](20220923T212910--commutative__math.org) <br/>

</div>

<div class="my_example" id="exa-conv-1">

given an image <img src="/ltximg/23b1b448b12.svg" alt="\(I_{i_r \times i_c}\)" style="height: 1.0130em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> and a kernel <img src="/ltximg/9c0f3388c65.svg" alt="\(K_{k_r \times k_c}\)" style="height: 1.0130em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, assuming a stride of 1 and no padding, the resulting matrix <img src="/ltximg/e8ae171cf24.svg" alt="\(M_{m_r \times m_c}\)" style="height: 1.0130em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> would be of dimensions <img src="/ltximg/bf685898b6d.svg" alt="\((i_r - (k_r - 1)) \times (i_c - (k_c - 1))\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, so <img src="/ltximg/047102e301e.svg" alt="\(m_r=i_r-(k_r-1),m_c=(i_c-(k_c-1))\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> and the operation would be defined as: <br/>
<img src="/ltximg/e2c11bfde63.svg" alt="\[ (I*K)[r,c] = \sum_{n=r}^{r+k_r-1}\sum_{j=c}^{c+k_c-1} I[n,j]K[k_r-n+r,k_c-j+c] \quad 1 \le r \le m_r,1 \le c \le m_c \]" style="height: 3.3943em; display: block" class="org-latex org-latex-block" /> <br/>
or equivalently (since both convolution and multiplication are commutative): <br/>
<img src="/ltximg/f953b9cc59e.svg" alt="\[ (I*K)[r,c] = \sum_{n=0}^{k_r-1} \sum_{j=0}^{k_c-1} I[n+r,j+c]K[k_r-n,k_c-j] \quad 1 \le r \le m_r,1 \le c \le m_c \]" style="height: 3.3943em; display: block" class="org-latex org-latex-block" /> <br/>

</div>

<div class="lemma" id="lem-conv-derivative">

<img src="/ltximg/06b525333f1.svg" alt="\[ \frac{\partial}{\partial x}(f*g) = \frac{\partial f}{\partial x}*g \]" style="height: 2.2121em; display: block" class="org-latex org-latex-block" /> <br/>

</div>

