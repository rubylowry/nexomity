// This is how you can click on my hamburger menu

function onClickMenu(){
    document.getElementById("menu").classList.toggle("change");

    document.getElementById("nav").classList.toggle("change");

    document.getElementById("menu__bg").classList.toggle("change__bg");
}

// This is my slider on lights page


// /*This affects the slider*/
var slider = document.getElementById("myRange");
/*This affects the value heading*/
var output = document.getElementById("value");

output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

slider.addEventListener("mousemove", function(){
  var x = slider.value;
  var color1 = 'linear-gradient(90deg, rgb(117,252,117)' + x + '%, rgb(214,214,214)' + x + '%)';
  slider.style.background = color;
})

// var ARRAY_INDEX = 0; // You better declare this var outside the event handler function if you want to use it else where

// $("#slider").on("change",function(){
//     ARRAY_INDEX = $(this).val();
//     console.log(ARRAY_INDEX);
// });
