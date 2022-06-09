$(document).ready(function () {
    "use strict";

    // slide
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