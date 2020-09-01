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

});