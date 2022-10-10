+++
title = "networking"
author = ["mahmood"]
description = "college course in computer networking"
date = 2022-10-10T19:56:00+03:00
tags = ["todo", "computer-science"]
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
  \(\newcommand{\ihat}{\hat{\textbf{i}}}\)
  \(\newcommand{\jhat}{\hat{\textbf{j}}}\)
  \(\newcommand{\khat}{\hat{\textbf{k}}}\)
  \(\newcommand{\rhat}{\hat{\textbf{r}}}\)
  \(\newcommand{\thetahat}{\boldsymbol{\hat{\theta}}}\)
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

<div class="note">

i have yet to add citations from the syllabus of the course from `syllabus.docx` <br/>

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


## <span class="section-num">5</span> protocol {#protocol}

<div class="definition">

a communication **protocol** is a system of rules that allows two or more entities of a communications system to transmit information via any kind of variation of a physical quantity. the protocol defines the rules, syntax, semantics and synchronization of communication and possible error recovery methods. protocols may be implemented by hardware, software, or a combination of both. <br/>

</div>


## <span class="section-num">6</span> bandwidth {#bandwidth}

<div class="definition">

**bandwidth** indicates the maximum capacity of a link to transmit data in a given amount of time. typically, bandwidth is represented in the number of bits, kilobits, megabits or gigabits that can be transmitted in 1 second. <br/>

<div class="note">

here we use the unit bps (bits per second) and denote bandwidth by \\(C\\) or \\(R\\) <br/>

</div>

</div>


## <span class="section-num">7</span> transmission delay {#transmission-delay}

<div class="definition">

