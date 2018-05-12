$(document).ready(function() {

	// When anchor is clicked scroll to the top of page
	$('a.back-to-top').click(function() {
		$('body, html').animate({
		  scrollTop: 0
	  }, 1000);
		return false;
	});

});
