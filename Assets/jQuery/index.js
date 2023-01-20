$('.client-carousel').owlCarousel({
    stagePadding: 20,
    loop: true,
    margin: 60,
    nav: true,
    center: true,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 5
        }
    }
})
$('.testimonials_wrapper').owlCarousel({
    stagePadding: 20,
    loop: true,
    margin: 260,
    merge:true,
    center: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        800: {
            items: 5
        }
    }
})