var x;
var $cards = $(".card");

$cards
    .on("mousemove", function (e) {

        var pos = [e.offsetX, e.offsetY];
        var $card = $(this);
        
        var l = pos[0];
        var t = pos[1];
        var h = $card.height();
        var w = $card.width();

        var px = Math.abs(Math.floor(100 / w * l) - 100);
        var py = Math.abs(Math.floor(100 / h * t) - 100);
        var lp = (50 + (px - 50));
        var tp = (50 + (py - 50));
        var tx = ((lp - 50) / 1.5) * .5;
        var ty = ((tp - 50) / 2) * -1;
        
        var tf = `transform: rotateX(${ty}deg) rotateY(${tx}deg);`

        $cards.removeClass("active");
        $card.removeClass("animated");
        $card.attr("style", tf);
        clearTimeout(x);
    }).on("mouseout", function () {

        $(this).removeAttr("style");
        // x = setTimeout(function () {
        //     $(this).addClass("animated");
        // }, 2500);
    });