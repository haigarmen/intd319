/** Name: Haig Armen
Course: INTD319- Jan 2020
Assignment: Rayna's Piechart
Blog: https://courses.haigarmen.com/intd319-2020/
Description:
**/

var cnvs = null;
var data = new Map();
var pie = null;

function setup() {
	cnvs = createCanvas(windowWidth, windowHeight);
	pixelDensity(displayDensity());
	smooth();
  colorMode(HSB, 359, 99, 99);
	data.set('Alpha', random(1, 50));
	data.set('Bravo', random(1, 50));
	data.set('Charlie', random(1, 50));
	data.set('Delta', random(1, 50));
	data.set('Echo', random(1, 50));
	data.set('Foxtrot', random(1, 50));

	pie = new PieChart(width * 0.5,
			height * 0.5,
			min(width, height) * 0.333,
			"Example",
			data);
}

function draw() {
	background(0, 0, 0);
	pie.draw();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	pie.scale(width * 0.5, height * 0.5,
		min(width, height) * 0.333);
}
