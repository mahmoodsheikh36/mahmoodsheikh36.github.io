+++
title = "data structures"
author = ["mahmood"]
description = "college course in data structures and algorithms"
date = 2022-12-19T17:11:00+02:00
tags = ["math", "code", "computer-science"]
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

<div class="note">

for most data structures i havent implemented deletion yet.. <br/>
also its good to note that most of the code isnt optimized to hell, but it doesnt really matter since its only for education purposes and you should probably be using the data structures provided by the programming language's standard library <br/>

</div>


## <span class="section-num">1</span> data structure {#data-structure}

<div class="definition">

a **data structure** is a collection of data and operations on said data, the data is represented as objects, and each object `x` has: <br/>

-   `key(x)`: a key that is used to identify the object (usually a number that uniquely identifies the object) <br/>
-   `info(x)` or `value(x)`: contains the data needed to store for the object (usually without the key) <br/>

<div class="my_example">

for example, if `x` is a person, `key(x)` could be the person's ID, `value(x)` would be information on said person, like age, height, weight etc.. <br/>

</div>

</div>


### <span class="section-num">1.1</span> KeyValue {#keyvalue}

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


### <span class="section-num">1.2</span> abstract data type {#abstract-data-type}

<div class="definition">

**abstract data types**, commonly abbreviated \*ADT\*s, are a way of classifying [data structure](#data-structure)s based on how they are used and the behaviors they provide. they do not specify how the data structure must be implemented or laid out in memory, but simply provide a minimal expected interface and set of behaviors. for example, a [stack](#stack) is an abstract data type that specifies a linear data structure with [LIFO](#lifo) behavior. stacks are commonly implemented using [array]({{< relref "20220728190531-array.md" >}})s or [linked list](#linked-list)s, but a needlessly complicated implementation using a [binary search tree](#binary-search-tree) is still a valid implementation. to be clear, it is incorrect to say that stacks are arrays or vice versa. an array can be used as a stack. likewise, a stack can be implemented using an array. <br/>

<div class="characteristic">

since abstract data types dont specify an implementation, this means its also incorrect to talk about the [time complexity]({{< relref "20221130014441-time_complexity.md" >}}) of a given abstract data type. an associative array may or may not have \\(O(1)\\) average search times. An associative array that is implemented by a [hash table](#hash-table) does have \\(O(1)\\) average search times. <br/>

</div>

<div class="characteristic">

to further complicate matters, since certain abstract data types are almost always implemented with a particular data structure, some programmers will use the two terms interchangeably: for example, priority queue and heap, or associative array and hash table. the context in which the term is being used can usually provide distinction. <br/>

</div>

</div>


### <span class="section-num">1.3</span> concrete data type {#concrete-data-type}

<div class="definition">

a **concrete data type** is the "concrete" and actual implementation of a given [abstract data type](#abstract-data-type) <br/>
i.e. it is the actual [data structure](#data-structure) we use in programming <br/>

</div>


### <span class="section-num">1.4</span> list {#list}

<div class="definition">

a **list** is an [abstract data type](#abstract-data-type) that is dynamically sized (often automatically resized) **list of objects** that stores as many objects as necessary, each type of list has its own method of dynamic storage <br/>

</div>


#### <span class="section-num">1.4.1</span> linked list {#linked-list}

<div class="definition">

a **linked list** is a [concrete data type](#concrete-data-type) that is an implementation of a [list](#list) <br/>

</div>


##### <span class="section-num">1.4.1.1</span> characteristics {#characteristics}

-   is the list **sorted**? the nodes are sorted by their `key` (usually in an ascending order) <br/>
-   is the list **doubly/singly linked**? in a doubly linked list each node points to the next and previous node whereas in a singly linked list a node only points to the next <br/>
-   does the list have a **tail**? a pointer `tail(x)` points to the last node in a linked list <br/>
-   is the list **circular**? in a circular linked list the last node points to the first whereas in a non-circular linked list it points to NULL (nothing) <br/>


##### <span class="section-num">1.4.1.2</span> functions {#functions}

-   `insert(x)`: inserts `x` <br/>
-   `search(k)`: returns the node whose key is `k` <br/>
-   `isEmpty()`: returns whether list is empty <br/>
-   `delete(x)`: given the node `x`, removes it from the list <br/>


##### <span class="section-num">1.4.1.3</span> implementation (c++) {#implementation--c-plus-plus}


###### <span class="section-num">1.4.1.3.1</span> Node {#node}

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


###### <span class="section-num">1.4.1.3.2</span> DoublyNode {#doublynode}

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


###### <span class="section-num">1.4.1.3.3</span> LinkedList {#linkedlist}

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


###### <span class="section-num">1.4.1.3.4</span> DoublyLinkedList {#doublylinkedlist}

```C++
to be implemented
```


###### <span class="section-num">1.4.1.3.5</span> LinkedListWithTail {#linkedlistwithtail}

```C++
to be implemented
```


###### <span class="section-num">1.4.1.3.6</span> CircularLinkedList {#circularlinkedlist}

```C++
to be implemented
```


#### <span class="section-num">1.4.2</span> array list {#array-list}

<div class="definition">

a **linked list** is a [concrete data type](#concrete-data-type) that is an implementation of a [list](#list) based on an [array]({{< relref "20220728190531-array.md" >}}) that is dynamically continuously reconstructed on insertions to hold as many objects as necessary <br/>

<div class="note">

some might suggest that a linked list should shrink automatically aswell on deletions, though that isnt a popular implementation <br/>

</div>

<div class="characteristic">

an array list contains a fixed-size array initialized to a constant length, when the array gets filled we create a new array whose size is \\(n \times c\\) where \\(n\\) is a constant (usually 2), and \\(c\\) is the previous size of the array, and we copy all the objects to the new array and then we have more space to store more objects <br/>

</div>

</div>


##### <span class="section-num">1.4.2.1</span> ArrayList {#arraylist}

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


### <span class="section-num">1.5</span> stack {#stack}

<div class="definition">

a **stack** is an [abstract data type](#abstract-data-type) <br/>

</div>


#### <span class="section-num">1.5.1</span> LIFO {#lifo}


### <span class="section-num">1.6</span> queue {#queue}

<div class="definition">

a **queue** is a linear [abstract data type](#abstract-data-type) in which the operations are performed based on [FIFO](#fifo) principle <br/>

</div>


#### <span class="section-num">1.6.1</span> FIFO {#fifo}

<div class="definition">

**FIFO** stands for **first in first out**, which means the first entity that enters would be the first one to exit <br/>

</div>


#### <span class="section-num">1.6.2</span> Circular Queue {#circular-queue}

<div class="definition">

a **Circular Queue** is a [Queue](#queue) in which the last element is connected back to the first element to make a circle. <br/>

</div>


#### <span class="section-num">1.6.3</span> priority queue {#priority-queue}

a **priority queue** is an [abstract data type]({{< relref "data_structures.md#abstract-data-type" >}}) similar to a regular [queue](#queue) or [stack](#stack) in which each element additionally has a priority associated with it. in a priority queue, an element with high priority is served before an element with low priority <br/>


### <span class="section-num">1.7</span> tree {#tree}

<div class="definition">

a **tree** is an [abstract data type](#abstract-data-type) which stores data in the shape of a downwards-growing tree and every entry is called a [node](#node) <br/>

</div>


#### <span class="section-num">1.7.1</span> node {#node}

trees store data as **nodes**, meaning each item in a tree is called a node <br/>
each node `x` has the following fields <br/>

-   `key(x)`: a key that's used to identify the node (like every data structure) <br/>
-   `info(x)`: contains the data we need to store (like every data structure) <br/>
-   `left(x)`: a pointer to the left child of `x` <br/>
-   `right(x)`: a pointer to the right child <br/>
-   `parent(x)` (optional): a pointer to the parent of `x` <br/>

every node in a [binary tree](#binary-tree) has from 0 to 2 children <br/>


##### <span class="section-num">1.7.1.1</span> height {#height}

<div class="definition">

the **height** of a [node](#node) `x` is defined as the [height of subtree](#height) of said [node](#node), denoted by \\(T\_x\\) <br/>

</div>


##### <span class="section-num">1.7.1.2</span> balance factor {#balance-factor}

the **balance factor** of a [node](#node) `x`, denoted by `balance(x)` or `BF(x)`, is defined as the height of the [subtree](#subtree) of the left child of `x`, denoted by \\(T\_{\text{left}(x)}\\) minus the height of the subtree of the right child of `x` denoted by \\(T\_{\text{right}(x)}\\), in short: <br/>
\\[
  BF(X) = \text{height}(T\_{\text{left}(x)}) - \text{height}(T\_{\text{right}(x)})
\\] <br/>
see for example this tree, the balance factor of each node is written above it <br/>

{{< figure src="/ox-hugo/gXx4ZR.svg" >}} <br/>


#### <span class="section-num">1.7.2</span> height {#height}

<div class="definition">

the **height** of a tree is the number of the [node](#node)s in the longest path downwards (including the root node) <br/>

</div>


#### <span class="section-num">1.7.3</span> level {#level}

<div class="definition">

the **level** of a row in the tree is its distance from the root whose level is 1 <br/>

</div>


#### <span class="section-num">1.7.4</span> root {#root}

<div class="definition">

the tree itself `T` (not for every node) contains a pointer `root(T)` that points to the root node of the tree (the first and topmost node) <br/>

</div>


#### <span class="section-num">1.7.5</span> leaf {#leaf}

<div class="definition">

a [node](#node) that doesnt have children is called a **leaf** <br/>

</div>


#### <span class="section-num">1.7.6</span> internal node {#internal-node}

<div class="definition">

a [node](#node) that has atleast one child is called an **internal node** <br/>

</div>


#### <span class="section-num">1.7.7</span> sibling {#sibling}

<div class="definition">

2 nodes are considered siblings if they share the same parent node <br/>

</div>


#### <span class="section-num">1.7.8</span> ancestor {#ancestor}

<div class="definition">

an **ancestor** of a given [node](#node) is a node that is at an upper level of it <br/>

</div>


#### <span class="section-num">1.7.9</span> descendant {#descendant}

<div class="definition">

a **descendant** of a given [node](#node) is a node that is at a lower level of the given node <br/>

</div>


#### <span class="section-num">1.7.10</span> subtree {#subtree}

for some [binary tree](#binary-tree) `T` and a node `x` of said tree we denote \\(T\_x\\) as the **subtree** whose [root](#root) is `x`, and the left **subtree** of `x` is the tree whose root is the left child of `x` denoted by \\(T\_{\text{left}(x)}\\) and the right subtree of `x` is the tree whose root is the right child of `x` denoted by \\(T\_{\text{right}(x)}\\) <br/>

{{< figure src="/ox-hugo/vD1CJC.svg" >}} <br/>

the height of this tree is 4 <br/>


#### <span class="section-num">1.7.11</span> complete tree {#complete-tree}

<div class="definition">

a **complete** [binary tree](#binary-tree) is a binary tree in which every [node](#node) has 2 or 0 children, and the leaves are all on at the same level <br/>

</div>


#### <span class="section-num">1.7.12</span> almost complete tree {#almost-complete-tree}

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


#### <span class="section-num">1.7.13</span> breadth-first search {#breadth-first-search}

**breadth-first search** or **BFS** for short, explores each level before moving onto the next one <br/>
extra memory, usually a [queue](#queue), is needed to keep track of the child nodes that were encountered but not yet explored. <br/>
![](/ox-hugo/Animated_BFS.gif) <br/>


#### <span class="section-num">1.7.14</span> depth-first search {#depth-first-search}

**depth-first search** or **DFS** for short, consists of exploring branches as far as possible before [backtracking](#backtracking) and exploring branches of other nodes <br/>
this is the algorithm we'll be using because its simpler <br/>
![](/ox-hugo/bfs_dfs.gif) <br/>


##### <span class="section-num">1.7.14.1</span> inorder traversal {#inorder-traversal}

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


##### <span class="section-num">1.7.14.2</span> preorder traversal {#preorder-traversal}

parent, left, right <br/>

```C
Algorithm preorder(tree)
  1. visit the parent, print it
  2. go to the left child, i.e., call preorder(left-child), print it
  3. go to the right child, i.e., call preorder(right-child), print it
```


##### <span class="section-num">1.7.14.3</span> postorder traversal {#postorder-traversal}

left, right, parent <br/>

```C
Algorithm postorder(tree)
  1. go to the left child, i.e., call postorder(left-child), print it
  2. go to the right child, i.e., call postorder(right-child), print it
  3. visit the parent, print it
```


#### <span class="section-num">1.7.15</span> binary tree {#binary-tree}

<div class="definition">

a **binary tree** is a [concrete data type](#concrete-data-type) that is an implementation of a [tree](#tree) <br/>

</div>


##### <span class="section-num">1.7.15.1</span> BinaryTreeNode {#binarytreenode}

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


##### <span class="section-num">1.7.15.2</span> BinaryTree {#binarytree}

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


##### <span class="section-num">1.7.15.3</span> algorithms {#algorithms}

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


#### <span class="section-num">1.7.16</span> binary search tree {#binary-search-tree}

a **binary search tree** is a [binary tree](#binary-tree) that has the following restrictions: <br/>

-   the keys of all the nodes in the left [subtree](#subtree) of any given [node](#node) `x` is smaller than the key of `x` <br/>
-   the keys of all the nodes in the right side of the tree are bigger or equal to the key of `x` <br/>

for example the following tree is a binary search tree: <br/>

{{< figure src="/ox-hugo/a0JkT1.svg" >}} <br/>


##### <span class="section-num">1.7.16.1</span> insertion {#insertion}

a new key is always inserted as a [leaf](#leaf). we start from the [root](#root), making our way downwards by comparing the new key to the key of the current node to decide which child to move to on each iteration, until we hit a leaf node, then we add the new node as its child <br/>


##### <span class="section-num">1.7.16.2</span> BinarySearchTree {#binarysearchtree}

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

{{< figure src="/ox-hugo/tmp_BT4xEYU.svg" >}} <br/>

{{< figure src="/ox-hugo/tmp_OwSAlY9.svg" >}} <br/>


#### <span class="section-num">1.7.17</span> AVL tree {#avl-tree}

an **AVL tree** is a [binary search tree](#binary-search-tree) in which every node `x` has a [balance factor](#balance-factor) of \\(0,1,-1\\), meaning: <br/>
\\[
  \left|\text{height}\left(T\_{\text{left}(x)}\right) - \text{height}\left(T\_{\text{right}(x)}\right)\right| \leq 1
\\] <br/>
every node `x` of this tree holds an extra field called `balance` which holds the [balance factor](#balance-factor) of said node <br/>
for example, the following tree is an AVL tree: <br/>

{{< figure src="/ox-hugo/CRLd0L.svg" >}} <br/>

if we were to remove the node with value 14 or with value 9 this wouldnt be an AVL tree <br/>

<div class="lemma">

let `T` be an AVL tree with `n` nodes and height \\(h\\), then \\(h = \Theta(\log n)\\) <br/>

</div>


##### <span class="section-num">1.7.17.1</span> minimal form {#minimal-form}

<div class="definition">

a minimal form of an [AVL tree](#avl-tree) with a given height \\(h\\) is one which contains the least possible number of nodes <br/>

<div class="lemma">

the minimal number of nodes for a tree of height \\(h\\) is given by the following  <br/>

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


##### <span class="section-num">1.7.17.2</span> problematic node {#problematic-node}

<div class="definition">

a **problematic node** is a [node](#node) whose [balance factor](#balance-factor) is \\(\pm2\\) <br/>

</div>


##### <span class="section-num">1.7.17.3</span> insertion {#insertion}

the process of inserting a node to an AVL tree starts with inserting it using the same insertion method we used for a [binary search tree](#binary-search-tree), after said insertion we start going up the tree starting at the new node we just inserted and updating the [balance factor](#balance-factor) for every node we encounter as we go <br/>
if we arrive at [problematic node](#problematic-node), we apply the proper [rotation](#rotation) to [rebalance](#rebalancing) the tree <br/>


##### <span class="section-num">1.7.17.4</span> rebalancing {#rebalancing}

during a modifying operation of a [binary tree](#binary-tree), a node might become [problematic](#problematic-node), to restore balance to the tree so that it remains an [AVL tree](#avl-tree) we use [rotation](#rotation)s <br/>


###### <span class="section-num">1.7.17.4.1</span> rotation {#rotation}

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
        
        ![](/ox-hugo/leftleftrotation.gif) <br/>
        image taken from <https://www.codesdope.com/course/data-structures-red-black-trees-insertion/> <br/>
        
        <div class="my_example">
        
        consider the following [AVL tree](#avl-tree): <br/>
        
        {{< figure src="/ox-hugo/OCEhdh.svg" >}} <br/>
        
        after inserting a new [node](#node) with the value 2 this is how the tree would look: <br/>
        
        {{< figure src="/ox-hugo/nMREes.svg" >}} <br/>
        
        the [node](#node) with the value 7 whose [balance factor](#balance-factor) is 2 is [problematic](#problematic-node) because its causing imbalance in the [tree](#avl-tree), so we apply the [rotation](#rotation) to its subtree to rebalance it <br/>
        
        {{< figure src="/ox-hugo/ZIzaCe.svg" >}} <br/>
        
        the [subtree](#subtree) after the [rotation](#rotation): <br/>
        
        {{< figure src="/ox-hugo/diNERQ.svg" >}} <br/>
        
        and so the original tree would become: <br/>
        
        {{< figure src="/ox-hugo/pBO906.svg" >}} <br/>
        
        </div>
    
    <!--list-separator-->
    
    2.  right right rotation
    
        this is very similar to [Left Left](#left-left-rotation), we first add the node and then if we have a [problematic node](#problematic-node) `x` and if we took 2 steps to the right, then we use this rotation method <br/>
        this method consists of rotating the [subtree](#subtree) \\(T\_x\\) such that `x` becomes a left child of its original right child `z`, and `z` takes the place of `x` and the previous left child of `z` becomes a right child of `x` at its new position <br/>
        
        ![](/ox-hugo/rightrightrotation.gif) <br/>
        image taken from <https://www.codesdope.com/course/data-structures-red-black-trees-insertion/> <br/>

<!--list-separator-->

2.  double rotation

    the difference between this and [simple rotation](#simple-rotation) is that this method consists of rotating twice as you might've already guessed from the title <br/>
    
    <!--list-separator-->
    
    1.  left right rotation
    
        this method consists of 2 steps, first is applying an [RR](#right-right-rotation) rotation over the left child of the [problematic node](#problematic-node), then applying an [LL](#left-left-rotation) rotation to the [problematic node](#problematic-node) <br/>
    
    <!--list-separator-->
    
    2.  right left rotation
    
        this method consists of 2 steps, first is applying an [LL](#left-left-rotation) rotation over the right child of the [problematic node](#problematic-node), then applying a [RR](#right-right-rotation) rotation to the [problematic node](#problematic-node) <br/>


##### <span class="section-num">1.7.17.5</span> AVLTree {#avltree}

<a id="code-snippet--AVLTree"></a>
```C++

template <typename T> class AVLTree : public BinarySearchTree<T> {
public:
  using BinarySearchTree<T>::insert;
  AVLTree() {}
  AVLTree(BinaryTreeNode<T>* node) : BinarySearchTree<T>(node) {}
  AVLTree<T>* insert(BinaryTreeNode<T>* node) override {
    BinarySearchTree<T>::insert(node);
    BinaryTreeNode<T>* retracing_node = node;
    while (retracing_node != nullptr) {
      if (retracing_node->is_problematic()) {
        BinaryTreeNode<T>* path_root = retracing_node->find_path(node);
        if (path_root->has_left() && path_root->get_left()->has_left()) { /* LL rotation */
          this->rotate_right(retracing_node);
        }
        if (path_root->has_right() && path_root->get_right()->has_right()) { /* RR rotation */
          this->rotate_left(retracing_node);
        }
        if (path_root->has_right() && path_root->get_right()->has_left()) { /* RL rotation */
          this->rotate_right(retracing_node->get_right()); /* LL rotation */
          this->rotate_left(retracing_node); /* RR rotation */
        }
        if (path_root->has_left() && path_root->get_left()->has_right()) { /* LR rotation */
          this->rotate_left(retracing_node->get_left()); /* RR rotation */
          this->rotate_right(retracing_node); /* LL rotation */
        }
          delete path_root;
          break;
        }
      retracing_node = retracing_node->get_parent();
    }
    return this;
  }
};
```

example: <br/>

```C++
#include <iostream>



int main() {
  AVLTree<int> t;
  t.insert(11)->insert(5)->insert(3)->insert(4)->insert(2)->insert(1)->insert(7)->insert(6)->insert(20)->insert(15)->insert(24)->insert(16)->insert(12)->insert(14)->insert(13)->insert(17)->insert(26);
  print_latex_forest(t.get_root());
}
```

{{< figure src="/ox-hugo/tmp_sN2uzxn.svg" >}} <br/>


#### <span class="section-num">1.7.18</span> 2-3 tree {#2-3-tree}

a **2???3 tree** is a [tree](#tree) [concrete data type](#concrete-data-type) where every [internal node](#internal-node) is either a [2-node](#2-node) or [3-node](#3-node) <br/>
an exceptional case is when the tree contains only one element in which case the only node in the tree (which is the [root](#root)) holds only one element <br/>

<div class="characteristic">

every [internal node](#internal-node) is a [2-node](#2-node) or a [3-node](#3-node)  <br/>

</div>

<div class="characteristic">

all [leaves](#leaf) are at the same level <br/>

</div>

<div class="characteristic">

keys are always ordered from left to right in ascending order <br/>

</div>


##### <span class="section-num">1.7.18.1</span> 2-node {#2-node}

<div class="definition">

we say that an [internal node](#internal-node) is a **2-node** if it holds one value and two children <br/>

</div>


##### <span class="section-num">1.7.18.2</span> 3-node {#3-node}

<div class="definition">

we say that an [internal node](#internal-node) is a **3-node** if it holds two values and three children <br/>

</div>


##### <span class="section-num">1.7.18.3</span> insertion {#insertion}

an important property to keep in mind is that insertion **always** occurs in one of the [leaves](#leaf) <br/>

![](/ox-hugo/2-3_insertion.jpg) <br/>
<&opengenus_twothree_tree> <br/>


##### <span class="section-num">1.7.18.4</span> TwoThreeNode {#twothreenode}

<a id="code-snippet--TwoThreeNode"></a>
```C++
const int SIZE = 3;

template <typename T> class TwoThreeNode {
private:
  TwoThreeNode<T>* parent;
  TwoThreeNode<T>* children[SIZE+1];
  int keys[SIZE];
  T values[SIZE];
public:
  void set_child(int idx, TwoThreeNode<T>* node) {
    this->children[idx] = node;
    if (node)
      node->parent = this;
  }
  TwoThreeNode<T>* get_child(int idx) {
    return this->children[idx];
  }
  void remove_child(TwoThreeNode<T>* node) {
    for (int i = 0; i < SIZE; ++i) {
      if (this->children[i] == node) {
        this->children[i]->parent = nullptr;
        this->children[i] = nullptr;
        return;
      }
    }
  }
  int add_child(TwoThreeNode<T>* node) {
    for (int i = 0; i < SIZE; ++i) {
      if (this->keys[i] > node->biggest_key() || this->keys[i] == 0) {
        this->set_child(i, node);
        return i;
      }
    }
    this->set_child(SIZE, node);
    return SIZE;
  }
  int add_key_value(int key, T value) {
    for (int i = 0; i < SIZE; ++i) {
      if (this->keys[i] == 0) {
        this->keys[i] = key;
        this->values[i] = value;
        return i;
      }
      if (this->keys[i] > key) {
        this->children[SIZE] = this->children[SIZE-1];
        for (int j = SIZE-1; j > i; --j) {
          this->keys[j] = this->keys[j-1];
          this->values[j] = this->values[j-1];
          this->children[j] = this->children[j-1];
        }
        this->keys[i] = key;
        this->values[i] = value;
        return i;
      }
    }
    return -1;
  }
  void set_key(int idx, int key) {
    this->keys[idx] = key;
  }
  int get_key(int idx) {
    return this->keys[idx];
  }
  bool has_key(int idx) {
    return this->keys[idx] != 0;
  }
  bool has_child(int idx) {
    return this->children[idx] != nullptr;
  }
  void set_value(int idx, T value) {
    this->values[idx] = value;
  }
  T get_value(int idx) {
    return this->values[idx];
  }
  void set_parent(TwoThreeNode<T>* node) {
    this->parent = node;
  }
  TwoThreeNode<T>* get_parent() {
    return this->parent;
  }
  bool has_parent() {
    return this->parent != nullptr;
  }
  bool is_leaf() {
    for (int i = 0; i < SIZE; ++i) {
      if (children[i] != nullptr)
        return false;
    }
    return true;
  }
  bool is_root() {
    return !this->has_parent();
  }
  TwoThreeNode<T>* find_node_to_place_key(int key) {
    if (this->is_leaf()) {
      for (int i = 0; i < SIZE; ++i) {
        if (this->keys[i] > key || this->keys[i] == 0) {
          return this;
        }
      }
      return nullptr;
    }
    for (int i = 0; i < SIZE; ++i) {
      if (this->keys[i] > key || this->keys[i] == 0) {
        return this->children[i]->find_node_to_place_key(key);
      }
    }
    return this->children[SIZE] == nullptr ? nullptr : this->children[SIZE]->find_node_to_place_key(key); 
  }
  TwoThreeNode<T>* find_node_with_biggest_key() {
    if (this->is_leaf())
      return this;
    TwoThreeNode<T>* biggest = nullptr;
    int biggest_key = 0;
    for (int i = 0; i < SIZE; ++i) {
      if (this->children[i] != nullptr) {
        TwoThreeNode<T>* tmp = this->children[i]->find_node_with_biggest_key();
        if (tmp == nullptr)
          continue;
        for (int j = 0; j < tmp->count_keys(); ++j) {
          if (tmp->keys[j] > biggest_key) {
            biggest = tmp;
            biggest_key = tmp->keys[j];
          }
        }
      }
    }
    return biggest;
  }
  int find_biggest_key() {
    if (this->is_leaf()) {
      return this->biggest_key();
    }
    int biggest = this->biggest_key();
    for (int i = 0; i < SIZE; ++i) {
      if (this->children[i] != nullptr) {
        int other = this->children[i]->find_biggest_key();
        if (other > biggest)
          biggest = other;
      }
    }
    return biggest;
  }
  int find_smallest_key() {
    if (this->is_leaf()) {
      return this->smallest_key();
    }
    int smallest = this->smallest_key();
    for (int i = 0; i < SIZE; ++i) {
      if (this->children[i] != nullptr) {
        int other = this->children[i]->find_smallest_key();
        if (other != 0 && other < smallest && other != -1)
          smallest = other;
      }
    }
    return smallest;
  }
  int biggest_key() {
    int biggest = 0;
    for (int i = 0; i < SIZE; ++i) {
      if (this->keys[i] > biggest)
        biggest = this->keys[i];
    }
    return biggest;
  }
  int smallest_key() {
    int smallest = -1;
    for (int i = 0; i < SIZE; ++i) {
      if ((this->keys[i] < smallest && this->keys[i] != 0) || smallest == -1)
        smallest = this->keys[i];
    }
    return smallest;
  }
  int count_keys() {
    int cnt = 0;
    for (int i = 0; i < SIZE; ++i) {
      if (this->keys[i] != 0) {
        ++cnt;
      }
    }
    return cnt;
  }
  int count_children() {
    int cnt = 0;
    for (int i = 0; i < SIZE; ++i) {
      if (this->children[i] != nullptr) {
        ++cnt;
      }
    }
    return cnt;
  }
  bool is_2_node() {
    return this->count_keys() == 1;
  }
  bool is_3_node() {
    return this->count_keys() == 2;
  }
  void print() {
    for (int i = 0; i < SIZE; ++i) {
      std::cout << this->keys[i] << " ";
    }
    std::cout << std::endl;
  }
  std::string to_string() {
    std::string str = "";
    for (int i = 0; i < SIZE; ++i) {
      std::string num_str = this->keys[i] == 0 ? "$\\varnothing$" : std::to_string(this->keys[i]);
      str += num_str + (i == SIZE - 1 ? "" : " ");
    }
    return str;
  }
  int height() {
    if (this->is_leaf())
      return 1;
    for (int i = 0; i < SIZE; ++i) {
      if (this->children[i] != nullptr) {
        return 1+this->children[i]->height();
      }
    }
    return 1;
  }
  int get_left_key() {
    return this->keys[0];
  }
  int get_right_key() {
    return this->keys[1];
  }
  bool has_left_key() {
    return this->keys[0] != 0;
  }
  bool has_right_key() {
    return this->keys[1] != 0;
  }
  TwoThreeNode<T>* get_left_child() {
    return this->children[0];
  }
  TwoThreeNode<T>* get_right_child() {
    return this->children[2];
  }
  TwoThreeNode<T>* get_mid_child() {
    return this->children[1];
  }
  bool has_left_child() {
    return this->children[0] != nullptr;
  }
  bool has_right_child() {
    return this->children[2] != nullptr;
  }
  bool has_mid_child() {
    return this->children[1] != nullptr;
  }
};
```


##### <span class="section-num">1.7.18.5</span> TwoThreeTree {#twothreetree}

<a id="code-snippet--TwoThreeTree"></a>
```C++


template <typename T> class TwoThreeTree {
private:
  TwoThreeNode<T>* root = nullptr;
public:
  TwoThreeNode<T>* get_root() {
    return this->root;
  }
  void add_key_value(int key, T value) {
    if (this->root == nullptr) {
      this->root = new TwoThreeNode<T>();
      this->root->set_key(0, key);
      this->root->set_value(0, value);
      return;
    }
    TwoThreeNode<T>* node = this->root->find_node_to_place_key(key);
    if (node == nullptr) {
      node = this->root->find_node_with_biggest_key();
    }
    std::cout << "adding key " << key << " to " << (node == nullptr ? "unknown" : node->to_string()) << std::endl;
    int key_count = node->count_keys();
    if (key_count < SIZE-1) {
      std::cout << "added " << key << " to " << node->to_string() << " and got ";
      node->add_key_value(key, value);
      std::cout << node->to_string() << std::endl;
      return;
    }
    if (key_count >= SIZE-1) {
      node->add_key_value(key, value);
      std::cout << "balance " << node->to_string() << std::endl;
      balance(node);
    }
  }
  /* helping function */
  void balance(TwoThreeNode<T>* node) {
    std::cout << "root: " << this->root->to_string() << std::endl;
    if (node->is_2_node() || node->is_3_node()) {
      std::cout << node->to_string() << " is good." << std::endl;
      return;
    }
    if (node->is_root()) {
      TwoThreeNode<T>* new_root = new TwoThreeNode<T>();
      new_root->add_key_value(node->get_key(1), node->get_value(1));
      TwoThreeNode<T>* new_left_node = new TwoThreeNode<T>();
      TwoThreeNode<T>* new_right_node = new TwoThreeNode<T>();
      new_left_node->set_key(0, node->get_key(0));
      new_right_node->set_key(0, node->get_key(2));
      new_left_node->set_child(0, node->get_child(0));
      new_left_node->set_child(1, node->get_child(1));
      new_right_node->set_child(0, node->get_child(2));
      new_right_node->set_child(1, node->get_child(3));
      new_root->set_child(0, new_left_node);
      new_root->set_child(1, new_right_node);
      std::cout << "created new root " << new_root->to_string() << " to replace " << this->root->to_string() << ", left child: " << new_left_node->to_string() << ", right child: " << new_right_node->to_string() << std::endl;
      this->root = new_root;
      return;
    }
    TwoThreeNode<T>* the_parent = node->get_parent();
    std::cout << "adding " << node->get_key(1) << " to " << the_parent->to_string() << " to get ";
    the_parent->add_key_value(node->get_key(1), node->get_value(1));
    std::cout << the_parent->to_string() << std::endl;
    node->set_key(1, 0);
    split(node);
    std::cout << "balance " << the_parent->to_string() << " recursively" << std::endl;
    balance(the_parent);
    delete node;
  }
  void split(TwoThreeNode<T>* node) {
    std::cout << "split " << node->to_string() << std::endl;
    TwoThreeNode<T>* the_parent = node->get_parent();
    TwoThreeNode<T>* new_left_node = new TwoThreeNode<T>();
    TwoThreeNode<T>* new_right_node = new TwoThreeNode<T>();
    new_left_node->set_key(0, node->get_key(0));
    new_right_node->set_key(0, node->get_key(2));
    new_left_node->set_child(0, node->get_child(0));
    new_left_node->set_child(1, node->get_child(1));
    new_right_node->set_child(0, node->get_child(2));
    new_right_node->set_child(1, node->get_child(3));
    the_parent->remove_child(node);
    std::cout << "inserting right " << new_right_node->to_string() << " as a " << the_parent->add_child(new_right_node) << "th child of " << the_parent->to_string() << std::endl;
    //the_parent->add_child(new_right_node);
    std::cout << "inserting left " << new_left_node->to_string() << " as a " << the_parent->add_child(new_left_node) << "th child of " << the_parent->to_string() << std::endl;
    //the_parent->add_child(new_left_node);
  }
  bool is_empty() {
    return this->root == nullptr;
  }
  int height() {
    return this->is_empty() ? 0 : this->root->height();
  }
};
```

example usage: <br/>

```C++
#include <iostream>



int main() {
  TwoThreeTree<float> t;
  const float seq[] = {3,2,7,9,5,4,3.5,4.5,3.2,4.7,1,10,11,10.5,2.5,3.7,12};
  for (int i = 0; i < 17; ++i) {
    t.add_key_value((int)(seq[i]*10), seq[i]);
  }
  print_latex_forest_twothree_tree(t.get_root());
}
```

adding key 20 to 30 \\(\varnothing\\) \\(\varnothing\\) <br/>
added 20 to 30 \\(\varnothing\\) \\(\varnothing\\) and got 20 30 \\(\varnothing\\) <br/>
adding key 70 to 20 30 \\(\varnothing\\) <br/>
balance 20 30 70 <br/>
root: 20 30 70 <br/>
created new root 30 \\(\varnothing\\) \\(\varnothing\\) to replace 20 30 70, left child: 20 \\(\varnothing\\) \\(\varnothing\\), right child: 70 \\(\varnothing\\) \\(\varnothing\\) <br/>
adding key 90 to 70 \\(\varnothing\\) \\(\varnothing\\) <br/>
added 90 to 70 \\(\varnothing\\) \\(\varnothing\\) and got 70 90 \\(\varnothing\\) <br/>
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
adding key 40 to 50 \\(\varnothing\\) \\(\varnothing\\) <br/>
added 40 to 50 \\(\varnothing\\) \\(\varnothing\\) and got 40 50 \\(\varnothing\\) <br/>
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
adding key 45 to 50 \\(\varnothing\\) \\(\varnothing\\) <br/>
added 45 to 50 \\(\varnothing\\) \\(\varnothing\\) and got 45 50 \\(\varnothing\\) <br/>
adding key 32 to 35 \\(\varnothing\\) \\(\varnothing\\) <br/>
added 32 to 35 \\(\varnothing\\) \\(\varnothing\\) and got 32 35 \\(\varnothing\\) <br/>
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
adding key 10 to 20 \\(\varnothing\\) \\(\varnothing\\) <br/>
added 10 to 20 \\(\varnothing\\) \\(\varnothing\\) and got 10 20 \\(\varnothing\\) <br/>
adding key 100 to 90 \\(\varnothing\\) \\(\varnothing\\) <br/>
added 100 to 90 \\(\varnothing\\) \\(\varnothing\\) and got 90 100 \\(\varnothing\\) <br/>
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
adding key 105 to 110 \\(\varnothing\\) \\(\varnothing\\) <br/>
added 105 to 110 \\(\varnothing\\) \\(\varnothing\\) and got 105 110 \\(\varnothing\\) <br/>
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

{{< figure src="/ox-hugo/tmp_HLa5Fi7.svg" >}} <br/>


#### <span class="section-num">1.7.19</span> algorithms {#algorithms}


##### <span class="section-num">1.7.19.1</span> backtracking {#backtracking}

**Backtracking** is an algorithm that incrementally builds candidates to the solutions, and abandons a candidate as soon as it determines that the candidate cannot possibly be completed to a valid solution, see <https://en.wikipedia.org/wiki/Backtracking> <br/>
after solving a few problems i saw a pattern that makes it much easier to solve recursion problems related to binary trees <br/>
when i want to solve a problem with recursion i ask myself 3 questions <br/>

1.  what is a node's job? <br/>
2.  what info does a node require to do its job? <br/>
3.  how do we give the node what it requires to do its job? (one of 2 methods) <br/>

the 2 methods of passing data around binary tree nodes are: <br/>

-   if a node needs to know some info about its [ancestor](#ancestor)s or nodes from other subtrees this info has to be passed through function arguments because once we reach a node in the tree we cant go back to previous nodes (its possible but would take `O(n)` time which is horrible) <br/>
-   if a node needs to know something about its [descendant](#descendant)s, this information has to be backpropagated by returning it to the parent node that called the recursive function on its child, because once we're back to a node we cant go back down (we could but again, it takes `O(n)` time), if we need to backpropagate multiple values we can use a simple structure to hold the values (in `C++` the simplest way is to use `struct`) <br/>

note that its **important** that we gather info as we go on every node we visit so that once we leave a specific node we'd have all the info we would need from it so that we wouldnt have to go back to visit it which usually results in `O(n)` time <br/>
words arent the best way to put it so hopefully ill provide a better visual explanation in the future <br/>


##### <span class="section-num">1.7.19.2</span> reverse inorder {#reverse-inorder}

given a [binary tree](#binary-tree), write a function to reverse its [inorder traversal](#inorder-traversal) output <br/>
this algorithm runs in `O(n)` time <br/>

<a id="code-snippet--reverse-inorder"></a>
```C++
template <typename T>
void reverse(BinaryTreeNode<T>* node) {
  if (node == nullptr)
    return;
  reverse(node->get_left());
  reverse(node->get_right());
  BinaryTreeNode<T>* l = node->get_left();
  node->set_left(node->get_right());
  node->set_right(l);
}
```

example usage: <br/>

```C++
#include <iostream>




int main() {
  BinarySearchTree<int> t;
  t.insert(11)->insert(5)->insert(3)->insert(4)->insert(2)->insert(1)->insert(7)->insert(6)->insert(20)->insert(15);
  t.print();
  reverse(t.get_root());
  t.print();
}
```

| 1  | 2  | 3  | 4 | 5 | 6 | 7 | 11 | 15 | 20 |
|----|----|----|---|---|---|---|----|----|----|
| 20 | 15 | 11 | 7 | 6 | 5 | 4 | 3  | 2  | 1  |


#### <span class="section-num">1.7.20</span> other practice questions {#other-practice-questions}

<div class="question">

an "equal" tree is a tree data structure in which every nodes height is equal to the number of its leaves <br/>
prove whether an equal tree is necessary balanced? <br/>

```C++
#include <iostream>



int main() {
  for (int x = 1; x < 5; ++x) {
    BinaryHeap<int> h;
    for (int i = 0; i < x; ++i) {
      h.insert(i);
    }
    BinaryTree<int>* bt = h.to_binary_tree();
    print_latex_forest(bt->get_root());
    delete bt;
  }
}
```

{{< figure src="/ox-hugo/tmp_KL5D1mf.svg" >}} <br/>

{{< figure src="/ox-hugo/tmp_Uq5IcJ5.svg" >}} <br/>

{{< figure src="/ox-hugo/tmp_FybxPrX.svg" >}} <br/>

{{< figure src="/ox-hugo/tmp_wSYos1D.svg" >}} <br/>

</div>

<div class="question">

given an array we need to check whether there exists an element who is atleast two times of another element <br/>

<div class="answer">

the first solution one might think of probably has a time complexity of \\(O(n^2)\\) <br/>
but a better solution would be to go through the array once and find the minimum and maximum elements and compare them to see if the max element is atleast twice of the minimum element <br/>

</div>

</div>


### <span class="section-num">1.8</span> heap {#heap}

<div class="definition">

a **Heap** is an [abstract data type](#abstract-data-type) <br/>

</div>


#### <span class="section-num">1.8.1</span> min heap {#min-heap}

<div class="definition">

a **min heap** is a [heap](#heap) in which each [node](#node) is less than or equal to both its children <br/>

</div>


#### <span class="section-num">1.8.2</span> max heap {#max-heap}

<div class="definition">

a **max heap** is a [heap](#heap) in which each node is bigger than or equal to both its children <br/>

</div>

this is the implementation we'll be using <br/>


#### <span class="section-num">1.8.3</span> binary heap {#binary-heap}

<div class="definition">

A **binary heap** is defined as a [binary tree](#binary-tree) with two additional constraints: <br/>

1.  shape property: a binary heap is an [almost complete tree](#almost-complete-tree) <br/>
2.  heap property: the key stored in each node is either greater than or equal to, or less than or equal to the keys in the node's children <br/>

<div class="characteristic">

a heap may keep a pointer to speed up insertion, this pointer points to the leftmost leaf if the tree is complete, otherwise if its almost complete, it points to the right uncle of the rightmost leaf <br/>

</div>

<div class="note">

in a heap the keys arent necessarily sorted like in [binary search tree](#binary-search-tree)s <br/>

</div>

</div>


##### <span class="section-num">1.8.3.1</span> bubbling {#bubbling}

<div class="definition">

moving a [node](#node) up/down a heap to get it to its correct position <br/>

</div>


###### <span class="section-num">1.8.3.1.1</span> bubble up {#bubble-up}

[bubbling](#bubbling) a node **upwards** consists of recursively switching it with its parent until its parent is bigger/smaller than it (depending on whether we're using a [min heap](#min-heap) or a [max heap](#max-heap)) <br/>


###### <span class="section-num">1.8.3.1.2</span> bubble down {#bubble-down}

[bubbling](#bubbling) a node **downards** consists of recursively switching it with one of its children until it gets to its correct position <br/>
this is a pseudocode for the [algorithm]({{< relref "20220706211958-algorithm.md" >}}): <br/>

```C
l = left(i) // index of left child
r = right(i) // index of right child
if l <= heap-size[A] and A[l] > A[i]
  largest = l
else
  largest = i
if r <= heap-size[A] and A[r] > A[largest]
  largest = r
if largest != i
  exchange A[i] A[largest]
  heapify(A, largest)
```

[time complexity]({{< relref "20221130014441-time_complexity.md" >}}) is \\(O(\log n)\\) <br/>


##### <span class="section-num">1.8.3.2</span> insertion {#insertion}

inserting a new [node](#node) to the heap consists of adding it as a [leaf](#leaf) such that the heap remains [almost complete](#almost-complete-tree) and [bubbling up](#bubble-up) the newly added node so that the keys in the tree remain sorted <br/>
if the heap is in [array representation](#binary-heap-array-representation), we insert the new node to the end of the array and heapify it upwards (bubble up) <br/>


##### <span class="section-num">1.8.3.3</span> deletion {#deletion}

deletion of a node consists of replacing the rightmost leaf with it and bubble it [downwards](#bubble-down) if its smaller than one of its children or [upwards](#bubble-up) if its bigger than its parent <br/>


##### <span class="section-num">1.8.3.4</span> binary heap array representation {#binary-heap-array-representation}

<div class="note">

some resources may use assume that arrays start at index 1, i see no point in that since most programming languages use 0 as the first index, so some of the following propositions might seem a little different like for example the proposition number 2 in the following list according to these sources would be that the left child of i<sup>th</sup> node is \\(Arr[2i]\\) instead of \\(Arr[2i+1]\\) and the right child is \\(Arr[2i+1]\\) <br/>

</div>

for an array to represent a [binary heap](#binary-heap), the only condition is that \\(A[i] < A\left[\floor\*{\frac{i-1}{2}}\right]\\) (in the case of [max heap](#max-heap)) <br/>
arrays that represent heap have the following characterstics: <br/>

1.  root is \\(Arr[0]\\) <br/>
2.  the parent of the i<sup>th</sup> node (in the array) is \\(A\left[\floor\*{\frac{i-1}{2}}\right]\\) <br/>
3.  left child of the i<sup>th</sup> node is \\(Arr[2i+1]\\) <br/>
4.  right child of the i<sup>th</sup> node is \\(Arr[2i+2]\\) <br/>

in other words, the nodes are taken from the root to the last level from left to right and put in that order in an array <br/>
the array should hold 2 values, `array-size`, which is the size of the array, and `heap-size`, which is the number of elements of the heap in the array <br/>


##### <span class="section-num">1.8.3.5</span> construction of binary heap from array {#construction-of-binary-heap-from-array}

given some random [array]({{< relref "20220728190531-array.md" >}}), e.g. `A=[10,20,30,40,50,70,35,60,80]`, we need to reorganize its elements such that it [represents a binary heap](#binary-heap-array-representation) <br/>
to achieve this we apply [bubble down](#bubble-down) to the first half of the array **in reverse** (because the [leaf](#leaf) nodes need not be heapified as they already follow the heap property) <br/>
e.g. for the given array we apply `bubble(A, i)` such that \\(i = 3 \to 0\\) <br/>
this is the constructing [algorithm]({{< relref "20220706211958-algorithm.md" >}}) in pseudocode: <br/>

```C
Build-Heap(A)
  n = length(A)
  heap-size = n
  for i = n/2 to 1
    heapify(A, i)
```

<div class="lemma">

this algorithm runs in \\(\Theta(n)\\) time <br/>

<div class="proof">

for \\(0 < k < 1\\) we know: <br/>
\\[
  \sum\_{x=1}^{\infty} x \cdot k^x = \frac{k}{(1-k)^2}
\\] <br/>
so for \\(k=\frac12\\): <br/>
\\[
  \sum\_{x=1}^{\infty} x \cdot \left(\frac{1}{2}\right)^x = \frac{1}{2} + \frac{2}{2^2} + \frac{3}{2^3} + \frac{4}{2^4} + \cdots = \frac{\frac{1}{2}}{\left(1-\frac{1}{2}\right)^2} = \frac{\frac{1}{2}}{\frac{1}{4}} = 2
\\] <br/>
to be continued <br/>

</div>

</div>


##### <span class="section-num">1.8.3.6</span> BinaryHeap {#binaryheap}

<div class="note">

this is a [max heap](#max-heap) implementation <br/>

</div>

<a id="code-snippet--BinaryHeap"></a>
```C++
#include <cmath>




#define PARENT_INDEX(node_idx)      floor((node_idx-1)/2)
#define LEFT_CHILD_INDEX(node_idx)  2*node_idx+1
#define RIGHT_CHILD_INDEX(node_idx) 2*node_idx+2

template <typename T>
class BinaryHeap {
private:
  ArrayList<KeyValue<int, T>>* list = new ArrayList<KeyValue<int, T>>();
  // heapify downwards assuming max heap
  void heapify_down(int idx) {
    KeyValue<int, T>* current = &this->list->get(idx);
    KeyValue<int, T>* left = LEFT_CHILD_INDEX(idx) >= list->size() ? nullptr : &this->list->get(LEFT_CHILD_INDEX(idx));
    KeyValue<int, T>* right = RIGHT_CHILD_INDEX(idx) >= list->size() ? nullptr : &this->list->get(RIGHT_CHILD_INDEX(idx));
    if (left == nullptr && right == nullptr)
      return;
    if (left == nullptr) {
      if (right->get_key() > current->get_key()) {
        KeyValue<int, T> temp = *current;
        this->list->set(idx, *right);
        this->list->set(RIGHT_CHILD_INDEX(idx), temp);
        heapify_down(RIGHT_CHILD_INDEX(idx));
      }
    } else if (right == nullptr) {
      if (left->get_key() > current->get_key()) {
        KeyValue<int, T> temp = *current;
        this->list->set(idx, *left);
        this->list->set(LEFT_CHILD_INDEX(idx), temp);
        heapify_down(LEFT_CHILD_INDEX(idx));
      }
    } else {
      if (left->get_key() > current->get_key() && left->get_key() > right->get_key()) {
        KeyValue<int, T> temp = *current;
        this->list->set(idx, *left);
        this->list->set(LEFT_CHILD_INDEX(idx), temp);
        heapify_down(LEFT_CHILD_INDEX(idx));
      }
      if (right->get_key() > current->get_key() && right->get_key() > left->get_key()) {
        KeyValue<int, T> temp = *current;
        this->list->set(idx, *right);
        this->list->set(RIGHT_CHILD_INDEX(idx), temp);
        heapify_down(RIGHT_CHILD_INDEX(idx));
      }
    }
  }
  void heapify_up(int idx) {
    if (idx == 0)
      return;
    KeyValue<int, T>* current = &this->list->get(idx);
    KeyValue<int, T>* parent = &this->list->get(PARENT_INDEX(idx));
    if (current->get_key() > parent->get_key()) {
      KeyValue<int, T> temp = *current;
      this->list->set(idx, *parent);
      this->list->set(PARENT_INDEX(idx), temp);
      heapify_up(PARENT_INDEX(idx));
    }
  }
  BinaryTreeNode<T>* to_binary_tree(int idx) {
    if (idx >= this->list->size())
      return nullptr;
    BinaryTreeNode<T>* node = new BinaryTreeNode<T>(this->list->get(idx).get_key(), this->list->get(idx).get_value());
    BinaryTreeNode<T>* left = to_binary_tree(LEFT_CHILD_INDEX(idx));
    BinaryTreeNode<T>* right = to_binary_tree(RIGHT_CHILD_INDEX(idx));
    node->set_left(left);
    node->set_right(right);
    return node;
  }

public:
  ~BinaryHeap() {
    delete this->list;
  }
  BinaryHeap<T>* insert(KeyValue<int, T> kv) {
    this->list->add(kv);
    this->heapify_up(this->list->size()-1);
    return this;
  }
  BinaryHeap<T>* insert(int key) {
    return this->insert(KeyValue<int, int>(key, key));
  }
  KeyValue<int, T>& operator [](int i) {
    return (*list)[i];
  }
  KeyValue<int, T>& get(int i) {
    return (*list)[i];
  }
  static BinaryHeap<T>* from_array(KeyValue<int, T>* other_arr, int length) {
    BinaryHeap<T>* heap = new BinaryHeap<T>();
    heap->list = ArrayList<KeyValue<int, T>>::from_array(other_arr, length);
    for (int i = length / 2; i >= 0; --i) {
      heap->heapify_down(i);
    }
    return heap;
  }
  int size() {
    return this->list->size();
  }
  BinaryTree<T>* to_binary_tree() {
    return new BinaryTree<T>(to_binary_tree(0));
  }
};
```

example usage: <br/>

```C++
#include <iostream>



int main() {
  // KeyValue<int, int> arr[4] = {{11, 11}, {21, 21}, {31, 31}, {41, 41}};
  // BinaryHeap<int>* h = BinaryHeap<int>::from_array(arr, 4);
  BinaryHeap<int> h;
  for (int i = 0; i < 10; ++i) {
    std::cout << "inserting " << i << std::endl;
    h.insert(i);
    BinaryTree<int>* bt = h.to_binary_tree();
    print_latex_forest(bt->get_root());
    delete bt;
  }
}
```

inserting 0 <br/>

{{< figure src="/ox-hugo/tmp_8ARGd70.svg" >}} <br/>

inserting 1 <br/>

{{< figure src="/ox-hugo/tmp_Tq58m9o.svg" >}} <br/>

inserting 2 <br/>

{{< figure src="/ox-hugo/tmp_UZxlwy8.svg" >}} <br/>

inserting 3 <br/>

{{< figure src="/ox-hugo/tmp_AmdO1X5.svg" >}} <br/>

inserting 4 <br/>

{{< figure src="/ox-hugo/tmp_T1VEkFv.svg" >}} <br/>

inserting 5 <br/>

{{< figure src="/ox-hugo/tmp_qe69eCz.svg" >}} <br/>

inserting 6 <br/>

{{< figure src="/ox-hugo/tmp_jfD5vyN.svg" >}} <br/>

inserting 7 <br/>

{{< figure src="/ox-hugo/tmp_puriysd.svg" >}} <br/>

inserting 8 <br/>

{{< figure src="/ox-hugo/tmp_RNepkbb.svg" >}} <br/>

inserting 9 <br/>

{{< figure src="/ox-hugo/tmp_19bbXmQ.svg" >}} <br/>


##### <span class="section-num">1.8.3.7</span> binary heap algorithms {#binary-heap-algorithms}


###### <span class="section-num">1.8.3.7.1</span> biggest k nodes {#biggest-k-nodes}

initial inefficient solution: <br/>

{{< figure src="/ox-hugo/tHkzZWu.svg" >}} <br/>

{{< figure src="/ox-hugo/7kcwMR4.svg" >}} <br/>


###### <span class="section-num">1.8.3.7.2</span> check if array represents a binary heap {#check-if-array-represents-a-binary-heap}

```C++
#include <iostream>


template <typename HEAP>
bool is_binary_heap(HEAP heap, int left, int right) {
  if (left > right) return true;
  if ((2*left <= right && heap[2*left+1] > heap[left]) || (2*left+2 <= right && heap[2*left+2] > heap[right])) return false;
  return is_binary_heap(heap, 2*left+1, right) && is_binary_heap(heap, 2*left+2, right);
}

int main() {
  BinaryHeap<int> h;
  for (int i = 0; i < 5; ++i) {
    h.insert(i);
    std::cout << i << std::endl;
  }
  std::cout << is_binary_heap(h, 0, 4) << std::endl;
  std::cout << is_binary_heap(new int[] {1,2,3,4,5}, 0, 4) << std::endl;
}
```


#### <span class="section-num">1.8.4</span> binomial heap {#binomial-heap}

some info taken from <http://staff.ustc.edu.cn/~csli/graduate/algorithms/book6/chap20.htm> <br/>

<div class="definition">

a **binomial heap** is a [concrete data type](#concrete-data-type) that implements the [heap](#heap) using a set of [binomial tree](#binomial-tree)s <br/>

<div class="characteristic">

[binary heap](#binary-heap)s, binomial heaps, and fibonacci heaps are all inefficient in their support of the operation `SEARCH`; it can take a while to find a node with a given key. for this reason, operations such as `DECREASE-KEY` and `DELETE` that refer to a given node require a pointer to that node as part of their input. this requirement poses no problem in many applications. <br/>

</div>

</div>


##### <span class="section-num">1.8.4.1</span> binomial tree {#binomial-tree}

<div class="definition">

a **binomial tree** is defined recursively as follows: <br/>

-   a binomial tree of order 0 is a single node <br/>
-   a binomial tree of order \\(k\\) has a root node whose children are roots of binomial trees of orders, \\(k-1,k-2,\ldots,2,1,0\\) (in this order) <br/>

<div class="characteristic">

each binomial tree in a heap obeys the [min heap](#min-heap) property <br/>
this ensures that the root of each binomial tree contains the smallest key in the tree. it follows that the smallest key in the entire heap is one of the roots. <br/>

</div>

<div class="characteristic">

there can be at most one binomial tree for each order, including order 0 <br/>
this property implies that a binomial heap with \\(n\\) nodes consists of at most \\(1+\log\_2n\\) binomial trees. the number and orders of these trees are uniquely determined by the number of nodes \\(n\\): there is one binomial tree for each nonzero bit in the binary representation of the number \\(n\\). for example, the decimal number 13 is 1101 in binary, \\(2^3+2^2+2^0\\), and thus a binomial heap with 13 nodes will consist of three binomial trees of orders 3, 2, and 0 (see the [figure below](#figure--binomial-heap-three-orders)). <br/>

</div>

<div class="my_example">

a binomial heap of order 3: <br/>

{{< figure src="/ox-hugo/mmqMhmW.svg" >}} <br/>

</div>

<div class="my_example">

this is an example binomial heap that consists of 13 nodes and 3 binomial trees <br/>

<a id="figure--binomial-heap-three-orders"></a>

{{< figure src="/ox-hugo/ejJXe51.svg" >}} <br/>

</div>

<div class="characteristic">

a binomial tree of order \\(k\\) has \\(2^{k}\\) nodes and height \\(k\\). the name comes from the shape: a binomial tree of order k has \\(\binom{k}{d}\\) nodes at depth \\(d\\), a [binomial coefficient]({{< relref "20221204105120-combinatorics.md#binomial-coefficient" >}}). because of its structure, a binomial tree of order \\(k\\) can be constructed from two trees of order \\(k-1\\) by attaching one of them as the leftmost child of the root of the other tree. This feature is central to the [merge](#union) operation of a binomial heap, which is its major advantage over other conventional heaps. <br/>

</div>

</div>


##### <span class="section-num">1.8.4.2</span> implementation {#implementation}

because no operation requires random access to the root nodes of the binomial trees, the roots of the binomial trees can be stored in a [linked list](#linked-list), ordered by increasing order of the tree. because the number of children for each node is variable, it does not work well for each node to have separate links to each of its children, as would be common in a [binary tree](#binary-tree); instead, it is possible to implement this tree using links from each node to its highest-order child in the tree, and to its sibling of the next smaller order than it. these sibling pointers can be interpreted as the next pointers in a linked list of the children of each node, but with the opposite order from the linked list of roots: from largest to smallest order, rather than vice versa. this representation allows two trees of the same order to be linked together, making a tree of the next larger order, in constant time. <br/>
each node `x` has a key field and contains pointers `parent(x)` to its parent, `child(x)` to its leftmost child, and `sibling(x)` to the sibling of x immediately to its right. if node x is a root, then `parent(x) = nil`. if node x has no children, then `child(x) = nil`, and if x is the rightmost child of its parent, then `sibling(x) = nil`. each node x also contains the field `degree(x)`, which is the number of children of x. <br/>
the roots of the binomial trees within a binomial heap are organized in a linked list, which we refer to as the **root list**. the degrees of the roots strictly increase as we traverse the root list. in an n-node binomial heap the degrees of the roots are a subset of \\({0,1,\ldots,\lg n}\\). the sibling field has a different meaning for roots than for nonroots. if x is a root, then `sibling(x)` points to the next root in the root list. (as usual, `sibling(x) = nil` if x is the last root in the root list.) <br/>
a given binomial heap `h` is accessed by the field `head(h)`, which is simply a pointer to the first root in the root list of h. if binomial heap H has no elements, then `head[h] = nil`. <br/>


###### <span class="section-num">1.8.4.2.1</span> create {#create}

to make an empty binomial heap, the `MAKE-BINOMIAL-HEAP` procedure simply allocates and returns an object `h`, where `head[h] = nil`. the running time is \\(O(1)\\). <br/>


###### <span class="section-num">1.8.4.2.2</span> union {#union}

the operation of uniting two binomial heaps is used as a subroutine by most of the remaining operations. merging of binomial trees is done by comparing the keys at the roots of two trees, and the root node with the larger key will become the child of the root with the smaller key. the time complexity for finding a union is \\(O(\log n)\\). <br/>
to perform the union of two binomial heaps, first we **merge** the heaps into one, such that the trees in the resulting heap would be in monotonically ascending order, then we traverse through the roots of the binomial trees, we consider the following cases where `x` denotes the current root: <br/>

1.  if `degree(x)` is not equal to `degree(next(x))`, then move the pointer ahead <br/>
2.  if `degree(x) = degree(next(x)) = degree(next(next(x)))` then move the pointer ahead <br/>
3.  if `degree(x) = degree(next(x))` but not equal to `degree(next(next(x)))`, and `key(x) < key(next(x))` then remove `next(x)` from root and attach it to x <br/>
4.  if `degree(x) = degree(next(x))` but not equal to `degree(next(next(x)))` and `key(x) > key(next(x))` then remove x from root and attach it to `next(x)`. <br/>

because each binomial tree in a binomial heap corresponds to a bit in the binary representation of its size, there is an analogy between the merging of two heaps and the binary addition of the sizes of the two heaps, from right-to-left. whenever a carry occurs during addition, this corresponds to a merging of two binomial trees during the merge. <br/>
each binomial tree's traversal during merge only involves roots, hence making the time taken at the biggest order \\(\log\_2n\\) and therefore the running time is \\(O(\log n)\\). <br/>


###### <span class="section-num">1.8.4.2.3</span> insert {#insert}

inserting a new element to a heap can be done by creating a new heap containing only this element and then [merging](#union) it with the original heap. because of the merge, a single insertion takes time \\(O(\log n)\\). however, this can be sped up using a merge procedure that shortcuts the merge after it reaches a point where only one of the merged heaps has trees of larger order. with this speedup, across a series of \\(k\\) consecutive insertions, the total time for the insertions is \\(O(k+\log n)\\). another way of stating this is that (after logarithmic overhead for the first insertion in a sequence) each successive insert has an amortized time of \\(O(1)\\) (i.e. constant time) per insertion. <br/>
a variant of the binomial heap, the skew binomial heap, achieves constant worst case insertion time by using forests whose tree sizes are based on the skew binary number system rather than on the binary number system. <br/>


###### <span class="section-num">1.8.4.2.4</span> delete {#delete}


##### <span class="section-num">1.8.4.3</span> BinomialHeapNode {#binomialheapnode}

<a id="code-snippet--BinomialHeapNode"></a>
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

template <typename T>
class BinomialHeapNode : public Node<T> {
private:
  BinomialHeapNode<T>* parent;
  BinomialHeapNode<T>* child; /* leftmost child */
  /* right sibling is the field "next" of the parent class */
public:
  BinomialHeapNode(int key, T value) : Node<T>(key, value) {}
  BinomialHeapNode(int key) : Node<T>(key, key) {}
  BinomialHeapNode<T>* get_parent() {
    return this->parent;
  }
  BinomialHeapNode<T>* get_child() {
    return this->child;
  }
  void set_child(BinomialHeapNode<T>* node) {
    if (node != nullptr)
      node->set_parent(this);
    this->child = node;
  }
  void set_parent(BinomialHeapNode<T>* node) {
    this->parent = node;
  }
  bool has_child() {
    return this->child != nullptr;
  }
  bool is_root() {
    return this->parent == nullptr;
  }
  int degree() {
    BinomialHeapNode<T>* n = this;
    int degree = 0;
    for (n = this; n->get_child() != nullptr; n = n->get_child()) {
      degree++;
    }
    return degree;
  }
};
```


##### <span class="section-num">1.8.4.4</span> BinomialHeap {#binomialheap}

<a id="code-snippet--BinomialHeap"></a>
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

template <typename T>
class BinomialHeapNode : public Node<T> {
private:
  BinomialHeapNode<T>* parent;
  BinomialHeapNode<T>* child; /* leftmost child */
  /* right sibling is the field "next" of the parent class */
public:
  BinomialHeapNode(int key, T value) : Node<T>(key, value) {}
  BinomialHeapNode(int key) : Node<T>(key, key) {}
  BinomialHeapNode<T>* get_parent() {
    return this->parent;
  }
  BinomialHeapNode<T>* get_child() {
    return this->child;
  }
  void set_child(BinomialHeapNode<T>* node) {
    if (node != nullptr)
      node->set_parent(this);
    this->child = node;
  }
  void set_parent(BinomialHeapNode<T>* node) {
    this->parent = node;
  }
  bool has_child() {
    return this->child != nullptr;
  }
  bool is_root() {
    return this->parent == nullptr;
  }
  int degree() {
    BinomialHeapNode<T>* n = this;
    int degree = 0;
    for (n = this; n->get_child() != nullptr; n = n->get_child()) {
      degree++;
    }
    return degree;
  }
};

template <typename T>
class BinomialHeap {
private:
  BinomialHeapNode<T>* head = nullptr;
public:
  BinomialHeap() = default;
  BinomialHeap(BinomialHeapNode<T>* head) {
    this->head = head;
  }
  int order() {
    BinomialHeapNode<T>* tail = head->get_tail();
    return tail->degree();
  }
  bool is_empty() {
    return this->head == nullptr;
  }
  BinomialHeap<T>* insert(BinomialHeapNode<T>* node) {
    if (this->is_empty())
      this->head = node;
    else
      this->unite(new BinomialHeap<T>(node));
    return this;
  }
  BinomialHeapNode<T>* get_head() {
    return this->head;
  }
  void merge(BinomialHeap<T>* other) {
    BinomialHeapNode<T>* this_iterator = this->head;
    BinomialHeapNode<T>* n = other->head;
    while (n != nullptr) {
      while (this_iterator->has_next() && ((BinomialHeapNode<T>*)this_iterator->get_next())->degree() < n->degree())
        this_iterator = (BinomialHeapNode<T>*)this_iterator->get_next();
      BinomialHeapNode<T>* old_n_next = (BinomialHeapNode<T>*)n->get_next();
      if (n->degree() < this->head->degree()) {
        n->set_next(this->head);
        this->head = n;
        this->head->set_parent(nullptr); /* TODO should reset child and parent */
      } else {
        BinomialHeapNode<T>* old_this_next = (BinomialHeapNode<T>*)this_iterator->get_next();
        this_iterator->set_next(n);
        n->set_next(old_this_next);
      }
      n = old_n_next;
    }
  }
  void unite(BinomialHeap<T>* other) {
    this->merge(other);
    BinomialHeapNode<T>* n = this->head;
    BinomialHeapNode<T>* prev = nullptr;
    while (n != nullptr && n->has_next()) {
      BinomialHeapNode<T>* next = (BinomialHeapNode<T>*)n->get_next();
      BinomialHeapNode<T>* nextnext = n->has_next() ? (BinomialHeapNode<T>*)n->get_next()->get_next() : nullptr;
      bool next_same = next != nullptr && n->degree() == next->degree();
      bool nextnext_same = nextnext != nullptr && n->degree() == nextnext->degree();
      if (!next_same) {
        prev = n;
        n = (BinomialHeapNode<T>*)n->get_next();
        // std::cout << "case 1" << std::endl;
      } else if (next_same && nextnext_same) {
        prev = n;
        n = (BinomialHeapNode<T>*)n->get_next();
        // std::cout << "case 2" << std::endl;
      } else if (next_same && !nextnext_same && n->get_key() < next->get_key()) {
        // remove next and attach it to n
        // std::cout << "attaching " << next->get_key() << " to " << n->get_key() << std::endl;
        next->set_next(n->get_child());
        n->set_next(nextnext);
        n->set_child(next);
        // std::cout << "case 3" << std::endl;
      } else if (next_same && !nextnext_same && n->get_key() > next->get_key()) {
        // remove n and attach it to next
        // std::cout << "attaching " << n->get_key() << " to " << next->get_key() << std::endl;
        BinomialHeapNode<T>* new_n = next;
        n->set_next(next->get_child());
        if (prev != nullptr) {
          prev->set_next(next);
        } else { /* its the first root now */
          this->head = next;
        }
        next->set_child(n);
        // std::cout << "case 4" << std::endl;
        n = new_n;
      }
    }
  }
};
```

example usage: <br/>

```C++
#include <iostream>



int main() {
  BinomialHeap<int> b;
  for (int i = 0; i < 15; ++i) {
    std::cout << "inserting " << i << std::endl;
    b.insert(new BinomialHeapNode<int>(i));
    print_latex_forest(b.get_head());
  }
}
```

inserting 0 <br/>

{{< figure src="/ox-hugo/tmp_bg8TDWx.svg" >}} <br/>

inserting 1 <br/>

{{< figure src="/ox-hugo/tmp_AiseR0l.svg" >}} <br/>

inserting 2 <br/>

{{< figure src="/ox-hugo/tmp_pdRlT1g.svg" >}} <br/>

inserting 3 <br/>

{{< figure src="/ox-hugo/tmp_FxYpK8t.svg" >}} <br/>

inserting 4 <br/>

{{< figure src="/ox-hugo/tmp_yIMqZAJ.svg" >}} <br/>

inserting 5 <br/>

{{< figure src="/ox-hugo/tmp_YPj1bvG.svg" >}} <br/>

inserting 6 <br/>

{{< figure src="/ox-hugo/tmp_dXUsV8h.svg" >}} <br/>

inserting 7 <br/>

{{< figure src="/ox-hugo/tmp_VQSCx4j.svg" >}} <br/>

inserting 8 <br/>

{{< figure src="/ox-hugo/tmp_bPWHhV3.svg" >}} <br/>

inserting 9 <br/>

{{< figure src="/ox-hugo/tmp_ApTqukD.svg" >}} <br/>

inserting 10 <br/>

{{< figure src="/ox-hugo/tmp_UmxmjVx.svg" >}} <br/>

inserting 11 <br/>

{{< figure src="/ox-hugo/tmp_EEjJAzU.svg" >}} <br/>

inserting 12 <br/>

{{< figure src="/ox-hugo/tmp_f8PL47H.svg" >}} <br/>

inserting 13 <br/>

{{< figure src="/ox-hugo/tmp_UfMOIm8.svg" >}} <br/>

inserting 14 <br/>

{{< figure src="/ox-hugo/tmp_aITCAjb.svg" >}} <br/>


### <span class="section-num">1.9</span> hash table {#hash-table}

<div class="definition">

a **hash table**, is an [abstract data type](#abstract-data-type) that maps keys to values. a hash table uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found. during lookup, the key is hashed and the resulting hash indicates where the corresponding value is stored. <br/>
it contains the following functions: <br/>

-   `Insert(A, x)` <br/>
-   `Delete(A, x)` <br/>
-   `Search(A, x)` <br/>

</div>


### <span class="section-num">1.10</span> theorems {#theorems}

<div class="lemma">

the number of [node](#node)s in a [complete tree](#complete-tree) of height \\(h\\) is \\(n = 2^h-1\\) <br/>

<div class="proof">

we add all the nodes in a given complete tree according to their levels to get \\(n = 1+2+2^2+\cdots+2^{h-1}=2^h-1\\) <br/>

</div>

</div>

<div class="lemma">

the height of a complete tree with \\(n\\) nodes is \\(\log\_2(n+1)\\) <br/>

<div class="proof">

according to the previous lemma \\(n+1 = 2^h\\), therefore \\(h = \log\_2(n+1)\\) <br/>

</div>

</div>

<div class="lemma">

the number of [leaves](#leaf) in a complete tree with \\(n\\) nodes and height \\(h\\) is \\(2^{h-1}\\) <br/>

<div class="proof">

using [induction]({{< relref "20220707193301-mathematical_induction.md" >}}) <br/>
the base case is \\(h=1\\), a complete tree of height 1 contains 1 node only which is a leaf, so \\(2^{h-1}=2^{1-1}=2^0=1\\) <br/>
we assume the statement holds true for every \\(h \leq i\\) <br/>
we prove the statements holds true for \\(h=i+1\\), looking at a complete tree of height \\(i+1\\), we can build it using a tree of height \\(i\\) by adding 2 children to every leaf, so \\(2 \cdot 2^{i-1} = 2^i\\) which means the statement holds true for \\(i+1\\) <br/>

</div>

</div>

<div class="lemma">

the number of leaves in a complete tree that holds \\(n\\) nodes is \\(\frac{n+1}{2}\\) <br/>

<div class="proof">

we denote by \\(h\\) the height of the tree: <br/>
\\[
  \text{number of leaves} = 2^{h-1} = 2^{\log\_2(n+1)-1} = \frac{2^{\log\_2(n+1)}}{2} = \frac{n+1}{2}
\\] <br/>

</div>

</div>

<div class="lemma">

in an [almost complete tree](#almost-complete-tree), the number of nodes in a specific level is 2 times the number of nodes in level before it (except for perhaps the last level) <br/>

</div>

<div class="lemma">

the height of an almost complete tree with \\(n\\) nodes is \\(\floor\*{\log\_2 n}\\) <br/>

</div>

<div class="lemma">

the number of leaves in an almost complete tree with \\(n\\) nodes is \\(\ceil\*{\frac{n}{2}}\\) <br/>

</div>

<div class="lemma">

the number of nodes with height \\(i\\) in an almost complete tree with \\(n\\) nodes is \\(\ceil\*{\frac{n}{2^i+1}}\\) <br/>

</div>

<div class="lemma">

for every almost [almost complete tree](#almost-complete-tree)complete tree with \\(n\\) nodes and height \\(h\\), \\(2^{h-1} \leq n \leq 2^h-1\\) <br/>

<div class="proof">

the biggest almost complete tree of height \\(h\\) is a complete tree and so \\(n \leq \text{nodes in complete tree of height h} = 2^h-1\\) <br/>
the smallest almost complete tree of height \\(h\\) can be constructed by adding a left child to the leftmost leaf of a complete tree of height \\(h-1\\), \\(n \geq \text{number of nodes in tree of height h-1 plus one} = 2^{h-1}-1+1=2^{h-1}\\) <br/>

</div>

</div>

<div class="lemma">

for every almost complete tree with \\(n\\) nodes and height \\(h\\), \\(\log\_2(n+1) \leq h \leq 1+\log\_2{n}\\) <br/>

</div>

<div class="lemma">

for every almost complete tree with \\(n\\) nodes and height \\(h\\), \\(2^{h-2} \leq \text{number of leaves} \leq 2^{h-1}\\) <br/>

</div>


### <span class="section-num">1.11</span> data structures average time complexity table {#data-structures-average-time-complexity-table}

<div class="note">

that \\(O(h)\\) is usually but not necessarily equal to \\(O(\log n)\\) (when talking about [tree](#tree)s) as sometimes \\(h > \log n\\) <br/>
see <https://stackoverflow.com/questions/12258114/big-oh-vs-big-ologn-in-trees> <br/>

</div>

| [data structure](#data-structure)         | insert          | search          |
|-------------------------------------------|-----------------|-----------------|
| [linked list](#linked-list)               | \\(O(1)\\)      | \\(O(n)\\)      |
| [array list](#array-list)                 | \\(O(1)\\)      | \\(O(n)\\)      |
| [Hash table](#hash-table)                 | \\(O(1)\\)      | \\(O(1)\\)      |
| [binomial heap](#binomial-heap)           | \\(O(\log n)\\) | \\(O(\log n)\\) |
| [binary heap](#binary-heap)               | \\(O(\log n)\\) | \\(O(\log n)\\) |
| [Queue](#queue)                           | \\(O(1)\\)      | \\(O(n)\\)      |
| [Stack](#stack)                           | \\(O(1)\\)      | \\(O(n)\\)      |
| [binary search tree](#binary-search-tree) | \\(O(h)\\)      | \\(O(h)\\)      |
| [AVL tree](#avl-tree)                     | \\(O(\log n)\\) | \\(O(\log n)\\) |
| [2-3 tree](#2-3-tree)                     | \\(O(\log n)\\) | \\(O(\log n)\\) |

