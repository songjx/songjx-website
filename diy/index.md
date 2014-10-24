---
title: DIY
layout: default
---

{% assign diyData = site.data.menu.DIY %}
{% for subcat in diyData.subcats %}
## {{ subcat }}
{% endfor %}
