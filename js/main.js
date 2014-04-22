$(document).ready(function(){
	// Slider-video

	$(".slide-video").on("click", function (e) {
		e.preventDefault();
		var activeSlide = $(this).data("slide-small");
		$(".slides-video-big li").removeClass("is-active");
		$(".slides-video-big").find("." + activeSlide + "-big").addClass("is-active");
	});
});