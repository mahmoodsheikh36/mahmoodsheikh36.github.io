+++
title = "linearly mapping an interval onto another"
author = ["mahmood"]
description = "inferring a transformation matrix for linear interpolation"
date = 2024-03-03T00:00:00+02:00
tags = ["math"]
draft = false
+++

basically the idea is that, given an [real](20240205T193015--real-number__math.org) interval <img src="/ltximg/e612cc22e4c.svg" alt="\([a,b]\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> and the number <img src="/ltximg/264a89f023b.svg" alt="\(x\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> such that <img src="/ltximg/6b2d72f958c.svg" alt="\(a \le x \le b\)" style="height: 0.9122em; vertical-align: -0.1824em; display: inline-block" class="org-latex org-latex-inline" /> and another interval <img src="/ltximg/700f2ff4f83.svg" alt="\([c,d]\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, we wanna find the number <img src="/ltximg/91ee351bf7b.svg" alt="\(x'\)" style="height: 0.8351em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> such that <img src="/ltximg/57b4a1a7fa0.svg" alt="\(\frac{x'-c}{d-c}=\frac{x-a}{b-a}\)" style="height: 1.4718em; vertical-align: -0.4688em; display: inline-block" class="org-latex org-latex-inline" /> <br/>
we need to isolate <img src="/ltximg/91ee351bf7b.svg" alt="\(x'\)" style="height: 0.8351em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />: <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/3d15940f3fe.svg" alt="\begin{gather*}
  x'b-x'a-cb+ca=xd-xc-ad+ac\\
  x'b-x'a-cb+\cancel{ca}=xd-xc-ad+\cancel{ac}\\
  x'b-x'a-cb=xd-xc-ad\\
  x'b-x'a=xd-xc-ad+cb\\
  x'(b-a)=xd-xc-ad+cb\\
  \boxed{x'=\frac{xd-xc-ad+cb}{b-a}}
\end{gather*}
" style="height: 10.6630em; vertical-align: -0.5392em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>


## extending to higher dimensions {#extending-to-higher-dimensions}

assume a [vector space](20231222T081227--vector-space__math.org) <img src="/ltximg/7c92e8ae98a.svg" alt="\(V\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> with a [dimension](20240102T081921--dimension__math_math.org) of <img src="/ltximg/b32b0f8a94b.svg" alt="\(n\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, given the 2 sets of real intervals <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/45bc6653476.svg" alt="\begin{align*}
  S&amp;amp;=\{[s_{1a},s_{1b}],[s_{2a,2b}],\dots,[s_{na},s_{nb}]\} &amp;amp;\text{source intervals}\\
  D&amp;amp;=\{[d_{1a},d_{1b}],[d_{2a,2b}],\dots,[d_{na},d_{nb}]\} &amp;amp;\text{destination intervals}
\end{align*}
" style="height: 3.0972em; vertical-align: -0.4020em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

and a [vector](20231222T075237--vector__math.org) <img src="/ltximg/91a917c23d0.svg" alt="\(\brm{x} \in V\)" style="height: 0.8063em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />: <br/>
<img src="/ltximg/9eb71c31e3f.svg" alt="\[ \brm{x} = \pmqty{x_1\\ x_2\\ \vdots\\ x_n} \]" style="height: 5.5433em; display: block" class="org-latex org-latex-block" /> <br/>
where <img src="/ltximg/677254fdc1d.svg" alt="\(x_j\)" style="height: 0.8007em; vertical-align: -0.3296em; display: inline-block" class="org-latex org-latex-inline" /> for all <img src="/ltximg/ce66d839722.svg" alt="\(1 \le j \le n\)" style="height: 0.9353em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> is bound in the interval <img src="/ltximg/4e338833ed3.svg" alt="\([s_{ja},s_{jb}]\)" style="height: 1.1138em; vertical-align: -0.3296em; display: inline-block" class="org-latex org-latex-inline" />, i.e. <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/3e9e37a71ed.svg" alt="\begin{gather*}
  s_{1a} \le x_1 \le s_{1b}\\
  s_{2a} \le x_2 \le s_{2b}\\
  \vdots\\
  s_{na} \le x_n \le s_{nb}
\end{gather*}
" style="height: 6.7781em; vertical-align: -0.4020em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

we wanna find the vector <img src="/ltximg/a1b6bad21c1.svg" alt="\(\brm{v}\)" style="height: 0.5224em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />: <br/>
<img src="/ltximg/b8b789f709b.svg" alt="\[ \brm{v} = \pmqty{v_1\\ v_2\\ \vdots\\ v_n} \]" style="height: 5.5433em; display: block" class="org-latex org-latex-block" /> <br/>
such that <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/36beff87de7.svg" alt="\begin{align*}
  v_1 &amp;amp;= \frac{x_1d_{1b}-x_1d_{1a}-s_{1a}d_{1b}+d_{1a}s_{1b}}{s_{1b}-s_{1a}}\\
  v_2 &amp;amp;= \frac{x_2d_{2b}-x_2d_{2a}-s_{2a}d_{2b}+d_{2a}s_{2b}}{s_{2b}-s_{2a}}\\
  &amp;amp;\hspace{1.5 mm} \vdots\\
  v_n &amp;amp;= \frac{x_nd_{nb}-x_nd_{na}-s_{na}d_{nb}+d_{na}s_{nb}}{s_{nb}-s_{na}}
\end{align*}
" style="height: 9.6795em; vertical-align: -0.5392em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

so we write the [linear transformation](20231222T080528--linear-map__math.org) (might not be necessarily linear but [affine](20221229T184844--affine-transformation__math.org)) <br/>
<img src="/ltximg/ff96b0e2841.svg" alt="\[ L\left(\pmqty{x_1\\ x_2\\ \vdots\\ x_n}\right) = \pmqty{
  \frac{x_1d_{1b}-x_1d_{1a}-s_{1a}d_{1b}+d_{1a}s_{1b}}{s_{1b}-s_{1a}}\\
  \frac{x_2d_{2b}-x_2d_{2a}-s_{2a}d_{2b}+d_{2a}s_{2b}}{s_{2b}-s_{2a}}\\
  \hspace{1.5 mm} \vdots\\
  \frac{x_nd_{nb}-x_nd_{na}-s_{na}d_{nb}+d_{na}s_{nb}}{s_{nb}-s_{na}}} \]" style="height: 6.0764em; display: block" class="org-latex org-latex-block" /> <br/>
