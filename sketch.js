var mrect,frect

function setup() {
  createCanvas(800,400);
  
mrect = createSprite(400,200,80,30);
mrect.shapeColor = "green";
frect = createSprite(200,200,50,80);
frect.shapeColor = "green";
}

function draw() {
  background("black");  
  
  mrect.x = World.mouseX;
  mrect.y = World.mouseY;
  if(isTouching(mrect,frect))
    { mrect.shapeColor = "red"; frect.shapeColor = "red"; }
     else{ 
       mrect.shapeColor = "green"; 
       frect.shapeColor = "green";
       }
       drawSprites();
}