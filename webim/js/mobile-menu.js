$(document).ready(function () {
    $burger = $(".burger");
    $burger.click(function () {
        $(this).toggleClass("burger_active");
        $(".mobile-menu").toggleClass("mobile-menu_active");
        $(".header__logo").toggleClass("header__logo_hide");
    })
});