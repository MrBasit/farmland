// Home Page 1st Card Slider
$(document).ready(function() {
    $('#showcase__card__slider').lightSlider({
        autoWidth:true,
        loop:true,
        speed: 1000, //ms'
        auto: true,
        pause: 3000,
        onSliderLoad: function() {
            $('#showcase__card__slider').removeClass('cS-hidden');
        } 
    });  
});

// Testimonies Slider
$(function(){
    $('.testimonies__slider').slick({
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        dots: true,
        autoplay: true,
        arrows: false,
        slidesToScroll: 1,
        autoplaySpeed: 7000,
        centerPadding: '0px',
        responsive: [
            {
                centerMode: true,
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
            },
            {
                centerMode: true,
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
            }
        ]

    });
});
// client reviews Slider
$(function(){
    $('.client__reviews__slider').slick({
        infinite: true,
        slidesToShow: 1,
        dots: true,
        autoplay: true,
        arrows: false,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
    });
});

