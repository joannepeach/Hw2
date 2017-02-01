function setup() { 
  createCanvas(400, 400);
  background(255);
}

function draw() {
  
  background(255);
  
  fill(22,33,45);
  var SmileX = (100);
  var SmileY = (100);
  
  fill (255);
  stroke(0);
  ellipse(mouseX,mouseY, 120, 120);
  
  arc(mouseX, mouseY+20, 50, 40, 0, PI, OPEN);
  
  fill(22,33,45);
  var rightEyeX = mouseX + 25; 
  var rightEyeY = mouseY - 10;
  
  var leftEyeX = mouseX - 25;
  var leftEyeY = mouseY - 10;
  
  fill(255);
  stroke(0);
ellipse(rightEyeX,rightEyeY, 30, 30);
ellipse(leftEyeX,leftEyeY, 30, 30); 
 
 
}
