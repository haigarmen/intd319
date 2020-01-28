/** Name: Haig Armen
Course: INTD319- Jan 2020
Assignment: Rayna's Piechart
Blog: https://courses.haigarmen.com/intd319-2020/
Description:
**/

let angles = [360* .32, 360 * .22, 360 *.27, 360*.21];
var pieColors = [];

function setup() {
  createCanvas(1350, 800);
  colorMode(HSL);
  pieColors = [color('#4A79D9'), color('#F2B05E'), color('#BF6430'), color('#F23E16'), color('#77B9F2')];
  pieLabels = ["protein","carbohydrates", "vegetables", "dairy"];
  noLoop(); // Run once and stop
}

function draw() {
  background(pieColors[4]);
  noStroke();
  pieChart(600, angles);
}

function pieChart(diameter, data) {
  let lastAngle = 0;
  for (let i = 0; i < data.length; i++) {
    let gray = map(i, 0, data.length, 0, 255);
    fill(pieColors[i]);
    arc(
      width /2,
      height /2,
      diameter,
      diameter,
      lastAngle,
      lastAngle + radians(angles[i]));
      fill(255);
      text(pieLabels[i],lastAngle + radians(angles[i]),lastAngle + radians(angles[i]));

    lastAngle += radians(angles[i]);
  }
}
