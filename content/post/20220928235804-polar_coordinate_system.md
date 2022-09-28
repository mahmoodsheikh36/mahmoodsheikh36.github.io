+++
title = "polar coordinate system"
author = ["user"]
date = 2022-09-29T00:19:00+03:00
draft = false
+++

a 2d [coordinate system]({{< relref "20220929000626-coordinate_system.md" >}}) <br/>
points in the \\(x,y\\) plane are described not by \\((x,y)\\) coordinates but by \\((r,\theta)\\) coordinates, respectively, where \\(r\\) is the [magnitude]({{< relref "linear_algebra2.md#magnitude" >}}) and \\(\theta\\) is the angle between a [vector]({{< relref "linear_algebra2.md#vector" >}}) and the \\(x\\) axis <br/>

\begin{align\*}
  r &= \sqrt{x^2+y^2}\\\\
  \theta &= \arctan\left(\frac{y}{x}\right)
\end{align\*}

{{< figure src="/ox-hugo/mOFGQtH.gif" caption="<span class=\"figure-number\">Figure 1: </span>two-dimensional polar coordinate system" >}} <br/>

{{< figure src="/ox-hugo/n9Brin6.gif" >}} <br/>


## from polar to [cartesian coordinates]({{< relref "20220929001304-cartesian_coordinate_system.md" >}}) {#from-polar-to-cartesian-coordinates--20220929001304-cartesian-coordinate-system-dot-md}

\begin{align\*}
  x &= r\cos(\theta)\\\\
  y &= r\sin(\theta)
\end{align\*}