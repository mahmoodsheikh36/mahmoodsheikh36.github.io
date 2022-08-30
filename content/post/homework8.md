+++
title = "homework 8"
author = ["mahmood"]
description = "[[id:b57f2f90-c31c-4f99-af6f-c79e21b56f97][data structures]] on trees"
date = 2022-06-17T19:28:00+03:00
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

all the code ive written and used can be found on my [blog](https://blog.mahmoodsheikh.com/post/data_structures/) <br/>

</div>

<div class="question">

given the sequence \\(3,2,7,9,5,4,3.5,4.5,3.2,4.7,1,10,11,10.5,2.5,3.7,12\\) <br/>

<div class="subquestion">

insert the sequence into a [binary search tree]({{< relref "data_structures.md#binary-search-tree" >}}) step by step <br/>

<div class="answer">

```C++
#include <iostream>



int main() {
  const float seq[] = {3,2,7,9,5,4,3.5,4.5,3.2,4.7,1,10,11,10.5,2.5,3.7,12};
  BinarySearchTree<float> t;
  for (int i = 0; i < 17; ++i) {
    std::cout << "inserting " << seq[i] << std::endl;
    t.insert((int)(seq[i]*10), seq[i]);
    print_latex_forest(t.get_root(), true);
  }
  std::cout << "height of the tree: " << t.height() << std::endl;
}
```

inserting 3 <br/>

{{< figure src="/ox-hugo/kPftYhx.png" >}} <br/>

inserting 2 <br/>

{{< figure src="/ox-hugo/tVy9wZy.png" >}} <br/>

inserting 7 <br/>

{{< figure src="/ox-hugo/pQNu5ZN.png" >}} <br/>

inserting 9 <br/>

{{< figure src="/ox-hugo/v1PLHCn.png" >}} <br/>

inserting 5 <br/>

{{< figure src="/ox-hugo/2VfOz0i.png" >}} <br/>

inserting 4 <br/>

{{< figure src="/ox-hugo/qXJVsOw.png" >}} <br/>

inserting 3.5 <br/>

{{< figure src="/ox-hugo/fMZQw47.png" >}} <br/>

inserting 4.5 <br/>

{{< figure src="/ox-hugo/BpqAJft.png" >}} <br/>

inserting 3.2 <br/>

{{< figure src="/ox-hugo/jyVx29E.png" >}} <br/>

inserting 4.7 <br/>

{{< figure src="/ox-hugo/qpgakls.png" >}} <br/>

inserting 1 <br/>

{{< figure src="/ox-hugo/z9f9dlA.png" >}} <br/>

inserting 10 <br/>

{{< figure src="/ox-hugo/RYB5Dbz.png" >}} <br/>

inserting 11 <br/>

{{< figure src="/ox-hugo/WQsHI7a.png" >}} <br/>

inserting 10.5 <br/>

{{< figure src="/ox-hugo/pBvDN1R.png" >}} <br/>

inserting 2.5 <br/>

{{< figure src="/ox-hugo/lmrpssr.png" >}} <br/>

inserting 3.7 <br/>

{{< figure src="/ox-hugo/o02eOFx.png" >}} <br/>

inserting 12 <br/>

{{< figure src="/ox-hugo/OPazzvO.png" >}} <br/>

height of the tree: 6 <br/>

</div>

</div>

<div class="subquestion">

insert the sequence into an [AVL tree]({{< relref "data_structures.md#avl-tree" >}}), show the steps <br/>

<div class="answer">

```C++
#include <iostream>



int main() {
  const float seq[] = {3,2,7,9,5,4,3.5,4.5,3.2,4.7,1,10,11,10.5,2.5,3.7,12};
  AVLTree<float> t;
  for (int i = 0; i < 17; ++i) {
    std::cout << "inserting " << seq[i] << std::endl;
    t.insert((int)(seq[i]*10), seq[i]);
    print_latex_forest(t.get_root(), true);
  }
  std::cout << "height of the tree: " << t.height() << std::endl;
}
```

inserting 3 <br/>

{{< figure src="/ox-hugo/eHkSf3i.png" >}} <br/>

inserting 2 <br/>

{{< figure src="/ox-hugo/HzZORuO.png" >}} <br/>

inserting 7 <br/>

{{< figure src="/ox-hugo/g8IoJyr.png" >}} <br/>

inserting 9 <br/>

{{< figure src="/ox-hugo/kBPfNdI.png" >}} <br/>

inserting 5 <br/>

{{< figure src="/ox-hugo/2fx0LHr.png" >}} <br/>

inserting 4 <br/>
right left rotation of 3 <br/>

{{< figure src="/ox-hugo/swMVGVn.png" >}} <br/>

inserting 3.5 <br/>

{{< figure src="/ox-hugo/z5JGQDd.png" >}} <br/>

inserting 4.5 <br/>

{{< figure src="/ox-hugo/reZwe7H.png" >}} <br/>

inserting 3.2 <br/>
right left rotation of 3 <br/>

{{< figure src="/ox-hugo/jo9O6Yz.png" >}} <br/>

inserting 4.7 <br/>
right right rotation of 4 <br/>

{{< figure src="/ox-hugo/Jp8X3IG.png" >}} <br/>

inserting 1 <br/>
left left rotation of 5 <br/>

{{< figure src="/ox-hugo/xddl1Mx.png" >}} <br/>

inserting 10 <br/>
right right rotation of 7 <br/>

{{< figure src="/ox-hugo/OuK7WW8.png" >}} <br/>

inserting 11 <br/>

{{< figure src="/ox-hugo/Up2coSH.png" >}} <br/>

inserting 10.5 <br/>
right left rotation of 10 <br/>

{{< figure src="/ox-hugo/L9YWGOW.png" >}} <br/>

inserting 2.5 <br/>

{{< figure src="/ox-hugo/ZET3u5d.png" >}} <br/>

inserting 3.7 <br/>

{{< figure src="/ox-hugo/f4RXWe2.png" >}} <br/>

inserting 12 <br/>
right right rotation of 9 <br/>

{{< figure src="/ox-hugo/DXGAJ6t.png" >}} <br/>

height of the tree: 5 <br/>

</div>

</div>

<div class="subquestion">

insert the sequence into a [2-3 tree]({{< relref "data_structures.md#2-3-tree" >}}), show the steps <br/>

<div class="answer">

<div class="note">

currently, my implementation of 2-3 trees doesnt allow floats, so i will multiply the numbers by 10 and insert them, we should get the same results <br/>

</div>

```C++
#include <iostream>



int main() {
  TwoThreeTree<float> t;
  const float seq[] = {3,2,7,9,5,4,3.5,4.5,3.2,4.7,1,10,11,10.5,2.5,3.7,12};
  for (int i = 0; i < 17; ++i) {
    std::cout << "inserting " << (int)(seq[i]*10) << std::endl; 
    t.add_key_value((int)(seq[i]*10), seq[i]);
    print_latex_forest_twothree_tree(t.get_root());
  }
  std::cout << "height of the tree: " << t.height() << std::endl;
}
```

inserting 30 <br/>

{{< figure src="/ox-hugo/S0R9r4U.png" >}} <br/>

inserting 20 <br/>
adding key 20 to 30 \\(\varnothing\\) \\(\varnothing\\) <br/>
added 20 to 30 \\(\varnothing\\) \\(\varnothing\\) and got 20 30 \\(\varnothing\\) <br/>

{{< figure src="/ox-hugo/bHUy1qK.png" >}} <br/>

inserting 70 <br/>
adding key 70 to 20 30 \\(\varnothing\\) <br/>
balance 20 30 70 <br/>
root: 20 30 70 <br/>
created new root 30 \\(\varnothing\\) \\(\varnothing\\) to replace 20 30 70, left child: 20 \\(\varnothing\\) \\(\varnothing\\), right child: 70 \\(\varnothing\\) \\(\varnothing\\) <br/>

{{< figure src="/ox-hugo/Mczb3G7.png" >}} <br/>

inserting 90 <br/>
adding key 90 to 70 \\(\varnothing\\) \\(\varnothing\\) <br/>
added 90 to 70 \\(\varnothing\\) \\(\varnothing\\) and got 70 90 \\(\varnothing\\) <br/>

{{< figure src="/ox-hugo/7dcXhWg.png" >}} <br/>

inserting 50 <br/>
adding key 50 to 70 90 \\(\varnothing\\) <br/>
balance 50 70 90 <br/>
root: 30 \\(\varnothing\\) \\(\varnothing\\) <br/>
adding 70 to 30 \\(\varnothing\\) \\(\varnothing\\) to get 30 70 \\(\varnothing\\) <br/>
split 50 \\(\varnothing\\) 90 <br/>
inserting right 90 \\(\varnothing\\) \\(\varnothing\\) as a 2th child of 30 70 \\(\varnothing\\) <br/>
inserting left 50 \\(\varnothing\\) \\(\varnothing\\) as a 1th child of 30 70 \\(\varnothing\\) <br/>
balance 30 70 \\(\varnothing\\) recursively <br/>
root: 30 70 \\(\varnothing\\) <br/>
30 70 \\(\varnothing\\) is good. <br/>

{{< figure src="/ox-hugo/u29946r.png" >}} <br/>

inserting 40 <br/>
adding key 40 to 50 \\(\varnothing\\) \\(\varnothing\\) <br/>
added 40 to 50 \\(\varnothing\\) \\(\varnothing\\) and got 40 50 \\(\varnothing\\) <br/>

{{< figure src="/ox-hugo/RQaxd2q.png" >}} <br/>

inserting 35 <br/>
adding key 35 to 40 50 \\(\varnothing\\) <br/>
balance 35 40 50 <br/>
root: 30 70 \\(\varnothing\\) <br/>
adding 40 to 30 70 \\(\varnothing\\) to get 30 40 70 <br/>
split 35 \\(\varnothing\\) 50 <br/>
inserting right 50 \\(\varnothing\\) \\(\varnothing\\) as a 2th child of 30 40 70 <br/>
inserting left 35 \\(\varnothing\\) \\(\varnothing\\) as a 1th child of 30 40 70 <br/>
balance 30 40 70 recursively <br/>
root: 30 40 70 <br/>
created new root 40 \\(\varnothing\\) \\(\varnothing\\) to replace 30 40 70, left child: 30 \\(\varnothing\\) \\(\varnothing\\), right child: 70 \\(\varnothing\\) \\(\varnothing\\) <br/>

{{< figure src="/ox-hugo/VpO9Xwp.png" >}} <br/>

inserting 45 <br/>
adding key 45 to 50 \\(\varnothing\\) \\(\varnothing\\) <br/>
added 45 to 50 \\(\varnothing\\) \\(\varnothing\\) and got 45 50 \\(\varnothing\\) <br/>

{{< figure src="/ox-hugo/Hqe5HfO.png" >}} <br/>

inserting 32 <br/>
adding key 32 to 35 \\(\varnothing\\) \\(\varnothing\\) <br/>
added 32 to 35 \\(\varnothing\\) \\(\varnothing\\) and got 32 35 \\(\varnothing\\) <br/>

{{< figure src="/ox-hugo/zqrQSyj.png" >}} <br/>

inserting 47 <br/>
adding key 47 to 45 50 \\(\varnothing\\) <br/>
balance 45 47 50 <br/>
root: 40 \\(\varnothing\\) \\(\varnothing\\) <br/>
adding 47 to 70 \\(\varnothing\\) \\(\varnothing\\) to get 47 70 \\(\varnothing\\) <br/>
split 45 \\(\varnothing\\) 50 <br/>
inserting right 50 \\(\varnothing\\) \\(\varnothing\\) as a 1th child of 47 70 \\(\varnothing\\) <br/>
inserting left 45 \\(\varnothing\\) \\(\varnothing\\) as a 0th child of 47 70 \\(\varnothing\\) <br/>
balance 47 70 \\(\varnothing\\) recursively <br/>
root: 40 \\(\varnothing\\) \\(\varnothing\\) <br/>
47 70 \\(\varnothing\\) is good. <br/>

{{< figure src="/ox-hugo/C2ZrfBJ.png" >}} <br/>

inserting 10 <br/>
adding key 10 to 20 \\(\varnothing\\) \\(\varnothing\\) <br/>
added 10 to 20 \\(\varnothing\\) \\(\varnothing\\) and got 10 20 \\(\varnothing\\) <br/>

{{< figure src="/ox-hugo/G56s38U.png" >}} <br/>

inserting 100 <br/>
adding key 100 to 90 \\(\varnothing\\) \\(\varnothing\\) <br/>
added 100 to 90 \\(\varnothing\\) \\(\varnothing\\) and got 90 100 \\(\varnothing\\) <br/>

{{< figure src="/ox-hugo/7myg6kg.png" >}} <br/>

inserting 110 <br/>
adding key 110 to 90 100 \\(\varnothing\\) <br/>
balance 90 100 110 <br/>
root: 40 \\(\varnothing\\) \\(\varnothing\\) <br/>
adding 100 to 47 70 \\(\varnothing\\) to get 47 70 100 <br/>
split 90 \\(\varnothing\\) 110 <br/>
inserting right 110 \\(\varnothing\\) \\(\varnothing\\) as a 3th child of 47 70 100 <br/>
inserting left 90 \\(\varnothing\\) \\(\varnothing\\) as a 2th child of 47 70 100 <br/>
balance 47 70 100 recursively <br/>
root: 40 \\(\varnothing\\) \\(\varnothing\\) <br/>
adding 70 to 40 \\(\varnothing\\) \\(\varnothing\\) to get 40 70 \\(\varnothing\\) <br/>
split 47 \\(\varnothing\\) 100 <br/>
inserting right 100 \\(\varnothing\\) \\(\varnothing\\) as a 2th child of 40 70 \\(\varnothing\\) <br/>
inserting left 47 \\(\varnothing\\) \\(\varnothing\\) as a 1th child of 40 70 \\(\varnothing\\) <br/>
balance 40 70 \\(\varnothing\\) recursively <br/>
root: 40 70 \\(\varnothing\\) <br/>
40 70 \\(\varnothing\\) is good. <br/>

{{< figure src="/ox-hugo/yl5IOFW.png" >}} <br/>

inserting 105 <br/>
adding key 105 to 110 \\(\varnothing\\) \\(\varnothing\\) <br/>
added 105 to 110 \\(\varnothing\\) \\(\varnothing\\) and got 105 110 \\(\varnothing\\) <br/>

{{< figure src="/ox-hugo/tnU0nXJ.png" >}} <br/>

inserting 25 <br/>
adding key 25 to 10 20 \\(\varnothing\\) <br/>
balance 10 20 25 <br/>
root: 40 70 \\(\varnothing\\) <br/>
adding 20 to 30 \\(\varnothing\\) \\(\varnothing\\) to get 20 30 \\(\varnothing\\) <br/>
split 10 \\(\varnothing\\) 25 <br/>
inserting right 25 \\(\varnothing\\) \\(\varnothing\\) as a 1th child of 20 30 \\(\varnothing\\) <br/>
inserting left 10 \\(\varnothing\\) \\(\varnothing\\) as a 0th child of 20 30 \\(\varnothing\\) <br/>
balance 20 30 \\(\varnothing\\) recursively <br/>
root: 40 70 \\(\varnothing\\) <br/>
20 30 \\(\varnothing\\) is good. <br/>

{{< figure src="/ox-hugo/zBc6LZW.png" >}} <br/>

inserting 37 <br/>
adding key 37 to 32 35 \\(\varnothing\\) <br/>
balance 32 35 37 <br/>
root: 40 70 \\(\varnothing\\) <br/>
adding 35 to 20 30 \\(\varnothing\\) to get 20 30 35 <br/>
split 32 \\(\varnothing\\) 37 <br/>
inserting right 37 \\(\varnothing\\) \\(\varnothing\\) as a 3th child of 20 30 35 <br/>
inserting left 32 \\(\varnothing\\) \\(\varnothing\\) as a 2th child of 20 30 35 <br/>
balance 20 30 35 recursively <br/>
root: 40 70 \\(\varnothing\\) <br/>
adding 30 to 40 70 \\(\varnothing\\) to get 30 40 70 <br/>
split 20 \\(\varnothing\\) 35 <br/>
inserting right 35 \\(\varnothing\\) \\(\varnothing\\) as a 1th child of 30 40 70 <br/>
inserting left 20 \\(\varnothing\\) \\(\varnothing\\) as a 0th child of 30 40 70 <br/>
balance 30 40 70 recursively <br/>
root: 30 40 70 <br/>
created new root 40 \\(\varnothing\\) \\(\varnothing\\) to replace 30 40 70, left child: 30 \\(\varnothing\\) \\(\varnothing\\), right child: 70 \\(\varnothing\\) \\(\varnothing\\) <br/>

{{< figure src="/ox-hugo/Xx32Jef.png" >}} <br/>

inserting 120 <br/>
adding key 120 to 105 110 \\(\varnothing\\) <br/>
balance 105 110 120 <br/>
root: 40 \\(\varnothing\\) \\(\varnothing\\) <br/>
adding 110 to 100 \\(\varnothing\\) \\(\varnothing\\) to get 100 110 \\(\varnothing\\) <br/>
split 105 \\(\varnothing\\) 120 <br/>
inserting right 120 \\(\varnothing\\) \\(\varnothing\\) as a 2th child of 100 110 \\(\varnothing\\) <br/>
inserting left 105 \\(\varnothing\\) \\(\varnothing\\) as a 1th child of 100 110 \\(\varnothing\\) <br/>
balance 100 110 \\(\varnothing\\) recursively <br/>
root: 40 \\(\varnothing\\) \\(\varnothing\\) <br/>
100 110 \\(\varnothing\\) is good. <br/>

{{< figure src="/ox-hugo/OcWGtM0.png" >}} <br/>

height of the tree: 4 <br/>

</div>

</div>

</div>

<div class="question">

write a function to find the closest key to a given key in an [AVL tree]({{< relref "data_structures.md#avl-tree" >}}) <br/>

<div class="answer">

```C++
#include <iostream>
#include <cstdlib>
#include <algorithm>
#include <climits>



int find_closest(BinaryTreeNode<int>* node, int key) {
  if (node->is_leaf()) {
    return node->get_key();
  }
  int diff = node->get_key() == key ? INT_MAX : abs(node->get_key() - key);
  int left_key = node->has_left() ? find_closest(node->get_left(), key) : -1;
  int right_key = node->has_right() ? find_closest(node->get_right(), key) : -1;
  int left_diff = node->has_left() && left_key != key ? abs(left_key - key) : INT_MAX;
  int right_diff = node->has_right() && right_key != key ? abs(right_key - key) : INT_MAX;
  int arr[] = {diff, left_diff, right_diff};
  int min_diff = *std::min_element(arr, arr+3);
  if (min_diff == diff)
    return node->get_key();
  if (min_diff == right_diff)
    return right_key;
  return left_key;
}

int main() {
  AVLTree<int> t;
  t.insert(11)->insert(5)->insert(3)->insert(4)->insert(2)->insert(1)->insert(7)->insert(6)->insert(20)->insert(15)->insert(24)->insert(16)->insert(12)->insert(14)->insert(13)->insert(17)->insert(26);
  print_latex_forest(t.get_root());
  std::cout << "closest number to 14 is: " << find_closest(t.get_root(), 14) << std::endl;
  std::cout << "closest number to 7 is: " << find_closest(t.get_root(), 7) << std::endl;
  std::cout << "closest number to 26 is: " << find_closest(t.get_root(), 26) << std::endl;
  std::cout << "closest number to 50 is: " << find_closest(t.get_root(), 50) << std::endl;
}
```

{{< figure src="/ox-hugo/DIRQS1m.png" >}} <br/>

closest number to 14 is: 15 <br/>
closest number to 7 is: 6 <br/>
closest number to 26 is: 24 <br/>
closest number to 50 is: 26 <br/>

</div>

</div>

<div class="question">

write a function to find the closest key to a given key in a [2-3 tree]({{< relref "data_structures.md#2-3-tree" >}}) <br/>

<div class="answer">

<br/>

```C++
#include <iostream>
#include <cstdlib>
#include <algorithm>
#include <climits>



int find_closest(TwoThreeNode<int>* node, int key) {
  if (node->is_leaf()) {
    int left_key = node->has_left_key() ? node->get_left_key() : -1;
    int right_key = node->has_right_key() ? node->get_right_key() : -1;
    int right_diff = node->has_right_key() ? abs(key - right_key) : INT_MAX;
    int left_diff = node->has_left_key() ? abs(key - left_key) : INT_MAX;
    if (right_diff < left_diff && right_key != key)
      return right_key;
    return left_key;
  }
  int keys[] = {node->has_right_key() ? node->get_right_key() : -1,
                node->has_left_key() ? node->get_left_key() : -1,
                node->has_left_child() ? find_closest(node->get_left_child(), key) : -1,
                node->has_mid_child() ? find_closest(node->get_mid_child(), key) : -1,
                node->has_right_child() ? find_closest(node->get_right_child(), key) : -1};
  int diff[] = {node->has_right_key() ? abs(key - node->get_right_key()) : INT_MAX,
                node->has_left_key() ? abs(key - node->get_left_key()) : INT_MAX,
                node->has_left_child() ? abs(key - find_closest(node->get_left_child(), key)) : INT_MAX,
                node->has_mid_child() ? abs(key - find_closest(node->get_mid_child(), key)) : INT_MAX,
                node->has_right_child() ? abs(key - find_closest(node->get_right_child(), key)) : INT_MAX};
  int min_diff_idx = -1;
  for (int i = 0; i < 5; ++i)
    if (min_diff_idx == -1 || diff[i] < diff[min_diff_idx])
      if (keys[i] != key)
        min_diff_idx = i;
  return keys[min_diff_idx];
}

int main() {
  TwoThreeTree<int> t;
  const float seq[] = {3,2,7,9,5,4,3.5,4.5,3.2,4.7,1,10,11,10.5,2.5,3.7,12};
  for (int i = 0; i < 17; ++i) {
    t.add_key_value((int)(seq[i]*10), seq[i]);
  }
  print_latex_forest_twothree_tree(t.get_root());
  std::cout << "closest number to 100 is: " << find_closest(t.get_root(), 100) << std::endl;
  std::cout << "closest number to 200 is: " << find_closest(t.get_root(), 200) << std::endl;
  std::cout << "closest number to 10 is: " << find_closest(t.get_root(), 10) << std::endl;
}
```

{{< figure src="/ox-hugo/rJZ7Ccg.png" >}} <br/>

closest number to 100 is: 105 <br/>
closest number to 200 is: 120 <br/>
closest number to 10 is: 20 <br/>

</div>

</div>