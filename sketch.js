var box1
var paper1

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1495, 700);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	ground = new Ground(748,650,1497,20);
	paper1 = new Paper(10,10,70,70);
	box2 = new Dustbin(1190,590,20,100);
	box3 = new Dustbin(1410,590,20,100);
	box1 = new Dustbin(1300,540,200,200);
	launcher = new Launcher(paper1.body,{x:200, y:100})
}



function draw() {
  rectMode(CENTER);
  background(255);

  ground.display();
  box1.display();
  paper1.display();
  launcher.display();
  drawSprites();
 
}

function keyPressed(){
  if (keyCode === UP_ARROW){
	  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:1,y:-1});
  }
}

function mouseDragged(){
    Matter.Body.setPosition(paper1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcher.fly();
}

