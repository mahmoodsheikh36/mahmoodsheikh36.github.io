+++
title = "regular expression"
author = ["mahmood"]
date = 2023-11-16T00:00:00+02:00
tags = ["math", "public-archive"]
draft = false
+++

<div class="note">

regular expressions differ in syntax from one context to another, and the theory behind them is vaster than i had thought, they are usually studied in <b>automata theory</b>. <br/>

</div>

<div data-title="regular operations" class="dummy" id="blk-regular-operations">

the operators of regular expressions make use of the following 3 operations on <b>language</b>s: <br/>

1.  <b>union of languages</b> <br/>
2.  <b>concatenation of languages</b> <br/>
3.  <b>closure of a language</b> <br/>

we call them the _regular operations_, <b>regular language</b>s are <b>closed under</b> each one of them. <br/>
(John E. Hopcroft, Rajeev Motwani, Jeffrey D. Ullman, 2006 definition 1.23) <br/>

</div>

regular expressions are defined <b>inductively</b>: <br/>

<div class="definition">

<img src="/ltximg/8e163e10fd1.svg" alt="\textsc{BASIS}" style="height: 0.7711em; vertical-align: -0.0605em; display: inline-block" class="org-latex org-latex-inline" />: the basis consists of three parts: <br/>

1.  the constants <img src="/ltximg/97d56e5f6da.svg" alt="\(\varepsilon\)" style="height: 0.5629em; vertical-align: -0.0649em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/e04a5f5c072.svg" alt="\(\emptyset\)" style="height: 0.8691em; vertical-align: -0.0977em; display: inline-block" class="org-latex org-latex-inline" /> are _regular expressions_, denoting the <b>language</b>s <img src="/ltximg/97d56e5f6da.svg" alt="\(\varepsilon\)" style="height: 0.5629em; vertical-align: -0.0649em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/e04a5f5c072.svg" alt="\(\emptyset\)" style="height: 0.8691em; vertical-align: -0.0977em; display: inline-block" class="org-latex org-latex-inline" />, respectively. that is, <img src="/ltximg/4b9fb6d453d.svg" alt="\(L(\varepsilon)=\{\varepsilon\}\)" style="height: 1.0725em; vertical-align: -0.2971em; display: inline-block" class="org-latex org-latex-inline" />, and <img src="/ltximg/1372319f0f6.svg" alt="\(L(\emptyset)=\emptyset\)" style="height: 1.0725em; vertical-align: -0.2971em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
2.  if <img src="/ltximg/78ab8459b6e.svg" alt="\(a\)" style="height: 0.5548em; vertical-align: -0.0568em; display: inline-block" class="org-latex org-latex-inline" /> is any <b>symbol</b>, then <img src="/ltximg/8e7ef960984.svg" alt="\(\brm{a}\)" style="height: 0.5609em; vertical-align: -0.0668em; display: inline-block" class="org-latex org-latex-inline" /> is a regular expression. this expression denotes the language <img src="/ltximg/589a9689c41.svg" alt="\(\{a\}\)" style="height: 1.0333em; vertical-align: -0.2618em; display: inline-block" class="org-latex org-latex-inline" />. that is, <img src="/ltximg/a10a6f91680.svg" alt="\(L(\brm{a})=\{a\}\)" style="height: 1.0725em; vertical-align: -0.2971em; display: inline-block" class="org-latex org-latex-inline" />. note that we use boldface font to denote an expression corresponding to a symbol. the correspondence, e.g. that <img src="/ltximg/8e7ef960984.svg" alt="\(\brm{a}\)" style="height: 0.5609em; vertical-align: -0.0668em; display: inline-block" class="org-latex org-latex-inline" /> refers to <img src="/ltximg/78ab8459b6e.svg" alt="\(a\)" style="height: 0.5548em; vertical-align: -0.0568em; display: inline-block" class="org-latex org-latex-inline" />, should be obvious. <br/>
3.  a variable, usually capitalized and italic such as <img src="/ltximg/76e8fedbbab.svg" alt="\(L\)" style="height: 0.7640em; vertical-align: -0.0568em; display: inline-block" class="org-latex org-latex-inline" />, is a variable, representing any language. <br/>

