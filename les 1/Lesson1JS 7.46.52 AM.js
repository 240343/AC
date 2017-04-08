var c= document.getElementById("myCanvas");
var ctx = c.getContext("2d");
//start point
ctx.moveTo(0,0)
//end point
ctx.lineTo(200,100);
//draw
ctx.stroke();

//color of rectangle
ctx.fillStyle= "rgb(0, 0,200";
//rectangle
ctx.fillRect(200,200,80,80);

//border
ctx.strokeRect(100,100,120,120)