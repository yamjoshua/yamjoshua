$(document).ready(function() {
	$("#trigger").click(function() {
	   $('html, body').animate({scrollTop:$(document).height()}, 'slow');
    return false;
	});
});