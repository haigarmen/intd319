/** Name: Haig Armen
Course: INTD319
Assignment: P5.js Basics
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
    stroke(random(255));
    // start lines in the middle of the screen (width/2, height/2)
    line(random(width), random(height), random(width), random(height));

    // noLoop();
}
