+++
title = "feedforward neural network"
author = ["mahmood"]
description = "studying and building neural networks from scratch"
date = 2024-02-26T00:00:00+02:00
tags = ["cs", "math"]
draft = false
+++

<div class="note">

feedforward neural networks is a wider term than discussed here, whats discussed here really is a specific type we call a **simple multilayer perceptron**, but this serves as an introductory to other types of more complex networks <br/>

</div>

a **feedforward network** has connections only in one direction. each node computes a function of its inputs and passes the result to its successors in the network. information flows through the network from the input nodes to the output nodes, and there are no loops. <br/>
a unit calculates the weighted sum of the inputs from predecessor nodes and then applies a nonlinear function to produce its output. let <img src="/ltximg/c455695f4de.svg" alt="\(a_j\)" style="height: 0.8007em; vertical-align: -0.3296em; display: inline-block" class="org-latex org-latex-inline" /> denote the output of unit <img src="/ltximg/e48b71eadb5.svg" alt="\(j\)" style="height: 0.9353em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> and let <img src="/ltximg/74ce2063e04.svg" alt="\(w_{i,j}\)" style="height: 0.8007em; vertical-align: -0.3296em; display: inline-block" class="org-latex org-latex-inline" /> be the weight attached to the link from unit <img src="/ltximg/196c1afa02d.svg" alt="\(i\)" style="height: 0.7447em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> to unit <img src="/ltximg/e48b71eadb5.svg" alt="\(j\)" style="height: 0.9353em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />; then we have <br/>


<div id="org9c0c705" class="equation-container">
<span class="equation">
<img src="/ltximg/6755fc3f064.svg" alt="\begin{equation}
  a_j = g_j\left(\sum_{i} w_{i,j}a_i\right) = g_j(in_j)
\end{equation}
" style="height: 3.1656em; vertical-align: -0.5392em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

where <img src="/ltximg/cfc531a95c6.svg" alt="\(g_j\)" style="height: 0.8007em; vertical-align: -0.3296em; display: inline-block" class="org-latex org-latex-inline" /> is a nonlinear activation function associated with unit <img src="/ltximg/e48b71eadb5.svg" alt="\(j\)" style="height: 0.9353em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/d2ea5e52662.svg" alt="\(in_j\)" style="height: 1.0251em; vertical-align: -0.3296em; display: inline-block" class="org-latex org-latex-inline" /> is the weighted sum of the inputs to unit <img src="/ltximg/e48b71eadb5.svg" alt="\(j\)" style="height: 0.9353em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
each unit has an extra input from a dummy unit 0 that is fixed to +1 and a weight <img src="/ltximg/d610220abc9.svg" alt="\(w_{0,j}\)" style="height: 0.8007em; vertical-align: -0.3296em; display: inline-block" class="org-latex org-latex-inline" /> for that input. this allows the total weighted input <img src="/ltximg/d2ea5e52662.svg" alt="\(in_j\)" style="height: 1.0251em; vertical-align: -0.3296em; display: inline-block" class="org-latex org-latex-inline" /> to unit <img src="/ltximg/e48b71eadb5.svg" alt="\(j\)" style="height: 0.9353em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> to be nonzero even when the outputs of the preceding layer are all zero. with this convention, we can write the preceding equation in vector form: <br/>
<img src="/ltximg/4a06a6ff5cc.svg" alt="\[ a_j = g_j(\brm{w}^T\brm{x}) \]" style="height: 1.5548em; display: block" class="org-latex org-latex-block" /> <br/>
where <img src="/ltximg/fdca8c4d00c.svg" alt="\(\brm{w}\)" style="height: 0.5224em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is the vector of weights leading into unit <img src="/ltximg/e48b71eadb5.svg" alt="\(j\)" style="height: 0.9353em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> (including <img src="/ltximg/d610220abc9.svg" alt="\(w_{0,j}\)" style="height: 0.8007em; vertical-align: -0.3296em; display: inline-block" class="org-latex org-latex-inline" />) and <img src="/ltximg/58b87651132.svg" alt="\(\brm{x}\)" style="height: 0.5224em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is the vector of inputs to unit <img src="/ltximg/e48b71eadb5.svg" alt="\(j\)" style="height: 0.9353em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> (including the +1) <br/>
training a neural network consists of modifying the network’s parameters so as to minimize the loss function on the training set. in principle, any kind of optimization algorithm could be used. in practice, modern neural networks are almost always trained with some variant of stochastic gradient descent. <br/>
here, the goal is to minimize the loss <img src="/ltximg/539852216d4.svg" alt="\(L(\brm{w})\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, where <img src="/ltximg/fdca8c4d00c.svg" alt="\(\brm{w}\)" style="height: 0.5224em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> represents all of the parameters of the network (all the weights). each update step in the gradient descent process looks like this: <br/>
<img src="/ltximg/822d7131bc7.svg" alt="\[ \brm{w} \gets \brm{w} - \alpha\nabla_{\brm{w}}L(\brm{w}) \]" style="height: 1.5194em; display: block" class="org-latex org-latex-block" /> <br/>