<img src="/ltximg/fc3937b3ef4.svg" alt="\textsc{INDUCTION}" style="height: 0.7711em; vertical-align: -0.0605em; display: inline-block" class="org-latex org-latex-inline" />: there are four parts to the <b>inductive</b> step, one for each of the three operators and one for the introduction of parentheses. <br/>

1.  if <img src="/ltximg/646068e656e.svg" alt="\(E\)" style="height: 0.7640em; vertical-align: -0.0568em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/523f723b66d.svg" alt="\(F\)" style="height: 0.7640em; vertical-align: -0.0568em; display: inline-block" class="org-latex org-latex-inline" /> are regular expressions, then <img src="/ltximg/8dd691a49d2.svg" alt="\(E+F\)" style="height: 0.7648em; vertical-align: -0.0575em; display: inline-block" class="org-latex org-latex-inline" /> is a regular expression denoting the <b>union</b> of <img src="/ltximg/d3213b249b5.svg" alt="\(L(E)\)" style="height: 1.0725em; vertical-align: -0.2971em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/5381886ad19.svg" alt="\(L(F)\)" style="height: 1.0725em; vertical-align: -0.2971em; display: inline-block" class="org-latex org-latex-inline" />. that is, <img src="/ltximg/1d598d24280.svg" alt="\(L(E+F)=L(E)\cup L(F)\)" style="height: 1.0725em; vertical-align: -0.2971em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
2.  if <img src="/ltximg/646068e656e.svg" alt="\(E\)" style="height: 0.7640em; vertical-align: -0.0568em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/523f723b66d.svg" alt="\(F\)" style="height: 0.7640em; vertical-align: -0.0568em; display: inline-block" class="org-latex org-latex-inline" /> are regular expressions, then <img src="/ltximg/db57b7e9c9f.svg" alt="\(EF\)" style="height: 0.7640em; vertical-align: -0.0568em; display: inline-block" class="org-latex org-latex-inline" /> is regular expression denoting the <b>concatenation</b> of <img src="/ltximg/d3213b249b5.svg" alt="\(L(E)\)" style="height: 1.0725em; vertical-align: -0.2971em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/5381886ad19.svg" alt="\(L(F)\)" style="height: 1.0725em; vertical-align: -0.2971em; display: inline-block" class="org-latex org-latex-inline" />. that is, <img src="/ltximg/e3878c285c6.svg" alt="\(L(EF)=L(E)L(F)\)" style="height: 1.0725em; vertical-align: -0.2971em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
3.  if <img src="/ltximg/646068e656e.svg" alt="\(E\)" style="height: 0.7640em; vertical-align: -0.0568em; display: inline-block" class="org-latex org-latex-inline" /> is a regular expression, then <img src="/ltximg/c37ab103d3a.svg" alt="\(E^*\)" style="height: 0.7782em; vertical-align: -0.0568em; display: inline-block" class="org-latex org-latex-inline" /> is a regular expression, denoting the closure of <img src="/ltximg/d3213b249b5.svg" alt="\(L(E)\)" style="height: 1.0725em; vertical-align: -0.2971em; display: inline-block" class="org-latex org-latex-inline" />. that is, <img src="/ltximg/37b5f9f2bf5.svg" alt="\(L(E^*)=(L(E))^*\)" style="height: 1.0725em; vertical-align: -0.2971em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
4.  if <img src="/ltximg/646068e656e.svg" alt="\(E\)" style="height: 0.7640em; vertical-align: -0.0568em; display: inline-block" class="org-latex org-latex-inline" /> is a regular expression, then <img src="/ltximg/ee050f8beeb.svg" alt="\((E)\)" style="height: 1.0725em; vertical-align: -0.2971em; display: inline-block" class="org-latex org-latex-inline" />, a parenthesized <img src="/ltximg/646068e656e.svg" alt="\(E\)" style="height: 0.7640em; vertical-align: -0.0568em; display: inline-block" class="org-latex org-latex-inline" />, is also a regular expression, denoting the same language as <img src="/ltximg/646068e656e.svg" alt="\(E\)" style="height: 0.7640em; vertical-align: -0.0568em; display: inline-block" class="org-latex org-latex-inline" />. formally; <img src="/ltximg/03145a918f9.svg" alt="\(L((E))=L(E)\)" style="height: 1.0725em; vertical-align: -0.2971em; display: inline-block" class="org-latex org-latex-inline" />. <br/>

