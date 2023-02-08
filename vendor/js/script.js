
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


// Document list
$('.document-server-title').toggle(function() {
  $('.document-server-block').css('display', 'flex');
}, function() {
  $('.document-server-block').fadeOut();
});

$('.document-server-block p').click(function() {
  $('.document-server-block').fadeOut();
})

let document_button = $('.document-server-title');
let document_list = $('.document-server-block');
$(document).click(function (e) {
  if (!document_button.is(e.target)) {
    $('.document-server-block').fadeOut();
  }
})


// Donate list
$('.donate-server-title').toggle(function() {
  $('.donate-server-block').css('display', 'flex');
}, function() {
  $('.donate-server-block').fadeOut();
});

function changeText(text) {
  $('.donate-server-title').text(text);
}

$('.donate-server-block p').click(function() {
  $('.donate-server-block').fadeOut();
})

let donate_button = $('.donate-server-title');
let donate_list = $('.donate-server-block');
$(document).click(function (e) {
  if (!donate_list.is(e.target)) {
    $('.donate-server-block').fadeOut();
  }
})


// Slick slider
$('.to-slider[data-slide]').click(function(e) {
  e.preventDefault();
  var slideno = $(this).data('slide');
  $('.main-slider').slick('slickGoTo', slideno - 1);
});

$('.to-slider[data-slide]').click(function(e) {
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









