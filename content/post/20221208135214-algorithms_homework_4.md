+++
title = "algorithms homework 4"
author = ["mahmood"]
description = "homework on [[id:c78d97d4-19d4-482d-84a1-49e69b823637][backtracking]]"
date = 2022-12-14T14:00:00+02:00
tags = ["math"]
draft = false
+++

<p style="height:0px; display: none;">
  \(\DeclareMathOperator{\spn}{span}\)
  \(\DeclareMathOperator{\dom}{domain}\)
  \(\DeclareMathOperator{\ran}{range}\)
  \(\DeclareMathOperator{\rng}{range}\)
  \(\DeclareMathOperator{\img}{Im}\)
  \(\DeclareMathOperator{\adj}{adj}\)
  \(\newcommand\dif[1]{\:\textrm{d}#1}\)
  \(\DeclarePairedDelimiter\ceil{\lceil}{\rceil}\)
  \(\DeclarePairedDelimiter\floor{\lfloor}{\rfloor}\)
  \(\newcommand{\ihat}{\hat{\textbf{i}}}\)
  \(\newcommand{\jhat}{\hat{\textbf{j}}}\)
  \(\newcommand{\khat}{\hat{\textbf{k}}}\)
  \(\newcommand{\rhat}{\hat{\textbf{r}}}\)
  \(\newcommand{\thetahat}{\boldsymbol{\hat{\theta}}}\)
</p>

<!-- mathjax -->
<script>
// auto load modules like cancel
window.MathJax = {
  loader: {load: ['[tex]/autoload', '[tex]/mathtools', '[tex]/physics']},
  tex: {
    packages: {'[+]': ['autoload', 'mathtools', 'physics']},
    macros: {
      textsc: ['\\style{font-variant-caps: small-caps}{\\text{#1}}', 1]
    }
  },
  tex2jax: {preview: "none"}
};
/* since i've configured org mode to insert a new line after every line i need to get rid of those that mess up my html */
function removeNewlineAfterDisplayMath() {
  elems = document.querySelectorAll('mjx-container')
  for (i = 0; i < elems.length; ++i) {
    elem = elems[i]
    if (elem.getAttribute('display') !== 'true')
      continue
    nextElem = elem.nextElementSibling
    if (nextElem !== null && nextElem.tagName === 'BR')
      nextElem.remove()
  }
}
window.onload = function() {
  removeNewlineAfterDisplayMath()
}
</script>

<!-- katex, a lackluster -->
<!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css" integrity="sha384-Xi8rHCmBmhbuyyhbI88391ZKP2dmfnOl4rT9ZfRI7mLTdk1wblIUnrIq35nqwEvC" crossorigin="anonymous"> -->
<!-- <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.js" integrity="sha384-X/XCfMm41VSsqRNQgDerQczD69XqmjOOOwYQvr/uuC+j4OPoNhVgjdGFwhvN02Ja" crossorigin="anonymous"></script> -->
<!-- <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/contrib/auto-render.min.js" integrity="sha384-+XBljXPPiv+OzfbB3cVmLHf4hdUFHlWNZN5spNQ7rmHTXpd7WvJum6fIACpNNfIR" crossorigin="anonymous" -->
<!--     onload="renderMathInElement(document.body);"></script> -->

<script type="text/javascript" id="MathJax-script" defer src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js">
</script>

<div class="question">

given a [binary tree]({{< relref "data_structures.md#binary-tree" >}}) `T` in which each [node]({{< relref "data_structures.md#node" >}}) has a number stored in `node.info` and a pointer to the left subtree `node.left` and the right subtree `node.right`, write an algorithm to find the average of the numbers in the tree <br/>

<div class="answer">

{{< figure src="/ox-hugo/FHjzayv.svg" >}} <br/>

</div>

<div class="subquestion">

prove the correctness of the algorithm <br/>

<div class="answer">

<span class="underline">proof that the algorithm terminates</span>: <br/>
assume that \\(\textsc{Average}\\) runs on a tree `T`, on each recurred call, the input node is in a deeper level on the tree, so its obvious that at some point we would reach the last level in the tree and the function wouldnt recur further <br/>
<span class="underline">proof of correctness</span>: <br/>
we prove this by [perfect induction]({{< relref "20220707193301-mathematical_induction.md#perfect-induction" >}}) on the height of the tree <br/>

1.  for a tree of height 1 we return \\(\frac{total}{cnt} = \frac{node.info}{1} = node.info\\) which is the correct average of the single node in the tree <br/>
2.  assume for every tree with height less than `n` the algorithm returns the correct average of the nodes in the tree <br/>
3.  for a tree with height `n`, `cnt` would be initialized to 1 and `total` to `node.info`, if there is a left subtree, we increment `cnt` by 1 and `total` by the sum of the nodes in the left subtree, as we know both the left and right subtrees have smaller heights than `n` we know the algorithm returns the correct sum for these inputs because of the **induction hypothesis**, and then the algorithm increments `total` by the sum of the right subtree and `cnt` again by 1, eventually we return \\(\frac{total}{cnt}\\) which would equal the correct average of the 1, 2, or 3 values we would have <br/>

</div>

</div>

<div class="subquestion">

analyze the [time complexity]({{< relref "20221130014441-time_complexity.md" >}}) of the algorithm <br/>

<div class="answer">

as far as i can tell, analyzing the time complexity with height as the variable using the recurrence \\(T(h)=2T(h-1)+C\\) wont get us a tight bound on the time, as the algorithm acts on each node in the tree only once the time complexity is probably \\(\Theta(n)\\) where `n` is just the number of nodes in the tree <br/>
although after putting some thought to it, we could arrive at big theta using that recurrence because \\(O\left(2^h\right) = O(n)\\) and with \\(\Omega(h)\\) as the lower bound, both the upper and lower bounds are [linear]({{< relref "calculus2.md#linear" >}}) so big theta would be linear, but im not going this route <br/>
each recurred call is passed `n` nodes, minus one, halved, because we'd be removing the head, and ignoring half of the tree, minus one doesnt matter so we consider the [recurrence formula]({{< relref "20221105001640-recursive_function.md#recurrence-relation" >}}) <br/>
\\[
T(n)=2T\left(\frac{n}{2}\right)+C
\\] <br/>
we found a closed form for this recurrence in the previous [algorithms homework 3]({{< relref "20221128112133-algorithms_homework_3.md" >}}): <br/>

\begin{align\*}
  T(n) &= 2T\left(\frac{n}{2}\right) + C\\\\
  T\left(\frac{n}{2}\right) &= 2T\left(\frac{n}{4}\right) + C\\\\
  T\left(\frac{n}{4}\right) &= 2T\left(\frac{n}{8}\right) + C\\\\
  T\left(\frac{n}{2^{\lg n}}\right) &= 2T\left(\frac{n}{2^{\lg n+1}}\right) + C\\\\
  T(n) &= 2\left(2T\left(\frac{n}{4}\right) + C\right) + C = 4T\left(\frac{n}{4}\right) + 3C\\\\
  &= 4\left(2T\left(\frac{n}{8}\right)+C\right)+3C = 8T\left(\frac{n}{8}\right)+7C\\\\
  &= 8\left(2T\left(\frac{n}{16}\right)+C\right)+7C = 16T\left(\frac{n}{16}\right)+15C\\\\
  &\vdots\\\\
  &= 2^{\lg n}T\left(\frac{n}{2^{\lg n}}\right) + \sum\_{i=0}^{\lg n} 2^{i}C\\\\
  &= 2^{\lg n}C\_1 + \sum\_{i=0}^{\lg n} 2^{i}C\\\\
  &= 2^{\lg n}C\_1 + \frac{1-2^{\lg(n)+1}}{-1}C\\\\
  &= 2^{\lg n}C\_1-C+2^{\lg(n)+1}\\\\
  &\Rightarrow \Theta\left(2^{\lg n}\right) = \Theta(n)
\end{align\*}

</div>

</div>

</div>

<div class="question">

write a [divide-and-conquer algorithm]({{< relref "20220706211939-divide_and_conquer_algorithm.md" >}}) to check whether the sum of the nodes in an array is divisible by 4 <br/>

<div class="answer">

we dont need to know the properties of numbers that are divisible by 4 to solve this <br/>

{{< figure src="/ox-hugo/frGEu7Q.svg" >}} <br/>

</div>

<div class="subquestion">

prove the correctness of the algorithm <br/>

</div>

</div>

