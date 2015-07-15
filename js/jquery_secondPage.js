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

$(document).ready(function() {
	$(".Big-bridge_slick").slick({
		infinite: true,
		nextArrow: $(".Big-bridge a:nth-child(3)"),
		prevArrow: $(".Big-bridge a:nth-child(2)"),
		fade: true,
		swipe: false,
		speed: 500
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