(John E. Hopcroft, Rajeev Motwani, Jeffrey D. Ullman, 2006 section 3.1.2) <br/>

</div>

for convenience, we let <img src="/ltximg/98821df627c.svg" alt="\(R^+\)" style="height: 0.8363em; vertical-align: -0.0568em; display: inline-block" class="org-latex org-latex-inline" /> be a shorthand for <img src="/ltximg/56579d48fcb.svg" alt="\(RR^*\)" style="height: 0.7782em; vertical-align: -0.0568em; display: inline-block" class="org-latex org-latex-inline" />. <br/>

<div data-title="order precedence of regular expression operators" class="dummy">

1.  the <b>star</b> operator is of highest precedence. that is, it applies only to the smallest sequence of symbols to its left that is a well-formed regular expression. <br/>
2.  next in precedence comes the concatenation or "dot" operator. after grouping all stars to their operands, we group concatenation operators to their operands. that is, all expressions that are juxtaposed (adjacent, with no intervening operator) are grouped together. since concatenation is an associative operator it does not matter in what order we group consecutive concatenations, although if there is a choice to be made, you should group them from the left. for instance, 012 is grouped (01)2. <br/>
3.  finally, all unions (+ operators) are grouped with their operands. since union is also <b>associative</b>, it again matters little in which order consecutive unions are grouped, but we shall assume grouping from the left. <br/>

of course, sometimes we do not want the grouping in a regular expression to be as required by the precedence of the operators. if so, we are free to use parentheses to group operands exactly as we choose. in addition, there is never anything wrong with putting parentheses around operands that you want to group, even if the desired grouping is implied by the rules of precedence. <br/>
(John E. Hopcroft, Rajeev Motwani, Jeffrey D. Ullman, 2006 section 3.1.3) <br/>

</div>

<div class="dummy">

<div class="definition" id="def-regex">

say that <img src="/ltximg/4081ee04e6a.svg" alt="\(R\)" style="height: 0.7640em; vertical-align: -0.0568em; display: inline-block" class="org-latex org-latex-inline" /> is a _regular expression_ if <img src="/ltximg/4081ee04e6a.svg" alt="\(R\)" style="height: 0.7640em; vertical-align: -0.0568em; display: inline-block" class="org-latex org-latex-inline" /> is <br/>

1.  <img src="/ltximg/78ab8459b6e.svg" alt="\(a\)" style="height: 0.5548em; vertical-align: -0.0568em; display: inline-block" class="org-latex org-latex-inline" /> for some <img src="/ltximg/78ab8459b6e.svg" alt="\(a\)" style="height: 0.5548em; vertical-align: -0.0568em; display: inline-block" class="org-latex org-latex-inline" /> in the <b>alphabet</b> <img src="/ltximg/5814584c393.svg" alt="\(\Sigma\)" style="height: 0.7996em; vertical-align: -0.0570em; display: inline-block" class="org-latex org-latex-inline" />, <br/>
2.  <img src="/ltximg/97d56e5f6da.svg" alt="\(\varepsilon\)" style="height: 0.5629em; vertical-align: -0.0649em; display: inline-block" class="org-latex org-latex-inline" />, <br/>
3.  <img src="/ltximg/e04a5f5c072.svg" alt="\(\emptyset\)" style="height: 0.8691em; vertical-align: -0.0977em; display: inline-block" class="org-latex org-latex-inline" />, <br/>
4.  <img src="/ltximg/fa7c9165d2d.svg" alt="\((R_1 \cup R_2)\)" style="height: 1.0725em; vertical-align: -0.2971em; display: inline-block" class="org-latex org-latex-inline" />, where <img src="/ltximg/10c273410a2.svg" alt="\(R_1\)" style="height: 0.9637em; vertical-align: -0.2564em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/753d5d1b54d.svg" alt="\(R_2\)" style="height: 0.9637em; vertical-align: -0.2564em; display: inline-block" class="org-latex org-latex-inline" /> are regular expressions, <br/>
5.  <img src="/ltximg/27c9e8f42e0.svg" alt="\((R_1 \circ R_2)\)" style="height: 1.0725em; vertical-align: -0.2971em; display: inline-block" class="org-latex org-latex-inline" />, where <img src="/ltximg/10c273410a2.svg" alt="\(R_1\)" style="height: 0.9637em; vertical-align: -0.2564em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/753d5d1b54d.svg" alt="\(R_2\)" style="height: 0.9637em; vertical-align: -0.2564em; display: inline-block" class="org-latex org-latex-inline" /> are regular expressions, or <br/>
6.  <img src="/ltximg/277c05bf313.svg" alt="\((R_1^*)\)" style="height: 1.1436em; vertical-align: -0.3683em; display: inline-block" class="org-latex org-latex-inline" />, where <img src="/ltximg/10c273410a2.svg" alt="\(R_1\)" style="height: 0.9637em; vertical-align: -0.2564em; display: inline-block" class="org-latex org-latex-inline" /> is a regular expression. <br/>

