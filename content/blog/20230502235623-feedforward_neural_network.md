+++
title = "feedforward neural network"
author = ["mahmood"]
description = "studying and building neural networks from scratch"
date = 2023-05-02T00:00:00+03:00
tags = ["math", "public"]
draft = false
+++

<div class="note">

feedforward <b>neural network</b>s is a wider term than discussed here, whats discussed here really is a specific type we call a **simple multilayer perceptron**, but this serves as an introductory to other types of more complex networks <br/>

</div>

a **feedforward network** has connections only in one direction. each node computes a <b>function</b> of its inputs and passes the result to its successors in the network. information flows through the network from the input nodes to the output nodes, and there are no loops. <br/>
a unit calculates the weighted sum of the inputs from predecessor nodes and then applies a nonlinear function to produce its output. let <img src="/ltximg/3080c00b9b6.svg" alt="\(a_j\)" style="height: 0.9418em; vertical-align: -0.4437em; display: inline-block" class="org-latex org-latex-inline" /> denote the output of unit <img src="/ltximg/c8f49d8321d.svg" alt="\(j\)" style="height: 1.0338em; vertical-align: -0.3040em; display: inline-block" class="org-latex org-latex-inline" /> and let <img src="/ltximg/d9c30ae8212.svg" alt="\(w_{i,j}\)" style="height: 0.9418em; vertical-align: -0.4437em; display: inline-block" class="org-latex org-latex-inline" /> be the weight attached to the link from unit <img src="/ltximg/bf4306c8d56.svg" alt="\(i\)" style="height: 0.7866em; vertical-align: -0.0568em; display: inline-block" class="org-latex org-latex-inline" /> to unit <img src="/ltximg/c8f49d8321d.svg" alt="\(j\)" style="height: 1.0338em; vertical-align: -0.3040em; display: inline-block" class="org-latex org-latex-inline" />; then we have <br/>


<div id="org4e91e70" class="equation-container">
<span class="equation">
<img src="/ltximg/29584ee0937.svg" alt="\begin{equation}
  a_j = g_j\left(\sum_{i} w_{i,j}a_i\right) = g_j(in_j) 
\end{equation}
" style="height: 3.2629em; vertical-align: -1.3792em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

where <img src="/ltximg/0f93e392be5.svg" alt="\(g_j\)" style="height: 0.9418em; vertical-align: -0.4437em; display: inline-block" class="org-latex org-latex-inline" /> is a nonlinear <b>activation function</b> associated with unit <img src="/ltximg/c8f49d8321d.svg" alt="\(j\)" style="height: 1.0338em; vertical-align: -0.3040em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/e892d04a2f0.svg" alt="\(in_j\)" style="height: 1.1735em; vertical-align: -0.4437em; display: inline-block" class="org-latex org-latex-inline" /> is the weighted sum of the inputs to unit <img src="/ltximg/c8f49d8321d.svg" alt="\(j\)" style="height: 1.0338em; vertical-align: -0.3040em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
each unit has an extra input from a dummy unit 0 that is fixed to +1 and a weight <img src="/ltximg/426e89c34ad.svg" alt="\(w_{0,j}\)" style="height: 0.9418em; vertical-align: -0.4437em; display: inline-block" class="org-latex org-latex-inline" /> for that input. this allows the total weighted input <img src="/ltximg/e892d04a2f0.svg" alt="\(in_j\)" style="height: 1.1735em; vertical-align: -0.4437em; display: inline-block" class="org-latex org-latex-inline" /> to unit <img src="/ltximg/c8f49d8321d.svg" alt="\(j\)" style="height: 1.0338em; vertical-align: -0.3040em; display: inline-block" class="org-latex org-latex-inline" /> to be nonzero even when the outputs of the preceding layer are all zero. with this convention, we can write the preceding equation in vector form: <br/>
<img src="/ltximg/d60fd568afd.svg" alt="\[ a_j = g_j(\brm{w}^T\brm{x}) \]" style="height: 1.6689em; display: block" class="org-latex org-latex-block" /> <br/>
where <img src="/ltximg/37d9490973c.svg" alt="\(\brm{w}\)" style="height: 0.5477em; vertical-align: -0.0536em; display: inline-block" class="org-latex org-latex-inline" /> is the <b>vector</b> of weights leading into unit <img src="/ltximg/c8f49d8321d.svg" alt="\(j\)" style="height: 1.0338em; vertical-align: -0.3040em; display: inline-block" class="org-latex org-latex-inline" /> (including <img src="/ltximg/426e89c34ad.svg" alt="\(w_{0,j}\)" style="height: 0.9418em; vertical-align: -0.4437em; display: inline-block" class="org-latex org-latex-inline" />) and <img src="/ltximg/1e3565f7130.svg" alt="\(\brm{x}\)" style="height: 0.5477em; vertical-align: -0.0536em; display: inline-block" class="org-latex org-latex-inline" /> is the vector of inputs to unit <img src="/ltximg/c8f49d8321d.svg" alt="\(j\)" style="height: 1.0338em; vertical-align: -0.3040em; display: inline-block" class="org-latex org-latex-inline" /> (including the +1) <br/>
training a neural network consists of modifying the network’s parameters so as to minimize the <b>loss function</b> on the training set. in principle, any kind of optimization algorithm could be used. in practice, modern neural networks are almost always trained with some variant of <b>stochastic gradient descent</b>. <br/>
here, the goal is to minimize the loss <img src="/ltximg/b34c2ce9b8b.svg" alt="\(L(\brm{w})\)" style="height: 1.0725em; vertical-align: -0.2971em; display: inline-block" class="org-latex org-latex-inline" />, where <img src="/ltximg/37d9490973c.svg" alt="\(\brm{w}\)" style="height: 0.5477em; vertical-align: -0.0536em; display: inline-block" class="org-latex org-latex-inline" /> represents all of the parameters of the network (all the weights). each update step in the gradient descent process looks like this: <br/>
<img src="/ltximg/94c444f1802.svg" alt="\[ \brm{w} \gets \brm{w} - \alpha\nabla_{\brm{w}}L(\brm{w}) \]" style="height: 1.5223em; display: block" class="org-latex org-latex-block" /> <br/>

