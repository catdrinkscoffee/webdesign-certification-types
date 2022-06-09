$(document).ready(function () {
    "use strict";

    //  slider - directional slide 버전 - 좌우
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
    $(".family-site").mouseleave(function () {
        $(".family-site").toggle();
    });
});