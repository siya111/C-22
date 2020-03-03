const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ob1,ob2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    var ground_options = {
        isStatic: true
    }
    ground = Bodies.rectangle(200,385,400,20,ground_options);
    World.add(world,ground);
    var ob1_options = {
        restitution:2
    }
    ob1 = Bodies.circle(200,200,5,ob1_options);
    World.add(world,ob1);
    var ob2_options ={
        restitution:1
    }
    ob2 = Bodies.circle(200,300,5,ob2_options);
    World.add(world,ob2);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    fill(rgb(51,255,153));
    rect(ground.position.x, ground.position.y, 400,20);
    ellipseMode(RADIUS);
    fill("white");
    ellipse(ob1.position.x,ob1.position.y,5,5);
    ellipseMode(RADIUS);
    fill(rgb(255,102,255));
    ellipse(ob2.position.x,ob2.position.y,5,5);
}