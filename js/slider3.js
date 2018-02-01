var carousels = document.getElementsByClassName("image-carousel");


[].forEach.call(carousels, function(c) {
  var next = c.getElementsByClassName("next")[0];
  var prev = c.getElementsByClassName("prev")[0];
  var bubblesContainer = c.getElementsByClassName("bubbles")[0];
  var inner = c.getElementsByClassName("inner")[0];
  var imgs = inner.getElementsByTagName("img");
  var currentImageIndex = 0;
  var width = parseFloat(getComputedStyle(inner).width);
  var bubbles = [];

  // sliderWidth = parseFloat(getComputedStyle(inner).width);
  // singleSliderWidth = sliderWidth / imgs;

  for (var i = 0; i < imgs.length; i++) {
    var b = document.createElement("span");
    b.classList.add("bubble");
    bubblesContainer.appendChild(b);
    bubbles.push(b);

    b.addEventListener("click", function() {
      currentImageIndex = i;
      switchImg();
    });
  }

  function switchImg() {
    inner.style.left = -width * currentImageIndex + "px";

    bubbles.forEach(function(b, i) {
      if (i === currentImageIndex) {
        b.classList.add("active");
      } else {
        b.classList.remove("active");
      }
    });
  }

  next.addEventListener("click", function() {
    currentImageIndex++;

    if (currentImageIndex >= imgs.length) {
      currentImageIndex = 0;
    }

    switchImg();
  });

  prev.addEventListener("click", function() {
    currentImageIndex--;

    if (currentImageIndex < 0) {
      currentImageIndex = imgs.length - 1;
    }

    switchImg();
  });

  switchImg();
});
