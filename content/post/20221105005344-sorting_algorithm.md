+++
title = "sorting algorithms"
author = ["mahmood"]
description = "sorting algorithms"
date = 2023-01-01T16:16:00+02:00
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


## <span class="section-num">1</span> comparison sort {#comparison-sort}

<div class="definition">

a **comparison sort** is a type of **sorting algorithm** that only reads the list elements through a single abstract comparison operation (often a "less than or equal to" operator or a three-way comparison) that determines which of two elements should occur first in the final sorted list. <br/>

<div class="lemma">

any comparison-sort based algorithm has a [time complexity]({{< relref "20221130014441-time_complexity.md" >}}) that is bound by \\(\Omega(n\log n)\\) <br/>

</div>

<div class="my_example">

a vector `A` of size `n` is **defined** to be a "hill" iff for every \\(i \le i < j \le m\\) we know \\(A[i] \le A[j]\\) and for every \\(m \le i < j \le n\\) we know \\(A[i] \geq A[j]\\) where \\(m\\) is a constant and \\(i,j\\) are variable indicies <br/>
prove that any comparison-based algorithm that turns a vector into a hill has to perform \\(\Omega(n\log n)\\) operations <br/>

<div class="answer">

we assume in contradiction that there exists a comparison-based algorithm that turns a vector into a hill whose time complexity is less than \\(\Omega(n\log n)\\) <br/>
consider the following function: <br/>

{{< figure src="/ox-hugo/30t764s.svg" >}} <br/>

each line from 3 to 6 runs in \\(\Theta(n)\\) time, except the first which we know by the assumption runs in less than \\(\Theta(n\log n)\\), so the whole function runs in less than \\(\Theta(n\log n)\\) time <br/>
this is a comparison-based function that sorts a given array in less than \\(\Theta(n\log n)\\) time, which contradicts with our theorem that no sorting function can have a lower time complexity than \\(\Theta(n\log n)\\) <br/>
we arrived at a contradiction and so it has to be true that this function is bound from below by \\(\Theta(n\log n)\\), i.e. its time complexity is \\(\Omega(n\log n)\\) <br/>

</div>

</div>

</div>


## <span class="section-num">2</span> selection sort {#selection-sort}

**selection sort** maintains two subarrays in a given array, one subarray that is sorted and the other unsorted, it sorts a given array by repeatedly finding the minimum element (considering ascending order) from the unsorted part and putting it at the beginning <br/>
in every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray. <br/>
[time complexity]({{< relref "20221130014441-time_complexity.md" >}}) is \\(\Theta(n^2)\\) <br/>

{{< figure src="/ox-hugo/8aX7xpu.svg" >}} <br/>

<a id="code-snippet--SelectionSort"></a>
```C++
template <typename T>
void selection_sort(T arr[], int len) {
  for (int i = 0; i < len; ++i) {
    // find index of minimum in unsorted subarray
    int min_idx = i;
    for (int j = i+1; j < len; ++j) {
      if (arr[j] < arr[min_idx]) {
        min_idx = j;
      }
    }

    // add minimum to the sorted subarray
    T tmp = arr[i];
    arr[i] = arr[min_idx];
    arr[min_idx] = tmp;
  }
}
```

example usage: <br/>

```C++
#include <iostream>

int main() {
  int arr[] = {8, 1, 2, 10, 50, 18};
  selection_sort(arr, std::size(arr));
  for (int i = 0; i < std::size(arr); ++i) {
    std::cout << arr[i] << std::endl;
  }
}
```

| 1  |
|----|
| 2  |
| 8  |
| 10 |
| 18 |
| 50 |


## <span class="section-num">3</span> insertion sort {#insertion-sort}

1.  iterate from arr[1] to arr[n] <br/>
2.  compare the current element to its predecessor <br/>
3.  if the current element is smaller than its predecessor, drag it backwards until its bigger than its predecessor <br/>

[time complexity]({{< relref "20221130014441-time_complexity.md" >}}) is \\(O(n^2)\\) <br/>

<a id="code-snippet--InsertionSort"></a>
```C++
template <typename T>
void insertion_sort(T arr[], int len) {
  for (int i = 1; i < len; ++i) {
    int idx = i;
    while (idx > 0 && arr[idx] < arr[idx-1]) {
      T tmp = arr[idx];
      arr[idx] = arr[idx-1];
      arr[idx-1] = tmp;
      idx--;
    }
  }
}
```


## <span class="section-num">4</span> AVL sort {#avl-sort}

AVL sort consists of inserting the given array into an [AVL tree]({{< relref "data_structures.md#avl-tree" >}}) element by element and then converting the tree into an array using [inorder traversal]({{< relref "data_structures.md#inorder-traversal" >}}) <br/>

<div class="lemma">

the [time complexity]({{< relref "20221130014441-time_complexity.md" >}}) of this [algorithm]({{< relref "20220706211958-algorithm.md" >}}) is \\(\Theta(n\log n)\\) <br/>

</div>


## <span class="section-num">5</span> heap sort {#heap-sort}

**heap sort** consists of [transforming the given array into a heap array]({{< relref "data_structures.md#construction-of-binary-heap-from-array" >}}) `A`, initiating `heap-size` to `size(A)` then applying the following steps recursively: <br/>

