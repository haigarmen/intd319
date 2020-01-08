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
    background(255); // this makes the background black
}
function draw() {
    noStroke();
    fill(0);
    // vertical bars
    rect(40,0,10, height*.66);

    // colour blocks
    fill(255,0,0);
    rect(0,0,40, 200);
    // rect(,);
    // rect(,);


}
