$(document).ready(function () {
    "use strict";

    //  slide
	var slideIndex_1 = 0,
		slideLen_1 = 2;
	window.setInterval(function () {
		if (slideIndex_1 < slideLen_1) {
			slideIndex_1++;
		} else {
			slideIndex_1 = 0;
		}
		$(".section--slide img").fadeOut();
		$(".section--slide img").eq(slideIndex_1).fadeIn();
	}, 3000);

    // modal
    $(".section--modal").hide();

    $(".modal-trigger").click(function () {
        $(".section--modal").toggle();
    });
    $(".close-btn").click(function () {
        $(".section--modal").toggle();
    });

    // family site
    $(".family-site").hide();

    $(".sns>a").click(function () {
        $(".family-site").toggle();
    });
    $(".family-site").mouseleave(function () {
        $(".family-site").toggle();
    });
});