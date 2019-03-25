---
layout: full_width
title: Contact
permalink: /contact/

description: Contact ICOS today!
keywords: mental health, mental illness, intensive in-home, community based support service, Alexandria, Mechanicsville, Norfolk, Richmond
---

<div class="page_wrapper">
	<section class="container">
		<div id="contact" class="page with_sidebar">
			<h1>Contact</h1>
			<div class="full">
          		<h4>ICOS Contact Directory</h4>
          		
          		<div class="contact_wrapper">
          			{% for item in site.data.contact %}
          			<div class="contact_single">
          				<h5>{{ item.contact-position }}</h5>
	          			<p>{{ item.contact-name }}, {{ item.contact-phone }}, <a href="mailto:{{ item.contact-email }}">{{ item.contact-email }}</a></p>
          			</div>
          			{% endfor %}
          		</div>
          		
          		
				<p>For questions regarding programs or how you can get involved with the community please contact us.</p>
          		<p>For any referrals please contact the program manager for more information.</p>

					<!-- <div class="validation">
						<p>Oops! Please correct the highlighted fields...</p>
					</div>

					<div class="success">
						<p>Thanks! We'll get back to you shortly.</p>
					</div>

					<form action="javascript:;" method="post" id="contact_form">
						<div class="row">
							<p>
								<label for="name">Name</label>
								<input type="text" name="name" id="name" />
							</p>
							<p>
								<label for="phone">Phone</label>
								<input type="text" name="phone" id="phone" />
							</p>
						</div>

						<div class="row">
							<p>
								<label for="email">Email</label>
								<input type="text" name="email" id="email" />
							</p>
							<select name="subject">
							  <option value="select">Subject</option>
							  <option value="saab">Volunteer</option>
							  <option value="mercedes">More Information</option>
							  <option value="audi">Programs</option>
							</select>
						</div>
						<p>
							<label for="message">Message</label>
							<textarea name="message" id="message"></textarea>
						</p>
						<input type="submit" class="button white" value="Send Email &rarr;" />
					</form> -->
					<div class="form_wrapper">
						<form action="https://getsimpleform.com/messages?form_api_token=9e799c6bca11d6d101172e069e50d216" method="post">
						  <!-- the redirect_to is optional, the form will redirect to the referrer on submission -->
						  <input type='hidden' name='redirect_to' value='<the complete return url e.g. http://fooey.com/thank-you.html>' />
						  <!-- all your input fields here.... -->
						  
						  <!-- <label for='email'>Email</label> -->
						  <div class="frow justify-between" id="column-form">
						  	<input type='text' name='name' placeholder='name' />
						  	<input type='tel' name='phone' placeholder='phone' />
						  </div>
						  
						  <div class="frow justify-between" id="column-form2">
						  	<input type='text' name='email' placeholder='email' />
						  	<select name="subject">
							  <option value="select">Subject</option>
							  <option value="saab">Volunteer</option>
							  <option value="mercedes">More Information</option>
							  <option value="audi">Programs</option>
							</select>
						</div>
						<textarea name="message" id="message" placeholder="message"></textarea>
						  <input type='submit' value='Send' />
						</form>
					</div>
				</div>

				<!-- Start Location -->
				<div id="location">
					<div class="box_heading">
						<h2>Our location</h2>
						<span class="line"></span>
					</div>
					<div class="map">
            		<iframe width="438" height="194" src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=501+east+franklin+street,+suite+516,+richmond,+va+23219&amp;aq=&amp;sll=39.284706,-76.620486&amp;sspn=0.291775,0.41954&amp;ie=UTF8&amp;hq=&amp;hnear=501+E+Franklin+St+%23516,+Richmond,+Virginia+23219&amp;ll=37.541124,-77.439001&amp;spn=0.009341,0.013111&amp;t=m&amp;z=14&amp;iwloc=A&amp;output=embed"></iframe>
					</div>
					<div class="one_fourth column_last">
						<h4>Address</h4>
						<p>
							8052 Elm Drive, Suite F <br/>
							Mechanicsville, VA 23111
						</p>
						<p>
							<span class="icon general">r</span> 804.789.9054 <br/>
							<span class="icon general">h</span> <a href="">info@icoservices.org</a> <br/>
						</p>
					</div>
				</div>
			</div>
		</section>
	</div>