var angle = 0.0;
var x = 0;
var speed = 5;

var a = 0;

function setup() {
    createCanvas(800, 800);
    background(0);
}

function draw() {
    
    redValue = random(255);
    greenValue = random(255);
    blueValue = random(255);
    stroke(redValue, greenValue, blueValue);
    
    translate(width/2 + a, height/2 + a);
    
    rotate(angle);
    angle += 0.1;
    
    
if (mouseIsPressed == false) {

beginShape();
vertex(16.5, 10);
vertex(19, 15);
vertex(24, 15.5);
vertex(20.5, 19);
vertex(22, 24);
vertex(16.5, 21.5);
vertex(12, 24);
vertex(13.5, 19);
vertex(10, 15.5);
vertex(15, 15);
endShape(CLOSE);
    
    } else {
       // background(255);
        fill(0);
        push();
        translate(mouseX, mouseY);

beginShape();
vertex(16.5, 10);
vertex(19, 15);
vertex(24, 15.5);
vertex(20.5, 19);
vertex(22, 24);
vertex(16.5, 21.5);
vertex(12, 24);
vertex(13.5, 19);
vertex(10, 15.5);
vertex(15, 15);
endShape(CLOSE);
        
        pop();
    }
    
   a = a+random(-8, 8); 
}

