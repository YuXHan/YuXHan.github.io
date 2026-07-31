---
title: Journal
icon: fas fa-book-open
order: 1
permalink: /journal/
---

{% assign journal_posts = site.categories["日记"] %}

<div class="lang-zh" markdown="1">

# 日记
Capturing life moments, reflections, and milestone thoughts.

{% if journal_posts.size > 0 %}
{% for post in journal_posts %}
- **{{ post.date | date: "%Y-%m-%d" }}** · [{{ post.title }}]({{ post.url | relative_url }})
{% endfor %}
{% else %}
还没有公开日记。
{% endif %}

</div>

<div class="lang-en" markdown="1">

# Journal
Capturing life moments, reflections, and periodic thoughts.

{% if journal_posts.size > 0 %}
{% for post in journal_posts %}
- **{{ post.date | date: "%Y-%m-%d" }}** · [{{ post.title }}]({{ post.url | relative_url }})
{% endfor %}
{% else %}
No public journal entries yet.
{% endif %}

</div>
