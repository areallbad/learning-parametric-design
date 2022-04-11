function preload(){
  // preload assets
}

function setup() {
  createCanvas(401, 400);
}

function draw() {
  
  background('#E8B338');

  stroke(255);
  strokeWeight(1.5);
  
  fill('#FF4AAC');
  circle(200, 200, 300);
  
  fill('#E8434A');
  circle(200, 200, 275);
  
  fill('#FF974A');
  circle(200, 200, 235);
  
  fill('#E87143');
  circle(200, 200, 190);
  
  fill('#FF6C57');
  circle(200, 200, 130);
  
  stroke('#FF6C57');
  strokeWeight(2.0);

  stroke(255)
  fill('#7EACDA')

  arc(
    200, 200,
    300, 300,
    Math.PI / 180 * 45,
    Math.PI / 180 * 315,
    PIE
  );


}