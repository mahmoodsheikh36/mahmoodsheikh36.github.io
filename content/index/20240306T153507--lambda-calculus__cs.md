+++
title = "lambda calculus"
author = ["mahmood"]
date = 2024-03-06T15:35:00+02:00
tags = ["cs"]
draft = false
+++

<div class="dummy">

the _<img src="/ltximg/8e8d33fa109.svg" alt="\(\lambda\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />-calculus_ consists of a [set](20240205T193039--set__math.org) of objects called <img src="/ltximg/8e8d33fa109.svg" alt="\(\lambda\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />-terms and some rules for manipulating them. it was originally designed to capture formally the notions of functional abstraction and functional application and their interaction. <br/>
the <img src="/ltximg/8e8d33fa109.svg" alt="\(\lambda\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />-calculus has had a profound impact on computing. one can see the basic principles of the <img src="/ltximg/8e8d33fa109.svg" alt="\(\lambda\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />-calculus at work in the functional programming language [lisp](20230215T220838--lisp__.org) and its more modern offspring SCHEME and DYLAN. <br/>
in mathematics, <img src="/ltximg/8e8d33fa109.svg" alt="\(\lambda\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />-notation is commonly used to represent functions. the expression <img src="/ltximg/4eec08677eb.svg" alt="\(\lambda x.E(x)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> denotes a [function](20231111T073425--function__math.org) that on input <img src="/ltximg/264a89f023b.svg" alt="\(x\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> computes <img src="/ltximg/84d15d078e8.svg" alt="\(E(x)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. to apply this function to an input, one substitutes the input for the variable <img src="/ltximg/264a89f023b.svg" alt="\(x\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> in the body <img src="/ltximg/84d15d078e8.svg" alt="\(E(x)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> and evaluates the resulting expression. <br/>
for example, the expression <br/>
<img src="/ltximg/b790b264a83.svg" alt="\[ \lambda x.(x + 1) \]" style="height: 1.5194em; display: block" class="org-latex org-latex-block" /> <br/>
might be used to denote the successor function on [natural number](20240205T193006--natural-number__math.org)s. to apply this function to the input 7, we would substitute 7 for <img src="/ltximg/264a89f023b.svg" alt="\(x\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> in the body and evaluate: <br/>
<img src="/ltximg/533910917a2.svg" alt="\[ (\lambda x.(x + 1))7 \to 7 + 1 = 8. \]" style="height: 1.5194em; display: block" class="org-latex org-latex-block" /> <br/>
in the programming language DYLAN, one would write <br/>

```dylan
(method (x) (+ x 1))
```

for the same thing. the keyword `method` is really <img src="/ltximg/8e8d33fa109.svg" alt="\(\lambda\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> in disguise. if you typed <br/>

```dylan
((method (x) (+ x 1)) 7)
```

at a DYLAN interpreter, it would print out 8. <br/>
for another example, the expression <br/>
<img src="/ltximg/34ed18776f7.svg" alt="\[ \lambda x.f(gx) \]" style="height: 1.5194em; display: block" class="org-latex org-latex-block" /> <br/>
denotes the composition of the functions <img src="/ltximg/36fbd7e1276.svg" alt="\(f\)" style="height: 0.9695em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/2631cefd988.svg" alt="\(g\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />; that is, the function that on input <img src="/ltximg/264a89f023b.svg" alt="\(x\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> applies <img src="/ltximg/2631cefd988.svg" alt="\(g\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> to <img src="/ltximg/264a89f023b.svg" alt="\(x\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />, then applies <img src="/ltximg/36fbd7e1276.svg" alt="\(f\)" style="height: 0.9695em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> to the result. the expression <br/>


<div id="orgd6550ed" class="equation-container">
<span class="equation">
<img src="/ltximg/6a846c18278.svg" alt="\begin{equation}
   \lambda f.\lambda g.\lambda x.f(gx)
\end{equation}
" style="height: 1.5194em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

denotes the function that takes functions <img src="/ltximg/36fbd7e1276.svg" alt="\(f\)" style="height: 0.9695em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> and <img src="/ltximg/2631cefd988.svg" alt="\(g\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> as input and gives back their composition <img src="/ltximg/60626b76130.svg" alt="\(\lambda x.f(gx)\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" />. In DYLAN one would write <br/>

```dylan
(method (f)
  (method (g)
    (method (x) (f (g x)))))
```

to see how this works, let's apply eq-lambda-calc-1 to the [successor function](20231103T123236--increment__math.org) twice. <br/>
we use different variables in the successor functions below for clarity. the symbol <img src="/ltximg/029315f765c.svg" alt="\(\to\)" style="height: 0.4579em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> denotes one substitution step. <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/f2c0b0dd6fb.svg" alt="\begin{align*}
  &amp;amp;(\lambda f.\lambda g.\lambda x.(f(gx)))(\lambda y.(y+1))(\lambda z.(z+1)) &amp;amp;\text{substitute } \lambda y.(y+1) \text{ for } f\\
  &amp;amp;\to(\lambda g.\lambda x.((\lambda y.(y+1))(gx)))(\lambda z.(z+1)) &amp;amp; \text{substitute } \lambda z.(z+1) \text{ for } g\\
  &amp;amp;\to\lambda x.((\lambda y.(y+1))((\lambda z.(z+1))x)) &amp;amp; \text{substitute } x \text{ for } z\\
  &amp;amp;\to\lambda x.((\lambda y.(y+1))(x+1)) &amp;amp; \text{substitute } x+1 \text{ for } y\\
  &amp;amp;\to\lambda x.((x+1)+1)
\end{align*}
" style="height: 7.5072em; vertical-align: -0.4020em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

we could have substituted <img src="/ltximg/6c1dfafe67c.svg" alt="\(gx\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> for <img src="/ltximg/73a97ac470e.svg" alt="\(y\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> in the second step or <img src="/ltximg/aa374fee0bb.svg" alt="\((\lambda z.(z+1))x\)" style="height: 1.0784em; vertical-align: -0.2942em; display: inline-block" class="org-latex org-latex-inline" /> for <img src="/ltximg/73a97ac470e.svg" alt="\(y\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> in the third; we would have arrived at the same final result. <br/>
functions represented by <img src="/ltximg/8e8d33fa109.svg" alt="\(\lambda\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />-terms have only one input. a function with two inputs <img src="/ltximg/99f19d75c7b.svg" alt="\(x,y\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> that returns a value <img src="/ltximg/bfb79e58d2f.svg" alt="\(M\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> is modeled by a function with one input <img src="/ltximg/264a89f023b.svg" alt="\(x\)" style="height: 0.5203em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> that returns a function with one input <img src="/ltximg/73a97ac470e.svg" alt="\(y\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" /> that returns a value <img src="/ltximg/bfb79e58d2f.svg" alt="\(M\)" style="height: 0.7680em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />. The technical term for this trick is currying (after Haskell B. Curry). <br/>
(copied from Dexter C. Kozen, 1997 lecture 37) <br/>

</div>

