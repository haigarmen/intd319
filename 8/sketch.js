/** Name: Haig Armen
Course: INTD319- Feb 2020
Assignment: Mappa Tutorial 1
Blog: https://courses.haigarmen.com/intd319-2020/
Description:
using maps with P5 and Mappa
**/

// Create a variable to hold our map
let myMap;
// Create a variable to hold our canvas
let canvas;
// Create a new Mappa instance using Leaflet.
const mappa = new Mappa('Leaflet');
// Lets put all our map options in a single object
const options = {
  // lat: 49,
  // lng: 240,
  lat: 0,
  lng: 0,
  zoom: 4,
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

function setup(){
  // Create a canvas 640x640
  canvas = createCanvas(windowWidth,windowHeight);
  // Add a grey background
  // background(100);
  // Create a tile map with lat 0, lng 0, zoom 4
  // myMap = mappa.tileMap(0,0,4);

  myMap = mappa.tileMap(options);
  // Overlay the canvas over the tile map
  myMap.overlay(canvas);

  // Only redraw the point when the map changes and not every frame.
  myMap.onChange(drawPoint);
}

function draw(){

}

function drawPoint() {
    // Clear the previous canvas on every frame
    clear();
    // Every Frame, get the canvas position
    // for the latitude and longitude of Nigeria
    const nigeria = myMap.latLngToPixel(11.396396, 5.076543);
    // Using that position, draw an ellipse
    ellipse(nigeria.x, nigeria.y, 20, 20);
}
