---
layout: archive
title: "Curriculum Vitae"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
  - /cv-json/
  - /resume-json
---

## Education

**The Hong Kong University of Science and Technology (Guangzhou)**<br>
PhD in Data Science and Analytics, September 2024 – June 2028 (expected)<br>
Advisor: Prof. Zeyi Wen

**South China University of Technology**<br>
BS in Software Engineering, September 2018 – June 2022

## Research Interests

Machine learning systems, with a focus on efficient long-context LLM inference through algorithm-system co-design, KV cache optimization, low-precision GPU computing, and speculative decoding.

## Technical Skills

Python, C++, CUDA, TileLang, vLLM

## Publications

{% for post in site.publications reversed %}
- **{% if post.paperurl %}[{{ post.title }}]({{ post.paperurl }}){% else %}{{ post.title }}{% endif %}**<br>
  {{ post.authors | markdownify | remove: '<p>' | remove: '</p>' | strip }}<br>
  *{{ post.venue }}*, {{ post.date | date: "%B %Y" }}.
{% endfor %}

## Teaching

Teaching Assistant, The Hong Kong University of Science and Technology (Guangzhou):

{% for post in site.teaching reversed %}
- [{{ post.title }}]({{ post.url | relative_url }}), {{ post.term }}.
{% endfor %}

## Academic Service

Conference Reviewer: NeurIPS 2026, ICLR 2026.

## Honors

- Postgraduate Studentship, HKUST(GZ)
- Second-Class Scholarship, South China University of Technology

## Contact

Guangzhou, China<br>
[chengxi_31@163.com](mailto:chengxi_31@163.com) · [GitHub](https://github.com/cxiliao)
