$(document).ready(function(){
    $burger = $(".header__burger");
    $burger.click(function(){

    $(".header__mobile-menu").toggleClass("header__mobile-menu_active");
    $(".topline__logo").toggleClass("topline__logo_hide");
    })
});