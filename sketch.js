
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree;
var ground;
var boy, boyImg;
var mango1, mango2, mango3, mango4, mango5;
var stone;
var launcher;

function preload()
{
	boyImg = loadImage("sprites/Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	launcher = new Chain(stone.body, {x: 150, y: 550});

	tree = new Tree(600, 450, 400, 500);
	ground = new Ground(400, 700, 50);
	stone = new Stone(150, 550, 40, 60);

	mango1 = new Mango(700, 400, 50, 70);
	mango2 = new Mango(650, 250, 50, 70);
	mango3 = new Mango(650, 350, 50, 70);
	mango4 = new Mango(550, 300, 50, 70);
	mango5 = new Mango(500, 350, 50, 70);

	boy = createSprite(200, 625, 30, 70);
	boy.addImage(boyImg);
	boy.scale = 0.1;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();

  launcher.display();

  tree.display();
  ground.display();
  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  
 
}



