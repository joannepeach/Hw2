var x = 50; 
function setup() { 
  createCanvas(400, 400);
}

function draw() { 
	background(0); 
	if(x < width - 50){ 
		x = x+3 
		ellipse(x,50,50,50); 
	}
	else{
		x=40 
	}
  
} 
