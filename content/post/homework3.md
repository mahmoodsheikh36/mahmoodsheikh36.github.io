+++
title = "networking homework 3"
author = ["mahmood"]
description = "[[id:AF53D0AF-8039-40A3-8C9C-4D775FFA9A2B][networking]] homework 3 on web and [[id:D45E5A42-2471-4686-A54B-F3E3EA7229FD][http]]"
date = 2022-09-02T00:13:00+03:00
tags = ["homework"]
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


## <span class="section-num">1</span> question group 1 {#question-group-1}

<div class="question">

given a non-persistant connection between a [webserver]({{< relref "networking.md#webserver" >}}) and a client, how can the client know that it has received the full response from the server without inspecting the response message itself? <br/>

</div>

<div class="question">

assume a connection between a webserver and a client through a [proxy]({{< relref "networking.md#proxy" >}}), such that the client opens an [http]({{< relref "networking.md#http" >}}) connection with the proxy and the proxy opens one with the server that holds the desired object. <br/>
the proxy only handles non-persistent connections and the client handles persistent connections, without pipelining itself. <br/>
when the proxy receives an object from the server it forwards it to the client. <br/>
what is the issue that might arise from such an architecture? how should it be solved? <br/>

</div>

<div class="question">

with the same architecture described in the previous question, can you think of another issue that the client could face if it was to handle **persistent, without pipelining** connections on its own with the server? <br/>

</div>

<div class="question">

consider a persistent connection between a client and a webserver where the server is able to initiate the termination of the TCP connection, should the server be allowed to terminate the connection at any time, or should there be any restrictions? <br/>

</div>