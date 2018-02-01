function Slider(settings) {
  var slider = document.getElementById(settings.sliderID); // наш слайдер в котором локально храняться настройки
  var sliderContent = slider.getElementsByClassName("slider-content")[0]; // контейнер слайдера, который мы ищем внутри слайдера sliderGallery, [0] первый элемент из коллекции
  var sliderItems = slider.getElementsByClassName("slider2__slide"); // выбор всех слайдов т.е. айтемов в слайдере
  var sliderWidth = parseFloat(getComputedStyle(sliderContent).width); // размер слайдера ширана
  var singleSliderWidth = 0; // размер одного слайда
  var sliderButtons = slider.getElementsByClassName("btn2-slider"); // выбор всех кнопочек сдфайдера
  var self = this; // переменная в которую сохранили контекст

  var buttonRight = document.getElementById("btn2-right");
  var buttonLeft = document.getElementById("btn2-left");

  var sliderDots = document.getElementById("sliderDots");
  var listDot = sliderDots.querySelector(".slider2-dots__dot");

  var sliderDots = function() {

    var sliderDots = document.getElementById("sliderDots");
    var listDot = sliderDots.querySelector(".slider2-dots__dot");
    var clone = listDot.cloneNode(true);

    sliderDots.appendChild(clone);
  };
  
  for (var i = 0; i <sliderItems.length; i++ ) {
    sliderDots();
  }
   
  var showSlides = function (a) {
    for (var i = 0; i <sliderItems.length; i++ ) {
      if (i !== listDot.getAttribute("data-slide")) { // добавляем класс active для li
        listDot.classList.add("active");
      }
      // добавляем класс active при пререлистывании слайдера
      // if (parseFloat(sliderItems[i].style.left) == 0) {
      //   sliderItems[i].classList.add("active");
      // } else {
      //   sliderItems[i].classList.remove("active");
      // }
      if (sliderItems[i].style.left !== '') {
        var current = parseFloat(sliderItems[i].style.left); // получаем координаты слайдера без пикселей
        sliderItems[i].style.left = (current + (singleSliderWidth * a)) + "px"; // позиция каждого слайда
      } else {
        sliderItems[i].style.width = singleSliderWidth + "px"; // обращение к каждому элементу т.е. слайду и присваеваем ему ширину singleSliderWidth размер одного слайда в px
        sliderItems[i].style.left = (singleSliderWidth * i) + "px"; // позиция каждого слайда
      }
    }
  }

  this.move_left = function name() { // функция (обработчик события) которая может быть вызвана из вне
    if(parseFloat(sliderItems[0].style.left) < 0) {
      showSlides(1);
      buttonRight.classList.remove("disable");
     
    } else {
      buttonRight.classList.remove("disable");
      buttonLeft.classList.add("disable");
    }
  }
  this.move_right = function name() { // функция (обработчик события) которая может быть вызвана из вне
    if(parseFloat(sliderItems[sliderItems.length - 1].style.left) >= sliderWidth) {
      showSlides(-1);
      buttonLeft.classList.remove("disable");
    } else {
      buttonRight.classList.add("disable");
      buttonLeft.classList.remove("disable");
    }
  }

  var init = function () {
    if (!settings.slidesToShow || isNaN(+settings.slidesToShow)) {// проверка на то что slidesToShow цивра
      settings.slidesToShow = 1; // значение по умолчанию
    }
    singleSliderWidth = sliderWidth / settings.slidesToShow;

    showSlides(1);

    for (var i = 0; i < sliderButtons.length; i++ ) {
      sliderButtons[i].addEventListener('click', function () {
        self['move_' + this.dataset.action](); // вызов метода self['move_left'](); or self.movie_left();
      });
    }
  }
  init();

  // var infiniteLoop = function () {
  //   if (settings.slidesToShow) {
  //     settings.infinite = true;
  //   }
  // }
  //     for (var i = 0; i < sliderItems.length; i++ ) {
  //       if (sliderItems > settings.slidesToShow) {
  //         sliderContent.appendChild(sliderItems[0]);
  //       }
  //     }
  // if (settings.infinite) {
  //   // sliderItems.unshift(sliderItems[0].cloneNode(true));
  //   // sliderItems.push(sliderItems[sliderItems.length - 1].cloneNode(true));
  //   infiniteLoop();
  // } else {
  //   init(); // вызов функции , проверка
  // }

 
  var sliderDots = document.getElementById("sliderDots");
  var listDotItem = sliderDots.getElementsByClassName("slider2-dots__dot");
  
  for (var i = 0; i < listDotItem.length; i++) {
    // console.log(listDotItem.length + "listDotItem.length");
    listDotItem[i].setAttribute("data-slide", i);
  }

  

}
