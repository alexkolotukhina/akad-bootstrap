//=require jquery.min.js

// to inlude plugins add "=" sign below
//=require bootstrap.min.js
// require slick.min.js 
//=require isotope.pkgd.min.js


;(function($){

	var $portfolio__grid;

	$(document).ready(function(){
		$('.carousel').carousel({
		  interval: 2000
		})


		$('.portfolio__cat-item > a').on('click', function(evt) {
			evt.preventDefault();

			var filterValue = $(this).data('filter');
		  	$portfolio__grid.isotope({ filter: filterValue });

			$('.portfolio__cat-item > a').removeClass('active');
			$(this).addClass('active');
		})
	});

	$(window).on('load', function(){

		$portfolio__grid = $('.portfolio__grid').isotope({
		  // set itemSelector so .grid-sizer is not used in layout
		  itemSelector: '.portfolio__item',
		  percentPosition: true,
		  masonry: {
		    // use element for option
		    columnWidth: '.portfolio__sizer'
		  }
		})

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