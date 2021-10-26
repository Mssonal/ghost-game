var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;

var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
 
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup(){
  createCanvas(600,600);
  spookySound.loop();
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
 
  invisibleBlockGroup = new Group();
  
  
}

function draw(){
  background(0);
  
    
   
    
    if(tower.y > 400){
      tower.y = 300
    }
    
    
    drawSprites();
  }
  
  /*if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  }*/


function spawnDoors() {
  //write code here to spawn the doors in the tower
  
  
}

