/** Name: Haig Armen
Course: INTD319
Assignment: Drawing Virus over time
Blog: https://courses.haigarmen.com/intd319-2020
Description:
**/

let data;
let lastX = 0;
let lastY = 0;

// preload table data
function preload() {
    data = loadTable(
        '19-covid-Confirmed.csv',
        'csv',
        'header');
}

// using a p5js table object, return an object having
// the values of the given column, plus the minimum value
// and maximum value from that column

function colValsMinMax(tab, colName) {
    let vals = data.getColumn(colName);
    let obj = {
        values: vals,
        min: min(vals),
        max: max(vals),
    }
    return obj;
}

function setup() {
    colorMode(HSB, 100);
    canvas = createCanvas(windowWidth, windowHeight);

    // how many rows?
    console.log(data.getRowCount());
    // what are the columns?
    console.log(data.columns);

    background(0);
    stroke(255);
}

function draw() {
    // fetch values and min/max for yesterday
    let today = colValsMinMax(data, "3/16/20");

    // Pseudo code first
    // find the data for Canada by:
    // find column for country and go down the rows until you find Canada
    // save that into a data object called "canada"
    // put number of confirmed into an object called confirmed.push(myRow.getNum(j));
    // loop through table columns

    for (var i = 0; i < data.getRowCount(); i++) {
        let myRow = data.getRow(i);
        let newHue = map(i,0,data.getRowCount(),100,0)

        // x position is date; y position is number confirmed
        for (var j = 3; j < data.getColumnCount(); j++) {
            let confirmed = myRow.getNum(j);
            let xPos = map(j, 0, data.getColumnCount(), 0, width);
            let yPos = map(confirmed, today.min, today.max, height - 20, 20);

            // point(xPos, yPos);
            // let's draw a line instead
            //draw a line to connect the dots
            // on the last loop don't draw the line
            if (j > 3 && j < data.getColumnCount()) {
                stroke(newHue, 80, 80, 50);
                line(lastX, lastY, xPos, yPos);

                // draw vertical ticks for days
                stroke(100,0,100);
                line(xPos, height-20, xPos, height-10);
            }
            lastX = xPos;
            lastY = yPos;


        }
    }
}
