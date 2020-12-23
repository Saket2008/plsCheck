
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1, bob2, bob3, bob4, bob5;
var holder;
var rope1;

function preload()
{
 //	
}

function setup() {
	createCanvas(800, 500);

	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(320, 400, 20);
	bob2 = new Bob(360, 400, 20);
	bob3 = new Bob(400, 400, 20);
	bob4 = new Bob(440, 400, 20);
	bob5 = new Bob(480, 400, 20);

	holder = new Roof(400, 200, 200, 20);

	rope1 = new Rope(bob1.body, holder.body, -bob1.radius*2, 0);
	rope2 = new Rope(bob2.body, holder.body, -bob2.radius*2, 0);
	rope3 = new Rope(bob3.body, holder.body, -bob3.radius*2, 0);
	rope4 = new Rope(bob4.body, holder.body, -bob4.radius*2, 0);
	rope5 = new Rope(bob5.body, holder.body, -bob5.radius*2, 0);

	Engine.run(engine);
}


function draw() {
	background("skyblue");
	
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	holder.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
}