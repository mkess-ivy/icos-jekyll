---
layout: full_width
title: Programs
permalink: /programs/

description: Intensive Care Outpatient Services offers outpatient services to youth and adults providing in-home services, workshops, and mental health skill-building
keywords: mental skill building, mental skill-building, in-home services, mental health, behavioral health, psychotherapy, custom service plans, clinical assessments, therapy, intensive care, Richmond behavioral health, Richmond youth programs, ICOS
---

<div class="page_wrapper">
	<section class="container">
		<div id="about" class="page with_sidebar">
			<h1>Programs</h1>
			<div class="full">
				<center><img src="/images/content/programs_masthead.jpg" alt="" class="rounded" /></center>
				<p class="larger"><b>Welcome to ICOS!</b> A human services organization designed to help our communities and its individuals.</p>
				<div id="services">
					<div class="services_wrapper">
						<div class="box_heading">
							<h2>Services</h2>
							<span class="line"></span>
	        			</div>
	        			<ul>
	        				{% for item in site.data.services %}
							<li>{{ item.service }}</li>
							{% endfor %}
						</ul>
					</div>

					<div id="programs">
						<div class="box_heading">
							<h2>Capabilities</h2>
							<span class="line"></span>
						</div>
          				<div class="box_heading">
							<h4>Intensive In-Home Services Program</h4>
							<div class="body_text">Intensive In-Home Services are provided to children and youth ages 5 to 18.  Services are provided to children and youth who:</div>
            				<ul>
								<li>Who have returned or are returning home from out-of-home care or psychiatric hospitalization</li>
								<li>Require intensive community based services, or are at imminent risk of placement due to mental health or behavioral issues</li>
								<li>Have experienced trauma</li>
							</ul>
            
            				<p>Intensive In-Home counselors provide clinical interventions and support services necessary to successfully reintegrate and maintain each child in his or her home or community.  Intensive In-Home Counselors provide skill building sessions that help the child and family develop important social and relationship skills to assist with communication barriers, coping, and managing anger and stress.  Services are provided by ICOS are child-centered, family-focused, strength-based, culturally sensitive and responsive to each child's psychosocial and developmental needs. </p>
						</div>

						<div class="box_heading">
							<span class="line"></span>
							<h4>Community-Based & Mental Health Support Services</h4>
							<p>Intensive Community Outreach Services (ICOS) works to support individuals in an effort to help maintain and enhance their level of functioning in the home and community.  ICOS is dedicated to assisting adults with mental illness work towards greater independence.</p>
							<br>
							<p>Eligibility Criteria:</p>
							<ul>
								<li>Adults (ages 18+)</li>
								<li>Pattern of emotional or behavioral concerns that interferes with functioning in the home or community</li>
								<li>Current or previous mental health diagnosis</li>
							</ul>
						</div><!-- .box_heading -->
					</div><!-- #programs -->

					<div id="programs">
						<div class="box_heading">
							<h2>Programs</h2>
							<span class="line"></span>
						</div>
						{% for item in site.programs %}
						<div class="one_third {% if forloop.last %} column_last {% endif %}">
							<img src="{{ item.featured_image }}" alt="" />
							<h4><a href="{{ item.url }}">{{ item.title }}</a></h4>
							<p>{{ item.description }}</p>
						</div>
						{% endfor %}
					</div>
				</div><!-- #services -->
			</div><!-- .full -->
		</div><!-- .about -->
	</section><!-- .container -->
</div><!-- .page_wrapper -->