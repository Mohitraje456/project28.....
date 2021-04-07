class Dustbin {
    constructor(x,y,width,height){
    

        var options = {
            isStatic:true,
            restitution : 0.001,
            friction : 30,
            density: 1
    
    
        }
    this.body = Bodies.rectangle(x,y,width,height,options)
    this.width = width
    this.height = height
    this.image = loadImage("343-3431339_green-trash-bin-trash-can-clipart.png")
    World.add(world,this.body)
    
    }
    
    
    display(){
     var pos = this.body.position
    
        var angle = this.body.angle;
    
    push();
    translate (pos.x,pos.y)
    rotate (angle)
    imageMode(CENTER);
    fill("orange")
    image(this.image,0,0,this.width,this.height)
    pop()
    
    };
     
}
