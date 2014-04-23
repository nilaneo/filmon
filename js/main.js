$(document).ready(function(){
	// Slider-video

	$(".slide-video").on("click", function (e) {
		e.preventDefault();
		var activeSlide = $(this).data("slide-small");
		$(".slides-video-big li").removeClass("is-active");
		$(".slides-video-big").find("." + activeSlide + "-big").addClass("is-active");
	});

	//Multiple navigation

	$(".has-nav-inner").hover(
		function() {
			$(this).addClass("block-shadowed");
			$(this).children("a").addClass("is-open");
			$(this).find(".nav-inner").show();
		},

		function() {
			$(this).removeClass("block-shadowed");
			$(this).find(".nav-inner").hide();
			$(this).children("a").removeClass("is-open");
		}
	);
});