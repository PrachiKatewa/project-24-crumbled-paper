
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1 ;
var ground; 
var dustbin1 ;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 paper1 = new Paper(700,100,20);
	 ground = new Ground(400,80,1200,20);
	 dustbin1 = new Dustbin(200,80,50,50);


	Engine.run(engine);
  
}


function draw() {
	background(0);

  rectMode(CENTER);
  
  Engine.update(engine);

  paper1.display();
  ground.display();
  dustbin1.display();
  
  upArrowPressed();

  drawSprites();
 
}

function upArrowPressed(){
if(keyCode === UP_ARROW){

Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x : 85 , y : -85})

}

}


