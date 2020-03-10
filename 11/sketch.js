function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    strokeWeight(8);
}

function draw() {
    background(204);
    textSize(220);
    // tracking mouse coordinates
    text("X: " + mouseX, 50, height / 2);
    text("Y: " + mouseY, 50, height / 2 + 210);

    // draw with mouse coordinates
    // ellipse(mouseX, mouseY, 10, 10);

    // text(pmouseX - mouseX, width*.7, height/2);
    // text(pmouseY - mouseY, width*.7, height/2 + 210);

    // draw a line with pmouse (previous mouse coordinates)
    // line(mouseX, mouseY, pmouseX, pmouseY);


    // simple buttons

    // noStroke();
    // if (mouseX < width/2) {
    //     rect(0, 0, width/2, height); // Left
    // } else {
    //     rect(width/2, 0, width/2, height); // Right
    // }
}

function drawButton() {

}
