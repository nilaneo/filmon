$(document).ready(function(){

	// Search

	$(".search-wrapper input").on("click", function (e) {
		$(".search-wrapper").addClass("is-open");
	});

	$(".search-wrapper input").on("change", function (e) {
		$(".search-results").slideDown();
	});

	// List items

	$(".list-items .lnk-title").on("click", function (e) {
		e.preventDefault();
		$(this).closest(".list-items").find("li").removeClass("is-active");
		$(this).closest("li").addClass("is-active");
	});

	// List-2 

	$(".list-2 .bd-title").hover(function (e) {
		$(this).closest(".media").find(".img-bordered").addClass("hover");
	},
	function (e) {
		$(this).closest(".media").find(".img-bordered").removeClass("hover");
	});

	// Slider-video

	$(".slide-video").on("click", function (e) {
		e.preventDefault();
		$(this).parents("ul").find(".slide-video").removeClass("is-active");
		$(this).addClass("is-active");
		$(this).prev(".slide-video a").css("border-bottom", "none");		
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
		$(this).parents(".jcarousel-for-gallery").find(".lnk-slide").removeClass("is-active");
		$(this).addClass("is-active");
	});

});