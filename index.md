---
title: Home
layout: default
---

<!-- {% assign jackieData = site.data.jackie %} -->

## Hello!

I'm Jackie Song, a senior mechanical engineering student at The Cooper Union for the Advancement of Science and Art in New York, NY. I'm working on 3D printing carbon fiber, an industrial tube notcher, and much more. 

## Contact

View my [resume](/downloads/jackie-song-resume.pdf), email me at <{{ jackieData.email }}>, or find me on these other sites: 	

{% for account in jackieData.accounts %}+ 
[{{ account.site }}]({{ account.url }})
{% endfor %}

## Site

This site was generated using [Jekyll](http://jekyllrb.com) and is hosted on [Github Pages](https://pages.github.com/); you can view the repo [here](https://github.com/songjx/songjx.github.io). Icons are from [Font Awesome](http://fortawesome.github.io/Font-Awesome/). 