in items 1 and 2, the regular expressions <img src="/ltximg/78ab8459b6e.svg" alt="\(a\)" style="height: 0.5548em; vertical-align: -0.0568em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/97d56e5f6da.svg" alt="\(\varepsilon\)" style="height: 0.5629em; vertical-align: -0.0649em; display: inline-block" class="org-latex org-latex-inline" /> represent the languages <img src="/ltximg/6d6944b0429.svg" alt="\(\Set{a}\)" style="height: 1.0333em; vertical-align: -0.2618em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/816d3d24886.svg" alt="\(\Set{\varepsilon}\)" style="height: 1.0333em; vertical-align: -0.2618em; display: inline-block" class="org-latex org-latex-inline" />, respectively. in item 3, the regular expression <img src="/ltximg/97d56e5f6da.svg" alt="\(\varepsilon\)" style="height: 0.5629em; vertical-align: -0.0649em; display: inline-block" class="org-latex org-latex-inline" /> represents the empty language. in items 4,5, and 6, the expressions represent the languages obtained by taking the union or concatenation of the languages <img src="/ltximg/10c273410a2.svg" alt="\(R_1\)" style="height: 0.9637em; vertical-align: -0.2564em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/753d5d1b54d.svg" alt="\(R_2\)" style="height: 0.9637em; vertical-align: -0.2564em; display: inline-block" class="org-latex org-latex-inline" />, or the star of language <img src="/ltximg/10c273410a2.svg" alt="\(R_1\)" style="height: 0.9637em; vertical-align: -0.2564em; display: inline-block" class="org-latex org-latex-inline" />, respectively. <br/>
(Michael Sipser, 2012 definition 1.52) <br/>

</div>

dont confuse the regular expressions <img src="/ltximg/97d56e5f6da.svg" alt="\(\varepsilon\)" style="height: 0.5629em; vertical-align: -0.0649em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/e04a5f5c072.svg" alt="\(\emptyset\)" style="height: 0.8691em; vertical-align: -0.0977em; display: inline-block" class="org-latex org-latex-inline" />. the expression <img src="/ltximg/97d56e5f6da.svg" alt="\(\varepsilon\)" style="height: 0.5629em; vertical-align: -0.0649em; display: inline-block" class="org-latex org-latex-inline" /> represents the language containing a single string--namely, the empty string--whereas <img src="/ltximg/e04a5f5c072.svg" alt="\(\emptyset\)" style="height: 0.8691em; vertical-align: -0.0977em; display: inline-block" class="org-latex org-latex-inline" /> represents the language that doesn't contain any strings. <br/>
(Michael Sipser, 2012 chapter 1 regular languages) <br/>

</div>

<div data-title="precedence of regular-expression operators" class="dummy">

