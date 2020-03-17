/** Name: Haig Armen
Course: INTD319
Assignment: P5.js Basics
Blog: https://courses.haigarmen.com/intd319-2020
Description: Basic drawing shapes and coordinates. Refer to site for reference:
https://p5js.org/reference/
**/


let data = {}; // Global object to hold results from the loadJSON call
let bubbles = []; // Global array to hold all bubble objects

// Put any asynchronous data loading in preload to complete before "setup" is run
function preload() {
  data = loadJSON('bubbles.json');
}

// Convert saved Bubble data into Bubble Objects
function loadData() {
  let bubbleData = data['bubbles'];
  for (let i = 0; i < bubbleData.length; i++) {
    // Get each object in the array
    let bubble = bubbleData[i];
    // Get a position object
    let position = bubble['position'];
    // Get x,y from position
    let x = position['x'];
    let y = position['y'];

    // Get diameter and label
    let diameter = bubble['diameter'];
    let label = bubble['label'];

    // Put object in array
    bubbles.push(new Bubble(x, y, diameter, label));
  }
}

// Create a new Bubble each time the mouse is clicked.
function mousePressed() {
  // Add diameter and label to bubble
  let diameter = random(40, 80);
  let label = 'New Label';

  // Append the new JSON bubble object to the array
  bubbles.push(new Bubble(mouseX, mouseY, diameter, label));

  // Prune Bubble Count if there are too many
  if (bubbles.length > 10) {
    bubbles.shift(); // remove first item from array
  }
}

function setup() {
    createCanvas(windowWidth, windowHeight);
  loadData();
}

function draw() {
  background(255);

  // Display all bubbles
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].rollover(mouseX, mouseY);
  }

  // Label directions at bottom
  textAlign(LEFT);
  fill(0);
  text('Click to add bubbles.', 10, height - 10);
}
