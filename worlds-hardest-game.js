var wall1 = createSprite(190, 120, 250, 3);
var wall2 = createSprite(190, 260, 250, 3);
var wall3 = createSprite(67, 145, 3, 50);
var wall4 = createSprite(67, 235, 3, 50);
var wall5 = createSprite(313, 145, 3, 50);
var wall6 = createSprite(313, 235, 3, 50);
var wall7 = createSprite(41, 170, 50, 3);
var wall8 = createSprite(41, 210, 50, 3);
var wall9 = createSprite(337, 210, 50, 3);
var wall10 = createSprite(337, 170, 50, 3);
var wall11 = createSprite(18, 190, 3, 40);
var wall12 = createSprite(361, 190, 3, 40);

var ding = createSprite(40, 190, 13, 13);
ding.shapeColor = "green";

var dong1 = createSprite(100, 130, 10, 10);
dong1.shapeColor = "red";
var dong2 = createSprite(215, 130, 10, 10);
dong2.shapeColor = "red";
var dong3 = createSprite(165, 250, 10, 10);
dong3.shapeColor = "red";
var dong4 = createSprite(270, 250, 10, 10);
dong4.shapeColor = "red";

dong1.velocityY = 8;
dong2.velocityY = 8;
dong3.velocityY = -8;
dong4.velocityY = -8;

var count = 0;
playSound("sound://category_achievements/peaceful_win_3.mp3", true);



function draw() {
  background("white");
  text("Deaths : " + count, 200, 100);
  strokeWeight(0);
  fill("lightblue");
  rect(18, 170, 52, 40);
  rect(308, 170, 52, 40);
  
  dong1.bounceOff(wall1);
  dong1.bounceOff(wall2);
  dong2.bounceOff(wall1);
  dong2.bounceOff(wall2);
  dong3.bounceOff(wall1);
  dong3.bounceOff(wall2);
  dong4.bounceOff(wall1);
  dong4.bounceOff(wall2);
  
  if(keyDown("RIGHT")) {
  ding.x = ding.x+2
  }
  if(keyDown("LEFT")) {
  ding.x = ding.x+2
  }
  if (ding.isTouching(wall1) || ding.isTouching(wall2) || ding.isTouching(dong1) || ding.isTouching(dong2) 
  || ding.isTouching(dong3) || ding.isTouching(dong4))
  
  {ding.x = 40;
  ding.y = 190;
  count = count+1
  }
  
  
 drawSprites(); 
}