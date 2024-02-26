+++
title = "regular expression"
author = ["mahmood"]
tags = ["math"]
draft = false
+++

<div class="note">

regular expressions differ in syntax from one context to another, and the theory behind them is vaster than i had thought, they are usually studied in [automata theory](20231116T143632--automata-theory__.org). <br/>

</div>

<div class="dummy" id="blk-regular-operations">

the operators of regular expressions make use of the following 3 operations on [language](20231116T134552--language__math.org)s: <br/>

1.  [union of languages](20231118T083709--union-of-languages__math.org) <br/>
2.  [concatenation of languages](20231118T083605--language-concatenation__math.org) <br/>
3.  [closure of a language](20231118T083911--language-closure__math.org) <br/>

we call them the _regular operations_, [regular language](20231201T201245--regular-language__math.org)s are [closed under](20230920T201339--closure-under-operation__.org) each one of them. <br/>
(John E. Hopcroft, Rajeev Motwani, Jeffrey D. Ullman, 2006 definition 1.23) <br/>

</div>

regular expressions are defined [inductively](20220707T193301--induction__math.org): <br/>

<div class="definition">

<img src="/ltximg/85d71a7354e.svg" alt="\textsc{BASIS}" style="height: 0.7530em; vertical-align: -0.0590em; display: inline-block" class="org-latex org-latex-inline" />: the basis consists of three parts: <br/>

