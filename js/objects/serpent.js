

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
    
    this.update = function(){
        this.ctx.clearRect(this.x, this.y, 20, 20);
        this.x = this.x + this.xspeed;
        //this.y1 = this.y + this.yspeed;
        this.ctx.fillRect(this.x, this.y, 20, 20);
    }
    ;
}