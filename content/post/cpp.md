+++
title = "Cpp"
author = ["mahmood"]
description = "Cpp"
tags = ["language"]
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
  border-style: groove;
  border-width: 3px;
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
  }
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
<script type="text/javascript" id="MathJax-script" async
        src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js">
</script>


## <span class="section-num">1</span> cpp errors {#cpp-errors}


### <span class="section-num">1.1</span> Segmentation fault {#segmentation-fault}

the infamous **Segmentation fault** error is caused by accessing or attempting to operate on an illegal memory address <br/>


### <span class="section-num">1.2</span> stack variables {#stack-variables}

be careful when passing a pointer to a variable stored on the stack, e.g. the following program would fail because before the program exits the tree tries to delete its nodes but we would get a `double free or corruption (out)` error because its not safe to use `delete` on stack variables <br/>

```C++
enum Color { white, red };

int main() {
  BinarySearchTree<Color> t;
  BinaryTreeNode<Color> n1(20,white);
  BinaryTreeNode<Color> n2(18, white);
  BinaryTreeNode<Color> n3(26, red);
  t.insert(&n1)->insert(&n2)->insert(&n3);
}
```


### <span class="section-num">1.3</span> array of objects without calling constructor {#array-of-objects-without-calling-constructor}

consider the following code block: <br/>

```C++
T* allocate_memory(int num_of_objects) {
  T* arr = new T[num_of_objects];
  this->actual_size = num_of_objects;
  return arr;
}
```

if we were to use a class `T` that doesnt offer a default constructor we'd get errors because the compiler tries to initialize this memory by calling the default constructor of `T` <br/>
see: <br/>
<https://stackoverflow.com/questions/2382930/c-allocate-block-of-t-without-calling-constructor/2382972#2382972> <br/>
<https://stackoverflow.com/questions/4754763/object-array-initialization-without-default-constructor> <br/>
another solution is to use `std::allocator` <https://www.geeksforgeeks.org/stdallocator-in-cpp-with-examples/> <br/>