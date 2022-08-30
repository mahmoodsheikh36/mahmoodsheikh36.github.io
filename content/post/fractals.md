+++
title = "fractals"
author = ["mahmood"]
description = "fractals"
date = 2022-06-19T10:55:00+03:00
draft = false
+++

<p style="height:0px; display: none;">
  \(\DeclareMathOperator{\spn}{span}\)
  \(\DeclareMathOperator{\dom}{domain}\)
  \(\DeclareMathOperator{\ran}{range}\)
  \(\DeclareMathOperator{\rng}{range}\)
  \(\DeclareMathOperator{\img}{Im}\)
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
  font-family: cursive;
  border: 1px solid black;
  font-size: 13px;
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

fractals are a great way to explore mathematical concepts, here i try to explore as many as i can and i guide you through it all step by step <br/>


## <span class="section-num">1</span> mandelbrot {#mandelbrot}


### <span class="section-num">1.1</span> characteristics {#characteristics}

-   The **Mandelbrot** set is the set of values of c in the **complex plane** for which the orbit of the critical point \\(z\_{n+1} = {z\_n}^2 + c\\) remains bounded <br/>
-   a complex number c is a member of the Mandelbrot set if, when starting with \\(z\_0 = 0\\) and applying the iteration repeatedly, the absolute value of \\(z\_n\\) remains bounded for all \\(n > 0\\) <br/>
-   For example, for \\(c = 1\\), the sequence is \\(0, 1, 2, 5, 26, \ldots\\), which tends to infinity, so 1 is not an element of the Mandelbrot set. On the other hand, for \\(c=-1\\), the sequence is \\(0, -1, 0, -1, 0, \ldots\\), which is bounded, so \\(-1\\) does belong to the set. <br/>
-   The Mandelbrot set is a compact set, since it is closed and contained in the closed disk of radius 2 around the origin <br/>
-   a point \\(c\\) belongs to the Mandelbrot set if and only if \\(|z\_n| \leq 2\\) for all \\(n \geq 0\\)  <br/>
-   The absolute value of a complex number is defined as the distance between the origin \\((0,0)\\) and the point \\((a,b)\\) in the complex plane. <br/>


### <span class="section-num">1.2</span> finding square of complex number {#finding-square-of-complex-number}

\begin{align\*}
  c &= (a, b) = a + bi\\\\
  c^2 &= (a + bi) \cdot (a + bi) = a^2 + abi + abi + b^2i^2 = a^2 + 2abi - b^2 = a^2-b^2 + 2abi
\end{align\*}


### <span class="section-num">1.3</span> implementation with the `decimal` library {#implementation-with-the-decimal-library}

i tried implementing it with floats but i was getting some sort of overflow errors, which means floats are insufficient to hold the values so we use python's `decimal` library <br/>

```python
from PIL import Image
from math import sqrt
from decimal import Decimal
from decimal import getcontext
getcontext().Emax = 1000000000000000000000000000000000000000

def complex_square(c):
  return (c[0]**2-c[1]**2, 2*c[0]*c[1])

def complex_abs(c):
  abs_c = (abs(c[0]), abs(c[1]))
  return sqrt(abs_c[0]**2 + abs_c[1]**2)

def check_in_mandelbrot(c):
  iterations = 30
  z = (0,0)
  for i in range(iterations):
    squared = complex_square(z)
    z = (squared[0] + c[0], squared[1] + c[1])
  return complex_abs(z) < 2

size = 40
img = Image.new('RGB', (size, size))
for i in range(size):
  for j in range(size):
    # c[0] is the real part, c[1] is the imaginary part
    c = (Decimal((i - size / 2) / (size / 2) * 2), Decimal((j - size / 2) / (size / 2) * 2))
    in_mandelbrot = check_in_mandelbrot(c)
    color = (0, 0, 0)
    if in_mandelbrot:
      color = (255, 255, 255)
      img.putpixel((i,j), color)
img.save(f)
return f # replace with img.show()
```

{{< figure src="/ox-hugo/4Ol9IB.png" >}} <br/>


### <span class="section-num">1.4</span> implementation with `decimal` and `multithreading` {#implementation-with-decimal-and-multithreading}

this is a very very slow implementation (its python so we shouldnt be expecting much) <br/>
so i tried to use multithreading and even that didnt work..., its just that the `decimal` library is very slow <br/>

```python
from PIL import Image
from math import sqrt
from decimal import Decimal
from decimal import getcontext
getcontext().Emax = 1000000000000000000000000000000000000000
import concurrent.futures

def complex_square(c):
  return (c[0]**2-c[1]**2, 2*c[0]*c[1])

def complex_abs(c):
  abs_c = (abs(c[0]), abs(c[1]))
  return sqrt(abs_c[0]**2 + abs_c[1]**2)

def check_in_mandelbrot(c):
  iterations = 30
  z = (0,0)
  for i in range(iterations):
    squared = complex_square(z)
    z = (squared[0] + c[0], squared[1] + c[1])
  return complex_abs(z) < 2

def handle_complex_number(c, img, pixel):
  in_mandelbrot = check_in_mandelbrot(c)
  color = (0, 0, 0)
  if in_mandelbrot:
    color = (255, 255, 255)
  img.putpixel(pixel, color)

size = 40
img = Image.new('RGB', (size, size))

with concurrent.futures.ThreadPoolExecutor(max_workers=10) as executor:
  for i in range(size):
    for j in range(size):
      # c[0] is the real part, c[1] is the imaginary part
      c = (Decimal((i - size / 2) / (size / 2) * 2), Decimal((j - size / 2) / (size / 2) * 2))
      a = executor.submit(handle_complex_number, c=c, img=img, pixel=(i,j))

img.save(f)
return f # replace with img.show()
```

