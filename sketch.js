
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree,ground;
var boy,boyImg;
var stone;
var mango1,mango2,mango3,mango4;
var launcher;


function preload()
{
	boyImg = loadImage("boy.png");
	bgImage = loadImage("scenery.jpg");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(400,200,400,400);
	ground = new Ground(400,600,800,20);
    stone = new Stone(185,450,50,50);
   
  	boy = createSprite(250,520,20,20);
	boy.addImage("Boy",boyImg);
	boy.scale = 0.12;

	mango1 = new Mango (600,300,50,50);
	mango2 = new Mango (660,320,50,50);
	mango3 = new Mango (540,340,50,50);
	mango4 = new Mango (720,310,50,50);
	
	launcher = new Launcher(stone.body,{x : 185 , y : 450});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bgImage);

  fill("black");
  textSize(25);
  text("Press Space to get a second chance",100,60);
  tree.display();
  ground.display();
 
  drawSprites();
 
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();

  stone.display();

  launcher.display();

  detectCollision(mango1,stone);
  detectCollision(mango2,stone);
  detectCollision(mango3,stone);
  detectCollision(mango4,stone);

}

function mouseReleased(){
	launcher.fly();
}

function mouseDragged(){
	Matter.Body.setPosition( stone.body,{x : mouseX , y : mouseY})
}

function detectCollision(mangoObj,stoneObj){
	mangoPos = mangoObj.body.position;
	stonePos = stoneObj.body.position;

	var distance = dist(stonePos.x,stonePos.y,mangoPos.x,mangoPos.y)
	
	if(distance <= mangoObj.r + stoneObj.r){
         Matter.Body.setStatic(mangoObj.body,false);
	}

}

function keyPressed(){
	if(keyCode === 32){
		 Matter.Body.setPosition(stone.body,{x : 185 , y : 450});
		launcher.attach(stone.body);
	}
}


