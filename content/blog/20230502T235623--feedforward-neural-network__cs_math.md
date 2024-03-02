+++
title = "feedforward neural network"
author = ["mahmood"]
description = "studying and building neural networks from scratch"
date = 2024-02-26T00:00:00+02:00
tags = ["cs", "math"]
draft = false
+++

<div class="note">

feedforward [neural network](20230501T222843--artificial-neural-network__.org)s is a wider term than discussed here, whats discussed here really is a specific type we call a **simple multilayer perceptron**, but this serves as an introductory to other types of more complex networks <br/>

</div>

a **feedforward network** has connections only in one direction. each node computes a [function](20231111T073425--function__math.org) of its inputs and passes the result to its successors in the network. information flows through the network from the input nodes to the output nodes, and there are no loops. <br/>
a unit calculates the weighted sum of the inputs from predecessor nodes and then applies a nonlinear function to produce its output. let <img src="/ltximg/f3b17b7195f.svg" alt="\(a_j\)" style="height: 0.9318em; vertical-align: -0.4347em; display: inline-block" class="org-latex org-latex-inline" /> denote the output of unit <img src="/ltximg/2163b2c058b.svg" alt="\(j\)" style="height: 0.9647em; vertical-align: -0.3069em; display: inline-block" class="org-latex org-latex-inline" /> and let <img src="/ltximg/83e33980efc.svg" alt="\(w_{i,j}\)" style="height: 0.9445em; vertical-align: -0.4347em; display: inline-block" class="org-latex org-latex-inline" /> be the weight attached to the link from unit <img src="/ltximg/bb5855b2eb2.svg" alt="\(i\)" style="height: 0.7167em; vertical-align: -0.0590em; display: inline-block" class="org-latex org-latex-inline" /> to unit <img src="/ltximg/2163b2c058b.svg" alt="\(j\)" style="height: 0.9647em; vertical-align: -0.3069em; display: inline-block" class="org-latex org-latex-inline" />; then we have <br/>


<div id="org2b14e79" class="equation-container">
<span class="equation">
<img src="/ltximg/276591a6524.svg" alt="\begin{equation}
  a_j = g_j\left(\sum_{i} w_{i,j}a_i\right) = g_j(in_j)
\end{equation}
" style="height: 2.8630em; vertical-align: -0.5392em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

where <img src="/ltximg/4d2aae361ec.svg" alt="\(g_j\)" style="height: 0.9386em; vertical-align: -0.4347em; display: inline-block" class="org-latex org-latex-inline" /> is a nonlinear [activation function](20230503T000820--activation-function__.org) associated with unit <img src="/ltximg/2163b2c058b.svg" alt="\(j\)" style="height: 0.9647em; vertical-align: -0.3069em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/c67c2a62520.svg" alt="\(in_j\)" style="height: 1.0925em; vertical-align: -0.4347em; display: inline-block" class="org-latex org-latex-inline" /> is the weighted sum of the inputs to unit <img src="/ltximg/2163b2c058b.svg" alt="\(j\)" style="height: 0.9647em; vertical-align: -0.3069em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
each unit has an extra input from a dummy unit 0 that is fixed to +1 and a weight <img src="/ltximg/f6ec3f93e3a.svg" alt="\(w_{0,j}\)" style="height: 0.9445em; vertical-align: -0.4347em; display: inline-block" class="org-latex org-latex-inline" /> for that input. this allows the total weighted input <img src="/ltximg/c67c2a62520.svg" alt="\(in_j\)" style="height: 1.0925em; vertical-align: -0.4347em; display: inline-block" class="org-latex org-latex-inline" /> to unit <img src="/ltximg/2163b2c058b.svg" alt="\(j\)" style="height: 0.9647em; vertical-align: -0.3069em; display: inline-block" class="org-latex org-latex-inline" /> to be nonzero even when the outputs of the preceding layer are all zero. with this convention, we can write the preceding equation in vector form: <br/>
<img src="/ltximg/490274cdeb6.svg" alt="\[ a_j = g_j(\brm{w}^T\brm{x}) \]" style="height: 1.6599em; display: block" class="org-latex org-latex-block" /> <br/>
where <img src="/ltximg/7ebeb498b8a.svg" alt="\(\brm{w}\)" style="height: 0.5472em; vertical-align: -0.0541em; display: inline-block" class="org-latex org-latex-inline" /> is the [vector](20231222T075237--vector__math.org) of weights leading into unit <img src="/ltximg/2163b2c058b.svg" alt="\(j\)" style="height: 0.9647em; vertical-align: -0.3069em; display: inline-block" class="org-latex org-latex-inline" /> (including <img src="/ltximg/f6ec3f93e3a.svg" alt="\(w_{0,j}\)" style="height: 0.9445em; vertical-align: -0.4347em; display: inline-block" class="org-latex org-latex-inline" />) and <img src="/ltximg/bf6deb886d9.svg" alt="\(\brm{x}\)" style="height: 0.5364em; vertical-align: -0.0502em; display: inline-block" class="org-latex org-latex-inline" /> is the vector of inputs to unit <img src="/ltximg/2163b2c058b.svg" alt="\(j\)" style="height: 0.9647em; vertical-align: -0.3069em; display: inline-block" class="org-latex org-latex-inline" /> (including the +1) <br/>
training a neural network consists of modifying the network’s parameters so as to minimize the [loss function](20231019T204317--loss-function__math.org) on the training set. in principle, any kind of optimization algorithm could be used. in practice, modern neural networks are almost always trained with some variant of [stochastic gradient descent](20230503T195522--stochastic-gradient-descent__.org). <br/>
here, the goal is to minimize the loss <img src="/ltximg/b25f231257a.svg" alt="\(L(\brm{w})\)" style="height: 1.0686em; vertical-align: -0.2893em; display: inline-block" class="org-latex org-latex-inline" />, where <img src="/ltximg/7ebeb498b8a.svg" alt="\(\brm{w}\)" style="height: 0.5472em; vertical-align: -0.0541em; display: inline-block" class="org-latex org-latex-inline" /> represents all of the parameters of the network (all the weights). each update step in the gradient descent process looks like this: <br/>
<img src="/ltximg/ac556153465.svg" alt="\[ \brm{w} \gets \brm{w} - \alpha\nabla_{\brm{w}}L(\brm{w}) \]" style="height: 1.5145em; display: block" class="org-latex org-latex-block" /> <br/>

