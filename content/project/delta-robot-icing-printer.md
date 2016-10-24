---
title: Delta Robot Icing Printer
categories: [School, robots, 3D printing, food, electronics]
imagedir: https://s3-us-west-2.amazonaws.com/js-media/images/icing
thumbnail: icing4_thumb.jpg
---

Cooper held its first hackathon, HackCooper, in February 2014. Having an engineering school but no computer science major, the hackathon was uniquely dominated by hardware projects. I teamed up with a classmate to make a delta robot icing printer in 24 short (but actually quite long) hours.

<iframe width="560" height="315" src="//www.youtube.com/embed/bELEzc5sVLs?list=UUkZWlgLuscRlYebpgWH9lig" frameborder="0" allowfullscreen></iframe>

We had the advantage of working on our home turf, so there was plenty of hardware to be had. Being in our own lab also meant we had laser cutter duties, both being laser operators, so we both took laser shifts for other hacker throughout the night.

The robot has 3 parallel arms, each driven by a servo motor; the arms meet at the end effector, which in this case is the business end of an icing feed tube.
{{< large-image image="icing1.jpg" alt="delta robot top" >}}

The arm joints in a delta robot usually appear as spherical rod ends in delta robots; we made do with a laser cut wood and screw universal-like joint system. These joints left far more slack than anticipated.
{{< large-image image="icing3.jpg" alt="delta elbow" >}}

The icing delivery system presented some trouble, but the lead screw mechanism did eventually work. We did have to thin the icing (confectioner's sugar and water only) to an uncomfortably thin consistently.
{{< large-image image="icing9.jpg" alt="icing syringe pump, in case you need intravenous sugar delivery" >}}

Here's the whole setup, including the Arduino controller. We used an open source Gcode-to-delta-robot Arduino library to control the thing.
{{< large-image image="icing6.jpg" alt="the whole icing robot." >}}

We printed a happy little icing heart on a hackathon-provided Insomnia Cookie. It was satisfactory for the night's work.
{{< large-image image="icing8.jpg" alt="it's a heart if you take it on faith." >}}
