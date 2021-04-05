
var cat,catImg1,catImg2;
var mouse,mouseImg1,mouseImg2;
var garden,gardenImg
function preload() {
    //load the images here
    gardenImg=loadImage("images/garden.png");
    catImg1=loadAnimation("images/cat1.png");
    mouseImg1=loadAnimation("images/mouse1.png");
    catImg2=loadAnimation("images/cat2.png","images/cat3.png");
    mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    mouse=createSprite(75,380);
    mouse.addAnimation(mouseImg1,mouseImg2);
    mouse.scale=0.2;

    cat=createSprite(250,380);
    cat.addAnimation(catImg1,catImg2);
    cat.scale=0.2;

    garden=createSprite(200,200);
    garden.addImage(gardenImg);
}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode===RIGHT_ARROW){
        mouse.addAnimation("mouseTeasing",mouseImg2);
        mouse.changeAnimation("mouseTeasing");
        mouse.frameDelay=25;
    }
  
  if(keyCode === LEFT_ARROW){
        mouse.addAnimation("mouseTeasing",mouseImg2);
        mouse.changeAnimation("mouseTeasing");
        mouse.frameDelay=25;
    }

}
