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
    




    
