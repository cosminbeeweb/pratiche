$(document).ready(function(){
    $("#cd-nav-trigger").on("click", function(){
        $(".cd-side-nav").toggleClass("sidebar-visible");
        if($(".cd-side-nav").hasClass('sidebar-visible'))
        {
            $(".cd-side-nav").css({"opacity" : "1", "display" : "block"});
            $(".navbar").css({"z-index" : "9"});
            $(".overlay-sidebar").fadeIn("100");
            $("body").css("overflow", "hidden");
            $(".triangle").fadeOut("100");
            $(".cd-nav-top-close").fadeIn("100");
        }
        else {
            $(".cd-side-nav").css('opacity', 0);
            $(".navbar").css({"z-index" : "9999"});
            $(".overlay-sidebar").fadeOut("100");
            $("body").css("overflow", "visible");
            $(".triangle").fadeIn("100");
            $(".cd-nav-top-close").fadeOut("100");
            setTimeout(function(){
                $(".cd-side-nav").css("display","none");
            }, 300);
        }
    });

    $("#cd-nav-trigger-close").on("click", function(){
        $(".cd-side-nav").toggleClass("sidebar-visible");
        $(".navbar").css({"z-index" : "9999"});
        $(".cd-side-nav").css('opacity', 0);
        $(".overlay-sidebar").fadeOut("100");
        $("body").css("overflow", "visible");
        $(".triangle").fadeIn("100");
        $(".cd-nav-top-close").fadeOut("100");
        setTimeout(function(){
            $(".cd-side-nav").css("display","none");
        }, 300);
    });

    $(".cd-side-nav li.single").on("click", function() {
        $(".navbar").css({"z-index" : "9999"});
        $(".cd-side-nav").toggleClass("sidebar-visible");
        $(".cd-side-nav").css('opacity', 0);
        $(".overlay-sidebar").fadeOut("100");
        $(".navbar").css({ "box-shadow" : "4px -10px 9px 7px #000", "top" : "0", "bottom" : "unset" });
        $("body").css("overflow", "visible");
        $(".triangle").fadeIn("100");
        $(".cd-nav-top-close").fadeOut("100");
        setTimeout(function(){
            $(".cd-side-nav").css("display","none");
        }, 300);
    });

    $("#map-trigger").on("click", function() {
        initMap();
    });

    $("#recaptcha-trigger").on("click", function() {
        initRecaptcha();
    });

    $(".searchbox-header img").on("click", function() {
        $(".searchbox-v2").fadeIn(300);
        $("html").css('overflow-y', 'hidden');
        $("body").css('overflow-y', 'hidden');
    });

    $(".close-search").on("click", function() {
        $(".searchbox-v2").fadeOut(300);
        $("html").css('overflow-y', 'visible');
        $("body").css('overflow-y', 'visible');
    });

    if ($('.contact-form').length !== 0)
        $('.contact-submit').on("click", function(){
            console.log('clicked');
            get_recaptcha();
        });
});

const get_recaptcha = () => {
    console.log('get');
    document.getElementById('recaptchaValidation').value = grecaptcha.getResponse();
}