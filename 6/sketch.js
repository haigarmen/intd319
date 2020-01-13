/** Name: Haig Armen
Course: INTD319
Assignment: City Sizes
Blog: https://courses.haigarmen.com/intd319-2020/
Description:
**/

// bringing data into P5js with .tsv file
// load data into table variable

// declare the table variable
let myTable;

// here's a new function called a preload()
// it does exactly what you think it does..

function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  myTable = loadTable('cities.tsv', 'tsv', 'header');
 }

function setup() {
    createCanvas(windowWidth, windowHeight);
    textSize(12);
}

function draw() {
    noStroke();
    background(50);
    fill(200);
    // now we're going to create a for loop
    // loops are useful because we can
    for (let i = 0;  i < myTable.getRowCount(); i++)  {
        // first we'll make a variable that holds the data for each city
        let myRow =myTable.getRow(i);
        let density = myRow.getNum("population")/myRow.getNum("area");
        // now we'll draw a rectangle for each city
        // we need a mathematical way to calculate the position of rectangle
        // because we need to change the position of the rectangle each time we loop (i)
        rect(120*i, 50, 100, 100);

        // now we need to change the size of the rectangle to reflect the city size
        rect(120*i, 200, myRow.getNum("area")/100, myRow.getNum("area")/100);
        text(myRow.getString("city"),120*i,180);

        // how about a different calculation for city area
        rect(120*i, 340, sqrt(myRow.getNum("area")), sqrt(myRow.getNum("area")));
        text(myRow.getString("city"),120*i,320);
        text(density,120*i,200);

        // now about about population
        // rect(120*i, 460, sqrt(myRow.getNum("population")), sqrt(myRow.getNum("population")));
        // text(myRow.getString("city"),120*i,460);

        // how shall we combine population and area to tell a more interesting story?


    }

}
