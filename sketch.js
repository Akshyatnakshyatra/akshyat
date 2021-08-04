
function setup() {
  createCanvas(400,400);
  var sprite=createSprite(200,200,20,20);
}



function draw() 
{
  background("yellow");

if (keyIsDown(RIGHT_ARROW))
{
  background("red");
}
if (keyIsDown(LEFT_ARROW))
{
  background("blue");
}
if (keyIsDown(UP_ARROW))
{
  background("green");
}
if (keyIsDown(DOWN_ARROW))
{
  background("pink");
}
drawSprites();
}




