var canvas;
var music;
var surface1,surface2,surface3,surface4;
var gampu;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

surface1=createSprite(100,80,120,60);
surface1.shapeColour="black";
surface2=createSprite(200,80,120,60);
surface2.shapeColour="black";
surface3=createSprite(300,80,120,60);
surface3.shapeColour="black";
surface4=createSprite(400,80,120,60);
surface4.shapeColour="black";
    //create 4 different surfaces

gampu=createSprite(40,40,100,100);
gampu.velocityX=11;
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

bounceOff(gampu,surface1);

    //add condition to check if box touching surface and make it box
}
function bounceOff(object1,object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2) {
      object1.velocityX = object1.velocityX * (-1);
      object2.velocityX = object2.velocityX * (-1);
    }
    if (object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object2.y < object2.height/2 + object1.height/2) {
        object1.velocityY = object1.velocityY * (-1);
        object2.velocityY = object2.velocityY * (-1);
    } 
  }