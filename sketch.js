const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,slingshot,Rect,platform1,getBackground,backgroundImg;
var box1,box2,box3,box4,box5;
var box6,box7,box8,box9;
var box10,box11,box12,box13;
var bg = "sprites/bg1.png";
var score = 0;

function preload() {
    getBackgroundImg();
}


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400,390,1200,20);
  platform1 = new Ground(510,180,200,10);
  box1 = new Box(500,170,30,30);
  box2 = new Box(490,170,30,30);
  box3 = new Box(510,170,30,30);
  box4 = new Box(510,155,30,30);
  box5 = new Box(490,155,30,30);
  box6 = new Box(510,145,30,30);
  box7 = new Box(520,170,30,30);
  box8 = new Box(530,170,30,30);
  box9 = new Box(540,170,30,30);
  box10 = new Box(530,155,30,30);
  box11 = new Box(545,155,30,30);
  box12 = new Box(520,145,30,30);
  box13 = new Box(517,135,30,30);
  Rect = new Recta(70,200,40,40);
  Point = {x:70,y:200};
  slingshot = new SlingShot(Rect.body,Point);
}

function draw(){
  if(backgroundImg)
  background(backgroundImg);

        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    textSize(30);
    text("Press Space Key to play again",100,20);

  Engine.update(engine);
    box1.display();
    box2.display();
    box4.display();
    box5.display();
    box6.display();
    Rect.display();
    ground.display();
    slingshot.display();  
    ground.display(); 
    platform1.display();
    box3.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box1.score();
    box2.score();
    box4.score();
    box5.score();
    box6.score();
    box3.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    drawSprites();
}


function mouseDragged(){
  Matter.Body.setPosition(Rect.body,{x:mouseX,y:mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      Matter.Body.setPosition(Rect.body,{x:70,y:200});
      slingshot.attach(Rect.body);
  }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=19){
      bg = "sprites/bg2.jpg";
  }
  else{
      bg = "sprites/bg.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}