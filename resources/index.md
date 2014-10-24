---
title: Resources
layout: default
---

{% assign linkData = site.data.resourcesSubcats.links %}
{% assign downloadData = site.data.resourcesSubcats.downloads %}

## Links

{% for category in linkData %}
### {{ category[0] }}
{% for link in category[1] %}
[{{ link.name }}]({{ link.url }}): {{ link.tagline }}  {% endfor %}
{% endfor %}

## Downloads
{% for item in downloadData.items %}
### {{ item.name }}
![{{ item.name }}]({{ site.url }}/images/{{ downloadData.image-folder }}/{{ item.image }}) 
{{ item.description }}
{% for file in item.files %}
+ [{{ file }}]({{ site.url }}/downloads/{{ file }}) {% endfor %}
{% endfor %}


