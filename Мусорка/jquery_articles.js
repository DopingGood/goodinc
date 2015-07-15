$(document).ready(function() {
	$(window).bind("scroll", function() {
		if ($(window).scrollTop() > 50) {			
			$(".greybars").addClass("greybars-fixed");
		}
		else {
			$(".greybars").removeClass("greybars-fixed");
		};
	});
});

//This is drop down menu
$(document).ready(function(){
$('.nav-menu li, .first-dropdown').mouseover(function() {		
		$(this).find("ul").show();	
	}
);

$(".nav-menu li, .first-dropdown").mouseleave(function() {
		$(this).find('ul').hide();
	}
);
});