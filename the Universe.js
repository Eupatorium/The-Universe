var sun,Earth,mars,Venus,mercury,Jupiter,saturn,Uranus,neptune;

function setup() {

  var canvas = createCanvas(1200,800);

  sun = Bodies.circle(200,100,20);
  Earth = Bodies.circle(300,100,10);
  mars = Bodies.circle(400,100,15);
  Venus = Bodies.circle(500,100,5);
  mercury=Bodies.circle(600,100,10);

  Jupiter = Bodies.circle(700,100,50);
  saturn = Bodies.circle(800,100,40);
  Uranus = Bodies.circle(900,100,35);
  neptune = Bodies.circle(1000,100,30);
}

function draw() {

  background(0);

 sun.velocityX = 0;
 Venus.velocityX = 2;
 mercury.velocityX = 4;
 Earth.velocityX = 6;
 Jupiter.velocityX = -8;
 saturn.velocityX = 4;
 Uranus.velocityX = 7;
 neptune.velocityX =6;



  background(255,255,255);  

  if(isTouching (sun,Jupiter)){
    Jupiter.visible = false;
    sun.scale = scale + 0.5;
    }
    else{
    sun.scale = 0.5
    Jupiter.visible = 2;
    }
    
  drawSprites();
}
function isTouching (sun,Jupiter){
  if (sun.x - Jupiter.x < sun.width/2 + Jupiter.width/2
    && sun.x - Jupiter.x < sun.width/2 + Jupiter.width/2) 
  return true;
}