**transmission delay** is the amount of time required to push all the [packet](#packet)'s bits into the wire. <br/>
it is denoted by \\(T\_i\\) and its unit is bps (bit per second) <br/>

<div class="lemma">

\\(T\_i = \frac{L}{R}\\) or \\(T\_i = \frac{L}{C}\\) because \\(C\\) and \\(R\\) both denote [bandwidth](#bandwidth) (consequence of my college class 🤷‍♂️) and \\(L\\) denotes the size/length of a packet <br/>

</div>

</div>


## <span class="section-num">8</span> propagation speed {#propagation-speed}

the speed of a bit in a transmission link, denoted by \\(s\\), and its unit is \\(m/s\\) (meters per second) <br/>


## <span class="section-num">9</span> propagation delay {#propagation-delay}

<div class="definition">

**propagation delay**, denoted by \\(T\_p\\), is the time duration in seconds taken for a packet to reach its destination. <br/>

<div class="lemma">

we denote the distance between the sender and receiver by \\(d\\) (in meters) <br/>
and the [propagation speed](#propagation-speed) by \\(s\\) <br/>
\\(T\_p = \frac{d}{s}\\) <br/>
the unit of \\(T\_p\\) is the second <br/>

</div>

</div>


## <span class="section-num">10</span> window size {#window-size}

when the receiver sends an acknowledgment, it will tell the sender how much data it can transmit before the receiver will send an acknowledgment. we call this the window size. basically, the window size indicates the size of the receive buffer. <br/>


## <span class="section-num">11</span> client-server architecture {#client-server-architecture}


### <span class="section-num">11.1</span> server {#server}


### <span class="section-num">11.2</span> client {#client}


## <span class="section-num">12</span> network {#network}

<div class="definition">

a computer **network** is a set of computers sharing resources located on or provided by network nodes. the computers use common communication [protocol](#protocol)s over digital interconnections to communicate with each other. <br/>

</div>


### <span class="section-num">12.1</span> local area network {#local-area-network}


### <span class="section-num">12.2</span> network edge {#network-edge}

<div class="definition">

the **network edge** refers to endpoints. it is the first step between endpoints and the [core](#network-core) of the network. these endpoints include personal computers (PCs), adapters, modems, and the devices that connect to them. <br/>

</div>


### <span class="section-num">12.3</span> network core {#network-core}

<div class="definition">

the **network core** refers to the components that provide services to those at the [edge](#network-edge). <br/>
it is a mesh of interconnected routers <br/>

<div class="characteristic">

the network core has 2 key functions: <br/>

-   **routing**: determines source-destination route taken by packets <br/>
-   **forwarding**: move packets from router's input to appropriate router output <br/>

</div>

</div>


#### <span class="section-num">12.3.1</span> packet switching {#packet-switching}

hosts break application-layer messages into packets <br/>

-   forward packets from one router to the next, across links on path from source to destination <br/>
-   each packet transmitted at full link capacity <br/>
-   takes L/R seconds to transmit (push out) L-bit packet into link at R bps <br/>
-   **store and forward**: entire packet must  arrive at router before it can be transmitted on next link <br/>
-   end-end delay = 2L/R (assuming zero propagation delay) <br/>
-   If arrival rate (in bits) to link exceeds transmission rate of link for a period of time: <br/>
    -   packets will queue, wait to be transmitted on link <br/>
    -   packets can be dropped (lost) if memory (buffer) fills up <br/>


#### <span class="section-num">12.3.2</span> circuit switching {#circuit-switching}

**circuit switching** is a method of implementing a telecommunications network in which two network nodes establish a dedicated communications channel (circuit) through the network before the nodes may communicate. The circuit guarantees the full bandwidth of the channel and remains connected for the duration of the communication session. The circuit functions as if the nodes were physically connected as with an electrical circuit. Circuit switching originated in analog telephone networks where the network created a dedicated circuit between two telephones for the duration of a telephone call. It contrasts with message switching and packet switching used in modern digital networks in which the trunklines between switching centers carry data between many different nodes in the form of data packets without dedicated circuits. <br/>


### <span class="section-num">12.4</span> access network {#access-network}


#### <span class="section-num">12.4.1</span> digital subscriber line {#digital-subscriber-line}


#### <span class="section-num">12.4.2</span> cable network {#cable-network}


#### <span class="section-num">12.4.3</span> home network {#home-network}


#### <span class="section-num">12.4.4</span> enterprise access network {#enterprise-access-network}


#### <span class="section-num">12.4.5</span> wireless access network {#wireless-access-network}


### <span class="section-num">12.5</span> frequency division multiplexing {#frequency-division-multiplexing}

different channels transmitted in different frequency bands in a cable <br/>

<div class="definition">

an **access network** is a type of telecommunications network which connects subscribers to their immediate service provider. It is contrasted with the core network, which connects local providers to one another. <br/>

</div>


## <span class="section-num">13</span> osi model {#osi-model}

| name         | protocols                   |
|--------------|-----------------------------|
| application  | http,ftp,SMTP/POP3/IMAP,DNS |
| presentation |                             |
| session      |                             |
| transport    |                             |
| network      |                             |
| data link    |                             |
| physical     |                             |


### <span class="section-num">13.1</span> application layer {#application-layer}


#### <span class="section-num">13.1.1</span> http {#http}

the HTTP [protocol](#protocol) is based on [tcp](#tcp) <br/>


##### <span class="section-num">13.1.1.1</span> http methods {#http-methods}

http/1.0 has the methods GET,POST,HEAD <br/>
http/1.1 has the methods GET,POST,HEAD,PUT,DELETE <br/>


##### <span class="section-num">13.1.1.2</span> webserver {#webserver}


##### <span class="section-num">13.1.1.3</span> persistent http {#persistent-http}

HTTP persistent connection, also called HTTP keep-alive, or HTTP connection reuse, is the idea of using a single [TCP](#tcp) connection to send and receive multiple HTTP requests/responses, as opposed to opening a new connection for every single request/response pair <br/>
A persistent connection takes 1 RTT for the connection and then transfers as many objects as wanted over this single connection. <br/>
RTT stands for the round-trip time taken for an object request and then its retrieval. In other words, it is the time taken to request the object from the client to the server and then retrieve it from the server back to the client. <br/>


##### <span class="section-num">13.1.1.4</span> non-persistent http {#non-persistent-http}

The non-persistent connection has connection type 1.0 <br/>
such connection takes a total time of 2RTT + file [transmission delay](#transmission-delay). It takes the first RTT (round-trip time) to establish the connection between the server and the client. The second RTT is taken to request and return the object. This case stands for a single object transmission. <br/>
After the client receives the object in non-persistent, the connection is immediately closed. This is the basic difference between persistent and non-persistent. The persistent connection ensures the transfer of multiple objects over a single connection. <br/>


##### <span class="section-num">13.1.1.5</span> cache proxy server {#cache-proxy-server}

a [proxy](#proxy) that is used as a cache, where the user makes all the requests to it and if it doesnt have a specific object it requests it from the origin server and returns it (and often stores it for future requests) <br/>


##### <span class="section-num">13.1.1.6</span> pipelining {#pipelining}

HTTP pipelining is a feature of HTTP/1.1 which allows multiple HTTP requests to be sent over a single TCP connection without waiting for the corresponding responses. <br/>


##### <span class="section-num">13.1.1.7</span> form input {#form-input}

using **POST method**: <br/>
web page often includes form input <br/>
input is uploaded to server in entity body <br/>
using **URL method**: <br/>
uses GET method <br/>
input is uploaded in URL field of request line, e.g. www.somesite.com/animalsearch?monkeys&amp;banana <br/>


##### <span class="section-num">13.1.1.8</span> status code {#status-code}

**status code** appears in 1st line in server-to-client response message. <br/>
some status codes: <br/>

| code | name                       | description                                                                  |
|------|----------------------------|------------------------------------------------------------------------------|
| 200  | OK                         | request succeeded, requested object later in this msg                        |
| 301  | Moved Permanently          | requested object moved, new location specified later in this msg (Location:) |
| 400  | Bad Request                | request msg not understood by server                                         |
| 404  | Not Found                  | requested document not found on this server                                  |
| 505  | HTTP Version Not Supported |                                                                              |


#### <span class="section-num">13.1.2</span> dns {#dns}

**domain name system** is a protocol that allows identifying machines with [domain name](#domain-name) by converting them into [IP](#ip) addresses <br/>


##### <span class="section-num">13.1.2.1</span> domain name {#domain-name}


##### <span class="section-num">13.1.2.2</span> name server {#name-server}

a **[DNS](#dns) [server](#server)** keeps records of DNS entries that map domain names to their corresponding IP addresses which can be served to other machines <br/>
when a client wants to to communicate with a machine using its domain name, it makes a request to a dns server, if the server has a record of said domain name, it returns sends it back to the client, if it doesnt, it either sends back an IP to another dns server that has that record or it makes a request to that dns server itself and sends back the response to the client <br/>

{{< figure src="~/.emacs.d/latex/1btUy2d.svg" >}} <br/>

<div class="my_example">

a client wants the IP for www.amazon.com; 1st approximation would be: <br/>

-   client queries root server to find com DNS server <br/>
-   client queries .com DNS server to get amazon.com DNS server <br/>
-   client queries amazon.com DNS server to get IP address for www.amazon.com <br/>

</div>


##### <span class="section-num">13.1.2.3</span> root name server {#root-name-server}

contacted by local name server that can not resolve name <br/>
a root server contacts authoritative name server if name mapping not known and returns the mapping to the local name server <br/>
there are 13 root name "servers" worldwide <br/>


##### <span class="section-num">13.1.2.4</span> resource record {#resource-record}

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


##### <span class="section-num">13.1.2.5</span> top level domain {#top-level-domain}

a top-level [domain]({{< relref "discrete_maths2.md#domain" >}}) is one of the domains at the highest level in the hierarchical [DNS](#dns) of the [internet](#internet) after the root domain, a TLD server is responsible for these domains, examples include com,org,net,edu,aero. <br/>


##### <span class="section-num">13.1.2.6</span> authoritative name server {#authoritative-name-server}

an organization’s own DNS servers, providing authoritative hostname to IP mappings for the organization’s named hosts <br/>
can be maintained by an organization or a service provider <br/>


##### <span class="section-num">13.1.2.7</span> local name server {#local-name-server}

does not strictly belong to hierarchy <br/>
each ISP (residential ISP, company, university) has one <br/>
also called “default name server” <br/>
when host makes DNS query, query is sent to its local DNS server <br/>
has local cache of recent name-to-address translation pairs (but may be out of date!) <br/>
acts as proxy, forwards query into hierarchy <br/>


##### <span class="section-num">13.1.2.8</span> dns caching {#dns-caching}

a server/client can store a record of a domain name and its corresponding IP address for a specific amount of time so that it wont have to make the same request to a dns server over and over again <br/>


##### <span class="section-num">13.1.2.9</span> dns practice problems {#dns-practice-problems}

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


##### <span class="section-num">13.1.2.10</span> dns resolver {#dns-resolver}

a DNS resolver, also called a recursive resolver, is a server designed to receive DNS queries from web browsers and other applications. The resolver receives a hostname - for example, www.example.com - and is responsible for tracking down the IP address for that hostname. <br/>


##### <span class="section-num">13.1.2.11</span> iterative query {#iterative-query}

contacted server replies with name of server to contact "I don’t know this name, but ask this server" <br/>


##### <span class="section-num">13.1.2.12</span> recursive query {#recursive-query}

puts burden of name resolution on contacted name server <br/>
heavy load at upper levels of hierarchy? <br/>


#### <span class="section-num">13.1.3</span> dhcp {#dhcp}


### <span class="section-num">13.2</span> transport layer {#transport-layer}


#### <span class="section-num">13.2.1</span> multiplexing {#multiplexing}

the sender handles data from multiple [socket](#socket)s, and adds transport header (later used for [demultiplexing](#demultiplexing)) <br/>


#### <span class="section-num">13.2.2</span> demultiplexing {#demultiplexing}

the receiver uses header info to deliver received segments to correct socket <br/>


### <span class="section-num">13.3</span> network layer {#network-layer}


#### <span class="section-num">13.3.1</span> ip {#ip}


##### <span class="section-num">13.3.1.1</span> ip fragmentation {#ip-fragmentation}

IP fragmentation is an [ip](#ip) process that breaks packets into smaller pieces (fragments), so that the resulting pieces can pass through a link with a smaller maximum transmission unit (MTU) than the original packet size. The fragments are reassembled by the receiving host. <br/>


##### <span class="section-num">13.3.1.2</span> ip routing {#ip-routing}

<https://www.ibm.com/docs/en/zos/2.4.0?topic=internetworking-ip-routing> <br/>
IP routing is based on routing tables held within a router or internet host. These tables contain routes which can either be static or dynamic. Typically, static routes are predefined within a configuration file, and dynamic routes are learned from the network, using a routing protocol. <br/>


###### <span class="section-num">13.3.1.2.1</span> direct routing {#direct-routing}

direct routing can take place when two hosts are directly connected to the same physical network. This can be a bridged token-ring network, a bridged Ethernet, or a bridged token-ring network and Ethernet. The distinction between direct routing and indirect routing is that, with direct routing, an IP datagram can be delivered to the remote host without subsequent interpretation of the IP address, by an intermediate host or router. <br/>


###### <span class="section-num">13.3.1.2.2</span> indirect routing {#indirect-routing}

indirect routing takes place when the destination is not on a directly attached IP network, forcing the sender to forward the datagram to a router for delivery. <br/>
In Figure 1, a datagram from Machine A being delivered to Machine C would be using indirect routing, with Machine D acting as the router (or gateway). <br/>


#### <span class="section-num">13.3.2</span> arp {#arp}


### <span class="section-num">13.4</span> tcp {#tcp}

**reliable transport** between sending and receiving process <br/>
**flow control**: sender won’t overwhelm receiver <br/>
**congestion control**: throttle sender when network overloaded <br/>
**does not provide**: timing, minimum throughput guarantee, security <br/>
**connection-oriented**: setup required between client and server processes <br/>


### <span class="section-num">13.5</span> udp {#udp}

**unreliable data transfer** between sending and receiving process <br/>
**does not provide**: reliability, flow control, congestion control, timing, throughput guarantee, security, orconnection setup <br/>


#### <span class="section-num">13.5.1</span> udp checksum {#udp-checksum}


### <span class="section-num">13.6</span> acknowledgement {#acknowledgement}


## <span class="section-num">14</span> reliable connection {#reliable-connection}

for a connection to be reliable: <br/>

1.  all the data sent should be received <br/>
2.  data is received without duplication <br/>
3.  the data is received in the order it wasnt sent <br/>


### <span class="section-num">14.1</span> stop and wait {#stop-and-wait}

a [protocol](#protocol) designed for reliability such that it keeps resending a packet until it is delivered successfully, controlled by a `timeout`, denoted by \\(T\_\text{out}\\) <br/>
assuming a transmission failure [probability]({{< relref "20220813151352-probability.md" >}}) of \\(p\\), the [average]({{< relref "20220813152209-average.md" >}}) time for a successful transmission is found using [geometric distribution]({{< relref "20220813151352-probability.md#geometric-distribution" >}}) <br/>
\\[
T\_v = \frac{1}{1-p}(T\_i+T\_\text{out})
\\] <br/>
the efficiency is <br/>
\\[
u = \frac{T\_i}{T\_v} = \frac{T\_i}{\frac{1}{1-p}(T\_i+T\_\text{out})}
\\] <br/>
we denote \\(a\\) as the number of times \\(T\_i\\) is contained in \\(T\_v\\) <br/>
\\[
a = \frac{T\_i+T\_\text{out}}{T\_i} = \frac{T\_i}{T\_i} + \frac{T\_\text{out}}{T\_i} = 1 + \frac{T\_\text{out}}{T\_i}
\\] <br/>
which implies that \\(a-1=\frac{T\_\text{out}}{T\_i}\\) and <br/>
\\[
u = \frac{T\_i}{\frac{1}{1-p}(T\_i+T\_\text{out})} = \frac{(1-p)T\_i}{T\_i+T\_\text{out}} = \frac{1-p}{\frac{T\_i+T\_\text{out}}{T\_i}} = \frac{1-p}{a}
\\] <br/>

<div class="lemma">

\\(T\_\text{out} \geq 2T\_p\\) <br/>

</div>


#### <span class="section-num">14.1.1</span> stop and wait efficiency {#stop-and-wait-efficiency}

the efficiency is the [transmission delay](#transmission-delay) over the time taken for a successful transmission <br/>
\\[
u = \frac{T\_i}{T\_v} = \frac{T\_i}{\frac{1}{1-p}(T\_i+T\_\text{out})}
\\] <br/>


### <span class="section-num">14.2</span> go-back-n {#go-back-n}

in the **go-back-n** [protocol](#protocol) the sender doesnt wait for an `ack` packet but keeps sending continuous packets each with its own `time-out`, if a `time-out` of a packet expires or if the sender receives a `nack` packet, it resends the packet and then all the packets that were sent after it <br/>
the sender only drops a packet if it knows it has arrived successfully <br/>


#### <span class="section-num">14.2.1</span> go-back-n efficiency {#go-back-n-efficiency}

assuming a transmission failure [probability]({{< relref "20220813151352-probability.md" >}}) of \\(p\\), and \\(a\\) as the number of times \\(T\_i\\) is contained in \\(T\_v\\) ([average]({{< relref "20220813152209-average.md" >}}) time for a successful delivery), the efficiency of the [go-back-n](#go-back-n) protocol is defined as <br/>
\\[
u = \frac{T\_i}{T\_v} = \frac{1-p}{1-p+ap}
\\] <br/>
we denote by \\(x\\) the number of [packet](#packet)s that we can transmit in a timespan \\(T\_\text{total}\\) <br/>
a reminder that if we have transmissions all through \\(T\_\text{out}\\) then \\(x=a\\) <br/>
so we can conclude that in such a case the efficiency is: <br/>
\\[
u = \frac{1-p}{1-p+xp} \cdot \frac{x}{a},\\, x < a
\\] <br/>

<div class="question">

given two nodes A and B that communicate the using [go-back-n](#go-back-n) protocol, given: <br/>

-   [bandwidth](#bandwidth) is 2mbps <br/>
-   [propagation delay](#propagation-delay) of a bit from A to B or vice versa is 9ms <br/>
-   timeout is set to \\(2T\_p\\) <br/>
-   the probability of a successful transmission of a packet is \\(1-p\\), ack packets arrive successfully all the time <br/>
-   the size of a packet is 1500 bits <br/>
-   time it takes to send ack packets and the time it takes for the nodes to process packets are negligable <br/>
-   the size of transmission window of A is 16 <br/>

<div class="subquestion">

what is the efficiency of the protocol as a function of \\(p\\)? <br/>

<div class="answer">

\begin{gather\*}
  T\_i = \frac{L}{C} = \frac{1500}{2\cdot10^6} = .75\text{ms} = 0.00075\text{sec}\\\\
  a = \frac{T\_i+T\_\text{out}}{T\_i} = 25 > 16 = x\\\\
  u = \frac{1-p}{1-p+16p} \cdot \frac{16}{25} = \frac{1-p}{1+15p} \cdot \frac{16}{25}
\end{gather\*}

</div>

</div>

<div class="subquestion">

what is the [average]({{< relref "20220813152209-average.md" >}}) number of bits that go through the third layer of B every second? <br/>

<div class="answer">

\\[
u \cdot c = \frac{1-p}{1+15p} \cdot \frac{16}{25} = \frac{2\cdot10^6}{\text{bandwidth}}
\\] <br/>

</div>

</div>

<div class="subquestion">

assume that between A and B the connection used the [stop and wait](#stop-and-wait) protocol wait the same properties given above, what is the efficiency here and how many bits on average arrive at layer 3 of B? <br/>

<div class="answer">

the efficiency is <br/>
\\[
u = \frac{1-p}{a} = \frac{1-p}{25}
\\] <br/>
the average numbers of bits that arrive at layer 3 is <br/>
\\[
u \cdot c = \frac{1-p}{25} \cdot 2 \cdot 10^6
\\] <br/>

</div>

</div>

<div class="subquestion">

assume that both protocols operated on this connection, where the stop and wait protocol sends its packets when the go-back-n protocol isnt making use of the connection, what is the efficiency of both protocols together? <br/>

<div class="answer">

\\[
u = \underbrace{\frac{1-p}{1+15p} \cdot \frac{16}{25}}\_{\text{go-back-n}} + \underbrace{\frac{1-p}{25}}\_{\text{\clap{stop and wait}}}
\\] <br/>

</div>

</div>

<div class="answer">

assume that instead of adding the stop and wait protocol to the connection we could increase the size of the communication window to 17, for which value of \\(p\\) is this method favorable over the previous method as far as the efficiency goes? <br/>

</div>

</div>


#### <span class="section-num">14.2.2</span> selective repeat {#selective-repeat}


## <span class="section-num">15</span> protocols of some popular applications {#protocols-of-some-popular-applications}

| application            | application layer protocol    | underlying transport protocol |
|------------------------|-------------------------------|-------------------------------|
| email                  | SMTP [RFC 2821]               | TCP                           |
| remote terminal access | Telnet [RFC 854]              | TCP                           |
| web                    | http [RFC 2616]               | TCP                           |
| file transfer          | FTP [RFC 959]                 | TCP                           |
| streaming multimedia   | HTTP, RTP [RFC 1889]          | TCP/UDP                       |
| internet telephony     | SIP,RTP,proprietary protocols | TCP/UDP                       |


## <span class="section-num">16</span> socket {#socket}


## <span class="section-num">17</span> p2p {#p2p}


## <span class="section-num">18</span> proxy {#proxy}


## <span class="section-num">19</span> cyclic redundancy check {#cyclic-redundancy-check}


## <span class="section-num">20</span> network bridge {#network-bridge}

A network bridge is a computer networking device that creates a single, aggregate network from multiple communication networks or network segments. This function is called **network bridging**. Bridging is distinct from [routing](#ip-routing). Routing allows multiple networks to communicate independently and yet remain separate, whereas bridging connects two separate networks as if they were a single network. In the OSI model, bridging is performed in the data link layer (layer 2). If one or more segments of the bridged network are wireless, the device is known as a wireless bridge. <br/>
from the perspective of the [internet](#internet), this a network represents forms a single network with a single ip address <br/>


### <span class="section-num">20.1</span> transparent bridge {#transparent-bridge}


## <span class="section-num">21</span> piggybacking {#piggybacking}

piggbacking refers to the technique of waiting after receiving a packet until the network layer moves to the next data packet and then responding with an [ack](#acknowledgement) packet <br/>
basically it refers to the process of delaying an ack packet <br/>


## <span class="section-num">22</span> FDMA {#fdma}


## <span class="section-num">23</span> citations {#citations}

credit where credit is due <br/>
<https://en.wikipedia.org/wiki/Top-level_domain> <br/>
<https://ns1.com/resources/what-is-dns> <br/>


## <span class="section-num">24</span> TDMA {#tdma}

