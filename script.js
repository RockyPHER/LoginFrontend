const matrix = document.getElementsByClassName("Matrix")[0];

var width = window.innerWidth;
var heigth = window.innerHeight;
var context = matrix.getContext("2d")
context.font = "consolas, monaco, monospace";

var str = "Allthosemomentswillbelostliketearsintherain"
var rowArray = str.split("");

context.fillStyle = '#339633';
context.fillText(rowArray, 12, 12);