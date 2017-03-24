function setup(){
	createCanvas(800, 3000);
	textSize(12);
	}

function draw(){
background(255);
noStroke();
colorMode(HSB, 50);
for (i = 0; i < 50; i++) {
  for (j = 0; j < 50; j++) {
    fill(i, j, 50);
    rect(i * 10, j * 10, 10, 10);
  }	
}
}
