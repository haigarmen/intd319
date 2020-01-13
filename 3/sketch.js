/** Name: Haig Armen
Course: INTD319
Assignment: Lines from Center
Blog: https://courses.haigarmen.com/intd319-2020
Description:
**/

// drawing lines from the center of the canvas
// why does the X and Y of second point need to be between 0 and width

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0); // this makes the background black
}
function draw() {
    // random shade of gray for line colour
    stroke(random(255));

    // A.
    // start lines in the middle of the screen (width/2, height/2)
    // first we'll try it without variables
    line(width/2, height/2, random(width), random(height));

    // B.
    // if we want to remember the random numbers used to draw the line
    // we'll need to create some variables
    // let lineX = random(width);
    // let lineY = random(height);
    // line(width/2, height/2, lineX, lineY);

    // C.
    // now that we've saved the random numbers as variables we can recall them
    // to draw other shapes too
    // noFill();
    // ellipseMode(CENTER);
    // ellipse(lineX, lineY, 10,10);


}
