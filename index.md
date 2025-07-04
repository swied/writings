---
layout: default
title: Home
---

# Writing Projects

Welcome to my portfolio of writing projects. Explore the projects below or use the sidebar to browse their individual articles.

<div class="project-grid">
{% for proj in site.projects %}
  <div class="project-card">
    <a href="{{ proj.url }}">
      {% if proj.thumbnail %}
        <img src="{{ proj.thumbnail }}" alt="Thumbnail for {{ proj.title }}">
      {% endif %}
      <h3>{{ proj.title }}</h3>
    </a>
    <p>{{ proj.excerpt | markdownify }}</p>
  </div>
{% endfor %}
</div>
