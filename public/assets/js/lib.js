$(document).ready(function(){
    if (window.location.href === window.location.origin + "/")
        $("#search-box").on("change keydown keypress keyup", function(){
            if ($(this).val() !== "")
                $(".search-services-button").css('visibility', 'visible');
            else
                $(".search-services-button").css('visibility', 'hidden')
        });

    $("#cd-nav-trigger").on("click", function(){
        $(".cd-side-nav").toggleClass("sidebar-visible");
        if($(".cd-side-nav").hasClass('sidebar-visible'))
        {
            $(".cd-side-nav").css('opacity', 1);
            $(".overlay-sidebar").fadeIn("100");
            $(".navbar").css({ "box-shadow" : "none", "top" : "unset", "bottom" : "25%" });
            $("body").css("overflow", "hidden");
            $(".triangle").fadeOut("100");
            $(".cd-nav-top-close").fadeIn("100");
        }

        else {
            $(".cd-side-nav").css('opacity', 0);
            $(".overlay-sidebar").fadeOut("100");
            $(".navbar").css({ "box-shadow" : "4px -10px 9px 7px #000", "top" : "0", "bottom" : "unset" });
            $("body").css("overflow", "visible");
            $(".triangle").fadeIn("100");
            $(".cd-nav-top-close").fadeOut("100");
        }

    });

    $("#cd-nav-trigger-close").on("click", function(){
        $(".cd-side-nav").toggleClass("sidebar-visible");
        $(".cd-side-nav").css('opacity', 0);
        $(".overlay-sidebar").fadeOut("100");
        $(".navbar").css({ "box-shadow" : "4px -10px 9px 7px #000", "top" : "0", "bottom" : "unset" });
        $("body").css("overflow", "visible");
        $(".triangle").fadeIn("100");
        $(".cd-nav-top-close").fadeOut("100");
    });
});