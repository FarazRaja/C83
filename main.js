canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var LastPositionOfX, LastPositionOfY;
color = "red";
width = 10;
widthscreen = screen.width;
newwidth = screen.width-70;
newheight = screen.height-300;
if(widthscreen < 992){
    document.getElementById("myCanvas").width = newwidth;
    document.getElementById("myCanvas").height = newheight;
    document.body.style.overflow = "hidden";
}
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e){
    color = document.getElementById("textinput").value;
    width = document.getElementById("widthofline").value;

    LastPositionOfX = e.touches[0].clientX - canvas.offsetLeft;
    LastPositionOfY = e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e){
    CurrentPositionOfX = e.touches[0].clientX - canvas.offsetLeft;
    CurrentPositionOfY = e.touches[0].clientY - canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        console.log("Last position of x and y coordinates =");
        console.log("x= "+ LastPositionOfX+ "y= "+ LastPositionOfY);
        ctx.moveTo(LastPositionOfX, LastPositionOfY);
        console.log("Current position of x and y coordinates =");
        console.log("x= "+ CurrentPositionOfX+ "y= "+ CurrentPositionOfY);
        ctx.lineTo(CurrentPositionOfX, CurrentPositionOfY);
        ctx.stroke();
    LastPositionOfX = CurrentPositionOfX;
    LastPositionOfY = CurrentPositionOfY;
}
