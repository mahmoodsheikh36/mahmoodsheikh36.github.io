+++
title = "asymptotic notation"
author = ["user"]
date = 2022-12-03T21:22:00+02:00
tags = ["math"]
draft = false
+++

| notation                  | name      | formal definition                                                                                                                     | limit definition                                                                               |
|---------------------------|-----------|---------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| \\(f(n) = O(g(n))\\)      | Big Oh    | \\(\exists k > 0 \ \exists n\_0 \ \forall n > n\_0 : \vert f(n) \vert \leq k \cdot g(n)\\)                                            | \\(\lim\_{n\to\infty} \frac{\vert f(n) \vert}{g(n)} = c\\), where \\(c \geq 0\\) is a constant |
| \\(f(n) = \Omega(g(n))\\) | Big Omega | \\(\exists k > 0 \ \exists n\_0 \ \forall n > n\_0 : \vert f(n) \vert \geq k \cdot g(n)\\)                                            | \\(\lim\_{n\to\infty} \frac{g(n)}{f(n)} = c\\), where \\(c \geq 0\\) is a constant             |
| \\(f(n) = \Theta(g(n))\\) | Big Theta | \\(\exists k\_1 > 0\ \exists k\_2 > 0\ \exists n\_0\ \forall n > n\_0 : k\_1 \cdot g(n) \leq \vert f(n) \vert \leq k\_2 \cdot g(n)\\) | \\(\lim\_{n\to\infty} \frac{f(n)}{g(n)} = c\\), where \\(c > 0\\) is a constant                |


## Big O {#big-o}

<div class="definition">

**Big O** of a \\(f\\), denoted by \\(O(f)\\), is an upper asymptotic bound of \\(f\\) <br/>

</div>


## Big Omega {#big-omega}

<div class="definition">

**Big Omega** of a \\(f\\), denoted by \\(\Omega(f)\\), is a lower asymptotic bound of \\(f\\) <br/>

</div>


## Big Theta {#big-theta}

<div class="definition">

**Big Theta** of a \\(f\\), denoted by \\(\Theta(f)\\), is tight bound of \\(f\\), so it is both [Big Omega](#big-omega) and [Big O](#big-o) <br/>

</div>


## order of growth {#order-of-growth}

<div class="definition">

the order of growth of an is an approximation of the time required to run a computer program as the input size increases, the order of growth ignores the constant factor needed for fixed operations and focuses instead on the operations that increase proportional to input size <br/>
an order of growth is a set of functions whose asymptotic growth behavior is considered equivalent. for example, \\(2n\\), \\(100n\\) and \\(n+1\\) belong to the same order of growth, which is written \\(O(n)\\) in big-oh notation and often called linear because every function in the set grows linearly with \\(n\\) <br/>

</div>

