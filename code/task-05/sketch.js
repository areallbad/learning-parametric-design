function preload(){
  // preload assets
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(225);
  strokeWeight (5);
  stroke('blue');
  fill('white');

  circle(200, 200, 125);
  
  noFill();
  circle(200, 200, 175);
  //point(200, 120);
  //point(200, 50);
  
  strokeWeight(20);
  stroke(225);
  line(200, 120, 200, 50);

  strokeWeight(5);
  stroke('blue');
  line(200, 120, 200, 50);

  strokeWeight(10);
  stroke('grey');
  arc(
    200, 200, 
    175, 175, 
    Math.PI / 180 * 270,
    Math.PI / 180 * 30
    );
  
    stroke ('black');
arc(
  200, 200,
  175, 175,
  Math.PI / 180 * 30,
  Math.PI / 180 * 150
);
strokeWeight(5);
stroke('blue');
point(270, 240);
line(200, 200, 270, 240);




}