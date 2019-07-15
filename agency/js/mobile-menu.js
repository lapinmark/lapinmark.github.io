$(document).ready(function(){
    $burger = $(".burger");
    $burger.click(function(){

    $(".mobile-menu").toggleClass("mobile-menu_active");
    $(".topline__logo").toggleClass("topline__logo_hide");
    })
});