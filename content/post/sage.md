+++
title = "sagemath"
author = ["mahmood"]
description = "sagemath"
date = 2022-09-15T00:18:00+03:00
tags = ["program"]
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

video demonstrating sagemath+org-mode workflow: <br/>
<https://www.youtube.com/watch?v=cd4_O3TqArs> <br/>

</div>

sagemath is an open source alternative to Mathematica written in python, it preparses python code to allow for extra syntactic sugars <br/>
its basically a python interface to a collection of mathematical software like Maxima/sympy <br/>


## <span class="section-num">1</span> plotting {#plotting}


### <span class="section-num">1.1</span> area below functions {#area-below-functions}

```sage
interval = [1, 8.5]
interval_fill = [2, 8]
f(x) = (x-3)*(x-5)*(x-7)+40
import os.path

try: _ = open_left
except: open_left = False
try: _ = open_right
except: open_right = False

if not open_left:
  my_plot = line([(interval_fill[0],0),(interval_fill[0],f(interval_fill[0]))], color='black')
if not open_right:
  my_plot += line([(interval_fill[1], 0),(interval_fill[1], f(interval_fill[1]))], color='black')
my_plot += plot(f, (interval_fill[0], interval_fill[1]), fill=True) + plot(f, (interval[0], interval[1]), thickness=2)
my_plot.save(filename=os.path.expanduser(filename), transparent=True)
print(os.path.expanduser(filename))

open_left = False
open_right = False
```

{{< figure src="/ox-hugo/Mqv2WA.svg" >}} <br/>

```sage
interval = [2, 8.5]
interval_fill = [3, 8]
f(x) = 1/x^2
import os.path

try: _ = open_left
except: open_left = False
try: _ = open_right
except: open_right = False

if not open_left:
  my_plot = line([(interval_fill[0],0),(interval_fill[0],f(interval_fill[0]))], color='black')
if not open_right:
  my_plot += line([(interval_fill[1], 0),(interval_fill[1], f(interval_fill[1]))], color='black')
my_plot += plot(f, (interval_fill[0], interval_fill[1]), fill=True) + plot(f, (interval[0], interval[1]), thickness=2)
my_plot.save(filename=os.path.expanduser(filename), transparent=True)
print(os.path.expanduser(filename))

open_left = False
open_right = False
```

{{< figure src="/ox-hugo/c4XFj9.png" >}} <br/>


### <span class="section-num">1.2</span> solid of revolution {#solid-of-revolution}

consider the solid of revolution of the function \\(e^x\\) rotated around the \\(y\\) axis <br/>

```sage
my_plot = revolution_plot3d(e^x, (x,0,1), show_curve=True, parallel_axis='z', figsize=5)

```

<iframe style="width: 100%; height: 4in" src="/more/IKj0Gj.html"></iframe>


### <span class="section-num">1.3</span> parametric 3d plot {#parametric-3d-plot}

```sage
my_plot = parametric_plot3d([cos(x),sin(x),x/10], (x,0,4*pi), color='red', viewer='threejs')

```

<iframe style="width: 100%; height: 4in" src="/more/G5rZlG.html"></iframe>


### <span class="section-num">1.4</span> more {#more}

```sage
x,y,z = var('x,y,z')
f(x,y,z)=x^2+y^2+z^2/4
my_plot = Graphics()
for k in [1,2,3,4]:
    my_plot += implicit_plot3d(f(x,y,z)==k,(x,-2,2),(y,-2,2),(z,-5,5),opacity=0.4)

```

<iframe style="width: 100%; height: 4in" src="/more/ZZcUa4.html"></iframe>


### <span class="section-num">1.5</span> animation {#animation}

```sage
def build_frame(t):
    e = parametric_plot3d([sin(x-t), 0, x], (x, 0, 2*pi), color='red')
    m = parametric_plot3d([0, -sin(x-t), x], (x, 0, 2*pi), color='green')
    return e + m
frames = [build_frame(t) for t in (0, pi/32, pi/16, .., 2*pi)]
my_plot = animate(frames).interactive()

```

