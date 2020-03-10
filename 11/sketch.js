/** Name: Haig Armen
Course: INTD319
Assignment: Basic Interactivity
Blog: https://courses.haigarmen.com/intd319-2020
Description:
**/

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(204);
    textSize(20);
    // tracking mouse coordinates
    // text("X: " + mouseX, 50, height / 2);
    // text("Y: " + mouseY, 50, height / 2 + 210);

    // draw with mouse coordinates
    // ellipse(mouseX, mouseY, 10, 10);

    // text(pmouseX - mouseX, width*.7, height/2);
    // text(pmouseY - mouseY, width*.7, height/2 + 210);

    // draw a line with pmouse (previous mouse coordinates)
    // line(mouseX, mouseY, pmouseX, pmouseY);


    // simple buttons
    drawButton("hello",10,10);
    drawButton("goodbye",200,10);
    drawButton("maoz",300,10);
    drawButton("karsen",400,10);
    noStroke();
    // fill(255,0,0);
    // if (mouseX < width/2 && mouseY < height/2) {
    //     rect(0, 0, width/2, height/2); // top Left
    // } else if (mouseX > width/2 && mouseY < height/2) {
    //     rect(width/2, 0, width/2, height/2); // top Right
    // } else if (mouseX < width/2 && mouseY > height/2) {
    //     rect(0, height/2, width/2, height/2); // bottom left
    // } else {
    //     rect(width/2, height/2, width/2, height/2); // bottom left
    // }
}

function drawButton(label,x,y) {
    fill(255);
    rect(x,y,100,100);
    fill(0);
    textAlign(CENTER);
    text(label, x+100/2, y+100/2);
    if (mouseX > x && mouseX < x+100 & mouseY >y && mouseY <y+100) {
        fill(255,0,0);
        rect(x,y,100,100);
        fill(255);
        text(label, x+100/2, y+100/2);
    }
}
