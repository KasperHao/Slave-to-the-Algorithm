

let video;
let poseNet;
let poses = [];
var slider;
let inp1,inp2;
function setup() {
  createCanvas(1280,720)//(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);
  //change color for stroke
  inp1 = createColorPicker('#ed225d');
  inp1.position(1230, 870);
  //change color for background
  inp2 = createColorPicker(color('yellow'));
  inp2.position(1230,900);
  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, modelReady);
  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on('pose', function(results) {
    poses = results;
  });
  // Hide the video element, and just show the canvas
  video.hide();
  //text('Body',550,630,20,20)
  //fill(25,25,25)
}
 
function modelReady() {
  select('#status').html('Model Loaded');
  //console.log('model ready');
}

function draw() {
  image(video, 0, 0, width, height);
 // for the transparency depending on the slider    
  fill(inp2.color());
  noStroke();
  rect(0,0,1280, 720);
    
    fill(0);

  // We can call both functions to draw all keypoints and the skeletons
  drawKeypoints();
  drawSkeleton();
  
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

// A function to draw ellipses over the detected keypoints
function drawKeypoints()  {
  // Loop through all the poses detected
  for (let i = 0; i < poses.length; i++) {
    // For each pose detected, loop through all the keypoints
    let pose = poses[i].pose;
    for (let j = 0; j < pose.keypoints.length; j++) {
      // A keypoint is an object describing a body part (like rightArm or leftShoulder)
      let keypoint = pose.keypoints[j];
      // Only draw an ellipse is the pose probability is bigger than 0.2
      if (keypoint.score > 0.2) {
        fill(inp1.color());
        noStroke();
        star(keypoint.position.x, keypoint.position.y, 10, 40,5);
      }
    }
  }
}

// A function to draw the skeletons
function drawSkeleton() {
  // Loop through all the skeletons detected
  for (let i = 0; i < poses.length; i++) {
    let skeleton = poses[i].skeleton;
    // For every skeleton, loop through all body connections
    for (let j = 0; j < skeleton.length; j++) {
      let partA = skeleton[j][0];
      let partB = skeleton[j][1];
      stroke(inp1.color());
      strokeWeight(10);
      line(partA.position.x, partA.position.y, partB.position.x, partB.position.y);
      }
   }
  }

var button;

var touchSketch = function($){
      
      $.setup = function(){
      
        $.button = createButton("save");
        $.button.mousePressed(save);
        $.button.position(1230,840);
      }
      $.mousePressed = function(){
          if($.mouseX > 0 && $.mouseX < $.width && $.mouseY > 0 && $.mouseY < $.height){
            noloop();
             save("myImage.png");
          }
      }
   }
 var second_sketch = new p5(touchSketch, 'second-sketch-container');

