// This is my slider on lights page



var slider = document.getElementById("myRange");
var output = document.getElementById("value");
var outputhr = document.getElementById("valuehr");

output.innerHTML = slider.value;
outputhr.innerHTML = slider.value/10;

slider.oninput = function() {
  output.innerHTML = this.value;
  outputhr.innerHTML = this.value/10;
}

slider.addEventListener ("mousemove", function(){
  var x = slider.value;
  var color = 'linear-gradient(90deg, rgb(255,251,0)' + x + '%, rgb(255,255,255)' + x + '%)';
  slider.style.background = color;
})
