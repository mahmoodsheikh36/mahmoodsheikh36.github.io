+++
title = "algorithm correctness"
author = ["user"]
date = 2022-11-09T20:53:00+02:00
tags = ["math", "computer-science"]
draft = false
+++

<div class="definition">

an algorithm is totally correct if it receives valid input, terminates, and always returns the correct output <br/>

</div>


## proving algorithm correctness by induction {#proving-algorithm-correctness-by-induction}

the only way to prove the [correctness of an algorithm]({{< relref "20221104220603-algorithm_correctness.md" >}}) over all possible inputs is by reasoning formally or mathematically about it. <br/>
here we'll be using [mathematical induction]({{< relref "20220707193301-mathematical_induction.md" >}}) <br/>

<div class="my_example">

{{< figure src="/ox-hugo/cueVWTf.svg" >}} <br/>

we need to prove the correctness of this algorithm, and we do so using induction <br/>
for each \\(i=1,2,\dots,k\\), when the algorithm arrives to the end of the loop for the `i`'th time, the following [loop invariant]({{< relref "20221104221055-loop_invariant.md" >}}) holds true: <br/>
\\[
sum = \sum\_{j=1}^{i} A[j]
\\] <br/>
with the loop invariant in mind, we use induction <br/>
on the `i+1`'th iteration, we would be adding the value `A[i+1]` to the variable `sum`, so we know on the `i+1`'th iteration the following is true: <br/>
\\[
sum = \sum\_{j=1}^{i} A[j] + A[i+1] = \sum\_{j=1}^{i+1} A[j]
\\] <br/>
which is what we needed to prove <br/>

</div>


## correctness of recursive algorithms {#correctness-of-recursive-algorithms}

<div class="my_example">

consider the following function <br/>

{{< figure src="/ox-hugo/e8I9jOY.svg" >}} <br/>

<span class="underline">proof that the algorithm terminates</span>: <br/>
assume that \\(\textsc{Recursive-Sum}\\) runs on an array `A`, on each recursive call, the size of the input array `A` is halved, its obvious that at the end of every sequence of calls the size of the input array would arrive to 1 which is the edge case that would cause the function to terminate <br/>
<span class="underline">proof of correctness</span>: <br/>
we prove this by induction on the number of elements in the array <br/>
for \\(|A|=1\\) which is the edge case, the algorithm returns \\(A[1]\\), the only element in \\(A\\), its obvious that the output is correct <br/>

</div>

