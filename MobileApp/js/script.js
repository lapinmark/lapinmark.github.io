$(document).ready(function(){
    $(".feedback__slider-switch").click(function(){
        if(!$(this).hasClass("feedback__slider-switch_active"))
        {
            $(".feedback__slider-switch").removeClass("feedback__slider-switch_active");
            $(this).addClass("feedback__slider-switch_active");

            $(".feedback__item").removeClass("feedback__item_active");
            $(".feedback__item")
            .eq($(this).index())
            .addClass("feedback__item_active");
        }
    })

    $(".topline__mobile-menu").click(function(){
        $(".mobile-menu__links").toggleClass("mobile-menu__links_active")
    })
});