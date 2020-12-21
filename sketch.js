const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var box1,box2,box3,box4,box5,box5,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16 

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(500,535,500,50)
    //level1
    block1 = new Box (300,275,30,40);
    block2 = new Box (330,275,30,40);
    block3 = new Box (360,275,30,40);
    block4 = new Box (390,275,30,40);
    block5 = new Box (420,275,30,40);
    block6 = new Box (450,275,30,40);
    block7 = new Box (480,275,30,40);
    
    //level2
    block8 = new Box (330,235,30,40);
    block9 = new Box (360,235,30,40);
    block10 = new Box (390,235,30,40);
    block11 = new Box (420,235,30,40);
    block12 = new Box (450,235,30,40);

    //level13
    block13 = new Box (360,195,30,40);
    block14 = new Box (390,195,30,40);
    block15 = new Box (420,195,30,40);

    //top
    block16 = new Box (390,155,30,40);
    
    

    
}

function draw(){
    Engine.update(engine);
    strokeWeight(4); 
    ground.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
}