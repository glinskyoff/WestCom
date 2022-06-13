
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

const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});