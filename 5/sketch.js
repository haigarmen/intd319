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

let populationSum = 0;
let populationAverage = 0;
let areaSum = 0;
let areaAverage = 0;
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
    noLoop();
}

function draw() {
    noStroke();
    background(50);
    fill(200);
    for (let i = 0;  i < myTable.getRowCount(); i++)  {
        let myRow =myTable.getRow(i);
        // adding up the sum of the population
        populationSum += myRow.getNum("population");

        // adding up all the area
        areaSum += myRow.getNum("area");

        //Step 3: Divide that total by the number of rows
        populationAverage = populationSum/myTable.getRowCount();
        areaAverage = areaSum/myTable.getRowCount();
        // print(populationAverage);
        // print(areaAverage);
    }
    // now we're going to create a for loop
    // loops are useful because we can
    for (let i = 0;  i < myTable.getRowCount(); i++)  {
        // first we'll make a variable that holds the data for each city
        let myRow =myTable.getRow(i);

        // now we'll draw a rectangle for each city
        // we need a mathematical way to calculate the position of rectangle
        // because we need to change the position of the rectangle each time we loop (i)
        // rect(120*i, 50, 100, 100);

        let density = myRow.getNum("population")/myRow.getNum("area");
        let densityScale = round(map(density, 0, 26407, 255,0));
        // let's add a label
        fill(255);
        text(densityScale,120*i,560);
        text(myRow.getString("city"),120*i,520);

        // let's try circles instead of rectangles
        // now we need to change the size of the rectangle to reflect the city size
        // ellipse(120*i, 300, myRow.getNum("area"), myRow.getNum("area"));
        // ellipse(120*i+50, 300, myRow.getNum("area")/100, myRow.getNum("area")/100);
        // how about a different calculation for city area
        noStroke();
        fill(densityScale);
        ellipse(120*i+50, 440, sqrt(myRow.getNum("area")), sqrt(myRow.getNum("area")));
        // text(myRow.getString("city"),120*i,540);
        stroke(255,0,0);
        noFill()
        ellipse(120*i+50, 440, sqrt(areaAverage), sqrt(areaAverage));
        noStroke();

        // now about about population
        // rect(120*i, 460, sqrt(myRow.getNum("population")), sqrt(myRow.getNum("population")));
        // text(myRow.getString("city"),120*i,460);

        // how shall we combine population and area to tell a more interesting story?
    }

}
