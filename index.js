// var w = document.querySelectorAll("button")[0].addEventListener("click", handleclick);
// var a = document.querySelectorAll("button")[1].addEventListener("click", handleclick);
// var s = document.querySelectorAll("button")[2].addEventListener("click", handleclick);
// var d = document.querySelectorAll("button")[3].addEventListener("click", handleclick);
// var j = document.querySelectorAll("button")[4].addEventListener("click", handleclick);
// var k = document.querySelectorAll("button")[5].addEventListener("click", handleclick);
// var l = document.querySelectorAll("button")[6].addEventListener("click", handleclick);
// function handleclick(){
//     alert("I got Clicked");
// }



var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", sound);

  function sound() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  }
}

document.addEventListener("keypress", keySound);
function keySound(event){
  makeSound(event.key);
  buttonAnimation(event.key);
}
function makeSound(key){
  switch (key) {

    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
