$(document).ready(function(){

	if ($(".navToggle").is(":visible")) {
		$("#mainNav").hide();
	}

	$(window).on("resize", function(){
		if ($(window).width() < 1000) {
		   $("#mainNav").hide();
		}
		else {
		   $("#mainNav").show();
		}
	});

	$(".navToggle").click(function(){
		$("#mainNav").slideToggle();
	});
});