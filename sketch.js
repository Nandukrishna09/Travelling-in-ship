var sea,ship,shipImage,seaImage

function preload(){
sea=loadImage("sea.png")
shipImage=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(900,600);
  sea=createSprite(50,160,20,50)
  ship=createSprite(130,200,30,30)
  ship.addAnimation("ship",shipImage)
  sea.addAnimation("sea",seaImage)
  if(sea.x <0){
    sea.x=sea.width/2;
  }
}

function draw() {
  background("lightblue");
  
 drawSprites();
}