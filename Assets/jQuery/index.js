$(document).ready(function () {
    AOS.init();
    // client slider
    $('.client-carousel').owlCarousel({
        stagePadding: 20,
        loop: true,
        margin: 20,
        startPosition: 2,
        center: true,
        autoplay: true,
        responsive: {
            0: {
                items: 2,
            },
            350: {
                items: 3,
                stagePadding: 60,
                margin: 50,

            },
            600: {
                items: 5,
            },
            800: {
                items: 5,
            }
        }
    });

    // testimonial slider
    $('.testimonials_wrapper').owlCarousel({
        loop: true,
        merge: true,
        nav: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },
            800: {
                items: 2,
            },
            1200: {
                items: 3
            }
        }
    });

    //TV slider
    $('.tv_wrapper').owlCarousel({
        loop: true,       
        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 2,
            },
             1200: {
                items: 3,
                margin:10,
            },
        }
    });
    // campaign slider
    $('.campaign_wrapper').owlCarousel({
        loop: true,
        responsive: {
            0: {
                items: 1
            },

            800: {
                items: 2,
            },
             1200: {
                items: 3,
                margin:10,
            },
        }
    });
    // digital campaign slider 
    $('.img_wrapper').owlCarousel({
        loop: true,       
        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 1,
            },
             1200: {
                items: 3,
            },
        }
    })
    // marketing slider 
    $('.marketing_wrapper').owlCarousel({
        loop: true,       
        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 1,
            },
             1200: {
                items: 3,
            },
        }
    });
    // showcase slider 
    $('.showcase_wrapper').owlCarousel({
        loop: true,       
        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 2,
            },
             1200: {
                items: 3,
                margin:10,
            },
        }
    })
    // brand slider 
    $('.brand_wrap').owlCarousel({
        loop: true,       
        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 2,
            },
             1200: {
                items: 3,
                margin:10,
            },
        }
    })


})