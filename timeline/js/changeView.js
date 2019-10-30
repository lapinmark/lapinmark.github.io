$(document).ready(function(){
    const $changeViewButton = $(".button_change-view");

    $changeViewButton.click(function(){
        const $labels = $(".label");
        $labels.addClass("label_hidden")

        if ( $("#labelTopLine").prop("checked") ){
            $(".progress-line__label_top").removeClass("label_hidden");
            $(".unwanted").removeClass("timeline__item_hidden");
        } else if ( $("#labelBottomLine").prop("checked") ){
            $(".progress-line__label_bottom").removeClass("label_hidden");
            $(".unwanted").removeClass("timeline__item_hidden");
        } else if ( $("#labelTopCheckpoint").prop("checked") ){
            $(".checkpoint__label_top").removeClass("label_hidden");
            $(".unwanted").addClass("timeline__item_hidden");
        } else if ( $("#labelBottomCheckpoint").prop("checked") ){
            $(".checkpoint__label_bottom").removeClass("label_hidden");
            $(".unwanted").addClass("timeline__item_hidden");
        };
    })
});
