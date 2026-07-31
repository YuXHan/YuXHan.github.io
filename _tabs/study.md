---
title: Study
icon: fas fa-graduation-cap
order: 2
permalink: /study/
---


{% assign study_posts = site.categories["学习"] %}


# Study Notes
Course learning, paper reading, programming practice, and knowledge summaries.


{% if study_posts.size > 0 %}
{% for post in study_posts %}
- **{{ post.date | date: "%Y-%m-%d" }}** · [{{ post.title }}]({{ post.url | relative_url }})
{% endfor %}
{% else %}
No public study notes yet.
{% endif %}
