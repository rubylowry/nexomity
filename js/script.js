// This is how you can click on my hamburger menu

function onClickMenu(){
    document.getElementById("menu").classList.toggle("change");

    document.getElementById("nav").classList.toggle("change");

    document.getElementById("menu__bg").classList.toggle("change__bg");
}

// This is my slider on lights page


// /*This affects the slider*/
var slider = document.getElementById("myRange");
/*This affects the value change*/
var output = document.getElementById("value");

output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

slider.addEventListener ("mousemove", function(){
  var x = slider.value;
  var color = 'linear-gradient(90deg, rgb(117,252,117)' + x + '%, rgb(214,214,214)' + x + '%)';
  slider.style.background = color;
})


const cameraSlider = document.querySelector('.camera__slider');
const cameraProgress = document.querySelector('.camera__slider .camera__progress');
const cameraThumb = document.querySelector('.camera__slider .camera__thumb');
const cameraSliderWidth = cameraSlider.offsetWidth;
const cameraSliderLeft = cameraSlider.offsetLeft;

var percentage = 50;
var dragging = false;
var translate;



function setPercentage() {
cameraProgress.style.transform = 'scaleX(' + percentage/100 + ')';
cameraThumb.style.transform = 'translateX(' + percentage/100 * cameraSliderWidth) + 'px)';
}
setPercentage();

thumb.addEventListener('mousedown', function(e) {
  dragging = true;
});
document.addEventListener('mousemove', function(e) {
  if (dragging) {
    translate = e.clientX - cameraSliderLeft;
    percentage = (translate /cameraSliderWidth) * 100;
    setPercentage();
    cameraProgress.style.transform = 'scaleX(' + + ')';
  }
})
document.addEventListener('mouseup', function(e) {
  dragging = false;
})
