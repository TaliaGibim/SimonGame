
var nameColours =["red", "blue", "green", "yellow"]
var gamePattern = [];
var userColor =[];
var level;



$(document).on("keydown", function(){
  level = 0;

  $("h1").text("Let's Start");

  gamePattern.push(nameColours[generateRandomNumber()]);
  console.log(gamePattern);
  
  setTimeout(function () {
    playSound(gamePattern[level]);
    puAnimationButton(gamePattern[level]);
  }, 1000);
  

})

$(".btn").on("click", function(){

  userColor.push(this.id);
  console.log(userColor);
  
  if(userColor[userColor.length-1] !== gamePattern[userColor.length-1]){
    $("h1").text("GAME OVER");
    gameover();

    setTimeout(() => {
      $("h1").text("Press A Key to Start");
    }, 2000);
    
    userColor =[];
    gamePattern = [];
  }

  if(userColor.length-1 === level && userColor[userColor.length-1] === gamePattern[userColor.length-1]){
    level = level +1;
    $("h1").text("Level " + level);

    gamePattern.push(nameColours[generateRandomNumber()]);
    console.log(gamePattern);


    setTimeout(function () {
      playSound(gamePattern[level]);
      puAnimationButton(gamePattern[level]);
    }, 700); 

    userColor =[];
  } 

})


function gameover (){
    $("body").addClass("game-over");

    var audio = new Audio('./sounds/wrong.mp3');
    audio.play();

   setTimeout(function(){
    $("body").removeClass("game-over");
   },250);


}

function playSound(buttonPressed){
      var audio = new Audio('./sounds/'+ buttonPressed +'.mp3');
      audio.play();
}

function puAnimationButton(buttonPressed) {
  $("#"+buttonPressed).addClass("pressed");

   setTimeout(function(){
    $("#"+buttonPressed).removeClass("pressed");
   },250)
}

function generateRandomNumber() {
  return Math.floor(Math.random()*4)
}

