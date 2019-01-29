//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "16 feb 2019 0:00:00",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	