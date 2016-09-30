---
title: Home
layout: default
---

<!-- {% assign jackieData = site.data.jackie %} -->

## Hello!

I'm Jackie Song, engineer and person who likes to make things.

## Contact

Email me at <{{ jackieData.email }}>, or find me on these other sites:

{% for account in jackieData.accounts %}+ 
[{{ account.site }}]({{ account.url }})
{% endfor %}

## Site

This site was generated using [Jekyll](http://jekyllrb.com) and is hosted on [Github Pages](https://pages.github.com/). Icons are from [Font Awesome](http://fontawesome.io/). 
