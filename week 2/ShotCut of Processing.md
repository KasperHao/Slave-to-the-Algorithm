Line (x1,y1,x2,y2);
Point (x,y);
background(R,G,B);
Stroke (colour);
Rect (topleft, topright, width, height);
Ellipse (centreX, centreY, width, height);
Fill (RGB);
noStroke ();
mouseX - -> the position of your mouse horizontally
mouseY - -> the position of your mouse vertically
textSize (point);
text(“the word that you wanna say”, x,y);


Rotate (angle);
Translate (x,y);

 if (mousePressed) {
  ellipse (mouseX, mouseY, 100, 100);
}
void keyPressed() {
  saveFrame("line-##.jpg");
