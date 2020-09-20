## Activity in Class

### This week we apply speed to text in class. The funny thing is, besides only learning how to transfer sound to text, we should be more creative to think about how this function can be applied on other platform.
### Such as what can this function be useful to our design practice. Personally, I think speech to text can be using on website, like speaking to change the element on the website, which is really friendly to those disable user.

Code for Speech to text
let lang = navigator.language || 'en-US';
let speechRec = new p5.SpeechRec(lang, gotSpeech);
let continuous = true;
let interim = true;
var runningText;
function setup(){
  background(0);
  createCanvas(windowWidth, windowHeight);
  speechRec.onResult = showResult;
  speechRec.start(continuous, interim);
 
}
function draw(){
 //gotSpeech();
 //text(runningText, width/2, height/2);
}
function showResult(){
 if (speechRec.resultValue === true) {
   background(0);
   textSize(72);
   fill(255);
   text(speechRec.resultString, 50, height/2);
}
}

function gotSpeech(){
    if(speechRec.resultValue){
       
      createP(speechRec.resultString);
      runningText=speechRec.resultString;
    }
    fill (255);
 
  }
