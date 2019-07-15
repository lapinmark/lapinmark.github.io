$(document).ready(function(){
    const $teamSwitchesItem = $(".team__switches-item");

    $teamSwitchesItem.click(function(){

        const $this = $(this);
        const isSwitchNotActive = !$this.hasClass("team__switches-item_active");

        if (isSwitchNotActive)
        {
            $teamSwitchesItem.removeClass("team__switches-item_active");
            $this.addClass("team__switches-item_active");

            const $teamMembers = $(".team__members");
            $teamMembers.removeClass("team__members_active");
            $teamMembers
            .eq($this.index())
            .addClass("team__members_active");
        }
    })
});