$(function() {

    $('.header__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows-left" src="img/arrows-left.svg" alt="Left Arrow">',
        nextArrow: '<img class="slider-arrows slider-arrows-right" src="img/arrows-right.svg" alt="Right Arrow">',
        asNavFor: '.slider-dots'
    });

    $('.slider-dots').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider'
    });

    $('.surf-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows-left" src="img/arrows-left.svg" alt="Left Arrow">',
        nextArrow: '<img class="slider-arrows slider-arrows-right" src="img/arrows-right.svg" alt="Right Arrow">',
        asNavFor: '.slider-map'
    });

    $('.slider-map').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.surf-slider',
        focusOnSelect: true
    });

    $('.travel__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows-left" src="img/arrows-left.svg" alt="Left Arrow">',
        nextArrow: '<img class="slider-arrows slider-arrows-right" src="img/arrows-right.svg" alt="Right Arrow">',
    });

});