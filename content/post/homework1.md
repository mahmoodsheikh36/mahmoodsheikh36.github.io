+++
title = "operating systems homework 1"
author = ["mahmood"]
description = "operating systems homework 1"
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

```C
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <fcntl.h>

struct phone {
  char first_name[20];
  char last_name[20];
  char phone_num[15];
};

const unsigned int PHONE_SIZE = sizeof(struct phone);

void print_struct(int infile) {
  struct phone input;
  read(infile, &input, PHONE_SIZE);
  printf("First name: %s\nLast name: %s\nPhone number: %s\n",
         input.first_name, input.last_name, input.phone_num);
}

int main() {
  int infile;
  infile = open("phones.dat", O_RDONLY);
  if (infile == -1) {
    perror("\nerror opening file\n");
    exit(1);
  }

  print_struct(infile);
  lseek(infile, PHONE_SIZE, SEEK_CUR);
  print_struct(infile);

  int filesize = lseek(infile, 0, SEEK_END);

  lseek(infile, filesize-PHONE_SIZE, SEEK_SET);
  print_struct(infile);
  lseek(infile, filesize-2*PHONE_SIZE, SEEK_SET);
  print_struct(infile);

  close(infile);

  return 0;
}
```

```text
First name: Alice
Last name: Chebba
Phone number: 973-555-2015
First name: Jeff
Last name: Goldberg
Phone number: 201-555-3378
First name: Tony
Last name: Iannino
Phone number: 973-555-1295
First name: Susan
Last name: Goldberg
Phone number: 201-555-2087
```