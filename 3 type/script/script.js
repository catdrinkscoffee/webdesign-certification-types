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
	};

	$(".note").click(function () {
		if ($(".note").hasClass("deactive")) ngfunc();
	});

	$(".gal").click(function () {
		if ($(".gal").hasClass("deactive")) {
            ngfunc();
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

    // family site
    $(".family-site").hide();

    $(".sns>a").click(function () {
        $(".family-site").toggle();
    });
    $(".family-site").click(function () {
        $(".family-site").toggle();
    });
});