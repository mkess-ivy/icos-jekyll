---
layout: full_width
title: Referrals
permalink: /referrals/

description: Fill out a referral form for your child.
keywords: mental health, mental illness, community based services, intensive in-home

---

<div class="page_wrapper">
	<section class="container">
		<div id="about" class="page with_sidebar">
			<h1>{{ page.title }}</h1>
			<div class="form_wrapper">
				<form action="https://getsimpleform.com/messages?form_api_token=9e799c6bca11d6d101172e069e50d216" method="post">
					<!-- the redirect_to is optional, the form will redirect to the referrer on submission -->
					<input type='hidden' name='redirect_to' value='<the complete return url e.g. http://fooey.com/thank-you.html>' />
					<!-- all your input fields here.... -->

					<!-- <label for='email'>Email</label> -->
					<div class="frow justify-between">
						<div id="column-form-referral">
						  	<label for="title">Client / Child</label>
						  	<input type='text' name='name' placeholder='Client Name' />
						  	<input type='text' name='name' placeholder='Gender' />
						  	<input type='text' name='name' placeholder='Medicaid Eligibility' />
						</div>
						<div id="column-form-referral2">
							<label for="title">Parent / Legal Guardian</label>
							<input type='text' name='name' placeholder='Name' />
							<input type='tel' name='phone' placeholder='Phone' />
							<input type='text' name='address' placeholder='Street Address' />
							<input type='date' name='date' placeholder='mm/dd/yyyy' />
							<input type='text' name='name' placeholder='Client Current Medication' />
							<textarea name="message" id="message" placeholder="History of Hospitalization"></textarea>
						</div>
					</div>
					<div class="referral-submit">
				  		<input type='submit' value='Send' />
				  	</div>
				</form>
			</div>
		</div>
	</section>
</div>