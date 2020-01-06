/** Name: Haig Armen
Course: INTD319
Assignment: LoadingJSON
Blog: https://courses.haigarmen.com/intd319-2020
Description: This examples loads JSON (a common xml format) into P5

let's simplfy this example to now animate balls but just
**/

var data; // a reference to all the data from the file
var dates = [];	// an array of all the "date" values
var texts = []; // an array of all the "text" values
var temps = []; // an array of all the "high" values
var forecastArray = [];
function preload(){
	//loads .json data
		data = loadJSON('paris-weather.json');
}

function setup() {
  createCanvas(600, 400);
  var forecastArray = data.query.results.channel.item.forecast;
  for (var i=0; i<forecastArray.length; i++) {
	dates[i] = forecastArray[i].date;
	texts[i] = forecastArray[i].text;
	temps[i] = forecastArray[i].high;
	}
}

function draw() {
	background(255);
	textSize(20);
	fill(0);
  	// print(dates);
    for (var i=0; i<dates.length; i++) {
	text(dates[i], 10, i*30);
	text(texts[i], 200, i*30);
	text(temps[i], 400, i*30);
	}
}
