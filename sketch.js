var sun,mercury,venus,earth,mars,jupiter,saturn,uranus,neptune;

var angle = 0;

function preload(){
  sunImg = loadImage("sprites/sun.png");
  mercuryImg = loadImage("sprites/Mercury.png");
  venusImg = loadImage("sprites/Venus.png");
  earthImg = loadImage("sprites/Earth.png");
  marsImg = loadImage("sprites/Mars.jpg");
  jupiterImg = loadImage("sprites/Jupiter.jpg");
  saturnImg = loadImage("sprites/Saturn.jpg");
  uranusImg = loadImage("sprites/Uranus.jpg");
  neptuneImg = loadImage("sprites/Neptune.jpg");
}

function setup() {
  createCanvas(1200,650);

  sun = createSprite(0,0,150,150);
  //sun.debug = true;
  sun.addImage(sunImg);
  sun.scale = 0.1;
  sun.setCollider("circle",0,0,1000);

  mercury = createSprite(100,100,20,20);
  //mercury.debug = true;
  mercury.addImage(mercuryImg);
  mercury.scale = 0.1;
  mercury.setCollider("circle",0,0,200);

  venus = createSprite(180,200,20,20);
  //venus.debug = true;
  venus.addImage(venusImg);
  venus.scale = 0.07;
  venus.setCollider("circle",0,0,420);

  earth = createSprite(-200,100,20,20);
  //earth.debug = true;
  earth.addImage(earthImg);
  earth.scale = 0.4;
  earth.setCollider("circle",0,0,100);

  mars = createSprite(-100,200,20,20);
  //mars.debug = true;
  mars.addImage(marsImg);
  mars.scale = 0.05;
  mars.setCollider("circle",0,0,520);

  jupiter = createSprite(300,-200,202,20);
  //jupiter.debug = true;
  jupiter.addImage(jupiterImg);
  jupiter.scale = 0.2;
  jupiter.setCollider("circle",0,0,400);

  saturn = createSprite(-250,400,20,20);
  //saturn.debug = true;
  saturn.addImage(saturnImg);
  saturn.scale = 0.2;
  saturn.setCollider("circle",0,0,160);

  uranus = createSprite(200,-50,20,20);
  //uranus.debug = true;
  uranus.addImage(uranusImg);
  uranus.scale = 0.1;
  uranus.setCollider("circle",0,0,370);

  neptune = createSprite(-200,-150,20,20);
  //neptune.debug = true;
  neptune.addImage(neptuneImg);
  neptune.scale = 0.1;
  neptune.setCollider("circle",0,0,400);
}

function draw(){
  background(0);
 
  if(frameCount%1 === 0){
    sun.scale = sun.scale + 0.0009;
  }

  if(sun.collide(mercury)){
    mercury.destroy();
  }

  if(sun.collide(venus)){
    venus.destroy();
  }

  if(sun.collide(earth)){
    earth.destroy();
  }

  if(sun.collide(mars)){
    mars.destroy();
  }

  if(sun.collide(jupiter)){
    jupiter.destroy();
  }

  if(sun.collide(saturn)){
    saturn.destroy();
  }

  if(sun.collide(uranus)){
    uranus.destroy();
  }

  if(sun.collide(neptune)){
    neptune.destroy();
  }

  angleMode(DEGREES);
  translate(width/2,height/2);
  rotate(angle);
  angle = angle + 1;

  drawSprites();
}