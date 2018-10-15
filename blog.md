---
layout: full_width
title: Blog
permalink: /blog/

description: The ICOS Blog shares information and relevant articles to provide information to our clients about different behavioral and mental health concerns.
keywords: mental health blog, mental health concerns, mental health articles, spousal trauma, youth depression, divorce, family intervention
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