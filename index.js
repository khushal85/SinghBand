var noButtons = document.querySelectorAll(".drum").length;
for( var i=0; i< noButtons;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function() {

    var switching = this.innerHTML
    makeSound(switching);
  });
}

document.addEventListener("keypress",function(event){
  makeSound(event.key);
});


function makeSound(key){
  switch(key){
    case "w":
    var audioElement = new Audio('sounds/tom-1.mp3');
    audioElement.play();
    break;

    case "a":
    var audioElement = new Audio('sounds/tom-2.mp3');
    audioElement.play();
    break;

    case "s":
    var audioElement = new Audio('sounds/tom-3.mp3');
    audioElement.play();
    break;

    case "d":
    var audioElement = new Audio('sounds/tom-4.mp3');
    audioElement.play();
    break;

    case "j":
    var audioElement = new Audio('sounds/snare.mp3');
    audioElement.play();
    break;

    case "k":
    var audioElement = new Audio('sounds/kick-bass.mp3');
    audioElement.play();
    break;

    case "l":
    var audioElement = new Audio('sounds/crash.mp3');
    audioElement.play();
    break;

  }
}
