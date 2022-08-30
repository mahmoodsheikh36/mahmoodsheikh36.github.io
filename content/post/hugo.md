+++
title = "hugo"
author = ["mahmood"]
description = "hugo"
date = 2022-06-18T16:50:00+03:00
draft = false
+++

<p style="height:0px; display: none;">\(\DeclareMathOperator{\rank}{rank}\)</p>

<p style="height:0px; display: none;">\(\DeclareMathOperator{\spn}{span}\)</p>

<p style="height:0px; display: none;">\(\DeclareMathOperator{\dom}{domain}\)</p>

<p style="height:0px; display: none;">\(\DeclareMathOperator{\ran}{range}\)</p>

<p style="height:0px; display: none;">\(\DeclareMathOperator{\rng}{range}\)</p>

<p style="height:0px; display: none;">\(\DeclareMathOperator{\img}{Im}\)</p>

<style>
.lemma, .proof, .entailment, .definition, .note, .my_example, .characteristic, .assumption, .question, .subquestion, .answer, .step {
  border-radius: 10px;
  padding: 4px;
  border-style: groove;
  border-width: 4px;
}
.lemma:before, .proof:before, .entailment:before, .definition:before, .note:before, .my_example:before, .characteristic:before, .assumption:before, .question:before, .subquestion:before, .answer:before, .step:before {
  background-color: white;
  position: relative;
  left: -5px;
  top: -7px;
  border-radius: 10px 0 10px 0;
  padding-right: 7px;
  padding-left: 7px;
  font-family: cursive;
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
<script>
// auto load modules like cancel
window.MathJax = {
  loader: {load: ['[tex]/autoload', '[tex]/mathtools']},
  tex: {
    packages: {'[+]': ['autoload', 'mathtools']}
  }
};
</script>
<script type="text/javascript" id="MathJax-script" async
  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js">
</script>


## <span class="section-num">1</span> redirect 404 to homepage {#redirect-404-to-homepage}

to do this we create a file `404.html` in our theme's `layout` directory with the following content: <br/>

```html
{{ define "content"}}
<meta http-equiv="refresh" content="0; url=https://blog.mahmoodsheikh.com" />
<main id="main">
  <div>
    <!-- for older browsers that cant handle redirects -->
    <h1 id="title"><a href="{{ "/" | relURL }}">Go Home</a></h1>
  </div>
</main>
{{ end }}
```

[hugo]({{< relref "hugo.md" >}}) by default wont use this file, i use `nginx` so to make the webserver return this file on 404 errors we add the line `error_page 404 /404.html;` to `/etc/nginx/sites-available/blog` <br/>
and then use `sudo systemctl restart nginx` to restart `nginx` with the new configuration <br/>