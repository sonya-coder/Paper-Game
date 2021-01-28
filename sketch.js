
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    
  Engine.run(engine);
   
    Matter.Bodies.circle(56,46,30);
    paper = new Paper(150,300,30);
    
    ground = new Ground(600,600,1200,15);
    fill("white")

   dustbinPosition=width/1.5-50;
   dustbinY=493;

   dustbinleftSprite=createSprite(dustbinPosition+35,dustbinY,20,200)
   dustbinleftSprite.shapeColor=color("purple")

   dustbinLeftBody=Bodies.rectangle(dustbinPosition+20,dustbinY,20,200,{isStatic:true})
   World.add(world,dustbinLeftBody)


   dustbinBase=createSprite(dustbinPosition+100,dustbinY+90,150,20)
   dustbinBase.shapeColor=color("purple")


   dustbinBottomBody=Bodies.rectangle(dustbinPosition+120,dustbinY+112-20,200,20,{isStatic:true})
   World.add(world,dustbinBottomBody)


   dustbinrightSprite=createSprite(dustbinPosition+170,dustbinY,20,200)
   dustbinrightSprite.shapeColor=color("purple")

   dustbinRightBody=Bodies.rectangle(dustbinPosition+200-20,dustbinY,20,100,{isStatic:true})
   World.add(world,dustbinRightBody)


   



}


function draw() {
  
  background("black");
  
  ground.display();
  
  paper.display();


  
  drawSprites();
 
}


function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:20,y:-60})
  }
}



