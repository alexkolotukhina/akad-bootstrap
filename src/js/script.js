//=require jquery.min.js

// to inlude plugins add "=" sign below
//=require bootstrap.min.js
// require slick.min.js 

;(function($){

	$(document).ready(function(){
		$('.carousel').carousel({
		  interval: 2000
		})
	});

	$(window).on('load', function(){

		var map; 

		map = new google.maps.Map(document.getElementById('map'), {
	  		center: {lat: 39.9494994, lng: -75.057208},
	  		zoom: 17,
	  		disableDefaultUI: true,
	  		styles: [
		    {
		        "featureType": "administrative",
		        "elementType": "all",
		        "stylers": [
		            {
		                "saturation": "-100"
		            }
		        ]
		    },
		    {
		        "featureType": "administrative.province",
		        "elementType": "all",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "landscape",
		        "elementType": "all",
		        "stylers": [
		            {
		                "saturation": -100
		            },
		            {
		                "lightness": 65
		            },
		            {
		                "visibility": "on"
		            }
		        ]
		    },
		    {
		        "featureType": "poi",
		        "elementType": "all",
		        "stylers": [
		            {
		                "saturation": -100
		            },
		            {
		                "lightness": "50"
		            },
		            {
		                "visibility": "simplified"
		            }
		        ]
		    },
		    {
		        "featureType": "road",
		        "elementType": "all",
		        "stylers": [
		            {
		                "saturation": "-100"
		            }
		        ]
		    },
		    {
		        "featureType": "road.highway",
		        "elementType": "all",
		        "stylers": [
		            {
		                "visibility": "simplified"
		            }
		        ]
		    },
		    {
		        "featureType": "road.arterial",
		        "elementType": "all",
		        "stylers": [
		            {
		                "lightness": "30"
		            }
		        ]
		    },
		    {
		        "featureType": "road.local",
		        "elementType": "all",
		        "stylers": [
		            {
		                "lightness": "40"
		            }
		        ]
		    },
		    {
		        "featureType": "transit",
		        "elementType": "all",
		        "stylers": [
		            {
		                "saturation": -100
		            },
		            {
		                "visibility": "simplified"
		            }
		        ]
		    },
		    {
		        "featureType": "water",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "hue": "#ffff00"
		            },
		            {
		                "lightness": -25
		            },
		            {
		                "saturation": -97
		            }
		        ]
		    },
		    {
		        "featureType": "water",
		        "elementType": "labels",
		        "stylers": [
		            {
		                "lightness": -25
		            },
		            {
		                "saturation": -100
		            }
		        ]
		    }
		]
 
		});

		var marker = new google.maps.Marker({
			map: map,
			position: {lat: 39.9494994, lng: -75.057208}
		})
  		
	});

})(jQuery);