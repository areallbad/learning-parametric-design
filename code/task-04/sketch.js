const sketchWidth = 400;
const sketchHeight = 400;
let rectSize = 100;
function preload(){
  // preload assets
}

function setup() {
  createCanvas(sketchWidth, sketchHeight);
  frameRate(1);
}

function draw() {
  const rows = sketchHeight / rectSize;
  const colors = ['black', 'white'];

  background(230);
  stroke(0);
  strokeWeight(5);
  noFill();
  quad(100, 250, 200, 250, 200, 100, 100, 100);
  beginShape();
  curveVertex(200, 100);
  curveVertex(250, 175);
  curveVertex(200, 250);
  endShape();
  
  point(250, 175);

  fill(0);
  
  rect(150, 125, 100, 100, 5);
  
  noFill();
  stroke('white');

  rect(225, 150, 75, 50, 5);

  stroke(random(colors));

  rect(random(sketchWidth), random(sketchHeight), 10, 10, 1);
  
}