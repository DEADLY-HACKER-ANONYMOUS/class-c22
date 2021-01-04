const Engine = Matter.Engine
const World  = Matter.World
const Bodies = Matter.Bodies


var engine,world;
var ground;
var ball;

function setup() {
  var  canvas = createCanvas(400,400)
  engine = Engine.create();
  
  /* engine = Matter.Engine.create(); */
  world = engine.world;
  var object_options={
    isStatic : true
    
  }
  var ball_option={
    restitution: 1.0 
  }

  ball = Bodies.circle(50,50,50,ball_option)
    ground = Bodies.rectangle(50,200,50,50,object_options)
  World.add(world,ground)
  World.add(world,ball)
  
  console.log(ground)
  console.log("Area :",ground.area)
  console.log(ball)
 
}

function draw() {
  background(0,0,0);  
  Engine.update(engine)
  
  rect(ground.position.x,ground.position.y,50,50);
 circle(ball.position.x,ball.position.y,50)
  
}