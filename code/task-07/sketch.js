function preload() {
  // preload assets
}

const sketchWidth = 700;
const sketchHeight = 400;

function setup() {
  createCanvas(sketchWidth, sketchHeight);
}

function draw() {
  stroke(0);
  strokeWeight(5);
   noFill();
  
  beginShape();

  vertex(0, 0);
  vertex(50, 0);
  
  for (let y = 1; y < 5; y += 1) {
    const x = noise(10);
    const cX = noise(10);
    let direct = 200;
    if (y%2===0) {
      direct = 25;
    }

    curveVertex(100 + cX * direct, 400 / 5 * y - (400 / 5 * 0.5), 200 + x * direct * -1, 400 / 5 * y)
  }

  vertex(0, 400);
  vertex(0, 400);
  30
  endShape(CLOSE);

  
}