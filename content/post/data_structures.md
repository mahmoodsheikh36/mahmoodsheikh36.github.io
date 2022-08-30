+++
title = "data structures"
author = ["mahmood"]
description = "data structures"
date = 2022-07-10T08:59:00+03:00
tags = ["math", "computer-science"]
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
</p>

<style>
.lemma, .proof, .entailment, .definition, .note, .my_example, .characteristic, .assumption, .question, .subquestion, .answer, .step {
  border-radius: 10px;
  box-shadow: 10px 10px 15px rgba(0,0,0,.1);
  padding: 2px;
  border: 1px black solid;
}
.lemma:before, .proof:before, .entailment:before, .definition:before, .note:before, .my_example:before, .characteristic:before, .assumption:before, .question:before, .subquestion:before, .answer:before, .step:before {
  background-color: #bbb;
  position: relative;
  border-radius: 10px;
  padding-right: 5px;
  padding-left: 5px;
  padding-top: 1px;
  padding-bottom: 1px;
  border: 1px solid black;
}
.lemma {
  background-color: beige;
}
.proof {
  background-color: moccasin;
}
.entailment {
  background-color: lightsteelblue;
}
.lemma:before {
  content: "lemma:";
}
.proof:before {
  content: "proof:";
}
.entailment:before {
  content: "entailment (logical consequence):";
}
.note {
  background-color: blanchedalmond;
}
.note:before {
  /* content: url(/note.png) "note:"; */
  content: "note:";
}
.my_example {
  background-color: #e8cfc8; 
}
.my_example:before {
  content: "example:";
}
p {
  margin: 0px;
  padding: 0px;
}
img {
   display: block;
   margin-left: auto;
   margin-right: auto;
}
.hide {
  display: none;
}
.definition {
  background-color: snow;
}
.definition:before {
  content: "definition:";
}
.characteristic {
  background-color: #dfdada;
}
.characteristic:before {
  content: "characteristic:";
}
.assumption {
  background-color: #65ad98;
}
.question {
  background-color: #e1c6c6;
}
.question:before {
  content: "question:";
}
.subquestion {
  background-color: #e5e2d8;
}
.subquestion:before {
  content: "subquestion:";
}
.answer {
  background-color: #beabc5;
}
.answer:before {
  content: "answer:";
}
.step {
  background-color: #b4d3ad;
}
.step:before {
  content: "step:";
}
</style>

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
<script type="text/javascript" id="MathJax-script" defer src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js">
</script>

<div class="note">

for most data structures i havent implemented deletion yet.. <br/>
also its good to note that most of the code isnt optimized to hell, but it doesnt really matter since its only for education purposes and you should probably be using the data structures provided by the programming language's standard library <br/>

</div>


## <span class="section-num">1</span> properties of floor {#properties-of-floor}

<div class="characteristic">

for every 2 [normal]({{< relref "calculus2.md#normal" >}}) numbers \\(m,n\\) and every [real]({{< relref "calculus2.md#real" >}}) number \\(x\\) <br/>
\\[
  \ceil\*{\frac{\ceil\*{\frac{x}{m}}}{n}} = \ceil\*{\frac{x}{m \cdot n}} \qquad \floor\*{\frac{\floor\*{\frac{x}{m}}}{n}} = \floor\*{\frac{x}{m \cdot n}}
\\] <br/>

<div class="my_example">

\\[
  \ceil\*{\frac{\ceil\*{\frac{x}{2^i}}}{2}} = \ceil\*{\frac{x}{2^{i+1}}} \qquad \floor\*{\frac{\floor\*{\frac{x}{2^i}}}{2}} = \floor\*{\frac{x}{2^{i+1}}}
\\] <br/>

</div>

</div>

<div class="characteristic">

the following is true for every normal number \\(n\\) and any number \\(x\\) <br/>

\begin{gather}
  \floor\*{x}+n = \floor\*{x+n} \qquad \ceil\*{x}+n=\ceil\*{x+n}\\\\
  n-\floor\*{x} = \ceil\*{n-x} \qquad n-\ceil\*{x} = \floor\*{n-x}\\\\
  \floor\*{x} \geq \ceil\*{x}-1 \qquad \ceil\*{x} \leq \floor\*{x}+1\\\\
  \floor\*{x} > x-1 \qquad \ceil\*{x} < x+1\\\\
  \floor\*{x} \leq x \qquad \ceil\*{x} \geq x\\\\
  \floor\*{x} = n \iff n \leq x < n+1 \qquad \ceil\*{x} = n \iff n-1 < x \leq n
\end{gather}

</div>


## <span class="section-num">2</span> order of growth {#order-of-growth}

<div class="definition">

the order of growth of an [algorithm]({{< relref "20220706211958-algorithm.md" >}}) is an approximation of the time required to run a computer program as the input size increases, the order of growth ignores the constant factor needed for fixed operations and focuses instead on the operations that increase proportional to input size <br/>
an order of growth is a set of functions whose asymptotic growth behavior is considered equivalent. for example, \\(2n\\), \\(100n\\) and \\(n+1\\) belong to the same order of growth, which is written \\(O(n)\\) in big-oh notation and often called linear because every function in the set grows linearly with \\(n\\) <br/>

</div>


## <span class="section-num">3</span> asymptotic notations {#asymptotic-notations}

| notation                  | name      | formal definition                                                                                                                     | limit definition                                                                               |
|---------------------------|-----------|---------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| \\(f(n) = O(g(n))\\)      | Big Oh    | \\(\exists k > 0 \ \exists n\_0 \ \forall n > n\_0 : \vert f(n) \vert \leq k \cdot g(n)\\)                                            | \\(\lim\_{n\to\infty} \frac{\vert f(n) \vert}{g(n)} = c\\), where \\(c \geq 0\\) is a constant |
| \\(f(n) = \Omega(g(n))\\) | Big Omega | \\(\exists k > 0 \ \exists n\_0 \ \forall n > n\_0 : \vert f(n) \vert \geq k \cdot g(n)\\)                                            | \\(\lim\_{n\to\infty} \frac{g(n)}{f(n)} = c\\), where \\(c \geq 0\\) is a constant             |
| \\(f(n) = \Theta(g(n))\\) | Big Theta | \\(\exists k\_1 > 0\ \exists k\_2 > 0\ \exists n\_0\ \forall n > n\_0 : k\_1 \cdot g(n) \leq \vert f(n) \vert \leq k\_2 \cdot g(n)\\) | \\(\lim\_{n\to\infty} \frac{f(n)}{g(n)} = c\\), where \\(c > 0\\) is a constant                |


### <span class="section-num">3.1</span> Big O {#big-o}

<div class="definition">

**Big O** of a [function]({{< relref "discrete_maths2.md#function" >}}) \\(f\\), denoted by \\(O(f)\\), is an upper asymptotic bound of \\(f\\) <br/>

</div>


### <span class="section-num">3.2</span> Big Omega {#big-omega}

<div class="definition">

**Big Omega** of a [function]({{< relref "discrete_maths2.md#function" >}}) \\(f\\), denoted by \\(\Omega(f)\\), is a lower asymptotic bound of \\(f\\) <br/>

</div>


### <span class="section-num">3.3</span> Big Theta {#big-theta}

<div class="definition">

