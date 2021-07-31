
function setup() {
  createCanvas(400,400);
  box=createSprite (100,150,10,10);
}
var box;
function draw() 
{
  background("black");

if (keyIsDown(RIGHT_ARROW))
{
  box.position.x=box.position.x+20;
}
if (keyIsDown(LEFT_ARROW))
{
  box.position.x=box.position.x-20;
}
if (keyIsDown(UP_ARROW))
{
  box.position.y=box.position.y-20;
}
if (keyIsDown(DOWN_ARROW))
{
  box.position.y=box.position.y+20;
}
drawSprites();
}






