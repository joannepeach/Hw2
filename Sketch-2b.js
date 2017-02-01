function setup() { 
  createCanvas(600, 600);
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
  
  fill(22,33,45);
  var rightEyeX = mouseX + 25; 
  var rightEyeY = mouseY - 10;
  
  var leftEyeX = mouseX - 25;
  var leftEyeY = mouseY - 10;
  
  fill(255);
  stroke(0);
ellipse(rightEyeX,rightEyeY, 30, 30);
ellipse(leftEyeX,leftEyeY, 30, 30); 
  
  var SmileValue1 = 50 - (mouseX * 0.2)
  var SmileValue2 = 0.15 * (mouseX - 350)
  
  if(mouseX<250) {
    arc(mouseX, mouseY+20, 50, SmileValue1, 0, PI, OPEN); 
  }
  if(mouseX>250 && mouseX<350) {
    arc(mouseX, mouseY+20, 50, SmileValue1, 0, PI, OPEN);
  }
  if(mouseX>350) {
    arc(mouseX, mouseY+20, 50, SmileValue2, PI, TWO_PI, OPEN);
  }
}
 


