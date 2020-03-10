/** Name: Haig Armen
Course: INTD319- Feb 2020
Assignment: Fun with Loops
Blog: https://courses.haigarmen.com/intd319-2020/
Description:
create a sketch that generates a grid of circles with random circle colours and sizes.
make a print version that can be printed on the riso printer.
**/

function setup() {
    createCanvas(windowWidth, windowHeight);
    noLoop()
}

function draw() {
    background(255);
    // fill(200);
    // stroke(155);
    // now we're going to create a for loop
    let colNumber = 10;
    let rowNumber = 3;
    let horizontalSpace = width / colNumber;
    let verticalSpace = height / rowNumber;
    let x = 100;
    let y = 100;

    for (let j = 0; j < colNumber; j = j + 1) {

        for (let k = 0; k < rowNumber; k = k + 1) {

            //head
            stroke(0);
            strokeWeight(10);
            fill(100+k*random(10,200), 100+k*random(10,200), 0);
            ellipse(100+ (horizontalSpace * j), 100 + (verticalSpace * k), 150, 150);
            // eyes
            noStroke();
            fill(0);
            ellipse(70+ (horizontalSpace * j), 70 + (verticalSpace * k), 10, 10);
            ellipse(120+ (horizontalSpace * j), 70 + (verticalSpace * k), 10, 10);

            // mouth
            stroke(0);
            strokeWeight(10);
            noFill();
            angleMode(DEGREES);
            arc(100+ (horizontalSpace * j), 100 + (verticalSpace * k), 100, 90, 20, 160)
        }
    }
}

function keyPressed() {
    if (key == 's' || key == 'S') {

    }
}
