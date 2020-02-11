/** Name: Haig Armen
Course: INTD319- Feb 2020
Assignment: Riso Loops
Blog: https://courses.haigarmen.com/intd319-2020/
Description:
create a sketch that generates a grid of circles with random circle colours and sizes.
make a print version that can be printed on the riso printer.
**/
let colour1;
let colour2;

let colNumber = 8;
let rowNumber = 4;
let horizontalSpace;
let verticalSpace;

function setup() {
    createCanvas(windowWidth, windowHeight, SVG);
    horizontalSpace = width / colNumber;
    verticalSpace = height / rowNumber;
    pixelDensity(1);
    textSize(12);
    colour1 = new Riso('mint');
    colour2 = new Riso('yellow');
    background(255);
    clearRiso();

    // black.fill(255);
    // black.ellipse(200, height / 2, 300, 300);
    drawLoops();
    drawMoreLoops();
    drawRiso(); //preview on screen
}

function draw() {
}

function drawLoops() {
    // 1.  create first loop that draws the circles horizontally
    for (let i = 0; i < colNumber; i = i + 1) {
        // 1.1 create a variable that calculates the horizontal space between circles
        let x = i * horizontalSpace + 60;
        // 2. create second loop that draws the circles vertically
        for (let j = 0; j < rowNumber; j = j + 1) {
            // 2.1 create a variable that calculates the vertical space between circles
            let y = j * verticalSpace+ 60;
                // 3. create third loop will draw the concentric circles
                for (let k = 0; k < 12; k = k + 1) {
                    colour1.noFill();
                    circleSize = k * random(14);;
                    colour1.strokeWeight(random(20));
                    colour1.stroke(random(150,255));
                    colour1.ellipse(x, y, circleSize, circleSize);
                }
        }

    }
}

function drawMoreLoops() {
    // 1.  create first loop that draws the circles horizontally
    for (let i = 0; i < colNumber; i = i + 1) {
        // 1.1 create a variable that calculates the horizontal space between circles
        let x = i * horizontalSpace + 60;
        // 2. create second loop that draws the circles vertically
        for (let j = 0; j < rowNumber; j = j + 1) {
            // 2.1 create a variable that calculates the vertical space between circles
            let y = j * verticalSpace+ 60;
                // 3. create third loop will draw the concentric circles
                for (let k = 0; k < 12; k = k + 1) {
                    colour2.noFill();
                    circleSize = k * random(13);;
                    colour2.strokeWeight(random(20));
                    colour2.stroke(random(150,250));
                    colour2.ellipse(x, y, circleSize, circleSize);
                }
        }

    }
}

function keyPressed() {
  if (key == 's' || key == 'S') {
       exportRiso(); //export colour layers as pngs for printing
  }
}
