/** Name: Haig Armen
Course: INTD319
Exercise: import csv file
Blog: https://courses.haigarmen.com/intd319-2020
Description:
**/

// Plotting temperature on line chart
let myTable;
var spacing = 40;

function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  myTable = loadTable('vancouver-temperatures.csv', 'csv', 'header');
   //the file can be remote
   //table = loadTable("http://p5js.org/reference/assets/mammals.csv",
   //                  "csv", "header");
 }


function setup() {
    createCanvas(windowWidth, windowHeight);
    //count the columns
     print(myTable.getRowCount() + ' total rows in table');
     print(myTable.getColumnCount() + ' total columns in table');

//     for (int i = 0; i < myTable.getRowCount(); i = i + 1) {
//      TableRow myRow = myTable.getRow(i);
//      int temp = myRow.getInt("temp");
//      String date = myTable.getString(i, "date");
//      print(temp + "\n");
// }
    background(255); // this makes the background black
}

function draw() {
    noStroke();
     fill(0);
     ellipseMode(CENTER);
    // use the map function to find the right y coordinate to represent temperature
     // float y = map(temp, 1, 10, 160, 20);
     // ellipse(i*spacing, y, 5, 5);

    noFill();

    // wait a minute, this is showing the temperature upsidedown, highest is at the bottom
     //float y = map(temp, 1, 10, 160, 20);

    // while we're at it, let's calculate the x value too
    //  float x = i*(20+spacing)+80;

    //draw a line to connect the dots

    stroke(180);
     fill(0, 150);


}