**Big Theta** of a [function]({{< relref "discrete_maths2.md#function" >}}) \\(f\\), denoted by \\(\Theta(f)\\), is tight bound of \\(f\\), so it is both [Big Omega](#big-omega) and [Big O](#big-o) <br/>

</div>


## <span class="section-num">4</span> time complexity {#time-complexity}

the following definitions differ and shouldnt be confused with [asymptotic notations](#asymptotic-notations) like [Big O](#big-o), as they arent directly related but might have some similarities <br/>


### <span class="section-num">4.1</span> best case {#best-case}


### <span class="section-num">4.2</span> average case {#average-case}

<div class="definition">

the average-case complexity of an [algorithm]({{< relref "20220706211958-algorithm.md" >}}) is the amount of some computational resource (typically time) used by the algorithm, averaged over all possible inputs. <br/>

</div>


### <span class="section-num">4.3</span> worst case {#worst-case}


## <span class="section-num">5</span> recursive functions {#recursive-functions}

consider factorial <br/>

```python
def fac(n):
  if n == 1: return 1
  else: return fac(n-1) * n
```


### <span class="section-num">5.1</span> recurrence relation {#recurrence-relation}

to analyze the runtime of such a function we use a mathematical concept called **Recurrence relation** <br/>
a recurrence defines \\(T(n)\\) in terms of \\(T\\) for smaller values <br/>
example: \\(T(n) = T(n-1) + 1\\), here \\(T(n)\\) is defined in terms of \\(T(n-1)\\) <br/>


#### <span class="section-num">5.1.1</span> initial condition {#initial-condition}

a [recurrence relation](#recurrence-relation) must have **initial conditions**, initial conditions are values of the recurrence for small values of \\(n\\) <br/>
the values of \\(T(0),T(1)\\) are usually sufficient as initial conditions <br/>


#### <span class="section-num">5.1.2</span> closed form {#closed-form}

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
\\[ T(n) \leq T(n-1) + C\_1 \\] <br/>
\\(C\_1\\) represents the total time of all the operations that take constant time that the function does on every iteration <br/>
now this is obviously not what we wanna arrive at, we need to arrive at an expression that doesnt have \\(T\\) in it <br/>
we can substitute in \\(n - 1\\) because \\(T\\) is a function that takes any positive integer <br/>

\begin{align\*}
  T(n) &\leq \underbrace{T(n-2) + C\_1}\_{T(n-1)} + C\_1\\\\
  T(n) &\leq T(n-3) + 3C\_1
\end{align\*}

now you probably already see the pattern here, on every iteration the function takes constant time \\(C\_1\\) to run, until it reaches the last iteration \\(k\\) at which point it we would've \\(k\\) times \\(C\_1\\), e.g.: <br/>
\\[ T(n) \leq T(n-k) + kC\_1 \\] <br/>

now we know that the total number of times the function calls itself depends on the initial value of \\(n\\), in this case that number would be \\(n - 1\\), as in, this function calls itself \\(n - 1\\) times <br/>
we substitute \\(k = n - 1\\) to get the total time this function takes to run <br/>

\begin{align\*}
 T(n) &\leq T(n-(n-1)) + (n-1)C\_1\\\\
      &\leq T(1) + (n-1)C\_1\\\\
      &\leq C\_1 + (n-1)C\_1 &\text{because } C\_1 \geq T(1)\\\\
      &\leq nC\_1
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


### <span class="section-num">5.2</span> recursion tree {#recursion-tree}

<div class="my_example">

consider the following [recurrence relation](#recurrence-relation) <br/>
\\[ T(n) = T\left(\frac{n}{3}\right) + T\left(\frac{2n}{3}\right) + n \\] <br/>
a note to keep in mind is that the sum of all the nodes of the tree must always be equal to \\(T(n)\\) <br/>
with that in mind, the first step would be: <br/>

{{< figure src="/ox-hugo/AT4XkK.png" >}} <br/>

if we sum all the nodes we can see that indeed \\(T(n) = T\left(\frac{2n}{3}\right) + T\left(\frac{n}{3}\right) + n\\) <br/>
for the next step we need to write \\(T\left(\frac{2n}{3}\right)\\) and \\(T\left(\frac{n}{3}\right)\\) in terms of time complexity for smaller values of \\(n\\) so we can know what the next row of nodes would be <br/>

\begin{align\*}
  T\left(\frac{2n}{3}\right) &= T\left(\frac{2 \cdot \frac{2n}{3}}{3}\right) + T\left(\frac{\frac{2n}{3}}{3}\right) + \frac{2n}{3} = T\left(\frac{4n}{9}\right) + T\left(\frac{2n}{9}\right) + \frac{2n}{3}\\\\
  T\left(\frac{n}{3}\right) &= T\left(\frac{2 \cdot \frac{n}{3}}{3}\right) + T\left(\frac{\frac{n}{3}}{3}\right) + \frac{n}{3} = T\left(\frac{2n}{9}\right) + T\left(\frac{n}{9}\right) + \frac{n}{3}
\end{align\*}

according to this, the tree with the new nodes would be: <br/>

{{< figure src="/ox-hugo/e66eVE.png" >}} <br/>

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

{{< figure src="/ox-hugo/0IoNVgg.png" >}} <br/>

\begin{align\*}
  T\left(\frac{n}{8}\right) &= 2T\left(\frac{n}{8^2}\right) + 3T\left(\frac{n}{8\cdot9}\right) + \frac{n}{8}\\\\
  T\left(\frac{n}{9}\right) &= 2T\left(\frac{n}{8\cdot9}\right) + 3T\left(\frac{n}{9^2}\right) + \frac{n}{9}
\end{align\*}

{{< figure src="/ox-hugo/8OoGIIt.png" >}} <br/>

\begin{align\*}
  T(n) &= \text{sum of all nodes}\\\\
  &= \text{sum of all nodes in all levels}\\\\
  &\leq n+n\left(\frac{2}{8}+\frac{3}{9}\right)+n\left(\frac{2}{8}+\frac{3}{9}\right)^2+\cdots+n\left(\frac{2}{8}+\frac{3}{9}\right)^{x-1}\\\\
  &\leq n\left(\left(\frac{2}{8}+\frac{3}{9}\right)+\left(\frac{2}{8}+\frac{3}{9}\right)^2+\cdots+\left(\frac{2}{8}+\frac{3}{9}\right)^{x-1}\right)\\\\
  &= n\cdot \frac{1}{1-\left(\frac{2}{8}+\frac{3}{9}\right)}\\\\
  &= \Theta(n)
\end{align\*}

note the sum was found using [geometric progression formula]({{< relref "20220711182517-sum_of_geometric_progression.md" >}}) <br/>
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

and so we showed that \\(T(n) = \Omega\left(2^{n/2}\right)\\), which means there isnt a tight bound on the [time complexity](#time-complexity) of this function <br/>
using a [recursion tree](#recursion-tree): <br/>

{{< figure src="/ox-hugo/QIrzGtq.png" >}} <br/>

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


### <span class="section-num">5.3</span> Master theorem {#master-theorem}


#### <span class="section-num">5.3.1</span> dividing functions {#dividing-functions}

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


#### <span class="section-num">5.3.2</span> decreasing functions {#decreasing-functions}

The **master theorem** can be used to solve recurrences of the form \\(T(n) = aT(n - b) + f(n)\\), where \\(a \geq 1\\) and \\(b > 0\\) and \\(f(n)\\) is **asymptotically positive**. (asymptotically positive means that the function is positive for all sufficiently large n.) this recurrence describes an algorithm that divides a problem of size \\(n\\) into sub problems, each of size \\(n-b\\), and solves them recursively. <br/>
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


## <span class="section-num">6</span> data structure {#data-structure}

<div class="definition">

a **data structure** is a collection of data and operations on said data, the data is represented as objects, and each object `x` has: <br/>

-   `key(x)`: a key that is used to identify the object (usually a number that uniquely identifies the object) <br/>
-   `info(x)` or `value(x)`: contains the data needed to store for the object (usually without the key) <br/>

<div class="my_example">

for example, if `x` is a person, `key(x)` could be the person's ID, `value(x)` would be information on said person, like age, height, weight etc.. <br/>

</div>

</div>


### <span class="section-num">6.1</span> KeyValue {#keyvalue}

<a id="code-snippet--KeyValue"></a>
```C++
template <typename K, typename V>
class KeyValue {
private:
  K key;
  V value;

public:
  KeyValue(K key, V value) {
    this->key = key;
    this->value = value;
  }
  K get_key() {
    return this->key;
  }
  V get_value() {
    return this->value;
  }
  void set_value(V value) {
    this->value = value;
  }
  void set_key(K key) {
    this->key = key;
  }
  friend bool operator <(const KeyValue<K, V>& c1, const KeyValue<K, V>& c2) {
    return c1.key < c2.key;
  }
  friend bool operator >(const KeyValue<K, V>& c1, const KeyValue<K, V>& c2) {
    return c1.key > c2.key;
  }
};
```


### <span class="section-num">6.2</span> abstract data type {#abstract-data-type}

<div class="definition">

**abstract data types**, commonly abbreviated \*ADT\*s, are a way of classifying [data structure](#data-structure)s based on how they are used and the behaviors they provide. they do not specify how the data structure must be implemented or laid out in memory, but simply provide a minimal expected interface and set of behaviors. for example, a [stack](#stack) is an abstract data type that specifies a linear data structure with [LIFO](#lifo) behavior. stacks are commonly implemented using [array]({{< relref "20220728190531-array.md" >}})s or [linked list](#linked-list)s, but a needlessly complicated implementation using a [binary search tree](#binary-search-tree) is still a valid implementation. to be clear, it is incorrect to say that stacks are arrays or vice versa. an array can be used as a stack. likewise, a stack can be implemented using an array. <br/>

<div class="characteristic">

since abstract data types dont specify an implementation, this means its also incorrect to talk about the [time complexity](#time-complexity) of a given abstract data type. an associative array may or may not have \\(O(1)\\) average search times. An associative array that is implemented by a [hash table](#hash-table) does have \\(O(1)\\) average search times. <br/>

</div>

<div class="characteristic">

to further complicate matters, since certain abstract data types are almost always implemented with a particular data structure, some programmers will use the two terms interchangeably: for example, priority queue and heap, or associative array and hash table. the context in which the term is being used can usually provide distinction. <br/>

</div>

<div class="question">

The Ministry of Education's computer system stores data on teachers, schools and subjects. For each teacher they keep: an ID number and details about the subjects they teach and the schools where they teach. For each school we keep: the name of the school (assuming that this name uniquely identifies the school) and details about the teachers who teach at the school and the subjects taught at the school. For each subject we keep: subject number and details about the teachers who teach this subject and the schools where the subject is taught. <br/>

-   Given a teacher's ID number, subject number and school name Adding/deleting the figure that the teacher teaches the subject at school takes \\(O(m\cdot\log r+\log p)\\) time on average, where m indicates the number of schools where the teacher teaches the subject, p indicates the number of subjects the teacher teaches, and r indicates the number of teachers who teach the subject. <br/>
-   Given a teacher's ID number, printing a list of all the subjects taught by the teacher, where for each subject, in addition to the subject number, a number is printed indicating the number of schools where the teacher teaches the profession. The list of subjects must be sorted by the number of schools where the teacher teaches the subject in ascending order. This action must be performed on time O(p) on average where p indicates the number of subjects taught by the teacher. For example if the teacher teaches subject A in 3 schools, subject B in 5 schools and subject C in 2 schools, then the output will be (in order from left to right (: 5 C 2, A 3, B <br/>
-   Given a subject number and a school number, printing all the teachers who teach this subject in this school, with the teachers sorted by the number of schools where they teach this subject in ascending order. This action must be performed on time O(q) on average where q indicates the number of teachers to be printed. For example, suppose teacher X teaches the given subject in the given school and 3 other schools, and teacher Y teaches the given subject in the given school and 6 other schools, and teacher Z teaches the given subject In the given school and 2 more schools, then the output will be (in order from left to right): Z,X,Y. <br/>

Describe verbally how all the above actions are performed. <br/>

</div>

```java
import java.util.*;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.util.Stack;
import java.util.TreeMap;

public class ADT {
  public static boolean findK(Integer[] A, Integer k) {
    Set<Integer> s = new HashSet<Integer>();
    for (int i = 0; i < A.length; i++){
      if (s.contains(k-A[i]))
        return true;
      s.add(A[i]);
    }
    return false;
  }

  public static void main(String[] args) {
    Integer[] arr = {1,7,9,3,7,4};
    System.out.println(findK(arr, 17));
    System.out.println(findK(arr, 16));

    Set<Integer> s = new HashSet<Integer>();
    s.add(5);
    s.add(6);
    for (int i : s)
      System.out.println(i);

    System.out.println(s.contains(6));

    Map<String, Integer> mp = new TreeMap<String, Integer>();
    Integer v = mp.get("USA");
    if (v == null) mp.put("USA", 1);
    else mp.put("USA", v++);
    mp.put("USA", 1);
    mp.put("USA", 2);
    mp.put("israel", 12);
    System.out.println(mp.get("USA"));

    List<Integer> li = new ArrayList<Integer>();

    Stack<Integer> st = new Stack<Integer>();
    st.push(1);
    st.pop();
    st.push(2);
    st.push(3);

    Iterator<Integer> it = st.iterator();
    while (it.hasNext())
      System.out.println(it.next());

    for (int i : st)
      System.out.println(i);
  }
}
```

</div>


### <span class="section-num">6.3</span> concrete data type {#concrete-data-type}

<div class="definition">

a **concrete data type** is the "concrete" and actual implementation of a given [abstract data type](#abstract-data-type) <br/>
i.e. it is the actual [data structure](#data-structure) we use in programming <br/>

</div>


### <span class="section-num">6.4</span> list {#list}

<div class="definition">

a **list** is an [abstract data type](#abstract-data-type) that is dynamically sized (often automatically resized) **list of objects** that stores as many objects as necessary, each type of list has its own method of dynamic storage <br/>

</div>


#### <span class="section-num">6.4.1</span> linked list {#linked-list}

<div class="definition">

a **linked list** is a [concrete data type](#concrete-data-type) that is an implementation of a [list](#list) <br/>

</div>


##### <span class="section-num">6.4.1.1</span> characteristics {#characteristics}

-   is the list **sorted**? the nodes are sorted by their `key` (usually in an ascending order) <br/>
-   is the list **doubly/singly linked**? in a doubly linked list each node points to the next and previous node whereas in a singly linked list a node only points to the next <br/>
-   does the list have a **tail**? a pointer `tail(x)` points to the last node in a linked list <br/>
-   is the list **circular**? in a circular linked list the last node points to the first whereas in a non-circular linked list it points to NULL (nothing) <br/>


##### <span class="section-num">6.4.1.2</span> functions {#functions}

-   `insert(x)`: inserts `x` <br/>
-   `search(k)`: returns the node whose key is `k` <br/>
-   `isEmpty()`: returns whether list is empty <br/>
-   `delete(x)`: given the node `x`, removes it from the list <br/>


##### <span class="section-num">6.4.1.3</span> implementation (c++) {#implementation--c-plus-plus}


###### <span class="section-num">6.4.1.3.1</span> Node {#node}

<a id="code-snippet--Node"></a>
```C++

#include <cassert>

template <typename T>
class Node : public KeyValue<int, T> {
private:
  Node<T>* next;

public:
  Node(int key, T value) : KeyValue<int, T>(key, value) {}
  Node(int key) : KeyValue<int, T>(key, key) {}
  Node<T>* get_next() {
    return this->next;
  }
  void set_next(Node<T>* next) {
    assert(this != next);
    this->next = next;
  }
  bool has_next() {
    return this->next != nullptr;
  }
  Node<T>* get_tail() {
    Node<T>* n;
    for (n = this; n->get_next() != nullptr; n = n->get_next());
    return n;
  }
};
```


###### <span class="section-num">6.4.1.3.2</span> DoublyNode {#doublynode}

<a id="code-snippet--DoublyNode"></a>
```C++
template <typename T>
class DoublyNode {
private:
  DoublyNode<T>* left = nullptr;
  DoublyNode<T>* right = nullptr;
  T data;

public:
  DoublyNode(T data) {
    this->data = data;
  }
  ~DoublyNode() {
    delete left;
    delete right;
  }
  T get_data() {
    return this->data;
  }
  void set_left(DoublyNode<T> node) {
    this->left = node;
    if (this->left != nullptr) {
      this->left->parent = this;
    }
  }
  void set_right(DoublyNode<T> node) {
    this->right = node;
    if (this->right != nullptr) {
      this->right->parent = this;
    }
  }
  DoublyNode<T> get_right() {
    return this->right;
  }
  DoublyNode<T> get_left() {
    return this->left;
  }
  bool has_right() {
    return this->right != nullptr;
  }
  bool has_left() {
    return this->left != nullptr;
  }
};
```


###### <span class="section-num">6.4.1.3.3</span> LinkedList {#linkedlist}

<a id="code-snippet--LinkedList"></a>
```C++

template <typename T>
class LinkedList {
private:
  Node<T>* head;

public:
  LinkedList() : head(nullptr) {}
  ~LinkedList() {
    Node<T>* n = this->head;
    while (n) {
      Node<T>* next = n->get_next();
      delete n;
      n = next;
    }
  }
  Node<T>* get_head() {
    return this->head;
  }
  void set_head(Node<T>* n) {
    this->head = n;
  }
  LinkedList* add(int key) {
    return this->add(new Node<T>(key));
  }
  LinkedList* add(Node<T>* n) {
    if (this->is_empty()) {
      this->head = n;
    } else {
      this->get_tail()->set_next(n);
    }
    return this;
  }
  Node<T>* get_tail() {
    if (this->is_empty())
      return nullptr;
    return this->head->get_tail();
  }
  bool is_empty() {
    return this->head == nullptr;
  }
  Node<T>* get_node(int index) {
    Node<T>* n = head;
    for (int i = 0; i < index; ++i) {
      n = n->get_next();
    }
    return n;
  }
  int size() {
    Node<T>* n;
    int i = 0;
    for (n = this->head; n != nullptr; n = n->get_next()) {
      ++i;
    }
    return i;
  }
};
```


###### <span class="section-num">6.4.1.3.4</span> DoublyLinkedList {#doublylinkedlist}

```C++
to be implemented
```


###### <span class="section-num">6.4.1.3.5</span> LinkedListWithTail {#linkedlistwithtail}

```C++
to be implemented
```


###### <span class="section-num">6.4.1.3.6</span> CircularLinkedList {#circularlinkedlist}

```C++
to be implemented
```


#### <span class="section-num">6.4.2</span> array list {#array-list}

<div class="definition">

a **linked list** is a [concrete data type](#concrete-data-type) that is an implementation of a [list](#list) based on an [array]({{< relref "20220728190531-array.md" >}}) that is dynamically continuously reconstructed on insertions to hold as many objects as necessary <br/>

<div class="note">

some might suggest that a linked list should shrink automatically aswell on deletions, though that isnt a popular implementation <br/>

</div>

<div class="characteristic">

an array list contains a fixed-size array initialized to a constant length, when the array gets filled we create a new array whose size is \\(n \times c\\) where \\(n\\) is a constant (usually 2), and \\(c\\) is the previous size of the array, and we copy all the objects to the new array and then we have more space to store more objects <br/>

</div>

</div>


##### <span class="section-num">6.4.2.1</span> ArrayList {#arraylist}

<a id="code-snippet--ArrayList"></a>
```C++
#include <cassert>
#include <memory>

#define INITIAL_SIZE 3
#define SCALING_FACTOR 2

template <typename T> class ArrayList {
private:
  int actual_size;
  int idx;
  T* arr;
  T* allocate_memory(int num_of_objects) {
    this->actual_size = num_of_objects;
    // return new T[num_of_objects];
    // return alloc.allocate(num_of_objects);
    return (T*)::operator new(num_of_objects * sizeof(T));
  }
  void resize() {
    int prev_size = this->actual_size;
    T* newArr = allocate_memory(this->actual_size * SCALING_FACTOR);
    for (int i = 0; i < idx; ++i) {
      newArr[i] = this->arr[i];
    }
    // delete[] this->arr;
    // alloc.deallocate(this->arr, prev_size);
    ::operator delete(this->arr);
    this->arr = newArr;
  }

public:
  ArrayList() {
    this->idx = 0;
    this->arr = this->allocate_memory(INITIAL_SIZE);
  }
  ~ArrayList() {
    delete[] this->arr;
  }
  ArrayList<T>* add(T val) {
    if (this->idx == this->actual_size)
      this->resize();
    this->arr[this->idx++] = val;
    return this;
  }
  T& get(int i) {
    return this->arr[i];
  }
  T& operator [](int i) {
    return this->arr[i];
  }
  void set(int index, T obj) {
    this->arr[index] = obj;
  }
  int size() {
    return this->idx;
  }
  void remove(int index) {
    assert(index < this->idx);
    for (int i = index; i < this->idx-1; ++i) {
      this->arr[i] = this->arr[i+1];
    }
    this->idx--;
  }
  void insert(int index, T value) {
    assert(index < idx);
    if (idx == this->actual_size-1)
      this->resize();
    for (int i = idx; i > index; --i)
      this->arr[i] = this->arr[i-1];
    this->arr[index] = value;
    idx++;
  }
  static ArrayList<T>* from_array(T* other_arr, int length) {
    ArrayList<T>* list = new ArrayList<T>();
    for (int i = 0; i < length; ++i) {
      list->add(other_arr[i]);
    }
    return list;
  }
};
```


### <span class="section-num">6.5</span> stack {#stack}

<div class="definition">

a **stack** is an [abstract data type](#abstract-data-type) <br/>

</div>


#### <span class="section-num">6.5.1</span> LIFO {#lifo}


### <span class="section-num">6.6</span> queue {#queue}

<div class="definition">

a **queue** is a linear [abstract data type](#abstract-data-type) in which the operations are performed based on [FIFO](#fifo) principle <br/>

</div>


#### <span class="section-num">6.6.1</span> FIFO {#fifo}

<div class="definition">

**FIFO** stands for **first in first out**, which means the first entity that enters would be the first one to exit <br/>

</div>


#### <span class="section-num">6.6.2</span> Circular Queue {#circular-queue}

<div class="definition">

a **Circular Queue** is a [Queue](#queue) in which the last element is connected back to the first element to make a circle. <br/>

</div>


#### <span class="section-num">6.6.3</span> priority queue {#priority-queue}

a **priority queue** is an [abstract data type]({{< relref "data_structures.md#abstract-data-type" >}}) similar to a regular [queue](#queue) or [stack](#stack) in which each element additionally has a priority associated with it. in a priority queue, an element with high priority is served before an element with low priority <br/>


### <span class="section-num">6.7</span> tree {#tree}

<div class="definition">

a **tree** is an [abstract data type](#abstract-data-type) which stores data in the shape of a downwards-growing tree and every entry is called a [node](#node) <br/>

</div>


#### <span class="section-num">6.7.1</span> node {#node}

trees store data as **nodes**, meaning each item in a tree is called a node <br/>
each node `x` has the following fields <br/>

-   `key(x)`: a key that's used to identify the node (like every data structure) <br/>
-   `info(x)`: contains the data we need to store (like every data structure) <br/>
-   `left(x)`: a pointer to the left child of `x` <br/>
-   `right(x)`: a pointer to the right child <br/>
-   `parent(x)` (optional): a pointer to the parent of `x` <br/>

every node in a [binary tree](#binary-tree) has from 0 to 2 children <br/>


##### <span class="section-num">6.7.1.1</span> height {#height}

<div class="definition">

the **height** of a [node](#node) `x` is defined as the [height of subtree](#height) of said [node](#node), denoted by \\(T\_x\\) <br/>

</div>


##### <span class="section-num">6.7.1.2</span> balance factor {#balance-factor}

the **balance factor** of a [node](#node) `x`, denoted by `balance(x)` or `BF(x)`, is defined as the height of the [subtree](#subtree) of the left child of `x`, denoted by \\(T\_{\text{left}(x)}\\) minus the height of the subtree of the right child of `x` denoted by \\(T\_{\text{right}(x)}\\), in short: <br/>
\\[
  BF(X) = \text{height}(T\_{\text{left}(x)}) - \text{height}(T\_{\text{right}(x)})
\\] <br/>
see for example this tree, the balance factor of each node is written above it <br/>

{{< figure src="/ox-hugo/gXx4ZR.png" >}} <br/>


#### <span class="section-num">6.7.2</span> height {#height}

<div class="definition">

the **height** of a tree is the number of the [node](#node)s in the longest path downwards (including the root node) <br/>

</div>


#### <span class="section-num">6.7.3</span> root {#root}

<div class="definition">

the tree itself `T` (not for every node) contains a pointer `root(T)` that points to the root node of the tree (the first and topmost node) <br/>

</div>


#### <span class="section-num">6.7.4</span> leaf {#leaf}

<div class="definition">

a [node](#node) that doesnt have children is called a **leaf** <br/>

</div>


#### <span class="section-num">6.7.5</span> internal node {#internal-node}

<div class="definition">

a [node](#node) that has atleast one child is called an **internal node** <br/>

</div>


#### <span class="section-num">6.7.6</span> sibling {#sibling}

<div class="definition">

2 nodes are considered siblings if they share the same parent node <br/>

</div>


#### <span class="section-num">6.7.7</span> ancestor {#ancestor}

<div class="definition">

an **ancestor** of a given [node](#node) is a node that is at an upper level of it <br/>

</div>


#### <span class="section-num">6.7.8</span> descendant {#descendant}

<div class="definition">

a **descendant** of a given [node](#node) is a node that is at a lower level of the given node <br/>

</div>


#### <span class="section-num">6.7.9</span> subtree {#subtree}

for some [binary tree](#binary-tree) `T` and a node `x` of said tree we denote \\(T\_x\\) as the **subtree** whose [root](#root) is `x`, and the left **subtree** of `x` is the tree whose root is the left child of `x` denoted by \\(T\_{\text{left}(x)}\\) and the right subtree of `x` is the tree whose root is the right child of `x` denoted by \\(T\_{\text{right}(x)}\\) <br/>

{{< figure src="/ox-hugo/vD1CJC.png" >}} <br/>

the height of this tree is 4 <br/>


#### <span class="section-num">6.7.10</span> complete tree {#complete-tree}

<div class="definition">

a **complete** [binary tree](#binary-tree) is a binary tree in which every [node](#node) has 2 or 0 children, and the leaves are all on at the same level <br/>

</div>


#### <span class="section-num">6.7.11</span> almost complete tree {#almost-complete-tree}

<div class="definition">

an **almost complete** binary tree is a binary tree from which 0 or more nodes have been deleted continuously from the right part of the last level of nodes <br/>

<div class="characteristic">

the nodes in the last level in an almost complete binary tree have to appear continuously from left to right <br/>

</div>

<div class="characteristic">

every [complete tree](#complete-tree) is an [almost complete tree](#almost-complete-tree) but not every almost complete tree is a complete tree <br/>

</div>

<div class="characteristic">

every level contains 2 times as many nodes as the level before it, except perhaps for the last level <br/>

</div>

<div class="characteristic">

the height of a tree is \\(\floor\*{\log\_2 n}\\) <br/>

</div>

<div class="characteristic">

the number of nodes in a tree is \\(\ceil\*{\frac{n}{2}}\\) <br/>

</div>

<div class="characteristic">

the number of nodes at height \\(i\\) is \\(\ceil\*{\frac{n}{2i+1}}\\) <br/>

</div>

</div>


#### <span class="section-num">6.7.12</span> breadth-first search {#breadth-first-search}

**breadth-first search** or **BFS** for short, explores each level before moving onto the next one <br/>
extra memory, usually a [queue](#queue), is needed to keep track of the child nodes that were encountered but not yet explored. <br/>
![](/ox-hugo/Animated_BFS.gif) <br/>


#### <span class="section-num">6.7.13</span> depth-first search {#depth-first-search}

**depth-first search** or **DFS** for short, consists of exploring branches as far as possible before [backtracking](#backtracking) and exploring branches of other nodes <br/>
this is the algorithm we'll be using because its simpler <br/>
![](/ox-hugo/bfs_dfs.gif) <br/>


##### <span class="section-num">6.7.13.1</span> inorder traversal {#inorder-traversal}

left, parent, right <br/>

```C
Algorithm inorder(tree)
  1. go to the left child, i.e., call inorder(left-child), print it
  2. go back to the parent, print it
  3. go to the right child, i.e., call inorder(right-child), print it
```

<div class="note">

note that before printing a child will always call `inorder(left-child)`, so the first node to print would be the leftmost node in the deepest level <br/>

</div>


##### <span class="section-num">6.7.13.2</span> preorder traversal {#preorder-traversal}

parent, left, right <br/>

```C
Algorithm preorder(tree)
  1. visit the parent, print it
  2. go to the left child, i.e., call preorder(left-child), print it
  3. go to the right child, i.e., call preorder(right-child), print it
```


##### <span class="section-num">6.7.13.3</span> postorder traversal {#postorder-traversal}

left, right, parent <br/>

```C
Algorithm postorder(tree)
  1. go to the left child, i.e., call postorder(left-child), print it
  2. go to the right child, i.e., call postorder(right-child), print it
  3. visit the parent, print it
```


#### <span class="section-num">6.7.14</span> binary tree {#binary-tree}

<div class="definition">

a **binary tree** is a [concrete data type](#concrete-data-type) that is an implementation of a [tree](#tree) <br/>

</div>


##### <span class="section-num">6.7.14.1</span> BinaryTreeNode {#binarytreenode}

<a id="code-snippet--BinaryTreeNode"></a>
```C++
#include <cstdlib>

template <typename T> class BinaryTree; /* forward declare the class instead of including it */

template <typename T> class BinaryTreeNode {
private:
  BinaryTreeNode<T>* parent;
  BinaryTreeNode<T>* right;
  BinaryTreeNode<T>* left;
  T value;
  int key;

public:
  BinaryTreeNode(int key, T value)  {
    this->key = key;
    this->value = value;
    this->parent = nullptr;
    this->right = nullptr;
    this->left = nullptr;
  }
  BinaryTreeNode(int key) {
    this->key = key;
    this->value = key;
    this->parent = nullptr;
    this->right = nullptr;
    this->left = nullptr;
  }
  ~BinaryTreeNode()  {
    delete this->right;
    delete this->left;
  }
  void set_parent(BinaryTreeNode<T>* node) {
    this->parent = node;
  }
  void set_right(BinaryTreeNode<T>* node) {
    this->right = node;
    if (node != nullptr)
      node->parent = this;
  }
  void set_left(BinaryTreeNode<T>* node) {
    this->left = node;
    if (node != nullptr)
      node->parent = this;
  }
  BinaryTreeNode<T>* get_parent() {
    return this->parent;
  }
  BinaryTreeNode<T>* get_right() {
    return this->right;
  }
  BinaryTreeNode<T>* get_left() {
    return this->left;
  }
  bool has_right() {
    return this->right != nullptr;
  }
  bool has_left() {
    return this->left != nullptr;
  }
  bool has_parent() {
    return this->parent != nullptr;
  }
  T get_value() {
    return this->value;
  }
  int get_key() {
    return this->key;
  }
  bool is_leaf() {
    return !(this->has_left() || this->has_right());
  }
  bool is_right_child() {
    return this->parent != nullptr && this->parent->get_right() == this;
  }
  bool is_left_child() {
    return this->parent != nullptr && this->parent->get_left() == this;
  }
  int height() {
    int right_height = this->has_left() ? this->get_left()->height() : 0;
    int left_height = this->has_right() ? this->get_right()->height() : 0;
    if (left_height > right_height) {
      return 1 + left_height;
    }
    return 1 + right_height;
  }
  BinaryTreeNode<T>* find(int key) {
    if (this->key == key) {
      return this;
    }
    BinaryTreeNode<T>* n_left = this->has_left() ? this->get_left()->find(key) : nullptr;
    BinaryTreeNode<T>* n_right = this->has_right() ? this->get_right()->find(key) : nullptr;
    return n_left != nullptr ? n_left : n_right;
  }
  int balance_factor() {
    if (this->has_left()) {
      if (this->has_right()) {
        return this->get_left()->height() - this->get_right()->height();
      } else {
        return this->get_left()->height();
      }
    }
    if (this->has_right()) {
      return 0 - this->get_right()->height();
    }
    return 0;
  }
  bool is_balanced() {
    bool is_left_balanced = this->has_left() ? this->get_left()->is_balanced() : true;
    bool is_right_balanced = this->has_right() ? this->get_right()->is_balanced() : true;
    return !this->is_problematic() && is_left_balanced && is_right_balanced;
  }
  bool is_problematic() {
    return abs(this->balance_factor()) > 1;
  }
  BinaryTreeNode<T>* find_problematic_node() {
    if (this->is_problematic())
      return this;
    BinaryTreeNode<T>* p_left = nullptr;
    BinaryTreeNode<T>* p_right = nullptr;
    if (this->has_left())
      p_left = this->get_left()->find_problematic_node();
    if (this->has_right())
      p_right = this->get_right()->find_problematic_node();
    return p_left == nullptr ? p_right : p_left;
  }
  bool is_complete(BinaryTreeNode<T>* root) {
    if (this->is_leaf())
      return this->distance_to(root) == root->height();
    if (!this->has_right() || !this->has_left())
      return false;
    return this->right->is_complete(root) && this->left->is_complete(root);
  }
  int distance_to(BinaryTreeNode<T>* other) {
    if (other->height() > this->height()) {
      return other->find_path(this)->height();
    }
    return this->find_path(other)->height();
  }
  BinaryTreeNode<T>* find_path(BinaryTreeNode<T>* other) {
    if (this == other) {
      return new BinaryTreeNode<T>(other->key, other->value);
    } else {
      if (this->has_left()) {
        BinaryTreeNode<T>* n_left = this->get_left()->find_path(other);
        if (n_left != nullptr) {
          BinaryTreeNode<T>* node = new BinaryTreeNode<T>(this->key, this->value);
          node->set_left(n_left);
          return node;
        }
      }
      if (this->has_right()) {
        BinaryTreeNode<T>* n_right = this->get_right()->find_path(other);
        if (n_right != nullptr) {
          BinaryTreeNode<T>* node = new BinaryTreeNode<T>(this->key, this->value);
          node->set_right(n_right);
          return node;
        }
      }
    }
    return nullptr;
  }
  BinaryTreeNode<T>* find_rightmost_leaf() {
    if (this->is_leaf() && this->level() == this->find_root()->height()) {
      return this;
    }
    BinaryTreeNode<T>* from_right = this->has_right() ? this->get_right()->find_rightmost_leaf() : nullptr;
    if (from_right != nullptr)
      return from_right;
    return this->has_left() ? this->get_left()->find_rightmost_leaf() : nullptr;
  }
  BinaryTreeNode<T>* find_leftmost_leaf() {
    if (this->is_leaf() && this->level() == this->find_root()->height() - 1) {
      return this;
    }
    BinaryTreeNode<T>* from_left = this->has_left() ? this->get_left()->find_leftmost_leaf() : nullptr;
    if (from_left != nullptr)
      return from_left;
    return this->has_right() ? this->get_right()->find_leftmost_leaf() : nullptr;
  }
  bool has_right_and_left() {
    return this->has_left() && this->has_right();
  }
  bool is_right() {
    return this->parent->get_right() == this;
  }
  bool is_left() {
    return this->parent->get_left() == this;
  }
  BinaryTreeNode<T>* get_right_uncle() {
    return this->parent->parent->right;
  }
  int level() {
    int lvl = 1;
    BinaryTreeNode<T>* n = this;
    while (n->has_parent()) {
      lvl++;
      n = n->get_parent();
    }
    return lvl;
  }
  BinaryTreeNode<T>* find_root() {
    BinaryTreeNode<T>* n = this;
    while (n->has_parent()) {
      n = n->get_parent();
    }
    return n;
  }
  void print() {
    if (this->has_left())
      this->left->print();
    std::cout << this->key << " ";
    if (this->has_right())
      this->right->print();
  }
};
```


##### <span class="section-num">6.7.14.2</span> BinaryTree {#binarytree}

<a id="code-snippet--BinaryTree"></a>
```C++


template <typename T> class BinaryTree {
private:
  BinaryTreeNode<T>* root;
public:
  BinaryTree() { root = nullptr; }
  BinaryTree(BinaryTreeNode<T>* root) {
    this->root = root;
  }
  ~BinaryTree() {
    delete this->root;
  }
  BinaryTreeNode<T>* get_root() {
    return this->root;
  }
  void set_root(BinaryTreeNode<T>* node) {
    this->root = node;
  }
  bool is_empty() {
    return this->root == nullptr;
  }
  int size() {
    BinaryTreeNode<T>* n;
    int i = 0;
    for (n = this->get_root(); n != nullptr; n = n->get_right()) {
      ++i;
    }
    return i;
  }
  int height() {
    if (this->is_empty())
      return 0;
    return this->root->height();
  }
  bool is_balanced() {
    if (this->is_empty()) {
      return true;
    }
    return this->get_root()->is_balanced();
  }
  BinaryTreeNode<T>* find_problematic_node() {
    return this->root->find_problematic_node();
  }
  BinaryTreeNode<T>* find(int key) {
    return this->root->find(key);
  }
  /* inorder print */
  void print() {
    if (!this->is_empty()) this->get_root()->print();
    std::cout << "\n";
  }
  void empty() {
    delete this->root;
    this->root = nullptr;
  }
  BinaryTree<T>* insert_right(BinaryTreeNode<T>* node) {
    if (this->is_empty()) {
      this->set_root(node);
      return this;
    }
    BinaryTreeNode<T>* n = this->get_root();
    while (n->has_right()) {
      n = n->get_right();
    }
    n->set_right(node);
    return this;
  }
  BinaryTree<T>* insert_left(BinaryTreeNode<T>* node) {
    if (this->is_empty()) {
      this->set_root(node);
      return this;
    }
    BinaryTreeNode<T>* n = this->get_root();
    while (n->has_left()) {
      n = n->get_left();
    }
    n->set_left(node);
    return this;
  }
  BinaryTree<T>* insert_right(int key) {
    return this->insert_right(new BinaryTreeNode<int>(key));
  }
  BinaryTree<T>* insert_left(int key) {
    return this->insert_left(new BinaryTreeNode<int>(key));
  }
  bool is_complete() {
    return this->is_empty() || this->root->is_complete(this->root);
  }
  /* note that this function gets the rightmost leaf in the last level */
  BinaryTreeNode<T>* find_rightmost_leaf() {
    return this->root->find_rightmost_leaf();
  }
  /* note that this function gets the leftmost leaf in the second-to-last level */
  BinaryTreeNode<T>* find_leftmost_leaf() {
    return this->root->find_leftmost_leaf();
  }
};
```


##### <span class="section-num">6.7.14.3</span> algorithms {#algorithms}

<div class="question">

add to the class of a [binary tree](#binary-tree) a function that takes in an integer \\(k\\) and checks if there is a node in the tree that contains exactly \\(k\\) [descendant](#descendant)s, it should run in \\(O(n)\\) time <br/>

<div class="answer">

```C++
#include <iostream>



bool node_descendants(BinaryTreeNode<int>* n, int k) {
  if (n->is_leaf()) {
    return k == 0;
  }
  int new_num = k;
  if (n->has_right()) new_num--;
  if (n->has_left()) new_num--;
  if (n->has_right() && node_descendants(n->get_right(), new_num))
    return true;
  if (n->has_left() && node_descendants(n->get_left(), new_num))
    return true;
  if (n->has_right() && node_descendants(n->get_right(), k))
    return true;
  if (n->has_left() && node_descendants(n->get_left(), k))
    return true;
  return false;
}

int main() {

  t.print();
  print_latex_forest(t.get_root());
  std::cout << node_descendants(t.get_root(), 9) << std::endl;
}
```

this code runs in \\(O(2n) \sim O(n)\\) time <br/>

</div>

</div>


#### <span class="section-num">6.7.15</span> binary search tree {#binary-search-tree}

a **binary search tree** is a [binary tree](#binary-tree) that has the following restrictions: <br/>

-   the keys of all the nodes in the left [subtree](#subtree) of any given [node](#node) `x` is smaller than the key of `x` <br/>
-   the keys of all the nodes in the right side of the tree are bigger or equal to the key of `x` <br/>

for example the following tree is a binary search tree: <br/>

{{< figure src="/ox-hugo/a0JkT1.png" >}} <br/>


##### <span class="section-num">6.7.15.1</span> insertion {#insertion}

a new key is always inserted as a [leaf](#leaf). we start from the [root](#root), making our way downwards by comparing the new key to the key of the current node to decide which child to move to on each iteration, until we hit a leaf node, then we add the new node as its child <br/>


##### <span class="section-num">6.7.15.2</span> BinarySearchTree {#binarysearchtree}

<a id="code-snippet--BinarySearchTree"></a>
```C++


template <typename T> class BinarySearchTree : public BinaryTree<T> {
public:
  BinarySearchTree() {}
  BinarySearchTree(BinaryTreeNode<T>* node) : BinaryTree<T>(node) {}
  virtual BinarySearchTree<T>* insert(BinaryTreeNode<T>* node) {
    node->set_right(nullptr);
    node->set_left(nullptr);
    if (this->is_empty()) {
      BinaryTree<T>::set_root(node);
    } else {
      BinaryTreeNode<T>* n = this->get_root();
      while (true) {
        if (node->get_key() < n->get_key()) {
          if (!n->has_left()) {
            n->set_left(node);
            node->set_parent(n);
            break;
          }
          n = n->get_left();
        } else {
          if (!n->has_right()) {
            n->set_right(node);
            node->set_parent(n);
            break;
          }
          n = n->get_right();
        }
      }
    }
    return this;
  }
  BinarySearchTree<T>* insert(int key, T value) {
    return this->insert(new BinaryTreeNode<T>(key, value));
  }
  BinarySearchTree<T>* insert(int value) {
    return this->insert(new BinaryTreeNode<T>(value));
  }
  BinarySearchTree<T>* insert(int* values, unsigned int size) {
    for (int i = 0; i < size; ++i)
      this->insert(new BinaryTreeNode<T>(values[i]));
    return this;
  }
  /* this needs to be implemented asap */
  void remove(BinaryTreeNode<T>* node) {
    /* in case that node is the only one in the tree */
    if (this->get_root()->is_leaf() && this->get_root() == node) {
      this->set_root(nullptr);
      return;
    }
    /* in case the node has no children */
    BinaryTreeNode<T>* parent = node->get_parent();
    if (node->is_leaf()) {
      if (node->is_right_child()) {
        parent->set_right(nullptr);
      } else {
        parent->set_left(nullptr);
      }
    }
  }
  void rotate_right(BinaryTreeNode<T>* node) {
    BinaryTreeNode<T>* previous_left = node->get_left();
    if (node->is_left_child()) {
      node->get_parent()->set_left(previous_left);
    } else if (node->is_right_child()) {
      node->get_parent()->set_right(previous_left);
    } else if (node == this->get_root()) {
      this->set_root(previous_left);
      previous_left->set_parent(nullptr);
    }
    node->set_parent(previous_left);
    node->set_left(previous_left->get_right());
    previous_left->set_right(node);
  }
  void rotate_left(BinaryTreeNode<T>* node) {
    BinaryTreeNode<T>* previous_right = node->get_right();
    if (node->is_right_child()) {
      node->get_parent()->set_right(previous_right);
    } else if (node->is_left_child()) {
      node->get_parent()->set_left(previous_right);
    } else if (node == this->get_root()) {
      this->set_root(previous_right);
      previous_right->set_parent(nullptr);
    }
    node->set_parent(previous_right);
    node->set_right(previous_right->get_left());
    previous_right->set_left(node);
  }
};
```

example usage: <br/>

```C++
#include <iostream>


int main() {
  BinarySearchTree<int> t;
  t.insert(11)->insert(5)->insert(3)->insert(4)->insert(2)->insert(1)->insert(7)->insert(6)->insert(20)->insert(15)->insert(24)->insert(16)->insert(12)->insert(14)->insert(13)->insert(17)->insert(26);
  std::cout << "is this tree balanced?: " << t.is_balanced() << std::endl;
  std::cout << "the height of this tree is: " << t.get_root()->height() << std::endl;
  std::cout << "the balance factor of the root is: " << t.get_root()->balance_factor() << std::endl;
  print_latex_forest(t.get_root());
  BinaryTreeNode<int>* newroot = t.get_root()->find_path(t.find(13));
  print_latex_forest(newroot);
  delete newroot;
}
```

is this tree balanced?: 0 <br/>
the height of this tree is: 6 <br/>
the balance factor of the root is: -1 <br/>

{{< figure src="/ox-hugo/l4WxCrf.png" >}} <br/>

{{< figure src="/ox-hugo/6uIbzb8.png" >}} <br/>


#### <span class="section-num">6.7.16</span> AVL tree {#avl-tree}

an **AVL tree** is a [binary search tree](#binary-search-tree) in which every node `x` has a [balance factor](#balance-factor) of \\(0,1,-1\\), meaning: <br/>
\\[
  \left|\text{height}\left(T\_{\text{left}(x)}\right) - \text{height}\left(T\_{\text{right}(x)}\right)\right| \leq 1
\\] <br/>
every node `x` of this tree holds an extra field called `balance` which holds the [balance factor](#balance-factor) of said node <br/>
for example, the following tree is an AVL tree: <br/>

{{< figure src="/ox-hugo/CRLd0L.png" >}} <br/>

if we were to remove the node with value 14 or with value 9 this wouldnt be an AVL tree <br/>

<div class="lemma">

let `T` be an AVL tree with `n` nodes and height \\(h\\), then \\(h = \Theta(\log n)\\) <br/>

</div>


##### <span class="section-num">6.7.16.1</span> minimal form {#minimal-form}

<div class="definition">

a minimal form of an [AVL tree](#avl-tree) with a given height \\(h\\) is one which contains the least possible number of nodes <br/>

<div class="lemma">

the minimal number of nodes for a tree of height \\(h\\) is given by the following [recurrence relation](#recurrence-relation) <br/>

\begin{align\*}
  N(h)&=N(h-1) + N(h-2) + 1\\\\
  N(1)&=1\\\\
  N(2)&=2
\end{align\*}

<div class="note">

according to some sources, the base cases are \\(N(0)=1,\ N(1)=2\\), but the base cases given above make more sense because a tree with a single node should have a height of 1 not 0 <br/>

</div>

</div>

<div class="lemma">

a minimal form of an [AVL tree](#avl-tree) with a given number of nodes \\(N\\) is the one with the smallest height which is given by: <br/>
\\[
  h = \log\_2 N
\\] <br/>

</div>

here is a python snippet to find the minimal number of nodes needed for a given height: <br/>

```python
def find(height):
  if height == 1:
    return 1
  if height == 2:
    return 2
  return find(height-1) + find(height-2) + 1
return [(i,find(i)) for i in range(1,15)]
```

| height | nodes |
|--------|-------|
| 1      | 1     |
| 2      | 2     |
| 3      | 4     |
| 4      | 7     |
| 5      | 12    |
| 6      | 20    |
| 7      | 33    |
| 8      | 54    |
| 9      | 88    |
| 10     | 143   |
| 11     | 232   |
| 12     | 376   |
| 13     | 609   |
| 14     | 986   |

</div>


##### <span class="section-num">6.7.16.2</span> problematic node {#problematic-node}

<div class="definition">

a **problematic node** is a [node](#node) whose [balance factor](#balance-factor) is \\(\pm2\\) <br/>

</div>


##### <span class="section-num">6.7.16.3</span> insertion {#insertion}

the process of inserting a node to an AVL tree starts with inserting it using the same insertion method we used for a [binary search tree](#binary-search-tree), after said insertion we start going up the tree starting at the new node we just inserted and updating the [balance factor](#balance-factor) for every node we encounter as we go <br/>
if we arrive at [problematic node](#problematic-node), we apply the proper [rotation](#rotation) to [rebalance](#rebalancing) the tree <br/>


##### <span class="section-num">6.7.16.4</span> rebalancing {#rebalancing}

during a modifying operation of a [binary tree](#binary-tree), a node might become [problematic](#problematic-node), to restore balance to the tree so that it remains an [AVL tree](#avl-tree) we use [rotation](#rotation)s <br/>


###### <span class="section-num">6.7.16.4.1</span> rotation {#rotation}

to determine which type of **rotation** we need to use to **rebalance** a given tree, we go 2 steps from the [problematic node](#problematic-node) towards the newly inserted node which gives us the following 4 cases: <br/>

1.  if we go 2 times to the left, then the **rotation** is of type [LL](#left-left-rotation) <br/>
2.  if we go 2 times to the right, then the **rotation** is of type [RR](#right-right-rotation) <br/>
3.  if we go left and then right then the **rotation** is of type [LR](#left-right-rotation) <br/>
4.  if we go right and then left then the **rotation** is of type [RL](#right-left-rotation) <br/>

<!--list-separator-->

1.  simple rotation

    <!--list-separator-->
    
    1.  left left rotation
    
        let `z` be the left child of the [problematic node](#problematic-node) and `x` be the problematic node itself <br/>
        in **Left Left** rotation we rotate `x` to the right, such that the left child of `x` replaces `x` and `x` gets "rotated" to the right becoming the right child of `z` and a parent of the previous right child of `z` <br/>
        
