var button
var question 
var playing
var score = 0
function preload(){
  bg1=loadImage("code 1.jpg")
  bg2=loadImage("code 2.jpg")
  bg3=loadImage("code.jpg")
  bg4=loadImage("code3.jpg")
  bg5=loadImage("code4.jpg")
  bg6=loadImage("hh 1.jpg")
  bg7=loadImage("tt.jpg")
}

function setup() {
//background(bg4)
  createCanvas(displayWidth-100,displayHeight-100);
  question=new Question()
}

function draw() {

  background(bg4);
  textSize(20)
  stroke("yellow");
  text("Health Condition: "+ score, displayWidth-400,50);  
  question.display()
  playing.play()
//button.display()
  drawSprites();
}