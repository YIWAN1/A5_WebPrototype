$(function() {
    $(".searchBox input").focus(function() {
        $(".searchBox").animate({
            "width": "350px"
        })
        $("input").animate("width", "300px");
    }).blur(function() {
        $(".searchBox").animate({
            "width": "264px"
        })
        $("input").animate("width", "80%");
    })
})

$(function() {
    $(".chooseBox ul li").click(function() {
        var n = $(this).index();
        $(this).addClass("active").siblings().removeClass("active")
    })
    $(".chooseBox ol li").click(function() {
        var n = $(this).index();
        $(this).addClass("active").siblings().removeClass("active")
    })
})

$(function() {
    $(".payBoxitem p").click(function() {

        $(this).children().css({
            "color": "#277946"
        }).parent().siblings().children().css({
            "color": "#777"
        })
    })
})

$(function() {
    $(".header ul li:first-child").on("touchstart ", function() {
        // if ($(this).children("div").css("display") == "none") {
        //     $(this).children("div").slideDown()
        // } else if ($(this).children("div").css("display") == "block") {
        //     $(this).children("div").slideUp()
        // }
        $(this).children("div").slideToggle()
    })
})

$(function() {
    $(".header ul li:first-child").mouseenter(function() {
        $(this).children("div").stop(true, true).slideDown()
    }).mouseleave(function() {
        $(this).children("div").stop(true, true).slideUp()
    })
})

$(function() {
    $(".menuBox").click(function() {
        $(".header ul").slideToggle(function() {
            if ($(".header ul").css("display") == "block") {
                $(".menuBox").attr("src", "images/mp_delete.png")
            } else if ($(".header ul").css("display") == "none") {
                $(".menuBox").attr("src", "images/mp_menu.png")
            }
        })


    })
})

$(window).resize(function() {
    if ($(this).width() > 992) {
        $(".header ul").css({
            "display": "flex"
        })
    } else {
        $(".header ul").css({
            "display": "none"
        })
        $(".menuBox").attr("src", "images/mp_menu.png")
    }
})