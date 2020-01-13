/** Name: Haig Armen
Course: INTD319
Assignment: Loops
Blog: https://courses.haigarmen.com/intd319-2020
Description:
**/

// now we're going to create a for loop
// loops are useful for many reasons
// for example. we can draw multiple things with slight variations

function setup() {
    createCanvas(windowWidth, windowHeight);
}
function draw() {
    background(255); // this makes the background white
    // vertical lines created with one random line in a loop
    for (let i = 0;  i < 20; i++)  {
        strokeWeight(random(60));
        randX = random(width);
        line(randX, 0, randX, height);
    }

    // we can also choose to not loop the draw()loop
    // noLoop();

}
