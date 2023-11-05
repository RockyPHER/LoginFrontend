const matrix = document.getElementsByClassName("Matrix")[0];

var width = matrix.width;
var height = matrix.height;
var context = matrix.getContext("2d")
context.font = "11px consolas";
context.fillStyle = "#000";

var duration = 200;

const fontSize = 11;
const gridSize = fontSize + 1;


const numOfRows = Math.floor(height / gridSize);
const numOfColumns = Math.floor(width / gridSize);
var numElements = numOfColumns * numOfRows;

const elementsGrid = new Array(numOfRows);

for (i = 0; i < numOfRows; i++) {
    elementsGrid[i] = new Array(numOfColumns).fill(null);
}

for (i = 0; i < numElements; i++) {
    drawOnRandomPos();
}

function drawOnRandomPos(){

    var [X, Xpos] = getXorY(numOfColumns); 
    var [Y, Ypos] = getXorY(numOfRows);
    var char = getRandomChar();
    
    console.log(Y);
    
    if(elementsGrid[Y][X] != null) return;
    
    context.fillText(char, Xpos, Ypos);
    elementsGrid[Y][X] = char;
}

/
function getXorY(columnsOrRows) {
    var gridPosition = Math.floor(Math.random() * columnsOrRows);
    var screenPosition = gridPosition*gridSize;    

    return [gridPosition, screenPosition]
}

function getRandomChar() {

    const ascii = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    var randomChar = Math.random() * ascii.length;

    return ascii.charAt(randomChar);
}
