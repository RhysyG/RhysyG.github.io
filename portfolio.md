---
layout: default
title: Portfolio
permalink: c3f63ee769c8f251565e45cf724f6e4efaee0387/portfolio/
---

<section class="o-band  c-band">
	<div class="o-wrapper  o-wrapper--narrow  u-text-center">
		<p class="page-portfolio-title">Simplicity is the ultimate sophistication.</p>
		<p class="page-portfolio-subtitle">Rhys Gregory is a Product Designer in Melbourne</p>
		<a class="o-btn  c-btn  u-mb  u-desk-mb+" href="mailto:rhys.m.gregory@gmail.com">Get In Touch!</a>
	</div>
	<div class="masonry-grid">
		<div class="masonry-gutter-sizer"></div> 
		<div class="masonry-grid-sizer"></div>
		{% for post in site.posts %}
		<div class="masonry-grid-item">
			{% include portfolio-card/portfolio-card.html
			title=post.title
			excerpt=post.excerpt
			image=post.imageThumb %}
		</div>
		{% endfor %}
	</div>
</section>