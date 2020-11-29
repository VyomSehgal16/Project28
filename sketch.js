
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, treeImg, boy, boyImg, render;

function preload()
{
	treeImg = loadImage("tree.png");
	boyImg = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	tree = createSprite(625,350,20,100);
	tree.addImage(treeImg);
	tree.scale = 0.3;
	
	boy = createSprite(175,350,10,10);
	boy.addImage(boyImg);
	boy.scale = 0.1;

	mango1 = new Mango(625,300,5);
	mango2 = new Mango(610,300,5);
	mango3 = new Mango(625,285,5);
	mango4 = new Mango(610,285,5);
	mango5 = new Mango(625,310,5);

	stoneObj = new Stone(170,340,5);

	slingshot = new Slingshot(boy,stoneObj);

	Engine.run(engine);
  
}


function draw() {

	rectMode(CENTER);
	Engine.update(engine);
	background(0);
	tree.display();
	boy.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	stoneObj.display();
	slingshot.display();

	detectollision(stoneObj,mango1);
	detectollision(stoneObj,mango2);
	detectollision(stoneObj,mango3);
	detectollision(stoneObj,mango4);
	detectollision(stoneObj,mango5);
	drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stoneObj.body,{x:235,y:420});
		slingshot.attach(stoneObj.body);
	}
}
function detectollision(stoneObj,mango){
	mangoBodyPosition = mango.body.position;
	stoneBodyPosition = stoneObj.body.position;

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=mango.r+stoneObj.r){
		Matter.Body.setStatic(mango.body,false);
	}
}


