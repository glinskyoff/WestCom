
$(function () {
  $('.main-slider').slick({
    arrows: false,
    dots: true,
    sliderToShow: 1,
    sliderToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2500,
    dotsClass: 'main-slider-dots',
  })

})

$(function () {
  $('.one-slider').slick({
    arrows: false,
    dots: true,
    sliderToShow: 1,
    sliderToScroll: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    dotsClass: 'one-slider-dots',
    draggable: true,
    fade: true,
    touchThreshold: 100,
    centerMode: true
  })

})

$(function () {
  $('.two-slider').slick({
    arrows: false,
    dots: true,
    sliderToShow: 1,
    sliderToScroll: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    dotsClass: 'two-slider-dots',
    draggable: true,
    fade: true,
    touchThreshold: 100,
    centerMode: true
  })

})

$(function () {
  $('.three-slider').slick({
    arrows: false,
    dots: true,
    sliderToShow: 1,
    sliderToScroll: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    dotsClass: 'three-slider-dots',
    draggable: true,
    fade: true,
    touchThreshold: 100,
    centerMode: true
  })

})

$(function () {
  $('.four-slider').slick({
    arrows: false,
    dots: true,
    sliderToShow: 1,
    sliderToScroll: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    dotsClass: 'four-slider-dots',
    draggable: true,
    fade: true,
    touchThreshold: 100,
    centerMode: true
  })

})

$(".default_option").click(function(){
  $(this).parent().toggleClass("active");

  $('.icon-one').css('display', 'none');
  $('.icon-two').css('display', 'none');
  $('.icon-three').css('display', 'none');
  $('.icon-four').css('display', 'none');
  
  // if ($('.icon-one')) {
  //   $('.icon-two').css('display', 'none');
  //   $('.icon-three').css('display', 'none');
  //   $('.icon-four').css('display', 'none');
  // } else if ($('.icon-two')) {
  //   $('.icon-one').css('display', 'none');
  //   $('.icon-three').css('display', 'none');
  //   $('.icon-four').css('display', 'none');
  // }
  

  // $(this).children().removeClass('icon');
})

$(".select_ul li").click(function(){
  var currentele = $(this).html();
  $(".default_option li").html(currentele);
  $(this).parents(".select_wrap").removeClass("active");


  $('.icon-one').css('display', 'block');
  $('.icon-two').css('display', 'block');
  $('.icon-three').css('display', 'block');
  $('.icon-four').css('display', 'block');
  // $('.icon-all').addClass('active-all');
  // $('.icon-block-all').addClass('active-all');
  // $('.icon-arrow-all').addClass('active-all');

})
