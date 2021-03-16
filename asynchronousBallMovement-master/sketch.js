var database;

var allPlayers;

var gameState = 0;

var form,player,game;
var playerCount;

var car1, car2;
var allCars; 
var bgImage;
var car1Image,car2Image; 



function setup(){
    //var s=50%(displayWidth);
    //console.log(s);

    createCanvas(displayWidth-200,displayHeight-200);
    database = firebase.database();

    game = new Game();
    game.getState();
    game.start();

    bgImage = loadImage("track.png");
    car1Image = loadImage("car1.png");
    car2Image = loadImage("car2.png"); 
}

function draw(){
    background("white");
    
if(playerCount ===2){
    game.update(1);
}
if(gameState===1){
    clear();
    
    game.play();
    
}

}

    

