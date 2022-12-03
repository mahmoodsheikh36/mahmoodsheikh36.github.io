+++
title = "recursion"
author = ["mahmood"]
description = "recursive functions"
date = 2022-12-03T11:36:00+02:00
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

<div class="definition">

a **recursive** function is a function that calls itself <br/>

<div class="note">

there are a few mistakes here (in the recursion tree section)! this document needs some fixing <br/>

</div>

<div class="my_example">

consider factorial <br/>

```python
def fac(n):
  if n == 1: return 1
  else: return fac(n-1) * n
```

</div>

</div>


## <span class="section-num">1</span> recurrence relation {#recurrence-relation}

to analyze the [time complexity]({{< relref "20221130014441-time_complexity.md" >}}) of [recursive function]({{< relref "20221105001640-recursive_function.md" >}})s we use a mathematical concept called **recurrence relation** <br/>
a recurrence defines \\(T(n)\\) in terms of \\(T\\) for smaller values <br/>
example: \\(T(n) = T(n-1) + 1\\), here \\(T(n)\\) is defined in terms of \\(T(n-1)\\) <br/>


### <span class="section-num">1.1</span> initial condition {#initial-condition}

a [recurrence relation](#recurrence-relation) must have **initial conditions**, initial conditions are values of the recurrence for small values of \\(n\\) <br/>
the values of \\(T(0),T(1)\\) are usually sufficient as initial conditions <br/>


### <span class="section-num">1.2</span> closed form {#closed-form}

to solve a [recurrence](#recurrence-relation), we find a **closed form** for it, a closed form for \\(T(n)\\) is an equation that defines \\(T(n)\\) using an expression that does **not** involve \\(T\\) <br/>
there is no single method that works for all, we check for patterns and use substitution <br/>
to get a better understanding, we look at examples <br/>

<div class="my_example">

consider the following function that returns the factorial of a given number <br/>

```python
def fac(n):
  if n == 1: return 1
  else: return n * fac(n-1)
print([fac(i) for i in range(1,10)])
```

for `fac(n)`, how many times is `fac` called? <br/>
\\[ T(n) = T(n-1) + C\_1 \\] <br/>
\\(C\_1\\) represents the total time of all the operations that take constant time that the function does on every iteration <br/>
now this is obviously not what we wanna arrive at, we need to arrive at an expression that doesnt have \\(T\\) in it <br/>
we can substitute in \\(n - 1\\) because \\(T\\) is a function that takes any positive integer <br/>

\begin{align\*}
  T(n) &= \underbrace{T(n-2) + C\_1}\_{T(n-1)} + C\_1\\\\
  T(n) &= T(n-3) + 3C\_1
\end{align\*}

now you probably already see the pattern here, on every iteration the function takes constant time \\(C\_1\\) to run, until it reaches the last iteration \\(k\\) at which point it we would've \\(k\\) times \\(C\_1\\), e.g.: <br/>
\\[ T(n) \leq T(n-k) + kC\_1 \\] <br/>

now we know that the total number of times the function calls itself depends on the initial value of \\(n\\), in this case that number would be \\(n - 1\\), as in, this function calls itself \\(n - 1\\) times <br/>
we substitute \\(k = n - 1\\) to get the total time this function takes to run <br/>

\begin{align\*}
 T(n) &= T(n-(n-1)) + (n-1)C\_1\\\\
      &= T(1) + (n-1)C\_1\\\\
      &= C\_1 + (n-1)C\_1 &\text{because } C\_1 \geq T(1)\\\\
      &= nC\_1
\end{align\*}

so we conclude that <br/>
\\[
  \Theta(n) = nC\_1 \implies \Theta(n) = n
\\] <br/>

</div>

<div class="my_example">

consider the following function that returns the maximum value in a given array <br/>

```python
def mymax(arr, l, r):
  if l == r:
    return arr[l]
  return max(arr[l], mymax(arr, l+1, r))
arr = [3, 10, 81, 30, 58, 0, -10]
print(mymax(arr, 0, len(arr)-1))
```

we need to find a recurrence for this function so we can analyze its time complexity <br/>
first thing we notice is on every iteration we have a constant time (excluding the recursive call), we call it \\(C\\) <br/>
we can also notice that the variable "\\(r\\)" never changes, so our recurrence should only depends on \\(l\\) <br/>
now we can guess that the recurrence equation is: <br/>
\\[ T(l) = T(l-1) + C \\] <br/>
you might be confused (hopefully not) that we wrote \\(l-1\\) even though in the recursive call its \\(l+1\\), this is because we dont care about the value of the variable itself but rather about how many times the variable causes the function to call itself <br/>
now if we had written \\(l+1\\) this would suggest that given the value \\(l\\) the function runs \\(l+1\\) times which is not correct <br/>
and so this equals to \\(\Theta(n)\\) (using the same proof as the previous problem) <br/>

</div>

<div class="my_example">

consider the following function that returns the fibonacci number at the given index <br/>

```python
def fib(n):
  if n in [1, 2]: return 1
  else: return fib(n-1) + fib(n-2)
print([fib(i) for i in range(1,10)])
```

for `fib(n)`, how many times is `fib` called? <br/>

\begin{align\*}
  T(1) &= 1\\\\
  T(2) &= 1\\\\
  T(3) &= T(1) + T(2) + 1 = 1 + 1 + 1 = 3\\\\
  T(4) &= T(3) + T(2) + 1 = 3 + 1 + 1 = 5\\\\
  T(5) &= T(4) + T(3) + 1 = 5 + 3 + 1 = 9\\\\
  T(n) &= T(n-1) + T(n-2) + 1 = 2^n + 1
\end{align\*}

</div>


## <span class="section-num">2</span> recursion tree {#recursion-tree}

<div class="my_example">

consider the following [recurrence relation](#recurrence-relation) <br/>
\\[ T(n) = T\left(\frac{n}{3}\right) + T\left(\frac{2n}{3}\right) + n \\] <br/>
a note to keep in mind is that the sum of all the nodes of the tree must always be equal to \\(T(n)\\) <br/>
with that in mind, the first step would be: <br/>

![](/ox-hugo/AT4XkK.svg) <br/>
if we sum all the nodes we can see that indeed \\(T(n) = T\left(\frac{2n}{3}\right) + T\left(\frac{n}{3}\right) + n\\) <br/>
for the next step we need to write \\(T\left(\frac{2n}{3}\right)\\) and \\(T\left(\frac{n}{3}\right)\\) in terms of time complexity for smaller values of \\(n\\) so we can know what the next row of nodes would be <br/>

\begin{align\*}
  T\left(\frac{2n}{3}\right) &= T\left(\frac{2 \cdot \frac{2n}{3}}{3}\right) + T\left(\frac{\frac{2n}{3}}{3}\right) + \frac{2n}{3} = T\left(\frac{4n}{9}\right) + T\left(\frac{2n}{9}\right) + \frac{2n}{3}\\\\
  T\left(\frac{n}{3}\right) &= T\left(\frac{2 \cdot \frac{n}{3}}{3}\right) + T\left(\frac{\frac{n}{3}}{3}\right) + \frac{n}{3} = T\left(\frac{2n}{9}\right) + T\left(\frac{n}{9}\right) + \frac{n}{3}
\end{align\*}

according to this, the tree with the new nodes would be: <br/>

![](/ox-hugo/e66eVE.svg) <br/>
we define a **full row** as a row that is full of nodes, in the previous tree the rows \\(1,2,3\\) are full, we might notice that the sum of all the nodes of a full row is \\(n\\) <br/>
let \\(y\\) be the last full row <br/>
because the leftmost node is always the smallest in its row, for a row to be full the leftmost node has to be greater or equal to 1 (\\(\frac{n}{3^y} \geq 1\\) in this case) <br/>
if \\(\frac{n}{3^y} \geq 1\\) is true then the leftmost node in the row \\(y+1\\) whose value is \\(\frac{n}{3^y}\\) appears in the tree (because nodes with values greater or equal to 1 do appear in the tree), and so the row \\(y+1\\) is full, which results in a contradiction because \\(y\\) is the last full row <br/>
therefore it must be that \\(\frac{n}{3^y} < 1 \implies n < 3^y \implies y > \log\_3{n}\\) <br/>
therefore the tree contains atleast \\(\log\_3{n}\\) full rows, and because the sum of every full row is \\(n\\) we get: <br/>
\\(T(n) =\\) sum of all nodes = sum of nodes in full rows + sum of nodes in unfull rows \\(\geq\\) sum of nodes in full rows \\(\geq\\) \\(n \cdot \log\_3{n} = \Theta(n\log{n})\\) <br/>
and therefore \\(T(n) = \Omega(n\log{n})\\) <br/>
let \\(x\\) be the last row in the tree, the value of the rightmost node in row \\(x\\) would be \\({\left(\frac23\right)}^{x-1} \cdot n\\) <br/>
if this value is less than 1 then this node doesnt appear in the tree and all the other nodes in row \\(x\\) that have a smaller value also dont exist which gives us a contradiction because \\(x\\) is the last row in the tree <br/>
therefore we get \\({\left(\frac23\right)}^{x-1}n \geq 1 \implies n \geq {\left(\frac32\right)}^{x-1} \implies \log\_{3/2}n \geq x - 1 \implies x \leq 1 + \log\_{3/2}n\\) <br/>
and therefore in the tree there is at most \\(1 + \log\_{3/2}n\\) rows, and since the sum of every row in the tree is \\(n\\) we get: <br/>
\\(T(n)\\) = sum of all nodes = sum of all nodes in all rows \\(\leq n \cdot\\) number of rows in the tree \\(\leq n \cdot (1+\log\_{3/2}n) = \Theta(n\log{n})\\) <br/>
and therefore \\(T(n) = O(n\log{n})\\) <br/>
in summery, we proved that \\(T(n) = \Theta(n\log{n})\\) <br/>

</div>

<div class="my_example">

consider the following [recurrence relation](#recurrence-relation) <br/>
\\[
  T(n) = 2T\left(\frac{n}{8}\right) + 3T\left(\frac{n}{9}\right) + n
\\] <br/>
we cant determine \\(\Theta\\) using the [Master Theorem](#master-theorem), but we can using a recursion tree <br/>
the first step would be: <br/>

{{< figure src="/ox-hugo/0IoNVgg.svg" >}} <br/>

\begin{align\*}
  T\left(\frac{n}{8}\right) &= 2T\left(\frac{n}{8^2}\right) + 3T\left(\frac{n}{8\cdot9}\right) + \frac{n}{8}\\\\
  T\left(\frac{n}{9}\right) &= 2T\left(\frac{n}{8\cdot9}\right) + 3T\left(\frac{n}{9^2}\right) + \frac{n}{9}
\end{align\*}

{{< figure src="/ox-hugo/8OoGIIt.svg" >}} <br/>

\begin{align\*}
  T(n) &= \text{sum of all nodes}\\\\
  &= \text{sum of all nodes in full rows}\\\\
  &\leq n+n\left(\frac{2}{8}+\frac{3}{9}\right)+n\left(\frac{2}{8}+\frac{3}{9}\right)^2+\cdots+n\left(\frac{2}{8}+\frac{3}{9}\right)^{x-1}\\\\
  &\leq n\left(\left(\frac{2}{8}+\frac{3}{9}\right)+\left(\frac{2}{8}+\frac{3}{9}\right)^2+\cdots+\left(\frac{2}{8}+\frac{3}{9}\right)^{x-1}\right)\\\\
  &= n\cdot \frac{1}{1-\left(\frac{2}{8}+\frac{3}{9}\right)}\\\\
  &= \Theta(n)
\end{align\*}

note the sum was found using  <br/>
and so we have shown that \\(T(n) = O(n)\\) <br/>
\\[
  T(n) = \text{sum of all nodes in the tree} \ge \text{root} = n = \Theta(n)
\\] <br/>
and so we have shown that \\(T(n) = \Omega(n)\\) <br/>
and so \\(T(n) = \Theta(n)\\) <br/>

</div>

<div class="my_example">

```C
best_sum(A, i) {
  if i > size(A)
    return 0
  return max(best_sum(A, i+1), A[i] + best_sum(A, i+2))
}
```

\begin{align\*}
  T(n) &= T(n-1) + T(n-2) + C\\\\
  &\le 2T(n-1) + C\\\\
  &\le 2(2T(n-2)+C) + C = 4T(n-2) + 3C\\\\
  &\le 4(2T(n-3) + C) + 3C = 8T(n-3) + 7C\\\\
  &\vdots\\\\
  &\le 2^{n-1}T(n-(n-1)) + \left(2^{n-1}-1\right)C\\\\
  &\le 2^{n-1}T(1) + \left(2^{n-1}-1\right)C\\\\
  &\leq 2^n = \Theta(2^n)
\end{align\*}

we proved \\(T(n) = O(2^n)\\), now we try showing \\(T(n) = \Omega(2^n)\\) <br/>

\begin{align\*}
  T(n) &= T(n-1) + T(n-2) + C\\\\
  &\ge 2T(n-2) + C\\\\
  &\ge 2(2T(n-4) + C) + C = 4T(n-4) + 3C\\\\
  &\ge 4(2T(n-6) + C) + 3C = 8T(n-6) + 7C\\\\
  &\vdots\\\\
  &\ge 2^{n/2}T(n-(n-2)) + \left(2^{n/2}-1\right)C\\\\
  &\ge 2^{n/2}T(2) + \left(2^{n/2}-1\right)C\\\\
  &\ge 2^{n/2} = \Theta\left(2^{n/2}\right)
\end{align\*}

and so we showed that \\(T(n) = \Omega\left(2^{n/2}\right)\\), which means there isnt a tight bound on the [time complexity]({{< relref "20221130014441-time_complexity.md" >}}) of this function <br/>
using a [recursion tree](#recursion-tree): <br/>

{{< figure src="/ox-hugo/QIrzGtq.svg" >}} <br/>

\begin{align\*}
  T(n) &= \text{sum of all nodes}\\\\
  &= \text{sum of all nodes in all levels}\\\\
  &\le 2^{x-1}\\\\
  &\le 2^{x} = \Theta(2^x)
\end{align\*}

we denote by \\(y\\) the last level with a full row, for this row to exist, \\(n-2(y-1) \ge 0 \implies n+2 \ge 2y \implies \frac{n+2}{2} \ge y\\), so we have \\(\frac{n+2}{2}\\) full rows <br/>

\begin{align\*}
  T(n) &= \text{sum of all nodes}\\\\
  &\ge \text{sum of full rows}\\\\
  &\ge \sum\_{i=1}^{\frac{n+2}{2}} 2^{i-1}\\\\
  &\ge 2^{\frac12n+1}-1\\\\
  &\ge \frac{2^{n/2}}{2}-1
\end{align\*}

the division by 2 doesnt affect big omega so \\(T(n) = \Omega\left(2^{n/2}\right)\\) <br/>

</div>

<div class="my_example">

<br/>

</div>


## <span class="section-num">3</span> master theorem {#master-theorem}


### <span class="section-num">3.1</span> dividing functions {#dividing-functions}

to solve a [recurrence relation](#recurrence-relation) of the form: <br/>
\\[ T(n) = aT\left(\frac{n}{b}\right) + f(n) \text{ where } a \geq 1, b > 1 \\] <br/>
we compare \\(f(n)\\) with \\(n^{\log\_b{a}}\\) and check which one dominates, the possible outcomes are: <br/>

\begin{align}
  \exists \epsilon > 0 \mid f(n) = O\left(n^{\log\_b(a)-\epsilon}\right) &\implies T(n) = \Theta\left(n^{\log\_b{a}}\right)\\\\
  f(n) = \Theta\left(n^{\log\_b{a}}\right) &\implies T(n) = \Theta\left(n^{\log\_b{a}}\log{n}\right)\\\\
  \exists \epsilon > 0 \mid f(n) = \Omega\left(n^{\log\_b(a)+\epsilon}\right) \text{ and } 0 < c < 1 \mid af\left(\frac{n}{b}\right) < cf(n) &\implies T(n) = \Theta(f(n))
\end{align}

<div class="my_example">

example of the first possibility <br/>

\begin{gather\*}
  T(n) = 8T\left(\frac{n}{2}\right) + 1000n^2\\\\
  a = 8,\ b = 2,\ f(n) = 1000n^2
\end{gather\*}

the conditions of the first possibility are met: <br/>
\\[ n^{\log\_b{a}} = n^{\log\_2{8}} = n^3 = O\left(1000n^2\right) \\] <br/>
therefore we get: <br/>
\\[ T(n) = \Theta(n^3) \\] <br/>

</div>

<div class="my_example">

example of the second possibility <br/>

\begin{gather\*}
  T(n) = 2T\left(\frac{n}{2}\right) + 10n\\\\
  a = 2, b = 2, f(n) = 10n
\end{gather\*}

the conditions of the second possibility are met: <br/>
\\[ n^{\log\_b{a}} = n^{\log\_2{2}} = n^1 = \Theta(10n) \\] <br/>
we get: <br/>
\\[ T(n) = \Theta(n\log{n}) \\] <br/>

</div>

<div class="my_example">

example of the third possibility <br/>

\begin{gather\*}
  T(n) = 2T\left(\frac{n}{2}\right) + n^2\\\\
  a=2,b=2,f(n)=n^2
\end{gather\*}

the conditions of the third possibility are met: <br/>
\\[ n^{\log\_b{a}} = n^{\log\_2{2}} = n^1 = \Omega(n^2) \\] <br/>
we get: <br/>
\\[ T(n) = \Theta\left(n^2\right) \\] <br/>

</div>


### <span class="section-num">3.2</span> decreasing functions {#decreasing-functions}

the **master theorem** can be used to solve recurrences of the form \\(T(n) = aT(n - b) + f(n)\\), where \\(a \geq 1\\) and \\(b > 0\\) and \\(f(n)\\) is **asymptotically positive**. (asymptotically positive means that the function is positive for all sufficiently large n.) this recurrence describes an algorithm that divides a problem of size \\(n\\) into sub problems, each of size \\(n-b\\), and solves them recursively. <br/>
the theorem is as follows: <br/>
if \\(T(n) = aT(n-b) + f(n)\\), where \\(a \geq 1\\), \\(b > 0\\), \\(f(n) = O(n^k)\\) and \\(k \geq 0\\) <br/>
we consider 3 cases: <br/>
**case 1**, if \\(a = 1\\) <br/>
\\[ T(n) = O(n \cdot f(n)) \text{ or } O\left(n^{k+1}\right) \\] <br/>

<div class="my_example">

\begin{align}
  T(n) = T(n - 1) + 1 &\implies O(n)\\\\
  T(n) = T(n - 1) + n &\implies O(n^2)\\\\
  T(n) = T(n-1) + \log{n} &\implies O(n\log{n})
\end{align}

</div>

**case 2**, if \\(a > 1\\) <br/>
\\[ T(n) = O\left(a^{\frac{n}{b}} \cdot f(n)\right) \text{ or } O\left(a^{\frac{n}{b}} \cdot n^k\right) \\] <br/>

<div class="my_example">

\begin{align}
  T(n) = 2T(n-1)+1 &\implies O(2^n)\\\\
  T(n) = 3T(n-1)+1 &\implies O(3^n)\\\\
  T(n) = 2T(n-1)+n &\implies O(n \cdot 2^n)
\end{align}

</div>

**case 3**, if \\(a < 1\\) <br/>

<div class="my_example">

\\[ T(n) = O(f(n)) \text{ or } O\left(n^k\right) \\] <br/>

</div>

