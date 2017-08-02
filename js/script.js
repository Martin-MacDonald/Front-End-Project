$(document).ready(function(){

	//NAVIGATION CONTROL
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

	//CAROUSEL CONTROL
	var slideIndex = 1;
	var numberOfSlides = $(".carouselSlide").length;

	$(".carouselSlide").hide();
	$(".carouselSlide:nth-of-type(" + slideIndex + ")").show();
	
	function changeCircle(index){
		$(".carouselPicker").removeClass("carouselPickerActive");
		$(".carouselPicker:nth-of-type(" + index + ")").addClass("carouselPickerActive");
	}

	changeCircle(slideIndex);

	function changePic(index){
		$(".carouselSlide").hide();
		$(".carouselSlide:nth-of-type(" + index + ")").show();
	}

	function changeIndex(direction){
		if (direction == "right") {
			if (slideIndex == numberOfSlides) {
				slideIndex = 1;
			} else {
				slideIndex += 1;
			}
			
		}else{
			if (slideIndex == 1) {
				slideIndex = numberOfSlides;
			} else {
				slideIndex -= 1;
			}
		}

		changePic(slideIndex);
		changeCircle(slideIndex);
	}

	$(".slider").on("swiperight",function(){
		changeIndex("left");
	});

	$(".slider").on("swipeleft", function(){
		changeIndex("right");
	});

	$(".carouselArrow").click(function(){
		if ($(this).hasClass("fa-angle-right")) {
			changeIndex("right");			
		}else{
			changeIndex("left");			
		}
	});

	$(".carouselPicker").click(function(){
		slideIndex = $(this).index() + 1;
		changePic(slideIndex);
		changeCircle(slideIndex);
	});

});