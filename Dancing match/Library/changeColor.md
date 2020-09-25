var button;
var bgcolor;

function setup() { 
  createCanvas(windowWidth,windowHeight);
  r = random(255);
  g = random(255);
  b = random(255);
  button = createButton("change color");
  button.mousePressed(changeColor);
  button.position(windowWidth/2, windowHeight/2);
} 

function draw() { 
  background(r, g, b);
}

function changeColor(){
  r = random(255);
  g = random(255);
  b = random(255);
}
