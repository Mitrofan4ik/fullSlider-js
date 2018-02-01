var next = document.getElementById("jsNext");
var prew = document.getElementById("jsPrew");

var slides = document.getElementsByClassName("jsSlide");
for ( var i=0; i < slides.length; i++) {
  slides[i].style.zIndex = slides.length - i;
}

next.onclick = function () {
    var activeEl = document.querySelector('.active');
    if(activeEl.nextElementSibling) {
       activeEl.style.left = "-100%";
       activeEl.classList.remove('active');
       activeEl.nextElementSibling.classList.add('active');
       this.classList.remove('disactive');
       prew.classList.remove('disactive');
       if(!activeEl.nextElementSibling.nextElementSibling) {
          this.classList.add('disactive');
       }
    }
}
prew.onclick = function () {
    var activeEl = document.querySelector('.active');
    if(activeEl.previousElementSibling) {
       activeEl.previousElementSibling.style.left = "0%";
       activeEl.classList.remove('active');
       activeEl.previousElementSibling.classList.add('active');
       this.classList.remove('disactive');
       next.classList.remove('disactive');
       if(!activeEl.previousElementSibling.previousElementSibling) {
          this.classList.add('disactive');
       }
    }
}