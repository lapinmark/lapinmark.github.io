$(document).ready(function(){
    const $testimonialsSwitchesItem = $(".testimonials__switches-item");

    $testimonialsSwitchesItem.click(function(){

        const $this = $(this);
        const isSwitchNotActive = !$this.hasClass("testimonials__switches-item_active");

        if (isSwitchNotActive)
        {
            $testimonialsSwitchesItem.removeClass("testimonials__switches-item_active");
            $this.addClass("testimonials__switches-item_active");

            const $testimonialsItem = $(".testimonials__item");
            $testimonialsItem.removeClass("testimonials__item_active");
            $testimonialsItem
            .eq($this.index())
            .addClass("testimonials__item_active");
        }
    })
});