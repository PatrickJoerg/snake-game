var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var images = {
    bg:"images/snake-background.jpg",
// sn:"http://icons.iconarchive.com/icons/blackvariant/button-ui-requests-13/256/Snake-icon.png",
//    serpent:"",
    orange:"images/trump-orange-fruit-parody.png",
};
//main variables
var board;
var serpent = [];
var interval;
var orange;
var positionHead = [];
var previousTail;

//main function
function startGame(){
    frames = 0;
    board = new Board(ctx);
    serpent.push(new Serpent(ctx,100,200))
    interval = setInterval(updateGame,1000/80);
    orange = new Orange(ctx);
    drawSnake();
    moveSnake();
    popHead();
}
function updateGame(){
    positionHead = [];
     ctx.clearRect(0,0,canvas.width,canvas.height);
    // frames ++;
    board.draw();
    orange.draw();
   // serpent[0].update();
   // serpent[0].reenter();
    seeIfTouch();
    forEachUpdate();
    positionHead.push(serpent[0].x, serpent[0].y);
    //console.log(positionHead);
    var tail = serpent.pop();
    tail.x = serpent[0].x;
    tail.y = serpent[0].y;
    serpent.unshift(tail);
    
    }


//check collition
function CheckCollition(){
    this.crashWith = function(item){
      return  (this.x < item.x + item.width) &&
              (this.x + this.width > item.x) &&
              (this.y < item.y + item.height) &&
              (this.y + this.height > item.y);
    }
  }

//collitions
function seeIfTouch(){
      if(serpent[0].crashWith(orange)){
          console.log('orange')
          orangeDisappear();
          forEachUpdate();
          growTail();
          playSound1();
    // stopGame();
        // aumantar cola
        // verificar que naranja no aparece dentro del serpiente 
        // si serpiente toca self -> stopGame
      }
  }

  //stop game
function stopGame(){
    ctx.fillStyle = "black";
    ctx.font = "70px Arial"
    ctx.fillText("TRY AGAIN", 100, 200);
    ctx.fillStyle = "red";
    ctx.font = "30px Arial"
    ctx.fillText("Press 'ESC' for restart", 100,300);
    clearInterval(interval);
  }
  addEventListener("keydown", function(e){
  if(e.keyCode === 27){
    startGame();
  }});

function orangeDisappear(){
    orange.display = "none";
    orange = new Orange(ctx);
};

// function growTail(){
//     //console.log(serpent[0].heading);
//     if(serpent[0].heading === "right"){
//     serpent.push(new Serpent(ctx,serpent[0].x - 30,serpent[0].y))
//     }
//     else if
//         (serpent[0].heading === "left"){
//         serpent.push(new Serpent(ctx,serpent[0].x + 30,serpent[0].y))
//     }
//     else if
//         (serpent[0].heading === "up"){
//             serpent.push(new Serpent(ctx,serpent[0].x, serpent[0].y + 30))
//     }
//     else if
//     (serpent[0].heading === "down"){
//         serpent.push(new Serpent(ctx,serpent[0].x, serpent[0].y - 30))
//     };
//     console.log(serpent)
// };

function growTail(){
    serpent.push(new Serpent(ctx,serpent[0].x+30,serpent[0].y));
    console.log(serpent);
}

function forEachUpdate(){
    //serpent.forEach(function(s,index){
   // console.log(s)
   // growTail();

    //s.update();
    //s.reenter();



   // });

   serpent.forEach(function(s,index){
    if(index === 0){
         s.update();
         s.reenter();
    }else{
     s.reenter();
     s.draw()
    }
});



    if(serpent.length < 2)return;
   
   for(var i=0;i<2 - 1;i++){

       switch(serpent[0].heading){
        case 'right': 
            serpent[i+1].x = serpent[i].x - 30;
            serpent[i+1].y = serpent[i].y;
        
            break;
        case 'left':
            serpent[i+1].x = serpent[i].x + 30;
            serpent[i+1].y = serpent[i].y;
            break;
        case 'up':
            serpent[i+1].x = serpent[i].x;
            serpent[i+1].y = serpent[i].y + 30;
            break;
        case 'down':
            serpent[i+1].x = serpent[i].x;
            serpent[i+1].y = serpent[i].y - 30;
            break;
       }
    }

    for(var j = 2;j<serpent.length;j++){
        serpent[j].x = serpent[j-1].px;
        serpent[j].y = serpent[j-1].py;
    }


    //    serpent.moveForward = function(){
    //        var head = serpent[0];
    //        switch (serpent[0].heading){
    //            case 'right':
    //            serpent.unshift({
    //                 serpent[i+1].x = serpent[i].x - 30;
    //                 serpent[i+1].y = serpent[i].y;
    //            });
    //            break;
    //        }

    //    }
    //    serpent.moveForward();
};


function drawSnake(){
    if(frames%120 ===0) addBlock();
    serpent.forEach(function(block){
      block.draw();
    });
    var tail = serpent.pop();
    tail.x = serpent[0].x;
    tail.y = serpent[0].y;
    serpent.unshift(tail);
  }
  
  function addBlock(){
    var x = serpent[0].x;
    var y = serpent[0].y;
    serpent.push(new Block(x,y));
    console.log(serpent);
  }
  
  function popHead(){
    
  }
function moveSnake(){
    switch(direction){
      case "up":
        serpent[0].y--;
        break;
      case "down":
        serpent[0].y++;
        break;
      case "left":
        serpent[0].x--;
        break;
      case "right":
        serpent[0].x++;
        break;
           }
  }

startGame()