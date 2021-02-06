
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint
function preload()
{
	
}

function setup() {
	createCanvas(1200, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  

	bobOb1= new Bob(480, 600, 30)
	bobOb2= new Bob(540, 600, 30)
	bobOb3= new Bob(600, 600, 30)
	bobOb4= new Bob(660, 600, 30)
	bobOb5= new Bob(720, 600, 30);
	
    ground1=new Roof(600, 450, 350, 30)
	rope1= new Chain(bobOb1.body, ground1.body,-120,0)
	rope2= new Chain(bobOb2.body, ground1.body,-60,0)
	rope3= new Chain(bobOb3.body, ground1.body,0,0)
	rope4= new Chain(bobOb4.body, ground1.body,60,0)
	rope5= new Chain(bobOb5.body, ground1.body,120,0)
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground1.display()
  bobOb1.display()
  bobOb2.display()
  bobOb3.display()
  bobOb4.display()
  bobOb5.display()
rope1.display()
rope2.display()
rope3.display()
rope4.display()
rope5.display()

drawSprites();
 
}

function keyPressed() {
	if (keyCode == UP_ARROW){
		Matter.Body.applyForce(bobOb1.body, bobOb1.body.position, {x: -30, y: - 30})
	}
}



