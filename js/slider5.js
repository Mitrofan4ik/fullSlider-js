function Slider(settings) {
  var slider = document.getElementById(settings.sliderID); // основной враппер слайдера
  var sliderContent = slider.querySelector(".slider-block"); // контейнер слайдера, который мы ищем внутри слайдера sliderGallery, [0] первый элемент из коллекции
  var sliderItems = slider.querySelectorAll(".slider-block__item"); // выбор всех слайдов в контейнере
  var singleSliderItemsWidth = 0; // ширана одного слайда
  var sliderButtons = slider.getElementsByClassName("btn-slider"); // выбор всех кнопочек сдфайдера
  var sliderWidth = parseFloat(getComputedStyle(sliderContent).width);  // ширина слайдера 
  
  var sliderGallery = document.getElementById("slierGallery"); //контейнер всео слайдера

  var clickCounter = 0; // первое значение счетчика
  var getSliderPosition = 0; // значение transition
    


  var init = function () {
    for (var i = 0; i < sliderItems.length; i++) {
      singleSliderItemsWidth = parseFloat(getComputedStyle(sliderItems[i]).width);
      console.log(singleSliderItemsWidth); // ширина в пикселах одного слайда в слайдере
    }
    console.log(i); 
    
    var hiddenSlides = i - slidesNumberVisible;
    
  } 

  init();
    
  var sliderWidthContainer =  slider.clientWidth; // ширина контейнера родителя 
  var slidesNumberVisible = Math.round(sliderWidthContainer / singleSliderItemsWidth); // количество слайдов которое помещаеться в эран (в контейнер родителя)
  var hiddenSlides = sliderItems.length - slidesNumberVisible; // количество слайдов которое НЕ помещаеться в эран (в контейнер родителя)
  
  console.log(sliderWidthContainer + "clientWidth");
  console.log(slidesNumberVisible + " окрулила до ближайшего целого");
  console.log(hiddenSlides + " количество слайдов за пределами окна");
  
  // sliderGallery.addEventListener('click', function(e) {
  //   console.dir(e.target)
  //   console.dir(e.target.classList.contains('btn-slider'));
  //   if (e.target.classList.contains('prev')) {
  //     clickCounter += 1;
  //     console.log(clickCounter)
  //     sliderContent.style.transform = 'translateX(' + (clickCounter * singleSliderItemsWidth) + 'px)';
  //     if (clickCounter == hiddenSlides) {
  //       e.target.classList.add("disable");
  //     }
  //   } else if (e.target.classList.contains('next')) {
  //     clickCounter -= 1;
  //     console.log(clickCounter)
  //     sliderContent.style.transform = 'translateX(' + (clickCounter * singleSliderItemsWidth) + 'px)';
  //     if (clickCounter == hiddenSlides) {
  //       e.target.classList.add("disable");
  //     }
  //   }
  //   //заблокировать или разблокировать кнопку при клике, вычеслить сколько мы сможем делать кликов, посчитать сколько раз счетчик переключаеться + оставшееся количество слайдов в масиве
  // });


 
  

  sliderGallery.addEventListener('click', function(e) {
    if (e.target.classList.contains('prev') ) {
      clickCounter += 1;

      getSliderPosition = (clickCounter * singleSliderItemsWidth); // значение transition 
      
      sliderContent.style.transform = "translateX(" + getSliderPosition + "px)";
      console.log(getSliderPosition);
    } 
    if (getSliderPosition = 0) {
      e.target.classList.add("disable");
    }
    // else if (clickCounter == hiddenSlides) {
    //   e.target.classList.add("disable");
    // }
    defineSliderTransition();
    
  });

  sliderGallery.addEventListener('click', function(e) {
    if (e.target.classList.contains('next')) {
      clickCounter -= 1;
      getSliderPosition = (clickCounter * singleSliderItemsWidth); // значение transition 
      
      sliderContent.style.transform = "translateX(" + getSliderPosition + "px)";

      console.log(getSliderPosition);
    }
    //  else if (clickCounter == hiddenSlides) {
    //   e.target.classList.add("disable");
    // }
    defineSliderTransition();
    
  });

  var defineSliderTransition = function() {
    getSliderPosition = (clickCounter * singleSliderItemsWidth);
    sliderContent.style.transform = "translateX(" + getSliderPosition + "px)";
    console.log(getSliderPosition + " позиция");
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

