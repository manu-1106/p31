const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
function setup() {
 
  createCanvas(480,500);
  engine = Engine.create();
  world = engine.world;
 ground=new Ground(240,500 ,480,20);
}
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=100;
function draw() {
  Engine.update(engine);
for(var k=0;k<=width;k=k+80){
divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));

}
if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10),10,10));
}
for(var j=40;j<=width;j=j+50){
  plinkos.push(new Plinko(j,50))
}
for(var j=40;j<=width;j=j+50){
  plinkos.push(new Plinko(j,100))
}
for(var j=40;j<=width;j=j+50){
  plinkos.push(new Plinko(j,150))
}
for(var j=40;j<=width;j=j+50){
  plinkos.push(new Plinko(j,200))
}

  background(0,0,0); 
  ground.display();
  for(var j=0;j<particles.length;j++){
    particles[j].display();
    }
    for(var k=0;k<divisions.length;k++){
      divisions[k].display();
    }
    for(var j=0;j<plinkos.length;j++){
      plinkos[j].display();
      }
  drawSprites();
}