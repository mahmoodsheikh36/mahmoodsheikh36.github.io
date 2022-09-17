+++
title = "networking"
author = ["mahmood"]
description = "college course in computer networking"
date = 2022-09-15T21:41:00+03:00
tags = ["computer-science"]
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


## <span class="section-num">3</span> internet {#internet}

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


## <span class="section-num">4</span> packet {#packet}


## <span class="section-num">5</span> bandwidth {#bandwidth}

<div class="definition">

network **bandwidth** is a measurement indicating the maximum capacity of a wired or wireless communications link to transmit data over a network connection in a given amount of time. typically, bandwidth is represented in the number of bits, kilobits, megabits or gigabits that can be transmitted in 1 second. <br/>

<div class="note">

we denote bps (bits per second) by \\(C\\) or \\(R\\) <br/>

</div>

</div>


## <span class="section-num">6</span> transmission delay {#transmission-delay}

<div class="definition">

in a network based on packet switching, **transmission delay** is the amount of time required to push all the packet's bits into the wire. in other words, this is the delay caused by the data-rate of the link <br/>
it is denoted by \\(T\_i\\) <br/>

<div class="lemma">

\\(T\_i = \frac{L}{R} = \frac{L}{C}\\) <br/>

</div>

</div>


## <span class="section-num">7</span> signal propagation delay {#signal-propagation-delay}

<div class="definition">

**propagation delay**, denoted by \\(T\_p\\), is the time duration taken for a signal to reach its destination. <br/>

<div class="lemma">

we denote the distance between the sender and receiver by \\(d\\) (in meters) <br/>
we denote the speed of a bit in the transmission link by \\(s\\) <br/>
\\(T\_p = \frac{d}{s}\\) <br/>
the unit of \\(T\_p\\) is a second <br/>

</div>

</div>


## <span class="section-num">8</span> protocol {#protocol}

<div class="definition">

a communication **protocol** is a system of rules that allows two or more entities of a communications system to transmit information via any kind of variation of a physical quantity. the protocol defines the rules, syntax, semantics and synchronization of communication and possible error recovery methods. protocols may be implemented by hardware, software, or a combination of both. <br/>

</div>


## <span class="section-num">9</span> client-server architecture {#client-server-architecture}


### <span class="section-num">9.1</span> server {#server}


### <span class="section-num">9.2</span> client {#client}


## <span class="section-num">10</span> network {#network}

<div class="definition">

