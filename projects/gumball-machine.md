---
title: Gumball Machine
layout: default
categories: [Projects, Completed]
image-layout: true
image-dir: /images/gumball
thumbnail: gumball9.jpg
segments: 
  - text: I built this machine for a freshman design course at Cooper called EID103 Principles of Design. The course is meant to give mechanical engineering students a feel for planning and executing a design cycle. My assignment was to make a game based on the Arduino microcontroller platform. Students from a previous year had made a simpler gumball machine that involved a color sensor and a classic spiral track. I was tasked with presenting the next iteration of their idea. Here's how the finished product worked.

  - video: <iframe width="420" height="315" src="//www.youtube.com/embed/uWcKhxWlcuU" frameborder="0" allowfullscreen></iframe>

  - text: I drew a lot of inspiration from Rube Goldberg's fantastic machines, of course, as well as those incredibly fun and complex retail gumball machines that give you a 30 second mechanical show before you get your candy. I was always disappointed that I couldn't track my own particular gumball as it went through the gauntlet, so I made that a hard design requirement in my machine. 

  - text: Many of my ideas never made it past the ideation stage. One day they might. This project provided a hard lesson in project planning that came back to bite me many times over before I could finish it. 
    image: gumball1.png
    alt: initial sketches

  - text: Early prototyping consumed a huge chunk of my time. All of my prototypes were made from cardboard or from a cheaper veneered particle board we had on hand at school. This is where I really learned to work the laser cutter.
    image: gumball5.jpg
    alt: early laser layout

  - text: As I worked through the prototypes for the mechanisms I wanted to create, I realized that laser cutting would be by far the most effective way of bringing most of them to life. I'm happy to say that using laser cut parts probably makes the design much more accessible to anyone who might want to build or modify it in the future. The bulk of the structural and moving elements in the machine are made from laser cut plywood, besides the electronics and some fasteners.

  - text: For all the laser cut goodness, I still think most of the character in the machine comes from the claw hands, which were graciously donated by another student who had just finished fixing a broken Z-Corp powder printer. We suspect that the expensive printing powder is mostly corn starch.
    image: claw.jpg
    alt: the claw

  - text: The claw has a Cartesian setup for navigation around the gumball pen. I used micro hobby servos for this because they were cheaper and more readily available than tiny geared DC motors or steppers; I just had to hack them for continuous rotation. 
    image: gumball19.jpg
    alt: the claw and its axes

  - text: There were some gear trains involved, mostly to reduce the speed output of the micro servo motors, but also for dramatic effect.. 
    image: gumball2.jpg
    alt: gear train

  - text: Here's a control panel toggle lever I built to provide bidirectional DC motor on-off control without needing Arduino. I don't exactly remember if I had discovered H bridges at this point...but I eventually did. Those are SPST limit switches in the base.  
    image: gumball7.jpg
    alt: toggle switch

  - text: Here's a lovely front shot of the machine taken by my good friend <a href="peterascoli.com">Peter Ascoli</a>. The powder-printed skull and cow have sadly gone missing since the time of this photo.

  - image: gumball9.jpg
---
