$(document).ready(function () {
  $('.np-first-sec__slider-body').slick({
    // appendArrows: $('.block-arrows__images'),
    prevArrow: "<img class='np_btn np_btn-prev slick-prev' src='images/np_left-arrow.png' alt=''>",
    nextArrow: "<img class='np_btn np_btn-next slick-next' src='images/np_right-arrow.png' alt=''>",
    arrows: true,
    dots: true,
    // adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    infinite: false,
    // autoplay: true, 
    // autoplaySpeed: 3000,
    // draggable: true,
    // swipe: true,
    // touchThreshold: 10,
    // touchMove: true,
    // waitForAnimate: true,
    // centerMode: false,
    variableWidth: false,

    // fade: false,
    // appendDots:$('.needclass'),  
  });
});