where <img src="/ltximg/cbd564c09b7.svg" alt="\(\alpha\)" style="height: 0.5688em; vertical-align: -0.0649em; display: inline-block" class="org-latex org-latex-inline" /> is the [learning rate](20230423T002354--learning-rate__.org). for standard gradient descent, the loss function <img src="/ltximg/79e36567062.svg" alt="\(L\)" style="height: 0.7569em; vertical-align: -0.0502em; display: inline-block" class="org-latex org-latex-inline" /> is defined with respect to the entire training set. for stochastic gradient descent, it is defined with respect to a minibatch of <img src="/ltximg/5126e12f24c.svg" alt="\(m\)" style="height: 0.5629em; vertical-align: -0.0590em; display: inline-block" class="org-latex org-latex-inline" /> examples chosen randomly at each step. <br/>
the change in a single weight is defined as: <br/>
<img src="/ltximg/cebfb5fd0df.svg" alt="\[ w \gets w - \alpha \frac{\partial L}{\partial w} \]" style="height: 2.2867em; display: block" class="org-latex org-latex-block" /> <br/>
given a single training example <img src="/ltximg/744a180f229.svg" alt="\((\brm{x},y)\)" style="height: 1.0950em; vertical-align: -0.3157em; display: inline-block" class="org-latex org-latex-inline" />, let <img src="/ltximg/5de50fe2f51.svg" alt="\(\hat y=a_k\)" style="height: 1.0450em; vertical-align: -0.3157em; display: inline-block" class="org-latex org-latex-inline" /> of the output layer. <img src="/ltximg/be5344c35f5.svg" alt="\(\hat y\)" style="height: 1.0450em; vertical-align: -0.3157em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/f13aa32dd48.svg" alt="\(y\)" style="height: 0.8304em; vertical-align: -0.3157em; display: inline-block" class="org-latex org-latex-inline" /> are both constant throughout the back-propagation process (independent of other variables), as we're really just trying to get the output <img src="/ltximg/be5344c35f5.svg" alt="\(\hat y\)" style="height: 1.0450em; vertical-align: -0.3157em; display: inline-block" class="org-latex org-latex-inline" /> to be as close to <img src="/ltximg/f13aa32dd48.svg" alt="\(y\)" style="height: 0.8304em; vertical-align: -0.3157em; display: inline-block" class="org-latex org-latex-inline" /> as possible on future feedforwarding runs. <br/>
denoting the output layer by <img src="/ltximg/d8d78a26c4f.svg" alt="\(q\)" style="height: 0.8069em; vertical-align: -0.3030em; display: inline-block" class="org-latex org-latex-inline" />, the output of an aribtrary unit <img src="/ltximg/e8a991de421.svg" alt="\(k\)" style="height: 0.8216em; vertical-align: -0.0649em; display: inline-block" class="org-latex org-latex-inline" /> in the output layer is defined as: <br/>
<img src="/ltximg/d730c0d4e01.svg" alt="\[ \hat y = g^q(in_k^q) \]" style="height: 1.5787em; display: block" class="org-latex org-latex-block" /> <br/>
such that a superscript denotes the number of the layer that an expression is associated with. <br/>
assuming the squared cost function (which we would usually denote by <img src="/ltximg/7d7b9b7b626.svg" alt="\(L_2\)" style="height: 0.9617em; vertical-align: -0.2550em; display: inline-block" class="org-latex org-latex-inline" /> but here im using <img src="/ltximg/a74c82a6596.svg" alt="\(L_k\)" style="height: 0.9714em; vertical-align: -0.2646em; display: inline-block" class="org-latex org-latex-inline" /> for something else), the output of the cost function for the <img src="/ltximg/e8a991de421.svg" alt="\(k\)" style="height: 0.8216em; vertical-align: -0.0649em; display: inline-block" class="org-latex org-latex-inline" />-th unit in the output layer would be: <br/>
<img src="/ltximg/0079d85932d.svg" alt="\[ L_k = (y - \hat y)^2 \]" style="height: 1.5409em; display: block" class="org-latex org-latex-block" /> <br/>
after the first application of the [derivative chain rule](20231005T002128--derivative__math.org) to the cost function with respect to the weight that connects an arbitrary unit <img src="/ltximg/2163b2c058b.svg" alt="\(j\)" style="height: 0.9647em; vertical-align: -0.3069em; display: inline-block" class="org-latex org-latex-inline" /> in the last hidden layer to an arbitrary unit <img src="/ltximg/e8a991de421.svg" alt="\(k\)" style="height: 0.8216em; vertical-align: -0.0649em; display: inline-block" class="org-latex org-latex-inline" /> in the output layer we get: <br/>
<img src="/ltximg/b5952d6da84.svg" alt="\[ \frac{\partial L}{\partial w^q_{jk}} = -2(y-\hat y) \frac{\partial {g^q(in_k^q)}}{\partial w^q_{jk}} \]" style="height: 3.0417em; display: block" class="org-latex org-latex-block" /> <br/>

<div class="note">

a weight that is between a layer <img src="/ltximg/76cc138abd6.svg" alt="\(l-1\)" style="height: 0.8157em; vertical-align: -0.0590em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/b9c8a75f401.svg" alt="\(l\)" style="height: 0.8157em; vertical-align: -0.0590em; display: inline-block" class="org-latex org-latex-inline" /> is denoted by <img src="/ltximg/3e0965efedf.svg" alt="\(w^l_x\)" style="height: 1.2473em; vertical-align: -0.2625em; display: inline-block" class="org-latex org-latex-inline" /> and not <img src="/ltximg/5b965060ac5.svg" alt="\(w^{l-1}_x\)" style="height: 1.2473em; vertical-align: -0.2625em; display: inline-block" class="org-latex org-latex-inline" /> because it actually belongs to the <img src="/ltximg/b9c8a75f401.svg" alt="\(l\)" style="height: 0.8157em; vertical-align: -0.0590em; display: inline-block" class="org-latex org-latex-inline" />th layer, even if it comes out of the <img src="/ltximg/76cc138abd6.svg" alt="\(l-1\)" style="height: 0.8157em; vertical-align: -0.0590em; display: inline-block" class="org-latex org-latex-inline" />th layer, this means that weights with a superscript of 1, e.g. <img src="/ltximg/95f5504373a.svg" alt="\(w^1_x\)" style="height: 1.1712em; vertical-align: -0.2625em; display: inline-block" class="org-latex org-latex-inline" /> arent defined, because the first layer (input layer) has no weights. <br/>

</div>

applying the chain rule again we get: <br/>
<img src="/ltximg/4e095fd4dc2.svg" alt="\[ \frac{\partial L}{\partial w^q_{jk}} = -2(y-\hat y) {g^q}'(in_k^q) \frac{\partial in_k^q}{w^q_{jk}} \]" style="height: 3.0417em; display: block" class="org-latex org-latex-block" /> <br/>
we apply the chain rule again to get the final gradient formula for <img src="/ltximg/5ec2b84dcf4.svg" alt="\(w^q_{jk}\)" style="height: 1.4346em; vertical-align: -0.5236em; display: inline-block" class="org-latex org-latex-inline" />: <br/>


