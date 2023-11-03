const matrix = document.getElementsByClassName("Matrix")[0];

var width = window.innerWidth;
var heigth = window.innerHeight;
var context = matrix.getContext("2d")
context.font = "consolas, monaco, monospace";

var randomChar = getRandomChar();

var randomNum = Math.random()*10;

var y = 15;
var x = 15;

setInterval(() => {

    for(i = 0; i < 15; i++)
    {
        context.fillText(randomChar, x, y);
        context.fillStyle = '#339633';
        y+=randomNum;
    }

}, 100);



function getRandomChar(){

    const ascii = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    var randomChar = Math.random()*ascii.length;

    return ascii.charAt(randomChar);
}