<iframe style="width: 100%; height: 4in" src="/more/oB72QW.html"></iframe>

```sage
sines = [plot(c*sin(x), (-2*pi,2*pi), color=Color(c,0,0), ymin=-1, ymax=1,transparent=False) for c in sxrange(0,1,.1)]
a = animate(sines)
a.save(f)
print(f)
```

{{< figure src="/ox-hugo/IRCODD.gif" >}} <br/>

```sage
sin_frames = []
circ_frames = []
circ_x = -1.5 # offset center of the circle
circ_y = 0
for i in srange(0,2*pi,0.2):
    singraph = point((i,sin(i)), color="green", size=50)
    singraph += plot(sin(x),(0,2*pi), xmin=0, xmax=7, ymin=-1, ymax=1, figsize=[2,2], axes=False)
    unitcircle = point((cos(i)+circ_x,sin(i)+circ_y), color="green", size=50)
    unitcircle += circle((circ_x,circ_y),1, color="blue", figsize=[2,2], axes=False)
    sin_frames.append(singraph)
    circ_frames.append(unitcircle)
A1 = animate(sin_frames)
A2 = animate(circ_frames)
(A1 + A2).save(f)
print(f)
```

{{< figure src="/ox-hugo/Sg63BY.gif" >}} <br/>

```sage
f(x) = 5*x - x^2/8 + x^3/1200
df(x) = diff(f(x),x)
max = 100
p = plot(f(x),x,0,max)
lblp = text("$y = " + latex(f(x)) + "$",[40,100],fontsize=14)
lbldp = text("$y' = " + latex(df(x)) + "$",[40,80],fontsize=14,rgbcolor='#006000')
ga = []
for argx in srange(0,max,5):
  dp = plot(f(argx) + (df(argx)*(x-argx)),x,0,max,color="#006000")
  xp = point((argx,f(argx)),rgbcolor='#800000')    
  ga.append(p+lblp+lbldp+dp+xp)
a = animate(ga,ymin=0,ymax=max,axes_labels=['x','y'],fontsize=12,figsize=(4,3))
a.save(out_file)
print(out_file)
```

{{< figure src="/ox-hugo/yAyHE1.gif" >}} <br/>


### <span class="section-num">1.6</span> area between functions {#area-between-functions}

```sage
f(x) = -1/8*x^3+x
g(x) = 1/2*x
h(x) = 1/4*x^2
my_plot = plot([f,g,h],-2,3,fill={0:g,1:h,2:0})

```

{{< figure src="/more/9s9RNl.png" >}} <br/>


### <span class="section-num">1.7</span> more filling {#more-filling}

```sage
my_plot = plot(1.13*log(x), 1, 100, fill = lambda a: nth_prime(a)/floor(a), fillcolor = 'red')

```

{{< figure src="/more/efTJka.png" >}} <br/>

```sage
#plot(x,(x,0,1),fill=x^2)
my_plot = plot([x,x^2],(x,-0.5,1),fill={0:[1]})

```

{{< figure src="/more/gYDdhB.png" >}} <br/>


## <span class="section-num">2</span> examples {#examples}


### <span class="section-num">2.1</span> recursive sum with sage {#recursive-sum-with-sage}

this also shows a limitation of sagemath's, i thought something as simple as a quick 1-liner <br/>
using the sum function would do the job <br/>

```sage
def ev(self, x):
  if x == 0:
    return 1
  else:
    return 1 + sum(self(j) for j in range(x))
f = function("f", nargs=1, eval_func=ev)
[f(i) for i in range(12)]
```

[1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048] <br/>


### <span class="section-num">2.2</span> recursive sum but pure python {#recursive-sum-but-pure-python}