like other algebras, the regular-expression operators have an assumed order of "precedence", which means that óperators are associated with their operands in a particular order. we are familiar with the notion of precedence from ordinary arithmetic expressions. for regular expressions, the following is the order of precedence for the operators: <br/>

1.  the star operator is of highest precedence. that is, it applies only to the smallest sequence of symbols to its left that is a well-formed regular expression. <br/>
2.  the concatenation operator. <br/>
3.  union <br/>

of course, sometimes we do not want the grouping in a regular expression to be as required by the precedence of the operators. If so, we are free to use parentheses to group operands exactly as we choose. In addition, there is never anything wrong with putting parentheses around operands that you want to group, even if the desired grouping is implied by the rules of precedence. <br/>
(John E. Hopcroft, Rajeev Motwani, Jeffrey D. Ullman, 2006 chapter 3.1.3 precedence of regular-expression operators) <br/>

</div>

<div data-title="algebraic laws" class="dummy">

for _any_ languages <img src="/ltximg/44322017d0d.svg" alt="\(L,M,N\)" style="height: 0.8858em; vertical-align: -0.1785em; display: inline-block" class="org-latex org-latex-inline" />, the following <b>algebraic properties</b> hold <br/>

-   <b>associativity</b>: <img src="/ltximg/1c5e25cfaac.svg" alt="\(L+M=M+L\)" style="height: 0.7648em; vertical-align: -0.0575em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
-   _associative law for <b>union</b>_: <img src="/ltximg/cd8b70b2b21.svg" alt="\((L+M)+N=L+(M+N)\)" style="height: 1.0725em; vertical-align: -0.2971em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
-   _associative law for <b>concatenation</b>_: <img src="/ltximg/824b169b6a3.svg" alt="\((LM)N=L(MN)\)" style="height: 1.0725em; vertical-align: -0.2971em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
-   <img src="/ltximg/3a495338543.svg" alt="\(\emptyset+L=L+\emptyset=L\)" style="height: 0.8691em; vertical-align: -0.0977em; display: inline-block" class="org-latex org-latex-inline" />. this law asserts that <img src="/ltximg/e04a5f5c072.svg" alt="\(\emptyset\)" style="height: 0.8691em; vertical-align: -0.0977em; display: inline-block" class="org-latex org-latex-inline" /> is the <b>identity</b> for union. <br/>
-   <img src="/ltximg/6ea4d945703.svg" alt="\(\varepsilon L=L\varepsilon=L\)" style="height: 0.7721em; vertical-align: -0.0649em; display: inline-block" class="org-latex org-latex-inline" />. this law asserts that <img src="/ltximg/97d56e5f6da.svg" alt="\(\varepsilon\)" style="height: 0.5629em; vertical-align: -0.0649em; display: inline-block" class="org-latex org-latex-inline" /> is the identity for concatenation. <br/>
-   <img src="/ltximg/6621740d6d7.svg" alt="\(\varepsilon L=L \varepsilon=\varepsilon\)" style="height: 0.7721em; vertical-align: -0.0649em; display: inline-block" class="org-latex org-latex-inline" />. this law asserts that <img src="/ltximg/e04a5f5c072.svg" alt="\(\emptyset\)" style="height: 0.8691em; vertical-align: -0.0977em; display: inline-block" class="org-latex org-latex-inline" /> is the annihilator for concatenation. <br/>
-   _left <b>distributive</b> law of concatenation over union_: <img src="/ltximg/41b10bc69ae.svg" alt="\(L(M+N)=LM+LN\)" style="height: 1.0725em; vertical-align: -0.2971em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
-   _right distributive law of concatenation over union_: <img src="/ltximg/3a3c1d793e5.svg" alt="\((M+N)L=ML+NL\)" style="height: 1.0725em; vertical-align: -0.2971em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
-   _<b>idempotence</b> law for union_: <img src="/ltximg/c7182f57474.svg" alt="\(L+L=L\)" style="height: 0.7648em; vertical-align: -0.0575em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
-   <img src="/ltximg/623b6cbb6f8.svg" alt="\((L^*)^*=L^*\)" style="height: 1.0725em; vertical-align: -0.2971em; display: inline-block" class="org-latex org-latex-inline" />. this law law says that closing an expression that is already closed does not change the language. <br/>
-   <img src="/ltximg/b5fea5102fc.svg" alt="\(\emptyset^*=\varepsilon\)" style="height: 0.8691em; vertical-align: -0.0977em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
-   <img src="/ltximg/9d50b2edf05.svg" alt="\(\varepsilon^*=\varepsilon\)" style="height: 0.7863em; vertical-align: -0.0649em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
-   <img src="/ltximg/0ac36f2fda4.svg" alt="\(L^+=LL^*=L^*L\)" style="height: 0.8363em; vertical-align: -0.0568em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
-   <img src="/ltximg/dd2676beadc.svg" alt="\(L^*=L^*+\varepsilon\)" style="height: 0.7863em; vertical-align: -0.0649em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
-   <img src="/ltximg/92d5c43cb4e.svg" alt="\(L?=\varepsilon+L\)" style="height: 0.7829em; vertical-align: -0.0649em; display: inline-block" class="org-latex org-latex-inline" />. this rule is really the definition of the <img src="/ltximg/730079f4ece.svg" alt="\(?\)" style="height: 0.7755em; vertical-align: -0.0575em; display: inline-block" class="org-latex org-latex-inline" /> operator. <br/>
-   <img src="/ltximg/830cbb93d1e.svg" alt="\((L+M)^*=(L^*M^*)^*\)" style="height: 1.0725em; vertical-align: -0.2971em; display: inline-block" class="org-latex org-latex-inline" />. <br/>

