---
layout: full_width
title: ICOS Team
permalink: /team/

description: Meet the ICOS team and learn how they support the mission and vision of this organization.
keywords: mental health skill building, community-based support, community resources, counselors, Alexandria, Mechanicsville, Norfolk, Richmond
---

<div class="page_wrapper">
	<section class="container">
        <div id="about" class="page with_sidebar">
			<h1>Our Team</h1>
			<p>The ICOS Team has a proven track record of delivering superb service to our clients and community.  Our team has a combined experience of over 20 years in Healthcare working with families to improve their outlooks and understanding about mental and behavioral health for their families.</p>
			<div class="spacer"></div>
			<section class="team-container">
				<div class="frow justify-start">
					{% for team in site.data.team %}
					<div class="team-member">
						<div class="team-image" style="background-image: url('/images/content/{{ team.image }}');"></div>
						<div class="team-meta">
							<div class="team-name">{{ team.name }}</div>
							<div class="team-detail bold">{{ team.position }}</div>
							<div class="team-detail">{{ team.location }}</div>
						</div>
					</div>
					{% endfor %}
				</div>
			</section>
		</div>
	</section>
</div>