+++
title = "convolutional neural network"
author = ["mahmood"]
date = 2024-02-26T00:00:00+02:00
tags = ["cs", "lispcode", "math"]
draft = false
+++

## citations {#citations}

-   (Peter Norvig, Stuart J. Russell, 2020) <br/>
-   (Jianxin Wu, 2017) <br/>
-   (Zhifei Zhang, 2016) <br/>

and countless other resources that helped me form a good understanding of the topics related to conv networks <br/>


## motivation {#motivation}

an image cannot be thought of as a simple vector of input pixel values, primarily because **adjacency of pixels in an image matters**. simple [multilayer perceptrons](../20230502T235623--feedforward-neural-network__cs_math.md) arent suited for images because adjacent neurons in the same layer arent really connected or affected by each other, which isnt the case in images. <br/>
consider an input image with <img src="/ltximg/b32b0f8a94b.svg" alt="\(n\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> pixels, if the input and the first hidden layer are fully connected, that means we'd have <img src="/ltximg/4959b51309c.svg" alt="\(n^2\)" style="height: 0.8961em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> weights; for a typical RGB image, thats 9 trillion weights, which is an unreasonable amount of parameters, all the more reason we need to ditch multilayer perceptrons. <br/>
these considerations suggest that we should construct the first hidden layer so that **each hidden unit receives input from only a small, local region of the image**. this kills two birds with one stone. first, it respects adjacency, at least locally. second, it cuts down the number of weights. <br/>
so far, so good. but we are missing another important property of images: roughly speaking, anything that is detectable in one small, local region of the image--perhaps an eye or a blade of grass--would look the same if it appeared in another small, local region of the image. in other words, we expect image data to exhibit approximate **spatial invariance**, at least at small to moderate scales. we don’t necessarily expect the top halves of photos to look like bottom halves, so there is a scale beyond which spatial invariance no longer holds. <br/>
local spatial invariance can be achieved by constraining the <img src="/ltximg/ce369eb3609.svg" alt="\(l\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> weights connecting a local region to a unit in the hidden layer to be the same for each hidden unit. (that is, for hidden units <img src="/ltximg/196c1afa02d.svg" alt="\(i\)" style="height: 0.7447em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/e48b71eadb5.svg" alt="\(j\)" style="height: 0.9353em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, the weights <img src="/ltximg/3ea10fb93e8.svg" alt="\(w_{1,j},\dots,w_{l,j}\)" style="height: 0.8007em; vertical-align: -0.3296em; display: inline-block" class="org-latex org-latex-inline" /> are the same as <img src="/ltximg/3ea10fb93e8.svg" alt="\(w_{1,j},\dots,w_{l,j}\)" style="height: 0.8007em; vertical-align: -0.3296em; display: inline-block" class="org-latex org-latex-inline" />) this makes the hidden units into **feature detectors** that detect the same feature wherever it appear in the image. typically, we want the first hidden layer to detect many kinds of features, not just one; so for each local image region we might have <img src="/ltximg/3c71d685ee3.svg" alt="\(d\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> hidden units with <img src="/ltximg/3c71d685ee3.svg" alt="\(d\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> distinct sets of weights. this means that there are <img src="/ltximg/0fb899fbd7a.svg" alt="\(dl\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> weights in all--a number that is not only far smaller than <img src="/ltximg/4959b51309c.svg" alt="\(n^2\)" style="height: 0.8961em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, but is actually independent of <img src="/ltximg/b32b0f8a94b.svg" alt="\(n\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, the image size. thus, by injecting some prior knowledge--namely, knowledge of adjacency and spatial invariance--we can develop models that have far fewer parameters and can learn much more quickly. <br/>
usually an image is stored in memory as a 2d array (or matrix), each cell containing 3 different values for RGB (red,green,blue), which forms a 3 dimensional array or a tensor of order 3, which means the network needs to accept tensors as inputs. <br/>


## convolutional layers {#convolutional-layers}

a convolutional neural network is one that contains spatially local connections, at least in the early layers which we call **convolutional layers**, and has patterns of weights that are replicated across the units in each layer. a pattern of weights that is replicated across multiple local regions is called a **kernel** which is applied with a [convolution](../20230613T023148--convolution__math.md). <br/>
in practice, multiple kernels are learned at each convolutional layer, suppose the input to the <img src="/ltximg/be71d2c586a.svg" alt="\(\ell\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />-th layer is an order 3 tensor with size <img src="/ltximg/6e2562d72b3.svg" alt="\(D^\ell \times H^\ell \times W^\ell\)" style="height: 1.0121em; vertical-align: -0.1309em; display: inline-block" class="org-latex org-latex-inline" />, a kernel would also be an order 3 tensor with size <img src="/ltximg/59bc3c73520.svg" alt="\(D^\ell \times H \times W\)" style="height: 1.0121em; vertical-align: -0.1309em; display: inline-block" class="org-latex org-latex-inline" /> (<img src="/ltximg/69141910de2.svg" alt="\(W\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/ec59f1b1fee.svg" alt="\(H\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> are the dimensions of the kernel and they differ from <img src="/ltximg/e55aeb6b044.svg" alt="\(W^\ell,H^\ell\)" style="height: 1.1209em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, but the depth of both the image and tensor should be equal for the result of the convolution to be of lower dimensionality), assuming <img src="/ltximg/94bbaddc021.svg" alt="\(K\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> kernels are used (in other words, <img src="/ltximg/94bbaddc021.svg" alt="\(K\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> feature maps), the tensor of kernels (or weights) would be an order 4 tensor in <img src="/ltximg/0dc0107c9d5.svg" alt="\(\mathbb{R}^{K \times D^\ell \times H \times W}\)" style="height: 1.0900em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, assuming a stride of 1, the output <img src="/ltximg/233c3ade62b.svg" alt="\(\brm{y}\)" style="height: 0.7130em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> would be a tensor of the third order and of size <img src="/ltximg/ad28b985922.svg" alt="\(K \times (H^\ell-(H-1)) \times (W^\ell-(W-1)))\)" style="height: 1.1754em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> which is composed of <img src="/ltximg/94bbaddc021.svg" alt="\(K\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> feature maps. <br/>

<div class="note">

its important to maintain the order of dimensions as depth X height X width, because thats the order i use everywhere <br/>

</div>

<a id="org65ef7cc"></a>

![](/ox-hugo/conv_depth-1.webp) <br/>
at each layer, the image is stored as a tensor of order 3 of **depth** <img src="/ltximg/ad4e2d37f5b.svg" alt="\(D^\ell\)" style="height: 0.9304em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, each layer of this tensor is basically a matrix we call a **feature map** or **channel**, so the image is stored as nested layers of feature maps, it might be easier to take the input to the first layer as an example, which can be thought of as a set of 3 feature maps of RGB values. <br/>


## pooling layers and downsampling {#pooling-layers-and-downsampling}

a pooling layer in a neural network summarizes a set of adjacent units from the preceding pooling layer with a single value. pooling works just like a convolution layer, with a kernel size l and stride <img src="/ltximg/81fccc36e19.svg" alt="\(s\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, but the operation that is applied is fixed rather than learned. <br/>
typically, no activation function is associated with the pooling layer. there are two common forms of pooling: <br/>

-   **average-pooling** computes the average value of its <img src="/ltximg/ce369eb3609.svg" alt="\(l\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> inputs. this is identical to concvolution with a uniform kernel vector <img src="/ltximg/62609c70f70.svg" alt="\(k=[1/l,\dots,1/l]\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. if we set <img src="/ltximg/cc8afec3a44.svg" alt="\(l=s\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, the effect is to coarsen the resolution of the image--to downsample it--by a factor of <img src="/ltximg/81fccc36e19.svg" alt="\(s\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. an object that occupied, say, <img src="/ltximg/e3174147287.svg" alt="\(10s\)" style="height: 0.7155em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> pixels, would now occupy only 10 pixels after pooling. the same learned classifier that would be able to recognize the object at a size of 10 pixels in the original image would now be able to recognize that object in the pooled image, even if it was too big to recognize in the original image. in other words, average-pooling facilitates **multiscale recognition**. it also reduces the number of weights required in subsequent layers, leading to lower computational cost and possibly faster learning. <br/>
-   **max-pooling** computes the maximum value of its <img src="/ltximg/ce369eb3609.svg" alt="\(l\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> inputs. it can also be used purely for downsampling, but it has a somewhat different semantics. suppose we applied max-pooling to a layer with the values [5,9,4]: the result would be a 9, indicating that somewhere in the input image there is a darker dot that is detected by the kernel. in other words, max-pooling acts as a kind of logical disjunction, saying that a feature exists somewhere in the unit's receptive field. <br/>

if the goal is to classify the image into one of <img src="/ltximg/0dab5a802ac.svg" alt="\(c\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> categories, then the final layer of the network will be a softmax with <img src="/ltximg/0dab5a802ac.svg" alt="\(c\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> output units. the early layers of the CNN are image-sized, so somewhere in between there must be significant reductions in layer size. convolution layers and pooling layers with stride larger than 1 all serve to reduce the layer size. it's also possible to reduce the layer size simply by having a fully connected layer with fewer units than the preceding layer. CNNs often have one or two such layers preceding the final softmax layer. <br/>
let <img src="/ltximg/13e7c75c836.svg" alt="\(\brm{x}^\ell \in \mathbb{R}^{H^\ell \times W^\ell \times D^\ell}\)" style="height: 1.1283em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" /> be the input to the <img src="/ltximg/ce369eb3609.svg" alt="\(l\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />-th pooling layer, the pooling operation requires no parameters (the matrix of weights is nulled), hence parameter learning is not needed for this layer, let the spatial extent (dimensions) of the pooling be <img src="/ltximg/188b2f69fe8.svg" alt="\(H \times W\)" style="height: 0.8497em; vertical-align: -0.1309em; display: inline-block" class="org-latex org-latex-inline" />, assume that <img src="/ltximg/ec59f1b1fee.svg" alt="\(H\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> divides <img src="/ltximg/5bfbe30cf61.svg" alt="\(H^\ell\)" style="height: 0.9304em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/69141910de2.svg" alt="\(W\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> divides <img src="/ltximg/07707bd787f.svg" alt="\(W^\ell\)" style="height: 0.9304em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, the output of pooling (<img src="/ltximg/233c3ade62b.svg" alt="\(\brm{y}\)" style="height: 0.7130em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> or equivalently <img src="/ltximg/fa3f172c795.svg" alt="\(\brm{x}^{\ell+1}\)" style="height: 0.9304em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />) will be an order 3 tensor of size <img src="/ltximg/629084eb8f3.svg" alt="\(H^{\ell+1} \times W^{\ell+1} \times D^{\ell+1}\)" style="height: 1.0121em; vertical-align: -0.1309em; display: inline-block" class="org-latex org-latex-inline" />, with <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/a9efa8c6045.svg" alt="\begin{equation} \label{eq-convnet-pooling-dims}
  H^{\ell+1}=\frac{H^\ell}{H}, \quad W^{\ell+1}=\frac{W^\ell}{W}, \quad D^{\ell+1}=D^\ell
\end{equation}
" style="height: 2.3636em; vertical-align: -0.5392em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

a pooling layer operates upon <img src="/ltximg/27d354edd92.svg" alt="\(\brm{x}^\ell\)" style="height: 0.9304em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> channel by channel independently. within each channel, the matrix with <img src="/ltximg/62bb6d5b831.svg" alt="\(H^\ell \times W^\ell\)" style="height: 1.0121em; vertical-align: -0.1309em; display: inline-block" class="org-latex org-latex-inline" /> elements are divided into <img src="/ltximg/d242e73a1d2.svg" alt="\(H^{\ell+1}\times W^{\ell+1}\)" style="height: 1.0121em; vertical-align: -0.1309em; display: inline-block" class="org-latex org-latex-inline" /> nonoverlapping subregions, each subregion being <img src="/ltximg/188b2f69fe8.svg" alt="\(H \times W\)" style="height: 0.8497em; vertical-align: -0.1309em; display: inline-block" class="org-latex org-latex-inline" /> in size. the pooling operator then maps a subregion into a single number. <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/93ce90d94ec.svg" alt="\begin{align}
  \text{max :} &amp;amp;&amp;amp; y_{i^{\ell+1}},j^{\ell+1},d = \max_{0 \le i &amp;lt; H,0 \le j \le W} x^\ell_{i^{\ell+1} \times H+i,j^{\ell+1} \times W+j,d}\\
  \text{average :} &amp;amp;&amp;amp; y_{i^{\ell+1},j^{\ell+1},d} = \frac{1}{HW} \sum_{0 \le i&amp;lt;H,0 \le j&amp;lt;W} x^\ell_{i^{\ell+1}\times H+i,j^{\ell+1}\times W+j,d}
\end{align}
" style="height: 5.2154em; vertical-align: -0.5392em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

where <img src="/ltximg/647cf18364d.svg" alt="\(0 \le i^{\ell+1}&amp;lt;H^{\ell+1},0 \le j^{\ell+1}&amp;lt;W^{\ell+1}\)" style="height: 1.1209em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, and <img src="/ltximg/d0fdf96cdbb.svg" alt="\(0 \le d&amp;lt;D^{\ell+1}=D^\ell\)" style="height: 1.0636em; vertical-align: -0.1824em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
since pooling layers have no weights they arent directly connected to their preceding layer, so during backpropagation, we cant directly tell what subregion of the previous layer each pixel in <img src="/ltximg/233c3ade62b.svg" alt="\(\brm{y}\)" style="height: 0.7130em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> corresponds to, but we can reverse the pooling operation to "decode" the values from <img src="/ltximg/233c3ade62b.svg" alt="\(\brm{y}\)" style="height: 0.7130em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> back to <img src="/ltximg/27d354edd92.svg" alt="\(\brm{x}^\ell\)" style="height: 0.9304em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. assuming a max-pooling layer, we need a triplet <img src="/ltximg/8c0f4f4ea3d.svg" alt="\((i^\ell,j^\ell,d^\ell)\)" style="height: 1.1754em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> to pinpoint one element in the input <img src="/ltximg/27d354edd92.svg" alt="\(\brm{x}^\ell\)" style="height: 0.9304em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, and another triplet <img src="/ltximg/63eec7b7a5b.svg" alt="\((i^{\ell+1},j^{\ell+1},d^{\ell+1})\)" style="height: 1.1754em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> to locate one element in <img src="/ltximg/233c3ade62b.svg" alt="\(\brm{y}\)" style="height: 0.7130em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />. assuming a max-pooling layer (process is the same for average-pooling), the pooling output <img src="/ltximg/fde35b3a57a.svg" alt="\(y_{i^{\ell+1},j^{\ell+1},d^{\ell+1}}\)" style="height: 0.8524em; vertical-align: -0.3813em; display: inline-block" class="org-latex org-latex-inline" /> comes from <img src="/ltximg/6e2bf61006e.svg" alt="\(x^\ell_{i^\ell,j^\ell,d^\ell}\)" style="height: 1.4012em; vertical-align: -0.5200em; display: inline-block" class="org-latex org-latex-inline" />, iff the following conditions are met: <br/>

-   they are in the same channel <br/>
-   the <img src="/ltximg/bfacbba6519.svg" alt="\((i^\ell,j^\ell)\)" style="height: 1.1754em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />-th spatial entry belongs to the <img src="/ltximg/e76f0693563.svg" alt="\((i^{\ell+1},j^{\ell+1})\)" style="height: 1.1754em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />-th subregion <br/>
-   the <img src="/ltximg/bfacbba6519.svg" alt="\((i^\ell,j^\ell)\)" style="height: 1.1754em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />-th spatial entry is the largest one in that subregion <br/>

translating these conditions into equations, we get <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/3d6ee02fae2.svg" alt="\begin{gather}
  d^{\ell+1} = d^\ell\\
  \floor*{\frac{i^\ell}{H}} = i^{\ell+1}, \floor*{\frac{j^\ell}{W}} = j^{\ell+1}\\
  x^\ell_{i^\ell,j^\ell,d^\ell} \geq y_{i+i^{\ell+1}\times H,j+j^{\ell+1}\times W,d^t}, \forall 0 \le i &amp;lt; H, 0 \le j&amp;lt;W
\end{gather}
" style="height: 6.1400em; vertical-align: -0.4710em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>


## flatten layer {#flatten-layer}

a layer that takes a tensor and vectorizes or **flattens** it, turning it into a 1d vector, it doesnt need any parameters. <br/>


## fully connected convolutional layers {#fully-connected-convolutional-layers}

suppose the input of a layer <img src="/ltximg/27d354edd92.svg" alt="\(\brm{x}^\ell\)" style="height: 0.9304em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> has size <img src="/ltximg/6e2562d72b3.svg" alt="\(D^\ell \times H^\ell \times W^\ell\)" style="height: 1.0121em; vertical-align: -0.1309em; display: inline-block" class="org-latex org-latex-inline" />. if we use convolution kernels whose size is <img src="/ltximg/6e2562d72b3.svg" alt="\(D^\ell \times H^\ell \times W^\ell\)" style="height: 1.0121em; vertical-align: -0.1309em; display: inline-block" class="org-latex org-latex-inline" />, then <img src="/ltximg/f72a1efd9d8.svg" alt="\(K^\ell\)" style="height: 0.9304em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> such kernels form an order 4 tensor in <img src="/ltximg/b6b36948461.svg" alt="\(K^\ell \times D^\ell \times H^\ell \times W^\ell\)" style="height: 1.0121em; vertical-align: -0.1309em; display: inline-block" class="org-latex org-latex-inline" />. the output would be <img src="/ltximg/4eafb65b6c3.svg" alt="\(\brm{y} \in \mathbb{R}^{K^\ell}\)" style="height: 1.2806em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, which is why these layers are sometimes used as flatten layers. <br/>
it is obvious that to compute any element in <img src="/ltximg/233c3ade62b.svg" alt="\(\brm{y}\)" style="height: 0.7130em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, we need to use all elements in the input <img src="/ltximg/27d354edd92.svg" alt="\(\brm{x}^\ell\)" style="height: 0.9304em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. hence, this layer is a fully connected layer, but can be implemented as a convolution layer. hence, we do not need to derive learning rules for a fully connected layer separately. <br/>
if the data has already been flattened in a preceding layer, then the input size would be <img src="/ltximg/17d7eff781e.svg" alt="\(\brm{x}^\ell \in \mathbb{R}^{K^{\ell-1}}\)" style="height: 1.1283em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" />, we use <img src="/ltximg/f72a1efd9d8.svg" alt="\(K^\ell\)" style="height: 0.9304em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> kernels of size <img src="/ltximg/b5053eaf8dd.svg" alt="\(K^{\ell-1}\)" style="height: 0.9304em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, which form a 2d matrix we can call <img src="/ltximg/bfb79e58d2f.svg" alt="\(M\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> of size <img src="/ltximg/13377f1008f.svg" alt="\(K^\ell \times K^{\ell-1}\)" style="height: 1.0121em; vertical-align: -0.1309em; display: inline-block" class="org-latex org-latex-inline" />. the convolution <img src="/ltximg/32d3d062746.svg" alt="\(M * \brm{x}^\ell\)" style="height: 0.9304em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, is exactly the same as the matrix multiplication <img src="/ltximg/94b39aa3bed.svg" alt="\(M_{K \times K^{\ell-1}} \times {{\brm{x}^\ell}^{T}}_{K^{\ell-1} \times 1}\)" style="height: 1.4373em; vertical-align: -0.3296em; display: inline-block" class="org-latex org-latex-inline" /> (<img src="/ltximg/bfb79e58d2f.svg" alt="\(M\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> multiplied by the transpose of the vector <img src="/ltximg/27d354edd92.svg" alt="\(\brm{x}^\ell\)" style="height: 0.9304em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />), which results in a matrix of size <img src="/ltximg/c407e615a95.svg" alt="\(K \times 1\)" style="height: 0.8497em; vertical-align: -0.1309em; display: inline-block" class="org-latex org-latex-inline" />, again meaning <img src="/ltximg/233c3ade62b.svg" alt="\(\brm{y}\)" style="height: 0.7130em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> is just a vector of size <img src="/ltximg/f72a1efd9d8.svg" alt="\(K^\ell\)" style="height: 0.9304em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, <img src="/ltximg/4eafb65b6c3.svg" alt="\(\brm{y} \in \mathbb{R}^{K^\ell}\)" style="height: 1.2806em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
because the convolution operation in this layer is equal to a matrix multiplication, the fully connected layers here behave in the same manner as in simple [multilayer perceptron](../20230502T235623--feedforward-neural-network__cs_math.md)s. <br/>
notice that here <img src="/ltximg/b5053eaf8dd.svg" alt="\(K^{\ell-1}\)" style="height: 0.9304em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> also equals the number of units in the <img src="/ltximg/ce369eb3609.svg" alt="\(l\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />-th layer. <br/>


## full example {#full-example}

consider the following network: <br/>
![](/ox-hugo/net.png) <br/>
let <img src="/ltximg/03a64bd7611.svg" alt="\(K^\ell_k\)" style="height: 1.2079em; vertical-align: -0.3267em; display: inline-block" class="org-latex org-latex-inline" /> denote the <img src="/ltximg/4d5f5bed723.svg" alt="\(k\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />th kernel of the <img src="/ltximg/be71d2c586a.svg" alt="\(\ell\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />th layer whose dimensions are denoted by <img src="/ltximg/66d32f8f22c.svg" alt="\(D_K^\ell \times H_K^\ell \times W_K^\ell\)" style="height: 1.2003em; vertical-align: -0.3191em; display: inline-block" class="org-latex org-latex-inline" /> (depth,height and width of the kernel tensor, respectively, although depth is irrelevant here), where <img src="/ltximg/07fb795e9bd.svg" alt="\(1 \le k \le t^\ell\)" style="height: 1.0636em; vertical-align: -0.1824em; display: inline-block" class="org-latex org-latex-inline" />, such that <img src="/ltximg/8be8719606c.svg" alt="\(t^\ell\)" style="height: 0.9304em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is the number of kernels in the <img src="/ltximg/be71d2c586a.svg" alt="\(\ell\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />th layer, let <img src="/ltximg/7721f833d30.svg" alt="\(B^\ell\)" style="height: 0.9304em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> denote the tensor of weights of layer <img src="/ltximg/be71d2c586a.svg" alt="\(\ell\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, let <img src="/ltximg/40cf84c1e15.svg" alt="\(I^\ell\)" style="height: 0.9304em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> denote the input to the <img src="/ltximg/be71d2c586a.svg" alt="\(\ell\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />th layer, let <img src="/ltximg/045f7ec82d2.svg" alt="\(\hat Y^\ell\)" style="height: 1.0212em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> denote the output of the <img src="/ltximg/be71d2c586a.svg" alt="\(\ell\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />th layer, let <img src="/ltximg/a20fd38cb31.svg" alt="\(S^\ell\)" style="height: 0.9304em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> denote the output before the activation function <br/>
(im using a different notation than in the image but it should be obvious which is which) <br/>
the parameters are <br/>

-   <img src="/ltximg/b25f14e7868.svg" alt="\(C1\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> or <img src="/ltximg/678a0e8f753.svg" alt="\(\ell=2\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, <img src="/ltximg/2cf03624e39.svg" alt="\(K_k^2\)" style="height: 1.1736em; vertical-align: -0.3267em; display: inline-block" class="org-latex org-latex-inline" /> of size <img src="/ltximg/cb509bf75c8.svg" alt="\(5 \times 5\)" style="height: 0.7972em; vertical-align: -0.1309em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/0fe71627026.svg" alt="\(B^2\)" style="height: 0.8961em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> of size 6, <img src="/ltximg/9f3821ad32d.svg" alt="\(1 \le k \le 6\)" style="height: 0.9122em; vertical-align: -0.1824em; display: inline-block" class="org-latex org-latex-inline" /> <br/>
-   <img src="/ltximg/36d02adf049.svg" alt="\(C2\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> or <img src="/ltximg/168496d9da8.svg" alt="\(\ell=4\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, <img src="/ltximg/df94dfdb5e9.svg" alt="\(K_i^4\)" style="height: 1.1512em; vertical-align: -0.3043em; display: inline-block" class="org-latex org-latex-inline" /> of size <img src="/ltximg/c6929e8326c.svg" alt="\(6 \times 5 \times 5\)" style="height: 0.7972em; vertical-align: -0.1309em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/fc7e6469f80.svg" alt="\(B^4\)" style="height: 0.8961em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> of size 2, <img src="/ltximg/c2fdb9fb0c5.svg" alt="\(1 \le k \le 12\)" style="height: 0.9122em; vertical-align: -0.1824em; display: inline-block" class="org-latex org-latex-inline" /> (size of the kernel is different from in the original figure) <br/>
-   <img src="/ltximg/f2f282cfb79.svg" alt="\(FC\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> or <img src="/ltximg/ceed151bd8d.svg" alt="\(\ell=6\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, <img src="/ltximg/69141910de2.svg" alt="\(W\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> of size <img src="/ltximg/28008962d56.svg" alt="\(10 \times 192\)" style="height: 0.7972em; vertical-align: -0.1309em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/d20d75d302d.svg" alt="\(B^6\)" style="height: 0.8961em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> of size <img src="/ltximg/061a4b54a10.svg" alt="\(10 \times 1\)" style="height: 0.7972em; vertical-align: -0.1309em; display: inline-block" class="org-latex org-latex-inline" /> <br/>

**feedforwarding for convolutional layer <img src="/ltximg/b25f14e7868.svg" alt="\(C1\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> or <img src="/ltximg/678a0e8f753.svg" alt="\(\ell=2\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />**: <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/d8e1c7bd508.svg" alt="\begin{align*}
  \hat Y_k^\ell &amp;amp;= \phi(I^\ell * K^\ell_k + B^\ell[k])\\
  \hat Y_k^\ell[i,j] &amp;amp;= \phi\left(\sum_{y=0}^{H_K^\ell-1} \sum_{x=0}^{W_K^\ell-1}I^\ell[y+i,x+j]K^\ell_k[H^\ell_K-y-1,W^\ell_K-x-1]+B^\ell[k]\right)
\end{align*}
" style="height: 5.6061em; vertical-align: -0.5392em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

where <img src="/ltximg/678a0e8f753.svg" alt="\(\ell=2\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> (i think its better to keep general notation than write 2 explicitly), <img src="/ltximg/9f3821ad32d.svg" alt="\(1 \le k \le 6\)" style="height: 0.9122em; vertical-align: -0.1824em; display: inline-block" class="org-latex org-latex-inline" />, <img src="/ltximg/c22faff1daa.svg" alt="\(1 \le y \le H_I^\ell-H_K^\ell+1,1 \le x \le W_I^\ell-W_K^\ell+1\)" style="height: 1.2003em; vertical-align: -0.3191em; display: inline-block" class="org-latex org-latex-inline" />, [taken from this convolution example](20230613T023148--convolution__math.md) <br/>
here <img src="/ltximg/469d4cd4068.svg" alt="\(H_I^\ell-H_K^\ell+1=24,W_I^\ell-W_K^\ell+1=24\)" style="height: 1.2003em; vertical-align: -0.3191em; display: inline-block" class="org-latex org-latex-inline" />, the dimensions of the output <img src="/ltximg/045f7ec82d2.svg" alt="\(\hat Y^\ell\)" style="height: 1.0212em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> are <img src="/ltximg/2dc162eec58.svg" alt="\(6 \times 24 \times 24\)" style="height: 0.7972em; vertical-align: -0.1309em; display: inline-block" class="org-latex org-latex-inline" /> <br/>
**feedforwarding for average pooling layer <img src="/ltximg/939ac9de4e2.svg" alt="\(S1\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> or <img src="/ltximg/4f9d12350eb.svg" alt="\(\ell=3\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />**: <br/>
<img src="/ltximg/32c1eb2aaa3.svg" alt="\[ \hat Y^\ell_k[i,j] = \frac{1}{W_K^\ell H_K^\ell}\sum_{x=iW_K^\ell}^{(i+1)W_K^\ell}\sum_{y=jH_K^\ell}^{(j+1)H_K^\ell} I_k^\ell[x,y] \]" style="height: 3.8965em; display: block" class="org-latex org-latex-block" /> <br/>
in words, we iterate through each block of size <img src="/ltximg/47e66f5bcda.svg" alt="\(W_K^\ell H_K^\ell\)" style="height: 1.2003em; vertical-align: -0.3191em; display: inline-block" class="org-latex org-latex-inline" /> (in each kernel) and pool it into a single pixel, here the size of the pooling kernels is <img src="/ltximg/fcb39ae6f2b.svg" alt="\(2 \times 2\)" style="height: 0.7972em; vertical-align: -0.1309em; display: inline-block" class="org-latex org-latex-inline" /> and the result is of dimensions <img src="/ltximg/bb657f382a3.svg" alt="\(6 \times 12 \times 12\)" style="height: 0.7972em; vertical-align: -0.1309em; display: inline-block" class="org-latex org-latex-inline" /> <br/>
**feedforwarding for convolutional layer <img src="/ltximg/36d02adf049.svg" alt="\(C2\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> or <img src="/ltximg/168496d9da8.svg" alt="\(\ell=4\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />**: <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/ed1ae6c0fec.svg" alt="\begin{align*}
  \hat Y_k^\ell &amp;amp;= \phi(I^\ell*K_k^\ell+B^\ell[k])\\
  \hat Y_k^\ell[i,j] &amp;amp;= \phi\left(\sum_{z=0}^{D_K^\ell-1}\sum_{y=0}^{H_K^\ell-1}\sum_{x=0}^{W_K^\ell-1}I^\ell[z,y+i,x+j]K^\ell_k[D_K^\ell-z-1,H_K^\ell-y-1,W_K^\ell-x-1]+B^\ell[k]\right)
\end{align*}
" style="height: 5.6061em; vertical-align: -0.4020em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

where <img src="/ltximg/67c96d9ba11.svg" alt="\(1 \le i \le 8,1 \le j \le 8,1 \le k \le 12\)" style="height: 0.9695em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, output is of dimensions <img src="/ltximg/6e21fd87b05.svg" alt="\(12 \times 8 \times 8\)" style="height: 0.7972em; vertical-align: -0.1309em; display: inline-block" class="org-latex org-latex-inline" />, we use <img src="/ltximg/674dd985ec1.svg" alt="\(z+1\)" style="height: 0.7968em; vertical-align: -0.1305em; display: inline-block" class="org-latex org-latex-inline" /> for the depth of the image because in truth what we're finding is <img src="/ltximg/84085428122.svg" alt="\(\hat Y_K^\ell[1,i,j]\)" style="height: 1.2911em; vertical-align: -0.3191em; display: inline-block" class="org-latex org-latex-inline" /> which is equal to <img src="/ltximg/3425fab42ff.svg" alt="\(\hat Y_k^\ell[i,j]\)" style="height: 1.2987em; vertical-align: -0.3267em; display: inline-block" class="org-latex org-latex-inline" /> but we omit an index of <img src="/ltximg/7bfe1637077.svg" alt="\(1\)" style="height: 0.7155em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> because its "implied" when its to the left <br/>

<div class="note" id="not-convnet-I-drop-index">

we use <img src="/ltximg/9ab179244a8.svg" alt="\(z\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> as the index to <img src="/ltximg/40cf84c1e15.svg" alt="\(I^\ell\)" style="height: 0.9304em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> because originally it would've been some variable index, but the result of the convolution is a tensor of order 2 (because the operands of the convolution have the same depth), but originally its meant ot be of order 3 (operands are of order 3), so we are "redimensioning" the result implicitly, if we were to use a variable, e.g. <img src="/ltximg/e423e7d0037.svg" alt="\(\hat Y^\ell_k[r,i,j]\)" style="height: 1.2987em; vertical-align: -0.3267em; display: inline-block" class="org-latex org-latex-inline" />, <img src="/ltximg/1f3fb55ba10.svg" alt="\(r\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> would turn out to equal just 0, because substituting <img src="/ltximg/dee156d9b61.svg" alt="\(r&amp;gt;0\)" style="height: 0.7538em; vertical-align: -0.0875em; display: inline-block" class="org-latex org-latex-inline" /> would result in an "overflow" in the summation, as when <img src="/ltximg/6b01d1c44ed.svg" alt="\(z=D_k^\ell-1\)" style="height: 1.2079em; vertical-align: -0.3267em; display: inline-block" class="org-latex org-latex-inline" />, we get <img src="/ltximg/780a220fe0d.svg" alt="\(I^\ell[z+r,y+i,x+j]=\vec{v}[D_K^\ell,y+i,x+j]\)" style="height: 1.2003em; vertical-align: -0.3191em; display: inline-block" class="org-latex org-latex-inline" />, which isnt defined (max index is <img src="/ltximg/edddd446e59.svg" alt="\(D_K^\ell-1\)" style="height: 1.2003em; vertical-align: -0.3191em; display: inline-block" class="org-latex org-latex-inline" /> not <img src="/ltximg/a1cffa25a3e.svg" alt="\(D_K^\ell\)" style="height: 1.2003em; vertical-align: -0.3191em; display: inline-block" class="org-latex org-latex-inline" />), therefore <img src="/ltximg/dac0141de46.svg" alt="\(Y_k^\ell[1,i,j]\)" style="height: 1.2079em; vertical-align: -0.3267em; display: inline-block" class="org-latex org-latex-inline" /> isnt defined and <img src="/ltximg/3b362dc71b5.svg" alt="\(r=0\)" style="height: 0.7155em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> in all cases, so we might aswell just write 0 or not consider it at all since adding 0 wouldnt affect a number. <br/>

</div>

**feedforwarding for average pooling layer <img src="/ltximg/452fca8d603.svg" alt="\(S2\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> or <img src="/ltximg/a2fb4c37a84.svg" alt="\(\ell=5\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />**: <br/>
<img src="/ltximg/32c1eb2aaa3.svg" alt="\[ \hat Y^\ell_k[i,j] = \frac{1}{W_K^\ell H_K^\ell}\sum_{x=iW_K^\ell}^{(i+1)W_K^\ell}\sum_{y=jH_K^\ell}^{(j+1)H_K^\ell} I_k^\ell[x,y] \]" style="height: 3.8965em; display: block" class="org-latex org-latex-block" /> <br/>
here the size of the kernels is <img src="/ltximg/fcb39ae6f2b.svg" alt="\(2 \times 2\)" style="height: 0.7972em; vertical-align: -0.1309em; display: inline-block" class="org-latex org-latex-inline" /> aswell, the output is of dimensions <img src="/ltximg/6d3a795c302.svg" alt="\(12 \times 4 \times 4\)" style="height: 0.7972em; vertical-align: -0.1309em; display: inline-block" class="org-latex org-latex-inline" /> <br/>
**vectorization before fully connected layer <img src="/ltximg/ceed151bd8d.svg" alt="\(\ell=6\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />** (may have its own layer): <br/>
<img src="/ltximg/3dcff68df43.svg" alt="\[ \vec{v} = (I^\ell[0,0,0], I^\ell[0,0,1], \dots, I^\ell[0,0,W_I^\ell], I^\ell[0,1,0], I^\ell[0,1,1], \dots, I^\ell[D_I^\ell,H_I^\ell,W_I^\ell])^\intercal \]" style="height: 1.5194em; display: block" class="org-latex org-latex-block" /> <br/>
the output is of size <img src="/ltximg/1406c5da1ee.svg" alt="\(12 \times 4 \times 4 = 192\)" style="height: 0.7972em; vertical-align: -0.1309em; display: inline-block" class="org-latex org-latex-inline" /> <br/>
**feedforwarding for fully connected layer <img src="/ltximg/f2f282cfb79.svg" alt="\(FC\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> or <img src="/ltximg/ceed151bd8d.svg" alt="\(\ell=6\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />**: <br/>

<div class="note">

in the image, the output layer and the last fully connected layer are treated as separate layers, this makes little sense because that way the fully connected layers would have no parameters, here we treat them as a single fully connected layer <br/>

</div>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/11aa30883d2.svg" alt="\begin{align*}
  \hat Y^\ell[k] &amp;amp;= \phi(\vec{v}*K_k^\ell+B^\ell[k])\\
  &amp;amp;= \phi\left(\sum_{x=0}^{W_K^\ell-1}\vec{v}[x]K_k^\ell[W_K^\ell-x-1]+B^\ell[k]\right)
\end{align*}
" style="height: 5.6061em; vertical-align: -0.5392em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

see [not-convnet-I-drop-index](20230520T175032--convolutional-neural-network__cs_lispcode_math.md) as to why i wrote <img src="/ltximg/05252d2a239.svg" alt="\(x+1\)" style="height: 0.7968em; vertical-align: -0.1305em; display: inline-block" class="org-latex org-latex-inline" /> <br/>
let <img src="/ltximg/acbe845993a.svg" alt="\(flip(A)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> denote the flipping of a matrix <img src="/ltximg/331a4469ec0.svg" alt="\(A\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> over both axes so that the indicies may be reversed, i.e. <img src="/ltximg/ab1e8d46ed6.svg" alt="\(flip(A[i,j])=A[-i,-j]\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> (a negative index implies an index that is subtracted from the size of the dimension along with the value 1). we can show that this layer resembles the usual fully connected layer from simple multilayer perceptrons by turning the convolution into matrix multiplication: <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/d10f6e6aa08.svg" alt="\begin{align*}
  \hat Y^\ell[k] &amp;amp;= \phi\left(\sum_{x=0}^{W_K^\ell-1}\vec{v}[x]K_k^\ell[W_K^\ell-x-1]+B^\ell[k]\right)\\
  &amp;amp;= \phi\left(\sum_{x=0}^{W_K^\ell-1}K_k^\ell[W_K^\ell-x-1]\vec{v}[x]+B^\ell[k]\right)\\
  &amp;amp;= \phi\left(\sum_{x=1}^{W_K^\ell}K_k^\ell[W_K^\ell-x]\vec{v}[x-1]+B^\ell[k]\right)\\
  &amp;amp;= \phi\left(\sum_{x=1}^{W_K^\ell}flip(K^\ell)[k,x-1]\vec{v}[x-1]+B^\ell[k]\right)
\end{align*}
" style="height: 15.7201em; vertical-align: -0.5392em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

where <img src="/ltximg/bfc832c64a7.svg" alt="\(1 \le k &amp;lt; 10\)" style="height: 0.9122em; vertical-align: -0.1824em; display: inline-block" class="org-latex org-latex-inline" /> (layer contains 10 fully connected kernels), the output is of size 10, here <img src="/ltximg/405384da15d.svg" alt="\(W_I^\ell=192\)" style="height: 1.2003em; vertical-align: -0.3191em; display: inline-block" class="org-latex org-latex-inline" /> and the size of each kernel is <img src="/ltximg/46aae472d65.svg" alt="\(192\)" style="height: 0.7155em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> (<img src="/ltximg/ee2a56142c3.svg" alt="\(W_K^\ell=192,H_K^\ell=1,D_K^\ell=1\)" style="height: 1.2003em; vertical-align: -0.3191em; display: inline-block" class="org-latex org-latex-inline" />) <br/>
in vector notation, we write (notice that <img src="/ltximg/1e63979bcde.svg" alt="\(flip(K^\ell)\vec{v}\)" style="height: 1.1754em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> results in a vector): <br/>
<img src="/ltximg/1cfb7a25c72.svg" alt="\[ \hat Y^\ell = \phi(flip(K^\ell)\vec{v}+B^\ell) \]" style="height: 1.5194em; display: block" class="org-latex org-latex-block" /> <br/>
at this point we'd have arrived at the output layer and the output of the neural network would be <img src="/ltximg/d3feb0020e3.svg" alt="\(\hat Y^6\)" style="height: 1.0212em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> or simply <img src="/ltximg/7cd534a091d.svg" alt="\(\hat Y\)" style="height: 1.0212em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> (the output of the last fully connected layer which itself is the output layer), assuming the quadratic loss function, and assuming the desired output is <img src="/ltximg/973a63d7289.svg" alt="\(\vec{y}\)" style="height: 0.9891em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, the loss function would be defined as: <br/>
<img src="/ltximg/9d0e28c7f41.svg" alt="\[ L = \frac{1}{2}||\hat Y-\vec{y}||^2 = \frac{1}{2}\sum_{i=1}^{10} (\hat Y[i]-\vec{y}[i])^2 \]" style="height: 3.2157em; display: block" class="org-latex org-latex-block" /> <br/>
now we can begin to backpropagate the error, <img src="/ltximg/619b9ef96ff.svg" alt="\(\Delta\)" style="height: 0.8000em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> followed by an object denotes the error at that specific object or point: <br/>
**backpropagation for fully connected layer <img src="/ltximg/f2f282cfb79.svg" alt="\(FC\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> or <img src="/ltximg/ceed151bd8d.svg" alt="\(\ell=6\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />**: <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/bb1a0dcba86.svg" alt="\begin{align*}
  \Delta K^\ell_k[i] &amp;amp;= \frac{\partial L}{\partial K^\ell_k[i]}\\
  &amp;amp;= \frac{\partial L}{\partial \hat Y^\ell[k]}\frac{\partial \vec{y}[k]}{\partial K^\ell_k[i]}\\
  &amp;amp;= (\hat Y^\ell[k]-\vec{y}[k])\frac{\partial}{\partial K^\ell_k[i]}\phi\left(\sum_{x=0}^{W_K^\ell-1}\vec{v}[x]K_k^\ell[W_K^\ell-x-1]+B^\ell[k]\right)\\
  &amp;amp;= (\hat Y^\ell[k]-\vec{y}[k])\phi'\left(\sum_{x=0}^{W_K^\ell-1}\vec{v}[x]K_k^\ell[W_K^\ell-x-1]+B^\ell[k]\right)\vec{v}[W_K^\ell-i-1]\\
  &amp;amp;= (\hat Y^\ell[k]-\vec{y}[k])\phi'(S^\ell[k])\vec{v}[W_K^\ell-i-1]
\end{align*}
" style="height: 15.0171em; vertical-align: -0.4020em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

where <img src="/ltximg/0c8c20105d4.svg" alt="\(1 \le i &amp;lt; W_K^\ell, 1 \le k &amp;lt; t^\ell\)" style="height: 1.2003em; vertical-align: -0.3191em; display: inline-block" class="org-latex org-latex-inline" />, here <img src="/ltximg/a2a916d9903.svg" alt="\(W_K^\ell=120,t^\ell=10\)" style="height: 1.2003em; vertical-align: -0.3191em; display: inline-block" class="org-latex org-latex-inline" />, notice that <img src="/ltximg/6b41a5c1bbd.svg" alt="\(\vec{v}[k]=\phi(S^\ell[k])\)" style="height: 1.1754em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> <br/>
let <img src="/ltximg/00da3a82ed9.svg" alt="\(\Delta S^\ell[k]=(\hat Y^\ell[k]-\vec{y}[k])\phi'(S[k])\)" style="height: 1.2662em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, whose size would be 10, then: <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/3a218ee14e8.svg" alt="\begin{align*}
  \Delta K^\ell_k[i] &amp;amp;= \Delta S^\ell[k]\vec{v}[W_K^\ell-i-1]\\
  &amp;amp;= \Delta S^\ell[k]flip(\vec{v})[i]\\
  &amp;amp;= \Delta S^\ell[k]flip(\vec{v})[i]\\
  \implies \Delta K^\ell &amp;amp;= \Delta S^\ell \times flip(\vec{v})^T
\end{align*}
" style="height: 6.5046em; vertical-align: -0.4020em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

we arrived at an equation in matrix notation which is convenient (<img src="/ltximg/77363a85478.svg" alt="\(\vec{v}\)" style="height: 0.7985em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> was a column vector initially) <br/>
**backpropagation through flatten layer before <img src="/ltximg/f2f282cfb79.svg" alt="\(FC\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />** <br/>
recall that during feedforwarding, the flatten layer turned the tensor of feature maps which is of the third order into a single vector, the deltas defined by the layer during backpropagation is a vector aswell, which we need to turn them into a tensor of the third order that resembles the delta at each entry in the tensor of the feature maps <br/>
first we find the delta at each entry in the vector: <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/06132b3f34e.svg" alt="\begin{align*}
  \Delta\vec{v}[j] &amp;amp;= \frac{\partial L}{\partial \vec{v}[j]}\\
  &amp;amp;= \sum_{k=0}^{t^\ell} \frac{\partial L}{\partial \vec{y}[k]}\frac{\partial \vec{y}[k]}{\partial \vec{v}[j]}\\
  &amp;amp;= \sum_{k=0}^{t^\ell} (\hat Y^\ell[k]-\vec{y}[k])\frac{\partial}{\partial\vec{v}[j]}\phi\left(\sum_{x=0}^{W_K^\ell-1}\vec{v}[x]K_k^\ell[W_K^\ell-x-1]+B^\ell[k]\right)\\
  &amp;amp;= \sum_{k=0}^{t^\ell} (\hat Y^\ell[k]-\vec{y}[k])\phi'(S^\ell[k])\frac{\partial}{\partial\vec{v}[j]}\sum_{x=0}^{W_K^\ell-1}\vec{v}[x]K_k^\ell[W_K^\ell-x-1]+B^\ell[k]\\
  &amp;amp;= \sum_{k=0}^{t^\ell} (\hat Y^\ell[k]-\vec{y}[k])\phi'(S^\ell[k])K^\ell_k[W_K^\ell-j-1]\\
  &amp;amp;= \sum_{k=0}^{t^\ell} \Delta S^\ell[k]K^\ell_k[W_K^\ell-j-1]\\
  &amp;amp;= \sum_{k=0}^{t^\ell} \Delta S^\ell[k]flip(K^\ell_k)[j]\\
  \implies \Delta \vec{v} &amp;amp;= \Delta S^\ell \times flip(K_k^\ell)^T
\end{align*}
" style="height: 26.3095em; vertical-align: -0.4020em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

notice that <img src="/ltximg/405384da15d.svg" alt="\(W_I^\ell=192\)" style="height: 1.2003em; vertical-align: -0.3191em; display: inline-block" class="org-latex org-latex-inline" /> <br/>
where <img src="/ltximg/28e287fe07d.svg" alt="\(0 \le j &amp;lt; 192\)" style="height: 0.9353em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> because 192 is the total size of the tensor received from <img src="/ltximg/a2fb4c37a84.svg" alt="\(\ell=5\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> during feedforwarding <br/>
now the vector of deltas <img src="/ltximg/219360a4ff6.svg" alt="\(\Delta \vec{v}\)" style="height: 0.8000em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> needs to be reshaped into a tensor of the third order so that we may then send it to the next layer in the process, <img src="/ltximg/a2fb4c37a84.svg" alt="\(\ell=5\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, which is a pooling layer <br/>
the reshaping should be the exact inverse of the row-major vectorization we did during feedforwarding <br/>
<img src="/ltximg/2a80b1efbbc.svg" alt="\[ \Delta I^{\ell}[\floor*{(i+1)/D_I^\ell H_I^\ell W_I^\ell},\floor*{((i+1)\bmod D_I^\ell H_I^\ell W_I^\ell)/H_I^\ell W_I^\ell},(i+1) \bmod H_I^\ell W_I^\ell] = \Delta\vec{v}[i] \]" style="height: 1.6174em; display: block" class="org-latex org-latex-block" /> <br/>
such that <img src="/ltximg/4d2b82f3f35.svg" alt="\(0 \le i &amp;lt; W_I^\ell H_I^\ell D_I^\ell\)" style="height: 1.2003em; vertical-align: -0.3191em; display: inline-block" class="org-latex org-latex-inline" />, here <img src="/ltximg/6b36e6eb408.svg" alt="\(W_I^\ell H_I^\ell D_I^\ell=192\)" style="height: 1.2003em; vertical-align: -0.3191em; display: inline-block" class="org-latex org-latex-inline" />, note that <img src="/ltximg/899bf89805d.svg" alt="\(\Delta\hat Y^{\ell-1}=\Delta I^\ell\)" style="height: 1.0212em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> <br/>
**backpropagation through average pooling layer <img src="/ltximg/a2fb4c37a84.svg" alt="\(\ell=5\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />**: <br/>
recall that this layer downscaled the input given to it during feedforwarding from its preceding layer <img src="/ltximg/168496d9da8.svg" alt="\(\ell=4\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, so during backpropagation, when it responds to the next layer which is the one it got the initial message from during feedforwarding it needs to scale its message back up to the dimensions of the input it got from that layer, that "message" would be the deltas: <br/>
<img src="/ltximg/38a131e54e3.svg" alt="\[ \Delta \hat Y^{\ell-1}[k,i,j] = \frac{1}{H_K^\ell W_K^\ell}\Delta \hat Y^\ell[k,\ceil*{(i+1)/H_K^\ell},\ceil*{(j+1)/W_K^\ell}] \quad 0 \le i &amp;lt; H_I^\ell,0 \le j &amp;lt; W_I^\ell,0 \le k &amp;lt; t^\ell \]" style="height: 2.4706em; display: block" class="org-latex org-latex-block" /> <br/>
**backpropagation through convolutional layer <img src="/ltximg/168496d9da8.svg" alt="\(\ell=4\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />**: <br/>


<div id="org962da23" class="equation-container">
<span class="equation">
<img src="/ltximg/74d3a71ae50.svg" alt="\begin{align*}
  \Delta K^\ell_k[r,u,v] &amp;amp;= \frac{\partial L}{\partial K_k^\ell[r,u,v]}\\
  &amp;amp;= \sum_{i=0}^{H_I^{\ell+0}-1} \sum_{j=1}^{W_I^{\ell+0}-1} \frac{\partial L}{\partial \hat Y_k^\ell[i,j]}\frac{\partial \hat Y_k^\ell[i,j]}{\partial K_k^\ell[r,u,v]}\\
  &amp;amp;= \sum_{i=0}^{H_I^{\ell+1}-1} \sum_{j=0}^{W_I^{\ell+1}-1} \Delta\hat Y_k^\ell[i,j]\frac{\partial}{\partial K_k^\ell[r,u,v]}\phi\left(\sum_{z=0}^{D_K^\ell-1}\sum_{y=0}^{H_K^\ell-1}\sum_{x=0}^{W_K^\ell-1}I^\ell[z,y+i,x+j]K^\ell_k[D_K^\ell-z-1,H_K^\ell-y-1,W_K^\ell-x-1]+B^\ell[k]\right)\\
  &amp;amp;= \sum_{i=0}^{H_I^{\ell+1}-1} \sum_{j=0}^{W_I^{\ell+1}-1} \Delta\hat Y_k^\ell[i,j]\phi'(S^\ell_k[i,j])I^\ell[D_K^\ell-r-1,H_K^\ell-u-1+i,W_K^\ell-v-1+j]
\end{align*}
" style="height: 14.4609em; vertical-align: -0.4020em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

where <img src="/ltximg/83cbd67c1c1.svg" alt="\(0 \le k &amp;lt; t^\ell,0 \le r &amp;lt; D_K^\ell,0 \le u &amp;lt; H_K^\ell,0 \le v &amp;lt; W_K^\ell\)" style="height: 1.2003em; vertical-align: -0.3191em; display: inline-block" class="org-latex org-latex-inline" /> <br/>
see [not-convnet-I-indicies](20230520T175032--convolutional-neural-network__cs_lispcode_math.md) about the indicies of <img src="/ltximg/299e26f6b29.svg" alt="\(I\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> (the note talks about the indicies of <img src="/ltximg/94bbaddc021.svg" alt="\(K\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> but the same fact applies to <img src="/ltximg/299e26f6b29.svg" alt="\(I\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> here) <br/>
let <img src="/ltximg/f88d2ca333f.svg" alt="\(\Delta S_{k}^\ell\)" style="height: 1.2079em; vertical-align: -0.3267em; display: inline-block" class="org-latex org-latex-inline" /> be the error after (after in terms of backpropagation, before in terms of feedforwarding) the activation function: <br/>
<img src="/ltximg/6765f526394.svg" alt="\[ \Delta S_k^\ell[i,j] = \Delta \hat Y_k^\ell[i,j]\phi'(S_k^\ell[i,j]) \]" style="height: 1.5194em; display: block" class="org-latex org-latex-block" /> <br/>
then: <br/>
<img src="/ltximg/86f385ae4d3.svg" alt="\[ \Delta K^\ell_k[r,u,v] = \sum_{i=0}^{H_I^{\ell+1}-1} \sum_{j=0}^{W_I^{\ell+1}-1} \Delta S_k^\ell[i,j]I^\ell[D_K^\ell-r-1,H_K^\ell-u-1+i,W_K^\ell-v-1+j] \]" style="height: 3.7337em; display: block" class="org-latex org-latex-block" /> <br/>
now for the bias: <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/41dc6208708.svg" alt="\begin{align*}
  \Delta B^\ell[k] &amp;amp;= \frac{\partial L}{\partial B^\ell[k]}\\
  &amp;amp;= \sum_{i=0}^{H_I^{\ell+1}-1} \sum_{j=0}^{W_I^{\ell+1}-1} \frac{\partial L}{\partial \hat Y_k^\ell[i,j]}\frac{\partial \hat Y_k^\ell[i,j]}{\partial B^\ell[k]}\\
  &amp;amp;= \sum_{i=0}^{H_I^{\ell+1}-1} \sum_{j=0}^{W_I^{\ell+1}-1} \Delta\hat Y_k^\ell[i,j]\frac{\partial}{\partial B^\ell[k]}\phi\left(\sum_{z=0}^{D_K^\ell-1}\sum_{y=0}^{H_K^\ell-1}\sum_{x=0}^{W_K^\ell-1}I^\ell[z,y+i,x+j]K^\ell_k[D_K^\ell-z-1,H_K^\ell-y-1,W_K^\ell-x-1]+B^\ell[k]\right)\\
  &amp;amp;= \sum_{i=0}^{H_I^{\ell+1}-1} \sum_{j=0}^{W_I^{\ell+1}-1} \Delta\hat Y_k^\ell[i,j]\phi'(S_k^\ell[i,j])\\
  &amp;amp;= \sum_{i=0}^{H_I^{\ell+1}-1} \sum_{j=0}^{W_I^{\ell+1}-1} \Delta S^\ell_k[i,j]
\end{align*}
" style="height: 18.3056em; vertical-align: -0.4020em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

now we find the deltas at <img src="/ltximg/40cf84c1e15.svg" alt="\(I^\ell\)" style="height: 0.9304em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> or <img src="/ltximg/2034f4ed84a.svg" alt="\(\hat Y^{\ell-1}\)" style="height: 1.0212em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, because thats what the next layer in backpropagation, <img src="/ltximg/4f9d12350eb.svg" alt="\(\ell=3\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, needs <br/>


<div id="orgb1c052d" class="equation-container">
<span class="equation">
<img src="/ltximg/6cf3085e390.svg" alt="\begin{align}
  \Delta I^\ell[r,u,v] &amp;amp;= \frac{\partial L}{\partial I^\ell[r,u,v]}\\
  &amp;amp;= \sum_{k=0}^{D_I^{\ell+1}-1} \sum_{i=0}^{H_I^{\ell+1}-1} \sum_{j=0}^{W_I^{\ell+1}-1} \frac{\partial L}{\partial \hat Y_k^\ell[i,j]}\frac{\partial \hat Y_k^\ell[i,j]}{\partial I^\ell[r,u,v]}\\
  &amp;amp;= \sum_{k=0}^{D_I^{\ell+1}-1} \sum_{i=0}^{H_I^{\ell+1}-1} \sum_{j=0}^{W_I^{\ell+1}-1} \Delta\hat Y_k^\ell[i,j]\frac{\partial}{\partial I^\ell[r,u,v]}\phi\left(\sum_{z=0}^{D_K^\ell-1}\sum_{y=0}^{H_K^\ell-1}\sum_{x=0}^{W_K^\ell-1}I^\ell[z,y+i,x+j]K^\ell_k[D_K^\ell-z-1,H_K^\ell-y-1,W_K^\ell-x-1]+B^\ell[k]\right)\\
  &amp;amp;= \sum_{k=0}^{D_I^{\ell+1}-1} \sum_{i=0}^{H_I^{\ell+1}-1} \sum_{j=0}^{W_I^{\ell+1}-1} \Delta\hat Y_k^\ell[i,j]\phi'(S_k^\ell[i,j])K_k^\ell[D_K^\ell-r-1,H_K^\ell-u-1+i,W_K^\ell-v-1+j]\\
  &amp;amp;= \sum_{k=0}^{D_I^{\ell+1}-1} \sum_{i=0}^{H_I^{\ell+1}-1} \sum_{j=0}^{W_I^{\ell+1}-1} \Delta S_k^\ell[i,j] K_k^\ell[\underbrace{D_K^\ell-r-1,H_K^\ell-u-1+i,W_K^\ell-v-1+j}_{(D^\ell_K,H_K^\ell,W_K^\ell)-(r,u,v)-(1,1,1)+(0,i,j)}] \label{eq-convnet-1}
\end{align}
" style="height: 22.6994em; vertical-align: -0.4020em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

such that <img src="/ltximg/857baf72514.svg" alt="\(0 \le r &amp;lt; D_I^\ell, 0 \le u &amp;lt; H_I^\ell, 0 \le v &amp;lt; W_I^\ell\)" style="height: 1.2003em; vertical-align: -0.3191em; display: inline-block" class="org-latex org-latex-inline" />. here, <img src="/ltximg/e80a21158ce.svg" alt="\(\Delta I^\ell\)" style="height: 0.9304em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> are the deltas that need to be passed onto the next layer <img src="/ltximg/4f9d12350eb.svg" alt="\(\ell=3\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> <br/>

<div class="note" id="not-convnet-I-indicies">

its important to notice how in [eq-convnet-1](20230520T175032--convolutional-neural-network__cs_lispcode_math.md) the indicies <img src="/ltximg/0d1b822af9e.svg" alt="\(r,u,v\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, which are indexing <img src="/ltximg/40cf84c1e15.svg" alt="\(I^\ell\)" style="height: 0.9304em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> are each subtracted from the dimensions of the kernels and then the indicies <img src="/ltximg/d44e0d42766.svg" alt="\(0,i,j\)" style="height: 0.9353em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> which are indexing <img src="/ltximg/efc9e871e76.svg" alt="\(S^\ell_k\)" style="height: 1.2079em; vertical-align: -0.3267em; display: inline-block" class="org-latex org-latex-inline" /> are added element-wise aswell, this is important as its a property that is later exploited in the code for backpropagation <br/>
i should also note that the process of backpropagation in a convolutional layer, just like the feedforwarding process, resembles that of a convolutional one, i have yet to find out how to show that this follows from these math formulas <br/>
furthermore, here the expression [eq-convnet-1](20230520T175032--convolutional-neural-network__cs_lispcode_math.md) would be correct only when the indicies of <img src="/ltximg/94bbaddc021.svg" alt="\(K\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> are in the correct range, so not less than 0 and not bigger than the size of the dimension theyre in, i think this happens because a single <img src="/ltximg/2958c1422d2.svg" alt="\(\Delta I[,,,]\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> doesnt affect all entries in the output but we're differentiating with respect to all entries in the output, perhaps in the future i'll improve upon these formulas <br/>

</div>


## architecture {#architecture}


### LeNet-5 {#lenet-5}

the **lenet-5** one of the earliest and most basic CNN architecture. <br/>
it consists of 7 layers. the first layer consists of an input image with dimensions of 32x32. it is convolved with 6 filters of size 5x5 resulting in dimension of 28x28x6. the second layer is a pooling operation with a filter of size 2×2 and stride of 2. hence the resulting image dimension will be 14x14x6. <br/>
similarly, the third layer also involves in a convolution operation with 16 filters of size 5x5 followed by a fourth pooling layer with similar filter size of 2x2 and stride of 2. thus, the resulting image dimension will be reduced to 5x5x16. <br/>
once the image dimension is reduced, the fifth layer is a fully connected convolutional layer with 120 filters each of size 5×5. in this layer, each of the 120 units in this layer will be connected to the 400 (5x5x16) units from the previous layers. the sixth layer is also a fully connected layer with 84 units. <br/>
the final seventh layer will be a softmax output layer with <img src="/ltximg/b32b0f8a94b.svg" alt="\(n\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> possible classes depending upon the number of classes in the dataset. <br/>

{{< figure src="/ox-hugo/lenet5.png" >}} <br/>


## common lisp implementation {#common-lisp-implementation}


### an abstract structure for networks {#an-abstract-structure-for-networks}

after having studied cnn's, i realied i need a more flexible data structure for networks than what i had in [simple feedforward networks](../20230502T235623--feedforward-neural-network__cs_math.md), because with simple perceptrons i only used one type of layer, with cnn's we need to be able to build networks with arbitrary layers, so i dropped my previous progress and started over: <br/>

<a id="code-snippet--src-network"></a>
```lisp
(defgeneric feedforward (layer x)
  (:documentation "feed-forward, return activations to pass to next layer"))

(defgeneric propbackward (layer layer-x layer-y layer-y-unactivated propped-deltas learning-rate)
  (:documentation "backward-popagation, return gradients to pass to preceding layer"))

(defclass layer ()
  ((weights :initarg :weights :initform nil :accessor layer-weights) ;; weights going into the layer's units
   (biases :initarg :biases :initform nil :accessor layer-biases)
   ;; per-layer activation functions (same activation function for all units in the layer)
   (activation-function :initarg :activation-function :initform #'relu :accessor layer-activation-function)
   (activation-function-derivative :initarg :activation-function-derivative :initform #'relu-derivative :accessor layer-activation-function-derivative)
   ;; use tensor-activation-function and tensor-activation-function-derivative only if you want per-unit special activation functions, they take the indicies list (multidimensional index) of a unit and return a function to use for activation
   (tensor-activation-function :initarg :tensor-activation-function :accessor layer-tensor-activation-function)
   (tensor-activation-function-derivative :initarg :tensor-activation-function-derivative :accessor layer-tensor-activation-function-derivative)))

(defclass network ()
  ((layers :initarg :layers :initform nil :accessor network-layers)
   (learning-rate :initform 0.0005 :initarg :learning-rate :accessor network-learning-rate)))

(defun make-network (&key learning-rate layers)
  (make-instance
   'network
   :layers layers
   :learning-rate (or learning-rate 0.0005)))

(defmethod network-feedforward ((n network) x)
  "x is a tensor, feedforward to the last layer and return its output"
  (with-slots (layers) n
    ;; last-out is needed to keep the output of the lastly feedforwarded layer, the output of the layers is pushed onto the list which means they are stored in reverse order, to be later popped also in "reverse" order for backprop, this means that the first entry in out-list corresponds to the output layer, this should be better than storing them in normal order because we use a list and later we need to iterate from the output of the last layer to the first layer, each entry in the list is a cons with the first element as the activated output and second as the unactivated output
    (let ((last-out x)
          (out-list nil))
      (loop for layer in layers
            do (multiple-value-bind (new-out new-out-unactivated)
                   (feedforward layer last-out)
                 (push (cons new-out new-out-unactivated) out-list)
                 (setf last-out new-out)))
      out-list)))
```


### convolutional layer {#convolutional-layer}

we use the relu by default to reduce the risk of a vanishing gradient <br/>

<div class="note">

i should note that later on, during the writing of `propbackward` for convolutional layers, i realized that i needed some more data from `feedforward` than im currently returning, so `feedforward` functions needed some slight modifications which also meant i needed to rewrite the `network-feedforward` function <br/>
i needed more data like the unactivated output tensor of a layer, not just the final output of the layer, and the input to the layer <br/>
it also happened to me during the previous implementation in [feedforward neural network](../20230502T235623--feedforward-neural-network__cs_math.md), but it seems i didnt learn from my first encounter with that brickwall, lol. <br/>

</div>

but which weights should a `layer` object store? the weights that go into it, i.e. the layers that come out of the previous layer and land on _this_ layer? or should it store the weights that are represented by the connections that come out of it and reach for the next layer in the network? at first it seemed the latter made more sense, but thats not the case, lets reconsider the equation for a neuron's activation [eq-neuron](20230502T235623--feedforward-neural-network__cs_math.md), a neurons value is determined by the weights that go into it from the previous layer, not the weights going out of it into the next one, and since a layer is composed of units, and each unit depends on the weights coming into it, it already makes sense that we store the weights that go into the layer in its object, not the weights coming out of it, plus, if we were to use the second approach a layer would have to store the activation function of the next layer not the activation function of itself, which makes no sense. <br/>
i also went through the source code of [tensorflow](https://github.com/tensorflow/tensorflow/blob/master/tensorflow/python/keras/engine/base_layer.py) and it seems this is what they're doing aswell. this will be the assumption in my code. <br/>
time to implement different types of layers, starting with convolutional layer: <br/>

<a id="code-snippet--src-convolutional-layer"></a>
```lisp
(defclass convolutional-layer (layer)
  ()
  (:documentation "a layer that arbitrary dimensions for its weights tensor, and convolves it with an arbitrary input tensor (convolution layer of arbitrary dimensions), the weights tensor should be 1 order higher that the input tensor, e.g. if the input tensor is a 3d tensor (image with feature maps), the shape of the weights tensor should be of 4 dimensions (4d tensor), the output tensor of the layer would be of the same order as the input tensor"))

(defun make-convolutional-layer (&key dims activation-function
                                   activation-function-derivative
                                   tensor-activation-function
                                   tensor-activation-function-derivative)
  "consutrctor for convolutional layers"
  (make-instance
   'convolutional-layer
   :weights (random-tensor dims)
   :biases (random-tensor (car dims))
   :activation-function activation-function
   :activation-function-derivative activation-function-derivative
   :tensor-activation-function tensor-activation-function
   :tensor-activation-function-derivative tensor-activation-function-derivative))

(defmethod feedforward ((l convolutional-layer) x)
  "x is an arbitrary tensor"
  (with-slots (weights biases activation-function tensor-activation-function) l
    (let* ((num-kernels (array-dimension weights 0))
           (convolution-out-size
             (mapcar
              (lambda (img-d ker-d) (- img-d (1- ker-d)))
              (array-dimensions x)
              (cdr (array-dimensions weights))))
           (out (make-array (append (list num-kernels) convolution-out-size))))
      (loop for kernel-idx from 0 below num-kernels
            do (set-array-nth
                out
                (array-map (lambda (cell) (+ cell (aref biases kernel-idx)))
                           (tensor-convolution
                            x
                            (array-nth weights kernel-idx)))
                kernel-idx))
      ;; we return 2 values, the output tensor and the unactivated output tensor
      (if tensor-activation-function
          ;; apply per-unit activation functions
          (values
           (array-map-indicies out tensor-activation-function)
           out)
          ;; apply single activation function to all units in the layer
          (values (array-map activation-function out) out)))))

(defclass 3d-convolutional-layer (convolutional-layer)
  ()
  (:documentation "a convolutional layer with 4d weights tensor and 3d input/output tensors, the depths of the input and weight tensors should be the same, this is used for convolving images with feature maps (channels)
to see the difference between this and the parent class consider the following examples:
CL-USER> (array-dimensions (let ((l (make-convolutional-layer :dims '(2 3 3 3))))
                    (feedforward l (random-tensor '(3 6 6)))))
=> (2 1 4 4)
CL-USER> (array-dimensions (let ((l (make-3d-convolutional-layer-from-dims :dims '(2 3 3 3))))
                    (feedforward l (random-tensor '(3 6 6)))))
=> (2 4 4)
"))

(defmethod feedforward :around ((l 3d-convolutional-layer) x)
  "grab the output of the parent arbitrary-convolution class, reshape it and return it, as there is always redundant dimension in the 4d tensor, this happens because the tensors (input and weights) have the same depth when doing image convolution"
  (multiple-value-bind (out unactivated-out) (call-next-method) ;; output of parent class' feedforward
    (let ((actual-convolution-out-size
            (append (list (array-dimension out 0))
                    (cdr (cdr (array-dimensions out))))))
      (values (make-array actual-convolution-out-size :displaced-to out)
              (make-array actual-convolution-out-size :displaced-to unactivated-out)))))

(defun make-3d-convolutional-layer-from-dims (&key dims activation-function activation-function-derivative tensor-activation-function tensor-activation-function-derivative)
  "consutrctor for convolutional layers"
  (make-instance
   '3d-convolutional-layer
   :activation-function activation-function
   :activation-function-derivative activation-function-derivative
   :tensor-activation-function tensor-activation-function
   :tensor-activation-function-derivative tensor-activation-function-derivative
   :weights (random-tensor dims)
   :biases (random-tensor (car dims))))

(defun make-3d-convolutional-layer (&key activation-function activation-function-derivative num-kernels kernel-depth kernel-height kernel-width tensor-activation-function tensor-activation-function-derivative)
  "consutrctor for convolutional layers"
  (make-instance
   '3d-convolutional-layer
   :activation-function activation-function
   :activation-function-derivative activation-function-derivative
   :tensor-activation-function tensor-activation-function
   :tensor-activation-function-derivative tensor-activation-function-derivative
   :weights (random-tensor (list num-kernels kernel-depth kernel-height kernel-width))
   :biases (random-tensor num-kernels)))
```


### pooling layer {#pooling-layer}

pooling layer: <br/>

<a id="code-snippet--src-pooling-layer"></a>
```lisp
(defclass pooling-layer (layer)
  ((rows :initarg :rows :accessor pooling-layer-rows)
   (cols :initarg :cols :accessor pooling-layer-cols)
   (pooling-function :initarg :pooling-function :accessor pooling-layer-function)
   (unpooling-function :initarg :unpooling-function :accessor pooling-layer-unpooling-function))) ;; unpooling-function will make sense when you read later on

(defun max-pooling-function (myvec)
  (reduce #'max myvec))

(defun average-pooling-function (myvec)
  (/ (reduce #'+ myvec) (length myvec)))

(defun make-pooling-layer (&key rows cols pooling-function unpooling-function)
  (make-instance
   'pooling-layer
   :rows rows
   :cols cols
   :pooling-function (or pooling-function #'average-pooling-function)
   :unpooling-function (or unpooling-function #'average-unpooling-function)))

(defmethod feedforward ((l pooling-layer) x)
  "x is a tensor of the third order, which in case of the first layer is the actual image"
  (with-slots (rows cols pooling-function) l
    (let* ((num-channels (array-depth x))
           (img-rows (array-rows x))
           (img-cols (array-cols x))
           (out-rows (/ img-rows rows))
           (out-cols (/ img-cols cols))
           (out (make-array (list num-channels out-rows out-cols))))
      (loop for channel-idx from 0 below num-channels
            do (loop for img-row-idx from 0 below img-rows by rows
                     do (loop for img-col-idx from 0 below img-cols by cols
                              do (let ((out-row-idx (/ img-row-idx rows))
                                       (out-col-idx (/ img-col-idx cols)))
                                   (setf
                                    (aref out channel-idx out-row-idx out-col-idx)
                                    (funcall
                                     pooling-function
                                     (vectorize-array
                                      (subarray
                                       x
                                       (list channel-idx img-row-idx img-col-idx)
                                       (list rows cols)))))))))
      out)))
```


### flatten layer {#flatten-layer}

a flatten layer, which is used to reduce dimensionality to 1d (to vectorize the input tensor), and doesnt have any parameters: <br/>

<a id="code-snippet--src-flatten-layer"></a>
```lisp
(defclass flatten-layer (layer) ())

(defun make-flatten-layer () (make-instance 'flatten-layer))

(defmethod feedforward ((l flatten-layer) x)
  (vectorize-array x))
```


### dense layer {#dense-layer}

a dense layer, or a fully connected layer: <br/>

<a id="code-snippet--src-dense-layer"></a>
```lisp
(defclass dense-layer (convolutional-layer) ())

(defun make-dense-layer (&key num-units prev-layer-num-units
                           activation-function activation-function-derivative
                           tensor-activation-function tensor-activation-function-derivative)
  (make-instance
   'dense-layer
   :activation-function activation-function
   :activation-function-derivative activation-function-derivative
   :tensor-activation-function tensor-activation-function
   :tensor-activation-function-derivative tensor-activation-function-derivative
   :weights (random-tensor (list num-units prev-layer-num-units))
   :biases (random-tensor num-units)))

(defmethod feedforward :around ((l dense-layer) x)
  "return the output of the convolution, properly reshaped"
  (multiple-value-bind (out unactivated-out) (call-next-method)
    (values (make-array (list (array-dimension out 0)) :displaced-to out)
            (make-array (list (array-dimension out 0)) :displaced-to unactivated-out))))
```


### test code {#test-code}

feedforwarding test in convolutional layers, with an (randomly generated) input image of depth 3 (3 channels), width 6 and height 6 (in the code columns and rows, respectively), like in [fig-convlayer](20230520T175032--convolutional-neural-network__cs_lispcode_math.md): <br/>

```lisp
(let ((l (make-convolutional-layer :dims '(5 3 4 3)
                                   :activation-function #'relu
                                   :activation-function-derivative #'relu-derivative)))
  (array-dimensions (feedforward l (random-tensor '(3 10 6)))))
```

```text
(5 1 7 4)
```

```lisp
(let ((l (make-3d-convolutional-layer-from-dims
          :dims '(5 3 4 3)
          :activation-function #'relu
          :activation-function-derivative #'relu-derivative)))
  (array-dimensions (feedforward l (random-tensor '(3 10 6)))))
```

```text
(5 7 4)
```

the code outputs a tensor of size 2x4x4, as expected and as seen in the figure. <br/>
feedforwarding test in pooling layers: <br/>

```lisp
(let ((l (make-pooling-layer :rows 16 :cols 16)))
  (feedforward l (random-tensor '(3 32 32))))
```

```text
#3A(((-0.09865912f0 0.0050482843f0) (0.033965267f0 0.009567747f0))
    ((-0.048119776f0 0.053631075f0) (0.0039087785f0 -0.045654505f0))
    ((0.011538963f0 0.012444877f0) (0.009892253f0 0.018327955f0)))
```

feedforwarding test in dense layers: <br/>

```lisp
(let ((l (make-dense-layer :num-units 20 :prev-layer-num-units 30
                           :activation-function #'sigmoid
                           :activation-function-derivative #'sigmoid-derivative)))
  (feedforward l (random-tensor '(30))))
```

```text
#(0.07897233f0 0.6648786f0 0.5233108f0 0.16540164f0 0.5859843f0 0.3620081f0
  0.881382f0 0.6328014f0 0.9851791f0 0.54547656f0 0.2188674f0 0.46183386f0
  0.52967626f0 0.255327f0 0.5279645f0 0.70072246f0 0.022833973f0 0.043903537f0
  0.5002063f0 0.37229472f0)
#(-2.4563925f0 0.6851117f0 0.09331077f0 -1.6185739f0 0.34738904f0 -0.566659f0
  2.0055835f0 0.54425377f0 4.196786f0 0.18241026f0 -1.2722789f0 -0.15296215f0
  0.11884463f0 -1.0704002f0 0.11197477f0 0.8507405f0 -3.756407f0 -3.080864f0
  8.253455f-4 -0.52238494f0)
```

feedforwarding test in flatten layers: <br/>

```lisp
(feedforward (make-flatten-layer) (random-tensor '(2 3 3)))
```

```text
#(0.7158413f0 -0.65535855f0 -0.95929027f0 0.8278158f0 -0.56471443f0
  -0.40639305f0 0.8319006f0 -0.039112806f0 -0.61821413f0 -0.8546965f0
  -0.8576379f0 -0.77950644f0 0.54494023f0 -0.5361223f0 -0.012234688f0
  0.868943f0 -0.96434f0 -0.61873984f0)
```

now that we have implemented the necessary layers, we can start building convolutional networks, we start with [LeNet-5](../20230520T175032--convolutional-neural-network__cs_lispcode_math.md): <br/>

<a id="code-snippet--src-lenet5"></a>
```lisp
(defparameter *lenet5*
  (make-network
   :layers (list
            (make-3d-convolutional-layer-from-dims
             :dims '(6 1 5 5)
             :activation-function #'relu
             :activation-function-derivative #'relu-derivative)
            (make-pooling-layer :rows 2 :cols 2)
            (make-3d-convolutional-layer-from-dims
             :dims '(16 6 5 5)
             :activation-function #'relu
             :activation-function-derivative #'relu-derivative)
            (make-pooling-layer :rows 2 :cols 2)
            (make-flatten-layer)
            (make-dense-layer :num-units 120 :prev-layer-num-units 400
                              :activation-function #'relu
                              :activation-function-derivative #'relu-derivative)
            (make-dense-layer :num-units 84 :prev-layer-num-units 120
                              :activation-function #'relu
                              :activation-function-derivative #'relu-derivative)
            (make-dense-layer :num-units 10 :prev-layer-num-units 84
                              :activation-function #'sigmoid
                              :activation-function-derivative #'sigmoid-derivative))))
```

we can perform a simple feedforwarding test with a randomly permuted "image": <br/>

```lisp
(car (network-feedforward *lenet5* (random-tensor '(1 32 32))))
```

```text
(#(1.0 0 1.0 0 0 0 0 1.0 3.6099282e-22 1.0)
 . #(542.2019 -1379.9155 469.97314 -319.0183 -235.80972 -294.26898 -628.3136
     134.56656 -49.373184 454.5819))
```

we got 10 values out, as expected (the size of the output layer is 10) <br/>


### convolutional layer backprop {#convolutional-layer-backprop}

its time to implement backpropagation! <br/>
a table of the variables in the code and their counterparts in the math formulas: <br/>

| code                             | math                                                                                                                                                                            |
|----------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `layer-x`                        | <img src="/ltximg/40cf84c1e15.svg" alt="\(I^\ell\)" style="height: 0.9304em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />            |
| `layer-y`                        | <img src="/ltximg/045f7ec82d2.svg" alt="\(\hat Y^\ell\)" style="height: 1.0212em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />       |
| `layer-y-unactivated`            | <img src="/ltximg/a20fd38cb31.svg" alt="\(S^\ell\)" style="height: 0.9304em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />            |
| `s-deltas`                       | <img src="/ltximg/599fed52bc1.svg" alt="\(\Delta S^\ell\)" style="height: 0.9304em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />     |
| `x-deltas`                       | <img src="/ltximg/40cf84c1e15.svg" alt="\(I^\ell\)" style="height: 0.9304em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />            |
| `activation-function`            | <img src="/ltximg/b2574113139.svg" alt="\(\phi\)" style="height: 0.9695em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />              |
| `activation-function-derivative` | <img src="/ltximg/3c9ed92a93d.svg" alt="\(\phi'\)" style="height: 1.0257em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />             |
| `propped-deltas`                 | <img src="/ltximg/2f75c6d24a2.svg" alt="\(\Delta I^{\ell+1}\)" style="height: 0.9304em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> |
| `learning-rate`                  | <img src="/ltximg/d972b0c4622.svg" alt="\(\alpha\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />            |

<a id="code-snippet--src-convolutional-layer-backprop"></a>
```lisp
(defmethod propbackward ((l convolutional-layer) layer-x layer-y layer-y-unactivated propped-deltas learning-rate)
  "compute the gradients of the layer, propped-deltas is a tensor of the errors or 'deltas' at the output nodes which is propagated back from the succeeding layer in the network, layer-x is the input image tensor that was passed to the layer during feedforwarding, layer-y is the output of the layers' feedforwarding (activation of nodes), the assumption here is that the last dimensions of weight,image tensors are equal so that the image tensor keeps its rank/order, notice that (for now) this function assumes the equality of the order of input and output tensors"
  (with-slots (weights biases
               activation-function-derivative
               tensor-activation-function-derivative)
      l
    ;; here we restore the dropped dimension, if any (a dimension is dropped if the tensors convolved have the same depth, which happens in your standard 3d convolutions with images, im not even sure why im writing code for a more general case..), we do this because its then easier to apply the math, note that all three arrays layer-y,layer-y-unactivated,propped-deltas here have the same dimensions, also note that here reshaping the arrays by adding a dimension with size 1 doesnt affect the arrays actual sizes, only their dimensionality and order/rank
    (when (not (eq (length (array-dimensions weights))
                   (length (array-dimensions layer-y))))
      (setf layer-y
            (make-array (append (list (array-dimension layer-y 0) 1)
                                (cdr (array-dimensions layer-y)))
                        :displaced-to layer-y))
      (setf layer-y-unactivated
            (make-array (append (list (array-dimension layer-y-unactivated 0) 1)
                                (cdr (array-dimensions layer-y-unactivated)))
                        :displaced-to layer-y-unactivated))
      (setf propped-deltas 
            (make-array (append (list (array-dimension propped-deltas 0) 1)
                                (cdr (array-dimensions propped-deltas)))
                        :displaced-to propped-deltas)))

    (let ((x-deltas (make-array (array-dimensions layer-x))) ;; \Delta I in the math section, the deltas at the inputs, these are to be backpropped
          (s-deltas (make-array (array-dimensions layer-y)))) ;; \Delta S in the math, the deltas "after" the activation function
      ;; compute s-deltas
      (loop for layer-y-idx from 0 below (array-size layer-y) do
        (let* ((layer-y-indicies (array-index-row-major layer-y layer-y-idx))
               (layer-y-unactivated-entry (apply #'aref (append (list layer-y-unactivated) layer-y-indicies))) ;; S^\ell[k,i,j]
               (propped-delta (apply #'aref (append (list propped-deltas) layer-y-indicies)))) ;; \Delta\hat Y[k,i,j]
          (if tensor-activation-function-derivative
              (setf (apply #'aref (append (list s-deltas) layer-y-indicies)) (* propped-delta (funcall tensor-activation-function-derivative layer-y-unactivated layer-y-indicies)))
              (setf (apply #'aref (append (list s-deltas) layer-y-indicies)) (* propped-delta (funcall activation-function-derivative layer-y-unactivated-entry))))))

      ;; compute x-deltas, this was replaced with the next sexp, im not sure if it even works but i feel like keeping it here, it is the code for the math in [[blk:eq-convnet-I-delta-1]]
      ;; (loop for layer-x-idx from 0 below (array-size layer-x) do
      ;;   (let ((layer-x-indicies (array-index-row-major layer-x layer-x-idx)))
      ;;     (loop for layer-y-idx from 0 below (array-size layer-y) do
      ;;       (let* ((layer-y-indicies (array-index-row-major layer-y layer-y-idx))
      ;;              (s-delta (apply #'aref (append (list s-deltas) layer-y-indicies)))
      ;;              ;; see [[blk:not-convnet-I-indicies]], this is the pattern for the indicies of the weight to be multiplied by the entry in the input
      ;;              (weight-indicies (append (list (1- (array-dimension weights 0))) (mapcar #'+ (mapcar #'- (cdr (array-dimensions weights)) layer-x-indicies) (cdr layer-y-indicies) (make-list (length layer-x-indicies) :initial-element -1)))) ;; we add (..,-1,-1,-1) because in the math the indexing starts at 1 not 0
      ;;              (in-range t))
      ;;         ;; use in-range to check whether weight indicies are within the range of the weights tensor, again refer to [[blk:not-convnet-I-indicies]]
      ;;         (loop for i from 0 below (length weight-indicies) do
      ;;           (if (or (not (< (elt weight-indicies i) (array-dimension weights i)))
      ;;                   (< (elt weight-indicies i) 0))
      ;;               (setf in-range nil)))
      ;;         (when in-range
      ;;           (let* ((weight (apply #'aref (append (list weights) weight-indicies)))
      ;;                  (x-delta-to-add (* s-delta weight)))
      ;;             ;; update an x-delta
      ;;             (incf (apply #'aref (append (list x-deltas) layer-x-indicies)) x-delta-to-add)))))))

      ;; an updated solution to compute x-deltas discussed in [[any:optimization1]], first attempt
      ;; (loop for layer-x-idx from 0 below (array-size layer-x) do
      ;;   (let ((layer-x-indicies (array-index-row-major layer-x layer-x-idx)))
      ;;     (loop for weight-idx from 0 below (array-size weights) do
      ;;       (let* ((weight-indicies (array-index-row-major weights weight-idx))
      ;;              (s-delta-indicies (append
      ;;                                 (list (car weight-indicies))
      ;;                                 (mapcar #'-
      ;;                                         layer-x-indicies
      ;;                                         (cdr weight-indicies))))
      ;;              (desired-weight-indicies
      ;;                (append
      ;;                 (list (car weight-indicies))
      ;;                 (mapcar #'-
      ;;                         (cdr (array-dimensions weights))
      ;;                         (cdr weight-indicies)
      ;;                         (make-list (length (cdr weight-indicies))
      ;;                                    :initial-element 1))))
      ;;              (in-range t))
      ;;         (loop for i from 0 below (length desired-weight-indicies) do
      ;;           (if (or (not (< (elt desired-weight-indicies i)
      ;;                           (array-dimension weights i)))
      ;;                   (< (elt desired-weight-indicies i) 0))
      ;;               (setf in-range nil)))
      ;;         (loop for i from 0 below (length s-delta-indicies) do
      ;;           (if (or (not (< (elt s-delta-indicies i)
      ;;                           (array-dimension s-deltas i)))
      ;;                   (< (elt s-delta-indicies i) 0))
      ;;               (setf in-range nil)))
      ;;         (when in-range
      ;;           (let* ((weight (apply #'aref (append (list weights)
      ;;                                                desired-weight-indicies)))
      ;;                  (s-delta (apply #'aref (append (list s-deltas)
      ;;                                                 s-delta-indicies)))
      ;;                  (x-delta-to-add (* s-delta weight)))
      ;;             ;; update an x-delta
      ;;             (incf (apply #'aref (append (list x-deltas) layer-x-indicies)) x-delta-to-add)))))))

      ;; third attempt for [[any:optimization1]], here we're dropping the second-to-highest dimension because we dont need to iterate over it for every entry in layer-x, this saves us alot of iterations as it actually reduces the exponent of the time complexity (each dimension is basically another nested for loop), currently this doesnt support cases where D_K != D_I
      (let ((needed-weight-dimensions (cons (car (array-dimensions weights))
                                            (cdr (cdr (array-dimensions weights))))))
        (loop for layer-x-idx from 0 below (array-size layer-x) do
          (let ((layer-x-indicies (array-index-row-major layer-x layer-x-idx)))
            (loop for weight-idx from 0 below (reduce #'* needed-weight-dimensions) do
              (let* ((weight-indicies (from-row-major needed-weight-dimensions weight-idx))
                     (s-delta-indicies (append
                                        (cons (car weight-indicies) (cons 0 nil))
                                        (mapcar #'-
                                                (cdr layer-x-indicies)
                                                (cdr weight-indicies))))
                     (desired-weight-indicies
                       (cons
                        (car weight-indicies)
                        (mapcar #'-
                                (cdr (array-dimensions weights))
                                (cons (car layer-x-indicies) (cdr weight-indicies))
                                (make-list (length weight-indicies)
                                           :initial-element 1))))
                     (in-range t))
                (loop for i from 0 below (length desired-weight-indicies) do
                  (if (or (not (< (elt desired-weight-indicies i)
                                  (array-dimension weights i)))
                          (< (elt desired-weight-indicies i) 0))
                      (setf in-range nil)))
                (loop for i from 0 below (length s-delta-indicies) do
                  (if (or (not (< (elt s-delta-indicies i)
                                  (array-dimension s-deltas i)))
                          (< (elt s-delta-indicies i) 0))
                      (setf in-range nil)))
                (when in-range
                  (let* ((weight (apply #'aref (append (list weights)
                                                       desired-weight-indicies)))
                         (s-delta (apply #'aref (append (list s-deltas)
                                                        s-delta-indicies)))
                         (x-delta-to-add (* s-delta weight)))
                    ;; update an x-delta
                    (incf (apply #'aref (append (list x-deltas) layer-x-indicies)) x-delta-to-add))))))))

      ;; update the biases
      ;; why are we iterating through biases as if its a multidimesional array/tensor? its just a vector, this is misleading, but im leaving it this way for now
      (loop for bias-idx from 0 below (array-size biases) do
        (let ((bias-indicies (array-index-row-major biases bias-idx))
              (gradient 0)
              (needed-y-dimensions (cdr (array-dimensions layer-y))))
          (loop for layer-y-idx from 0 below (reduce #'* needed-y-dimensions) do
            (let* ((layer-y-indicies (cons (car bias-indicies)
                                           (from-row-major needed-y-dimensions layer-y-idx)))
                   (s-delta (apply #'aref (append (list s-deltas) layer-y-indicies))))
              (incf gradient s-delta)))
          ;; update bias
          (decf (apply #'aref (cons biases bias-indicies)) (* learning-rate gradient))))

      ;; update the weights
      (loop for weight-idx from 0 below (array-size weights) do
        (let ((weight-indicies (array-index-row-major weights weight-idx))
              (gradient 0)
              (needed-y-dimensions (cdr (array-dimensions layer-y))))
          ;; needed-y-dimensions are the dimensions we need to iterate through in the layer y, we dont need to iterate through the entire output as a weight is only connected to the output units that are connected to its kernel
          (loop for layer-y-idx from 0 below (reduce #'* needed-y-dimensions) do
            ;; add the kernel index to the layer-y-indicies
            (let* ((layer-y-indicies (cons (car weight-indicies) (from-row-major needed-y-dimensions layer-y-idx)))
                   (s-delta (apply #'aref (append (list s-deltas) layer-y-indicies)))
                   (i-indicies (mapcar #'+ (mapcar #'- (cdr (array-dimensions weights)) (cdr weight-indicies) (make-list (length (cdr weight-indicies)) :initial-element 1)) (cons 0 layer-y-indicies)))
                   (in-range t))
              ;; check if i-indicies are in the correct range
              (loop for i from 0 below (length i-indicies) do
                (if (or (not (< (elt i-indicies i) (array-dimension layer-x i)))
                        (< (elt i-indicies i) 0))
                    (setf in-range nil)))
              (when in-range
                ;; (print (not (member (cons i-indicies layer-y-indicies) added :test #'equal)))
                (let ((i (apply #'aref (append (list layer-x) i-indicies))))
                  (incf gradient (* s-delta i))))))
          ;; update weight
          (decf (apply #'aref (append (list weights) weight-indicies)) (* learning-rate gradient))))
      x-deltas)))
```

now we need to write the propbackward function for networks so we can conduct simple propbackward tests before continuing <br/>

<a id="code-snippet--src-network-backprop"></a>
```lisp
(defmethod network-propbackward ((n network) network-x network-y feedforward-out)
  "feedforward-out is the result of the network-feedforward function, its a list of cons' of out and unactivated-out, network-x and network-y should be the input and the desired output to the network, respectively"
  (with-slots (layers learning-rate) n
    (let* ((output-layer (car (car feedforward-out)))
           ;; initialize the propped deltas to (hat y - y), because we use squared error loss function
           (propped-deltas (array-map #'- output-layer network-y)))
      ;; iterate through each layer
      (loop for layer-index from (1- (length layers)) above -1 do
        ;; from the feedforward-out list, get the output of the current layer's feedforward (activated and non-activated), they are stored in reverse order so we use pop
        (let* ((mycons (pop feedforward-out))
               (layer-out (car mycons))
               (layer-unactivated-out (cdr mycons))
               (layer (elt layers layer-index))
               ;; the input to this layer is the output of the next (or previous in feedforward terms) layer, except for the first layer which receives input from the input layer which isnt in the list because its not actually a layer
               (layer-in (if (car feedforward-out) (car (car feedforward-out)) network-x)))
          ;; propbackward to the next layer, storing the deltas returned into propped-deltas to be passed onto the next layer
          (setf propped-deltas (propbackward layer layer-in layer-out layer-unactivated-out propped-deltas learning-rate)))))))
```

before implementing backpropagation for the pooling layer we need to think about how each type of pooling layer should handle the backpropagatted gradients, if we consider the average pooling layer, all pixels in a "pooled portion" of the image have an equal effect on the loss function, but in a max pooling layer, only the pixel with the maximum value has an effect and the rest of the pixels have no effect whatsoever because they dont affect the values of the pixels in succeeding layers <br/>
since i already had different functions for pooling, `average-pooling-function` and `max-pooling-function`, i decided to implement the concept of "unpooling function", which take a slice of the input image, one that corresponds to a pixel in the output of the layer and was reduced into that pixel during feedforward, it also takes the gradient at that pixel and splits it into a 2d layer of "subgradients" that corresponds to the slice of the image, for example in the "average unpooling function" `average-unpooling-function`, the gradient of the pixel in the output is divided equally to a grid of <img src="/ltximg/a1e06f87c51.svg" alt="\(H_K^\ell \times W_K^\ell\)" style="height: 1.2003em; vertical-align: -0.3191em; display: inline-block" class="org-latex org-latex-inline" /> which is then added to the tensor of deltas at the same position the 2d grid of pixels have in the input image tensor, this tensor of deltas is to be forwarded later to the next layer during backprop <br/>
i had to go back and edit the definition of the `pooling-layer` class to include the new `unpooling-function` slot and the function `make-pooling-layer` to provide a default unpooling function aswell <br/>


### pooling layer backprop {#pooling-layer-backprop}

backprop for pooling layer: <br/>

<a id="code-snippet--src-pooling-layer-backprop"></a>
```lisp
(defmethod propbackward ((l pooling-layer) layer-x layer-y layer-y-unactivated propped-deltas learning-rate)
  "a pooling layer doesnt care about layer-y,layer-y-unactivated or learning-rate, it just needs to upscale the deltas and pass them on"
  (with-slots (unpooling-function rows cols) l
    (let ((deltas (make-array (array-dimensions layer-x))))
      (loop for channel-idx from 0 below (array-depth deltas) do
        (loop for img-row-idx from 0 below (array-rows deltas) by rows do
          (loop for img-col-idx from 0 below (array-cols deltas) by cols do
            (let* ((delta-row-idx (/ img-row-idx rows))
                   (delta-col-idx (/ img-col-idx cols))
                   (img-subgrid (subarray layer-x
                                          (list channel-idx img-row-idx img-col-idx)
                                          (list rows cols)))
                   (gradient (aref propped-deltas channel-idx delta-row-idx delta-col-idx))
                   (delta-grid (funcall unpooling-function img-subgrid gradient)))
              (copy-into-array deltas delta-grid (list
                                                  channel-idx
                                                  img-row-idx
                                                  img-col-idx))))))
      deltas)))

(defun average-unpooling-function (img-subgrid gradient)
  "example usage: (progn (setf a (random-tensor '(4 4))) (average-unpooling-function a 0.7))"
  (make-array
   (array-dimensions img-subgrid)
   :initial-element (/ gradient (array-size img-subgrid))))

(defun max-unpooling-function (img-subgrid gradient)
  "example usage: (progn (setf a (random-tensor '(4 4))) (max-unpooling-function a 0.7))"
  (let* ((gradient-grid (make-array (array-dimensions img-subgrid)))
         (max-value (aref img-subgrid 0 0))
         (max-cell-indicies '(0 0)))
    (loop for row from 0 below (array-rows img-subgrid) do
      (loop for col from 0 below (array-cols img-subgrid) do
        (let ((val (aref img-subgrid row col)))
          (if (> val max-value)
              (progn
                (setf max-value val)
                (setf max-cell-indicies (list row col)))))))
    (setf (apply #'aref (append (list gradient-grid) max-cell-indicies)) gradient)
    gradient-grid))
```


### flatten layer backprop {#flatten-layer-backprop}

backprop for flatten layers is probably the simplest, we only need to reshape the deltas and pass them on: <br/>

<a id="code-snippet--src-flatten-layer-backprop"></a>
```lisp
(defmethod propbackward ((l flatten-layer) layer-x layer-y layer-y-unactivated propped-deltas learning-rate)
  "a pooling layer doesnt care about layer-y-unactivated,propped-deltas or learning-rate"
  (make-array (array-dimensions layer-x) :displaced-to propped-deltas))
```


### test code {#test-code}

time for a simple propbackward test: <br/>

```lisp
(defun lenet-test-1 ()
  (let* ((x (random-tensor '(1 32 32)))
         (y (make-array '(10)))
         (out (network-feedforward *lenet5* x)))
    (network-propbackward *lenet5* x y out)))
;; (time (lenet-test-1))
```

while this worked, it was really slow: <br/>

```text
Evaluation took:
  3.116 seconds of real time
  3.117175 seconds of total run time (3.113856 user, 0.003319 system)
  [ Run times consist of 0.028 seconds GC time, and 3.090 seconds non-GC time. ]
  100.03% CPU
  7,783,051,200 processor cycles
  7,346,708,400 bytes consed
```

3 seconds for a single feedforward,backprop pass is pretty horrible for a relatively small network <br/>
i used sbcl's [sb-prof](http://www.lichteblau.com/sbcl/doc/manual/sbcl/Statistical-Profiler.html) for more insight: <br/>

```lisp
(require :sb-sprof)
(sb-sprof:with-profiling (:report :graph)
  (lenet-test-1))
```

but that didnt help much, as expected most of the time was taken by the backprop functions <br/>
although there are some things that can be improved (i think im doing unnecessary memory duplication with arrays) to make the single-threaded code run faster, i just decided it was time to take a multithreaded approach (perhaps even train on the gpu in the future with [cl-cuda](../20230614T171231--cuda-programming-in-common-lisp__code.md)) <br/>


### printing/formatting networks {#printing-formatting-networks}

it would help to be able to inspect a network and see for example how many parameters it has so we implement a `print-object` function: <br/>

<a id="code-snippet--src-network-print"></a>
```lisp
(defmethod print-object ((n network) stream)
  (print-unreadable-object (n stream :type t :identity t)
    (let ((total-weights 0))
      (loop for layer in (network-layers n) do
        (when (layer-weights layer)
          (incf total-weights (array-size (layer-weights layer))))
        (format stream "~%  ~a" layer))
      (format stream
              "~&total network weights: ~a, learning rate: ~a"
              total-weights
              (network-learning-rate n)))))

(defmethod print-object ((l pooling-layer) stream)
  (print-unreadable-object (l stream :type t)
    (format stream
            "rows: ~a, columns: ~a"
            (pooling-layer-rows l)
            (pooling-layer-cols l))))

(defmethod print-object ((l convolutional-layer) stream)
  (print-unreadable-object (l stream :type t)
    (format stream
            "weights: ~a, dimensions: ~a"
            (array-size (layer-weights l))
            (array-dimensions (layer-weights l)))))
```

example usage: <br/>

```lisp
CL-USER> *lenet5*
#<NETWORK 
  #<3D-CONVOLUTIONAL-LAYER weights: 150, dimensions: (6 1 5 5)>
  #<POOLING-LAYER rows: 2, columns: 2>
  #<3D-CONVOLUTIONAL-LAYER weights: 2400, dimensions: (16 6 5 5)>
  #<POOLING-LAYER rows: 2, columns: 2>
  #<FLATTEN-LAYER {1013A58653}>
  #<DENSE-LAYER weights: 48000, dimensions: (120 400)>
  #<DENSE-LAYER weights: 10080, dimensions: (84 120)>
  #<DENSE-LAYER weights: 840, dimensions: (10 84)>
total network weights: 61470>
```


### full pass propagation and training {#full-pass-propagation-and-training}

now we need a function that takes a set of examples and trains a network <br/>

<a id="code-snippet--src-network-train"></a>
```lisp
(defmethod network-full-pass ((nw network) x y)
  "do a full pass in the network, feedforward and propbackward (backpropagation)"
  (network-propbackward nw x y (network-feedforward nw x)))

(defmethod network-train ((nw network) samples &optional (epochs 1))
  "train on the given data, xs[i],ys[i] represent the input,output of the ith example, xs,ys are lists, preferrably of the simple-vector type"
  (loop for epoch from 0 below epochs do
    (loop for sample in samples
          do (let* ((x (car sample))
                    (y (cdr sample)))
               (network-full-pass nw x y)))))
```


### test code {#test-code}

lets try a simple example: <br/>

```lisp
(defun cnn-test-1 ()
  (let* ((xs '(#(0 0 1) #(1 1 1) #(1 0 1) #(0 1 1)))
         (ys '(#(0) #(1) #(1) #(0)))
         (data-samples (mapcar #'cons xs ys))
         (nw (make-network
              :learning-rate 0.01
              :layers (list
                       ;; (make-dense-layer :num-units 5 :prev-layer-num-units 3)
                       ;; (make-dense-layer :num-units 1 :prev-layer-num-units 5)))))
                       (make-3d-convolutional-layer-from-dims
                        :dims '(4 3)
                        :activation-function #'sigmoid
                        :activation-function-derivative #'sigmoid-derivative)
                       (make-3d-convolutional-layer-from-dims
                        :dims '(1 4)
                        :activation-function #'sigmoid
                        :activation-function-derivative #'sigmoid-derivative)))))
    (print "doing 100k epochs")
    (network-train nw data-samples 100000)
    (format t "~%loss: ~A" (network-test nw data-samples))
    (format t "~%this should equal 0: ~a" (car (car (network-feedforward nw #(0 0 1)))))
    (format t "~%this should equal 1: ~a" (car (car (network-feedforward nw #(1 1 1)))))
    (format t "~%this should equal 1: ~a" (car (car (network-feedforward nw #(1 0 1)))))
    (format t "~%this should equal 0: ~a" (car (car (network-feedforward nw #(0 0 0)))))
    (format t "~%this should equal 0: ~a" (car (car (network-feedforward nw #(0 1 1)))))))
```

test run: <br/>

```lisp
(cnn-test-1)
```

```text

"doing 100k epochs" 
loss: 0.07140527340555194
this should equal 0: #(0.0193214891516944)
this should equal 1: #(0.9785556472163439)
this should equal 1: #(0.9836150950875087)
this should equal 0: #(0.28466690862319854)
this should equal 0: #(0.014254526557710118)
```

yes this the farthest thing from perfect, but the data isnt either, we'll see how it performs on real-world data later <br/>
i gave training on mnist with cnn a shot and tackled the issue of a vanishing gradient while at it, but again, it was really slow, we must tackle the issue of speed/efficiency <br/>


### backprop optimization {#backprop-optimization}

<div class="any" id="any:optimization1">

if we reconsider the equations [eq-convnet-weight-delta](20230520T175032--convolutional-neural-network__cs_lispcode_math.md), we'll find that we're doing alot of redundant work, as mentioned in [not-convnet-I-indicies](20230520T175032--convolutional-neural-network__cs_lispcode_math.md), there are indicies we're iterating over that we have to ignore, so we could cut them out of the loop which will tremendously reduce the number of iterations <br/>
lets reconsider the equation: <br/>
<img src="/ltximg/216795d57fa.svg" alt="\[ \Delta K^\ell_k[r,u,v] = \sum_{i=1}^{H_I^{\ell+1}} \sum_{j=1}^{W_I^{\ell+1}} \frac{\partial L}{\partial \hat Y_k^\ell[i,j]}\frac{\partial \hat Y_k^\ell[i,j]}{\partial K_k^\ell[r,u,v]} \]" style="height: 3.7337em; display: block" class="org-latex org-latex-block" /> <br/>
basically, here we're finding the derivative of the loss function with respect to a single weight in <img src="/ltximg/94bbaddc021.svg" alt="\(K\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> indexed by <img src="/ltximg/c6c73c15902.svg" alt="\(k,r,u,v\)" style="height: 0.9695em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, using the all the errors from each output pixel in <img src="/ltximg/045f7ec82d2.svg" alt="\(\hat Y^\ell\)" style="height: 1.0212em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, indexed by <img src="/ltximg/1d242e3832f.svg" alt="\(k,i,j\)" style="height: 0.9695em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, now we for a single weight with indicies <img src="/ltximg/c6c73c15902.svg" alt="\(k,r,u,v\)" style="height: 0.9695em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> dont need to iterate with <img src="/ltximg/4d5f5bed723.svg" alt="\(k\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> through the number of layers as we only need to consider the feature map that the weight affects, as each kernel with its weights only affect a single feature map in the output, here, that map is <img src="/ltximg/4d5f5bed723.svg" alt="\(k\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> which we consider a fixed constant when we're dealing with a single weight (which is why i preferred to write <img src="/ltximg/4d5f5bed723.svg" alt="\(k\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> as a subscript), other pixels in feature maps other than <img src="/ltximg/4d5f5bed723.svg" alt="\(k\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> arent affected by our weight and using the errors at those pixels wouldnt affect the gradient's value (they add 0). (there are still some pixels that we can drop depending on the place of the weight in the kernel, and the kernel's stride, but i dont think that can give us a noticable improvement in performance) <br/>
the real bottleneck for training is currently computing <img src="/ltximg/74d5423fe1e.svg" alt="\(\Delta I\)" style="height: 0.8000em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> for convolutional layers, which is what we need to work on, lets reconsider the following equation <br/>
<img src="/ltximg/d4565c77616.svg" alt="\[ \Delta I^\ell[r,u,v] = \sum_{k=1}^{D_I^{\ell+1}} \sum_{i=1}^{H_I^{\ell+1}} \sum_{j=1}^{W_I^{\ell+1}} \frac{\partial L}{\partial \hat Y_k^\ell[i,j]}\frac{\partial \hat Y_k^\ell[i,j]}{\partial I^\ell[r,u,v]} \]" style="height: 3.7337em; display: block" class="org-latex org-latex-block" /> <br/>
here, we're considering the derivative of every pixel in the output image with respect to the entry in <img src="/ltximg/dcb6653246c.svg" alt="\(I^\ell[r,u,v]\)" style="height: 1.1754em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> that we wanna find, but in truth, each pixel in <img src="/ltximg/40cf84c1e15.svg" alt="\(I^\ell\)" style="height: 0.9304em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> only affects <img src="/ltximg/7b7b5631c9b.svg" alt="\(t^\ell \times H_K^\ell \times W_K^\ell\)" style="height: 1.2003em; vertical-align: -0.3191em; display: inline-block" class="org-latex org-latex-inline" /> output pixels **at most** (this is basically the size of the weight tensor <img src="/ltximg/f72a1efd9d8.svg" alt="\(K^\ell\)" style="height: 0.9304em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />), intuitively, one may be able to imagine this to see each kernel sliding over the input <img src="/ltximg/40cf84c1e15.svg" alt="\(I^\ell\)" style="height: 0.9304em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, in this process each pixel gets multiplied by a subset of the sliding kernel, depending on whether it is close to the edge of the image and on the sliding stride, each time the image slides in some direction, our input pixel gets multiplied by a new weight, until the kernel slides away and isnt "hovering" over our pixel anymore, this process is illustrated in [3](#org916497f) <br/>

<a id="org916497f"></a>

![](/ox-hugo/sliding.gif) <br/>
this can also be seen in the formula for the output pixels: <br/>
<img src="/ltximg/725c3e9f328.svg" alt="\[ \hat Y_k^\ell[i,j] = \phi\left(\sum_{z=0}^{D_K^\ell-1}\sum_{y=0}^{H_K^\ell-1}\sum_{x=0}^{W_K^\ell-1}I^\ell[z,y+i,x+j]K^\ell_k[D_K^\ell-z-1,H_K^\ell-y-1,W_K^\ell-x-1]+B^\ell[k]\right) \]" style="height: 3.7833em; display: block" class="org-latex org-latex-block" /> <br/>
for each combination of the indicies <img src="/ltximg/1d242e3832f.svg" alt="\(k,i,j\)" style="height: 0.9695em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, we iterate through a block in <img src="/ltximg/40cf84c1e15.svg" alt="\(I^\ell\)" style="height: 0.9304em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> (and in <img src="/ltximg/b177deef73e.svg" alt="\(K_k^\ell\)" style="height: 1.2079em; vertical-align: -0.3267em; display: inline-block" class="org-latex org-latex-inline" />) of size <img src="/ltximg/b251123dd8e.svg" alt="\(D_K^\ell \times W_K^\ell \times H_K^\ell\)" style="height: 1.2003em; vertical-align: -0.3191em; display: inline-block" class="org-latex org-latex-inline" />, but the size of <img src="/ltximg/40cf84c1e15.svg" alt="\(I^\ell\)" style="height: 0.9304em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is <img src="/ltximg/dfe404598cc.svg" alt="\(D_I^\ell \times H_I^\ell \times W_I^\ell\)" style="height: 1.2003em; vertical-align: -0.3191em; display: inline-block" class="org-latex org-latex-inline" />, and the latter is usually a much greater number, so not in every combination does the arbitrary entry <img src="/ltximg/dcb6653246c.svg" alt="\(I^\ell[r,u,v]\)" style="height: 1.1754em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> play a role in setting the value of <img src="/ltximg/a86a6e25d62.svg" alt="\(\hat Y^\ell_k[i,j]\)" style="height: 1.2987em; vertical-align: -0.3267em; display: inline-block" class="org-latex org-latex-inline" />, to see how many times exactly is <img src="/ltximg/dcb6653246c.svg" alt="\(I^\ell[r,u,v]\)" style="height: 1.1754em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> is used we build the equations <img src="/ltximg/4a16b62a3fd.svg" alt="\(r=z,u=y+i,v=x+j\)" style="height: 0.9353em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> from the indicies in the formula, and solve for <img src="/ltximg/1d242e3832f.svg" alt="\(k,i,j\)" style="height: 0.9695em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, the values we get for <img src="/ltximg/1d242e3832f.svg" alt="\(k,i,j\)" style="height: 0.9695em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> are the indicies of the pixels which <img src="/ltximg/dcb6653246c.svg" alt="\(I^\ell[r,u,v]\)" style="height: 1.1754em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> "relates to" <br/>
we get <img src="/ltximg/4c0cea13537.svg" alt="\(k=k,i=u-y,j=v-x\)" style="height: 0.9695em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, now we know that <img src="/ltximg/1f52f68d4de.svg" alt="\((k,i,j) \in \mathbb{R}^{t^\ell \times (H^\ell_I-(H_K^\ell-1)) \times (W^\ell_I-(W_K^\ell-1)))}\)" style="height: 1.3350em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, because thats the size of the output tensor <img src="/ltximg/045f7ec82d2.svg" alt="\(\hat Y^\ell\)" style="height: 1.0212em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, and we know <img src="/ltximg/64e566262f8.svg" alt="\((r,u,v) \in \mathbb{R}^{D_I^\ell \times H_I^\ell \times W_I^\ell}\)" style="height: 1.3350em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
what the equations <img src="/ltximg/4c0cea13537.svg" alt="\(k=k,i=u-y,j=v-x\)" style="height: 0.9695em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> basically tell us is that, since <img src="/ltximg/e48b71eadb5.svg" alt="\(j\)" style="height: 0.9353em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> only depends on the value of <img src="/ltximg/4f59ac57b9a.svg" alt="\(v\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, which we have, and on <img src="/ltximg/264a89f023b.svg" alt="\(x\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, which we need to iterate for, as <img src="/ltximg/0c4e69fa609.svg" alt="\(0 \le x &amp;lt; W_K^\ell\)" style="height: 1.2003em; vertical-align: -0.3191em; display: inline-block" class="org-latex org-latex-inline" /> we only need to do <img src="/ltximg/097b00929a2.svg" alt="\(W_K^\ell \times t^\ell\)" style="height: 1.2003em; vertical-align: -0.3191em; display: inline-block" class="org-latex org-latex-inline" /> for it (we have to iterate for <img src="/ltximg/943dbb45beb.svg" alt="\(1 \le k &amp;lt; t^\ell\)" style="height: 1.0636em; vertical-align: -0.1824em; display: inline-block" class="org-latex org-latex-inline" /> as its a free variable and doesnt depend on others), combining that with <img src="/ltximg/196c1afa02d.svg" alt="\(i\)" style="height: 0.7447em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, which depends on the then-constant <img src="/ltximg/9ec3b7723a1.svg" alt="\(u\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> (<img src="/ltximg/0d1b822af9e.svg" alt="\(r,u,v\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> arent constants, but in this context they are, thats the assumption here) and <img src="/ltximg/73a97ac470e.svg" alt="\(y\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> which varies as <img src="/ltximg/dbe13bafbf0.svg" alt="\(0 \le y &amp;lt; H_K^\ell\)" style="height: 1.2003em; vertical-align: -0.3191em; display: inline-block" class="org-latex org-latex-inline" />, in total this gives us <img src="/ltximg/be545b7c7aa.svg" alt="\(t^\ell \times W_K^\ell \times H_K^\ell\)" style="height: 1.2003em; vertical-align: -0.3191em; display: inline-block" class="org-latex org-latex-inline" /> iterations for a single arbitrary entry in <img src="/ltximg/40cf84c1e15.svg" alt="\(I^\ell\)" style="height: 0.9304em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, which is definitely (alot) less (and also independent of the size of the input) than <img src="/ltximg/941e1b022e6.svg" alt="\(t^\ell \times (H^\ell_I-(H_K^\ell-1)) \times (W^\ell_I-(W_K^\ell-1)))\)" style="height: 1.2003em; vertical-align: -0.3191em; display: inline-block" class="org-latex org-latex-inline" /> which is the number of iterations we were doing before. <br/>
combining all of those ideas we get the formula: <br/>
<img src="/ltximg/85c3fb9a34f.svg" alt="\[ \Delta I^\ell[r,u,v] = \sum_{k=0}^{t^\ell-1} \sum_{y=0}^{H_K^\ell-1} \sum_{x=0}^{W_K^\ell-1} \frac{\partial L}{\partial \hat Y^\ell[k,u-y,v-x]}\frac{\partial \hat Y_k^\ell[k,u-y,v-x]}{\partial I^\ell[r,u,v]} \]" style="height: 3.6401em; display: block" class="org-latex org-latex-block" /> <br/>
we substitute this in [eq-convnet-I-delta-1](20230520T175032--convolutional-neural-network__cs_lispcode_math.md) in place of the previous version, and redo the differentation process: <br/>


<div id="org03db2d5" class="equation-container">
<span class="equation">
<img src="/ltximg/327ac6ed380.svg" alt="\begin{align}
  \Delta I^\ell[r,u,v] &amp;amp;= \frac{\partial L}{\partial I^\ell[r,u,v]}\\
  &amp;amp;= \sum_{k=0}^{t^\ell-1} \sum_{y=0}^{H_K^\ell-1} \sum_{x=0}^{W_K^\ell-1} \frac{\partial L}{\partial \hat Y^\ell[k,u-y,v-x]}\frac{\partial \hat Y^\ell[k,u-y,v-x]}{\partial I^\ell[r,u,v]}\\
  &amp;amp;= \sum_{k=0}^{t^\ell-1} \sum_{y=0}^{H_K^\ell-1} \sum_{x=0}^{W_K^\ell-1} \frac{\partial L}{\partial \hat Y^\ell[k,u-y,v-x]}\frac{\partial \phi(S^\ell[k,u-y,v-x])}{\partial I^\ell[r,u,v]}\\
  &amp;amp;= \sum_{k=0}^{t^\ell-1} \sum_{y=0}^{H_K^\ell-1} \sum_{x=0}^{W_K^\ell-1} \Delta\hat Y^\ell[k,u-y,v-x]\frac{\partial \phi(S^\ell[k,u-y,v-x])}{\partial I^\ell[r,u,v]}\\
  &amp;amp;= \sum_{k=0}^{t^\ell-1} \sum_{y=0}^{H_K^\ell-1} \sum_{x=0}^{W_K^\ell-1} \Delta S^\ell[k,u-y,v-x]\frac{\partial S^\ell[k,u-y,v-x]}{\partial I^\ell[r,u,v]}\\
  &amp;amp;= \sum_{k=0}^{t^\ell-1} \sum_{y=0}^{H_K^\ell-1} \sum_{x=0}^{W_K^\ell-1} \Delta S^\ell[k,u-y,v-x]\frac{\partial \sum_{z_1=0}^{D_K^\ell-1}\sum_{y_1=0}^{H_K^\ell-1}\sum_{x_1=0}^{W_K^\ell-1}I^\ell[z_1,y_1+u-y,x_1+v-x]K^\ell_k[D_K^\ell-z_1-1,H_K^\ell-y_1-1,W_K^\ell-x_1-1]+B^\ell[k]}{\partial I^\ell[r,u,v]}\\
  &amp;amp;= \sum_{k=0}^{t^\ell-1} \sum_{y=0}^{H_K^\ell-1} \sum_{x=0}^{W_K^\ell-1} \Delta S^\ell[k,u-y,v-x] K_k^\ell[\underbrace{D_K^\ell-r-1,H_K^\ell-y-1,W_K^\ell-x-1}_{(D^\ell_K,H_K^\ell,W_K^\ell)-(r,y,x)-(1,1,1)}]
\end{align}
" style="height: 28.6031em; vertical-align: -0.4020em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

we can better the formulas for all deltas even further but thats for the future, maybe. <br/>
after coming up with this, i had to go back and edit the backpropagation function for convolutional layer to use the new formula instead of the old one <br/>

</div>


### distributed training {#distributed-training}

perhaps distributed training would help, so i decided to work on a simple multithreaded solution before going for a gpu solution <br/>
here implement distributed training by data parallelism with the help of lparallel, two packages are needed, `lparallel` and `serapeum`, both installable from quicklisp <br/>

```lisp
(ql:quickload :serapeum)
(ql:quickload :lparallel)
```

<a id="code-snippet--src-network-lparallel"></a>
```lisp
(defgeneric copy (obj)
  (:documentation "make a copy of an object"))

(defmethod copy ((nw network))
  "copy a neural network"
  (make-network :layers (mapcar #'copy (network-layers nw))
                :learning-rate (network-learning-rate nw)))

(defmethod copy ((l layer))
  "copy a layer, a layer that inherits from this might have to add its own code to copy objects that arent copied by the base copy (this copy)"
  (let ((new-weights)
        (new-biases))
    (when (layer-weights l)
      (setf new-weights (make-array (array-dimensions (layer-weights l))))
      (copy-into-array new-weights (layer-weights l)))
    (when (layer-biases l)
      (setf new-biases (make-array (array-dimensions (layer-biases l))))
      (copy-into-array new-biases (layer-biases l)))
    (make-instance (type-of l)
                   :weights new-weights
                   :biases new-biases
                   :activation-function (layer-activation-function l)
                   :activation-function-derivative (layer-activation-function-derivative l))))

(defmethod copy :around ((l pooling-layer))
  "a pooling-layer has to copy more objects than the usual layer in which case the base copy function is not sufficient, this fixes that"
  (let ((new-layer (call-next-method)))
    (setf (pooling-layer-rows new-layer) (pooling-layer-rows l))
    (setf (pooling-layer-cols new-layer) (pooling-layer-cols l))
    (setf (pooling-layer-function new-layer) (pooling-layer-function l))
    (setf (pooling-layer-unpooling-function new-layer) (pooling-layer-unpooling-function l))
    new-layer))

(defun zeroize-network-weights (nw)
  "turn all the parameters of the network 0"
  (loop for layer in (network-layers nw) do
    (when (layer-weights layer)
      (setf (layer-weights layer)
            (make-array (array-dimensions (layer-weights layer)))))))

(defun add-network-weights (dest-nw src-nw)
  "add the weights of src-nw to the weights of dest-nw, src-nw has to be a copy of dest-nw"
  (loop for dest-layer in (network-layers dest-nw)
        for src-layer in (network-layers src-nw)
        do (when (layer-weights dest-layer)
             (array-map-into
              #'+
              (layer-weights dest-layer)
              (layer-weights dest-layer)
              (layer-weights src-layer)))))

(defun divide-network-weights (nw num)
  "divide all the weights of a network by num"
  (loop for layer in (network-layers nw) do
    (when (layer-weights layer)
      (array-map-into
       (lambda (weight) (/ weight num))
       (layer-weights layer)
       (layer-weights layer)))))

;; whether to terminate training or not
(defparameter *lparallel-training* nil)

(defun network-train-distributed-cpu (nw samples &optional (epochs 2))
  "samples should be conses of type simple-vector, train nw with lparallel with the number of cores your cpu has"
  (setf *lparallel-training* t)
  (let* ((nw-alias (copy nw)) ;; updates are done to nw-alias, at the end of training copied to nw
         (batch-size 10) ;; each core is gonna get that many x,y samples
         (workers (serapeum:count-cpus)) ;; set workers to number of available cpu cores
         (total-samples (length samples))
         (total-batches (floor total-samples batch-size)) ;; floor is just integer division here
         (lparallel:*kernel* (lparallel:make-kernel workers))) ;; lparallel's kernel takes care of parallelism
    (when (> (mod total-samples batch-size) 0) (incf total-batches 1))

    ;; total-rounds is the number of times we construct workers and give them each a network to train
    (loop for epoch from 0 below epochs do
      (let* ((total-rounds (floor total-batches workers))
             (channel (lparallel:make-channel))
             (batch-idx 0))
        (when (> (mod total-batches workers) 0) (incf total-rounds))
        ;; on each round we push batches to workers
        (loop for round from 0 below total-rounds while *lparallel-training* do
          (let ((active-workers 0) ;; on a round we might not need all the workers so we gotta keep track of how many workers are actually active to know how many results to ask the lparallel kernel for
                (lparallel:*task-category* 'nn)) ;; this allows for (lparallel:kill-tasks 'nn)
            (loop for worker-idx from 0 below workers do
              (when (< batch-idx total-batches)
                (let ((batch-samples (subseq samples
                                             (* batch-idx batch-size)
                                             (+ (* batch-idx batch-size) batch-size)))
                      (nw-copy (copy nw-alias)))
                  (format t "pushing batch ~a/~a~%" (1+ batch-idx) total-batches)
                  (lparallel:submit-task
                   channel
                   (lambda ()
                     (loop for sample in batch-samples while *lparallel-training* do
                       (let* ((x (car sample))
                              (y (cdr sample))
                              (out (network-feedforward nw-copy x)))
                         (network-propbackward nw-copy x y out)))
                     nw-copy)))
                (incf batch-idx 1)
                (incf active-workers 1)))
            ;; reset the nw weights to 0, as its new weights will be the averages of the copies
            (zeroize-network-weights nw-alias)
            (loop for worker-idx from 0 below active-workers do
              (let ((trained-nw-copy (lparallel:receive-result channel)))
                ;; (format t "received from worker ~a~%" worker-idx)
                (add-network-weights nw-alias trained-nw-copy)))
            ;; (format t "~a workers done~%" active-workers)
            (divide-network-weights nw-alias active-workers)
            (zeroize-network-weights nw)
            (add-network-weights nw nw-alias)))
        (format t "~%epoch done~A~%" epoch))
      (lparallel:end-kernel))))
```

it seems that the `kill-tasks` function from the `lparallel` library doesnt work, so i had to implement my own way of terminating the threads and the training process using `*lparallel-training*`, so when we wanna stop training we set it to `nil`, using perhaps `slime-interactive-eval` if using slime <br/>
although cpu multithreading can speed up training, a gpu is still alot faster in cases like this <br/>


### analyzing accuracy and loss {#analyzing-accuracy-and-loss}

we also need a function to get the total error of the network: <br/>

<a id="code-snippet--src-network-test"></a>
```lisp
(defmethod network-test ((nw network) samples)
  (let ((loss 0))
    (loop for sample in samples do
      (let ((x (car sample))
            (y (cdr sample)))
        (multiple-value-bind (activations unsquashed-activations)
            (network-feedforward nw x)
          (let* ((output-layer (car (car activations)))
                 (loss-to-add (reduce-array (array-map #'abs (array-map #'- output-layer y)) #'+)))
            (incf loss loss-to-add)))))
    loss))
```


### saving parameters to disk {#saving-parameters-to-disk}

we may also want to save the weights of a network to a file for later reloading: <br/>

<div class="note">

TODO: currently this doesnt save biases, needs to be fixed <br/>

</div>

<a id="code-snippet--src-network-save-weights"></a>
```lisp
(defun network-save-weights (nw filepath)
  "save the weight tensors of the layers of the network nw to file specified by filepath"
  (let ((weight-tensors-list))
    (with-open-file (stream filepath
                            :direction :output
                            :if-exists :supersede
                            :if-does-not-exist :create)
      (loop for layer in (network-layers nw) do
        (setf weight-tensors-list
              (append weight-tensors-list (list (layer-weights layer)))))
      (format stream "~A~%" weight-tensors-list))))

(defun network-load-weights (nw filepath)
  "load the weight tensors of a network nw from file specified by filepath"
  (let ((weight-tensors-list (with-open-file (in filepath)
                               (read in))))
    (loop for layer in (network-layers nw) do
      (let ((weight-tensor (pop weight-tensors-list)))
        (setf (layer-weights layer) weight-tensor)))))
```

we simply save them in their lisp representation, and read them later as lisp objects

