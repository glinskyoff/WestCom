
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
  $('.slider-server-page').slick ({
    arrows: false,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    verticalSwiping: true,
    vertical: true,
    draggable: true,
    // autoplay: true,
    // autoplaySpeed: 2500,
    touchThreshold: 5,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          vertical: false,
          verticalSwiping: false,
          slidesToShow: 1,
          // centerMode: true
        }
      }
    ]
 
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
});

let server;

$(".select_ul li").click(function(){
  var currentele = $(this).html();
  $(".default_option li").html($(currentele));
  $('.default_option li div.icon').removeClass('icon-one icon-two icon-three icon-four').toggleClass('icon-active');
  $(this).parents(".select_wrap").removeClass("active");
  $('.icon-active').css('display', 'block');

  $('.icon-one').css('display', 'block');
  $('.icon-two').css('display', 'block');
  $('.icon-three').css('display', 'block');
  $('.icon-four').css('display', 'block');

});

$(".select_ul-server li").click(function(){
  // var currentele = $(this).html();
  // $(".default_option li").html($(currentele));
  $('.default_option li div.icon').removeClass('icon-one icon-two icon-three icon-four').toggleClass('icon-active');
  $(this).parents(".server-page-list").removeClass("active");
  $('.icon-active').css('display', 'block');

  $('.icon-one').css('display', 'block');
  $('.icon-two').css('display', 'block');
  $('.icon-three').css('display', 'block');
  $('.icon-four').css('display', 'block');

});


$('.header-link-main-first-li[data-slide]').click(function(e) {
  e.preventDefault();
  var slideno = $(this).data('slide');
  $('.main-slider').slick('slickGoTo', slideno - 1);
});

$('.header-link-main-second-li[data-slide]').click(function(e) {
  e.preventDefault();
  var slideno = $(this).data('slide');
  $('.main-slider').slick('slickGoTo', slideno - 1);
});

$(function(){
  $('a[href^="#"]').on('click', function(event) {
    event.preventDefault();
    
    var sc = $(this).attr("href"),
        dn = $(sc).offset().top - 100;

    $('html, body').animate({scrollTop: dn}, 1000);

  });
});
