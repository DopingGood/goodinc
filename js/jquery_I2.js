$(document).ready(function() {
	$(window).bind("scroll", function() {
		if ($(window).scrollTop() > 50) {			
			$(".greybars").addClass("greybars-fixed");
		}
		else {
			$(".greybars").removeClass("greybars-fixed");
		};
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

	$('.bridge-holder').slick({
		fade: true,
		speed: 500,
		nextArrow: $(".rarrow"),
		prevArrow: $(".larrow"),
		swipe: false,
		autoplay: true					
	});


	$(".houspad-slick").slick({
		nextArrow: $(".rarrow"),
		prevArrow: $(".larrow"),
		slideToShow: 1,
		swipe: false,
		speed: 200,
		fade: true
	});
	


	$(".threepcts-slick").slick({
		touchMove: true,
		nextArrow: $(".BRarrow"),
		prevArrow: $(".BLarrow"),
		slidesToShow: 3,
		slidesToScroll: 3,
		swipe: false,
		respondTo: "slider",
		variableWidth: true,
		autoplay: true
	});



	$(".long_walks-slick").slick({
		speed: 500,
		fade: true,
		infinite: true,
		nextArrow: $(".long_walks a:nth-child(2)"),
		prevArrow: false,
		swipe: false	
	});

	$(".Big-bridge_slick").slick({
		infinite: true,
		nextArrow: $(".Big-bridge a:nth-child(3)"),
		prevArrow: $(".Big-bridge a:nth-child(2)"),
		fade: true,
		swipe: false,
		speed: 500
	});

//AJAX
$(".read_more a").click(function() {	
	$(".trololo").load("ajax/readMore.html");
	return false;
});

//Addition jquery

//This is map
function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(56, 13),
    zoom:5,
    mapTypeId:google.maps.MapTypeId.HYBRID
  };
  var map=new google.maps.Map(document.getElementById("google-map"),mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);
});