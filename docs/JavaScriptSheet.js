  function draw() {
    var canvas = $('canvas')[0];
    if(canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.fillRect(10, 10, 50, 50);
        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        ctx.fillRect(30, 30, 50, 50);
    }
}



window.onload = init;

var clickables = document.getElementsByClassName("showHide");
var outerdivs =  document.getElementsByClassName("dropdown");

function init() {
    for (var i = 0; i < outerdivs.length; i++) {
       clickables[i].addEventListener('mouseover', toggle, false);
        clickables[i].addEventListener('mouseleave', toggle, false);
        clickables[i].addEventListener('click', toggle, false);
       clickables[i].addEventListener('touchenter', toggle, false);
    }
    
        
}

function toggle() {
toggleOff()
let parent = this.parentElement
let child = parent.querySelector(".dropdown-content");
child.classList.add("show");
}

function toggleOff() {
for (var i = 0; i < outerdivs.length; i++) {
  let child= outerdivs[i].querySelector(".dropdown-content");
  child.classList.remove("show");
}

}
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
                var slides = document.getElementsByClassName("mySlides");
                var dots = document.getElementsByClassName("demo");
                var captionText = document.getElementById("caption");
                if (n > slides.length) {
                    slideIndex = 1
                }
                if (n < 1) {
                    slideIndex = slides.length
                }
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }
                for (i = 0; i < dots.length; i++) {
                    dots[i].className = dots[i].className.replace(" active", "");
                }
                slides[slideIndex -1].style.display = "block";
                dots[slideIndex -1].className += " active";
                captionText.innerHTML = dots[slideIndex -1].alt;
            }