where <img src="/ltximg/ffe6b3ee4a6.svg" alt="\(\alpha\)" style="height: 0.5629em; vertical-align: -0.0649em; display: inline-block" class="org-latex org-latex-inline" /> is the <b>learning rate</b>. for standard gradient descent, the loss function <img src="/ltximg/76e8fedbbab.svg" alt="\(L\)" style="height: 0.7640em; vertical-align: -0.0568em; display: inline-block" class="org-latex org-latex-inline" /> is defined with respect to the entire training set. for stochastic gradient descent, it is defined with respect to a minibatch of <img src="/ltximg/1cfcd9e60d0.svg" alt="\(m\)" style="height: 0.5548em; vertical-align: -0.0568em; display: inline-block" class="org-latex org-latex-inline" /> examples chosen randomly at each step. <br/>
the change in a single weight is defined as: <br/>
<img src="/ltximg/5b14956b232.svg" alt="\[ w \gets w - \alpha \frac{\partial L}{\partial w} \]" style="height: 2.2906em; display: block" class="org-latex org-latex-block" /> <br/>
given a single training example <img src="/ltximg/5f6d1b447d8.svg" alt="\((\brm{x},y)\)" style="height: 1.0911em; vertical-align: -0.3157em; display: inline-block" class="org-latex org-latex-inline" />, let <img src="/ltximg/888e5cebcc9.svg" alt="\(\hat y=a_k\)" style="height: 1.0303em; vertical-align: -0.3157em; display: inline-block" class="org-latex org-latex-inline" /> of the output layer. <img src="/ltximg/88d7446f795.svg" alt="\(\hat y\)" style="height: 1.0303em; vertical-align: -0.3157em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/df01f60c7cb.svg" alt="\(y\)" style="height: 0.8138em; vertical-align: -0.3157em; display: inline-block" class="org-latex org-latex-inline" /> are both constant throughout the back-propagation process (independent of other variables), as we're really just trying to get the output <img src="/ltximg/88d7446f795.svg" alt="\(\hat y\)" style="height: 1.0303em; vertical-align: -0.3157em; display: inline-block" class="org-latex org-latex-inline" /> to be as close to <img src="/ltximg/df01f60c7cb.svg" alt="\(y\)" style="height: 0.8138em; vertical-align: -0.3157em; display: inline-block" class="org-latex org-latex-inline" /> as possible on future feedforwarding runs. <br/>
denoting the output layer by <img src="/ltximg/c212fdbf5eb.svg" alt="\(q\)" style="height: 0.8020em; vertical-align: -0.3040em; display: inline-block" class="org-latex org-latex-inline" />, the output of an aribtrary unit <img src="/ltximg/4f4ef6bff6f.svg" alt="\(k\)" style="height: 0.8167em; vertical-align: -0.0649em; display: inline-block" class="org-latex org-latex-inline" /> in the output layer is defined as: <br/>
<img src="/ltximg/f9591770e28.svg" alt="\[ \hat y = g^q(in_k^q) \]" style="height: 1.6400em; display: block" class="org-latex org-latex-block" /> <br/>
such that a superscript denotes the number of the layer that an expression is associated with. <br/>
assuming the squared cost function (which we would usually denote by <img src="/ltximg/8567465baee.svg" alt="\(L_2\)" style="height: 0.9637em; vertical-align: -0.2564em; display: inline-block" class="org-latex org-latex-inline" /> but here im using <img src="/ltximg/ca270f6d692.svg" alt="\(L_k\)" style="height: 0.9693em; vertical-align: -0.2620em; display: inline-block" class="org-latex org-latex-inline" /> for something else), the output of the cost function for the <img src="/ltximg/4f4ef6bff6f.svg" alt="\(k\)" style="height: 0.8167em; vertical-align: -0.0649em; display: inline-block" class="org-latex org-latex-inline" />-th unit in the output layer would be: <br/>
<img src="/ltximg/f2fc064b79e.svg" alt="\[ L_k = (y - \hat y)^2 \]" style="height: 1.5409em; display: block" class="org-latex org-latex-block" /> <br/>
after the first application of the <b>derivative chain rule</b> to the cost function with respect to the weight that connects an arbitrary unit <img src="/ltximg/c8f49d8321d.svg" alt="\(j\)" style="height: 1.0338em; vertical-align: -0.3040em; display: inline-block" class="org-latex org-latex-inline" /> in the last hidden layer to an arbitrary unit <img src="/ltximg/4f4ef6bff6f.svg" alt="\(k\)" style="height: 0.8167em; vertical-align: -0.0649em; display: inline-block" class="org-latex org-latex-inline" /> in the output layer we get: <br/>
<img src="/ltximg/21cb2bf0b8b.svg" alt="\[ \frac{\partial L}{\partial w^q_{jk}} = -2(y-\hat y) \frac{\partial {g^q(in_k^q)}}{\partial w^q_{jk}} \]" style="height: 3.2745em; display: block" class="org-latex org-latex-block" /> <br/>

<div class="note" id="note:weight_superscript">

a weight that is between a layer <img src="/ltximg/e8ce5fe4da1.svg" alt="\(l-1\)" style="height: 0.8094em; vertical-align: -0.0575em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/815c000e082.svg" alt="\(l\)" style="height: 0.8086em; vertical-align: -0.0568em; display: inline-block" class="org-latex org-latex-inline" /> is denoted by <img src="/ltximg/9f442e1019a.svg" alt="\(w^l_x\)" style="height: 1.2340em; vertical-align: -0.2951em; display: inline-block" class="org-latex org-latex-inline" /> and not <img src="/ltximg/1b91afb47a8.svg" alt="\(w^{l-1}_x\)" style="height: 1.2340em; vertical-align: -0.2951em; display: inline-block" class="org-latex org-latex-inline" /> because it actually belongs to the <img src="/ltximg/815c000e082.svg" alt="\(l\)" style="height: 0.8086em; vertical-align: -0.0568em; display: inline-block" class="org-latex org-latex-inline" />th layer, even if it comes out of the <img src="/ltximg/e8ce5fe4da1.svg" alt="\(l-1\)" style="height: 0.8094em; vertical-align: -0.0575em; display: inline-block" class="org-latex org-latex-inline" />th layer, this means that weights with a superscript of 1, e.g. <img src="/ltximg/68cee94b757.svg" alt="\(w^1_x\)" style="height: 1.1930em; vertical-align: -0.2951em; display: inline-block" class="org-latex org-latex-inline" /> arent defined, because the first layer (input layer) has no weights. <br/>

