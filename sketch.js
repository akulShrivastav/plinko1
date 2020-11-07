const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;

var ground,world,engine;
var div = [];
var divHeight = 300;
var plinkos = [];
var particles = [];


function setup() {
  createCanvas(480,600);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240,590,480,20);
 //make divisions at spaces of 50 pixels
  for(var i = 1 ; i < 480; i = i+75){
    div.push(new Ground( i, 450, 10, 250));
  
  }


  
  
  for(var i = 40 ; i <=width; i = i+40){
   plinkos.push(new Plinko(i,75))
  }
  for(var i = 15 ; i <=width-10; i = i+40){
    plinkos.push(new Plinko(i,150))
   }
   for(var i=40; i <=width; i=i+40){
     plinkos.push(new Plinko(i,225))
   }
  for(var i =15; i <=width-10; i=i +44){
    plinkos.push(new Plinko(i,300))
  }
 
}

function draw() {
  background(0); 
  Engine.update(engine); 
  ground.display();
  
      
    if(frameCount%120 === 0){
      particles.push(new Particle(random(width/2-10,width/2+10),10,10))
      
 
    }
  //display all the index number of divisions
  for(var i=0;i<div.length;i++){
    div[i].display();
   
  }
  //disp
  for(var i = 0 ; i <plinkos.length; i = i+1){
    plinkos[i].display();
   }
//display all the particles in the array
     for(var i = 0; i<particles.length; i=i+1){
         particles[i].display();
}

}