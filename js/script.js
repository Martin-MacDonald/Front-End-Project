$(document).ready(function(){

	var mobNavShown = false;

	if ($(".navToggle").is(":visible")) {
		$("#mainNav").hide();
		mobNavShown = false;
	}

	$(window).on("resize", function(){
		if ($(window).width() < 1000 && mobNavShown == false) {
		   $("#mainNav").hide();
		}
		else if ($(window).width() >= 1000){
		   $("#mainNav").show();
		   mobNavShown = false;
		}
	});

	$(".navToggle").click(function(){
		$("#mainNav").slideToggle();
		mobNavShown = !mobNavShown;
	});
});