function Slider(settings) {
  var slider = document.getElementById(settings.sliderID); // основной враппер слайдера
  var sliderContent = slider.querySelector(".slider-block"); // контейнер слайдера, который мы ищем внутри слайдера sliderGallery, [0] первый элемент из коллекции
  var sliderItems = slider.querySelectorAll(".slider-block__item"); // выбор всех слайдов в контейнере
  var singleSliderItemsWidth = 0; // ширана одного слайда
  var sliderButtons = slider.getElementsByClassName("btn-slider"); // выбор всех кнопочек сдфайдера
  var sliderWidth = parseFloat(getComputedStyle(sliderContent).width);  // ширина слайдера 

  var sliderGallery = document.getElementById("slierGallery"); //контейнер всео слайдера

  var clickCounter = 0;

  var init = function () {

    singleSliderItemsWidth = sliderWidth / settings.sliderItems
    
    for (var i = 0; i < sliderItems.length; i++) {
      sliderItems[i].style.width = singleSliderItemsWidth + 'px';
      // console.dir(sliderItems[i]);
    }
    
    console.log(singleSliderItemsWidth + "-" + "singleSliderItemsWidth");
    // var current = parseFloat(sliderItems[i].style.left);
  } 
  init();


  sliderGallery.addEventListener('click', function(e) {
    console.dir(e.target)
    console.dir(e.target.classList.contains('btn-slider'));
    if (e.target.classList.contains('prev')) {
      clickCounter += 1;
      console.log(clickCounter)
      sliderContent.style.transform = 'translateX(' + (clickCounter * singleSliderItemsWidth) + 'px)';
    } else if (e.target.classList.contains('next')) {
      console.log(-1 * singleSliderItemsWidth);
      clickCounter -= 1;
      console.log(clickCounter)
      sliderContent.style.transform = 'translateX(' + (clickCounter * singleSliderItemsWidth) + 'px)';
    }
    //заблокировать или разблокировать кнопку при клике, вычеслить сколько мы сможем делать кликов, посчитать сколько раз счетчик переключаеться + оставшееся количество слайдов в масиве
  });


};