obviously this function doesnt preserve the origin as <img src="/ltximg/d7031ab1bfa.svg" alt="\(L(\vec{0})\neq \vec{0}\)" style="height: 1.2387em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, so its an affine transformation, we separate the intercept so we can drop it and add it later: <br/>
<img src="/ltximg/e7a77d4d460.svg" alt="\[ L\left(\pmqty{x_1\\ x_2\\ \vdots\\ x_n}\right) = \pmqty{
  \frac{x_1d_{1b}-x_1d_{1a}}{s_{1b}-s_{1a}}\\
  \frac{x_2d_{2b}-x_2d_{2a}}{s_{2b}-s_{2a}}\\
  \hspace{1.5 mm} \vdots\\
  \frac{x_nd_{nb}-x_nd_{na}}{s_{nb}-s_{na}}} +
  \pmqty{\frac{-s_{1a}d_{1b}+d_{1a}s_{1b}}{s_{1b}-s_{1a}}\\
  \frac{-s_{2a}d_{2b}+d_{2a}s_{2b}}{s_{2b}-s_{2a}}\\
  \hspace{1.5 mm} \vdots\\
  \frac{-s_{na}d_{nb}+d_{na}s_{nb}}{s_{nb}-s_{na}}} \]" style="height: 6.0764em; display: block" class="org-latex org-latex-block" /> <br/>
we drop the [intercept](20230608T210313--intercept__.org) and find the [transformation matrix](20230604T202340--affine-transformation-matrix__.org) of the function without it, which is a [square matrix](20240205T193136--square-matrix__math.org) of size <img src="/ltximg/380de92f946.svg" alt="\(n \times n\)" style="height: 0.7517em; vertical-align: -0.1309em; display: inline-block" class="org-latex org-latex-inline" /> <br/>
<img src="/ltximg/bbe35acc8ee.svg" alt="\[ \pmqty{
\frac{d_{1b}-d_{1a}}{s_{1b}-s_{1a}} &amp;amp; 0 &amp;amp; 0 &amp;amp; \cdots &amp;amp; 0\\
0 &amp;amp; \frac{d_{2b}-d_{2a}}{s_{2b}-s_{2a}} &amp;amp; 0 &amp;amp; \ddots &amp;amp; 0\\
0 &amp;amp; 0 &amp;amp; \ddots &amp;amp; \ddots &amp;amp; \vdots\\
\vdots &amp;amp; \ddots &amp;amp; \ddots &amp;amp; \ddots &amp;amp; 0\\
0 &amp;amp; 0 &amp;amp; \cdots &amp;amp; 0 &amp;amp; \frac{d_{nb}-d_{na}}{s_{nb}-s_{na}}\\
} \]" style="height: 8.4284em; display: block" class="org-latex org-latex-block" /> <br/>

