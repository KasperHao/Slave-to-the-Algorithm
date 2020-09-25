const letters = ["C","D","E","O"];

function setup() {
createCanvas(700,700);
frameRate(5);

}


function draw() {
background(20);
for(let y =0; y<=height; y+=40){
  for(let x=0; x<=width; x+=40){
    push();
    translate(x,y);
    fill(random(255),random(255),random(255),random(255));
    text(random(letters),0,0);
    pop();
  }
}
noLoop();
save("myImage.png");
}
