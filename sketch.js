const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var g1, g2, g3, g4
var ball
var b1,b2
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  g1=new Ground(200,390,400,90)
  g2=new Ground(390,200,20,400)
  g3= new Ground(10,200,20,400)
  g4= new Ground(200,10,400,20)
  ball=Bodies.circle(200,200,30)
  World.add(world,ball)
  b1=createImg("push.png")
  b1.position(220,30)
  b1.size(50,50)
  b1.mouseClicked(vforce)
  b2=createImg("push.png")
  b2.position(20,30)
  b2.size(50,50)
  b2.mouseClicked(hforce)
}

function draw() 
{
  background(51);

  Engine.update(engine);
  g1.display()
  g2.display()
  g3.display()
  g4.display()
  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y, 30, 20)
}

function hforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}
function vforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.05})
}