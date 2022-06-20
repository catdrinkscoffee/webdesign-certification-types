$(document).ready(function () {
    "use strict";

    //  slider
    var slideIndex = 0,
        slideLen = 3;

    window.setInterval(function () {
        if(slideIndex == slideLen) {
            slideIndex = 0;
        }
        //좌,우 (왼쪽으로 얼마나 이동)
        var slidePosition = slideIndex * (-800) + "px";

        $(".slide").animate({ left: slidePosition});

        slideIndex = slideIndex + 1;
    }, 3000);



    $(".section--modal").hide();

    $(".close-btn").click(function () {
        $(".section--modal").toggle();
    });
    
    $(".modal-trigger").click(function () {
        $(".section--modal").toggle();
    });


});
