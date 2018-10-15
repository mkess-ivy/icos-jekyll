$(document).ready(function() {
	
	// Enable mobile drop down navigation
	$("header nav ul:first").mobileMenu();
	
	// Flexslider
	$("#slider").flexslider({
		animation: "slide",    
		slideshow: true,     
		slideshowSpeed: 7000, 
		animationDuration: 500,  
		directionNav: true,  
		controlNav: false, 
		keyboardNav: true,
		touchSwipe: true,
		prevText: "v",
		nextText: "u",
		slideToStart: 0,
		pauseOnAction: true,
		pauseOnHover: false,
		controlsContainer: ".flexslider-container"
	});
	
	// Galleries
	$(".two_column li, .three_column li, .four_column li").each(function() {
		$("a", this).append('<div class="hover"></div>');
	});
	$(".two_column li, .three_column li, .four_column li").hover(function() {
		$("a", this).find(".hover").stop(true, true).fadeIn(400);
	}, function() {
		$("a", this).find(".hover").stop(true, true).fadeOut(400);
	});
	
	$("div.gallery_wrap a, .post a img, .two a img").hover(function() {
		$(this).animate({ 'opacity' : '0.6' }, 300);
	}, function() {
		$(this).stop(true,true).animate({ 'opacity' : '1' }, 300)
	});
	
	function initFancyboxes() {
		$("a.fancybox").fancybox({
			"transitionIn":			"elastic",
			"transitionOut":		"elastic",
			"easingIn":					"easeOutBack",
			"easingOut":				"easeInBack",
			"padding":					0,
			"speedIn":      		500,
			"speedOut": 				500,
			"hideOnContentClick":	"true",
			"overlayShow":        true
		});
	}
	initFancyboxes();
	
	// Gallery sorting
	var $filterType = $('ul.filter_list li.current a').attr('class');

	// Adding a data-id attribute. Required by the Quicksand plugin
	$(".gallery_thumbnails li").each(function(i){
      $(this).attr('data-id',i);
  });

	$(".gallery_thumbnails li a").each(function(i){
      $(this).attr("rel", "portfolio");
  });

 	// Clone applications to get a second collection
	var $data = $(".gallery_thumbnails").clone();

	$('.filter_list li a').click(function(e) {
		$(".filter_list li").removeClass("current");	
		// Use the last category class as the category to filter by.
		var filterClass = $(this).attr('class');
		$(this).parent().addClass('current');

		if (filterClass == 'all-items') {
			var $filteredData = $data.find('li');
		} else {
			var $filteredData = $data.find('li[data-type~=' + filterClass + ']');
		}
		$(".gallery_thumbnails").quicksand($filteredData, {
			duration: 600,
			adjustHeight: 'dynamic',
			useScaling: true
		}, function() { initFancyboxes(); });			
		return false;
	});
	
	// Form hints	
	$("label").inFieldLabels({ fadeOpacity: 0.4 });
	
	// Twitter widget
	$(".twitter_stream").tweet({
		username: "envato", // Customize your twitter username here
		count: 2,
		template: "<span class='icon social'>x</span> <div class='tweet_details'>{text}{time}</div>",
		retweets: false,
		loading_text: "loading tweets..."
	});
	
	// Drop down menus
	$("header nav ul li").hover(function() {
		if($(this).find("ul").size != 0) {
			$(this).find("ul:first").stop(true, true).fadeIn("fast");
		}
	}, function() {
		$(this).find("ul:first").stop(true, true).fadeOut("fast");
	});
	
	$("header nav ul li").each(function() {
		$("ul li:last a", this).css({ 'border' : 'none' });
	});
	
	// Tooltips
	$("a[rel=tipsy]").tipsy({fade: true, gravity: 's', offset: 5, html: true});
	
	$("ul.social li a").each(function() {
		var title_text = $(this).attr("title");
		$(this).tipsy({
				fade: true, 
				gravity: 'n', 
				offset: 5,
				title: function() {
					return title_text;
				}
		});
	});
	
	// Tabs
	$(".tabs").find(".pane:first").show().end().find("ul.nav li:first").addClass("current");
	$(".tabs ul.nav li a").click(function() {
		var tab_container = $(this).parent().parent().parent();
		$(this).parent().parent().find("li").removeClass("current");
		$(this).parent().addClass("current");
		$(".pane", tab_container).hide();
		$("#"+$(this).attr("class")+".pane", tab_container).show();
	});
	
	// Toggle lists
	$(".toggle_list ul li .title").click(function() {
		var content_container = $(this).parent().find(".content");
		if(content_container.is(":visible")) {
			content_container.slideUp("fast");
			$(this).find("a.toggle_link").text($(this).find("a.toggle_link").data("open_text"));
		} else {
			content_container.slideDown("fast");
			$(this).find("a.toggle_link").text($(this).find("a.toggle_link").data("close_text"));
		}
	});
	
	$(".toggle_list ul li .title").each(function() {
		$(this).find("a.toggle_link").text($(this).find("a.toggle_link").data("open_text"));
		if($(this).parent().hasClass("opened")) {
			$(this).parent().find(".content").show();
		}
	});
	
	// Contact form
	$("form#contact_form").submit(function() {
  	var this_form = $(this);
  	$.ajax({
  		type: 'post',
  		data: this_form.serialize(),
  		url: 'send_email.php',
  		success: function(res) {
  			if(res == "true") {
  				this_form.fadeOut("fast");
					$(".success").fadeIn("fast");
					$(".validation").fadeOut("fast");
  			} else {
  				$(".validation").fadeIn("fast");
  				this_form.find(".text").removeClass("error");
  				$.each(res.split(","), function() {
  					this_form.find("#"+this).addClass("error");
  				});
  			}
  		}
  	});
  });
	
});