(John E. Hopcroft, Rajeev Motwani, Jeffrey D. Ullman, 2006 chapter 3.4 algebraic laws for regular expressions) <br/>

</div>

<div data-title="discovering laws for regular expressions" class="dummy">

(John E. Hopcroft, Rajeev Motwani, Jeffrey D. Ullman, 2006 chapter 3.4.6 discovering laws for regular expressions) <br/>

</div>

<div class="my_example">

-   the expression <img src="/ltximg/a69aef722a6.svg" alt="\((a \cup b) \circ a\)" style="height: 1.0725em; vertical-align: -0.2971em; display: inline-block" class="org-latex org-latex-inline" /> denotes strings over <img src="/ltximg/40c94b0442c.svg" alt="\(\Set{a,b}\)" style="height: 1.0333em; vertical-align: -0.2618em; display: inline-block" class="org-latex org-latex-inline" /> that end with <img src="/ltximg/78ab8459b6e.svg" alt="\(a\)" style="height: 0.5548em; vertical-align: -0.0568em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
-   <img src="/ltximg/93bea7f1819.svg" alt="\(L(a \circ a^*)=\Set{a^n \given n \geq 1}\)" style="height: 1.0725em; vertical-align: -0.2971em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
-   <img src="/ltximg/cf6ed3909cb.svg" alt="\(\varepsilon \in L((a \circ a)^*) = \Set{a^{2n} \given n \in N}\)" style="height: 1.1951em; vertical-align: -0.2971em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
-   the expression <img src="/ltximg/8ceaabcfc35.svg" alt="\(L((a \cup b)^* \circ a \circ a \circ (a \cup b)^*\)" style="height: 1.0725em; vertical-align: -0.2971em; display: inline-block" class="org-latex org-latex-inline" /> denotes all the words that include the substring <img src="/ltximg/c3be83c3a3d.svg" alt="\(aa\)" style="height: 0.5548em; vertical-align: -0.0568em; display: inline-block" class="org-latex org-latex-inline" />, i.e. <img src="/ltximg/6cefddbd0d8.svg" alt="\(\Set{w_1aaw_2 \given w_1,w_2 \in \Set{a,b}^*}\)" style="height: 1.0333em; vertical-align: -0.2618em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
-   the expression <br/>
    <img src="/ltximg/3cafff02d5a.svg" alt="\[ (b \cup c \cup ab \cup ac)^*(a \cup \varepsilon) \]" style="height: 1.5223em; display: block" class="org-latex org-latex-block" /> <br/>
    which is equal to <br/>
    <img src="/ltximg/4c35cd5f40f.svg" alt="\[ \underbrace{(b \cup c \cup ab \cup ac)^*}_{\text{words that dont end with }a} \cup \underbrace{(b \cup c \cup ab \cup ac)^*a}_{\text{words that end with }a} \]" style="height: 3.3975em; display: block" class="org-latex org-latex-block" /> <br/>
    denotes all the strings over <img src="/ltximg/c572c3996d4.svg" alt="\(\Set{a,b,c}\)" style="height: 1.0333em; vertical-align: -0.2618em; display: inline-block" class="org-latex org-latex-inline" /> that dont contain the substring <img src="/ltximg/c3be83c3a3d.svg" alt="\(aa\)" style="height: 0.5548em; vertical-align: -0.0568em; display: inline-block" class="org-latex org-latex-inline" />. <br/>

