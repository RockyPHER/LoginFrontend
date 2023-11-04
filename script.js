const matrix = document.getElementsByClassName("Matrix")[0];

var width = matrix.width;
var height = matrix.height;
var context = matrix.getContext("2d")
context.font = "11px consolas";
context.fillStyle = "#000";

var duration = 200;

var fontSize = 11;
var gridSize = fontSize+1;


var numOfRows = height;
var numOfColumns = width;
var numElements = (numOfColumns*numOfRows)/gridSize;

for(i = 0; i < numElements; i++){
    context.fillText(getRandomChar(), getRandomNum(width, gridSize), getRandomNum(height, gridSize));
    console.log(i)
}

// for(i = 0; i < numElements; i++){
    //     // context.clearRect(0, 0, width, height);
    //     context.fillText(getRandomChar(), xRandomNum, yRandomNum, width);
    //     console.log(xRandomNum);
    // }
    
    function getRandomNum(int, gridSize) {
        var random = Math.random()*(int/gridSize);
        random = Math.floor(random)*gridSize;
        return random;
    }
    
    function getRandomChar(){
        
    const ascii = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    var randomChar = Math.random()*ascii.length;
    
    return ascii.charAt(randomChar);
}
