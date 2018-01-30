function Slider(settings) {
  var slider = document.getElementById(settings.sliderID); // наш слайдер в котором локально храняться настройки
  var sliderContent = slider.getElementsByClassName("slider-content")[0]; // контейнер слайдера, который мы ищем внутри слайдера sliderGallery, [0] первый элемент из коллекции
  var sliderItems = slider.getElementsByClassName("slider2__slide"); // выбор всех слайдов т.е. айтемов в слайдере
  var sliderWidth = parseFloat(getComputedStyle(sliderContent).width); // размер слайдера ширана
  var singleSliderWidth = 0; // размер одного слайда
  var sliderButtons = slider.getElementsByClassName("btn2-slider"); // выбор всех кнопочек сдфайдера
  var self = this; // переменная в которую сохранили контекст

   
  var showSlides = function (a) {
    for (var i = 0; i <sliderItems.length; i++ ) {
      document.getElementById("btn2-right").classList.remove("disable");
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
      document.getElementById("btn2-right").classList.remove("disable");
    } else {
      document.getElementById("btn2-right").classList.remove("disable");
      document.getElementById("btn2-left").classList.add("disable");
      // alert('no');
    }
  }
  this.move_right = function name() { // функция (обработчик события) которая может быть вызвана из вне
    if(parseFloat(sliderItems[sliderItems.length - 1].style.left) >= sliderWidth) {
      showSlides(-1);
      document.getElementById("btn2-left").classList.remove("disable");
    } else {
      document.getElementById("btn2-right").classList.add("disable");
      document.getElementById("btn2-left").classList.remove("disable");
      // alert('no');
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
  init(); // вызов функции , проверка

  // var infiniteLoop = function () {

  // }
}