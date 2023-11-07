var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.querySelectorAll(".mySlides");
  var dots = document.querySelectorAll(".dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  console.log(slides)
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}





  function myFunction() {

    var checkBox = document.querySelector("#myCheck");

    var text = document.querySelector("#textcheck");

    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }




