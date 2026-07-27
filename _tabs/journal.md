---
title: 日记
icon: fas fa-book-open
order: 1
permalink: /journal/
---

# 日记

记录生活中的片段、感受与阶段性思考。

{% assign journal_posts = site.categories["日记"] %}
{% if journal_posts.size > 0 %}
{% for post in journal_posts %}
- **{{ post.date | date: "%Y-%m-%d" }}** · [{{ post.title }}]({{ post.url | relative_url }})
{% endfor %}
{% else %}
还没有公开日记。
{% endif %}
