class zombie {
    constructor(x, y) {
      this.zombie=createSprite(x,y,40,50);
      this.width = 40;
      this.height = 50;
    }
    display(){
      zombieL.add(this.zombie);
     
  this.zombie.velocityX=-1
 //this.zombie.velocityY= 2
    }
  };
  