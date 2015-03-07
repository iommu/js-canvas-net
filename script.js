//Animate
// Request anim
(function () {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();
//Generate canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.height = document.body.clientHeight;
canvas.width = document.body.clientWidth;
document.body.appendChild(canvas);
//Variables
var circles = [];
var num = 100;
//Functions
var initialize = function() {
    circles = [];
    for ( var x=0; x<num; x++ ) {
        var sx = (Math.random() * (canvas.width+100)) - 50;
        var sy = (Math.random() * (canvas.height+100)) - 50;
        var circle = {
            sx: sx,
            sy: sy,
            x: sx,
            y: sy,
            r: (Math.random() * 3 + 6 ),
            opacity: 1,
            direction: Math.random() > .5? 1:-1
        };
        circles.push( circle );
    }
};

var animate  = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var old = {
      x: circles[(num - 1)].x,
      y: circles[(num - 1)].y
    }
    for ( var x=0; x<circles.length; x++ ) {
        circle = circles[x];
        ctx.strokeStyle = "rgba(50,146,118," + circle.opacity + ")";
        ctx.beginPath();
        ctx.moveTo(old.x,old.y);
        ctx.lineTo(circle.x,circle.y);
        ctx.stroke();
        ctx.beginPath();
        ctx.lineWidth = .8;
        ctx.arc( circle.x, circle.y, circle.r, 0, Math.PI *2, true );
        ctx.stroke();
        ctx.closePath();
        old.x = circle.x;
        old.y = circle.y;
    }
    // requestAnimationFrame( animate );
};
//Init
initialize();
animate();
