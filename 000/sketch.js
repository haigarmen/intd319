/** Name: Haig Armen
Course: INTD319
Assignment: P5.js Basics
Blog: https://courses.haigarmen.com/intd319-2020
Description:
**/

function setup() {
  createCanvas(600, 600);
  // change the canvas size
  // lines in p5 that begin with two slashes are comments
}

function draw() {
  background(255);
	// change our background color

	// p5 has a number of functions to draw primitive shapes.
	//
	// here's point(), which draws a pixel on the display

	point(50,50);
	// point(51,50);
	// point(52,50);
	// point(53,50);
	// point(54,50);

	// the first number is the X value (distance from the left border)
	// the second number is the Y value (distance from the top border)
 	// line() draws a line on the display

	// line(0,0,99,99);
	line(random(600),random(600),random(600),random(600));
}
