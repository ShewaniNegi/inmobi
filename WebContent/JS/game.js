//GLOBAL variables 

var catcherXaxis=0;


var imgBg;

var imgDrops;

var x = 0;

var y = 0;

var prex=0;

var prey=0;

var noOfDrops =1;

var fallingDrops = [];

var score=0;


var imgArray = new Array();


var canvas ;


function init() {
	

document.getElementById("canvasRegn").style.backgroundColor = '#33ECFF';

var testImage = $('<img/>').attr({

border:'1px solid red',

src:sessionStorage.getItem("img2"),

id: 'testImg',

style:"position:absolute; bottom:2px; width:60px; height:60px; background: #f00; z-index:1"

});

$('body').append(testImage);


$(document).mousemove(function(event) {


$("#testImg").css({left: event.pageX});

catcherXaxis=event.pageX;

// console.log("bucket X"+event.pageX);

// console.log("bucket Y"+event.pageY);

});





setup();


}




function setup() {

imgArray[0] = new Image();

imgArray[0].src = 'Image/star.jpg';



imgArray[1] = new Image();

imgArray[1].src = 'Image/star1.jpg';



canvas= document.getElementById('canvasRegn');

if (canvas.getContext) {

ctx = canvas.getContext('2d');

ctx.fillText("Hello World!",100,500);

// call draw at half a second


var interval=setInterval(draw,100);

window.setTimeout(function() {
    window.clearInterval(interval);
    
    window.location.href = 'Score.html';
}, 30 * 1000);

// setInterval(draw,4*Math.random()+16);

for (var i = 0; i < noOfDrops; i++) {

var fallingDr = new Object();

fallingDr["image"] = imgArray[i];

fallingDr["image"] = imgArray[i+1];





// fallingDr.image.src = 'http://lorempixel.com/10/10/sports/';


fallingDr["x"] = Math.random() * 600;

fallingDr["y"] = 0;// Math.random() * 5;

fallingDr["speed"] = Math.random()*100;

fallingDrops.push(fallingDr);

//console.log(fallingDr["x"]);

}


resizeCanvas();

}

}


function draw() {
	

	
		

for (var i=0; i< noOfDrops; i++)

{

// remove older image

ctx.clearRect(prex,prey,30,30);

prex=fallingDrops[i].x;

prey=fallingDrops[i].y;

// alert(fallingDrops[i].image);


if (HasObjectFallenInCatcher(prex,prey ))

{// also if the co-ordinates are same as catcher then increment score

IncrementScore();

ResetCoordingateforNextImage(i);

}

else 

{ 


ctx.drawImage (fallingDrops[i].image, fallingDrops[i].x, fallingDrops[i].y); // The

fallingDrops[i].y += fallingDrops[i].speed; // Set the falling speed


}


// reset if its missed

if (fallingDrops[i].y > canvas.height) { 
	DecrementScore();

ResetCoordingateforNextImage(i);



}



}

}


function HasObjectFallenInCatcher(prex, prey)

{

var catchersize=60;

if (prey>=canvas.height-catchersize)

{

// object is between catcher

if((catcherXaxis<=prex)&&(prex<=catcherXaxis+catchersize))

return true;

}

return false;

}


function ResetCoordingateforNextImage(i)

{    // Repeat the raindrop when it falls out of view

fallingDrops[i].y = 0;// -25 //Account for the image size

fallingDrops[i].x = Math.random() * canvas.width; 


}

function IncrementScore()

{

score=score+10;
sessionStorage.setItem("score",score);

}
function DecrementScore()

{

score=score-5;
sessionStorage.setItem("score",score);

}


function resizeCanvas() {

    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight;

}