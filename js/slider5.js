function Slider(settings) {
  var slider = document.getElementById(settings.sliderID); // основной враппер слайдера
  var sliderContent = slider.querySelector(".slider-block"); // контейнер слайдера, который мы ищем внутри слайдера sliderGallery, [0] первый элемент из коллекции
  var sliderItems = slider.querySelectorAll(".slider-block__item"); // выбор всех слайдов в контейнере
  var singleSliderItemsWidth = 0; // ширана одного слайда
  var sliderButtons = slider.getElementsByClassName("btn-slider"); // выбор всех кнопочек сдфайдера
  var sliderWidth = parseFloat(getComputedStyle(sliderContent).width);  // ширина слайдера 

  console.log(sliderWidth +'-'+ 'sliderWidth');

  
  var init = function () {
    
    for (var i = 0; i < sliderItems.length; i++) {
      console.dir(sliderItems[i]);
    }
    
    singleSliderItemsWidth = sliderWidth / settings.sliderItems + 'px';
    console.log(singleSliderItemsWidth + "-" + "singleSliderItemsWidth");
    // var current = parseFloat(sliderItems[i].style.left);
  } 
  init();
};