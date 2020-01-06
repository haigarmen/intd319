let myMap;
let mappa = new Mappa('Leaflet');
let canvas;
let data;

textTitle = "Where Are The Happy People in The US?";

var options = {
	lat: 40.206254,
	lng: -100.845827,
	zoom: 3,
	style: "https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
}

function preload() {
	data = loadTable('How-is-the-US-Feeling.csv', 'csv', 'header');
}

function setup() {
  canvas = createCanvas(800, 600);

  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);

  console.log(data.getRowCount());
  console.log(data.columns);
}

function draw() {
  push();
  textSize(28);
	fill(0, 102, 153);
	text(textTitle, 50, 10, 350, 80);
  pop();

  push();
  myMap.onChange(drawPosition);
  pop();
}

function drawPosition() {
	clear();

  for (var i = 0; i < data.getRowCount(); i++) {
    var latitude = Number(data.getString(i, 'Latitude'));
    var longitude = Number(data.getString(i, 'Longitude'));

    if (myMap.map.getBounds().contains({lat: latitude, lng: longitude})) {

      var pos = myMap.latLngToPixel(latitude, longitude);

      switch(data.getString(i, 'Emotion')) {
        case 'Happy':
          noStroke();
     			fill(244, 170, 78);
      		ellipse(pos.x, pos.y, (frameCount%70)/10, (frameCount%70)/10);
      		fill(244, 170, 78, 1);
      		ellipse(pos.x, pos.y, (frameCount%50), (frameCount%50));
          break;
        case 'Sad':
          noStroke();
     			fill(45, 87, 173);
      		ellipse(pos.x, pos.y, (frameCount%70)/10, (frameCount%70)/10);
      		fill(45, 87, 173, 1);
      		ellipse(pos.x, pos.y, (frameCount%50), (frameCount%50));
          break;
        case 'Anxious':
          noStroke();
          fill(116, 128, 117);
          ellipse(pos.x, pos.y, (frameCount%70)/10, (frameCount%70)/10);
      		fill(116, 128, 117, 1);
      		ellipse(pos.x, pos.y, (frameCount%50), (frameCount%50));
          break;
        case 'Angry':
          noStroke();
          fill(122, 14, 14);
          ellipse(pos.x, pos.y, (frameCount%70)/10, (frameCount%70)/10);
      		fill(122, 14, 14, 1);
      		ellipse(pos.x, pos.y, (frameCount%50), (frameCount%50));
          break;
        case 'Peaceful':
          noStroke();
          fill(242, 255, 250);
          ellipse(pos.x, pos.y, (frameCount%70)/10, (frameCount%70)/10);
      		fill(242, 255, 250, 1);
      		ellipse(pos.x, pos.y, (frameCount%50), (frameCount%50));
          break;
        case 'Powerful':
          noStroke();
          fill(113, 38, 147);
          ellipse(pos.x, pos.y, (frameCount%70)/10, (frameCount%70)/10);
      		fill(113, 38, 147, 1);
      		ellipse(pos.x, pos.y, (frameCount%50), (frameCount%50));
          break;
      }
    }
  }
}
