function Slider(settings) {
  var slider = document.getElementById(settings.sliderID); // основной враппер слайдера
  var sliderContent = slider.querySelector(".slider-block"); // контейнер слайдера, который мы ищем внутри слайдера sliderGallery, [0] первый элемент из коллекции
  var sliderItems = slider.querySelectorAll(".slider-block__item"); // выбор всех слайдов в контейнере
  var singleSliderItemsWidth = 0; // ширана одного слайда
  var sliderButtons = slider.getElementsByClassName("btn-slider"); // выбор всех кнопочек сдфайдера
  var sliderWidth = parseFloat(getComputedStyle(sliderContent).width);  // ширина слайдера 
  
  var sliderGallery = document.getElementById("slierGallery"); //контейнер всео слайдера

  var clickCounter = 0; // первое значение счетчика

  var init = function () {
    for (var i = 0; i < sliderItems.length; i++) {
       singleSliderItemsWidth = parseFloat(getComputedStyle(sliderItems[i]).width);
       console.log(singleSliderItemsWidth); // ширина в пикселах одного слайда в слайдере
      }
      console.log(i); 
    
    var sliderWidthContainer =  slider.clientWidth; // ширина контейнера родителя 
    var slidesNumberVisible = Math.round(sliderWidthContainer / singleSliderItemsWidth); // количество слайдов которое помещаеться в эран (в контейнер родителя)
    
    var hiddenSlides = i - slidesNumberVisible;
    
    console.log(sliderWidthContainer + "clientWidth");
    console.log(slidesNumberVisible + " окрулила до ближайшего целого");
    console.log(hiddenSlides + " количество слайдов за пределами окна");
    
  } 
  init();

  // console.log(window.innerWidth + "innerWidth");
  // console.log(window.outerWidth + "outerWidth");
  // console.log(document.documentElement.clientWidth + "clientWidth");
  
  

  sliderGallery.addEventListener('click', function(e) {


    console.dir(e.target)

    console.dir(e.target.classList.contains('btn-slider'));

    if (e.target.classList.contains('prev')) {
      clickCounter += 1;

      console.log(clickCounter)

      sliderContent.style.transform = 'translateX(' + (clickCounter * singleSliderItemsWidth) + 'px)';

    } else if (e.target.classList.contains('next')) {
      clickCounter -= 1;

      console.log(clickCounter)

      sliderContent.style.transform = 'translateX(' + (clickCounter * singleSliderItemsWidth) + 'px)';

    }
    //заблокировать или разблокировать кнопку при клике, вычеслить сколько мы сможем делать кликов, посчитать сколько раз счетчик переключаеться + оставшееся количество слайдов в масиве
  });
};