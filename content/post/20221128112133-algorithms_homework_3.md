+++
title = "algorithms homework 3"
author = ["mahmood"]
description = "third homework of the [[id:72B5136A-9984-48DF-9163-11E21A2CF654][algorithms]] course, on the subject of [[id:BEE67DFC-857B-461C-A283-BD00134EBFCE][recursion]]"
date = 2022-11-30T04:06:00+02:00
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
    packages: {'[+]': ['autoload', 'mathtools', 'physics']}
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

<div class="note">

please do provide feedback on mistakes you find, if any <br/>

</div>

<div class="question">

write a recursive algorithm that finds the 2 biggest numbers in a given array that halves the array on each recursive call <br/>

<div class="answer">

{{< figure src="/ox-hugo/HuER61P.svg" >}} <br/>

python version of the algorithm: <br/>

```python
def biggest_two(arr):
    if len(arr) == 1:
        return arr[0], -1000
    if len(arr) == 2:
        return arr[0], arr[1]
    left_1, left_2 = biggest_two(arr[0:len(arr)//2])
    right_1, right_2 = biggest_two(arr[len(arr)//2:len(arr)])
    biggest_1 = max({left_1, left_2, right_1, right_2})
    biggest_2 = max({left_1, left_2, right_1, right_2} - {biggest_1})
    return biggest_1, biggest_2

print(biggest_two([10, 20, 30, 35, 2, 17]))
```

```text
(35, 30)
```

</div>

<div class="subquestion">

find the [time complexity]({{< relref "20221130014441-time_complexity.md" >}}) of the algorithm <br/>

<div class="answer">

we consider the \\(T(n)=2T\left(\frac{n}{2}\right) + C\\): <br/>

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

note that although it doesnt matter, \\(C\_1\\) differs a from \\(C\\) as \\(C\_1=T(1)\\) is the constant time it takes for the edge case calls of the recursion <br/>

</div>

</div>

</div>

<div class="question">

find the time complexity of the following algorithm <br/>

{{< figure src="/ox-hugo/h7AJcrd.svg" >}} <br/>

<div class="answer">

at first glance this seems like a \\(\Theta(n^2)\\) algorithm but its time complexity is actually \\(\Theta(n)\\) <br/>
we track the value of the variable `i`: on each iteration in the main loop, the variable `i` gets incremented as many times as the inner loop runs plus one (`j` is assigned back to `i` so we're basically acting on `i` itself), `i` can be at most incremented `N` times before both loops wouldnt execute anymore, and since on each iteration of either loop \\(i\\) gets incremented both loops are bound by `N` iterations at most so the total time complexity is \\(\Theta(N)\\) <br/>

</div>

</div>

<div class="question">

find the time complexity of the following algorithm <br/>

![](/ox-hugo/yx1C6jB.svg) <br/>
on the first iteration the inner loop runs and sets all the elements of the array to the value `A[i]` and so the `while` loop would never run again on next iterations of the `for` loop, so for `N-1` iterations of the `for` loop we're doing constant work (all except the first iteration) which amounts to a time complexity of \\(\Theta(N)\\) <br/>
adding the \\(\Theta(N)\\) from the first iteration we get \\(\Theta(N) + \Theta(N) \Rightarrow \Theta(N)\\) <br/>
so the time complexity is \\(\Theta(N)\\) <br/>

</div>

<div class="question">

given a function `P(A,l,k)` that sorts `k` elements in `A` starting at index `l` <br/>
the algorithm runs as follows: <br/>

1.  if k&lt;10 sort using [bubble sort]({{< relref "20221105005344-sorting_algorithm.md#bubble-sort" >}}) <br/>
2.  run `P(A, l, 3k/4)` <br/>
3.  run `P(A, l+k/4, 3k/4)` <br/>
4.  run `P(A, l, 3k/4)` <br/>

<div class="subquestion">

prove/disprove whether the algorithm actually sorts <br/>

</div>

<div class="subquestion">

find the time complexity of the algorithm using , find the number of nodes in each level and the number of levels <br/>

</div>

</div>

<div class="question">

modify the `merge` algorithm such that it merges without using elements that have a value of \\(\infty\\) <br/>

</div>

