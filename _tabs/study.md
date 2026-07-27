---
title: 学习
icon: fas fa-graduation-cap
order: 2
permalink: /study/
---

# 学习笔记

记录课程学习、论文阅读、编程实践与知识总结。

{% assign study_posts = site.categories["学习"] %}
{% if study_posts.size > 0 %}
{% for post in study_posts %}
- **{{ post.date | date: "%Y-%m-%d" }}** · [{{ post.title }}]({{ post.url | relative_url }})
{% endfor %}
{% else %}
还没有公开学习笔记。
{% endif %}
