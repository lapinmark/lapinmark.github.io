$(document).ready(function(){
    const $worksFilter = $(".works__filter");
    const $worksFilterAll = $(".works__filter-all");
    const $worksFilterWeb = $(".works__filter-web");
    const $worksFilterMobile = $(".works__filter-mobile");
    const $worksFilterPhoto = $(".works__filter-photo");
    const $worksItem = $(".works__item");

    $worksFilterAll.click(function(){

        const $this = $(this);
        const isFilterNotActive = !$this.hasClass("works__filter_active");

        if (isFilterNotActive)
        {
            $worksFilter.removeClass("works__filter_active");
            $this.addClass("works__filter_active");

            $worksItem.addClass("works__item_active");
        }
    })

    $worksFilterWeb.click(function(){

        const $this = $(this);
        const isFilterNotActive = !$this.hasClass("works__filter_active");

        if (isFilterNotActive)
        {
            $worksFilter.removeClass("works__filter_active");
            $this.addClass("works__filter_active");
            
            const $worksWeb = $(".works__web");
            $worksItem.removeClass("works__item_active");
            $worksWeb.addClass("works__item_active");
        }
    })

    $worksFilterMobile.click(function(){

        const $this = $(this);
        const isFilterNotActive = !$this.hasClass("works__filter_active");

        if (isFilterNotActive)
        {
            $worksFilter.removeClass("works__filter_active");
            $this.addClass("works__filter_active");

            const $worksMobile = $(".works__mobile");
            $worksItem.removeClass("works__item_active");
            $worksMobile.addClass("works__item_active");
        }
    })

    $worksFilterPhoto.click(function(){

        const $this = $(this);
        const isFilterNotActive = !$this.hasClass("works__filter_active");

        if (isFilterNotActive)
        {
            $worksFilter.removeClass("works__filter_active");
            $this.addClass("works__filter_active");

            const $worksPhoto = $(".works__photo");
            $worksItem.removeClass("works__item_active");
            $worksPhoto.addClass("works__item_active");
        }
    })
});