var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var images = {
    bg:"images/snake-background.jpg",
    orange:"images/trump-orange-fruit-parody.png",
};
//main variables
var board;
var snake = [];
var interval;
var orange;
var frames = 0;
var direction = "right";

function Board(){
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
    //this.ctx = ctx;
    this.img = new Image();
    this.img.src = images.bg;
    this.img.onload = function(){
        this.draw();
        }.bind(this);
    this.draw = function(){
            ctx.drawImage(this.img, this.x,this.y, this.width, this.height);
          };
    }

function Orange(){
        this.x = Math.floor((Math.random()*568-50)+50);
        this.y = Math.floor((Math.random()*568-50)+50);
        this.width = 30;
        this.height = 30;
        //this.ctx = ctx;
        this.img = new Image();
        this.img.src = images.orange;
        this.img.onload = function(){
            this.draw();
            }.bind(this);
        this.draw = function(){
                ctx.drawImage(this.img, this.x,this.y, this.width, this.height);
              };
    }

function Block(x,y){
  
    this.x = x || 30;
    this.y = y|| 30;
    this.size = 1;
    this.width = 30;
    this.height = 30;
    this.direction = "right";
    this.draw = function(){
     //this.move();
      ctx.fillRect(this.x*this.size,this.y*this.size,30,30);
    }
    this.crashWith = function(item){
        return  (this.x < item.x + item.width) &&
                (this.x + this.width > item.x) &&
                (this.y < item.y + item.height) &&
                (this.y + this.height > item.y);
      }
}

    

function startGame(){
    board = new Board();
    snake = [new Block(),new Block(),new Block()];
    orange = new Orange();
    interval = setInterval(updateGame,1000/30);
  
  }

function updateGame(){
    frames++;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    board.draw();
    orange.draw();
    moveSnake();
    drawSnake();
    reenter();
    
    seeIfTouch();
    // if(snake[0].crashWith(orange)){
    //     alert ('chocaste')
    //       orangeDisappear();
    //      // forEachUpdate();
    //       growTail();
    //       playSound1();
    // // stopGame();
    //     // aumantar cola
    //     // verificar que naranja no aparece dentro del serpiente 
    //     // si serpiente toca self -> stopGame
    //   }
   
  }

//check collition

//collitions
function seeIfTouch(){
   
     snake.forEach(function(block){

         if(block.crashWith(orange)){
            addBlock();
            orangeDisappear();
            playSound1();
        };
     }); 
  }

  function orangeDisappear(){
    orange.display = "none";
    orange = new Orange(ctx);
};

function drawSnake(){
    //if(frames%120 ===0) addBlock();
    snake.forEach(function(block){
      block.draw();
    });
    var tail = snake.pop();
    tail.x = snake[0].x;
    tail.y = snake[0].y;
    snake.unshift(tail);
  }

function addBlock(){
    var x = snake[0].x;
    var y = snake[0].y;
    snake.push(new Block(x,y));
    console.log(snake);
  }


function moveSnake(){
    switch(direction){
      case "up":
        snake[0].y-=10;
        break;
      case "down":
        snake[0].y+=10;
        break;
      case "left":
        snake[0].x-=10;
        break;
      case "right":
        snake[0].x+=10;
        break;
           }
           this.reenter = function(){
            if (this.x == 608){
                this.x = -20;
            }
            else if (this.x == -20){
                this.x = 608
            }
            else if (this.y == 608){
                this.y = -20
            }
            else if (this.y == -20){
                this.y = 608
            }
            
        }
    
  }


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

startGame();

//listeners
addEventListener("keydown", function(e){
  switch(e.keyCode){
    case 38: //arriba
      direction = "up";
      break;
    case 40: // abajo
      direction = "down";
      break;
    case 37: //izquierda
      direction = "left";
      break;
    case 39: //derecha
      direction = "right";
      break;
  }
  
});