
var trex ,trexRunning;
function preload(){

  trexRunning = loadAnimation("trex1.png", "trex3.png", "trex4.png")
  

}

function setup(){

  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(50, 160, 20, 40 );
 trex.addAnimation("Running" , trexRunning);
 trex.scale = 0.8;
}

function draw(){
  background("lightblue");
if(keyDown("space")){

  trex.velocityY = -10;
}

trex.velocityY =  trex.velocityY +0.8;

edges = createEdgeSprites();
trex.collide(edges[3])
  drawSprites();
  

}