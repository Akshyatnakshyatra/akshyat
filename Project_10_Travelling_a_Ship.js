var ship, shipimg, sea, seaimg1, edges;


function preload(){
  shipimg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaimg1 = loadImage("sea.png");
}

function setup()
{
  createCanvas(600,600);
 
  // creating sea 
  sea=createSprite(10,10);
  sea.addImage("seaimage",seaimg1);

 
  // creating ship
  ship = createSprite(150,150,50,50);
  ship.addAnimation("sailing",shipimg);
  edges = createEdgeSprites();
  
  
  //adding scale and position to ship
  ship.scale = 0.3;
  
}


function draw()
{
  //set background color 
 background("white");
 
sea.velocityX=-3;
if (sea.x<0)
  {
    sea.x=sea.width/2;
  }
  drawSprites();
}