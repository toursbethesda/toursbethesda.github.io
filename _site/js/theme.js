;(function($) {
    "use strict";

    /* TO TOP STARTS */

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    "use strict";
    
    var navbar=$('.main_header_area .header_menu, .main_header_area .middle_menu_area');
    var nav_offset_top = $('.header_menu, .middle_menu_area, .comming_soon_area, .error_area').offset().top + 85;
    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

	navbar.affix({
	  offset: {
	    top: nav_offset_top,
	  }
	});


	navbar.on('affix.bs.affix', function() {
		if (!navbar.hasClass('affix')){
			navbar.addClass('animated slideInDown');
		}
	});
    
    navbar.on('affixed-top.bs.affix', function() {
	  	navbar.removeClass('animated slideInDown');
	});


    /*----------------------------------------------------*/
    /*  Gallery Slider
    /*----------------------------------------------------*/
    function gallery_slider(){
        if ( $('.resort_gallery').length ){
            $('.resort_gallery').owlCarousel2({
                loop: true,
                margin: 30,
                items: 4,
                nav: true,
                autoplay: true,
                smartSpeed: 1500,
                dots: true,
                navContainer: '.resort_gallery_inner',
                navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 2,
                    },
                    800: {
                        items: 3,
                    },
                    1060: {
                        items: 4,
                    }
                }
            })
        }
    }
    
    /*----------------------------------------------------*/
    /*  Gallery Slider
    /*----------------------------------------------------*/
    function resort_full_slider(){
        if ( $('.resort_full_gallery').length ){
            $('.resort_full_gallery').owlCarousel2({
                loop:true,
                margin: 0,
                items: 4,
                nav:false,
                autoplay: true,
                smartSpeed: 1500,
                dots:true,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    400: {
                        items: 2,
                    },
                    600: {
                        items: 3,
                    },
                    800: {
                        items: 4,
                    }
                }
            })
        }
    }
    resort_full_slider();
    
    /*----------------------------------------------------*/
    /*  Gallery Slider
    /*----------------------------------------------------*/
    function resort_slider(){
        if ( $('.choose_resort_slider, .room_details_img').length ){
            $('.choose_resort_slider, .room_details_img').owlCarousel({
                loop:true,
                margin: 0,
                items: 1,
                nav: true,
                autoplay: true,
                smartSpeed: 1500,
                dots: true,
                navContainer: '.choose_resort_slider, .room_details_img',
                navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                responsiveClass: true,
            })
        }
    }
    resort_slider();
    
    /*----------------------------------------------------*/
    /*  Explor Room Slider
    /*----------------------------------------------------*/
    function explor_slider(){
        if ( $('.explor_slider').length ){
            $('.explor_slider').owlCarousel2({
                loop: true,
                margin: 30,
                items: 3,
                nav:true,
                autoplay: false,
                smartSpeed: 1500,
                dots:true,
                navContainerClass: 'explor_slider',
                navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    650: {
                        items: 2,
                    },
                    992: {
                        items: 3,
                    }
                }
            })
        }
    }
    explor_slider();
    
    /*----------------------------------------------------*/
    /*  Gallery Slider
    /*----------------------------------------------------*/
    function clients_slider(){
        if ( $('.clients_slider.owl-carousel').length ){
            $('.clients_slider.owl-carousel').owlCarousel2({
                margin: 0,
                items: 1,
                nav: false,
                autoplay: true,
                smartSpeed: 1500,
                dots: false,
                responsiveClass: true,
            })
        }
    }
    
    /*----------------------------------------------------*/
    /*  Magnificpopup js 
    /*----------------------------------------------------*/

    $(document).ready(function() {
        $('.popup-youtube').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,

            fixedContentPos: false
        });
    });

    $(document).ready(function() {
        $('.popup-with-zoom-anim').magnificPopup({
            type: 'inline',

            fixedContentPos: false,
            fixedBgPos: true,

            overflowY: 'auto',

            closeBtnInside: true,
            preloader: false,

            midClick: true,
            removalDelay: 300,
            mainClass: 'my-mfp-zoom-in'
        });

        $('.popup-with-move-anim').magnificPopup({
            type: 'inline',

            fixedContentPos: false,
            fixedBgPos: true,

            overflowY: 'auto',

            closeBtnInside: true,
            preloader: false,

            midClick: true,
            removalDelay: 300,
            mainClass: 'my-mfp-slide-bottom'
        });
    });

    
    /*----------------------------------------------------*/
    /*  portfolio_isotope
    /*----------------------------------------------------*/
    function gallery_two_column(){
        if ( $('.grid_gallery_item_inner').length ){
            // Activate isotope in container
            $(".grid_gallery_item_inner").imagesLoaded( function() {
                $(".grid_gallery_item_inner").isotope({
                    layoutMode: 'fitRows',
                }); 
            }); 
        }
    }
    gallery_two_column();
    
    // Add isotope click function
    function gallery_click(){
        $(".gallery_filter li").on('click',function(){
            $(".gallery_filter li").removeClass("active");
            $(this).addClass("active");

            var selector = $(this).attr("data-filter");
            $(".grid_gallery_item_inner, .cobage_g_masonary").isotope({
                filter: selector,
                animationOptions: {
                    duration: 450,
                    easing: "linear",
                    queue: false,
                }
            });
            return false;
        });
    }
    gallery_click();

    $('.cobage_g_masonary').imagesLoaded(function(){
        $('.cobage_g_masonary').isotope({ 
            layoutMode: 'masonry',
            percentPosition:true,
            columnWidth: 1
//            masonry: {
//                columnWidth: '.grid-sizer, .grid-sizer_two',
//            }
        })
    });

    
    /*----------------------------------------------------*/
    /*  Simple LightBox js
    /*----------------------------------------------------*/
    $('.imageGallery1 .light').simpleLightbox();
    

    
    $(document).ready(function() {
        $('.popup-with-zoom-anim').magnificPopup({
            type: 'inline',

            fixedContentPos: false,
            fixedBgPos: true,

            overflowY: 'auto',

            closeBtnInside: true,
            preloader: false,

            midClick: true,
            removalDelay: 300,
            mainClass: 'my-mfp-zoom-in'
        });

        $('.popup-with-move-anim').magnificPopup({
            type: 'inline',

            fixedContentPos: false,
            fixedBgPos: true,

            overflowY: 'auto',

            closeBtnInside: true,
            preloader: false,

            midClick: true,
            removalDelay: 300,
            mainClass: 'my-mfp-slide-bottom'
        });
    });


	/*============================*/
	/*  - function on page load */
	/*============================*/
	$(window).load(function(){
		if($('#loader-wrapper').length){
            $('#loader-wrapper').fadeOut();
		};

        gallery_slider();
        clients_slider();

	});

})(jQuery)
