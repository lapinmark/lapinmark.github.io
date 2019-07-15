$(document).ready(function(){
    const $clientsSwitchesItem = $(".clients__switches-item");

    $clientsSwitchesItem.click(function(){

        const $this = $(this);
        const isSwitchNotActive = !$this.hasClass("clients__switches-item_active");

        if (isSwitchNotActive)
        {
            $clientsSwitchesItem.removeClass("clients__switches-item_active");
            $this.addClass("clients__switches-item_active");

            const $clientsMembers = $(".clients__brands");
            $clientsMembers.removeClass("clients__brands_active");
            $clientsMembers
            .eq($this.index())
            .addClass("clients__brands_active");
        }
    })
});