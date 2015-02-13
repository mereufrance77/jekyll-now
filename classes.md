---
layout: page
title: Classes
permalink: /weeks/
---

In this page you can find my progress with class assignments

<ul class="post-list">
  {% for post in site.posts reversed %}
      <li>
		  <strong>{{ post.date | date: "%b %-d, %Y" }}</strong>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
      </li>
    {% endfor %}
  </ul>