</div>

applying the chain rule again we get: <br/>
<img src="/ltximg/72e0ac7caf3.svg" alt="\[ \frac{\partial L}{\partial w^q_{jk}} = -2(y-\hat y) {g^q}'(in_k^q) \frac{\partial in_k^q}{w^q_{jk}} \]" style="height: 3.2745em; display: block" class="org-latex org-latex-block" /> <br/>
we apply the chain rule again to get the final gradient formula for <img src="/ltximg/ba03e0422bc.svg" alt="\(w^q_{jk}\)" style="height: 1.5568em; vertical-align: -0.5965em; display: inline-block" class="org-latex org-latex-inline" />: <br/>


<div id="orge75adfc" class="equation-container">
<span class="equation">
<img src="/ltximg/aa2c81101f9.svg" alt="\begin{equation}
  \frac{\partial L}{\partial w^q_{jk}} = \underbrace{-2(y-\hat y){g^q}'(in_k^q)}_{\text{perceived error, } \Delta_k^q} a_j^{q-1}
\end{equation}
" style="height: 4.3071em; vertical-align: -2.7537em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

during backpropagation, a part of a weights gradient, which we define as **perceived error** or a **delta**, is back-propagated to preceding layers in the network because it appears in the formulas of the partial derivatives for weights that exist in these previous layers, we denote by <img src="/ltximg/b6871eabda0.svg" alt="\(\Delta_k^l\)" style="height: 1.3801em; vertical-align: -0.4148em; display: inline-block" class="org-latex org-latex-inline" /> the perceived error of the <img src="/ltximg/4f4ef6bff6f.svg" alt="\(k\)" style="height: 0.8167em; vertical-align: -0.0649em; display: inline-block" class="org-latex org-latex-inline" />-th unit in the <img src="/ltximg/815c000e082.svg" alt="\(l\)" style="height: 0.8086em; vertical-align: -0.0568em; display: inline-block" class="org-latex org-latex-inline" />-th layer. in the case of a unit in the output layer, its a simple formula: <br/>
<img src="/ltximg/72280473e14.svg" alt="\[ \Delta_k^q = -2(y-\hat y){g^q}'(in_k^q) \]" style="height: 1.6400em; display: block" class="org-latex org-latex-block" /> <br/>
which is, as you might've noticed, just a part of the equation , the beginning of the expression, <img src="/ltximg/0ada0a0c203.svg" alt="\(-2(y-\hat y)\)" style="height: 1.0911em; vertical-align: -0.3157em; display: inline-block" class="org-latex org-latex-inline" />, doesnt change, but as we move backwards through the layers, the pattern in the second part of the equation <img src="/ltximg/f10053359e6.svg" alt="\({g^l}'(in_k^l)\)" style="height: 1.4387em; vertical-align: -0.4148em; display: inline-block" class="org-latex org-latex-inline" /> repeats over and over again (demonstrated in ), which is why the concept of a perceived error is quite helpful. with this in mind, the perceived error of a unit <img src="/ltximg/c8f49d8321d.svg" alt="\(j\)" style="height: 1.0338em; vertical-align: -0.3040em; display: inline-block" class="org-latex org-latex-inline" /> in the last hidden layer <img src="/ltximg/7ca2d35b3a2.svg" alt="\(q-1\)" style="height: 1.0019em; vertical-align: -0.3040em; display: inline-block" class="org-latex org-latex-inline" /> would be: <br/>
<img src="/ltximg/f8e46fb5ff6.svg" alt="\[ \Delta_j^{q-1} = \Delta_k^qw^q_{jk}{g^{q-1}}'(in_j^{q-1}) = -2(y-\hat y){g^q}'(in_k^q)w_{jk}^q{g^{q-1}}'(in_j^{q-1}) \]" style="height: 1.8217em; display: block" class="org-latex org-latex-block" /> <br/>
where <img src="/ltximg/4f4ef6bff6f.svg" alt="\(k\)" style="height: 0.8167em; vertical-align: -0.0649em; display: inline-block" class="org-latex org-latex-inline" /> refers to the number of the unit in the succeeding layer that the back-propagated gradient message originated from. <br/>
and in general form, the perceived error for an arbitrary unit <img src="/ltximg/4f4ef6bff6f.svg" alt="\(k\)" style="height: 0.8167em; vertical-align: -0.0649em; display: inline-block" class="org-latex org-latex-inline" /> in an arbitrary hidden layer <img src="/ltximg/815c000e082.svg" alt="\(l\)" style="height: 0.8086em; vertical-align: -0.0568em; display: inline-block" class="org-latex org-latex-inline" />, is defined as: <br/>


<div id="orge6d024c" class="equation-container">
<span class="equation">
<img src="/ltximg/0974edf57fd.svg" alt="\begin{equation}
  \Delta_k^l = \Delta_c^{l+1}w^{l+1}_{kc}{g^l}'(in_k^l) 
\end{equation}
" style="height: 1.6179em; vertical-align: -0.3927em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

