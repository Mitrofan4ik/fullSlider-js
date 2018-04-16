function Slider(settings) {
  var slider = document.getElementById(settings.sliderID); // основной враппер слайдера
  var sliderContent = slider.querySelector(".slider-block"); // контейнер слайдера, который мы ищем внутри слайдера sliderGallery, [0] первый элемент из коллекции
  var sliderItems = slider.querySelectorAll(".slider-block__item"); // выбор всех слайдов в контейнере
  var singleSliderItemsWidth = 0; // ширана одного слайда
  var sliderButtons = slider.getElementsByClassName("btn-slider"); // выбор всех кнопочек сдфайдера
  var sliderWidth = parseFloat(getComputedStyle(sliderContent).width);  // ширина слайдера 
  var leftButton = document.getElementById("btn-left"); // левыая кнопка
  var RightButton = document.getElementById("btn-right"); // правая кнопка
  
  var sliderGallery = document.getElementById("slierGallery"); //контейнер всео слайдера

  var clickCounter = 0; // первое значение счетчика
  var getSliderPosition = 0; // значение transition
    


  var init = function () {
    for (var i = 0; i < sliderItems.length; i++) {
      singleSliderItemsWidth = parseFloat(getComputedStyle(sliderItems[i]).width);
      console.log(singleSliderItemsWidth); // ширина в пикселах одного слайда в слайдере
    }
    console.log(i); 
    
    leftButton.classList.add("disable");
    
    var hiddenSlides = i - slidesNumberVisible;
    console.log(sliderItems.length + " количество слайдов");

  } 

  init();
    
  var sliderWidthContainer =  slider.clientWidth; // ширина контейнера родителя 
  var slidesNumberVisible = Math.round(sliderWidthContainer / singleSliderItemsWidth); // количество слайдов которое помещаеться в эран (в контейнер родителя)
  var hiddenSlides = sliderItems.length - slidesNumberVisible; // количество слайдов которое НЕ помещаеться в эран (в контейнер родителя)
  
  console.log(sliderWidthContainer + "clientWidth");
  console.log(slidesNumberVisible + " окрулила до ближайшего целого");
  console.log(hiddenSlides + " количество слайдов за пределами окна");
  

  sliderGallery.addEventListener('click', function(e) {
    if (e.target.classList.contains('prev')) {
      clickCounter += 1;
      if (clickCounter === 0) {
        console.log(clickCounter === 0);
        e.target.classList.add("disable");
        RightButton.classList.remove("disable");
      } else {
        RightButton.classList.remove("disable");
      }
      getSliderPosition = (clickCounter * singleSliderItemsWidth); // значение transition 
      
      sliderContent.style.transform = "translateX(" + getSliderPosition + "px)";
      console.log(getSliderPosition);

    }
  });

  sliderGallery.addEventListener('click', function(e) {
    if (e.target.classList.contains('next')) {
      clickCounter -= 1;
      getSliderPosition = (clickCounter * singleSliderItemsWidth); // значение transition 
      
      sliderContent.style.transform = "translateX(" + getSliderPosition + "px)";
      
      console.log(getSliderPosition === (singleSliderItemsWidth * hiddenSlides * clickCounter));
      console.log(getSliderPosition);
      console.log(getSliderPosition + singleSliderItemsWidth * hiddenSlides * clickCounter);

      console.log(clickCounter == hiddenSlides);

      if (Math.abs(clickCounter) == hiddenSlides) {
        e.target.classList.add("disable");
        leftButton.classList.remove("disable");
        console.log("равен");
      } else {
        leftButton.classList.remove("disable");
      }
    }
   
    
  });

  var defineSliderTransition = function() {
    if (clickCounter = 0) {
      console.log("clickCounter = 0");
    }
  };
  defineSliderTransition();
};


// var myElement = document.getElementById("sliderContent");
// // myElement.style.transform = 'translateX( "singleSliderItemsWidth" + "px")';

// function getTranslateX() {
//   var style = window.getComputedStyle(myElement);
//   var matrix = new WebKitCSSMatrix(style.webkitTransform);
//   console.log(matrix);
//   console.log('translateX: ', matrix.m41);
// }
// getTranslateX();
// setTimeout(getTranslateX, 1000);