{{< figure src="/ox-hugo/tYDI4G.png" >}} <br/>


### <span class="section-num">1.5</span> implementation with pure floats {#implementation-with-pure-floats}

so we try to implement it without `decimal`: <br/>

```python
from PIL import Image
from math import sqrt

ITERATIONS = 30 # increase for accuracy
SIZE = 500 # image size

def complex_square(c):
  return (c[0]**2-c[1]**2, 2*c[0]*c[1])

def complex_abs(c):
  abs_c = (abs(c[0]), abs(c[1]))
  return sqrt(abs_c[0]**2 + abs_c[1]**2)

def check_in_mandelbrot(c):
  z = (0,0)
  for i in range(ITERATIONS):
    squared = complex_square(z)
    z = (squared[0] + c[0], squared[1] + c[1])
  return complex_abs(z) < 2

img = Image.new('RGB', (SIZE, SIZE))

for i in range(SIZE):
  for j in range(SIZE):
    # c[0] is the real part, c[1] is the imaginary part
    c = ((i - SIZE / 2) / (SIZE / 2) * 2, (j - SIZE / 2) / (SIZE / 2) * 2)
    try:
      in_mandelbrot = check_in_mandelbrot(c)
    except:
      continue
    color = (0, 0, 0)
    if in_mandelbrot:
      color = (255, 255, 255)
    img.putpixel((i,j), color)

img.save(f)
f # replace with img.show()
```

{{< figure src="/ox-hugo/5JM96p.png" >}} <br/>

this is so much faster, because we're using the float primitive type that python provides ignoring the pixels that result in an overflow <br/>


### <span class="section-num">1.6</span> zooming in {#zooming-in}

we wrap the loops in a function to make it easier to draw multiple instances of the mandelbrot zoomed in on different areas <br/>
to zoom in we simply shrink the range of the numbers, it was closed under the closed interval \\([-2, 2]\\), this time we close it under the interval \\([-1,1]\\) <br/>
i have noticed that the pixels that arent in the mandelbrot tend to cause an overflow so i made it so that if a pixel causes an overflow it gets colored black <br/>

```python
def scale(num, src_min, src_max, dest_min, dest_max):
  return ((num - src_min) * (dest_max - dest_min) + (dest_min * src_max) -
          (dest_min * src_min)) / (src_max - src_min)

def draw_mandelbrot(interval):
  for i in range(SIZE):
    for j in range(SIZE):
      # c[0] is the real part, c[1] is the imaginary part
      c = (scale(i, 0, SIZE, interval[0], interval[1]), scale(j, 0, SIZE, interval[0], interval[1]))
      in_mandelbrot = False
      try:
        in_mandelbrot = check_in_mandelbrot(c)
      except:
        pass
      color = (0, 0, 0)
      if in_mandelbrot:
        color = (255, 255, 255)
      img.putpixel((i,j), color)
  img.save(f)
  return f

draw_mandelbrot((-1, 1))
```

{{< figure src="/ox-hugo/cbrK9i.png" >}} <br/>


### <span class="section-num">1.7</span> coloring {#coloring}

now we need to come up with some coloring technique, one way to get some coloring is by setting the color according to the number of iterations the complex number took to become bigger than 2 <br/>
so we rewrite the `check_in_mandelbrot` function to return the number of iterations, and the `draw_mandelbrot` function to act accordingly <br/>
i found that the mandelbrot looks cool at 30 iterations so thats what im gonna use <br/>

```python
ITERATIONS = 30

def check_in_mandelbrot(c):
  z = (0,0)
  for i in range(ITERATIONS):
    squared = complex_square(z)
    z = (squared[0] + c[0], squared[1] + c[1])
    if complex_abs(z) > 2:
      return i
  return ITERATIONS

def draw_mandelbrot(interval):
  for i in range(SIZE):
    for j in range(SIZE):
      # c[0] is the real part, c[1] is the imaginary part
      c = (scale(i, 0, SIZE, interval[0], interval[1]), scale(j, 0, SIZE, interval[0], interval[1]))
      color = (0,0,0)
      try:
        num = check_in_mandelbrot(c)
        scaled = round(scale(num, 0, ITERATIONS - 1, 0, 250))
        color = (scaled, scaled, scaled)
        if scaled > 75:
          color = (scaled, 0, 0)
        if scaled > 150:
          color = (0, scaled, 0)
        if scaled > 200:
          color = (0, 0, scaled)
      except:
        pass
      img.putpixel((i,j), color)
  img.save(f)
  return f # replace with img.show()

draw_mandelbrot((-1, 1))
```

{{< figure src="/ox-hugo/XgPSTh.png" >}} <br/>

this looks a little bit better <br/>
ofcourse there are better coloring techniques but i've yet to explore those <br/>
we can also try different intervals to zoom around the plot and find interesting patterns, we could also write a continuous zooming animation on the mandelbrot, but i guess thats for the future <br/>