where <img src="/ltximg/3c1773e972e.svg" alt="\(c\)" style="height: 0.5548em; vertical-align: -0.0568em; display: inline-block" class="org-latex org-latex-inline" /> is some arbitrary unit in <img src="/ltximg/07ad1245756.svg" alt="\(l+1\)" style="height: 0.8094em; vertical-align: -0.0575em; display: inline-block" class="org-latex org-latex-inline" /> that the message was propagated back from. <br/>
for a weight that connects the unit <img src="/ltximg/c8f49d8321d.svg" alt="\(j\)" style="height: 1.0338em; vertical-align: -0.3040em; display: inline-block" class="org-latex org-latex-inline" /> of the hidden layer <img src="/ltximg/e8ce5fe4da1.svg" alt="\(l-1\)" style="height: 0.8094em; vertical-align: -0.0575em; display: inline-block" class="org-latex org-latex-inline" /> to the unit <img src="/ltximg/4f4ef6bff6f.svg" alt="\(k\)" style="height: 0.8167em; vertical-align: -0.0649em; display: inline-block" class="org-latex org-latex-inline" /> of the next hidden layer <img src="/ltximg/815c000e082.svg" alt="\(l\)" style="height: 0.8086em; vertical-align: -0.0568em; display: inline-block" class="org-latex org-latex-inline" />, the formula is defined in terms of the perceived error of the unit <img src="/ltximg/73d36a1d364.svg" alt="\(k^l\)" style="height: 1.0038em; vertical-align: -0.0649em; display: inline-block" class="org-latex org-latex-inline" /> (weight originates from unit <img src="/ltximg/8824bd815f4.svg" alt="\(j^{l-1}\)" style="height: 1.2429em; vertical-align: -0.3040em; display: inline-block" class="org-latex org-latex-inline" /> and connects to unit <img src="/ltximg/73d36a1d364.svg" alt="\(k^l\)" style="height: 1.0038em; vertical-align: -0.0649em; display: inline-block" class="org-latex org-latex-inline" />, so it belongs to <img src="/ltximg/73d36a1d364.svg" alt="\(k^l\)" style="height: 1.0038em; vertical-align: -0.0649em; display: inline-block" class="org-latex org-latex-inline" />): <br/>
<img src="/ltximg/13a3e3b8da4.svg" alt="\[ \frac{\partial L}{\partial w^l_{jk}} = \Delta_k^l a_j^{l-1} \]" style="height: 2.9926em; display: block" class="org-latex org-latex-block" /> <br/>
the back-propagation process passes messages back along each link in the network. at each node, the incoming messages are collected and new messages are calculated to pass back to the next layer. <br/>
overall, the process of learning the weights of the network is usually one that exhibits diminishing returns. we run until it is no longer practical to decrease the test error by running longer. usually this does not mean we have reached a global or even a local minimum of the loss function. instead, it means we would have to make an impractically large number of very small steps to continue reducing the cost, or that additional steps would only cause overfitting, or that estimates of the gradient are too inaccurate to make further progress. <br/>

<div class="my_example" id="ex:ex1">

citation: (Peter Norvig, Stuart J. Russell, 2020) <br/>
consider the following network <br/>

<a id="org43b04f5"></a>

![](/ox-hugo/network-graph.png) <br/>
coupling multiple units together into a network creates a complex function that is a composition of the algebraic expressions represented by the individual units. for example, the network above represents a function <img src="/ltximg/ba0c9b20993.svg" alt="\(h_{\brm{w}}(\brm{x})\)" style="height: 1.0725em; vertical-align: -0.2971em; display: inline-block" class="org-latex org-latex-inline" />, parameterized by weights <img src="/ltximg/37d9490973c.svg" alt="\(\brm{w}\)" style="height: 0.5477em; vertical-align: -0.0536em; display: inline-block" class="org-latex org-latex-inline" />, that maps a two-element input vector <img src="/ltximg/1e3565f7130.svg" alt="\(\brm{x}\)" style="height: 0.5477em; vertical-align: -0.0536em; display: inline-block" class="org-latex org-latex-inline" /> to a scalar output value <img src="/ltximg/88d7446f795.svg" alt="\(\hat y\)" style="height: 1.0303em; vertical-align: -0.3157em; display: inline-block" class="org-latex org-latex-inline" />. the internal structure of the function mirrors the structure of the network. for example we can write an expression for the output <img src="/ltximg/88d7446f795.svg" alt="\(\hat y\)" style="height: 1.0303em; vertical-align: -0.3157em; display: inline-block" class="org-latex org-latex-inline" /> as follows: <br/>


<div id="org3074490" class="equation-container">
<span class="equation">
<img src="/ltximg/b74c37dd814.svg" alt="\begin{align*}
  \hat y &amp;amp;= g_5(in_5) = g_5(w_{0,5} + w_{3,5}a_3 + w_{4,5}a_4)\\
  &amp;amp;= g_5(w_{0,5} + w_{3,5}g_3(in_3) + w_{4,5}g_4(in_4))\\
  &amp;amp;= g_5(w_{0,5} + w_{3,5}g_3(w_{0,3} + w_{1,3}x_1 + w_{2,3}x_2) + w_{4,5}g_4(w_{0,4} + w_{1,4}x_1 + w_{2,4}x_2))
\end{align*}
" style="height: 4.5672em; vertical-align: -0.4020em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