</div>

<div class="dummy">

let <img src="/ltximg/4081ee04e6a.svg" alt="\(R\)" style="height: 0.7640em; vertical-align: -0.0568em; display: inline-block" class="org-latex org-latex-inline" /> be any regular expression, we have the following identities <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/cc0af9ecbb7.svg" alt="\begin{gather*}
  R \cup \emptyset = R\\
  R \circ \varepsilon = R
\end{gather*}
" style="height: 3.0972em; vertical-align: -0.4020em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

however, exchanging <img src="/ltximg/e04a5f5c072.svg" alt="\(\emptyset\)" style="height: 0.8691em; vertical-align: -0.0977em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/97d56e5f6da.svg" alt="\(\varepsilon\)" style="height: 0.5629em; vertical-align: -0.0649em; display: inline-block" class="org-latex org-latex-inline" /> in the preceding identities may cause the equalities to fail. <img src="/ltximg/38e8ecac1ff.svg" alt="\(R \cup \varepsilon\)" style="height: 0.7770em; vertical-align: -0.0698em; display: inline-block" class="org-latex org-latex-inline" /> may not equal <img src="/ltximg/4081ee04e6a.svg" alt="\(R\)" style="height: 0.7640em; vertical-align: -0.0568em; display: inline-block" class="org-latex org-latex-inline" />. <img src="/ltximg/0e656bfd81e.svg" alt="\(R \circ \emptyset\)" style="height: 0.8691em; vertical-align: -0.0977em; display: inline-block" class="org-latex org-latex-inline" /> may not equal <img src="/ltximg/4081ee04e6a.svg" alt="\(R\)" style="height: 0.7640em; vertical-align: -0.0568em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
(Michael Sipser, 2012 section 1.3 regular exxpressions) <br/>

</div>

<div class="my_example">

a numerical constant that may include a fractional part and/or a sign may be described as a member of the language defined by the regex <br/>
<img src="/ltximg/079bba9a746.svg" alt="\[ (+ \cup - \cup \varepsilon)(D^+ \cup D^+ . D^* \cup D^* . D^+) \]" style="height: 1.5223em; display: block" class="org-latex org-latex-block" /> <br/>
where <img src="/ltximg/de523b82a35.svg" alt="\(D=\Set{0,1,2,3,4,5,6,7,8,9}\)" style="height: 1.0333em; vertical-align: -0.2618em; display: inline-block" class="org-latex org-latex-inline" /> is the alphabet of decimal digits. examples of generated strings are: <img src="/ltximg/cdea24bb86c.svg" alt="\(72,3.14159,+7.,-.01\)" style="height: 0.8966em; vertical-align: -0.1785em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
(Michael Sipser, 2012 chapter 1 regular languages) <br/>

</div>

<div data-title="equivalence with finite automata" class="dummy">

regular expressions and finite automata are equivalent in their descriptive power. this fact is surprising because finite automata and regular expressions superficially appear to be rather different. however, any regular expression can be converted into a finite automaton that recognizes the language it describes, and vice versa. <br/>

<div class="theorem" id="the-finite-automata-equiv-regex">

a language is regular if and only if some regular expression describes it. <br/>

</div>

(Michael Sipser, 2012 chapter 1 regular languages) <br/>

</div>

