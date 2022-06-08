$(document).ready(function () {
    "use strict";

    //  slide
    var slideIndex_3 = 0,
        slideLen_3 = 2;

    window.setInterval(function () {
        if (slideIndex_3 < slideLen_3) {
            slideIndex_3++;
        } else {
            slideIndex_3 = 0;
        }
        var slidePosition = slideIndex_3 * (-300) + "px";
        $(".slide").animate({
            top: slidePosition
        }, "slow");
    }, 3000);

    // notice and gallery
    var ngfunc = function () {
		// notice 탭을 (비)활성화 시키고, 공지사항 글을 (안)보이게 함.
		$(".notice").toggleClass("d-none");
		$(".notice").toggleClass("d-block");

		$(".note").toggleClass("deactive");
		$(".note").toggleClass("active");

		// gallery 탭을 (비)활성화 시키고, 갤러리 사진을 (안)보이게 함.
		$(".gallery").toggleClass("d-none");
		$(".gallery").toggleClass("d-block");

		$(".gal").toggleClass("deactive");
		$(".gal").toggleClass("active");
        console.log("dsdsdsddsdsd");
	};

	$(".note").click(function () {
		if ($(".note").hasClass("deactive")) ngfunc();
	});

	$(".gal").click(function () {
		if ($(".gal").hasClass("deactive")) {
            ngfunc();
            console.log("sdsdsd");
        }
	});

    // modal
    $(".section--modal").hide();

    $(".modal-trigger").click(function () {
        $(".section--modal").toggle();
    });
    $(".close-btn").click(function () {
        $(".section--modal").toggle();
    });
});