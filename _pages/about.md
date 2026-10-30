---
permalink: /
title: "About Me"
homepage: true
title_anchor: about
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

I am a third-year PhD candidate in Data Science and Analytics at The Hong Kong University of Science and Technology (Guangzhou), advised by Prof. Zeyi Wen.

I work on machine learning systems for efficient long-context inference in large language models. My research brings together algorithm and system design, with a focus on KV cache optimization, low-precision GPU computing, and speculative decoding.

## Publications

{% include home-publications.html %}

## Education

<div class="education-list">
  <div class="education-entry">
    <p class="entry-date">09/2024 – present</p>
    <div>
      <h3>Ph.D. in Data Science and Analytics</h3>
      <p><a href="https://www.hkust-gz.edu.cn/">The Hong Kong University of Science and Technology (Guangzhou)</a></p>
      <p class="entry-detail">Guangzhou, China · Advised by Prof. Zeyi Wen</p>
    </div>
  </div>
  <div class="education-entry">
    <p class="entry-date">09/2018 – 06/2022</p>
    <div>
      <h3>B.S. in Software Engineering</h3>
      <p><a href="https://www.scut.edu.cn/">South China University of Technology</a></p>
      <p class="entry-detail">Guangzhou, China</p>
    </div>
  </div>
</div>

## Teaching

Teaching assistant at HKUST(GZ).

{% for post in site.teaching reversed %}
- {{ post.title }}, {{ post.term }}.
{% endfor %}