```python
def f(n):
  if n == 0:
    return 1
  else:
    total_sum = 0
    for i in range(n):
      total_sum += f(i)
    return total_sum + 1
print([f(i) for i in range(12)])
```

```text
[1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048]
```


### <span class="section-num">2.3</span> vectors of variables {#vectors-of-variables}

```sage
b = list(var("b", n=8, latex_name='\\overline{x}'))
b[0]=123
show(b)
```

[123, b1, b2, b3, b4, b5, b6, b7] <br/>


### <span class="section-num">2.4</span> indexed variables {#indexed-variables}

consider the following summation: <br/>

\\[ \sum\_{i=1}^{k} a\_i \cdot d = \dfrac{k}{2}[2a\_1 + (k - 1)d] \\] <br/>

here \\(a\_i\\) is always dependant on the index \\(i\\) and we cant define a variable number of variables <br/>
so we define \\(a\\) as a function of \\(i\\) <br/>

```sage
a = function("a")
d = var("d")
j, i, k = var("j, i, k", domain="integer")
S = sum(a(j)*d, j, 1, k+1)
S(j=10)
```

d\*sum(a(10), 10, 1, k + 1) <br/>


### <span class="section-num">2.5</span> symbolic functions {#symbolic-functions}

just like you can define a symbolic variable, you can also define yet-unknown functions! <br/>

```sage
T = var('T')
a = function('a')
R = var('R')
v = var('v')
b = var('b')
p = R*T/v - a(T)/v/(v+b)
diff(p, T)
```

R/v - diff(a(T), T)/((b + v)\*v) <br/>


### <span class="section-num">2.6</span> boolean functions {#boolean-functions}

```sage
from sage.crypto.boolean_function import BooleanFunction
f = BooleanFunction([0,0,0,1,0,1,1,1])
f.truth_table()
f.linear_structures().list()
```

```sage
from sage.crypto.boolean_function import BooleanFunction
B.<a, y> = BooleanPolynomialRing()
f = BooleanFunction(-a*-y)
f2 = BooleanFunction([1,0,0,0])
f.algebraic_normal_form()
f2.truth_table()
f.truth_table()
[[f(i), f2(i)] for i in range(4)]
```


## <span class="section-num">3</span> limitations {#limitations}

consider the following equation: <br/>

\\[ t = x^2 + 5 \\] <br/>

we use this kind of equation when integrating by substituion <br/>

unfortunately sagemath cant derivate this with respect to \\(t\\) as the following snippet gives an error <br/>

```sage
t = x^2 + 5
t.derivative(t)
```

but weirdly enough it can handle the inverse integral... <br/>

```sage
t = x^2 + 5
t.integrate(t)
```

1/2\*(x^2 + 5)^2 <br/>


### <span class="section-num">3.1</span> wrong limit {#wrong-limit}

consider the limit: <br/>
\\[
  \lim\_{x\to\infty} \frac{1}{\tan^2 x + 1}
\\] <br/>
which is indeterminate, but sage apparently doesnt know that cuz it gives a result: <br/>

```sage
f = 1/(1+tan(x)^2)
f.limit(x=oo)
```

which is obviously incorrect.. <br/>


### <span class="section-num">3.2</span> i found this problem on a discord server dedicated to maths {#i-found-this-problem-on-a-discord-server-dedicated-to-maths}

\\[ \sum\_{i=0}^{10}\left[\prod\_{j=i}^{1}(10-j)\right] = 108 \\] <br/>

i tried replicating it in sagemath but unfortunately sagemath cant handle this either <br/>

```sage
j,i = var('j,i')
from sage.calculus.calculus import symbolic_product
sum(symbolic_product(10-j, j, i, 1), i, 0, 10)
```

this block of code makes perfect sense to me but idk why it doesnt work <br/>


### <span class="section-num">3.3</span> limit of sequence {#limit-of-sequence}

