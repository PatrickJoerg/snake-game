 // random appearance of Orange

 function Orange(ctx){
    CheckCollition.call(this);
    this.x = Math.floor((Math.random()*568-50)+50);
    this.y = Math.floor((Math.random()*568-50)+50);
    this.width = 30;
    this.height = 30;
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = images.orange;
    this.img.onload = function(){
        this.draw();
        }.bind(this);
    this.draw = function(){
            this.ctx.drawImage(this.img, this.x,this.y, this.width, this.height);
          };
}


//     var createFood = function() {
//         food = {
//           //Generate random numbers.
//           x: Math.floor((Math.random() * 30) + 1),
//           y: Math.floor((Math.random() * 30) + 1)
//       }
  
//       //Look at the position of the snake's body.
//       for (var i=0; i>snake.length; i++) {
//           var snakeX = snake[i].x;
//           var snakeY = snake[i].y;
      
//            if (food.x===snakeX || food.y === snakeY || food.y === snakeY && food.x===snakeX) {
//               food.x = Math.floor((Math.random() * 30) + 1);
//               food.y = Math.floor((Math.random() * 30) + 1);
//           }
//       }
//   }