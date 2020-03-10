/** Name: Haig Armen
Course: INTD319- Feb 2020
Assignment: Riso Basics
Blog: https://courses.haigarmen.com/intd319-2020/
Description:
using P5 to output to the riso printer**/

let black;
let yellow;

function setup() {
  createCanvas(600, 600);
  pixelDensity(1);
  yellow = new Riso('yellow');
  black = new Riso('black');
  background(255);
  clearRiso();

  black.fill(150);
  black.ellipse(200, height / 2, 300, 300);

  yellow.fill(255);
  yellow.ellipse(400, height / 2, 300, 300);

  yellow.cutout(black); // cut black out of yellow

  drawRiso();
}


function draw() {

}

function mouseClicked() {
  exportRiso();
}
