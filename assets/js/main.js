(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();


        $(".testimonial").owlCarousel({
            items: 1,
            dots: true,
            dotsData: false,
            autoplay: false,
            nav: false,
            loop: true,
        });



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	