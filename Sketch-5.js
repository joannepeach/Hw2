var speed = 5;
var X = 0;
var Y = 200;
function setup() { 
  createCanvas(600, 600);
}

function draw() {
  background(255); 
  ellipse(X, Y, 90, 90);
if (X > width-40) {
speed = speed - 5;
}
  if (X < 40) {
speed = speed + 2;
  }
  X = X + speed;
  }