<div class="note">

im taking it for granted that the <img src="/ltximg/7c012388408.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> without the intercept is linear, in reality we need to check if the properties of a linear function are preserved in <img src="/ltximg/7c012388408.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> <br/>

</div>

then we add the intercept with [homogeneous coordinates](20221229T010338--homogeneous-coordinates__math.org) to get the final matrix, which is a square matrix of size <img src="/ltximg/f413994004a.svg" alt="\((n+1) \times (n+1)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> <br/>
<img src="/ltximg/4445e7d550b.svg" alt="\[ \pmqty{
\frac{d_{1b}-d_{1a}}{s_{1b}-s_{1a}} &amp;amp; 0 &amp;amp; \cdots &amp;amp; 0 &amp;amp; \frac{-s_{1a}d_{1b}+d_{1a}s_{1b}}{s_{1b}-s_{1a}}\\
0 &amp;amp; \frac{d_{2b}-d_{2a}}{s_{2b}-s_{2a}} &amp;amp; \cdots &amp;amp; 0 &amp;amp; \frac{-s_{2a}d_{2b}+d_{2a}s_{2b}}{s_{2b}-s_{2a}}\\
\vdots &amp;amp; \vdots &amp;amp; \ddots &amp;amp; \vdots &amp;amp; \vdots\\
0 &amp;amp; 0 &amp;amp; \cdots &amp;amp; \frac{d_{nb}-d_{na}}{s_{nb}-s_{na}} &amp;amp; \frac{-s_{na}d_{nb}+d_{na}s_{nb}}{s_{nb}-s_{na}}\\
0 &amp;amp; 0 &amp;amp; \cdots &amp;amp; 0 &amp;amp; 1\\
} \]" style="height: 7.2524em; display: block" class="org-latex org-latex-block" /> <br/>
so to conclude, the formula <br/>
<img src="/ltximg/70e76610238.svg" alt="\[ \pmqty{v_1\\ v_2\\ \vdots\\ v_n\\ 1} = \pmqty{
\frac{d_{1b}-d_{1a}}{s_{1b}-s_{1a}} &amp;amp; 0 &amp;amp; \cdots &amp;amp; 0 &amp;amp; \frac{-s_{1a}d_{1b}+d_{1a}s_{1b}}{s_{1b}-s_{1a}}\\
0 &amp;amp; \frac{d_{2b}-d_{2a}}{s_{2b}-s_{2a}} &amp;amp; \cdots &amp;amp; 0 &amp;amp; \frac{-s_{2a}d_{2b}+d_{2a}s_{2b}}{s_{2b}-s_{2a}}\\
\vdots &amp;amp; \vdots &amp;amp; \ddots &amp;amp; \vdots &amp;amp; \vdots\\
0 &amp;amp; 0 &amp;amp; \cdots &amp;amp; \frac{d_{nb}-d_{na}}{s_{nb}-s_{na}} &amp;amp; \frac{-s_{na}d_{nb}+d_{na}s_{nb}}{s_{nb}-s_{na}}\\
0 &amp;amp; 0 &amp;amp; \cdots &amp;amp; 0 &amp;amp; 1\\
} \cdot \pmqty{x_1\\ x_2\\ \vdots\\ x_n\\ 1} \]" style="height: 7.2524em; display: block" class="org-latex org-latex-block" /> <br/>
transforms the vector <img src="/ltximg/58b87651132.svg" alt="\(\brm{x}\)" style="height: 0.5224em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> from a given set of intervals onto another, resulting in <img src="/ltximg/a1b6bad21c1.svg" alt="\(\brm{v}\)" style="height: 0.5224em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />

