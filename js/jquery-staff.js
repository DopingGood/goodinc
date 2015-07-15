$(document).ready(function() {
	$(window).bind("scroll", function() {
		if ($(window).scrollTop() > 50) {			
			$(".greybars").addClass("greybars-fixed");
		}
		else {
			$(".greybars").removeClass("greybars-fixed");
		};
	});



$(".read_more a").click(function() {	
	$(".trololo").load("ajax/readMore.html");
	return false;
});


//This is drop down menu
$('.nav-menu li, .first-dropdown').mouseover(function() {	
		$(this).find("ul").show();	
	}
);

$(".nav-menu li, .first-dropdown").mouseleave(function() {
		$(this).find('ul').hide();
	}
);
});
