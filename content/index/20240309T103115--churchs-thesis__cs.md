+++
title = "church's thesis"
author = ["mahmood"]
date = 2024-03-09T10:31:00+02:00
tags = ["cs"]
draft = false
+++

<div class="dummy">

[TM](20231116T152235--turing-machine__cs.org)s were invented in the 1930s, long before real computers appeared. they came at a time when mathematicians were trying to come to grips with the notion of effective computation. they knew various algorithms for computing things effectively, but they weren't quite sure how to define "effectively computable" in a general way that would allow them to distinguish between the computable and the noncomputable. several alternative formalisms evolved, each with its own peculiarities, in the attempt to nail down this notion: <br/>

-   [turing machine](20231116T152235--turing-machine__cs.org)s (Alan Turing); <br/>
-   Post systems (Emil Post); <br/>
-   <img src="/ltximg/b849ec35420.svg" alt="\(\mu\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />-recursive functions (Kurt Godel); <br/>
-   [<img src="/ltximg/8e8d33fa109.svg" alt="\(\lambda\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" /> calculus](20240306T153507--lambda-calculus__cs.org) (Alonzo Church); and <br/>
-   combinatory logic (Moses Schonfinkel, Haskell B. Curry). <br/>

all of these systems embody the idea of effective computation in one form or another. they work on various types of data; for example, Turing machines manipulate [string](20231115T210736--string__math.org)s over a finite alphabet, <img src="/ltximg/b849ec35420.svg" alt="\(\mu\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />-recursive functions manipulate the [natural number](20240205T193006--natural-number__math.org)s, the <img src="/ltximg/8e8d33fa109.svg" alt="\(\lambda\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />-calculus manipulates <img src="/ltximg/8e8d33fa109.svg" alt="\(\lambda\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />-terms, and combinatory logic manipulates terms built from combinator symbols. however, there are natural translations between all these different types of data. <br/>
because these vastly dissimilar formalisms are all computationally equivalent, the common notion of computability that they embody is extremely robust, which is to say that it is invariant under fairly radical perturbations in the model. all these mathematicians with their pet systems turned out to be looking at the same thing from different angles. this was too striking to be mere coincidence. they soon came to the realization that the commonality among all these systems must be the elusive notion of effective computability that they had sought for so long. computability is not just Turing machines, nor the <img src="/ltximg/8e8d33fa109.svg" alt="\(\lambda\)" style="height: 0.7789em; vertical-align: -0.0492em; display: inline-block" class="org-latex org-latex-inline" />-calculus, nor the <img src="/ltximg/b849ec35420.svg" alt="\(\mu\)" style="height: 0.7109em; vertical-align: -0.2397em; display: inline-block" class="org-latex org-latex-inline" />-recursive functions, nor the PASCAL programming language, but the common spirit embodied by them all. <br/>
Alonzo Church gave voice to this thought, and it has since become known as _Church's thesis_ (or the Church-Turing thesis). it is not a theorem, but rather a declaration that all these formalisms capture precisely our intuition about what it means to be effectively computable in principle, no more and no less. Church's thesis may not seem like such a big deal in retrospect, since by now we are thoroughly familiar with the capabilities of modern computers; but keep in mind that at the time it was first formulated, computers and programming languages had yet to be invented. coming to this realization was an enormous intellectual leap. <br/>
probably the most compelling development leading to the acceptance of Church's thesis was the Turing machine. it was the first model that could be considered readily programmable. if someone laid one of the other systems out in front of you and declared, "this system captures exactly what we mean by effectively computable," you might harbor some skepticism. but it is hard to argue with Turing machines. one can rightly challenge Church's thesis on the grounds that there are aspects of computation that are not addressed by Turing machines (for example, randomized or interactive computation), but no one could dispute that the notion of effective computability as captured by Turing machines is robust and important. <br/>
(;copied fromsee Dexter C. Kozen, 1997 lecture 28 turing machines and effective computability) <br/>

</div>

