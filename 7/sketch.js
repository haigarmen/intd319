/** Name: Haig Armen
Course: INTD319- Feb 2020
Assignment: Fun with Loops
Blog: https://courses.haigarmen.com/intd319-2020/
Description:
create a sketch that generates a grid of circles with random circle colours and sizes.
make a print version that can be printed on the riso printer.
**/

function setup() {
    createCanvas(windowWidth, windowHeight, SVG);
    textSize(12);
    // to create pdfs from p5 we will need to write the following lines
    pdf = createPDF();
    pdf.beginRecord();
    noLoop()
}

function draw() {
    background(255);
    // fill(200);
    // stroke(155);
    // now we're going to create a for loop
    let colNumber = 10;
    let rowNumber = 5;
    let horizontalSpace = width / colNumber;
    let verticalSpace = height / rowNumber;

    // 1.  create first loop that draws the circles horizontally
    for (let i = 0; i < colNumber; i = i + 1) {
        // 1.1 create a variable that calculates the horizontal space between circles
        let x = i * horizontalSpace;
        // 2. create second loop that draws the circles vertically
        for (let j = 0; j < rowNumber; j = j + 1) {
            // 2.1 create a variable that calculates the vertical space between circles
            let y = j * verticalSpace;
                // 3. create third loop will draw the concentric circles
                for (let k = 0; k < 8; k = k + 1) {
                    noFill();
                    circleSize = k * 20;
                    strokeWeight(random(20));
                    stroke(random(255));
                    ellipse(x, y, circleSize, circleSize);
                }
        }

    }

}

function keyPressed() {
  if (key == 's' || key == 'S') {
      pdf.save();
  }
}