consider the following limit of sequence: <br/>
\\[
  \lim\_{n\to\infty} \frac{3n}{\sqrt{2n^4-n^2}} + \frac{3n}{\sqrt{2n^4-4n^2}} + \frac{3n}{\sqrt{2n^4-9n^2}} + \cdots + \frac{3n}{\sqrt{2n^4-n^4}} 
\\] <br/>
i tried implementing this in sagemath but it cant solve it properly: <br/>

```sage
k,n = var('k,n')
s = sum((3*n)/sqrt(2*n^4-k^2*n^2), k, 1, n)
s.limit(n=Infinity)
```

3\*limit(n\*sum(1/sqrt(-k^2\*n^2 + 2\*n^4), k, 1, n), n, +Infinity) <br/>

<div class="note">

i asked how to deal with this on [sagemath's forums](https://ask.sagemath.org/question/62497/limit-of-sequence/) <br/>

</div>

however, it was able to handle a simpler sequence: <br/>

\\[
  \lim\_{n\to\infty} \frac{n}{2}\left(\frac{3}{(n+1)^2} + \frac{3}{(n+2)^2} + \cdots + \frac{3}{(n+n)^2}\right)
\\] <br/>

```sage
%display plain
k,n = var('k,n')
s = n/2 * sum(3/(n+k)^2, k, 1, n)
s.limit(n=Infinity)
%display unicode_art
k,n = var('k,n')
s = n/2 * sum(3/(n+k)^2, k, 1, n)
s.limit(n=Infinity)
```

3/2\*limit(n\*(harmonic_number(2\*n, 2) - harmonic_number(n, 2)), n, +Infinity) <br/>
3/4 <br/>

weirdly tho we only get the correct answer when using `unicode_art` <br/>

we try sympy: <br/>

```python
from sympy import limit_seq, Sum
from sympy.abc import n, k
limit_seq(n/2 * Sum(3/(n+k)**2, (k, 1, n)), n)
```

this takes forever to run, you can interrupt and rerun the last line and it would output some weird result <br/>

im really thinking about switching to mathematica. <br/>


## <span class="section-num">4</span> discrete math {#discrete-math}


### <span class="section-num">4.1</span> defining sets {#defining-sets}

consider the following set: <br/>

\\[ A = \\{x \in \mathbb{R} \mid -10 \leq x \leq 10\\} \\] <br/>

this set is infinite as there is an infinite amount of real numbers in the interval \\([-10, 10]\\), to define such a set in sagemath we use `RealSet`: <br/>

```sage
A = RealSet.closed(-10, 10)
A.contains(5)
A.contains(-5)
A.contains(10)
A.contains(20)
```

im not sure how to do the same with other number fields like integers or rationals <br/>


## <span class="section-num">5</span> linear algebra {#linear-algebra}

for reference: [refcard](/ox-hugo/sage_linear_algebra_refcard.pdf) <br/>


### <span class="section-num">5.1</span> matrices {#matrices}


#### <span class="section-num">5.1.1</span> guassian elimination {#guassian-elimination}

this method reduces matrices with guassian elimination method step by step <br/>

<a id="code-snippet--gaussian"></a>
```sage
def gauss_method(M,rescale_leading_entry=False):
    """Describe the reduction to echelon form of the given matrix of rationals.

    M  matrix of rationals   e.g., M = matrix(QQ, [[..], [..], ..])
    rescale_leading_entry=False  boolean  make the leading entries to 1's

    Returns: None.  Side effect: M is reduced.  Note: this is echelon form, 
    not reduced echelon form; this routine does not end the same way as does 
    M.echelon_form().

    """
    num_rows=M.nrows()
    num_cols=M.ncols()
    ld(M)

    col = 0   # all cols before this are already done
    for row in range(0,num_rows): 
        # ?Need to swap in a nonzero entry from below
        while (col < num_cols
               and M[row][col] == 0): 
            for i in M.nonzero_positions_in_column(col):
                if i > row:
                    print(" swap row",row+1,"with row",i+1)
                    M.swap_rows(row,i)
                    ld(M)
                    break     
            else:
                col += 1

        if col >= num_cols:
            break

        change_flag = False
        # Now guaranteed M[row][col] != 0
        if (rescale_leading_entry
            and M[row][col] != 1):
            fm(r"take {1/M[row][col]} times row {row+1}")
            # print(" take",1/M[row][col],"times row",row+1)
            M.rescale_row(row,1/M[row][col])
            ld(M)
            change_flag=False
        for changed_row in range(row+1,num_rows):
            if M[changed_row][col] != 0:
                change_flag=True
                factor=-1*M[changed_row][col]/M[row][col]
                print(fr'take ${latex(factor)}$ times row {row+1} plus row {changed_row+1}')
                M.add_multiple_of_row(changed_row,row,factor)
        if change_flag:
            ld(M)
            col +=1
```

example usage: <br/>

```sage

print("first matrix:")
R.<a> = PolynomialRing(QQ)
MS = MatrixSpace(SR, 3, 4)
m = MS.matrix([[1,a,-1,2],
               [2,-1,a,5],
               [1,10,-6,1]])
gauss_method(m)
print("second matrix:")
m = matrix(QQ, 4, [
    3, 0, 3, -2,
    -3, 3, 0, 2,
    0, -2, 2, 0,
    0, 3, -3, 0
])
gauss_method(m)
```

first matrix: <br/>
\\[\left[\begin{array}{rrrr} 1 & a & -1 & 2 \\\ 2 & -1 & a & 5 \\\ 1 & 10 & -6 & 1 \end{array}\right]\\] <br/>
take \\(-2\\) times row 1 plus row 2 <br/>
take \\(-1\\) times row 1 plus row 3 <br/>
\\[\left[\begin{array}{rrrr} 1 & a & -1 & 2 \\\ 0 & -2 \\, a - 1 & a + 2 & 1 \\\ 0 & -a + 10 & -5 & -1 \end{array}\right]\\] <br/>
take \\(-\frac{a - 10}{2 \\, a + 1}\\) times row 2 plus row 3 <br/>
\\[\left[\begin{array}{rrrr} 1 & a & -1 & 2 \\\ 0 & -2 \\, a - 1 & a + 2 & 1 \\\ 0 & 0 & -\frac{{\left(a + 2\right)} {\left(a - 10\right)}}{2 \\, a + 1} - 5 & -\frac{a - 10}{2 \\, a + 1} - 1 \end{array}\right]\\] <br/>
second matrix: <br/>
\\[\left[\begin{array}{rrrr} 3 & 0 & 3 & -2 \\\ -3 & 3 & 0 & 2 \\\ 0 & -2 & 2 & 0 \\\ 0 & 3 & -3 & 0 \end{array}\right]\\] <br/>
take \\(1\\) times row 1 plus row 2 <br/>
\\[\left[\begin{array}{rrrr} 3 & 0 & 3 & -2 \\\ 0 & 3 & 3 & 0 \\\ 0 & -2 & 2 & 0 \\\ 0 & 3 & -3 & 0 \end{array}\right]\\] <br/>
take \\(\frac{2}{3}\\) times row 2 plus row 3 <br/>
take \\(-1\\) times row 2 plus row 4 <br/>
\\[\left[\begin{array}{rrrr} 3 & 0 & 3 & -2 \\\ 0 & 3 & 3 & 0 \\\ 0 & 0 & 4 & 0 \\\ 0 & 0 & -6 & 0 \end{array}\right]\\] <br/>
take \\(\frac{3}{2}\\) times row 3 plus row 4 <br/>
\\[\left[\begin{array}{rrrr} 3 & 0 & 3 & -2 \\\ 0 & 3 & 3 & 0 \\\ 0 & 0 & 4 & 0 \\\ 0 & 0 & 0 & 0 \end{array}\right]\\] <br/>


#### <span class="section-num">5.1.2</span> matrices with variables {#matrices-with-variables}

to be able to use symbolic variables in matrices we use the symbolic ring `SR` <br/>
cosnider the following: <br/>

```sage
v1 = matrix(SR, 4, 1, [1,2,0,0])
v2 = matrix(SR, 4, 1, [0,1,0,0])
v3 = matrix(SR, 4, 1, [var(f'x{i}') for i in range(4)])
ld(v1.augment(v2).augment(v3), v1.augment(v2).augment(v3).echelon_form())
```

\\[\left[\begin{array}{rrr} 1 & 0 & x\_{0} \\\ 2 & 1 & x\_{1} \\\ 0 & 0 & x\_{2} \\\ 0 & 0 & x\_{3} \end{array}\right] \left[\begin{array}{rrr} 1 & 0 & 0 \\\ 0 & 1 & 0 \\\ 0 & 0 & 1 \\\ 0 & 0 & 0 \end{array}\right]\\] <br/>

this isnt really the result we're looking for, because the correct result will most certainly contain the symbolic variables \\(x\_{0\rightarrow 3}\\) <br/>
to get proper results we use `PolynomialRing` <br/>

```sage
R = PolynomialRing(QQ, 4, 'x')
v1 = matrix(R, 4, 1, [1,2,0,0])
v2 = matrix(R, 4, 1, [0,1,0,0])
v3 = matrix(R, 4, 1, R.gens())
ld(v1.augment(v2).augment(v3), v1.augment(v2).augment(v3).echelon_form())
```

\\[\left[\begin{array}{rrr} 1 & 0 & x\_{0} \\\ 2 & 1 & x\_{1} \\\ 0 & 0 & x\_{2} \\\ 0 & 0 & x\_{3} \end{array}\right] \left[\begin{array}{rrr} 1 & 0 & x\_{0} \\\ 0 & 1 & -2 x\_{0} + x\_{1} \\\ 0 & 0 & x\_{2} \\\ 0 & 0 & x\_{3} \end{array}\right]\\] <br/>

now this, this is a proper result, cheers! <br/>
to get the same functionality but with other Rings/Fields we can use `MatrixSpace` <br/>
here im using the `SR` field (short for Symbolic Ring) <br/>

```sage
R.<a> = PolynomialRing(QQ)
MS = MatrixSpace(SR, 3, 4)
m = MS.matrix([[1,1,1,a],
               [1,a,3,-2],
               [1,3,-1,0]])
fm(r'\[{m} \Longrightarrow {m.echelon_form()} \Longrightarrow {m.echelon_form().simplify_full()}\]')
```

\\[\left[\begin{array}{rrrr} 1 & 1 & 1 & a \\\ 1 & a & 3 & -2 \\\ 1 & 3 & -1 & 0 \end{array}\right] \Longrightarrow \left[\begin{array}{rrrr} 1 & 0 & 0 & a + \frac{{\left(a - \frac{2 \\, {\left(a + 2\right)}}{a - 1}\right)} {\left(\frac{2}{a - 1} - 1\right)}}{2 \\, {\left(\frac{2}{a - 1} + 1\right)}} + \frac{a + 2}{a - 1} \\\ 0 & 1 & 0 & -\frac{a + 2}{a - 1} - \frac{a - \frac{2 \\, {\left(a + 2\right)}}{a - 1}}{{\left(a - 1\right)} {\left(\frac{2}{a - 1} + 1\right)}} \\\ 0 & 0 & 1 & \frac{a - \frac{2 \\, {\left(a + 2\right)}}{a - 1}}{2 \\, {\left(\frac{2}{a - 1} + 1\right)}} \end{array}\right] \Longrightarrow \left[\begin{array}{rrrr} 1 & 0 & 0 & \frac{1}{2} \\, a + 4 \\\ 0 & 1 & 0 & -2 \\\ 0 & 0 & 1 & \frac{1}{2} \\, a - 2 \end{array}\right]\\] <br/>


### <span class="section-num">5.2</span> vector spaces {#vector-spaces}

```sage
V = VectorSpace(QQ, 4)
S = V.subspace([V([-1,1,2,-2]),V([0,2,-4,2])])
U = V.subspace([V([1,-1,-1,1]),V([2,0,-4,2])])
U.basis()
U.dimension()
S.basis()
S.dimension()
```

[ <br/>
(1, 0, -2, 1), <br/>
(0, 1, -1, 0) <br/>
] <br/>
2 <br/>
[ <br/>
(1, 0, -4, 3), <br/>
(0, 1, -2, 1) <br/>
] <br/>
2 <br/>


## <span class="section-num">6</span> boolean algebra {#boolean-algebra}

```python
from sympy.logic import SOPform
from sympy import symbols
from sympy.logic.boolalg import truth_table

w, x, y, z = symbols('w x y z')
minterms = [5, 7, 8, 9, 10, 15]
sop = SOPform([w, x, y, z], minterms, [])

return list(truth_table(sop, [w,x,y,z]))
```

| (0 0 0 0) | False |
|-----------|-------|
| (0 0 0 1) | False |
| (0 0 1 0) | False |
| (0 0 1 1) | False |
| (0 1 0 0) | False |
| (0 1 0 1) | True  |
| (0 1 1 0) | False |
| (0 1 1 1) | True  |
| (1 0 0 0) | True  |
| (1 0 0 1) | True  |
| (1 0 1 0) | True  |
| (1 0 1 1) | False |
| (1 1 0 0) | False |
| (1 1 0 1) | False |
| (1 1 1 0) | False |
| (1 1 1 1) | True  |


## <span class="section-num">7</span> latex parsing and integration with emacs {#latex-parsing-and-integration-with-emacs}

apparently sagemath itself cannot parse latex, but sympy which is packaged with sagemath has an experimental latex parser which should be sufficient, apparently the parser requires a package called `antlr4-python3-runtime`, i tried installing it globally using pacman but i was still getting the following error <br/>

```python
---------------------------------------------------------------------------
ImportError                               Traceback (most recent call last)
Input In [18], in <cell line: 1>()
----> 1 parse_latex(r"\int_a^b f(x) dx")

File /usr/lib/python3.10/site-packages/sympy/parsing/latex/__init__.py:35, in parse_latex(s)
     30 _latex = import_module(
     31     'sympy.parsing.latex._parse_latex_antlr',
     32     import_kwargs={'fromlist': ['X']})
     34 if _latex is not None:
---> 35     return _latex.parse_latex(s)

File /usr/lib/python3.10/site-packages/sympy/parsing/latex/_parse_latex_antlr.py:65, in parse_latex(sympy)
     62 antlr4 = import_module('antlr4', warn_not_installed=True)
     64 if None in [antlr4, MathErrorListener]:
---> 65     raise ImportError("LaTeX parsing requires the antlr4 Python package,"
     66                       " provided by pip (antlr4-python2-runtime or"
     67                       " antlr4-python3-runtime) or"
     68                       " conda (antlr-python-runtime)")
     70 matherror = MathErrorListener(sympy)
     72 stream = antlr4.InputStream(sympy)

ImportError: LaTeX parsing requires the antlr4 Python package, provided by pip (antlr4-python2-runtime or antlr4-python3-runtime) or conda (antlr-python-runtime)
```

so i decided to use [latex2sympy](https://github.com/OrangeX4/latex2sympy) <br/>

install it using: <br/>

```bash
pip install latex2sympy2
```

example usage: <br/>

```python
from latex2sympy2 import latex2sympy, latex2latex

tex = r"\frac{d}{dx}(x^{2}+x)"
# Or you can use '\mathrm{d}' to replace 'd'
print(latex2sympy(tex))
print(latex2latex(tex))
```