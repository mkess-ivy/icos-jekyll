---
layout: full_width
title: Community Outreach
permalink: /community-outreach/

description: ICOS is proud to be part of our local community.
keywords: mental health, mental illness, mental health stigma, mental illness stigma, mental health problems, community based services
---

<div class="page_wrapper">
	<section class="container">
		<div id="about" class="page with_sidebar">
			<h1>Community Outreach</h1>

			<!-- Start Slider -->
			<div class="flexslider-container">
				<div id="slider" class="flexslider">
					<ul class="slides">
						{% for item in site.data.community-slider %}
						<li>
					    	<img src="{{ item.image }}" alt="{{ item.alt }}" title="{{ item.alt }}"/>
					  	</li>
					  	{% endfor %}
					  
					</ul>
				</div>
			</div>

			<div class="space-20"></div>

			<div class="media">
				<div class="box_heading">
					<h2>Media</h2>
					<span class="line"></span>
				</div>
				<div class="media-video center-pos">
					<iframe width="640" height="360" src="https://www.youtube.com/embed/kBiT3f0suNw" frameborder="0" allowfullscreen class="iframe-width"></iframe>
				</div>
			</div>
			<div class="space-20"></div>
		</div>
	</section>
</div>