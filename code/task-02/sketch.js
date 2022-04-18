const sketchWidth = 400;
const sketchHeight = 400;
const circleSize = 60;


function preload(){
  // preload assets
}

function setup() {
  createCanvas(sketchWidth, sketchHeight);
  
}

function draw() {
  background (122, 99, 40);
  noStroke();
  
  const columns = sketchWidth / circleSize;
  const rows = sketchHeight / circleSize;
  
  for (let x = 1; x <= 19; x += 2) {
    for (let y = 1; y <= 19; y += 2) {
      circle(20 * x, 20 * y, circleSize);
      fill(random(105, 131, 199), 100);
    }
  }

}