<div id="orge5e8f4f" class="equation-container">
<span class="equation">
<img src="/ltximg/410165027e3.svg" alt="\begin{equation}
  \frac{\partial L}{\partial w^q_{jk}} = \underbrace{-2(y-\hat y){g^q}'(in_k^q)}_{\text{perceived error, } \Delta_k^q} a_j^{q-1}
\end{equation}
" style="height: 3.4118em; vertical-align: -0.5392em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

during backpropagation, a part of a weights gradient, which we define as **perceived error** or a **delta**, is back-propagated to preceding layers in the network because it appears in the formulas of the partial derivatives for weights that exist in these previous layers, we denote by <img src="/ltximg/1880cb9d53f.svg" alt="\(\Delta_k^l\)" style="height: 1.2713em; vertical-align: -0.2865em; display: inline-block" class="org-latex org-latex-inline" /> the perceived error of the <img src="/ltximg/e8a991de421.svg" alt="\(k\)" style="height: 0.8216em; vertical-align: -0.0649em; display: inline-block" class="org-latex org-latex-inline" />-th unit in the <img src="/ltximg/b9c8a75f401.svg" alt="\(l\)" style="height: 0.8157em; vertical-align: -0.0590em; display: inline-block" class="org-latex org-latex-inline" />-th layer. in the case of a unit in the output layer, its a simple formula: <br/>
<img src="/ltximg/a507e3bb741.svg" alt="\[ \Delta_k^q = -2(y-\hat y){g^q}'(in_k^q) \]" style="height: 1.5787em; display: block" class="org-latex org-latex-block" /> <br/>
which is, as you might've noticed, just a part of the equation eq-fnn-w-derivative, the beginning of the expression, <img src="/ltximg/0b311c944af.svg" alt="\(-2(y-\hat y)\)" style="height: 1.0950em; vertical-align: -0.3157em; display: inline-block" class="org-latex org-latex-inline" />, doesnt change, but as we move backwards through the layers, the pattern in the second part of the equation <img src="/ltximg/8693b761723.svg" alt="\({g^l}'(in_k^l)\)" style="height: 1.4088em; vertical-align: -0.3030em; display: inline-block" class="org-latex org-latex-inline" /> repeats over and over again (demonstrated in exa-fnn-1), which is why the concept of a perceived error is quite helpful. with this in mind, the perceived error of a unit <img src="/ltximg/2163b2c058b.svg" alt="\(j\)" style="height: 0.9647em; vertical-align: -0.3069em; display: inline-block" class="org-latex org-latex-inline" /> in the last hidden layer <img src="/ltximg/7c0affcc8c6.svg" alt="\(q-1\)" style="height: 1.0039em; vertical-align: -0.3030em; display: inline-block" class="org-latex org-latex-inline" /> would be: <br/>
<img src="/ltximg/9b9f40a195d.svg" alt="\[ \Delta_j^{q-1} = \Delta_k^qw^q_{jk}{g^{q-1}}'(in_j^{q-1}) = -2(y-\hat y){g^q}'(in_k^q)w_{jk}^q{g^{q-1}}'(in_j^{q-1}) \]" style="height: 1.7488em; display: block" class="org-latex org-latex-block" /> <br/>
where <img src="/ltximg/e8a991de421.svg" alt="\(k\)" style="height: 0.8216em; vertical-align: -0.0649em; display: inline-block" class="org-latex org-latex-inline" /> refers to the number of the unit in the succeeding layer that the back-propagated gradient message originated from. <br/>
and in general form, the perceived error for an arbitrary unit <img src="/ltximg/e8a991de421.svg" alt="\(k\)" style="height: 0.8216em; vertical-align: -0.0649em; display: inline-block" class="org-latex org-latex-inline" /> in an arbitrary hidden layer <img src="/ltximg/b9c8a75f401.svg" alt="\(l\)" style="height: 0.8157em; vertical-align: -0.0590em; display: inline-block" class="org-latex org-latex-inline" />, is defined as: <br/>


<div id="org8cf2484" class="equation-container">
<span class="equation">
<img src="/ltximg/d917ea7dba6.svg" alt="\begin{equation}
  \Delta_k^l = \Delta_c^{l+1}w^{l+1}_{kc}{g^l}'(in_k^l) 
\end{equation}
" style="height: 1.5282em; vertical-align: -0.3030em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

where <img src="/ltximg/d78b2274184.svg" alt="\(c\)" style="height: 0.5648em; vertical-align: -0.0600em; display: inline-block" class="org-latex org-latex-inline" /> is some arbitrary unit in <img src="/ltximg/974866d212a.svg" alt="\(l+1\)" style="height: 0.8206em; vertical-align: -0.0639em; display: inline-block" class="org-latex org-latex-inline" /> that the message was propagated back from. <br/>
for a weight that connects the unit <img src="/ltximg/2163b2c058b.svg" alt="\(j\)" style="height: 0.9647em; vertical-align: -0.3069em; display: inline-block" class="org-latex org-latex-inline" /> of the hidden layer <img src="/ltximg/76cc138abd6.svg" alt="\(l-1\)" style="height: 0.8157em; vertical-align: -0.0590em; display: inline-block" class="org-latex org-latex-inline" /> to the unit <img src="/ltximg/e8a991de421.svg" alt="\(k\)" style="height: 0.8216em; vertical-align: -0.0649em; display: inline-block" class="org-latex org-latex-inline" /> of the next hidden layer <img src="/ltximg/b9c8a75f401.svg" alt="\(l\)" style="height: 0.8157em; vertical-align: -0.0590em; display: inline-block" class="org-latex org-latex-inline" />, the formula is defined in terms of the perceived error of the unit <img src="/ltximg/e4bc1f22862.svg" alt="\(k^l\)" style="height: 1.0497em; vertical-align: -0.0649em; display: inline-block" class="org-latex org-latex-inline" /> (weight originates from unit <img src="/ltximg/21a358ff9cb.svg" alt="\(j^{l-1}\)" style="height: 1.2917em; vertical-align: -0.3069em; display: inline-block" class="org-latex org-latex-inline" /> and connects to unit <img src="/ltximg/e4bc1f22862.svg" alt="\(k^l\)" style="height: 1.0497em; vertical-align: -0.0649em; display: inline-block" class="org-latex org-latex-inline" />, so it belongs to <img src="/ltximg/e4bc1f22862.svg" alt="\(k^l\)" style="height: 1.0497em; vertical-align: -0.0649em; display: inline-block" class="org-latex org-latex-inline" />): <br/>
<img src="/ltximg/4b1b555bf4c.svg" alt="\[ \frac{\partial L}{\partial w^l_{jk}} = \Delta_k^l a_j^{l-1} \]" style="height: 2.8674em; display: block" class="org-latex org-latex-block" /> <br/>
the back-propagation process passes messages back along each link in the network. at each node, the incoming messages are collected and new messages are calculated to pass back to the next layer. <br/>
overall, the process of learning the weights of the network is usually one that exhibits diminishing returns. we run until it is no longer practical to decrease the test error by running longer. usually this does not mean we have reached a global or even a local minimum of the loss function. instead, it means we would have to make an impractically large number of very small steps to continue reducing the cost, or that additional steps would only cause overfitting, or that estimates of the gradient are too inaccurate to make further progress. <br/>

<div class="my_example" id="exa-fnn-1">

citation: (Peter Norvig, Stuart J. Russell, 2020) <br/>
consider the following network <br/>

<a id="org8bfe3e8"></a>

![](/ox-hugo/network-graph.png) <br/>
coupling multiple units together into a network creates a complex function that is a composition of the algebraic expressions represented by the individual units. for example, the network above represents a function <img src="/ltximg/2aa3a509be3.svg" alt="\(h_{\brm{w}}(\brm{x})\)" style="height: 1.0686em; vertical-align: -0.2893em; display: inline-block" class="org-latex org-latex-inline" />, parameterized by weights <img src="/ltximg/7ebeb498b8a.svg" alt="\(\brm{w}\)" style="height: 0.5472em; vertical-align: -0.0541em; display: inline-block" class="org-latex org-latex-inline" />, that maps a two-element input vector <img src="/ltximg/bf6deb886d9.svg" alt="\(\brm{x}\)" style="height: 0.5364em; vertical-align: -0.0502em; display: inline-block" class="org-latex org-latex-inline" /> to a scalar output value <img src="/ltximg/be5344c35f5.svg" alt="\(\hat y\)" style="height: 1.0450em; vertical-align: -0.3157em; display: inline-block" class="org-latex org-latex-inline" />. the internal structure of the function mirrors the structure of the network. for example we can write an expression for the output <img src="/ltximg/be5344c35f5.svg" alt="\(\hat y\)" style="height: 1.0450em; vertical-align: -0.3157em; display: inline-block" class="org-latex org-latex-inline" /> as follows: <br/>


