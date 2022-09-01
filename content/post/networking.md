+++
title = "networking"
author = ["mahmood"]
description = "networking"
date = 2022-09-02T00:10:00+03:00
tags = ["todo"]
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

this document is still being constructed, it should not be used for reference yet. <br/>

</div>


## <span class="section-num">1</span> storage units {#storage-units}

basic units table: <br/>

| unit     | description    |
|----------|----------------|
| bit      | 1 or 0         |
| byte     | 8 bits         |
| kilobyte | 1024 bytes     |
| megabyte | 1024 kilobytes |
| gigabyte | 1024 megabytes |
| terabyte | 1024 gigabytes |
| petabyte | 1024 terabytes |


## <span class="section-num">2</span> unit prefix table {#unit-prefix-table}

| prefix | exponent       |
|--------|----------------|
| yocto  | \\(10^{-24}\\) |
| zepto  | \\(10^{-21}\\) |
| atto   | \\(10^{-18}\\) |
| femto  | \\(10^{-15}\\) |
| pico   | \\(10^{-12}\\) |
| nano   | \\(10^{-9}\\)  |
| micro  | \\(10^{-6}\\)  |
| milli  | \\(10^{-3}\\)  |
| kilo   | \\(10^3\\)     |
| mega   | \\(10^6\\)     |
| giga   | \\(10^9\\)     |
| tera   | \\(10^{12}\\)  |
| peta   | \\(10^{15}\\)  |
| exa    | \\(10^{18}\\)  |
| zetta  | \\(10^{21}\\)  |
| yotta  | \\(10^{24}\\)  |


## <span class="section-num">3</span> bandwidth {#bandwidth}

<div class="definition">

network **bandwidth** is a measurement indicating the maximum capacity of a wired or wireless communications link to transmit data over a network connection in a given amount of time. typically, bandwidth is represented in the number of bits, kilobits, megabits or gigabits that can be transmitted in 1 second. <br/>

<div class="note">

we denote bps (bits per second) by \\(C\\) or \\(R\\) <br/>

</div>

</div>


## <span class="section-num">4</span> transmission time {#transmission-time}

<div class="definition">

**transmission time**, denoted by \\(T\_i\\), is the time it takes for the sender to insert the package into the transmission link <br/>

<div class="lemma">

\\(T\_i = \frac{L}{R} = \frac{L}{C}\\) <br/>

</div>

</div>


## <span class="section-num">5</span> signal propagation delay {#signal-propagation-delay}

<div class="definition">

**propagation delay**, denoted by \\(T\_p\\), is the time duration taken for a signal to reach its destination. <br/>

<div class="lemma">

we denote the distance between the sender and receiver by \\(d\\) (in meters) <br/>
we denote the speed of a bit in the transmission link by \\(s\\) <br/>
\\(T\_p = \frac{d}{s}\\) <br/>
the unit of \\(T\_p\\) is a second <br/>

</div>

</div>


## <span class="section-num">6</span> internet {#internet}

<div class="question">

at home there are 4 computers and a router (therefore, 5 "stations") connected to the same channel. <br/>
as long as only a single station is streaming it will succeed in streaming, if at any given moment more than 1 station try to stream at the same time the streaming for all stations will fail. <br/>
given that a station is trying to stream with a [probability]({{< relref "20220813151352-probability.md" >}}) \\(p\\), what is the probability that it is gonna succeed in streaming? <br/>

<div class="answer">

for that station to succeed in streaming the other 4 stations have to not try to stream <br/>
for a station to try to stream at any given moment the probability is \\(p\\) <br/>
so according to [Bernoulli distribution]({{< relref "20220813151352-probability.md#bernoulli-distribution" >}}) the answer is \\(\binom{5}{1}p^1(1-p)^4\\) <br/>

</div>

<div class="subquestion">

for the same situation, 2 stations can stream at the same time, what is the odds that a station would succeed in streaming at any given time? <br/>

<div class="answer">

\\(\binom{5}{1}p(1-p)^4 + \binom{5}{2}p^2(1-p)^3\\) <br/>

</div>

</div>

</div>


## <span class="section-num">7</span> protocol {#protocol}

<div class="definition">

a communication **protocol** is a system of rules that allows two or more entities of a communications system to transmit information via any kind of variation of a physical quantity. the protocol defines the rules, syntax, semantics and synchronization of communication and possible error recovery methods. protocols may be implemented by hardware, software, or a combination of both. <br/>

</div>


## <span class="section-num">8</span> client-server architecture {#client-server-architecture}


### <span class="section-num">8.1</span> server {#server}


### <span class="section-num">8.2</span> client {#client}


## <span class="section-num">9</span> network {#network}

<div class="definition">

a computer **network** is a set of computers sharing resources located on or provided by network nodes. the computers use common communication [protocol](#protocol)s over digital interconnections to communicate with each other. <br/>

</div>


### <span class="section-num">9.1</span> network edge {#network-edge}

<div class="definition">

the **network edge** refers to endpoints. it is the first step between endpoints and the [core](#network-core) of the network. these endpoints include personal computers (PCs), adapters, modems, and the devices that connect to them. <br/>

</div>


### <span class="section-num">9.2</span> network core {#network-core}

<div class="definition">

the **network core** refers to the components that provide services to those at the [edge](#network-edge). <br/>

</div>


### <span class="section-num">9.3</span> access network {#access-network}

<div class="definition">

an **access network** is a type of telecommunications network which connects subscribers to their immediate service provider. It is contrasted with the core network, which connects local providers to one another. <br/>

</div>


#### <span class="section-num">9.3.1</span> digital subscriber line {#digital-subscriber-line}


#### <span class="section-num">9.3.2</span> cable network {#cable-network}


#### <span class="section-num">9.3.3</span> home network {#home-network}


#### <span class="section-num">9.3.4</span> enterprise access network {#enterprise-access-network}


#### <span class="section-num">9.3.5</span> wireless access network {#wireless-access-network}


## <span class="section-num">10</span> http {#http}


### <span class="section-num">10.1</span> GET {#get}


### <span class="section-num">10.2</span> POST {#post}


### <span class="section-num">10.3</span> HEAD {#head}


### <span class="section-num">10.4</span> webserver {#webserver}


## <span class="section-num">11</span> DNS {#dns}


## <span class="section-num">12</span> socket {#socket}


## <span class="section-num">13</span> TCP {#tcp}


## <span class="section-num">14</span> p2p {#p2p}


## <span class="section-num">15</span> IP {#ip}


## <span class="section-num">16</span> application layer {#application-layer}


## <span class="section-num">17</span> proxy {#proxy}