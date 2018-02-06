// function Ball (canvas,posX,posY,height,width,color){
//     this.ctx = canvas;
//     this.posX = posX;
//     this.posY = posY;
//     this.direction = "up-right";
//     this.height = height;
//     this.width = width;
//     this.color = color;
//     this.radius = 30;
// }

// Ball.prototype.drawBall = function (){
//     this.ctx.arc(this.posX,this.posY,this.radius,0,2*Math.PI)
//     this.ctx.fillStyle = this.color;
//     this.ctx.fill()
// }

function Snake (canvas, posX, posY, height, width, color){
    this.ctx = canvas;
    this.posX = posX;
    this.posy = posY;
    this.direction = "right";
    this.height = height;
    this.width = width;
    this.color = color;
    this.radius = 30;
}

Snake.prototype.drawSnake = function(){
    this.ctx.arc(this.posX,this.posY,this.radius,0,2*Math.PI)
    this.ctx.fillStyle = this.color;
    this.ctx.fill()
}


// this.ctx.fillRect(25, 25, 100, 100);
// this.ctx.clearRect(45, 45, 60, 60);
// this.ctx.strokeRect(50, 50, 50, 50);