class Paper {
    constructor(x, y, radius) {
      
      var options = {
         isStatic : false,
         restitution : 0.3,
         friction : 0.5,
         density : 1.2
      }
      this.body = Matter.Bodies.circle(x,y,radius,[options])
      this.width =70
      this.height = 70
      this.image = loadImage("paper.png")
      World.add(world,this.body)
  }
  display(){
    var pos = this.body.position
    
        var angle = this.body.angle;
    
    push();
    translate (pos.x,pos.y)
    rotate (angle)
    fill("yellow")
    imageMode(CENTER)
    image(this.image,45,50,this.width,this.height)
    pop()
    
    };
  }
