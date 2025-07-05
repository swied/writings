---
layout: default
title: "Writing Projects"
---

Welcome to my portfolio of writing projects. Explore the latest work below.

<ul class="project-list">
  {% assign sorted_projects = site.projects | sort: "date" | reverse %}
  {% for project in sorted_projects %}
    <li class="project-item">
      <a href="{{ project.url | relative_url }}">
        {% if project.thumbnail %}<img src="{{ project.thumbnail | relative_url }}" alt="{{ project.title }} thumbnail" class="thumb" />{% endif %}
        <span class="project-title">{{ project.title }}</span>
      </a>
      <span class="project-date">{{ project.date | date: "%b %d, %Y" }}</span>
    </li>
  {% endfor %}
</ul>
