$(document).ready(function(){
	// Slider-video

	$(".slide-video").on("click", function (e) {
		e.preventDefault();
		var activeSlide = $(this).data("slide-small");
		$(".slides-video-big li").removeClass("is-active");
		$(".slides-video-big").find("." + activeSlide + "-big").addClass("is-active");
	});

	// Multiple navigation

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

	// Custom checkbox

	$(".custom-checkbox").on("click", function (e) {
		e.preventDefault();
		$(this).toggleClass("is-checked");
	});

	// Toggle dropdown user menu

	$(".j-toggle-usermenu").on("click", function (e) {
		e.preventDefault();
		$(".user-menu-dropdown").slideToggle("fast");
	});

	// Gallery slider

	$(".jcarousel-for-gallery .lnk-slide").on("click", function (e) {
		e.preventDefault();
		console.log('xoxoxo');
		$(this).parents(".jcarousel-for-gallery").find(".lnk-slide").removeClass("is-active");
		$(this).addClass("is-active");
	});

});