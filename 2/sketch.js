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
    // change the stroke colour
    // random() function creates a random number
    // specifying one number specifies a maximum
    // specifying two numbers specifies random(minium, maxium)
    stroke(random(255));
    // let's draw a line with a fixed starting point and a random end point.
    line(0,0,random(300),random(300));
    // now let's try making the lines fill the screen

    // how about creating lines that start and end at random points
    // line(random(width), random(height), random(width), random(height));

    // noLoop();
}
