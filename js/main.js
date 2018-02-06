var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var images = {
    bg:"images/snake-background.jpg",
// sn:"http://icons.iconarchive.com/icons/blackvariant/button-ui-requests-13/256/Snake-icon.png",
//    serpent:"",
//    apple:"",
};
//main variables
var board;
var serpent;
var interval;

//main function
function startGame(){
    frames = 0;
    board = new Board(ctx);
    serpent = new Serpent(ctx);
    interval = setInterval(updateGame,1000/20);       
}
function updateGame(){
    console.log(serpent)

    // frames ++;
    serpent.update();
}

startGame()