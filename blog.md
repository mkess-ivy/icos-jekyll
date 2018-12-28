---
layout: full_width
title: Blog
permalink: /blog/

description: Learn more about mental illness on the ICOS blog.
keywords: mental health, mental illness, mental health stigma, mental illness stigma, mental health problems
---

<div class="page_wrapper">
	<section class="container">

		
		<div id="blog" class="page with_sidebar">

			<h1>ICOS Blog</h1>

			{% for post in site.posts %}

            <div class="post">
                <center>
                    <img src="{{ post.featured_image }}" alt="" class="rounded" />
                </center>
                <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
                <div class="meta">
                    <span class="date"> <span class="icon general">i</span> {{ post.date | date: '%B %d, %Y' }}</span>
                    
                    <span class="author"> <span class="icon social_misc">x</span> by {{ post.author }}</span>
                </div>
                <p>{{ post.excerpt }}</p>
            </div>

            {% endfor %} 

		</div>
		

	</section>
</div>