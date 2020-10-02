let video;
let poseNet;
let poses = [];
var slider;

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);
   //createP('Transparency');
  slider = createSlider(0,255,0,1);
  slider.position(600,650);

  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, modelReady);
  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on('pose', function(results) {
    poses = results;
  });
  // Hide the video element, and just show the canvas
  video.hide();
}
 
function modelReady() {
  select('#status').html('Model Loaded');
  //console.log('model ready');
}

function draw() {
  image(video, 0, 0, width, height);
 // for the transparency depending on the slider    
  fill(255,255,255,slider.value());
  noStroke();
  rect(0,0,950, 720);
    
    fill(0);
    textSize(14);
    text('video', 52,707);
    text('image', 240,707);

  // We can call both functions to draw all keypoints and the skeletons
  drawKeypoints();
  drawSkeleton();

  
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
        fill(255, 0, 0);
        noStroke();
        ellipse(keypoint.position.x, keypoint.position.y, 10, 10);
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
      stroke(255, 0, 0);
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
        $.button.position(600,600);
      }
      
      //change the color if clicked
      $.mousePressed = function(){
          if($.mouseX > 0 && $.mouseX < $.width && $.mouseY > 0 && $.mouseY < $.height){
            noloop();
             save("myImage.png");
          }
      }
   }

    var second_sketch = new p5(touchSketch, 'second-sketch-container');

