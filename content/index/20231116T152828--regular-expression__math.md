+++
title = "regular expression"
author = ["mahmood"]
date = 2024-03-19T00:00:00+02:00
tags = ["math"]
draft = false
+++

<div class="dummy" id="blk-regular-operations">

the operators of regular expressions make use of the following 3 operations on languages: <br/>

1.  union of languages <br/>
2.  concatenation of languages <br/>
3.  closure of a language <br/>

we call them the _regular operations_, [regular language](../20231201T201245--regular-language__math.md)s are closed under each one of them. <br/>
(John E. Hopcroft, Rajeev Motwani, Jeffrey D. Ullman, 2006 definition 1.23) <br/>

</div>

regular expressions are defined inductively: <br/>

<div class="definition">

<img src="/ltximg/daa450b2181.svg" alt="\textsc{BASIS}" style="height: 0.7530em; vertical-align: -0.0590em; display: inline-block" class="org-latex org-latex-inline" />: the basis consists of three parts: <br/>

1.  the constants <img src="/ltximg/528554eb55e.svg" alt="\(\varepsilon\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/edd34bd668c.svg" alt="\(\emptyset\)" style="height: 0.8878em; vertical-align: -0.1036em; display: inline-block" class="org-latex org-latex-inline" /> are _regular expressions_, denoting the languages <img src="/ltximg/528554eb55e.svg" alt="\(\varepsilon\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/edd34bd668c.svg" alt="\(\emptyset\)" style="height: 0.8878em; vertical-align: -0.1036em; display: inline-block" class="org-latex org-latex-inline" />, respectively. that is, <img src="/ltximg/6106de803a0.svg" alt="\(L(\varepsilon)=\{\varepsilon\}\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, and <img src="/ltximg/4ad0db7ecbb.svg" alt="\(L(\emptyset)=\emptyset\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
2.  if <img src="/ltximg/942eecb938a.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is any symbol, then <img src="/ltximg/b07d3491618.svg" alt="\(\brm{a}\)" style="height: 0.5224em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is a regular expression. this expression denotes the language <img src="/ltximg/86d3f272cae.svg" alt="\(\{a\}\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. that is, <img src="/ltximg/98afce80f4d.svg" alt="\(L(\brm{a})=\{a\}\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. note that we use boldface font to denote an expression corresponding to a symbol. the correspondence, e.g. that <img src="/ltximg/b07d3491618.svg" alt="\(\brm{a}\)" style="height: 0.5224em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> refers to <img src="/ltximg/942eecb938a.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, should be obvious. <br/>
3.  a variable, usually capitalized and italic such as <img src="/ltximg/7c012388408.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, is a variable, representing any language. <br/>

<img src="/ltximg/a360f958216.svg" alt="\textsc{INDUCTION}" style="height: 0.7530em; vertical-align: -0.0590em; display: inline-block" class="org-latex org-latex-inline" />: there are four parts to the inductive step, one for each of the three operators and one for the introduction of parentheses. <br/>

1.  if <img src="/ltximg/6d36b875329.svg" alt="\(E\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/d067cdea6c2.svg" alt="\(F\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> are regular expressions, then <img src="/ltximg/1036bc40074.svg" alt="\(E+F\)" style="height: 0.8494em; vertical-align: -0.1305em; display: inline-block" class="org-latex org-latex-inline" /> is a regular expression denoting the union of <img src="/ltximg/15ba160f2af.svg" alt="\(L(E)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/ed701c1d69b.svg" alt="\(L(F)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. that is, <img src="/ltximg/8ceb1c74464.svg" alt="\(L(E+F)=L(E)\cup L(F)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
2.  if <img src="/ltximg/6d36b875329.svg" alt="\(E\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/d067cdea6c2.svg" alt="\(F\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> are regular expressions, then <img src="/ltximg/530a46fa20c.svg" alt="\(EF\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is regular expression denoting the concatenation of <img src="/ltximg/15ba160f2af.svg" alt="\(L(E)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/ed701c1d69b.svg" alt="\(L(F)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. that is, <img src="/ltximg/73a4d796b2d.svg" alt="\(L(EF)=L(E)L(F)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
3.  if <img src="/ltximg/6d36b875329.svg" alt="\(E\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is a regular expression, then <img src="/ltximg/a73bf5afd9a.svg" alt="\(E^*\)" style="height: 0.7732em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is a regular expression, denoting the closure of <img src="/ltximg/15ba160f2af.svg" alt="\(L(E)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. that is, <img src="/ltximg/194e6b8fde9.svg" alt="\(L(E^*)=(L(E))^*\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
4.  if <img src="/ltximg/6d36b875329.svg" alt="\(E\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is a regular expression, then <img src="/ltximg/48ca3138b3b.svg" alt="\((E)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, a parenthesized <img src="/ltximg/6d36b875329.svg" alt="\(E\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, is also a regular expression, denoting the same language as <img src="/ltximg/6d36b875329.svg" alt="\(E\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. formally; <img src="/ltximg/c735fa8beb9.svg" alt="\(L((E))=L(E)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>

(John E. Hopcroft, Rajeev Motwani, Jeffrey D. Ullman, 2006 section 3.1.2) <br/>

</div>

for convenience, we let <img src="/ltximg/0e7b29b072c.svg" alt="\(R^+\)" style="height: 0.8779em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> be a shorthand for <img src="/ltximg/10d61efdadf.svg" alt="\(RR^*\)" style="height: 0.7732em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. <br/>

<div class="dummy">

1.  the star operator is of highest precedence. that is, it applies only to the smallest sequence of symbols to its left that is a well-formed regular expression. <br/>
2.  next in precedence comes the concatenation or "dot" operator. after grouping all stars to their operands, we group concatenation operators to their operands. that is, all expressions that are juxtaposed (adjacent, with no intervening operator) are grouped together. since concatenation is an associative operator it does not matter in what order we group consecutive concatenations, although if there is a choice to be made, you should group them from the left. for instance, 012 is grouped (01)2. <br/>
3.  finally, all unions (+ operators) are grouped with their operands. since union is also associative, it again matters little in which order consecutive unions are grouped, but we shall assume grouping from the left. <br/>

of course, sometimes we do not want the grouping in a regular expression to be as required by the precedence of the operators. if so, we are free to use parentheses to group operands exactly as we choose. in addition, there is never anything wrong with putting parentheses around operands that you want to group, even if the desired grouping is implied by the rules of precedence. <br/>
(John E. Hopcroft, Rajeev Motwani, Jeffrey D. Ullman, 2006 section 3.1.3) <br/>

</div>

<div class="dummy">

<div class="definition" id="def-regex">

say that <img src="/ltximg/89199d9d550.svg" alt="\(R\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is a _regular expression_ if <img src="/ltximg/89199d9d550.svg" alt="\(R\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is <br/>

1.  <img src="/ltximg/942eecb938a.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> for some <img src="/ltximg/942eecb938a.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> in the alphabet <img src="/ltximg/400e9daadfe.svg" alt="\(\Sigma\)" style="height: 0.7735em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, <br/>
2.  <img src="/ltximg/528554eb55e.svg" alt="\(\varepsilon\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, <br/>
3.  <img src="/ltximg/edd34bd668c.svg" alt="\(\emptyset\)" style="height: 0.8878em; vertical-align: -0.1036em; display: inline-block" class="org-latex org-latex-inline" />, <br/>
4.  <img src="/ltximg/71ad84da02e.svg" alt="\((R_1 \cup R_2)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, where <img src="/ltximg/151caa5fe09.svg" alt="\(R_1\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/5bad522735d.svg" alt="\(R_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> are regular expressions, <br/>
5.  <img src="/ltximg/17fcf4d082e.svg" alt="\((R_1 \circ R_2)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, where <img src="/ltximg/151caa5fe09.svg" alt="\(R_1\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/5bad522735d.svg" alt="\(R_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> are regular expressions, or <br/>
6.  <img src="/ltximg/5ca71dd3b78.svg" alt="\((R_1^*)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, where <img src="/ltximg/151caa5fe09.svg" alt="\(R_1\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> is a regular expression. <br/>

in items 1 and 2, the regular expressions <img src="/ltximg/942eecb938a.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/528554eb55e.svg" alt="\(\varepsilon\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> represent the languages <img src="/ltximg/e5fdabe0317.svg" alt="\(\Set{a}\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/8a5166adb9f.svg" alt="\(\Set{\varepsilon}\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, respectively. in item 3, the regular expression <img src="/ltximg/528554eb55e.svg" alt="\(\varepsilon\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> represents the empty language. in items 4,5, and 6, the expressions represent the languages obtained by taking the union or concatenation of the languages <img src="/ltximg/151caa5fe09.svg" alt="\(R_1\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/5bad522735d.svg" alt="\(R_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" />, or the star of language <img src="/ltximg/151caa5fe09.svg" alt="\(R_1\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" />, respectively. <br/>
(Michael Sipser, 2012 definition 1.52) <br/>

</div>

dont confuse the regular expressions <img src="/ltximg/528554eb55e.svg" alt="\(\varepsilon\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/edd34bd668c.svg" alt="\(\emptyset\)" style="height: 0.8878em; vertical-align: -0.1036em; display: inline-block" class="org-latex org-latex-inline" />. the expression <img src="/ltximg/528554eb55e.svg" alt="\(\varepsilon\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> represents the language containing a single string--namely, the empty string--whereas <img src="/ltximg/edd34bd668c.svg" alt="\(\emptyset\)" style="height: 0.8878em; vertical-align: -0.1036em; display: inline-block" class="org-latex org-latex-inline" /> represents the language that doesn't contain any strings. <br/>
(Michael Sipser, 2012 chapter 1 regular languages) <br/>

</div>

<div class="dummy">

like other algebras, the regular-expression operators have an assumed order of "precedence", which means that óperators are associated with their operands in a particular order. we are familiar with the notion of precedence from ordinary arithmetic expressions. for regular expressions, the following is the order of precedence for the operators: <br/>

1.  the star operator is of highest precedence. that is, it applies only to the smallest sequence of symbols to its left that is a well-formed regular expression. <br/>
2.  the concatenation operator. <br/>
3.  union <br/>

of course, sometimes we do not want the grouping in a regular expression to be as required by the precedence of the operators. If so, we are free to use parentheses to group operands exactly as we choose. In addition, there is never anything wrong with putting parentheses around operands that you want to group, even if the desired grouping is implied by the rules of precedence. <br/>
(John E. Hopcroft, Rajeev Motwani, Jeffrey D. Ullman, 2006 chapter 3.1.3 precedence of regular-expression operators) <br/>

</div>

<div class="dummy">

for _any_ languages <img src="/ltximg/c703a276b45.svg" alt="\(L,M,N\)" style="height: 0.9586em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, the following algebraic properties hold <br/>

-   associativity: <img src="/ltximg/ebc24b846b4.svg" alt="\(L+M=M+L\)" style="height: 0.8494em; vertical-align: -0.1305em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
-   _associative law for union_: <img src="/ltximg/495bc25be6d.svg" alt="\((L+M)+N=L+(M+N)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
-   _associative law for concatenation_: <img src="/ltximg/070835aa44f.svg" alt="\((LM)N=L(MN)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
-   <img src="/ltximg/e528627536d.svg" alt="\(\emptyset+L=L+\emptyset=L\)" style="height: 0.9147em; vertical-align: -0.1305em; display: inline-block" class="org-latex org-latex-inline" />. this law asserts that <img src="/ltximg/edd34bd668c.svg" alt="\(\emptyset\)" style="height: 0.8878em; vertical-align: -0.1036em; display: inline-block" class="org-latex org-latex-inline" /> is the identity for union. <br/>
-   <img src="/ltximg/89923d5c8bd.svg" alt="\(\varepsilon L=L\varepsilon=L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. this law asserts that <img src="/ltximg/528554eb55e.svg" alt="\(\varepsilon\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is the identity for concatenation. <br/>
-   <img src="/ltximg/37ea711b85b.svg" alt="\(\varepsilon L=L \varepsilon=\varepsilon\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. this law asserts that <img src="/ltximg/edd34bd668c.svg" alt="\(\emptyset\)" style="height: 0.8878em; vertical-align: -0.1036em; display: inline-block" class="org-latex org-latex-inline" /> is the annihilator for concatenation. <br/>
-   _left distributive law of concatenation over union_: <img src="/ltximg/447c6087a79.svg" alt="\(L(M+N)=LM+LN\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
-   _right distributive law of concatenation over union_: <img src="/ltximg/b5ca06c0199.svg" alt="\((M+N)L=ML+NL\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
-   _idempotence law for union_: <img src="/ltximg/8c3834c18a9.svg" alt="\(L+L=L\)" style="height: 0.8494em; vertical-align: -0.1305em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
-   <img src="/ltximg/5b7aede488a.svg" alt="\((L^*)^*=L^*\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. this law law says that closing an expression that is already closed does not change the language. <br/>
-   <img src="/ltximg/167e73df17a.svg" alt="\(\emptyset^*=\varepsilon\)" style="height: 0.8878em; vertical-align: -0.1036em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
-   <img src="/ltximg/4ff8a8316a4.svg" alt="\(\varepsilon^*=\varepsilon\)" style="height: 0.7732em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
-   <img src="/ltximg/8752c975a25.svg" alt="\(L^+=LL^*=L^*L\)" style="height: 0.8779em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
-   <img src="/ltximg/9863c200571.svg" alt="\(L^*=L^*+\varepsilon\)" style="height: 0.8545em; vertical-align: -0.1305em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
-   <img src="/ltximg/3bbd29ca324.svg" alt="\(L?=\varepsilon+L\)" style="height: 0.8548em; vertical-align: -0.1305em; display: inline-block" class="org-latex org-latex-inline" />. this rule is really the definition of the <img src="/ltximg/6de85af8735.svg" alt="\(?\)" style="height: 0.7735em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> operator. <br/>
-   <img src="/ltximg/bd773d1972d.svg" alt="\((L+M)^*=(L^*M^*)^*\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>

(John E. Hopcroft, Rajeev Motwani, Jeffrey D. Ullman, 2006 chapter 3.4 algebraic laws for regular expressions) <br/>

</div>

<div class="dummy">

(John E. Hopcroft, Rajeev Motwani, Jeffrey D. Ullman, 2006 chapter 3.4.6 discovering laws for regular expressions) <br/>

</div>

<div class="my_example">

-   the expression <img src="/ltximg/59cc41d7c4a.svg" alt="\((a \cup b) \circ a\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> denotes strings over <img src="/ltximg/af42d736449.svg" alt="\(\Set{a,b}\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> that end with <img src="/ltximg/942eecb938a.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
-   <img src="/ltximg/c7b57797dab.svg" alt="\(L(a \circ a^*)=\Set{a^n \given n \geq 1}\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
-   <img src="/ltximg/945f964f1aa.svg" alt="\(\varepsilon \in L((a \circ a)^*) = \Set{a^{2n} \given n \in N}\)" style="height: 1.1411em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
-   the expression <img src="/ltximg/8514f9cacc5.svg" alt="\((a \cup b)^* \circ a \circ a \circ (a \cup b)^*\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> denotes all the words that include the substring <img src="/ltximg/b9dfcd2d131.svg" alt="\(aa\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, i.e. <img src="/ltximg/3dca08faedd.svg" alt="\(\Set{w_1aaw_2 \given w_1,w_2 \in \Set{a,b}^*}\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
-   the expression <br/>
    <img src="/ltximg/eb8fa245e10.svg" alt="\[ (b \cup c \cup ab \cup ac)^*(a \cup \varepsilon) \]" style="height: 1.5194em; display: block" class="org-latex org-latex-block" /> <br/>
    which is equal to <br/>
    <img src="/ltximg/fd88b11b4d8.svg" alt="\[ \underbrace{(b \cup c \cup ab \cup ac)^*}_{\text{words that dont end with }a} \cup \underbrace{(b \cup c \cup ab \cup ac)^*a}_{\text{words that end with }a} \]" style="height: 2.8924em; display: block" class="org-latex org-latex-block" /> <br/>
    denotes all the strings over <img src="/ltximg/8d638e569bd.svg" alt="\(\Set{a,b,c}\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> that dont contain the substring <img src="/ltximg/b9dfcd2d131.svg" alt="\(aa\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. <br/>

</div>

<div class="dummy">

let <img src="/ltximg/89199d9d550.svg" alt="\(R\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> be any regular expression, we have the following identities <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/666a90c0a20.svg" alt="\begin{gather*}
  R \cup \emptyset = R\\
  R \circ \varepsilon = R
\end{gather*}
" style="height: 3.0972em; vertical-align: -0.4020em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

however, exchanging <img src="/ltximg/edd34bd668c.svg" alt="\(\emptyset\)" style="height: 0.8878em; vertical-align: -0.1036em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/528554eb55e.svg" alt="\(\varepsilon\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> in the preceding identities may cause the equalities to fail. <img src="/ltximg/66b3b985477.svg" alt="\(R \cup \varepsilon\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> may not equal <img src="/ltximg/89199d9d550.svg" alt="\(R\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. <img src="/ltximg/634acd590cc.svg" alt="\(R \circ \emptyset\)" style="height: 0.8878em; vertical-align: -0.1036em; display: inline-block" class="org-latex org-latex-inline" /> may not equal <img src="/ltximg/89199d9d550.svg" alt="\(R\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
(Michael Sipser, 2012 section 1.3 regular exxpressions) <br/>

</div>

<div class="my_example">

a numerical constant that may include a fractional part and/or a sign may be described as a member of the language defined by the regex <br/>
<img src="/ltximg/0a6d4d0ac1a.svg" alt="\[ (+ \cup - \cup \varepsilon)(D^+ \cup D^+ . D^* \cup D^* . D^+) \]" style="height: 1.5194em; display: block" class="org-latex org-latex-block" /> <br/>
where <img src="/ltximg/a78127fc1ca.svg" alt="\(D=\Set{0,1,2,3,4,5,6,7,8,9}\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> is the alphabet of decimal digits. examples of generated strings are: <img src="/ltximg/9e857163b19.svg" alt="\(72,3.14159,+7.,-.01\)" style="height: 0.9061em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
(Michael Sipser, 2012 chapter 1 regular languages) <br/>

</div>

<div class="dummy">

regular expressions and finite automata are equivalent in their descriptive power. this fact is surprising because finite automata and regular expressions superficially appear to be rather different. however, any regular expression can be converted into a finite automaton that recognizes the language it describes, and vice versa. <br/>

<div class="theorem" id="the-finite-automata-equiv-regex">

a language is regular if and only if some regular expression describes it. <br/>

</div>

(Michael Sipser, 2012 chapter 1 regular languages) <br/>

</div>

[automata theory course homework 4](../20240113T084559--automata-theory-course-homework-4__cs_math.md) for more practice problems <br/>

<div class="my_example">

<div class="problem">

let <img src="/ltximg/7c012388408.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> be a regular language, we define <img src="/ltximg/8531524f966.svg" alt="\(L'\)" style="height: 0.8351em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />: <br/>
<img src="/ltximg/c4937417ff2.svg" alt="\[ L' = \Set{w \given w \in L \land ww \in L}. \]" style="height: 1.5194em; display: block" class="org-latex org-latex-block" /> <br/>
show that <img src="/ltximg/8531524f966.svg" alt="\(L'\)" style="height: 0.8351em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is a regular language <br/>

</div>

<div class="solution">

we construct the language <img src="/ltximg/0f391a5f17a.svg" alt="\(L'' = \Set{ss \given s \in \Sigma^*}\)" style="height: 1.0801em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> which is recognized by the regex <img src="/ltximg/c6f3a68dbce.svg" alt="\((\Sigma^*)^2\)" style="height: 1.1411em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. since we know regular languages are closed under intersection and complementation, we conclude that <img src="/ltximg/7009e9bbcde.svg" alt="\(L''\)" style="height: 0.8351em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is a regular language because <img src="/ltximg/9d35cc80476.svg" alt="\(L' = L \cap L'' \setminus L\)" style="height: 1.0801em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>

</div>

how would we do this without the context of regex? <br/>

</div>