1.  replace the root of the heap `A[0]` with `A[heap-size - 1]` <br/>
2.  [bubble down]({{< relref "data_structures.md#bubble-down" >}}) the newly replaced root (`A[0]`) <br/>
3.  decrement `heap-size`, return to step 1 if `heap-size > 1` <br/>

<div class="lemma">

the [time complexity]({{< relref "20221130014441-time_complexity.md" >}}) of this [algorithm]({{< relref "20220706211958-algorithm.md" >}}) is \\(\Theta(n\log n)\\) <br/>

</div>

<div class="note">

on the third step when decrementing `heap-size` we arent deleting the last element, we are simply decreasing the size of the part of the list that we're operating on because the part at the end contains elements that are sorted <br/>

</div>


## <span class="section-num">6</span> QuickSort {#quicksort}

**QuickSort** is a [Divide-and-conquer algorithm]({{< relref "20220706211939-divide_and_conquer_algorithm.md" >}}), it picks an element as **pivot** and **partitions** the given array around the pivot, there are different versions of quicksort that pick pivots in different ways: <br/>

1.  first element as pivot (implemented here) <br/>
2.  last element as pivot <br/>
3.  a random element as pivot <br/>
4.  median as pivot <br/>

the first subarray we use as a "partition" is the array itself, where given a pivot, put the pivot at its correct position in the sorted array by putting all the smaller elements before it, and all the greater elements after it. then divide the partition in 2 partitions, where the first partition is where all the smaller elements were put, and the second partition is where all the greater elements were put, and apply the same process for these partitions recursively until we reach partitions that contain 1 element only <br/>
this algorithm runs in \\(O(n\log n)\\) time <br/>

![](/ox-hugo/quicksort.png) <br/>
image taken from <https://workat.tech/problem-solving/tutorial/sorting-algorithms-quick-sort-merge-sort-dsa-tutorials-6j3h98lk6j2w> <br/>

<a id="code-snippet--QuickSort"></a>
```C++
template <typename T>
void swap(T arr[], int i, int j) {
  T tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

template <typename T>
int partition(T arr[], int low, int high) {
  int pivot = low++;
  while (low <= high) {
    if (arr[low] <= arr[pivot]) low++;
    else if (arr[high] >= arr[pivot]) high--;
    else swap(arr, low, high);
  }
  swap(arr, high, pivot);
  return high;
}

template <typename T>
void quick_sort(T arr[], int low, int high) {
  if (low <= high) {
    int pivot = partition(arr, low, high);
    quick_sort(arr, low, pivot-1);
    quick_sort(arr, pivot+1, high);
  }
}
```


## <span class="section-num">7</span> merge sort {#merge-sort}

yet another [divide-and-conquer algorithm]({{< relref "20220706211939-divide_and_conquer_algorithm.md" >}}) <br/>
given an array, this [algorithm]({{< relref "20220706211958-algorithm.md" >}}) keeps splitting it until it reaches a subarray that cant be divided which happens when a subarray contains only 1 or 0 elements, each of these subarrays are sorted individually and then combined, recursively, to eventually make a larger sorted array <br/>
this algorithm runs in \\(\Theta(n\log n)\\) time <br/>

![](/ox-hugo/merge_sort.webp) <br/>
image taken from <https://www.programiz.com/dsa/merge-sort>, will keep this here until i make my own <br/>

<a id="code-snippet--MergeSort"></a>
```C++
#include <iostream>
template <typename T>
void merge(T arr[], int l, int m, int r) {
  int n1 = m - l + 1;
  int n2 = r - m;
  T L[n1];
  T R[n2];

  for (int i = 0; i < n1; ++i)
    L[i] = arr[l + i];
  for (int j = 0; j < n2; ++j)
    R[j] = arr[m + 1 + j];

  int i = 0, j = 0;
  int k = l;
  while (i < n1 && j < n2) {
    if (L[i] <= R[j])
      arr[k++] = L[i++];
    else
      arr[k++] = R[j++];
  }

  while (i < n1)
    arr[k++] = L[i++];
  while (j < n2)
    arr[k++] = R[j++];
}

template <typename T>
void sort(T arr[], int l, int r) {
  if (l < r) {
    int m = l+(r-l)/2;
    sort(arr, l, m);
    sort(arr, m + 1, r);
    merge(arr, l, m, r);
  }
}
```


### <span class="section-num">7.1</span> merge {#merge}

consider the `merge` algorithm that merges two partitions, i.e. takes in two sorted arrays A,B, and returns a new sorted array C that contains all elements from A and B <br/>

{{< figure src="/ox-hugo/ONsc6RS.svg" >}} <br/>


## <span class="section-num">8</span> bubble sort {#bubble-sort}

this [algorithm]({{< relref "20220706211958-algorithm.md" >}}) repeatedly steps through the input list element by element, comparing the current element with the one after it, swapping their values if needed. these passes through the list are repeated until no swaps had to be performed during a pass, meaning that the list has become fully sorted. the algorithm, which is a comparison sort, is named for the way the larger elements "bubble" up to the top of the list. <br/>

{{< figure src="/ox-hugo/Raz84EU.svg" >}} <br/>

