var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;

var player, form,game;

function setup() {
  createCanvas(1000, 800);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}