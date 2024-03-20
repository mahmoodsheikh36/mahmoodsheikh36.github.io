+++
title = "linear regression"
author = ["mahmood"]
description = "a rigorous treatment of the multivariate linear regression algorithm"
date = 2024-03-08T00:00:00+02:00
tags = ["cs", "math"]
draft = false
+++

<div class="problem">

given a training data set comprising <img src="/ltximg/bd89d606b5a.svg" alt="\(N\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> observations <img src="/ltximg/146305b5d6b.svg" alt="\(\{\brm{x}_n \in \mathbb{R}^A\}\)" style="height: 1.1678em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, where <img src="/ltximg/c9de7084c7a.svg" alt="\(n=1,\dots,N\)" style="height: 0.9586em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, together with corresponding target values <img src="/ltximg/132ede6778d.svg" alt="\(\{\brm{y}_n \in \mathbb{R}^K\}\)" style="height: 1.1678em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, the goal is to predict the value of <img src="/ltximg/233c3ade62b.svg" alt="\(\brm{y}\)" style="height: 0.7130em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> for a new value of <img src="/ltximg/58b87651132.svg" alt="\(\brm{x}\)" style="height: 0.5224em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> with a _predictive hypothesis_ function <img src="/ltximg/b9d00251a22.svg" alt="\(\brm{h}\)" style="height: 0.7704em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />: <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/b7f9c44d859.svg" alt="\begin{equation}
  \brm{h_W}(\brm{x}): \mathbb{R}^A \to \mathbb{R}^K = \brm{Wx} \quad \brm{W} \in \mathbb{R}^{K \times A}.
\end{equation}
" style="height: 1.5194em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

but to make our hypothesis applicable to more function spaces we extend this linear function with a set of <img src="/ltximg/bfb79e58d2f.svg" alt="\(M\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> fixed, non-linear basis functions <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/e2d77c7a46c.svg" alt="\begin{equation}
  \brm{\Phi}(\brm{x}): \mathbb{R}^A \to \mathbb{R}^M = \pmqty{\Phi_0(\brm{x})\\ \Phi_1(\brm{x})\\ \vdots\\ \Phi_{M-1}(\brm{x})} \quad (\forall 0 \le m &amp;lt; M)(\Phi_m: \mathbb{R}^A \to \mathbb{R}),
\end{equation}
" style="height: 5.5433em; vertical-align: -0.5392em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

such that <img src="/ltximg/60039ce4f65.svg" alt="\(\Phi_0(\brm{x})=1\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> for the bias parameter, such that <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/c350bff9642.svg" alt="\begin{equation}
  \brm{h_W}(\brm{x}): \mathbb{R}^A \to \mathbb{R}^K = \brm{W\Phi}(\brm{x})) \quad \brm{W} \in \mathbb{R}^{K \times M}.
\end{equation}
" style="height: 1.5194em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

this gets rid of the restrictions we would be imposing by using linear functions of <img src="/ltximg/58b87651132.svg" alt="\(\brm{x}\)" style="height: 0.5224em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, this is however still a linear function of <img src="/ltximg/aa280bd2512.svg" alt="\(\brm{W}\)" style="height: 0.7704em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> which eases analysis. <br/>
here, <img src="/ltximg/aa280bd2512.svg" alt="\(\brm{W}\)" style="height: 0.7704em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is the weight matrix which we hope would represent a linear transformation that transforms a vector of input features <img src="/ltximg/651bd0091cf.svg" alt="\(\brm{x} \in \mathbb{R}^A\)" style="height: 0.9611em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" /> into an output vector <img src="/ltximg/0ea87a04bfb.svg" alt="\(\brm{y} \in \mathbb{R}^K\)" style="height: 1.1133em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
(Christopher M. Bishop, 2006 section 3.1 linear basis function models) <br/>

</div>

we start with a random point in <img src="/ltximg/4dcec2a225c.svg" alt="\(\mathbb{R}^{K \times M}\)" style="height: 0.9228em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> for <img src="/ltximg/aa280bd2512.svg" alt="\(\brm{W}\)" style="height: 0.7704em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, and use an optimization algorithm to arrive at a good enough approximation of a hypothetical target function <img src="/ltximg/a5ead3743e6.svg" alt="\(\brm{f}\)" style="height: 0.7704em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> from which we assume the observations <img src="/ltximg/b2c3553378e.svg" alt="\(\{\brm{x}_j\}\)" style="height: 1.1138em; vertical-align: -0.3296em; display: inline-block" class="org-latex org-latex-inline" /> were drawn, "good enough" being defined by some criterion or loss function. <br/>
here we consider the traditional gradient descent as the optimization method. the observations may potentially be divided into batches, but that doesnt matter in theory. our goal is to converge on a good enough <img src="/ltximg/aa280bd2512.svg" alt="\(\brm{W}\)" style="height: 0.7704em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> by going in the direction opposite to that of the gradient of the loss function, because by doing so we could get closer to a local minima point (i.e. "sliding downhill") so a _training step_ would consist of: <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/f6427adada4.svg" alt="\begin{equation}
  \brm{W} \gets \brm{W}-\eta\vec{\nabla}_{\brm{W}}L(\brm{h_W}(\brm{x}), \brm{y}),
\end{equation}
" style="height: 1.5194em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

where <img src="/ltximg/7c012388408.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is the loss function and <img src="/ltximg/4c8a1baec4f.svg" alt="\(\eta\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> is the learning rate. <br/>
the optimal weight matrix <img src="/ltximg/6f832b296e9.svg" alt="\(\brm{\hat W}\)" style="height: 1.0316em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> would be the one to minimize this loss for a given batch (set of observations): <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/ba936389efd.svg" alt="\begin{equation}
  \brm{\hat W} = \argmin_{\brm{W}} L(\brm{h_W}(\brm{x}), \brm{y}).
\end{equation}
" style="height: 2.1907em; vertical-align: -0.5392em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

