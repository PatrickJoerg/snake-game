

function Serpent(ctx,x,y){
    CheckCollition.call(this);
    this.x = x;
    this.y = y;
    this.px;
    this.py;
    this.xspeed = 2;
    this.yspeed = 0;
    this.ctx=ctx;
    this.width = 30;
    this.height = 30;
    this.heading = "right";


    this.show = function(){
        console.log('inicio')
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(this.x, this.y, 30, 30);
    }
    this.show();
    
    this.update = function(){  
        this.px = this.x;
        this.py = this.y;
        this.x = this.x + this.xspeed;
        this.y = this.y + this.yspeed;
        this.ctx.fillRect(this.x, this.y, 30, 30);
        console.log('pasado: ',this.px)
        console.log('presente; ',this.x);
        
    };

    this.draw = function(){
        this.ctx.fillRect(this.x,this.y,30,30);
    }

    this.direction = function(direction){
        console.log(direction);
        if (direction == 'up'){
            this.xspeed = 0;
            this.yspeed = -2;
            this.heading = 'up';
        }
        else if (direction == 'down'){
            this.xspeed = 0;
            this.yspeed = 2;
            this.heading = 'down';

        }
        else if (direction == 'left'){
            this.xspeed = -2;
            this.yspeed = 0;
            this.heading = 'left';

        }
        else if (direction == 'right'){
            this.xspeed =   2;
            this.yspeed = 0;
            this.heading = 'right';

        }
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