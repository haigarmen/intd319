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
    canvas = createCanvas(windowWidth, windowHeight);

    // how many rows?
    console.log(data.getRowCount());
    // what are the columns?
    console.log(data.columns);

    background(50);

    // fetch values and min/max for yesterday
    let today = colValsMinMax(data, "3/16/20");
    console.log(today.min);
    console.log(today.max);

    // Pseudo code first
    // find the data for Canada by:
    // find column for country and go down the rows until you find Canada
    // save that into a data object called "canada"
    // put number of confirmed into an object called confirmed.push(myRow.getNum(j));
    // loop through table columns

    stroke(255, 128, 128);

    for (var i = 0; i < data.getRowCount(); i++) {
        let myRow = data.getRow(i);
        // x position is date; y position is number confirmed
        for (var j = 3; j < data.getColumnCount(); j++) {
            let confirmed = myRow.getNum(j);
            let xPos = map(j, 4, data.getColumnCount(), 0, width);
            let yPos = map(confirmed, today.min, today.max, height-20, 20);

            // point(xPos, yPos);
            // let's draw a line instead
            //draw a line to connect the dots
            // on the last loop don't draw the line
            if (j > 3 && j < data.getColumnCount()) {
                line(lastX, lastY, xPos, yPos);
            }
            lastX = xPos;
            lastY = yPos;
        }
    }
}