<div id="org5ffbea6" class="equation-container">
<span class="equation">
<img src="/ltximg/dc266593824.svg" alt="\begin{align*}
  \hat y &amp;amp;= g_5(in_5) = g_5(w_{0,5} + w_{3,5}a_3 + w_{4,5}a_4)\\
  &amp;amp;= g_5(w_{0,5} + w_{3,5}g_3(in_3) + w_{4,5}g_4(in_4))\\
  &amp;amp;= g_5(w_{0,5} + w_{3,5}g_3(w_{0,3} + w_{1,3}x_1 + w_{2,3}x_2) + w_{4,5}g_4(w_{0,4} + w_{1,4}x_1 + w_{2,4}x_2))
\end{align*}
" style="height: 4.5672em; vertical-align: -0.4020em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

thus, we have the output <img src="/ltximg/be5344c35f5.svg" alt="\(\hat y\)" style="height: 1.0450em; vertical-align: -0.3157em; display: inline-block" class="org-latex org-latex-inline" /> expressed as a function <img src="/ltximg/2aa3a509be3.svg" alt="\(h_{\brm{w}}(\brm{x})\)" style="height: 1.0686em; vertical-align: -0.2893em; display: inline-block" class="org-latex org-latex-inline" /> of the inputs and the weights. <br/>
we generally use <img src="/ltximg/11b8602679b.svg" alt="\(\brm{W}\)" style="height: 0.7559em; vertical-align: -0.0541em; display: inline-block" class="org-latex org-latex-inline" /> to denote a weight [matrix](20231222T075331--matrix__math.org); <img src="/ltximg/9b6d6cd227a.svg" alt="\(\brm{W}^{(i)}\)" style="height: 1.0540em; vertical-align: -0.0541em; display: inline-block" class="org-latex org-latex-inline" /> denotes the weights in the i'th layer, let <img src="/ltximg/ea85dd08aba.svg" alt="\(\brm{g}^{(i)}\)" style="height: 1.2980em; vertical-align: -0.2981em; display: inline-block" class="org-latex org-latex-inline" /> denote the activation functions in the i'th layer, then, for example, an entire network of 1 input layer, 1 hidden layer, and an output node can be written as follows: <br/>
<img src="/ltximg/444cb01965e.svg" alt="\[ h_{\brm{w}}(\brm{x}) = \brm{g}^{(2)}(\brm{W}^{(2)}\brm{g}^{(1)}(\brm{W}^{(1)}\brm{x})) \]" style="height: 1.5233em; display: block" class="org-latex org-latex-block" /> <br/>
for the network to learn, we need to gradually adjust the weights to fit the learning data, using the [gradient descent](20230422T235640--gradient-descent__math.org) algorithm <br/>
first we apply the loss function, for simplicity the squared loss function is used here, we will calculate the gradient for the network we [proposed](#org8bfe3e8) with respect to a single training example <img src="/ltximg/744a180f229.svg" alt="\((\brm{x},y)\)" style="height: 1.0950em; vertical-align: -0.3157em; display: inline-block" class="org-latex org-latex-inline" />. (for multiple examples, the gradient is just the sum of the gradients for the individual examples.) the network outputs a prediction <img src="/ltximg/57a2c807743.svg" alt="\(\hat y = h_{\brm{w}}(\brm{x})\)" style="height: 1.0950em; vertical-align: -0.3157em; display: inline-block" class="org-latex org-latex-inline" /> and the true value is <img src="/ltximg/f13aa32dd48.svg" alt="\(y\)" style="height: 0.8304em; vertical-align: -0.3157em; display: inline-block" class="org-latex org-latex-inline" />, so we have <br/>
<img src="/ltximg/72f391ea91a.svg" alt="\[ Loss(h_{\brm{w}}) = L_2(y,h_{\brm{x}}(\brm{x})) = ||y-h_{\brm{w}}(\brm{x})||^2 = (y-\hat y)^2 \]" style="height: 1.5409em; display: block" class="org-latex org-latex-block" /> <br/>
we compute the gradient of the loss with respect to the weights, we use the chain rule, we'll start with the easy case: a weight such as <img src="/ltximg/e7cec5aa475.svg" alt="\(w_{3,5}\)" style="height: 0.8553em; vertical-align: -0.3455em; display: inline-block" class="org-latex org-latex-inline" /> that is connected to the output unit. we operate directly on the eq-fnn-hypothesis-definition: <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/2385a4d4abd.svg" alt="\begin{align*}
  \frac{\partial}{\partial w_{3,5}}Loss(h_{\brm{w}}) &amp;amp;= \frac{\partial}{\partial w_{3,5}}(y-\hat y)^2 = -2(y-\hat y)\frac{\partial \hat y}{\partial w_{3,5}}\\
  &amp;amp;= -2(y-\hat y)\frac{\partial}{\partial w_{3,5}}g_5(in_5) = -2(y-\hat y)g'_5(in_5)\frac{\partial}{\partial w_{3,5}}in_5\\
  &amp;amp;= -2(y-\hat y)g'_5(in_5)\frac{\partial}{\partial w_{3,5}}(w_{0,5}+w_{3,5}a_3+w_{4,5}a_4)\\
  &amp;amp;= -2(y-\hat y)g'_5(in_5)a_3
\end{align*}
" style="height: 9.6781em; vertical-align: -0.4020em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

the slightly more difficult case involves a weight such as <img src="/ltximg/c9087a81d54.svg" alt="\(w_{1,3}\)" style="height: 0.8553em; vertical-align: -0.3455em; display: inline-block" class="org-latex org-latex-inline" /> that is not directly connected to the output unit. here, we have to apply the chain rule one more time. the first few steps are identical, so we omit them: <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/53d092e4053.svg" alt="\begin{align*}
  \frac{\partial}{\partial w_{1,3}}Loss(h_{\brm{w}}) &amp;amp;= -2(y-\hat y)g'_5(in_5)\frac{\partial}{\partial w_{1,3}}(w_{0,5}+w_{3,5}a_3+w_{4,5}a_4)\\
  &amp;amp;= -2(y-\hat y)g'_5(in_5)w_{3,5}\frac{\partial}{\partial w_{1,3}}a_3\\
  &amp;amp;= -2(y-\hat y)g'_5(in_5)w_{3,5}\frac{\partial}{\partial w_{1,3}}g_3(in_3)\\
  &amp;amp;= -2(y-\hat y)g'_5(in_5)w_{3,5}g'_3(in_3)\frac{\partial}{\partial w_{1,3}}in_3\\
  &amp;amp;= -2(y-\hat y)g'_5(in_5)w_{3,5}g'_3(in_3)\frac{\partial}{\partial w_{1,3}}(w_{0,3}+w_{1,3}x_1+w_{2,3}x_2)\\
  &amp;amp;= -2(y-\hat y)g'_5(in_5)w_{3,5}g'_3(in_3)x_1
\end{align*}
" style="height: 15.1825em; vertical-align: -0.4020em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

here, <img src="/ltximg/a8c62acce2b.svg" alt="\(\Delta_5=2(\hat y-y)g'_5(in_5)\)" style="height: 1.1524em; vertical-align: -0.3157em; display: inline-block" class="org-latex org-latex-inline" /> is the perceived error unit 5, and the gradient with respect to <img src="/ltximg/e7cec5aa475.svg" alt="\(w_{3,5}\)" style="height: 0.8553em; vertical-align: -0.3455em; display: inline-block" class="org-latex org-latex-inline" /> is just <img src="/ltximg/eb02179997b.svg" alt="\(\Delta_5a_3\)" style="height: 0.9961em; vertical-align: -0.2639em; display: inline-block" class="org-latex org-latex-inline" />. this makes perfect sense: if <img src="/ltximg/c4d905fdcc8.svg" alt="\(\Delta_5\)" style="height: 0.9961em; vertical-align: -0.2639em; display: inline-block" class="org-latex org-latex-inline" /> is positive, that means <img src="/ltximg/be5344c35f5.svg" alt="\(\hat y\)" style="height: 1.0450em; vertical-align: -0.3157em; display: inline-block" class="org-latex org-latex-inline" /> is too big (<img src="/ltximg/76a3e1a7a3d.svg" alt="\(g'\)" style="height: 1.1396em; vertical-align: -0.3030em; display: inline-block" class="org-latex org-latex-inline" /> is always nonnegative); if <img src="/ltximg/c9827e67afc.svg" alt="\(a_3\)" style="height: 0.7609em; vertical-align: -0.2639em; display: inline-block" class="org-latex org-latex-inline" /> is also positive, then increasing <img src="/ltximg/e7cec5aa475.svg" alt="\(w_{3,5}\)" style="height: 0.8553em; vertical-align: -0.3455em; display: inline-block" class="org-latex org-latex-inline" /> will only make things worse, whereas if <img src="/ltximg/c9827e67afc.svg" alt="\(a_3\)" style="height: 0.7609em; vertical-align: -0.2639em; display: inline-block" class="org-latex org-latex-inline" /> is negative, then increasing <img src="/ltximg/e7cec5aa475.svg" alt="\(w_{3,5}\)" style="height: 0.8553em; vertical-align: -0.3455em; display: inline-block" class="org-latex org-latex-inline" /> will reduce the error. the magnitude of <img src="/ltximg/c9827e67afc.svg" alt="\(a_3\)" style="height: 0.7609em; vertical-align: -0.2639em; display: inline-block" class="org-latex org-latex-inline" /> also matters: if <img src="/ltximg/c9827e67afc.svg" alt="\(a_3\)" style="height: 0.7609em; vertical-align: -0.2639em; display: inline-block" class="org-latex org-latex-inline" /> is small for this training example, then<img src="/ltximg/e7cec5aa475.svg" alt="\(w_{3,5}\)" style="height: 0.8553em; vertical-align: -0.3455em; display: inline-block" class="org-latex org-latex-inline" /> didnt play a major role in producing the error and doesnt need to be changed much. <br/>
we also know <img src="/ltximg/f4a33558449.svg" alt="\(\Delta_3=\Delta_5w_{3,5}g'_3(in_3)\)" style="height: 1.1822em; vertical-align: -0.3455em; display: inline-block" class="org-latex org-latex-inline" />, and the gradient for <img src="/ltximg/c9087a81d54.svg" alt="\(w_{1,3}\)" style="height: 0.8553em; vertical-align: -0.3455em; display: inline-block" class="org-latex org-latex-inline" /> becomes just <img src="/ltximg/64cec9f9959.svg" alt="\(\Delta_3x_1\)" style="height: 0.9961em; vertical-align: -0.2639em; display: inline-block" class="org-latex org-latex-inline" />. thus, the perceived error at the input to unit 3 is the perceived error at the input to unit 5, multiplied by information along the path from 5 back to 3. this phenomenon is completely general, and gives rise to the term [back-propagation](20230503T165849--backpropagation__.org) for the way that the error at the output is passed back through the network. <br/>

another important characteristic of these gradient expressions is that they have as factors the local derivatives <img src="/ltximg/d45a9bf3001.svg" alt="\(g'_j(in_j)\)" style="height: 1.2713em; vertical-align: -0.4347em; display: inline-block" class="org-latex org-latex-inline" />. as noted earlier, these derivatives are always nonnegative, but they can be very close to zero (in the case of the sigmoid, softplus, and tanh functions) or exactly zero (in the case of ReLUs), if the inputs from the training example in question happen to put unit <img src="/ltximg/2163b2c058b.svg" alt="\(j\)" style="height: 0.9647em; vertical-align: -0.3069em; display: inline-block" class="org-latex org-latex-inline" /> in the flat operating region. if the derivative <img src="/ltximg/5a782db0eff.svg" alt="\(g'_j\)" style="height: 1.2713em; vertical-align: -0.4347em; display: inline-block" class="org-latex org-latex-inline" /> is small or zero, that means that changing the weights leading into unit <img src="/ltximg/2163b2c058b.svg" alt="\(j\)" style="height: 0.9647em; vertical-align: -0.3069em; display: inline-block" class="org-latex org-latex-inline" /> will have a negligible effect on its output. as a result, deep networks with many layers may suffer from a [vanishing gradient](20230503T170135--vanishing-gradient__.org)--the error signals are extinguished altogether as they are propagated back through the network. <br/>

</div>

but how do we pass the data into the input layer? and what do the values coming out of the output layer mean? the following paragraphs explain how we **encode** data to pass it into the input layer, and how we treat the values resulting from the output layer. <br/>
the encoding of input data is usually straightforward, at least for the case of factored data where each training example contains values for <img src="/ltximg/71a37455f85.svg" alt="\(n\)" style="height: 0.5629em; vertical-align: -0.0590em; display: inline-block" class="org-latex org-latex-inline" /> input attributes. if the attributes are boolean, we have <img src="/ltximg/71a37455f85.svg" alt="\(n\)" style="height: 0.5629em; vertical-align: -0.0590em; display: inline-block" class="org-latex org-latex-inline" /> input nodes; usually false is mapped to an input of 0 and true is mapped to 1, although sometimes -1 and +1 are used. numeric attributes, whether integer or real-valued, are typically used as is, although they may be scaled to fit within a fixed range; if the magnitudes for different examples vary enormously, the values can be mapped onto a log scale. <br/>

images do not quite fit into the category of factored data; although an RGB image of size <img src="/ltximg/3810412ca07.svg" alt="\(X \times Y\)" style="height: 0.7569em; vertical-align: -0.0502em; display: inline-block" class="org-latex org-latex-inline" /> pixels can be thought of as <img src="/ltximg/05c14e7030c.svg" alt="\(3XY\)" style="height: 0.7716em; vertical-align: -0.0649em; display: inline-block" class="org-latex org-latex-inline" /> integer-valued attributes (typically with values in the range <img src="/ltximg/6b7d6e2d4a1.svg" alt="\(\{0,\dots,255\}\)" style="height: 1.0294em; vertical-align: -0.2697em; display: inline-block" class="org-latex org-latex-inline" />), this would ignore the fact that the RGB triplets belong to the same pixel in the image and the fact that pixel adjacency really matters. of course, we can map adjacent pixels onto adjacent input nodes in the network, but the meaning of adjacency is completely lost if the internal layers of the network are fully connected. in practice, networks used with image data have array-like internal structures that aim to reflect the semantics of adjacency. <br/>
categorical attributes with more than two values are usually encoded using the so-called **one-hot encoding**. an attribute with <img src="/ltximg/4cfadd8e346.svg" alt="\(d\)" style="height: 0.8167em; vertical-align: -0.0600em; display: inline-block" class="org-latex org-latex-inline" /> possible values is represented by <img src="/ltximg/4cfadd8e346.svg" alt="\(d\)" style="height: 0.8167em; vertical-align: -0.0600em; display: inline-block" class="org-latex org-latex-inline" /> separate input bits. for any given value, the corresponding input bit is set to 1 and all the others are set to 0. this generally works better than mapping the values to integers. <br/>
on the output side of the network, the problem of encoding the raw data values into actual values <img src="/ltximg/f13aa32dd48.svg" alt="\(y\)" style="height: 0.8304em; vertical-align: -0.3157em; display: inline-block" class="org-latex org-latex-inline" /> for the output nodes of the graph is much the same as the input encoding problem. for example, if the network is trying to predict a variable named weather, which has values {sun,rain,cloud,snow}, we would use a one-hot encoding with four bits. <br/>
so much for the data values <img src="/ltximg/b7cb764337c.svg" alt="\(\brm{y}\)" style="height: 0.7883em; vertical-align: -0.2981em; display: inline-block" class="org-latex org-latex-inline" />. what about the prediction <img src="/ltximg/ac5c8615614.svg" alt="\(\hat  y\)" style="height: 1.0450em; vertical-align: -0.3157em; display: inline-block" class="org-latex org-latex-inline" />? ideally, it would exactly match the desired value <img src="/ltximg/b7cb764337c.svg" alt="\(\brm{y}\)" style="height: 0.7883em; vertical-align: -0.2981em; display: inline-block" class="org-latex org-latex-inline" />. and the loss would be zero, and we'd be done. in practice, this seldom happens--especially before we have started the process of adjusting the weights. thus, we need to think about what an incorrect output value means, and how to measure the loss. in deriving the gradients, we began with the squared-error loss function. this keeps the algebra simple, but it is not the only possibility. in fact, for most deep learning applications, it is more common to interpret the output values <img src="/ltximg/be5344c35f5.svg" alt="\(\hat y\)" style="height: 1.0450em; vertical-align: -0.3157em; display: inline-block" class="org-latex org-latex-inline" /> as probabilities and to use the [negative log likelihood](20230503T182055--negative-likelihood-function__math.org) as the loss function. <br/>
maximum likelihood learning finds the value of <img src="/ltximg/7ebeb498b8a.svg" alt="\(\brm{w}\)" style="height: 0.5472em; vertical-align: -0.0541em; display: inline-block" class="org-latex org-latex-inline" /> that maximizes the probability of the observed data. and because the log function is monotonic, this is equivalent to maximizing the log likelihood of the data, which is equivalent in turn to minimizing a loss function defined as the negative log likelihood. (taking logs turns products of probabilities into sums, which are more amenable for taking derivatives.) in other words, we are looking for <img src="/ltximg/11d57a698dd.svg" alt="\(\brm{w}^*\)" style="height: 0.8399em; vertical-align: -0.0541em; display: inline-block" class="org-latex org-latex-inline" /> that minimizes the sum of negative log probabilities of the <img src="/ltximg/0047213b92a.svg" alt="\(N\)" style="height: 0.7648em; vertical-align: -0.0580em; display: inline-block" class="org-latex org-latex-inline" /> examples: <br/>

<a id="orgaa19434"></a>

<img src="/ltximg/6145bbde42c.svg" alt="\[ \brm{w}^* = \argmin_w - \sum_{j=1}^{N} \log P_{\brm{w}}(\brm{y}_j|\brm{x}_j) \]" style="height: 3.2244em; display: block" class="org-latex org-latex-block" /> <br/>
in the deep learning literature, it is common to talk about minimizing the [cross-entropy](20230503T184620--cross-entropy__math.org). we typically use the definition of cross-entropy with <img src="/ltximg/7a4c9a138de.svg" alt="\(P\)" style="height: 0.7569em; vertical-align: -0.0502em; display: inline-block" class="org-latex org-latex-inline" /> being the true distribution over training examples, <img src="/ltximg/9d03a9046a4.svg" alt="\(P^*(\brm{x},\brm{y})\)" style="height: 1.0840em; vertical-align: -0.2981em; display: inline-block" class="org-latex org-latex-inline" />, and <img src="/ltximg/a00edde7e82.svg" alt="\(Q\)" style="height: 0.9490em; vertical-align: -0.2275em; display: inline-block" class="org-latex org-latex-inline" /> being the predictive hypothesis <img src="/ltximg/8d7dd3fadf3.svg" alt="\(P_{\brm{w}}(\brm{y} \mid \brm{x})\)" style="height: 1.1146em; vertical-align: -0.2981em; display: inline-block" class="org-latex org-latex-inline" />. minimizing the cross-entropy <img src="/ltximg/45e4c8537f3.svg" alt="\(H(P^*(\brm{x},\brm{y}), P_{\brm{w}}(\brm{y} \mid \brm{x}))\)" style="height: 1.1146em; vertical-align: -0.2981em; display: inline-block" class="org-latex org-latex-inline" /> by adjusting <img src="/ltximg/7ebeb498b8a.svg" alt="\(\brm{w}\)" style="height: 0.5472em; vertical-align: -0.0541em; display: inline-block" class="org-latex org-latex-inline" /> makes the hypothesis agree as closely as possible with the true distribution. in reality, we cannot minimize this cross-entropy because we do not have access to the true data distribution <img src="/ltximg/9d03a9046a4.svg" alt="\(P^*(\brm{x},\brm{y})\)" style="height: 1.0840em; vertical-align: -0.2981em; display: inline-block" class="org-latex org-latex-inline" />; but we do have access to samples from <img src="/ltximg/9d03a9046a4.svg" alt="\(P^*(\brm{x},\brm{y})\)" style="height: 1.0840em; vertical-align: -0.2981em; display: inline-block" class="org-latex org-latex-inline" />, so the sum over the actual data in eq-fnn-best-weight-vector approximates the expectation in the [BROKEN LINK: 106c5cc1-5c2b-4faa-9525-510a5df2e57d::cross_entropy_equation] of cross-entropy. <br/>
to minimize the negative log likelihood (or the cross-entropy), we need to be able to interpret the output of the network as a probability. for example, if the network has one output unit with a sigmoid activation function and is learning a boolean classification, we can interpret the output value directly as the probability that the example belongs to the positive class. thus, for boolean classification problems, we commonly use a sigmoid output layer. <br/>
multiclass classification problems are very common in machine learning. for example, classifiers used for object recognition often need to recognize thousands of distinct categories of objects. natural language models that try to predict the next word in a sentence may have to choose among tens of thousands of possible words. for this kind of prediction, we need the network to output a categorical distribution--that is, if there are <img src="/ltximg/4cfadd8e346.svg" alt="\(d\)" style="height: 0.8167em; vertical-align: -0.0600em; display: inline-block" class="org-latex org-latex-inline" /> possible answers, we need <img src="/ltximg/4cfadd8e346.svg" alt="\(d\)" style="height: 0.8167em; vertical-align: -0.0600em; display: inline-block" class="org-latex org-latex-inline" /> output nodes that represent probabilities summing to 1. <br/>
To achieve this, we use a softmax layer, which outputs a vector of <img src="/ltximg/4cfadd8e346.svg" alt="\(d\)" style="height: 0.8167em; vertical-align: -0.0600em; display: inline-block" class="org-latex org-latex-inline" /> values given a vector of input values <img src="/ltximg/6fad2a7cffd.svg" alt="\(\brm{in}=(in_1,\dots,in_d)\)" style="height: 1.0686em; vertical-align: -0.2893em; display: inline-block" class="org-latex org-latex-inline" />. The kth element of that output vector is given by <br/>
<img src="/ltximg/720cdc7860d.svg" alt="\[ \mathrm{softmax}(\brm{in})_k = \frac{e^{in_k}}{\sum_{k'=1}^{d} e^{in_{k'}}} \]" style="height: 2.9501em; display: block" class="org-latex org-latex-block" /> <br/>
for a regression problem, where the target value <img src="/ltximg/f13aa32dd48.svg" alt="\(y\)" style="height: 0.8304em; vertical-align: -0.3157em; display: inline-block" class="org-latex org-latex-inline" /> is continuous, it is common to use a linear output layer--in other words, <img src="/ltximg/3d923cfd59f.svg" alt="\(\hat y_j=in_j\)" style="height: 1.1640em; vertical-align: -0.4347em; display: inline-block" class="org-latex org-latex-inline" />, without any activation function <img src="/ltximg/3e5ccd5b193.svg" alt="\(g\)" style="height: 0.8069em; vertical-align: -0.3030em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
many other output layers are possible. <br/>


## initial common lisp implementation {#initial-common-lisp-implementation}

this code uses [common lisp](20230224T163920--common-lisp__code_language.org) (aswell as code/functions from the actual link itself, click it for those) <br/>

```lisp
;; neural network class
(defclass network ()
  ((weights :initarg :weights :initform nil :accessor network-weights)
   (input-layer-size :initarg :input-layer-size :accessor network-input-layer-size)
   (output-layer-size :initarg :output-layer-size :accessor network-output-layer-size)
   (hidden-layer-sizes :initarg :hidden-layer-sizes :accessor network-hidden-layer-sizes)
   (learning-rate :initform 0.0005 :initarg :learning-rate :accessor network-learning-rate)))

(defmethod network-feedforward ((nw network) x)
  "pass the vector x into the network, x is treated as the input layer, the activations of the entire network are returned"
  (let ((previous-layer-activations x)
        (network-activations (list x))
        (network-unsquashed-activations (list x)))
    (loop for weights-index from 0 below (length (network-weights nw))
          do (let* ((weights (elt (network-weights nw) weights-index))
                    (layer-activations (list->vector (make-list (length (elt weights 0)) :initial-element 0))))
               (loop for i from 0 below (length previous-layer-activations)
                     do (let ((previous-unit-activation (elt previous-layer-activations i))
                              (previous-unit-weights (elt weights i)))
                          (setf
                           layer-activations
                           (map
                            'list
                            (lambda (weight activation)
                              (+ activation (* previous-unit-activation weight)))
                            previous-unit-weights layer-activations))))
               (setf previous-layer-activations (map 'list #'sigmoid layer-activations))
               (setf network-activations
                     (append network-activations
                             (list previous-layer-activations)))
               (setf network-unsquashed-activations
                     (append network-unsquashed-activations
                             (list layer-activations)))))
    (values (list->vector network-activations) (list->vector network-unsquashed-activations))))

(defmethod network-generate-weights ((nw network))
  "generate random weights based on the sizes of the layers"
  (setf
   (network-weights nw)
   (loop for i from 0 below (1+ (length (network-hidden-layer-sizes nw)))
         collect (let* ((layer-sizes (append
                                      (list (network-input-layer-size nw))
                                      (network-hidden-layer-sizes nw)
                                      (list (network-output-layer-size nw))))
                        (layer-size (elt layer-sizes i))
                        (next-layer-size (elt layer-sizes (1+ i))))
                   (loop for j from 0 below layer-size
                         collect (loop for k from 0 below next-layer-size
                                       collect (generate-random-weight))))))
  ;; convert weights from nested lists to nested vector for fast access
  (setf (network-weights nw) (list->vector (network-weights nw))))

(defmethod print-object ((nw network) stream)
  (print-unreadable-object (nw stream :type t)
    (format stream "total weights: ~a"
            (reduce
             #'*
             (append (list (network-input-layer-size nw) (network-output-layer-size nw))
                     (network-hidden-layer-sizes nw))))))

(defun generate-random-weight ()
  (/ (- (random 2000) 1000) 1000))

(defun make-network (&key input-layer-size hidden-layer-sizes output-layer-size
                       learning-rate)
  (let ((nw (make-instance 'network
                           :input-layer-size input-layer-size
                           :hidden-layer-sizes hidden-layer-sizes
                           :output-layer-size output-layer-size
                           :learning-rate learning-rate)))
    (network-generate-weights nw)
    nw))
```

while implementing [backpropagation](20230503T165849--backpropagation__.org) i faced a challenge(s), can i simply iterate through the layers one by one like i did in `network-feedforward` and just handle them each at a time? at first i thought i couldnt, because i need to go through each possible path from the output layer to the input layer and update each weight, each weight's gradient depends on the gradient for the weight preceding it in the path, but after alot of thinking i realized that i could just store the gradients of each matrix of weights between 2 layers and update the gradient matrix as we go, this would probably work i think, but im more curious about how i would go about finding all paths and operating on them in the way i described. <br/>
we have a variable number of layers <img src="/ltximg/71a37455f85.svg" alt="\(n\)" style="height: 0.5629em; vertical-align: -0.0590em; display: inline-block" class="org-latex org-latex-inline" />, we definitely could iterate through these layers but on each iteration we only have access to the current layers units, and to construct a path from the input layer to the output layer we need to find <img src="/ltximg/71a37455f85.svg" alt="\(n\)" style="height: 0.5629em; vertical-align: -0.0590em; display: inline-block" class="org-latex org-latex-inline" /> units, one from each layer, so this cannot be done by a simple for loop that iterates through the layers one at a time, what about nested loops (one for each layer)? but how are we supposed to nest <img src="/ltximg/71a37455f85.svg" alt="\(n\)" style="height: 0.5629em; vertical-align: -0.0590em; display: inline-block" class="org-latex org-latex-inline" /> loops? this isnt possible, so maybe [recursion](20221105T001640--recursion__.org) could help? <br/>
say we did use recursion, and on each recurrence we hopped backwards into the previous layer in the network, how are we supposed to return the different units from a layer to a function call? well we dont need to, we could just call the function on the many units we have in that previous layer and pass it an index to say which unit we're referring to. <br/>

```lisp
(defmethod network-train ((nw network) xs ys)
  "train on the given data, xs is a list of vectors, each vector is treated as an input layer to the network, and ys is a list of vectors, each vector representing the output layer corresponding to the vector in xs thats at the same index"
  (loop for i from 0 below (length xs)
        do (let*
               ((x (elt xs i))
                (y (elt ys i))
                (layer-index (1+ (length (network-hidden-layer-sizes nw)))))
             (multiple-value-bind (activations unsquashed-activations)
                 (network-feedforward nw x)
               (loop
                 for unit-index
                 from 0
                   below (network-output-layer-size nw)
                 do (network-back-propagate
                     nw
                     layer-index
                     unit-index
                     (* 2 (- (elt (elt activations layer-index) unit-index)
                             (elt y unit-index)))
                     activations
                     unsquashed-activations))))))

(defmethod network-back-propagate ((nw network) layer-index unit-index gradient activations unsquashed-activations)
  "backpropagate the error through the network, each layers gradients depend on those of the layer succeeding it in the network"
  (let*
      ((predecessor-layer-weights (elt (network-weights nw) (1- layer-index)))
       (weights-into-unit
         (map
          'vector
          (lambda (predecessor-unit-weights)
            (elt predecessor-unit-weights unit-index))
          predecessor-layer-weights))
       (unit-activation (elt (elt activations layer-index) unit-index))
       (unit-input (elt (elt unsquashed-activations layer-index) unit-index)))
    (loop for predecessor-unit-index from 0 below (length predecessor-layer-weights)
          do (let*
                 ((weight (elt weights-into-unit predecessor-unit-index))
                  (predecessor-unit-activation
                    (elt (elt activations (1- layer-index))
                         predecessor-unit-index))
                  (gradient-to-back-propagate
                    (* gradient
                       (sigmoid-derivative unit-input)
                       weight))
                  (actual-gradient (* gradient
                                      (sigmoid-derivative unit-input)
                                      predecessor-unit-activation))
                  (weight-change (* (network-learning-rate nw)
                                    actual-gradient)))
               (if (> layer-index 1)
                   (network-back-propagate
                    nw
                    (1- layer-index)
                    predecessor-unit-index
                    gradient-to-back-propagate
                    activations
                    unsquashed-activations))
               (setf
                (elt (elt (elt (network-weights nw) (1- layer-index))
                          predecessor-unit-index)
                     unit-index)
                (- weight weight-change))))))
```

lets try training on some simple data <br/>

```lisp
(defparameter nw (make-network
                  :input-layer-size 3
                  :hidden-layer-sizes '(2)
                  :output-layer-size 1
                  :learning-rate 0.01))
(loop for i from 0 below 10000
      do (network-train nw '((0 0 1) (1 1 1) (1 0 1) (0 1 1)) '((0) (1) (1) (0))))
(multiple-value-bind (activations unsquashed-activations)
    (network-feedforward nw '(1 1 0))
  (print activations))
(multiple-value-bind (activations unsquashed-activations)
    (network-feedforward nw '(0 1 0))
  (print activations))
```

```text

#(#(1 1 0) #(0.84486073 0.013950213) #(0.9093194)) 
#(#(0 1 0) #(0.59563345 0.5919403) #(0.2278899)) 
```

it predicts correctly that the first number is the output number <br/>
using this code, i was getting 125k weight updates in 0.01 seconds (only 1 thread, no gpu), which i think is as far as i can get in terms of efficiency without some more advanced matrix algorithms, i tried python and got 1m (simple addition) operations in 0.04 seconds: <br/>

```bash
~ λ time python -c '
i=1
for i in range(999999):
  i = i + 1
print(i)'
999999
python -c ' i=1; for i in range(999999):   i = i + 1; print(i)'  0.04s user 0.00s system 98% cpu 0.045 total
```

we need  a method to keep to keep track of loss, aswell as visual feedback would be nice, see [common lisp graphics](20230521T163611--common-lisp-graphics__math.org) which ill be also using here <br/>

```lisp
(defmethod network-test ((nw network) xs ys)
  "test the given data (collection of vectors for input/output layers), return the total loss"
  (let ((loss 0))
    (loop for i from 0 below (length xs)
          do (let*
                 ((x (elt xs i))
                  (y (elt ys i)))
               (multiple-value-bind (activations unsquashed-activations)
                   (network-feedforward nw x)
                 (let* ((output-layer (elt activations (1- (length activations))))
                        (example-loss (expt (vector-sum (vector-sub y output-layer)) 2)))
                   (incf loss example-loss)))))
    loss))
```

we can use this function to plot the loss function after each epoch: <br/>

```lisp
(defun feedforward-network-first-test ()
  (defparameter *train-in* '((0 0 1) (1 1 1) (1 0 1) (0 1 1)))
  (defparameter *train-out* '((0) (1) (1) (0)))
  (defparameter *win* (make-instance 'window :width 800 :height 800))
  (defparameter *nw* (make-network
                      :input-layer-size 3
                      :hidden-layer-sizes '(2)
                      :output-layer-size 1
                      :learning-rate 0.01))
  (let* ((loss-history '())
         (epochs 10000)
         (axis (make-axis
                :min-x (/ (- epochs) 10)
                :max-x epochs
                :min-y -0.1
                :pos (make-point-2d :x 0 :y 0)
                :width (window-width *win*)
                :height (window-height *win*))))
    (loop for i from 0 below epochs
          do (network-train *nw* *train-in* *train-out*)
             (let ((loss (network-test *nw* *train-in* *train-out*)))
               (setf loss-history (append loss-history (list loss)))
               (if (> loss (axis-max-y axis))
                   (setf (axis-max-y axis) (* loss 1.1)))))
    ;; (setf (axis-min-y axis) (* loss 0.1)))))
    (let* ((loss-plot (make-discrete-plot
                       :points (map
                                'vector
                                (lambda (loss epoch) (make-point-2d :x epoch :y (elt loss-history epoch)))
                                loss-history
                                (loop for i from 0 below epochs by 100 collect i))))) ;; by 100 to reduce number of points to plot
      (axis-add-renderable axis loss-plot)
      (window-add-renderable *win* axis)
      (window-run *win*))))
```

although notice that here we're testing the network on the same data we trained it with, which generally isnt a good measure of the performance of the network, but this is just an example of how we can keep track of a property <br/>


## making use of gpu {#making-use-of-gpu}

before implementing this i started experimenting with [cuda in common lisp](20230614T171231--cuda-programming-in-common-lisp__math.org), one unfortunate thing is that `cl-cuda` doesnt allow using arbitrary data types like you would have in `C` with structs, we're gonna have to live with arrays of floats on the gpu <br/>
at first i was gonna implement the most straightforward approach, which is to run every backpropagation/feedforward operation by a single gpu thread, so that if we have 256 gpu threads, we'd be doing 256 backpropagation operations in parallel whereas on the cpu (with a single thread) we'd be doing only 1, i thought this would definitely work, until i actually thought about it and then realized, how the hell can this be a thread-safe process? each thread is modifying every weight in the network and many threads are running at once, it would be a nightmare to actually use such an approach, and a miracle if it even works as intended, so i had to think of something else, something thread-safe.