thus, we have the output <img src="/ltximg/88d7446f795.svg" alt="\(\hat y\)" style="height: 1.0303em; vertical-align: -0.3157em; display: inline-block" class="org-latex org-latex-inline" /> expressed as a function <img src="/ltximg/ba0c9b20993.svg" alt="\(h_{\brm{w}}(\brm{x})\)" style="height: 1.0725em; vertical-align: -0.2971em; display: inline-block" class="org-latex org-latex-inline" /> of the inputs and the weights. <br/>
we generally use <img src="/ltximg/bd2b129e844.svg" alt="\(\brm{W}\)" style="height: 0.7618em; vertical-align: -0.0536em; display: inline-block" class="org-latex org-latex-inline" /> to denote a weight <b>matrix</b>; <img src="/ltximg/cd6585632c9.svg" alt="\(\brm{W}^{(i)}\)" style="height: 1.0262em; vertical-align: -0.0536em; display: inline-block" class="org-latex org-latex-inline" /> denotes the weights in the i'th layer, let <img src="/ltximg/6a8fc561f87.svg" alt="\(\brm{g}^{(i)}\)" style="height: 1.2549em; vertical-align: -0.2981em; display: inline-block" class="org-latex org-latex-inline" /> denote the activation functions in the i'th layer, then, for example, an entire network of 1 input layer, 1 hidden layer, and an output node can be written as follows: <br/>
<img src="/ltximg/a3afc9fd88c.svg" alt="\[ h_{\brm{w}}(\brm{x}) = \brm{g}^{(2)}(\brm{W}^{(2)}\brm{g}^{(1)}(\brm{W}^{(1)}\brm{x})) \]" style="height: 1.5233em; display: block" class="org-latex org-latex-block" /> <br/>
for the network to learn, we need to gradually adjust the weights to fit the learning data, using the <b>gradient descent</b> algorithm <br/>
first we apply the loss function, for simplicity the squared loss function is used here, we will calculate the gradient for the network we [proposed](#org43b04f5) with respect to a single training example <img src="/ltximg/5f6d1b447d8.svg" alt="\((\brm{x},y)\)" style="height: 1.0911em; vertical-align: -0.3157em; display: inline-block" class="org-latex org-latex-inline" />. (for multiple examples, the gradient is just the sum of the gradients for the individual examples.) the network outputs a prediction <img src="/ltximg/17b702825f8.svg" alt="\(\hat y = h_{\brm{w}}(\brm{x})\)" style="height: 1.0911em; vertical-align: -0.3157em; display: inline-block" class="org-latex org-latex-inline" /> and the true value is <img src="/ltximg/df01f60c7cb.svg" alt="\(y\)" style="height: 0.8138em; vertical-align: -0.3157em; display: inline-block" class="org-latex org-latex-inline" />, so we have <br/>
<img src="/ltximg/a66f0256dd3.svg" alt="\[ Loss(h_{\brm{w}}) = L_2(y,h_{\brm{x}}(\brm{x})) = ||y-h_{\brm{w}}(\brm{x})||^2 = (y-\hat y)^2 \]" style="height: 1.5409em; display: block" class="org-latex org-latex-block" /> <br/>
we compute the gradient of the loss with respect to the weights, we use the chain rule, we'll start with the easy case: a weight such as <img src="/ltximg/21600aca3f4.svg" alt="\(w_{3,5}\)" style="height: 0.8464em; vertical-align: -0.3484em; display: inline-block" class="org-latex org-latex-inline" /> that is connected to the output unit. we operate directly on the network-defining expressions we proposed [here](#org3074490): <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/79156363e67.svg" alt="\begin{align*}
  \frac{\partial}{\partial w_{3,5}}Loss(h_{\brm{w}}) &amp;amp;= \frac{\partial}{\partial w_{3,5}}(y-\hat y)^2 = -2(y-\hat y)\frac{\partial \hat y}{\partial w_{3,5}}\\
  &amp;amp;= -2(y-\hat y)\frac{\partial}{\partial w_{3,5}}g_5(in_5) = -2(y-\hat y)g'_5(in_5)\frac{\partial}{\partial w_{3,5}}in_5\\
  &amp;amp;= -2(y-\hat y)g'_5(in_5)\frac{\partial}{\partial w_{3,5}}(w_{0,5}+w_{3,5}a_3+w_{4,5}a_4)\\
  &amp;amp;= -2(y-\hat y)g'_5(in_5)a_3
\end{align*}
" style="height: 9.7013em; vertical-align: -0.4020em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

the slightly more difficult case involves a weight such as <img src="/ltximg/b942198bc96.svg" alt="\(w_{1,3}\)" style="height: 0.8464em; vertical-align: -0.3484em; display: inline-block" class="org-latex org-latex-inline" /> that is not directly connected to the output unit. here, we have to apply the chain rule one more time. the first few steps are identical, so we omit them: <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/63c5d44f29a.svg" alt="\begin{align*}
  \frac{\partial}{\partial w_{1,3}}Loss(h_{\brm{w}}) &amp;amp;= -2(y-\hat y)g'_5(in_5)\frac{\partial}{\partial w_{1,3}}(w_{0,5}+w_{3,5}a_3+w_{4,5}a_4)\\
  &amp;amp;= -2(y-\hat y)g'_5(in_5)w_{3,5}\frac{\partial}{\partial w_{1,3}}a_3\\
  &amp;amp;= -2(y-\hat y)g'_5(in_5)w_{3,5}\frac{\partial}{\partial w_{1,3}}g_3(in_3)\\
  &amp;amp;= -2(y-\hat y)g'_5(in_5)w_{3,5}g'_3(in_3)\frac{\partial}{\partial w_{1,3}}in_3\\
  &amp;amp;= -2(y-\hat y)g'_5(in_5)w_{3,5}g'_3(in_3)\frac{\partial}{\partial w_{1,3}}(w_{0,3}+w_{1,3}x_1+w_{2,3}x_2)\\
  &amp;amp;= -2(y-\hat y)g'_5(in_5)w_{3,5}g'_3(in_3)x_1
\end{align*}
" style="height: 15.2213em; vertical-align: -0.4020em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

here, <img src="/ltximg/ee78a724f34.svg" alt="\(\Delta_5=2(\hat y-y)g'_5(in_5)\)" style="height: 1.1662em; vertical-align: -0.3683em; display: inline-block" class="org-latex org-latex-inline" /> is the perceived error unit 5, and the gradient with respect to <img src="/ltximg/21600aca3f4.svg" alt="\(w_{3,5}\)" style="height: 0.8464em; vertical-align: -0.3484em; display: inline-block" class="org-latex org-latex-inline" /> is just <img src="/ltximg/19f10f82c9d.svg" alt="\(\Delta_5a_3\)" style="height: 0.9989em; vertical-align: -0.2564em; display: inline-block" class="org-latex org-latex-inline" />. this makes perfect sense: if <img src="/ltximg/f792916a46e.svg" alt="\(\Delta_5\)" style="height: 0.9989em; vertical-align: -0.2564em; display: inline-block" class="org-latex org-latex-inline" /> is positive, that means <img src="/ltximg/88d7446f795.svg" alt="\(\hat y\)" style="height: 1.0303em; vertical-align: -0.3157em; display: inline-block" class="org-latex org-latex-inline" /> is too big (<img src="/ltximg/d50025c2719.svg" alt="\(g'\)" style="height: 1.0813em; vertical-align: -0.3040em; display: inline-block" class="org-latex org-latex-inline" /> is always nonnegative); if <img src="/ltximg/e8074e8c9b0.svg" alt="\(a_3\)" style="height: 0.7544em; vertical-align: -0.2564em; display: inline-block" class="org-latex org-latex-inline" /> is also positive, then increasing <img src="/ltximg/21600aca3f4.svg" alt="\(w_{3,5}\)" style="height: 0.8464em; vertical-align: -0.3484em; display: inline-block" class="org-latex org-latex-inline" /> will only make things worse, whereas if <img src="/ltximg/e8074e8c9b0.svg" alt="\(a_3\)" style="height: 0.7544em; vertical-align: -0.2564em; display: inline-block" class="org-latex org-latex-inline" /> is negative, then increasing <img src="/ltximg/21600aca3f4.svg" alt="\(w_{3,5}\)" style="height: 0.8464em; vertical-align: -0.3484em; display: inline-block" class="org-latex org-latex-inline" /> will reduce the error. the magnitude of <img src="/ltximg/e8074e8c9b0.svg" alt="\(a_3\)" style="height: 0.7544em; vertical-align: -0.2564em; display: inline-block" class="org-latex org-latex-inline" /> also matters: if <img src="/ltximg/e8074e8c9b0.svg" alt="\(a_3\)" style="height: 0.7544em; vertical-align: -0.2564em; display: inline-block" class="org-latex org-latex-inline" /> is small for this training example, then<img src="/ltximg/21600aca3f4.svg" alt="\(w_{3,5}\)" style="height: 0.8464em; vertical-align: -0.3484em; display: inline-block" class="org-latex org-latex-inline" /> didnt play a major role in producing the error and doesnt need to be changed much. <br/>
we also know <img src="/ltximg/203b8d61ecb.svg" alt="\(\Delta_3=\Delta_5w_{3,5}g'_3(in_3)\)" style="height: 1.1662em; vertical-align: -0.3683em; display: inline-block" class="org-latex org-latex-inline" />, and the gradient for <img src="/ltximg/b942198bc96.svg" alt="\(w_{1,3}\)" style="height: 0.8464em; vertical-align: -0.3484em; display: inline-block" class="org-latex org-latex-inline" /> becomes just <img src="/ltximg/d464df8c9e1.svg" alt="\(\Delta_3x_1\)" style="height: 0.9989em; vertical-align: -0.2564em; display: inline-block" class="org-latex org-latex-inline" />. thus, the perceived error at the input to unit 3 is the perceived error at the input to unit 5, multiplied by information along the path from 5 back to 3. this phenomenon is completely general, and gives rise to the term <b>back-propagation</b> for the way that the error at the output is passed back through the network. <br/>

another important characteristic of these gradient expressions is that they have as factors the local derivatives <img src="/ltximg/00a246617ac.svg" alt="\(g'_j(in_j)\)" style="height: 1.3777em; vertical-align: -0.5798em; display: inline-block" class="org-latex org-latex-inline" />. as noted earlier, these derivatives are always nonnegative, but they can be very close to zero (in the case of the sigmoid, softplus, and tanh functions) or exactly zero (in the case of ReLUs), if the inputs from the training example in question happen to put unit <img src="/ltximg/c8f49d8321d.svg" alt="\(j\)" style="height: 1.0338em; vertical-align: -0.3040em; display: inline-block" class="org-latex org-latex-inline" /> in the flat operating region. if the derivative <img src="/ltximg/bd6fd9407fc.svg" alt="\(g'_j\)" style="height: 1.3777em; vertical-align: -0.5798em; display: inline-block" class="org-latex org-latex-inline" /> is small or zero, that means that changing the weights leading into unit <img src="/ltximg/c8f49d8321d.svg" alt="\(j\)" style="height: 1.0338em; vertical-align: -0.3040em; display: inline-block" class="org-latex org-latex-inline" /> will have a negligible effect on its output. as a result, deep networks with many layers may suffer from a <b>vanishing gradient</b>--the error signals are extinguished altogether as they are propagated back through the network. <br/>

</div>

but how do we pass the data into the input layer? and what do the values coming out of the output layer mean? the following paragraphs explain how we **encode** data to pass it into the input layer, and how we treat the values resulting from the output layer. <br/>
the encoding of input data is usually straightforward, at least for the case of factored data where each training example contains values for <img src="/ltximg/1cc8876c44d.svg" alt="\(n\)" style="height: 0.5548em; vertical-align: -0.0568em; display: inline-block" class="org-latex org-latex-inline" /> input attributes. if the attributes are boolean, we have <img src="/ltximg/1cc8876c44d.svg" alt="\(n\)" style="height: 0.5548em; vertical-align: -0.0568em; display: inline-block" class="org-latex org-latex-inline" /> input nodes; usually false is mapped to an input of 0 and true is mapped to 1, although sometimes -1 and +1 are used. numeric attributes, whether integer or real-valued, are typically used as is, although they may be scaled to fit within a fixed range; if the magnitudes for different examples vary enormously, the values can be mapped onto a log scale. <br/>

images do not quite fit into the category of factored data; although an RGB image of size <img src="/ltximg/744f4401734.svg" alt="\(X \times Y\)" style="height: 0.7640em; vertical-align: -0.0568em; display: inline-block" class="org-latex org-latex-inline" /> pixels can be thought of as <img src="/ltximg/0a28521b926.svg" alt="\(3XY\)" style="height: 0.7648em; vertical-align: -0.0575em; display: inline-block" class="org-latex org-latex-inline" /> integer-valued attributes (typically with values in the range <img src="/ltximg/9888351d4f7.svg" alt="\(\{0,\dots,255\}\)" style="height: 1.0333em; vertical-align: -0.2618em; display: inline-block" class="org-latex org-latex-inline" />), this would ignore the fact that the RGB triplets belong to the same pixel in the image and the fact that pixel adjacency really matters. of course, we can map adjacent pixels onto adjacent input nodes in the network, but the meaning of adjacency is completely lost if the internal layers of the network are fully connected. in practice, networks used with image data have array-like internal structures that aim to reflect the semantics of adjacency. <br/>
categorical attributes with more than two values are usually encoded using the so-called **one-hot encoding**. an attribute with <img src="/ltximg/0400ee8e1d7.svg" alt="\(d\)" style="height: 0.8086em; vertical-align: -0.0568em; display: inline-block" class="org-latex org-latex-inline" /> possible values is represented by <img src="/ltximg/0400ee8e1d7.svg" alt="\(d\)" style="height: 0.8086em; vertical-align: -0.0568em; display: inline-block" class="org-latex org-latex-inline" /> separate input bits. for any given value, the corresponding input bit is set to 1 and all the others are set to 0. this generally works better than mapping the values to integers. <br/>
on the output side of the network, the problem of encoding the raw data values into actual values <img src="/ltximg/df01f60c7cb.svg" alt="\(y\)" style="height: 0.8138em; vertical-align: -0.3157em; display: inline-block" class="org-latex org-latex-inline" /> for the output nodes of the graph is much the same as the input encoding problem. for example, if the network is trying to predict a variable named weather, which has values {sun,rain,cloud,snow}, we would use a one-hot encoding with four bits. <br/>
so much for the data values <img src="/ltximg/746d72b6e11.svg" alt="\(\brm{y}\)" style="height: 0.7922em; vertical-align: -0.2981em; display: inline-block" class="org-latex org-latex-inline" />. what about the prediction <img src="/ltximg/3d6b06e77d5.svg" alt="\(\hat  y\)" style="height: 1.0303em; vertical-align: -0.3157em; display: inline-block" class="org-latex org-latex-inline" />? ideally, it would exactly match the desired value <img src="/ltximg/746d72b6e11.svg" alt="\(\brm{y}\)" style="height: 0.7922em; vertical-align: -0.2981em; display: inline-block" class="org-latex org-latex-inline" />. and the loss would be zero, and we'd be done. in practice, this seldom happens--especially before we have started the process of adjusting the weights. thus, we need to think about what an incorrect output value means, and how to measure the loss. in deriving the gradients, we began with the squared-error loss function. this keeps the algebra simple, but it is not the only possibility. in fact, for most deep learning applications, it is more common to interpret the output values <img src="/ltximg/88d7446f795.svg" alt="\(\hat y\)" style="height: 1.0303em; vertical-align: -0.3157em; display: inline-block" class="org-latex org-latex-inline" /> as probabilities and to use the <b>negative log likelihood</b> as the loss function. <br/>
maximum likelihood learning finds the value of <img src="/ltximg/37d9490973c.svg" alt="\(\brm{w}\)" style="height: 0.5477em; vertical-align: -0.0536em; display: inline-block" class="org-latex org-latex-inline" /> that maximizes the probability of the observed data. and because the log function is monotonic, this is equivalent to maximizing the log likelihood of the data, which is equivalent in turn to minimizing a loss function defined as the negative log likelihood. (taking logs turns products of probabilities into sums, which are more amenable for taking derivatives.) in other words, we are looking for <img src="/ltximg/a20ffcaa716.svg" alt="\(\brm{w}^*\)" style="height: 0.7751em; vertical-align: -0.0536em; display: inline-block" class="org-latex org-latex-inline" /> that minimizes the sum of negative log probabilities of the <img src="/ltximg/b1623e1aba0.svg" alt="\(N\)" style="height: 0.7640em; vertical-align: -0.0568em; display: inline-block" class="org-latex org-latex-inline" /> examples: <br/>

<a id="orgcf15a6c"></a>

<img src="/ltximg/344fc0582fa.svg" alt="\[
\brm{w}^* = \argmin_w - \sum_{j=1}^{N} \log P_{\brm{w}}(\brm{y}_j|\brm{x}_j)
\]" style="height: 3.5438em; display: block" class="org-latex org-latex-block" /> <br/>
in the deep learning literature, it is common to talk about minimizing the <b>cross-entropy</b>. we typically use the definition of cross-entropy with <img src="/ltximg/4cb2117813b.svg" alt="\(P\)" style="height: 0.7640em; vertical-align: -0.0568em; display: inline-block" class="org-latex org-latex-inline" /> being the true distribution over training examples, <img src="/ltximg/bcc7e762f81.svg" alt="\(P^*(\brm{x},\brm{y})\)" style="height: 1.0735em; vertical-align: -0.2981em; display: inline-block" class="org-latex org-latex-inline" />, and <img src="/ltximg/fc70d3d84b0.svg" alt="\(Q\)" style="height: 0.9608em; vertical-align: -0.2310em; display: inline-block" class="org-latex org-latex-inline" /> being the predictive hypothesis <img src="/ltximg/b90f34087bb.svg" alt="\(P_{\brm{w}}(\brm{y} \mid \brm{x})\)" style="height: 1.0735em; vertical-align: -0.2981em; display: inline-block" class="org-latex org-latex-inline" />. minimizing the cross-entropy <img src="/ltximg/301b25fe835.svg" alt="\(H(P^*(\brm{x},\brm{y}), P_{\brm{w}}(\brm{y} \mid \brm{x}))\)" style="height: 1.0735em; vertical-align: -0.2981em; display: inline-block" class="org-latex org-latex-inline" /> by adjusting <img src="/ltximg/37d9490973c.svg" alt="\(\brm{w}\)" style="height: 0.5477em; vertical-align: -0.0536em; display: inline-block" class="org-latex org-latex-inline" /> makes the hypothesis agree as closely as possible with the true distribution. in reality, we cannot minimize this cross-entropy because we do not have access to the true data distribution <img src="/ltximg/bcc7e762f81.svg" alt="\(P^*(\brm{x},\brm{y})\)" style="height: 1.0735em; vertical-align: -0.2981em; display: inline-block" class="org-latex org-latex-inline" />; but we do have access to samples from <img src="/ltximg/bcc7e762f81.svg" alt="\(P^*(\brm{x},\brm{y})\)" style="height: 1.0735em; vertical-align: -0.2981em; display: inline-block" class="org-latex org-latex-inline" />, so the sum over the actual data in [this equation](#orgcf15a6c) approximates the expectation in the <b>equation</b> of cross-entropy. <br/>
to minimize the negative log likelihood (or the cross-entropy), we need to be able to interpret the output of the network as a probability. for example, if the network has one output unit with a sigmoid activation function and is learning a boolean classification, we can interpret the output value directly as the probability that the example belongs to the positive class. thus, for boolean classification problems, we commonly use a sigmoid output layer. <br/>
multiclass classification problems are very common in machine learning. for example, classifiers used for object recognition often need to recognize thousands of distinct categories of objects. natural language models that try to predict the next word in a sentence may have to choose among tens of thousands of possible words. for this kind of prediction, we need the network to output a categorical distribution--that is, if there are <img src="/ltximg/0400ee8e1d7.svg" alt="\(d\)" style="height: 0.8086em; vertical-align: -0.0568em; display: inline-block" class="org-latex org-latex-inline" /> possible answers, we need <img src="/ltximg/0400ee8e1d7.svg" alt="\(d\)" style="height: 0.8086em; vertical-align: -0.0568em; display: inline-block" class="org-latex org-latex-inline" /> output nodes that represent probabilities summing to 1. <br/>
To achieve this, we use a softmax layer, which outputs a vector of <img src="/ltximg/0400ee8e1d7.svg" alt="\(d\)" style="height: 0.8086em; vertical-align: -0.0568em; display: inline-block" class="org-latex org-latex-inline" /> values given a vector of input values <img src="/ltximg/f183340e21d.svg" alt="\(\brm{in}=(in_1,\dots,in_d)\)" style="height: 1.0725em; vertical-align: -0.2971em; display: inline-block" class="org-latex org-latex-inline" />. The kth element of that output vector is given by <br/>
<img src="/ltximg/a34cc24ea69.svg" alt="\[
\mathrm{softmax}(\brm{in})_k = \frac{e^{in_k}}{\sum_{k'=1}^{d} e^{in_{k'}}}
\]" style="height: 2.9411em; display: block" class="org-latex org-latex-block" /> <br/>
for a regression problem, where the target value <img src="/ltximg/df01f60c7cb.svg" alt="\(y\)" style="height: 0.8138em; vertical-align: -0.3157em; display: inline-block" class="org-latex org-latex-inline" /> is continuous, it is common to use a linear output layer--in other words, <img src="/ltximg/b7a384d09b2.svg" alt="\(\hat y_j=in_j\)" style="height: 1.1735em; vertical-align: -0.4437em; display: inline-block" class="org-latex org-latex-inline" />, without any activation function <img src="/ltximg/0eea65ea32c.svg" alt="\(g\)" style="height: 0.8020em; vertical-align: -0.3040em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
many other output layers are possible. <br/>


