# Week2

## Processing

### Activity 1
This week, we are mainly learning the basic function of processing, a program that we can use to write java code. In the morning class, we are all drawing our own portrait by using processing.

![6171596161885_ pic_hd](https://user-images.githubusercontent.com/68723243/89025083-8f741e00-d369-11ea-8f15-d6b80bc3f838.jpg)
![10391596162096_ pic_hd](https://user-images.githubusercontent.com/68723243/89025110-97cc5900-d369-11ea-840c-732a6b87a387.jpg)

For this two images, I used the same code to make it. In the morning session, Karen talked about the way that using mouseX and mouseY code to control the colour by moving the mouse. Therefore I kinda like to use the repeatation of lines to create an object.
Code: // Self portrait made 31/07/2020 by Kasper Hao

void setup(){
size (500,500);//thi si s the size of the Canvas
background(64,120,240);
}

void draw() {
noStroke();
fill (250,0,0);
ellipse (250,250,80,120);
stroke (mouseX,mouseY,mouseX+mouseY); 
line (mouseX,mouseY,250,250);
stroke (0,255,0);
fill(255,0,0);
//rect(20,20,40,60);
noFill();
noStroke();
ellipse(mouseX,mouseY,20,20);
}

void keyPressed(){
background (mouseY/2, (mouseY+mouseX)/4, 255-mouseX/2);
}

### Activity 2

The second thing that I really enjoy is the remix code for others work. Instead of remix the portrait from peers, I did a little bit of change for the rainbow circle which done by Karen.
I slightly deleted the stroke of the circle, which make it more smoothly and vivid.

![6201596190502_ pic_hd](https://user-images.githubusercontent.com/68723243/89025628-86d01780-d36a-11ea-9759-2ee539bf509a.jpg)

### Summary

Generally, I did learn a lot of skill this week. But personally thinking, I kinda lost during the session and I think it might be Karen talking a little bit too quick which I find hard to catch up.
And for some function, such as rotation, linedistance. We might need some time to do some practice as well~
Last but not least, I found that this course is unexpectable interesting for me, Love it~
