/** Name: Haig Armen
Course: INTD319- Jan 2020
Assignment: Plotting Temperature on Timeline
Blog: https://courses.haigarmen.com/intd319-2020/
Description:
Climate Data from https://climate.weather.gc.ca/climate_data/daily_data_e.html?StationID=51442
**/

// bringing data into P5js with .csv file
// load data into table variable

// declare the table variable
let myTable;
let spacing = 40;
//rect(20, 20, (width-40), (height-40));
let lastX = 0;
let lastY = 0;

function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  myTable = loadTable('vancouver-temperatures.csv', 'csv', 'header');
 }

function setup() {
    createCanvas(windowWidth, windowHeight);
    textSize(12);
}

function draw() {
    background(50);
    fill(200);
    stroke(155);
    // now we're going to create a for loop
    for (let i = 0;  i < myTable.getRowCount(); i++)  {
        // first we'll make a variable that holds the row data
        let myRow =myTable.getRow(i);
        // then we'll make a variable that holds the temperature
        let temp = myRow.getNum("temp");
        // and another that holds the date
        let date = myTable.getString(i, "date");
        // print(temp + "\n");
        // use the map function to find the right y coordinate to represent temperature
        let y = map(temp, 1, 10, 0, height/2);
        // wait a minute, this is showing the temperature upsidedown, highest is at the bottom
        // let y = map(temp, 1, 10, height/2, 0);

        // while we're at it, let's calculate the x value too
        let x = i * spacing;
        ellipse(x, y, 5, 5);

        //draw a line to connect the dots
        line(lastX, lastY, x, y);
        lastX = x;
        lastY = y;
    }

}
