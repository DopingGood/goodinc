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
//Addition jquery
});

