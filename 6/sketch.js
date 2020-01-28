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

let temps = [];
let tempMax = 0;
let tempMin = 0;


function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  myTable = loadTable('vancouver-temperatures.csv', 'csv', 'header');
 }

function setup() {
    createCanvas(windowWidth, windowHeight);
    textSize(12);

    // before we can calculate the min and max temperatures
    // we need to make an array of all temperatures

    // for (let i = 0;  i < myTable.getRowCount(); i++)  {
    //     let myRow =myTable.getRow(i);
    //     temps.push(myRow.getNum('temp'));
    // }
    // tempMax = max(temps);
    // tempMin = min(temps);
    // print("tempMax is: " + tempMax);
    // print("tempMin is: " + tempMin);
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
        let y = map(temp, -7, 10, 20, height*.8);
        // wait a minute, this is showing the temperature upsidedown, highest is at the bottom
        // let y = map(temp, -8, 10, 20, height*.8);

        // also a pain to calculate the min and max manually everytime.
        // let's use the handy min() and max() functions to do it for us.
        // let y = map(temp, tempMin, tempMax, 20, height*.8);

        // while we're at it, let's calculate the x value too
        let x = i * spacing;
        ellipse(x, y, 5, 5);

        //draw a line to connect the dots
        line(lastX, lastY, x, y);
        lastX = x;
        lastY = y;
    }

}
