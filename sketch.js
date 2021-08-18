var runner, runnerimg, path, pathimg, edges;
var invboundary1, invboundary2;


function preload(){
  runnerimg = loadAnimation("Runner-1.png","Runner-2.png");
  pathimg = loadImage("path.png");
}

function setup()
{
  createCanvas(400,400);
 
  // creating path
  path=createSprite(200,200);
  path.addImage("pathimage",pathimg);
  path.velocityY=4;
  path.scale=1;

  // creating invisible boundary 1 and 2
  invboundary1=createSprite(30,0,30,800);
  invboundary2=createSprite(380,0,30,800);
  invboundary1.visible=false;
  invboundary2.visible=false;


  // creating runner jackson
  runner = createSprite(160,300);
  runner.addAnimation("running",runnerimg);
  edges = createEdgeSprites();
    
  //adding scale  to the  runner
  
  runner.scale = 0.1;
  
}

function draw()
{
  //set background color 
 background("white");

runner.x=World.mouseX;
runner.collide(invboundary1);
runner.collide(invboundary2);

if (path.y > 400)
  {
    path.y=height/2;
  }
  drawSprites();
}
