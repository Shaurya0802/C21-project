function setup() {
  createCanvas(1100,650);

}

function draw(){
  background(0);

  console.log(frameCount);

  if(frameCount%100 === 0){
    ellipse.scale = ellipse.scale + 1;
  }
  ellipse.debug = true;
  fill("yellow");
  stroke("orange");
  strokeWeight(10);
  ellipseMode(CENTER);  
  ellipse(500,300,150,150);

  var angle = PI;
  PI = PI + 1;
  translate(width/2,height/2);
  rotate(angle);
  angleMode(CENTER);
 
  ellipse.debug = true;
  fill(169,169,169);
  stroke(100);
  strokeWeight();
  ellipseMode(CENTER);
  ellipse(370,350,10,10);

  ellipse.debug = true;
  fill("yellow");
  stroke(255);
  strokeWeight(2);
  ellipseMode(CENTER);
  ellipse(320,250,20,20);

  ellipse.debug = true;
  fill("blue");
  stroke("green");
  strokeWeight(5);
  ellipseMode(CENTER);
  ellipse(690,180,40,40);

  ellipse.debug = true;
  fill(161,61,45);
  stroke(161,61,45);
  strokeWeight(2);
  ellipseMode(CENTER);
  ellipse(560,500,20,20);

  ellipse.debug = true;
  fill(211,156,126);
  stroke(211,156,126);
  strokeWeight(10);
  ellipseMode(CENTER);
  ellipse(750,330,65,65);

  ellipse.debug = true;
  fill(195,161,113);
  stroke(195,161,113);
  strokeWeight(8);
  ellipseMode(CENTER);
  ellipse(200,490,55,55);

  ellipse.debug = true;
  fill(187,225,228);
  stroke(187,225,228);
  strokeWeight(6);
  ellipseMode(CENTER);
  ellipse(850,100,45,45);

  ellipse.debug = true;
  fill(33, 35, 84);
  stroke(33, 35, 84);
  strokeWeight(6);
  ellipseMode(CENTER);
  ellipse(920,420,42,42);
 
  drawSprites();
}