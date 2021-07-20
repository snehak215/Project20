function preload(){
  bgImg=loadImage("iss.png")
  sleepImg=loadImage("sleep.png")
  brushImg=loadAnimation("brush.png")
  gymImg=loadAnimation("gym1.png","gym2.png")
  drinkImg=loadAnimation("drink1.png","drink2.png")
  eatImg=loadAnimation("eat1.png","eat2.png")
  moveImg=loadAnimation("move.png","move1.png")

}
function setup() {
  createCanvas(800,400);
  astronaut=createSprite(400,200);
  astronaut.addAnimation("sleeping",sleepImg);
  astronaut.scale=0.1;
  wall_L=createSprite(0,200,10,400); 
  wall_U=createSprite(400,5,800,10);
  wall_R=createSprite(795,200,10,400);
  wall_D=createSprite(400,395,800,10);
  wall_L.debug=true;
  wall_R.debug=true;
  wall_D.debug=true;
  wall_U.debug=true;
}

function draw() {
  background(bgImg);  
  if (keyDown(UP_ARROW)){
    astronaut.addAnimation("gym",gymImg);
    astronaut.changeAnimation("gym");
    astronaut.x=400;
    astronaut.y=200;
    astronaut.velocity=0;
  }
  if (keyDown(DOWN_ARROW)){
    astronaut.addAnimation("brush",brushImg);
    astronaut.changeAnimation("brush");
    astronaut.x=400;
    astronaut.y=200;
    astronaut.velocity=0;
  }
  if (keyDown(LEFT_ARROW)){
    astronaut.addAnimation("drink",drinkImg);
    astronaut.changeAnimation("drink");
    astronaut.x=400;
    astronaut.y=200;
    astronaut.velocity=0;
  }
  if (keyDown(RIGHT_ARROW)){
    astronaut.addAnimation("eat",eatImg);
    astronaut.changeAnimation("eat");
    astronaut.x=400;
    astronaut.y=200;
    astronaut.velocity=0;
  }
  if (keyDown("m")){
    astronaut.addAnimation("move",moveImg);
    astronaut.changeAnimation("move");
    astronaut.velocityX=3;
    astronaut.velocityY=3;
  }
  if (keyDown("s")){
    astronaut.addAnimation("sleep",sleepImg);
    astronaut.changeAnimation("sleep");
    astronaut.x=400;
    astronaut.y=200;
    astronaut.velocity=0;
  }
  if (keyDown("r")){
  }
  else {
    astronaut.bounceOff(wall_R);
    astronaut.bounceOff(wall_L);
    astronaut.bounceOff(wall_U);
    astronaut.bounceOff(wall_D);
  }
  drawSprites();
}