1.  the constants <img src="/ltximg/1e532657953.svg" alt="\(\varepsilon\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/3bf2bc24260.svg" alt="\(\emptyset\)" style="height: 0.8878em; vertical-align: -0.1036em; display: inline-block" class="org-latex org-latex-inline" /> are _regular expressions_, denoting the [language](20231116T134552--language__math.org)s <img src="/ltximg/1e532657953.svg" alt="\(\varepsilon\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/3bf2bc24260.svg" alt="\(\emptyset\)" style="height: 0.8878em; vertical-align: -0.1036em; display: inline-block" class="org-latex org-latex-inline" />, respectively. that is, <img src="/ltximg/639fda67def.svg" alt="\(L(\varepsilon)=\{\varepsilon\}\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, and <img src="/ltximg/c51514eed6e.svg" alt="\(L(\emptyset)=\emptyset\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
2.  if <img src="/ltximg/863aaa5b4e8.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is any [symbol](20240205T193014--symbol__.org), then <img src="/ltximg/26c23b13554.svg" alt="\(\brm{a}\)" style="height: 0.5224em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is a regular expression. this expression denotes the language <img src="/ltximg/cfcae6ce699.svg" alt="\(\{a\}\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. that is, <img src="/ltximg/9ba8514b194.svg" alt="\(L(\brm{a})=\{a\}\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. note that we use boldface font to denote an expression corresponding to a symbol. the correspondence, e.g. that <img src="/ltximg/26c23b13554.svg" alt="\(\brm{a}\)" style="height: 0.5224em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> refers to <img src="/ltximg/863aaa5b4e8.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, should be obvious. <br/>
3.  a variable, usually capitalized and italic such as <img src="/ltximg/79e36567062.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, is a variable, representing any language. <br/>

<img src="/ltximg/e6fccbe633d.svg" alt="\textsc{INDUCTION}" style="height: 0.7530em; vertical-align: -0.0590em; display: inline-block" class="org-latex org-latex-inline" />: there are four parts to the [inductive](20220707T193301--induction__math.org) step, one for each of the three operators and one for the introduction of parentheses. <br/>

1.  if <img src="/ltximg/fdde28263f0.svg" alt="\(E\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/73b71f90303.svg" alt="\(F\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> are regular expressions, then <img src="/ltximg/92f6f536ef9.svg" alt="\(E+F\)" style="height: 0.8494em; vertical-align: -0.1305em; display: inline-block" class="org-latex org-latex-inline" /> is a regular expression denoting the [union](20240201T172745--binomial-heap__math.org) of <img src="/ltximg/148da6d7f37.svg" alt="\(L(E)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/7436213bb07.svg" alt="\(L(F)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. that is, <img src="/ltximg/80346c7b16d.svg" alt="\(L(E+F)=L(E)\cup L(F)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
2.  if <img src="/ltximg/fdde28263f0.svg" alt="\(E\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/73b71f90303.svg" alt="\(F\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> are regular expressions, then <img src="/ltximg/d961864584b.svg" alt="\(EF\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is regular expression denoting the [concatenation](20231116T220745--concatenation__math.org) of <img src="/ltximg/148da6d7f37.svg" alt="\(L(E)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/7436213bb07.svg" alt="\(L(F)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. that is, <img src="/ltximg/03e455807e5.svg" alt="\(L(EF)=L(E)L(F)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
3.  if <img src="/ltximg/fdde28263f0.svg" alt="\(E\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is a regular expression, then <img src="/ltximg/bfd1bac5ad8.svg" alt="\(E^*\)" style="height: 0.7732em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is a regular expression, denoting the closure of <img src="/ltximg/148da6d7f37.svg" alt="\(L(E)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. that is, <img src="/ltximg/e9e0e2c2f67.svg" alt="\(L(E^*)=(L(E))^*\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
4.  if <img src="/ltximg/fdde28263f0.svg" alt="\(E\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is a regular expression, then <img src="/ltximg/518979923cc.svg" alt="\((E)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, a parenthesized <img src="/ltximg/fdde28263f0.svg" alt="\(E\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, is also a regular expression, denoting the same language as <img src="/ltximg/fdde28263f0.svg" alt="\(E\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. formally; <img src="/ltximg/fcec26562b4.svg" alt="\(L((E))=L(E)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>

(John E. Hopcroft, Rajeev Motwani, Jeffrey D. Ullman, 2006 section 3.1.2) <br/>

</div>

for convenience, we let <img src="/ltximg/b1f674f6e7c.svg" alt="\(R^+\)" style="height: 0.8779em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> be a shorthand for <img src="/ltximg/2e024d9de97.svg" alt="\(RR^*\)" style="height: 0.7732em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. <br/>

<div class="dummy">

1.  the [star](20231118T083911--language-closure__math.org) operator is of highest precedence. that is, it applies only to the smallest sequence of symbols to its left that is a well-formed regular expression. <br/>
2.  next in precedence comes the concatenation or "dot" operator. after grouping all stars to their operands, we group concatenation operators to their operands. that is, all expressions that are juxtaposed (adjacent, with no intervening operator) are grouped together. since concatenation is an associative operator it does not matter in what order we group consecutive concatenations, although if there is a choice to be made, you should group them from the left. for instance, 012 is grouped (01)2. <br/>
3.  finally, all unions (+ operators) are grouped with their operands. since union is also [associative](20220923T212917--associativity__math.org), it again matters little in which order consecutive unions are grouped, but we shall assume grouping from the left. <br/>

of course, sometimes we do not want the grouping in a regular expression to be as required by the precedence of the operators. if so, we are free to use parentheses to group operands exactly as we choose. in addition, there is never anything wrong with putting parentheses around operands that you want to group, even if the desired grouping is implied by the rules of precedence. <br/>
(John E. Hopcroft, Rajeev Motwani, Jeffrey D. Ullman, 2006 section 3.1.3) <br/>

</div>

<div class="dummy">

<div class="definition" id="def-regex">

say that <img src="/ltximg/7e3ad75fb8e.svg" alt="\(R\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is a _regular expression_ if <img src="/ltximg/7e3ad75fb8e.svg" alt="\(R\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is <br/>

1.  <img src="/ltximg/863aaa5b4e8.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> for some <img src="/ltximg/863aaa5b4e8.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> in the [alphabet](20231115T204202--alphabet__math.org) <img src="/ltximg/4ddbce7ed65.svg" alt="\(\Sigma\)" style="height: 0.7735em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, <br/>
2.  <img src="/ltximg/1e532657953.svg" alt="\(\varepsilon\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, <br/>
3.  <img src="/ltximg/3bf2bc24260.svg" alt="\(\emptyset\)" style="height: 0.8878em; vertical-align: -0.1036em; display: inline-block" class="org-latex org-latex-inline" />, <br/>
4.  <img src="/ltximg/03debb4dbda.svg" alt="\((R_1 \cup R_2)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, where <img src="/ltximg/32c5fc73889.svg" alt="\(R_1\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/8fa7e04312d.svg" alt="\(R_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> are regular expressions, <br/>
5.  <img src="/ltximg/b597f5238e0.svg" alt="\((R_1 \circ R_2)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, where <img src="/ltximg/32c5fc73889.svg" alt="\(R_1\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/8fa7e04312d.svg" alt="\(R_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> are regular expressions, or <br/>
6.  <img src="/ltximg/40909a50d56.svg" alt="\((R_1^*)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, where <img src="/ltximg/32c5fc73889.svg" alt="\(R_1\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> is a regular expression. <br/>

in items 1 and 2, the regular expressions <img src="/ltximg/863aaa5b4e8.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/1e532657953.svg" alt="\(\varepsilon\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> represent the languages <img src="/ltximg/cf438f54be6.svg" alt="\(\Set{a}\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/d5ad263bf97.svg" alt="\(\Set{\varepsilon}\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />, respectively. in item 3, the regular expression <img src="/ltximg/1e532657953.svg" alt="\(\varepsilon\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> represents the empty language. in items 4,5, and 6, the expressions represent the languages obtained by taking the union or concatenation of the languages <img src="/ltximg/32c5fc73889.svg" alt="\(R_1\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/8fa7e04312d.svg" alt="\(R_2\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" />, or the star of language <img src="/ltximg/32c5fc73889.svg" alt="\(R_1\)" style="height: 0.9150em; vertical-align: -0.1962em; display: inline-block" class="org-latex org-latex-inline" />, respectively. <br/>
(Michael Sipser, 2012 definition 1.52) <br/>

</div>

dont confuse the regular expressions <img src="/ltximg/1e532657953.svg" alt="\(\varepsilon\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/3bf2bc24260.svg" alt="\(\emptyset\)" style="height: 0.8878em; vertical-align: -0.1036em; display: inline-block" class="org-latex org-latex-inline" />. the expression <img src="/ltximg/1e532657953.svg" alt="\(\varepsilon\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> represents the language containing a single string--namely, the empty string--whereas <img src="/ltximg/3bf2bc24260.svg" alt="\(\emptyset\)" style="height: 0.8878em; vertical-align: -0.1036em; display: inline-block" class="org-latex org-latex-inline" /> represents the language that doesn't contain any strings. <br/>
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

for _any_ languages <img src="/ltximg/9d67ee9af07.svg" alt="\(L,M,N\)" style="height: 0.9586em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />, the following [algebraic properties](20240120T194140--algebraic-properties__.org) hold <br/>

-   [associativity](20220923T212917--associativity__math.org): <img src="/ltximg/069381c2c81.svg" alt="\(L+M=M+L\)" style="height: 0.8494em; vertical-align: -0.1305em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
-   _associative law for [union](20240201T172745--binomial-heap__math.org)_: <img src="/ltximg/248d2242f68.svg" alt="\((L+M)+N=L+(M+N)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
-   _associative law for [concatenation](20231116T220745--concatenation__math.org)_: <img src="/ltximg/76d458c405b.svg" alt="\((LM)N=L(MN)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
-   <img src="/ltximg/7be955f72ac.svg" alt="\(\emptyset+L=L+\emptyset=L\)" style="height: 0.9147em; vertical-align: -0.1305em; display: inline-block" class="org-latex org-latex-inline" />. this law asserts that <img src="/ltximg/3bf2bc24260.svg" alt="\(\emptyset\)" style="height: 0.8878em; vertical-align: -0.1036em; display: inline-block" class="org-latex org-latex-inline" /> is the [identity](20231117T192846--identity__.org) for union. <br/>
-   <img src="/ltximg/d68b3bd7476.svg" alt="\(\varepsilon L=L\varepsilon=L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. this law asserts that <img src="/ltximg/1e532657953.svg" alt="\(\varepsilon\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is the identity for concatenation. <br/>
-   <img src="/ltximg/037570ddef8.svg" alt="\(\varepsilon L=L \varepsilon=\varepsilon\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. this law asserts that <img src="/ltximg/3bf2bc24260.svg" alt="\(\emptyset\)" style="height: 0.8878em; vertical-align: -0.1036em; display: inline-block" class="org-latex org-latex-inline" /> is the annihilator for concatenation. <br/>
-   _left [distributive](20220923T212922--distributive__.org) law of concatenation over union_: <img src="/ltximg/59cad11fb83.svg" alt="\(L(M+N)=LM+LN\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
-   _right distributive law of concatenation over union_: <img src="/ltximg/f24040a3870.svg" alt="\((M+N)L=ML+NL\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
-   _[idempotence](20231117T192919--idempotency__.org) law for union_: <img src="/ltximg/a661a8a72f1.svg" alt="\(L+L=L\)" style="height: 0.8494em; vertical-align: -0.1305em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
-   <img src="/ltximg/ef1fccbdef8.svg" alt="\((L^*)^*=L^*\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. this law law says that closing an expression that is already closed does not change the language. <br/>
-   <img src="/ltximg/c91282fddda.svg" alt="\(\emptyset^*=\varepsilon\)" style="height: 0.8878em; vertical-align: -0.1036em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
-   <img src="/ltximg/57623558015.svg" alt="\(\varepsilon^*=\varepsilon\)" style="height: 0.7732em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
-   <img src="/ltximg/e6343161431.svg" alt="\(L^+=LL^*=L^*L\)" style="height: 0.8779em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
-   <img src="/ltximg/ccc9269a0b4.svg" alt="\(L^*=L^*+\varepsilon\)" style="height: 0.8545em; vertical-align: -0.1305em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
-   <img src="/ltximg/4e96ab05f58.svg" alt="\(L?=\varepsilon+L\)" style="height: 0.8548em; vertical-align: -0.1305em; display: inline-block" class="org-latex org-latex-inline" />. this rule is really the definition of the <img src="/ltximg/760190d4f62.svg" alt="\(?\)" style="height: 0.7735em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> operator. <br/>
-   <img src="/ltximg/28f1e35b738.svg" alt="\((L+M)^*=(L^*M^*)^*\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>

(John E. Hopcroft, Rajeev Motwani, Jeffrey D. Ullman, 2006 chapter 3.4 algebraic laws for regular expressions) <br/>

</div>

<div class="dummy">

(John E. Hopcroft, Rajeev Motwani, Jeffrey D. Ullman, 2006 chapter 3.4.6 discovering laws for regular expressions) <br/>

</div>

<div class="my_example">

-   the expression <img src="/ltximg/24c5afed618.svg" alt="\((a \cup b) \circ a\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> denotes strings over <img src="/ltximg/e880b947ec2.svg" alt="\(\Set{a,b}\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> that end with <img src="/ltximg/863aaa5b4e8.svg" alt="\(a\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
-   <img src="/ltximg/f36dbebed8f.svg" alt="\(L(a \circ a^*)=\Set{a^n \given n \geq 1}\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
-   <img src="/ltximg/3a5444e8038.svg" alt="\(\varepsilon \in L((a \circ a)^*) = \Set{a^{2n} \given n \in N}\)" style="height: 1.1411em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
-   the expression <img src="/ltximg/f660a014506.svg" alt="\((a \cup b)^* \circ a \circ a \circ (a \cup b)^*\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> denotes all the words that include the substring <img src="/ltximg/c344a2a7aae.svg" alt="\(aa\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, i.e. <img src="/ltximg/566e2490885.svg" alt="\(\Set{w_1aaw_2 \given w_1,w_2 \in \Set{a,b}^*}\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
-   the expression <br/>
    <img src="/ltximg/ee241bc4f29.svg" alt="\[ (b \cup c \cup ab \cup ac)^*(a \cup \varepsilon) \]" style="height: 1.5194em; display: block" class="org-latex org-latex-block" /> <br/>
    which is equal to <br/>
    <img src="/ltximg/c31bad63ca2.svg" alt="\[ \underbrace{(b \cup c \cup ab \cup ac)^*}_{\text{words that dont end with }a} \cup \underbrace{(b \cup c \cup ab \cup ac)^*a}_{\text{words that end with }a} \]" style="height: 2.8924em; display: block" class="org-latex org-latex-block" /> <br/>
    denotes all the strings over <img src="/ltximg/c785b315511.svg" alt="\(\Set{a,b,c}\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> that dont contain the substring <img src="/ltximg/c344a2a7aae.svg" alt="\(aa\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. <br/>

</div>

<div class="dummy">

let <img src="/ltximg/7e3ad75fb8e.svg" alt="\(R\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> be any regular expression, we have the following identities <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/c8341a5b398.svg" alt="\begin{gather*}
  R \cup \emptyset = R\\
  R \circ \varepsilon = R
\end{gather*}
" style="height: 3.0972em; vertical-align: -0.4020em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

however, exchanging <img src="/ltximg/3bf2bc24260.svg" alt="\(\emptyset\)" style="height: 0.8878em; vertical-align: -0.1036em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/1e532657953.svg" alt="\(\varepsilon\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> in the preceding identities may cause the equalities to fail. <img src="/ltximg/5324005e414.svg" alt="\(R \cup \varepsilon\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> may not equal <img src="/ltximg/7e3ad75fb8e.svg" alt="\(R\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. <img src="/ltximg/d33f5ffdccb.svg" alt="\(R \circ \emptyset\)" style="height: 0.8878em; vertical-align: -0.1036em; display: inline-block" class="org-latex org-latex-inline" /> may not equal <img src="/ltximg/7e3ad75fb8e.svg" alt="\(R\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
(Michael Sipser, 2012 section 1.3 regular exxpressions) <br/>

</div>

<div class="my_example">

a numerical constant that may include a fractional part and/or a sign may be described as a member of the language defined by the regex <br/>
<img src="/ltximg/fefc499cf23.svg" alt="\[ (+ \cup - \cup \varepsilon)(D^+ \cup D^+ . D^* \cup D^* . D^+) \]" style="height: 1.5194em; display: block" class="org-latex org-latex-block" /> <br/>
where <img src="/ltximg/c306830ef24.svg" alt="\(D=\Set{0,1,2,3,4,5,6,7,8,9}\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> is the alphabet of decimal digits. examples of generated strings are: <img src="/ltximg/6d911f0b45b.svg" alt="\(72,3.14159,+7.,-.01\)" style="height: 0.9061em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />. <br/>
(Michael Sipser, 2012 chapter 1 regular languages) <br/>

</div>

<div class="dummy">

regular expressions and finite automata are equivalent in their descriptive power. this fact is surprising because finite automata and regular expressions superficially appear to be rather different. however, any regular expression can be converted into a finite automaton that recognizes the language it describes, and vice versa. <br/>

<div class="theorem" id="the-finite-automata-equiv-regex">

a language is regular if and only if some regular expression describes it. <br/>

</div>

(Michael Sipser, 2012 chapter 1 regular languages) <br/>

</div>

[automata theory course homework 4](20240113T084559--automata-theory-course-homework-4__cs_math.org) for more practice problems <br/>

<div class="my_example">

<div class="problem">

let <img src="/ltximg/79e36567062.svg" alt="\(L\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> be a regular language, we define <img src="/ltximg/4117b8165d5.svg" alt="\(L'\)" style="height: 0.8351em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />: <br/>
<img src="/ltximg/04fef66d009.svg" alt="\[ L' = \Set{w \given w \in L \land ww \in L}. \]" style="height: 1.5194em; display: block" class="org-latex org-latex-block" /> <br/>
show that <img src="/ltximg/4117b8165d5.svg" alt="\(L'\)" style="height: 0.8351em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is a regular language <br/>

</div>

<div class="solution">

we construct the language <img src="/ltximg/af29b1ba2c0.svg" alt="\(L'' = \Set{ss \given s \in \Sigma^*}\)" style="height: 1.0801em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> which is recognized by the regex <img src="/ltximg/e281284a0f3.svg" alt="\((\Sigma^*)^2\)" style="height: 1.1411em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. since we know regular languages are closed under intersection and complementation, we conclude that <img src="/ltximg/694b20da67f.svg" alt="\(L''\)" style="height: 0.8351em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is a regular language because <img src="/ltximg/61f1b6deba1.svg" alt="\(L' = L \cap L'' \setminus L\)" style="height: 1.0801em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. <br/>

</div>

how would we do this without the context of regex? <br/>

</div>

