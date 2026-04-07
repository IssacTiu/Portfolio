let slideIndex = 1;
showSlides(slideIndex);

var rand = Math.floor(Math.random() * 4);
var prevRand = rand;

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function changeBackgroundColor() {
  const html = document.getElementById("html");

  const colors = ["#FFA400", "#FF00D3", "#00FFEE", "#9FFF00"];
  randomColor = colors[Math.floor(Math.random() * colors.length)];

  html.style.backgroundImage = "linear-gradient(" + randomColor + " .1em, transparent .1em), linear-gradient(90deg, " + randomColor + " .1em, transparent .1em)";
  $(".media-button").css("background-color", randomColor);
  $(".section").css("background-color", randomColor + "80");
  $("footer a").css("color", randomColor);
  $(".fs-button").css("background-color", randomColor);
  
  $(".media-button").on("mouseover", function() {
    $(this).css("border", "2px solid " + randomColor);
    $(this).css("background-color", "transparent");
    $(this).css("color", "rgb(255, 249, 218)");
  });
  $(".media-button").on("mouseout", function() {
    $(this).css("border", "2px solid transparent");
    $(this).css("background-color", randomColor);
    $(this).css("color", "black");
  });

  $("#header a").on("mouseover", function() {
    $(this).css("color", randomColor);
  });
  $("#header a").on("mouseout", function() {
    $(this).css("color", "rgb(255, 249, 218)");
  });

  $(".next, .prev").on("mouseover", function() {
    $(this).css("border", "2px solid " + randomColor);
  });
  $(".next, .prev").on("mouseout", function() {
    $(this).css("border", "2px solid transparent");
  });

  $(".fs-button").on("mouseover", function() {
    $(this).css("background-color", "transparent");
    $(this).css("color", randomColor);
    $(this).css("border", "2px solid " + randomColor);
  });
  $(".fs-button").on("mouseout", function() {
    $(this).css("background-color", randomColor);
    $(this).css("color", "black");
    $(this).css("border", "2px solid transparent");
  });
}