var url = "https://spreadsheets.google.com/feeds/list/1_ymXPxKP6B94S9nGYjkqVmiM1Sk5NxZ5JcfwBea8Kcs/1/public/values?alt=json";
var peeps = [];
function setup() {
createCanvas(windowWidth, windowHeight);
  // Request the data from openweathermap
  loadJSON(url, gotSpreadsheet);
}

function draw() {
  background(0);
  var spacing = width/peeps.length;
  // for (var i = 0; i < peeps.length; i++) {
  for (var i = 0; i < peeps.length; i++) {
      noStroke();
    fill(255,0,0);
    size = peeps[i].age;
    rect((i * spacing), (height/2), 3, size);
    ellipseMode(CENTER);
    print(spacing);
    ellipse(i * spacing, height/2, size, 100);
    // ellipse((i * spacing),((height/2)+radius), radius, radius);
    textSize(20);
    fill(255);
    textAlign(LEFT, CENTER);
    text(peeps[i].name,(i * spacing),height/2);
    // text(peeps[i].age,(i * spacing),height/2+20);
  }
}

function gotSpreadsheet(people) {
  //Position 0 is the first item in the list
  //each one is 3 hours apart
  for (var i = 0; i < people.feed.entry.length; i++) {
    var person = {
                  "name": people.feed.entry[i].gsx$name.$t,
                  "age": people.feed.entry[i].gsx$age.$t,
                  "weight": people.feed.entry[i].gsx$weight.$t
              }
    peeps.push(person);
  }

}
