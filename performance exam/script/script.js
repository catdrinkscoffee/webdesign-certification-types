$(document).ready(function () {
    "use strict";

    $(".section--modal").hide();

    $(".close-btn").click(function () {
        // 모달창이 꺼지는 기능
        $(".section--modal").toggle();
    });

    $(".modal-trigger").click(function () {
        // 모달창이 켜지는 기능
        $(".section--modal").toggle();
    });

    var slideIndex = 0,
        slideLen = 3;

    window.setInterval(function() {
        if(slideIndex == slideLen) slideIndex = 0;
        var slidePosition = slideIndex * (-800) + "px";
        $(".slide").animate({left : slidePosition});
        slideIndex = slideIndex + 1;
    }, 3000);
});
