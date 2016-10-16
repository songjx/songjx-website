---
title: Carbon Fiber 3D Printing
categories: [School]
tags: [3D printing, robots]
imagedir: /images/carbon-fiber
thumbnail: pultrusion.jpg
---

For our capstone mechanical engineering senior project at The Cooper Union, <a href="http://www.peterascoli.com">Peter Ascoli</a> and I are working on a filament manufacturing and printing method for curved-layer carbon fiber reinforced polymer fused deposition modeling. <a href="https://s3.amazonaws.com/jsong.me/Peter+Jackie+Senior+Project+Semester+1+Poster.pdf">View our fall semester project poster here!</a>

'Our project was developed with desktop FDM (fused deposition modeling) printers in mind. They're now inexpensive and fairly accessible, but they seldom produce usable mechanical parts. The main reason is the strength of materials used. The next is the slicing method: most desktop 3D printers deposit flat layers parallel to the build plate. This limitation makes model slicing relatively simple. However, FDM materials tend to exhibit much greater strength along the direction of the extruded fiber than across the layers; thus, thin curved features printed with flat layers tend to perform poorly.'

CFRP (carbon fiber reinforced polymer) 3D printing filament now has some limited commercial availability. Long-fiber CFRP filament, while a major material improvement over plastic resins alone, also suffers when printed using the flat layer method. Carbon fiber gives the composite increased tensile strength mostly along the direction in which the fiber is laid; printing the fiber in flat layers limits the degree to which the fiber direction can be optimized for the given part geometry and expected loading.

Our goal is to print and validate functional CFRP parts using curved layer fused deposition. Here's a basic breakdown of the analytical and experimental components of our project. 

{{< large-image image="big-picture.png" alt="the big picture" >}}

'We've started testing methods for creating the long-fiber CFRP filament. As we come up with methods, we're making filament samples and running tensile tests on them in an Instron machine to determine their failure modes and tensile strengths.' 

The first method we tested was 3Doodler pultrusion of 1k carbon fiber tow and ABS plastic. 

<iframe width="560" height="315" src="//www.youtube.com/embed/BvaDFv_I80I" frameborder="0" allowfullscreen></iframe>

The pultruded filament looks passable from a distance, but many broken fibers are visible under 10x magnification. 
{{< large-image image="pultrusion.jpg" alt="3Doodler pultruded filament" >}}

We have also made some filament by dipping carbon fiber in an ABS-acetone slurry. This resulted in a filament with better (but still not complete) fiber wet-out and a much smaller diameter. 

<iframe width="560" height="315" src="//www.youtube.com/embed/6i8_cj7t9Mw" frameborder="0" allowfullscreen></iframe>

005 is a pultruded sample; 010 was dipped.
{{< large-image image="filament-samples.jpg" >}}

We have run some tensile tests on our filament samples using aperture cards to fix and protect the ends. Due to trouble aligning the filament to achieve pure uniaxial tension in these tests, we will explore other end fixturing options. However, our preliminary test results are promising in terms of tensile strength. 
{{< large-image image="instron.jpg" alt="aperture card instron test" >}}

To our huge benefit, the school has a small FANUC industrial robot arm available for our use. This arm provides 3 translational and 3 rotational degrees of freedom for our end effector, which means we will have incredible flexibility in generating curved layer printing tool paths. The following video demonstrates how the FANUC robot can be used to print curved-layer FDM objects using a combination of simple motion and branching instructions.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Wy3BejQz0mA?list=PLfvOJvcxNZ4-i63-xdD4xOHczMNj5-sN_" frameborder="0" allowfullscreen></iframe> 

We are in the process of adapting RepRap parts to our robot arm end. Once we have successfully printed ABS plastic, we will move onto printing our homemade CFRP filament.
{{< large-image image="Render1.jpg" alt="end effector CAD" >}}
