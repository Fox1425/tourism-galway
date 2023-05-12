window.addEventListener("DOMContentLoaded", function() {
  var images = document.querySelectorAll("#slideshow img");
  var currentImage = 0;
  
  function rotateImage() {
    images[currentImage].classList.remove("active");
    currentImage = (currentImage + 1) % images.length;
    images[currentImage].classList.add("active");
  }
  
   // Start the slideshow
   images[currentImage].classList.add("active");
  setInterval(rotateImage, 4000); // Change image every 4 seconds
});
  