## initial common lisp implementation {#initial-common-lisp-implementation}

this code uses <b>common lisp</b> (aswell as code/functions from the actual link itself, click it for those) <br/>

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

while implementing <b>backpropagation</b> i faced a challenge(s), can i simply iterate through the layers one by one like i did in `network-feedforward` and just handle them each at a time? at first i thought i couldnt, because i need to go through each possible path from the output layer to the input layer and update each weight, each weight's gradient depends on the gradient for the weight preceding it in the path, but after alot of thinking i realized that i could just store the gradients of each matrix of weights between 2 layers and update the gradient matrix as we go, this would probably work i think, but im more curious about how i would go about finding all paths and operating on them in the way i described. <br/>
we have a variable number of layers <img src="/ltximg/1cc8876c44d.svg" alt="\(n\)" style="height: 0.5548em; vertical-align: -0.0568em; display: inline-block" class="org-latex org-latex-inline" />, we definitely could iterate through these layers but on each iteration we only have access to the current layers units, and to construct a path from the input layer to the output layer we need to find <img src="/ltximg/1cc8876c44d.svg" alt="\(n\)" style="height: 0.5548em; vertical-align: -0.0568em; display: inline-block" class="org-latex org-latex-inline" /> units, one from each layer, so this cannot be done by a simple for loop that iterates through the layers one at a time, what about nested loops (one for each layer)? but how are we supposed to nest <img src="/ltximg/1cc8876c44d.svg" alt="\(n\)" style="height: 0.5548em; vertical-align: -0.0568em; display: inline-block" class="org-latex org-latex-inline" /> loops? this isnt possible, so maybe <b>recursion</b> could help? <br/>
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

we need  a method to keep to keep track of loss, aswell as visual feedback would be nice, see <b>common lisp graphics</b> which ill be also using here <br/>

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

before implementing this i started experimenting with <b>cuda in common lisp</b>, one unfortunate thing is that `cl-cuda` doesnt allow using arbitrary data types like you would have in `C` with structs, we're gonna have to live with arrays of floats on the gpu <br/>
at first i was gonna implement the most straightforward approach, which is to run every backpropagation/feedforward operation by a single gpu thread, so that if we have 256 gpu threads, we'd be doing 256 backpropagation operations in parallel whereas on the cpu (with a single thread) we'd be doing only 1, i thought this would definitely work, until i actually thought about it and then realized, how the hell can this be a thread-safe process? each thread is modifying every weight in the network and many threads are running at once, it would be a nightmare to actually use such an approach, and a miracle if it even works as intended, so i had to think of something else, something thread-safe.