a computer **network** is a set of computers sharing resources located on or provided by network nodes. the computers use common communication [protocol](#protocol)s over digital interconnections to communicate with each other. <br/>

</div>


### <span class="section-num">10.1</span> network edge {#network-edge}

<div class="definition">

the **network edge** refers to endpoints. it is the first step between endpoints and the [core](#network-core) of the network. these endpoints include personal computers (PCs), adapters, modems, and the devices that connect to them. <br/>

</div>


### <span class="section-num">10.2</span> network core {#network-core}

<div class="definition">

the **network core** refers to the components that provide services to those at the [edge](#network-edge). <br/>

</div>


### <span class="section-num">10.3</span> access network {#access-network}

<div class="definition">

an **access network** is a type of telecommunications network which connects subscribers to their immediate service provider. It is contrasted with the core network, which connects local providers to one another. <br/>

</div>


#### <span class="section-num">10.3.1</span> digital subscriber line {#digital-subscriber-line}


#### <span class="section-num">10.3.2</span> cable network {#cable-network}


#### <span class="section-num">10.3.3</span> home network {#home-network}


#### <span class="section-num">10.3.4</span> enterprise access network {#enterprise-access-network}


#### <span class="section-num">10.3.5</span> wireless access network {#wireless-access-network}


## <span class="section-num">11</span> tcp {#tcp}


## <span class="section-num">12</span> udp {#udp}


## <span class="section-num">13</span> http {#http}

the HTTP [protocol](#protocol) is based on [tcp](#tcp) <br/>


### <span class="section-num">13.1</span> GET {#get}


### <span class="section-num">13.2</span> POST {#post}


### <span class="section-num">13.3</span> HEAD {#head}


### <span class="section-num">13.4</span> webserver {#webserver}


### <span class="section-num">13.5</span> persistent http {#persistent-http}

HTTP persistent connection, also called HTTP keep-alive, or HTTP connection reuse, is the idea of using a single [TCP](#tcp) connection to send and receive multiple HTTP requests/responses, as opposed to opening a new connection for every single request/response pair <br/>
A persistent connection takes 1 RTT for the connection and then transfers as many objects, as wanted, over this single connection. <br/>
RTT stands for the round-trip time taken for an object request and then its retrieval. In other words, it is the time taken to request the object from the client to the server and then retrieve it from the server back to the client. <br/>


### <span class="section-num">13.6</span> cache proxy server {#cache-proxy-server}

a [proxy](#proxy) that is used as a cache, where the user makes all the requests to it and if it doesnt have a specific object it requests it from the origin server and returns it (and often stores it for future requests) <br/>


#### <span class="section-num">13.6.1</span> pipelining {#pipelining}

HTTP pipelining is a feature of HTTP/1.1 which allows multiple HTTP requests to be sent over a single TCP connection without waiting for the corresponding responses. <br/>


### <span class="section-num">13.7</span> non-persistent http {#non-persistent-http}

The non-persistent connection has connection type 1.0 <br/>
such connection takes a total time of 2RTT + file transmission delay. It takes the first RTT (round-trip time) to establish the connection between the server and the client. The second RTT is taken to request and return the object. This case stands for a single object transmission. <br/>
After the client receives the object in non-persistent, the connection is immediately closed. This is the basic difference between persistent and non-persistent. The persistent connection ensures the transfer of multiple objects over a single connection. <br/>


## <span class="section-num">14</span> domain name {#domain-name}


## <span class="section-num">15</span> IP {#ip}


## <span class="section-num">16</span> DNS {#dns}

**domain name system** is a protocol that allows identifying machines with [domain name](#domain-name) by converting them into [IP](#ip) addresses <br/>


### <span class="section-num">16.1</span> name server {#name-server}

a **[DNS](#dns) [server](#server)** keeps records of DNS entries that map domain names to their corresponding IP addresses which can be served to other machines <br/>
when a client wants to to communicate with a machine using its domain name, it makes a request to a dns server, if the server has a record of said domain name, it returns sends it back to the client, if it doesnt, it either sends back an IP to another dns server that has that record or it makes a request to that dns server itself and sends back the response to the client <br/>

{{< figure src="/ox-hugo/1btUy2d.svg" >}} <br/>

<div class="my_example">

a client wants the IP for www.amazon.com; 1st approximation would be: <br/>

-   client queries root server to find com DNS server <br/>
-   client queries .com DNS server to get amazon.com DNS server <br/>
-   client queries amazon.com DNS server to get IP address for www.amazon.com <br/>

</div>


### <span class="section-num">16.2</span> root name server {#root-name-server}

contacted by local name server that can not resolve name <br/>
a root server contacts authoritative name server if name mapping not known and returns the mapping to the local name server <br/>
there are 13 root name "servers" worldwide <br/>


### <span class="section-num">16.3</span> resource record {#resource-record}

the format for an RR is `(name, value, type, ttl)` <br/>
when `type=A`: <br/>

-   **name** is **hostname** <br/>
-   **value** is [IP](#ip) address <br/>

when `type=NS`: <br/>

-   **name** is [domain name](#domain-name) <br/>
-   **value** is hostname of [authoritative name server](#authoritative-name-server) for this domain <br/>

when `type=CNAME`: <br/>

-   name is alias name for some “canonical” (the real) name <br/>
-   www.ibm.com is really servereast.backup2.ibm.com <br/>
-   value is canonical name <br/>

when `type=MX`: <br/>

-   **value** is canonical name <br/>


### <span class="section-num">16.4</span> top level domain {#top-level-domain}

a top-level [domain]({{< relref "discrete_maths2.md#domain" >}}) is one of the domains at the highest level in the hierarchical [DNS](#dns) of the [internet](#internet) after the root domain, a TLD server is responsible for these domains, examples include com,org,net,edu,aero. <br/>


### <span class="section-num">16.5</span> authoritative name server {#authoritative-name-server}

an organization’s own DNS servers, providing authoritative hostname to IP mappings for the organization’s named hosts <br/>
can be maintained by an organization or a service provider <br/>


### <span class="section-num">16.6</span> local name server {#local-name-server}

does not strictly belong to hierarchy <br/>
each ISP (residential ISP, company, university) has one <br/>
also called “default name server” <br/>
when host makes DNS query, query is sent to its local DNS server <br/>
has local cache of recent name-to-address translation pairs (but may be out of date!) <br/>
acts as proxy, forwards query into hierarchy <br/>


### <span class="section-num">16.7</span> dns caching {#dns-caching}

a server/client can store a record of a domain name and its corresponding IP address for a specific amount of time so that it wont have to make the same request to a dns server over and over again <br/>


### <span class="section-num">16.8</span> dns practice problems {#dns-practice-problems}

<div class="question">

how can we make sure that in the [DNS](#dns) system that for a canonical name and its aliases are identical and consistent? such that all the names that refer to the same host would have the same corresponding [IP](#ip) <br/>

<div class="answer">

by making it so that for any given [domain name](#domain-name) that has a corresponding `CNAME` we cant save any additional information <br/>

</div>

</div>

<div class="question">

assume that a [dns server](#name-server) receives a query for an IP of a specific host but it cant find an `RR` entry for it, how should the dns server behave in this situation? <br/>

<div class="answer">

it should check whether it has a `CNAME` entry for it, and if it does it renew the search for a domain name that is the canonical name for the original requested domain name <br/>

</div>

</div>

<div class="question">

what problem can be a result of the solution to the previous question that stems from a configuration fault in the dns system <br/>

<div class="answer">

the search through the `CNAME` entries could enter a loop <br/>

</div>

</div>

<div class="question">

a dns server for a given `zone` holds the names of the dns servers of `subzones` and their IPs, one of the reasons that IPs are saved is efficiency, a domain name of a dns server should be passed along with its IP, but there is another reason for this which is related to the accuracy of the functioning of the dns system for which we have to save those IPs, what is it? <br/>

<div class="answer">

if the dns server of a subzone belongs to another subzone itself, to find its IP we have to make a request using the address we're searching for <br/>

</div>

</div>

<div class="question">

in DNS, the process of receiving a response can be either iterative or recursive <br/>
there exists a caching process in the system that saves in its memory the responses that it received for previous queries and therefore speeds up the future responses for similar queries <br/>
which of the 2 methods, iterative or recursive, is preferred as far as the efficiency of the caching process goes? <br/>

<div class="answer">

the recursive method because with this method throughout the whole process the name servers can save the response and serve similar queries in the future whereas with the iterative method only a single name server that serves a small portion of clients can save the response <br/>

</div>

</div>

<div class="question">

consider a zone named `U` with a subzone named `W.U` <br/>
the name of the server that holds information for `U` is `SERVER.U` and it contains the name of `SERVER.W.U` which holds information for `W.U` <br/>
is `SERVER.U` an [authoritative name server](#authoritative-name-server) for the record `(W.U, NS, SERVER.W.U)`? <br/>

<div class="answer">

no, the system admin of `U.W` decides which name server `U.W` uses <br/>

</div>

</div>


### <span class="section-num">16.9</span> dns resolver {#dns-resolver}

a DNS resolver, also called a recursive resolver, is a server designed to receive DNS queries from web browsers and other applications. The resolver receives a hostname - for example, www.example.com - and is responsible for tracking down the IP address for that hostname. <br/>


## <span class="section-num">17</span> stop and wait {#stop-and-wait}

a [protocol](#protocol) <br/>
assuming a transmission failure [probability]({{< relref "20220813151352-probability.md" >}}) of \\(p\\), the [average]({{< relref "20220813152209-average.md" >}}) time for a successful transmission is found using [geometric distribution]({{< relref "20220813151352-probability.md#geometric-distribution" >}}): <br/>
\\[
T\_v = \frac{1}{1-p}(T\_i+T\_\text{out})
\\] <br/>
the efficiency is: <br/>
\\[
u = \frac{T\_i}{T\_v} = \frac{T\_i}{\frac{1}{1-p}(T\_i+T\_\text{out})}
\\] <br/>
we denote \\(a\\) as the number of times \\(T\_i\\) is contained in \\(T\_v\\): <br/>
\\[
a = \frac{T\_i+T\_\text{out}}{T\_i} = \frac{T\_i}{T\_i} + \frac{T\_\text{out}}{T\_i} = 1 + \frac{T\_\text{out}}{T\_i}
\\] <br/>
which implies that \\(a-1=\frac{T\_\text{out}}{T\_i}\\) and: <br/>
\\[
u = \frac{T\_i}{\frac{1}{1-p}(T\_i+T\_\text{out})} = \frac{(1-p)T\_i}{T\_i+T\_\text{out}} = \frac{1-p}{\frac{T\_i+T\_\text{out}}{T\_i}} = \frac{1-p}{a}
\\] <br/>


### <span class="section-num">17.1</span> stop and wait efficiency {#stop-and-wait-efficiency}

the efficiency is the [transmission delay](#transmission-delay) over the time taken for a successful transmission on [average]({{< relref "20220813152209-average.md" >}}) <br/>
\\[
u = \frac{T\_i}{T\_v} = \frac{T\_i}{\frac{1}{1-p}(T\_i+T\_\text{out})}
\\] <br/>


## <span class="section-num">18</span> socket {#socket}


## <span class="section-num">19</span> p2p {#p2p}


## <span class="section-num">20</span> application layer {#application-layer}


## <span class="section-num">21</span> proxy {#proxy}


## <span class="section-num">22</span> citations {#citations}

credit where credit is due <br/>
<https://en.wikipedia.org/wiki/Top-level_domain> <br/>
<https://ns1.com/resources/what-is-dns> <br/>