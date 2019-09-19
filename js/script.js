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
