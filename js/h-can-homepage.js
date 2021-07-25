(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {

        //Slider JS


        //Slider
        $(".latest-articles").owlCarousel({
            items: 3,
            loop: true,
            nav: true,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 3,
                },
                1000: {
                    items: 3,
                }
            }
        });


    });


    //Scroll Down Js 


    $(window).load(function () {



    });


    // Can also be used with $(document).ready()
    $(window).load(function () {

        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 0
                    }, 1000);
                    return false;
                }
            }
        });


    });


}(jQuery));
