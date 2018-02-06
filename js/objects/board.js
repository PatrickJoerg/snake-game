// function Board() {
//     var canvas = document.getElementById('board');
//       this.ctx = canvas.getContext('2d');
//       this.image = new Image();
//       this.image.src = "images/snake-background.jpg";
//       this.image.addEventListener("load",this.drawBoard.bind(this) )        
//   }

//   Board.prototype.drawBoard = function(){
//     this.ctx.drawImage(this.image, 0, 0);
//     this.filltext
//   }

// var board = new Board();

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var images = {
    bg:"images/snake-background.jpg",
    sn:"http://icons.iconarchive.com/icons/blackvariant/button-ui-requests-13/256/Snake-icon.png",
//    serpent:"",
//    apple:"",
};
//main variables
var board;
var serpent;
//var interval;
//var apple = [];
//var frames = 0;

//classes
function Board(ctx){
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = images.bg;
    this.img.onload = function(){
        this.draw();
        }.bind(this);
    this.draw = function(){
            this.ctx.drawImage(this.img, this.x,this.y, this.width, this.height);
          };
    }

function Serpent(ctx){
    this.x = 150;
    this.y = 300;
    this.xspeed = 1;
    this.yspeed = 0;
    this.ctx=ctx;

    this.show = function(){
        console.log('entro')
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(this.x, this.y, 20, 20);
    }
    this.show();
}


    //main function
    function startGame(){
        board = new Board(ctx);
        setTimeout(function (){
            serpent = new Serpent(ctx);
        },500)
       
    }
    startGame();