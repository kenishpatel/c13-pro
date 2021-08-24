var garden,rabbit,apple;
var gardenImg,rabbitImg,appleImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")



}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


apple = createSprite(105,195,3,3)
apple.scale =0.09

apple.addImage(appleImg)




}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
   


  drawSprites();
}