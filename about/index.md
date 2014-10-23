---
title: About
layout: default
---

<!-- {% assign jackieData = site.data.jackie %} -->

## Hello!

I'm Jackie Song, a senior mechanical engineering student at The Cooper Union for the Advancement of Science and Art in New York, NY. I'm working on 3D printing carbon fiber, an industrial tube notcher, and much more. 

## Contact

Email me at <{{ jackieData.email }}>! 

Or, find me on these other sites: 	

{% for account in jackieData.accounts %}+ 
[{{ account.site }}]({{ account.url }})
{% endfor %}
