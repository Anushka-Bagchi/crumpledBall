
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperBall,ground;
var wall1,wall2,wall3;
var dustbin,dustbinImage;

function preload(){
	dustbinImage=loadImage("dustbingreen.png");

}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paperBall=new Paper(200,400,70);
	ground=new Ground(600,480,1200,10);
	wall1= new Dustbin(830,390,10,150);
	wall2= new Dustbin(970,390,10,150);
	wall3= new Dustbin(900,460,170,20);
	
	dustbin=createSprite(900,390,200,100);
	dustbin.addImage(dustbinImage);
	dustbin.scale=0.5;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  paperBall.display();
  ground.display();
  wall1.display();
  wall2.display();
  wall3.display();

  drawSprites();

}

function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:650,y:-650});
	}
}

