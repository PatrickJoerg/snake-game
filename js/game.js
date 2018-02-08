
    // key inputs
         document.onkeydown = function(direction) {
            switch (direction.keyCode) {
              case 38: serpent[0].direction('up'); break;
              case 40: serpent[0].direction('down'); break;
              case 37: serpent[0].direction('left'); break;
              case 39: serpent[0].direction('right'); break;
            }};

   // sounds: https://peal.io/p/i-m-really-rich#

//Background music
var music = new Audio();
music.src = "sounds/inthejungle.mp3";
music.play();

//sounds
var sound1 = new Audio();
sound1.src = "sounds/Slurp+3.mp3";

function playSound1(){
    sound1.play();
}
