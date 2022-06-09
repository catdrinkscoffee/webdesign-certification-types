$(document).ready(function () {
    "use strict";

    //  slide
	var slideIndex_2 = 0,
		slideLen_2 = 2;
	window.setInterval(function () {
		if (slideIndex_2 < slideLen_2) {
			slideIndex_2++;
		} else {
			slideIndex_2 = 0;
		}
		var slidePosition = slideIndex_2 * (-1200) + "px";
		$(".slide").animate({
			left: slidePosition
		}, "slow");
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