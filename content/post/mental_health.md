+++
title = "mental health"
author = ["mahmood"]
description = "mental health"
date = 2022-08-31T20:54:00+03:00
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


## <span class="section-num">1</span> mental illness {#mental-illness}

unlike physical illness, mental illness is related to problems that start in the brain. the brain is an organ. just like any other organs in our body, it can experience changes (healing or injury) based on life experiences like stress, trauma, rejection, lack of sleep, nutrition... <br/>
although Psychiatry has advanced so much over the years to provide us with the knowledge and tools to deal with mental illness, nothing, not even science or religion can give us a better understanding of mental illness than [art]({{< relref "art.md" >}}), thats why i will mostly focus on [art]({{< relref "art.md" >}}) rather than on the study of Psychology or Psychiatry <br/>


### <span class="section-num">1.1</span> psychological pain {#psychological-pain}

just like a physically healthy person can experience physical pain, a person doesnt have to be mentally ill to experience psychological pain <br/>
psychological pain can be a result of physical pain just as physical pain can be a result of psychological pain <br/>
psychological pain is often attributed to psychological factors rather than physical ones, such as beliefs, fears, loneliness, trauma, or emotions in general <br/>
some people believe psychological pain is worse than physical pain, this isnt directly true, but in my experience, there is some truth to it <br/>
first of all, such comparison cant be made, because pain cant be measured, everyone has his own experiences with pain, but what causes psychological pain to be so bad isnt in how severe it is, because physical pain can be just as severe, its the stigma surrounding mental illness that makes it so much harder to cope with. <br/>
psychological pain often comes with feelings of guilt, denial, shame, self hatred, suicidal ideation and since it is often invisible to the eye it makes it so much harder to deal with, being trapped inside ones own mind is a hell of its own that many of those who experience it think [suicide](#suicide) is the only cure, that it is salvation <br/>
although [suicide](#suicide) is often perceived as a taboo, morally wrong action, there is nothing wrong with having suicidal tendencies, it can even be a coping mechanism to convince ones self that they are still in control of their lives, and it often escalates to self harm, which may eventually lead to actual [suicide](#suicide) attempts <br/>
which brings us to the subject of self harm, which is another coping mechanism that (mostly) mentally ill people use to relieve their psychological pain as a means of escape, because physical pain can temporarily distract us from our troubled minds and may even provide us with some comfort <br/>
but those coping mechanisms only worsen mental health in the long run, because they arent really a way to deal with our troubles but to give us a temporary sense of relief, and since the problems arent directly dealt with but often escaped, they worsen, ones mental health worsens, and it all just goes downhill from there, until a person may take his own life, or seek help, which, in its own way, is another hell to go through <br/>
this kind of pain is ruthless, it is hard to deal with, it is invisible to the eye, it can completely change you and you may lose yourself so easily as mental illness is often a short path to the destruction of ones life <br/>
im no psychiatrist, nor do i really know how other people experience pain, but i do know how it all feels. <br/>


### <span class="section-num">1.2</span> suicide {#suicide}

suicide is taking of ones own life, its often misunderstood and is a topic that has gone through centuries of stigmatization <br/>
suicide isnt wrong, but more often than not it isnt the right solution, its important to remember that suicide isnt really a solution, its an escape <br/>


### <span class="section-num">1.3</span> peer support online {#peer-support-online}

you may find some comfort in [art]({{< relref "art.md" >}}) <br/>
heres a list of subreddits you can visit to help you cope with mental illness or to help you get a better understanding of it <br/>

| link                                                                               | description                     |
|------------------------------------------------------------------------------------|---------------------------------|
| [r/GetMotivated](https://www.reddit.com/r/GetMotivated/top/?t=all)                 | motivation                      |
| [r/depression](https://www.reddit.com/r/depression/top/?t=all)                     | depression                      |
| [r/mentalhealth](https://www.reddit.com/r/mentalhealth/top/?t=all)                 | mental health                   |
| [r/Anxiety](https://www.reddit.com/r/Anxiety/top/?t=all)                           | anxiety                         |
| [r/SuicideWatch](https://www.reddit.com/r/SuicideWatch/top/?t=all)                 | suicide                         |
| [r/BipolarReddit](https://www.reddit.com/r/BipolarReddit/top/?t=all)               | bipolar disorder                |
| [r/Schizoid](https://www.reddit.com/r/Schizoid/top/?t=all)                         | schizoid personality disorder   |
| [r/raisedbynarcissists](https://www.reddit.com/r/raisedbynarcissists/top/?t=all)   | abuse                           |
| [r/abusiverelationships](https://www.reddit.com/r/abusiverelationships/top/?t=all) |                                 |
| [r/NarcissisticAbuse](https://www.reddit.com/r/NarcissisticAbuse/top/?t=all)       |                                 |
| [r/BPD](https://www.reddit.com/r/BPD/top/?t=all)                                   | borderline personality disorder |
| [r/ptsd](https://www.reddit.com/r/ptsd/top/?t=all)                                 | Post-traumatic stress disorder  |
| [r/selfharm](https://www.reddit.com/r/selfharm/top/?t=all)                         | self harm                       |
| [r/selfhelp](https://www.reddit.com/r/selfhelp/top/?t=all)                         | self help                       |
| [r/schizophrenia](https://www.reddit.com/r/schizophrenia/top/?t=all)               | schizophrenia                   |
| [r/ForeverAlone](https://www.reddit.com/r/ForeverAlone/top/?t=all)                 | loneliness                      |


### <span class="section-num">1.4</span> severe depression {#severe-depression}

as described by anon <br/>
![](/ox-hugo/4chan_depression.jpg) <br/>