where <img src="/ltximg/d972b0c4622.svg" alt="\(\alpha\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is the learning rate. for standard gradient descent, the loss function <img src="/ltximg/7c012388408.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is defined with respect to the entire training set. for stochastic gradient descent, it is defined with respect to a minibatch of <img src="/ltximg/1c6b9242d2b.svg" alt="\(m\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> examples chosen randomly at each step. <br/>
the change in a single weight is defined as: <br/>
<img src="/ltximg/cd872589379.svg" alt="\[ w \gets w - \alpha \frac{\partial L}{\partial w} \]" style="height: 2.2121em; display: block" class="org-latex org-latex-block" /> <br/>
given a single training example <img src="/ltximg/c3e8e4dac37.svg" alt="\((\brm{x},y)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, let <img src="/ltximg/f991834796a.svg" alt="\(\hat y=a_k\)" style="height: 0.9640em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> of the output layer. <img src="/ltximg/5b4aebb862d.svg" alt="\(\hat y\)" style="height: 0.9640em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/73a97ac470e.svg" alt="\(y\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> are both constant throughout the back-propagation process (independent of other variables), as we're really just trying to get the output <img src="/ltximg/5b4aebb862d.svg" alt="\(\hat y\)" style="height: 0.9640em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> to be as close to <img src="/ltximg/73a97ac470e.svg" alt="\(y\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> as possible on future feedforwarding runs. <br/>
denoting the output layer by <img src="/ltximg/8e22f36a85f.svg" alt="\(q\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, the output of an aribtrary unit <img src="/ltximg/4d5f5bed723.svg" alt="\(k\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> in the output layer is defined as: <br/>
<img src="/ltximg/93a29f07f08.svg" alt="\[ \hat y = g^q(in_k^q) \]" style="height: 1.5700em; display: block" class="org-latex org-latex-block" /> <br/>
such that a superscript denotes the number of the layer that an expression is associated with. <br/>
assuming the squared cost function (which we would usually denote by <img src="/ltximg/4c59a684223.svg" alt="\(L_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> but here im using <img src="/ltximg/c155fc64f11.svg" alt="\(L_k\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> for something else), the output of the cost function for the <img src="/ltximg/4d5f5bed723.svg" alt="\(k\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />-th unit in the output layer would be: <br/>
<img src="/ltximg/b4870e6b2db.svg" alt="\[ L_k = (y - \hat y)^2 \]" style="height: 1.5194em; display: block" class="org-latex org-latex-block" /> <br/>
after the first application of the [derivative chain rule](../20231005T002128--derivative__math.md) to the cost function with respect to the weight that connects an arbitrary unit <img src="/ltximg/e48b71eadb5.svg" alt="\(j\)" style="height: 0.9353em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> in the last hidden layer to an arbitrary unit <img src="/ltximg/4d5f5bed723.svg" alt="\(k\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> in the output layer we get: <br/>
<img src="/ltximg/d950ddba040.svg" alt="\[ \frac{\partial L}{\partial w^q_{jk}} = -2(y-\hat y) \frac{\partial {g^q(in_k^q)}}{\partial w^q_{jk}} \]" style="height: 2.7417em; display: block" class="org-latex org-latex-block" /> <br/>

<div class="note">

a weight that is between a layer <img src="/ltximg/1f4dc819f2a.svg" alt="\(l-1\)" style="height: 0.8606em; vertical-align: -0.1309em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/ce369eb3609.svg" alt="\(l\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is denoted by <img src="/ltximg/a4c2ee2dd9c.svg" alt="\(w^l_x\)" style="height: 1.1727em; vertical-align: -0.2915em; display: inline-block" class="org-latex org-latex-inline" /> and not <img src="/ltximg/1549fb0420c.svg" alt="\(w^{l-1}_x\)" style="height: 1.1727em; vertical-align: -0.2915em; display: inline-block" class="org-latex org-latex-inline" /> because it actually belongs to the <img src="/ltximg/ce369eb3609.svg" alt="\(l\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />th layer, even if it comes out of the <img src="/ltximg/1f4dc819f2a.svg" alt="\(l-1\)" style="height: 0.8606em; vertical-align: -0.1309em; display: inline-block" class="org-latex org-latex-inline" />th layer, this means that weights with a superscript of 1, e.g. <img src="/ltximg/adca5d9e9b4.svg" alt="\(w^1_x\)" style="height: 1.1384em; vertical-align: -0.2915em; display: inline-block" class="org-latex org-latex-inline" /> arent defined, because the first layer (input layer) has no weights. <br/>

</div>

applying the chain rule again we get: <br/>
<img src="/ltximg/c625341da0f.svg" alt="\[ \frac{\partial L}{\partial w^q_{jk}} = -2(y-\hat y) {g^q}'(in_k^q) \frac{\partial in_k^q}{w^q_{jk}} \]" style="height: 2.7417em; display: block" class="org-latex org-latex-block" /> <br/>
we apply the chain rule again to get the final gradient formula for <img src="/ltximg/b5755f6a3ba.svg" alt="\(w^q_{jk}\)" style="height: 1.2937em; vertical-align: -0.4782em; display: inline-block" class="org-latex org-latex-inline" />: <br/>


<div id="org485c9ca" class="equation-container">
<span class="equation">
<img src="/ltximg/b0c359ce59f.svg" alt="\begin{equation}
  \frac{\partial L}{\partial w^q_{jk}} = \underbrace{-2(y-\hat y){g^q}'(in_k^q)}_{\text{perceived error, } \Delta_k^q} a_j^{q-1}
\end{equation}
" style="height: 3.5241em; vertical-align: -0.5392em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

during backpropagation, a part of a weights gradient, which we define as **perceived error** or a **delta**, is back-propagated to preceding layers in the network because it appears in the formulas of the partial derivatives for weights that exist in these previous layers, we denote by <img src="/ltximg/2800459e3e6.svg" alt="\(\Delta_k^l\)" style="height: 1.2079em; vertical-align: -0.3267em; display: inline-block" class="org-latex org-latex-inline" /> the perceived error of the <img src="/ltximg/4d5f5bed723.svg" alt="\(k\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />-th unit in the <img src="/ltximg/ce369eb3609.svg" alt="\(l\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />-th layer. in the case of a unit in the output layer, its a simple formula: <br/>
<img src="/ltximg/75d2b91c1ea.svg" alt="\[ \Delta_k^q = -2(y-\hat y){g^q}'(in_k^q) \]" style="height: 1.5700em; display: block" class="org-latex org-latex-block" /> <br/>
which is, as you might've noticed, just a part of the equation [eq-fnn-w-derivative](20230502T235623--feedforward-neural-network__cs_math.md), the beginning of the expression, <img src="/ltximg/2c237fd0897.svg" alt="\(-2(y-\hat y)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, doesnt change, but as we move backwards through the layers, the pattern in the second part of the equation <img src="/ltximg/0b4bdb68e8e.svg" alt="\({g^l}'(in_k^l)\)" style="height: 1.3468em; vertical-align: -0.3267em; display: inline-block" class="org-latex org-latex-inline" /> repeats over and over again (demonstrated in [exa-fnn-1](20230502T235623--feedforward-neural-network__cs_math.md)), which is why the concept of a perceived error is quite helpful. with this in mind, the perceived error of a unit <img src="/ltximg/e48b71eadb5.svg" alt="\(j\)" style="height: 0.9353em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> in the last hidden layer <img src="/ltximg/569be13ca96.svg" alt="\(q-1\)" style="height: 0.9061em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> would be: <br/>
<img src="/ltximg/9af07df469b.svg" alt="\[ \Delta_j^{q-1} = \Delta_k^qw^q_{jk}{g^{q-1}}'(in_j^{q-1}) = -2(y-\hat y){g^q}'(in_k^q)w_{jk}^q{g^{q-1}}'(in_j^{q-1}) \]" style="height: 1.7034em; display: block" class="org-latex org-latex-block" /> <br/>
where <img src="/ltximg/4d5f5bed723.svg" alt="\(k\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> refers to the number of the unit in the succeeding layer that the back-propagated gradient message originated from. <br/>
and in general form, the perceived error for an arbitrary unit <img src="/ltximg/4d5f5bed723.svg" alt="\(k\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> in an arbitrary hidden layer <img src="/ltximg/ce369eb3609.svg" alt="\(l\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, is defined as: <br/>


<div id="org3156976" class="equation-container">
<span class="equation">
<img src="/ltximg/8c166c49796.svg" alt="\begin{equation}
  \Delta_k^l = \Delta_c^{l+1}w^{l+1}_{kc}{g^l}'(in_k^l) 
\end{equation}
" style="height: 1.5700em; vertical-align: -0.3448em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

where <img src="/ltximg/0dab5a802ac.svg" alt="\(c\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is some arbitrary unit in <img src="/ltximg/b63de9e30e1.svg" alt="\(l+1\)" style="height: 0.8603em; vertical-align: -0.1305em; display: inline-block" class="org-latex org-latex-inline" /> that the message was propagated back from. <br/>
for a weight that connects the unit <img src="/ltximg/e48b71eadb5.svg" alt="\(j\)" style="height: 0.9353em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> of the hidden layer <img src="/ltximg/1f4dc819f2a.svg" alt="\(l-1\)" style="height: 0.8606em; vertical-align: -0.1309em; display: inline-block" class="org-latex org-latex-inline" /> to the unit <img src="/ltximg/4d5f5bed723.svg" alt="\(k\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> of the next hidden layer <img src="/ltximg/ce369eb3609.svg" alt="\(l\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, the formula is defined in terms of the perceived error of the unit <img src="/ltximg/46035ed1c45.svg" alt="\(k^l\)" style="height: 0.9304em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> (weight originates from unit <img src="/ltximg/07b794f2fb6.svg" alt="\(j^{l-1}\)" style="height: 1.1209em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> and connects to unit <img src="/ltximg/46035ed1c45.svg" alt="\(k^l\)" style="height: 0.9304em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, so it belongs to <img src="/ltximg/46035ed1c45.svg" alt="\(k^l\)" style="height: 0.9304em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />): <br/>
<img src="/ltximg/576918476ef.svg" alt="\[ \frac{\partial L}{\partial w^l_{jk}} = \Delta_k^l a_j^{l-1} \]" style="height: 2.6750em; display: block" class="org-latex org-latex-block" /> <br/>
the back-propagation process passes messages back along each link in the network. at each node, the incoming messages are collected and new messages are calculated to pass back to the next layer. <br/>
overall, the process of learning the weights of the network is usually one that exhibits diminishing returns. we run until it is no longer practical to decrease the test error by running longer. usually this does not mean we have reached a global or even a local minimum of the loss function. instead, it means we would have to make an impractically large number of very small steps to continue reducing the cost, or that additional steps would only cause overfitting, or that estimates of the gradient are too inaccurate to make further progress. <br/>

<div class="my_example" id="exa-fnn-1">

citation: (Peter Norvig, Stuart J. Russell, 2020) <br/>
consider the following network <br/>

<a id="org0f3c91c"></a>

![](/ox-hugo/network-graph.png) <br/>
coupling multiple units together into a network creates a complex function that is a composition of the algebraic expressions represented by the individual units. for example, the network above represents a function <img src="/ltximg/be156b7a5fd.svg" alt="\(h_{\brm{w}}(\brm{x})\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, parameterized by weights <img src="/ltximg/fdca8c4d00c.svg" alt="\(\brm{w}\)" style="height: 0.5224em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, that maps a two-element input vector <img src="/ltximg/58b87651132.svg" alt="\(\brm{x}\)" style="height: 0.5224em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> to a scalar output value <img src="/ltximg/5b4aebb862d.svg" alt="\(\hat y\)" style="height: 0.9640em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />. the internal structure of the function mirrors the structure of the network. for example we can write an expression for the output <img src="/ltximg/5b4aebb862d.svg" alt="\(\hat y\)" style="height: 0.9640em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> as follows: <br/>


<div id="orga2f90d5" class="equation-container">
<span class="equation">
<img src="/ltximg/1b21448cce7.svg" alt="\begin{align*}
  \hat y &amp;amp;= g_5(in_5) = g_5(w_{0,5} + w_{3,5}a_3 + w_{4,5}a_4)\\
  &amp;amp;= g_5(w_{0,5} + w_{3,5}g_3(in_3) + w_{4,5}g_4(in_4))\\
  &amp;amp;= g_5(w_{0,5} + w_{3,5}g_3(w_{0,3} + w_{1,3}x_1 + w_{2,3}x_2) + w_{4,5}g_4(w_{0,4} + w_{1,4}x_1 + w_{2,4}x_2))
\end{align*}
" style="height: 4.5672em; vertical-align: -0.4020em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

thus, we have the output <img src="/ltximg/5b4aebb862d.svg" alt="\(\hat y\)" style="height: 0.9640em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> expressed as a function <img src="/ltximg/be156b7a5fd.svg" alt="\(h_{\brm{w}}(\brm{x})\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> of the inputs and the weights. <br/>
we generally use <img src="/ltximg/aa280bd2512.svg" alt="\(\brm{W}\)" style="height: 0.7704em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> to denote a weight matrix; <img src="/ltximg/42f42c9a446.svg" alt="\(\brm{W}^{(i)}\)" style="height: 1.0426em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> denotes the weights in the i'th layer, let <img src="/ltximg/47acc9349bb.svg" alt="\(\brm{g}^{(i)}\)" style="height: 1.1591em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> denote the activation functions in the i'th layer, then, for example, an entire network of 1 input layer, 1 hidden layer, and an output node can be written as follows: <br/>
<img src="/ltximg/8c14fb0820c.svg" alt="\[ h_{\brm{w}}(\brm{x}) = \brm{g}^{(2)}(\brm{W}^{(2)}\brm{g}^{(1)}(\brm{W}^{(1)}\brm{x})) \]" style="height: 1.5194em; display: block" class="org-latex org-latex-block" /> <br/>
for the network to learn, we need to gradually adjust the weights to fit the learning data, using the gradient descent algorithm <br/>
first we apply the loss function, for simplicity the squared loss function is used here, we will calculate the gradient for the network we [proposed](#org0f3c91c) with respect to a single training example <img src="/ltximg/c3e8e4dac37.svg" alt="\((\brm{x},y)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. (for multiple examples, the gradient is just the sum of the gradients for the individual examples.) the network outputs a prediction <img src="/ltximg/65f4838352e.svg" alt="\(\hat y = h_{\brm{w}}(\brm{x})\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> and the true value is <img src="/ltximg/73a97ac470e.svg" alt="\(y\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, so we have <br/>
<img src="/ltximg/9a238fc4fb9.svg" alt="\[ Loss(h_{\brm{w}}) = L_2(y,h_{\brm{x}}(\brm{x})) = ||y-h_{\brm{w}}(\brm{x})||^2 = (y-\hat y)^2 \]" style="height: 1.5194em; display: block" class="org-latex org-latex-block" /> <br/>
we compute the gradient of the loss with respect to the weights, we use the chain rule, we'll start with the easy case: a weight such as <img src="/ltximg/c81cdf5e8d8.svg" alt="\(w_{3,5}\)" style="height: 0.8007em; vertical-align: -0.3296em; display: inline-block" class="org-latex org-latex-inline" /> that is connected to the output unit. we operate directly on the [network-defining expressions](20230502T235623--feedforward-neural-network__cs_math.md): <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/9449f0795c7.svg" alt="\begin{align*}
  \frac{\partial}{\partial w_{3,5}}Loss(h_{\brm{w}}) &amp;amp;= \frac{\partial}{\partial w_{3,5}}(y-\hat y)^2 = -2(y-\hat y)\frac{\partial \hat y}{\partial w_{3,5}}\\
  &amp;amp;= -2(y-\hat y)\frac{\partial}{\partial w_{3,5}}g_5(in_5) = -2(y-\hat y)g'_5(in_5)\frac{\partial}{\partial w_{3,5}}in_5\\
  &amp;amp;= -2(y-\hat y)g'_5(in_5)\frac{\partial}{\partial w_{3,5}}(w_{0,5}+w_{3,5}a_3+w_{4,5}a_4)\\
  &amp;amp;= -2(y-\hat y)g'_5(in_5)a_3
\end{align*}
" style="height: 9.4368em; vertical-align: -0.4020em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

the slightly more difficult case involves a weight such as <img src="/ltximg/95d37ec3890.svg" alt="\(w_{1,3}\)" style="height: 0.8007em; vertical-align: -0.3296em; display: inline-block" class="org-latex org-latex-inline" /> that is not directly connected to the output unit. here, we have to apply the chain rule one more time. the first few steps are identical, so we omit them: <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/74e788f9a10.svg" alt="\begin{align*}
  \frac{\partial}{\partial w_{1,3}}Loss(h_{\brm{w}}) &amp;amp;= -2(y-\hat y)g'_5(in_5)\frac{\partial}{\partial w_{1,3}}(w_{0,5}+w_{3,5}a_3+w_{4,5}a_4)\\
  &amp;amp;= -2(y-\hat y)g'_5(in_5)w_{3,5}\frac{\partial}{\partial w_{1,3}}a_3\\
  &amp;amp;= -2(y-\hat y)g'_5(in_5)w_{3,5}\frac{\partial}{\partial w_{1,3}}g_3(in_3)\\
  &amp;amp;= -2(y-\hat y)g'_5(in_5)w_{3,5}g'_3(in_3)\frac{\partial}{\partial w_{1,3}}in_3\\
  &amp;amp;= -2(y-\hat y)g'_5(in_5)w_{3,5}g'_3(in_3)\frac{\partial}{\partial w_{1,3}}(w_{0,3}+w_{1,3}x_1+w_{2,3}x_2)\\
  &amp;amp;= -2(y-\hat y)g'_5(in_5)w_{3,5}g'_3(in_3)x_1
\end{align*}
" style="height: 14.8131em; vertical-align: -0.4020em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

here, <img src="/ltximg/38320c076fc.svg" alt="\(\Delta_5=2(\hat y-y)g'_5(in_5)\)" style="height: 1.0801em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> is the perceived error unit 5, and the gradient with respect to <img src="/ltximg/c81cdf5e8d8.svg" alt="\(w_{3,5}\)" style="height: 0.8007em; vertical-align: -0.3296em; display: inline-block" class="org-latex org-latex-inline" /> is just <img src="/ltximg/35a000dc558.svg" alt="\(\Delta_5a_3\)" style="height: 0.9470em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" />. this makes perfect sense: if <img src="/ltximg/cc8be8503a1.svg" alt="\(\Delta_5\)" style="height: 0.9470em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> is positive, that means <img src="/ltximg/5b4aebb862d.svg" alt="\(\hat y\)" style="height: 0.9640em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> is too big (<img src="/ltximg/649cd833edd.svg" alt="\(g'\)" style="height: 1.0257em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> is always nonnegative); if <img src="/ltximg/9748b64af8c.svg" alt="\(a_3\)" style="height: 0.6673em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> is also positive, then increasing <img src="/ltximg/c81cdf5e8d8.svg" alt="\(w_{3,5}\)" style="height: 0.8007em; vertical-align: -0.3296em; display: inline-block" class="org-latex org-latex-inline" /> will only make things worse, whereas if <img src="/ltximg/9748b64af8c.svg" alt="\(a_3\)" style="height: 0.6673em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> is negative, then increasing <img src="/ltximg/c81cdf5e8d8.svg" alt="\(w_{3,5}\)" style="height: 0.8007em; vertical-align: -0.3296em; display: inline-block" class="org-latex org-latex-inline" /> will reduce the error. the magnitude of <img src="/ltximg/9748b64af8c.svg" alt="\(a_3\)" style="height: 0.6673em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> also matters: if <img src="/ltximg/9748b64af8c.svg" alt="\(a_3\)" style="height: 0.6673em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> is small for this training example, then<img src="/ltximg/c81cdf5e8d8.svg" alt="\(w_{3,5}\)" style="height: 0.8007em; vertical-align: -0.3296em; display: inline-block" class="org-latex org-latex-inline" /> didnt play a major role in producing the error and doesnt need to be changed much. <br/>
we also know <img src="/ltximg/f81d0ccda18.svg" alt="\(\Delta_3=\Delta_5w_{3,5}g'_3(in_3)\)" style="height: 1.1155em; vertical-align: -0.3296em; display: inline-block" class="org-latex org-latex-inline" />, and the gradient for <img src="/ltximg/95d37ec3890.svg" alt="\(w_{1,3}\)" style="height: 0.8007em; vertical-align: -0.3296em; display: inline-block" class="org-latex org-latex-inline" /> becomes just <img src="/ltximg/86d694a2d4e.svg" alt="\(\Delta_3x_1\)" style="height: 0.9470em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" />. thus, the perceived error at the input to unit 3 is the perceived error at the input to unit 5, multiplied by information along the path from 5 back to 3. this phenomenon is completely general, and gives rise to the term back-propagation for the way that the error at the output is passed back through the network. <br/>

another important characteristic of these gradient expressions is that they have as factors the local derivatives <img src="/ltximg/62c8d5e2046.svg" alt="\(g'_j(in_j)\)" style="height: 1.2236em; vertical-align: -0.4377em; display: inline-block" class="org-latex org-latex-inline" />. as noted earlier, these derivatives are always nonnegative, but they can be very close to zero (in the case of the sigmoid, softplus, and tanh functions) or exactly zero (in the case of ReLUs), if the inputs from the training example in question happen to put unit <img src="/ltximg/e48b71eadb5.svg" alt="\(j\)" style="height: 0.9353em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> in the flat operating region. if the derivative <img src="/ltximg/2e8fec8143b.svg" alt="\(g'_j\)" style="height: 1.2236em; vertical-align: -0.4377em; display: inline-block" class="org-latex org-latex-inline" /> is small or zero, that means that changing the weights leading into unit <img src="/ltximg/e48b71eadb5.svg" alt="\(j\)" style="height: 0.9353em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> will have a negligible effect on its output. as a result, deep networks with many layers may suffer from a vanishing gradient--the error signals are extinguished altogether as they are propagated back through the network. <br/>

</div>

but how do we pass the data into the input layer? and what do the values coming out of the output layer mean? the following paragraphs explain how we **encode** data to pass it into the input layer, and how we treat the values resulting from the output layer. <br/>
the encoding of input data is usually straightforward, at least for the case of factored data where each training example contains values for <img src="/ltximg/b32b0f8a94b.svg" alt="\(n\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> input attributes. if the attributes are boolean, we have <img src="/ltximg/b32b0f8a94b.svg" alt="\(n\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> input nodes; usually false is mapped to an input of 0 and true is mapped to 1, although sometimes -1 and +1 are used. numeric attributes, whether integer or real-valued, are typically used as is, although they may be scaled to fit within a fixed range; if the magnitudes for different examples vary enormously, the values can be mapped onto a log scale. <br/>

images do not quite fit into the category of factored data; although an RGB image of size <img src="/ltximg/fd2336ece93.svg" alt="\(X \times Y\)" style="height: 0.8497em; vertical-align: -0.1309em; display: inline-block" class="org-latex org-latex-inline" /> pixels can be thought of as <img src="/ltximg/4d8bfc137e4.svg" alt="\(3XY\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> integer-valued attributes (typically with values in the range <img src="/ltximg/376b8fe9b64.svg" alt="\(\{0,\dots,255\}\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />), this would ignore the fact that the RGB triplets belong to the same pixel in the image and the fact that pixel adjacency really matters. of course, we can map adjacent pixels onto adjacent input nodes in the network, but the meaning of adjacency is completely lost if the internal layers of the network are fully connected. in practice, networks used with image data have array-like internal structures that aim to reflect the semantics of adjacency. <br/>
categorical attributes with more than two values are usually encoded using the so-called **one-hot encoding**. an attribute with <img src="/ltximg/3c71d685ee3.svg" alt="\(d\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> possible values is represented by <img src="/ltximg/3c71d685ee3.svg" alt="\(d\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> separate input bits. for any given value, the corresponding input bit is set to 1 and all the others are set to 0. this generally works better than mapping the values to integers. <br/>
on the output side of the network, the problem of encoding the raw data values into actual values <img src="/ltximg/73a97ac470e.svg" alt="\(y\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> for the output nodes of the graph is much the same as the input encoding problem. for example, if the network is trying to predict a variable named weather, which has values {sun,rain,cloud,snow}, we would use a one-hot encoding with four bits. <br/>
so much for the data values <img src="/ltximg/233c3ade62b.svg" alt="\(\brm{y}\)" style="height: 0.7130em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />. what about the prediction <img src="/ltximg/838e6be9908.svg" alt="\(\hat  y\)" style="height: 0.9640em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />? ideally, it would exactly match the desired value <img src="/ltximg/233c3ade62b.svg" alt="\(\brm{y}\)" style="height: 0.7130em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />. and the loss would be zero, and we'd be done. in practice, this seldom happens--especially before we have started the process of adjusting the weights. thus, we need to think about what an incorrect output value means, and how to measure the loss. in deriving the gradients, we began with the squared-error loss function. this keeps the algebra simple, but it is not the only possibility. in fact, for most deep learning applications, it is more common to interpret the output values <img src="/ltximg/5b4aebb862d.svg" alt="\(\hat y\)" style="height: 0.9640em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> as probabilities and to use the negative log likelihood as the loss function. <br/>
maximum likelihood learning finds the value of <img src="/ltximg/fdca8c4d00c.svg" alt="\(\brm{w}\)" style="height: 0.5224em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> that maximizes the probability of the observed data. and because the log function is monotonic, this is equivalent to maximizing the log likelihood of the data, which is equivalent in turn to minimizing a loss function defined as the negative log likelihood. (taking logs turns products of probabilities into sums, which are more amenable for taking derivatives.) in other words, we are looking for <img src="/ltximg/f24a6e3efd1.svg" alt="\(\brm{w}^*\)" style="height: 0.7732em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> that minimizes the sum of negative log probabilities of the <img src="/ltximg/bd89d606b5a.svg" alt="\(N\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> examples: <br/>

<a id="org41346ab"></a>

<img src="/ltximg/b5957946dde.svg" alt="\[ \brm{w}^* = \argmin_w - \sum_{j=1}^{N} \log P_{\brm{w}}(\brm{y}_j|\brm{x}_j) \]" style="height: 3.3758em; display: block" class="org-latex org-latex-block" /> <br/>
in the deep learning literature, it is common to talk about minimizing the cross-entropy. we typically use the definition of cross-entropy with <img src="/ltximg/65eedb9b1de.svg" alt="\(P\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> being the true distribution over training examples, <img src="/ltximg/d1af2158b66.svg" alt="\(P^*(\brm{x},\brm{y})\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, and <img src="/ltximg/8c5e869bf8f.svg" alt="\(Q\)" style="height: 0.9586em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> being the predictive hypothesis <img src="/ltximg/ab6c338faba.svg" alt="\(P_{\brm{w}}(\brm{y} \mid \brm{x})\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. minimizing the cross-entropy <img src="/ltximg/3d04e334b6c.svg" alt="\(H(P^*(\brm{x},\brm{y}), P_{\brm{w}}(\brm{y} \mid \brm{x}))\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> by adjusting <img src="/ltximg/fdca8c4d00c.svg" alt="\(\brm{w}\)" style="height: 0.5224em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> makes the hypothesis agree as closely as possible with the true distribution. in reality, we cannot minimize this cross-entropy because we do not have access to the true data distribution <img src="/ltximg/d1af2158b66.svg" alt="\(P^*(\brm{x},\brm{y})\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />; but we do have access to samples from <img src="/ltximg/d1af2158b66.svg" alt="\(P^*(\brm{x},\brm{y})\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, so the sum over the actual data in [this equation](20230502T235623--feedforward-neural-network__cs_math.md) approximates the expectation in the [BROKEN LINK: 106c5cc1-5c2b-4faa-9525-510a5df2e57d::cross_entropy_equation] of cross-entropy. <br/>
to minimize the negative log likelihood (or the cross-entropy), we need to be able to interpret the output of the network as a probability. for example, if the network has one output unit with a sigmoid activation function and is learning a boolean classification, we can interpret the output value directly as the probability that the example belongs to the positive class. thus, for boolean classification problems, we commonly use a sigmoid output layer. <br/>
multiclass classification problems are very common in machine learning. for example, classifiers used for object recognition often need to recognize thousands of distinct categories of objects. natural language models that try to predict the next word in a sentence may have to choose among tens of thousands of possible words. for this kind of prediction, we need the network to output a categorical distribution--that is, if there are <img src="/ltximg/3c71d685ee3.svg" alt="\(d\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> possible answers, we need <img src="/ltximg/3c71d685ee3.svg" alt="\(d\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> output nodes that represent probabilities summing to 1. <br/>
To achieve this, we use a softmax layer, which outputs a vector of <img src="/ltximg/3c71d685ee3.svg" alt="\(d\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> values given a vector of input values <img src="/ltximg/e61c0a05487.svg" alt="\(\brm{in}=(in_1,\dots,in_d)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. The kth element of that output vector is given by <br/>
<img src="/ltximg/5d36c38b94a.svg" alt="\[ \mathrm{softmax}(\brm{in})_k = \frac{e^{in_k}}{\sum_{k'=1}^{d} e^{in_{k'}}} \]" style="height: 2.8242em; display: block" class="org-latex org-latex-block" /> <br/>
for a regression problem, where the target value <img src="/ltximg/73a97ac470e.svg" alt="\(y\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> is continuous, it is common to use a linear output layer--in other words, <img src="/ltximg/237f7a1a838.svg" alt="\(\hat y_j=in_j\)" style="height: 1.0539em; vertical-align: -0.3296em; display: inline-block" class="org-latex org-latex-inline" />, without any activation function <img src="/ltximg/2631cefd988.svg" alt="\(g\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
many other output layers are possible. <br/>


## initial common lisp implementation {#initial-common-lisp-implementation}

this code uses common lisp (aswell as code/functions from the actual link itself, click it for those) <br/>

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

while implementing backpropagation i faced a challenge(s), can i simply iterate through the layers one by one like i did in `network-feedforward` and just handle them each at a time? at first i thought i couldnt, because i need to go through each possible path from the output layer to the input layer and update each weight, each weight's gradient depends on the gradient for the weight preceding it in the path, but after alot of thinking i realized that i could just store the gradients of each matrix of weights between 2 layers and update the gradient matrix as we go, this would probably work i think, but im more curious about how i would go about finding all paths and operating on them in the way i described. <br/>
we have a variable number of layers <img src="/ltximg/b32b0f8a94b.svg" alt="\(n\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, we definitely could iterate through these layers but on each iteration we only have access to the current layers units, and to construct a path from the input layer to the output layer we need to find <img src="/ltximg/b32b0f8a94b.svg" alt="\(n\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> units, one from each layer, so this cannot be done by a simple for loop that iterates through the layers one at a time, what about nested loops (one for each layer)? but how are we supposed to nest <img src="/ltximg/b32b0f8a94b.svg" alt="\(n\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> loops? this isnt possible, so maybe recursion could help? <br/>
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

we need  a method to keep to keep track of loss, aswell as visual feedback would be nice, see common lisp graphics which ill be also using here <br/>

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

before implementing this i started experimenting with [cuda in common lisp](../20230614T171231--cuda-programming-in-common-lisp__code.md), one unfortunate thing is that `cl-cuda` doesnt allow using arbitrary data types like you would have in `C` with structs, we're gonna have to live with arrays of floats on the gpu <br/>
at first i was gonna implement the most straightforward approach, which is to run every backpropagation/feedforward operation by a single gpu thread, so that if we have 256 gpu threads, we'd be doing 256 backpropagation operations in parallel whereas on the cpu (with a single thread) we'd be doing only 1, i thought this would definitely work, until i actually thought about it and then realized, how the hell can this be a thread-safe process? each thread is modifying every weight in the network and many threads are running at once, it would be a nightmare to actually use such an approach, and a miracle if it even works as intended, so i had to think of something else, something thread-safe.

