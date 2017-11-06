
var pacman = {x: 0, y: 0};
var numCherry = 0;
var score = 0;
var world = [];


function generateNewWorld() {
  var numColumns = Math.round(Math.random()*20+10);
  var numRows = Math.round(Math.random()*20+10);

/*
world2 = $.getJSON('worlds.json', function(data) {
  console.log(data);

});
  */


world = [[1, 1, 1, 1, 2],
   [1, 1, 'b', 1, 1],
   [1, 1, 1, 1, 1],
   [1, 1, 'b', 1, 1],
   [1, 1, 'b', 1, 1],
   [1, 'g', 'b', 'b', 'b'],
   [1, 1, 'b', 1, 1],
   [1, 1, 1, 1, 1],
   [1, 'p', 'b', 1, 1],
   [1, 1, 'b', 1, 1],
   [1, 1, 1, 1, 2]];

   displayWorld(world)
 }


function displayWorld(world, dir) {
  var htmlCode = "";

  for(var i = 0; i < world.length; i++) {
    htmlCode += '<div class="row">'

    for(var j = 0; j < world[i].length; j++) {

      if(world[i][j] === 'p') {
          divClass = "pacman " + dir;
          pacman.x = i;
          pacman.y = j;
        }
      if(world[i][j] === 'g') { divClass = "ghost"}
      if(world[i][j] === 'b') { divClass = "brick"}
      if(world[i][j] === 0) { divClass = "empty"}
      if(world[i][j] === 1) { divClass = "dot"}
      if(world[i][j] === 2) { divClass = "powerpellet"}
      if(world[i][j] === 3) { divClass = "cherry"}
      htmlCode += '<div class="'+divClass+'"></div>'
    }
    htmlCode += '</div>'
  }
  $('#world').html(htmlCode);


}  // END generateNewWorld FUNCTION

function cherry() {

  var x = Math.round(Math.random()*(world.length-1));
  var y = Math.round(Math.random()*(world[0].length-1));

  if( ( world[x][y] === 1 || world[x][y] === 0 ) &&  numCherry < 1) {
    var originalValue = world[x][y]
    world[x][y] = 3;
    numCherry = 1
    displayWorld(world)

    setTimeout(function(){
      if(world[x][y] === 3) {
        world[x][y] = originalValue
      } else if( world[x][y] === 0 ) {
        world[x][y] = 0;
      }
      numCherry = 0;
      displayWorld(world)
    }, 1500);
  }



}





$(document).ready(function(){

 generateNewWorld();


 setInterval(cherry,8000)

  $(document).keydown(function(e){
      var dir = e.originalEvent.keyCode;




      if(dir === 37) {
        var dir = "L";
        if(world[pacman.x][(pacman.y)-1] !== 'b' && pacman.y !== 0) {           //LEFT
          if( world[pacman.x][(pacman.y-1)] === 1) {
            score = score + 10
          }
          if( world[pacman.x][(pacman.y-1)] === 3) {
            score = score + 100
            numCherry = 0;
          }
          if( world[pacman.x][(pacman.y-1)] === 'g') {
            score = 0
            alert('lost')
            numCherry = 0;
          }
          world[pacman.x][(pacman.y)] = 0;
          world[pacman.x][(pacman.y-1)] = 'p';
        }
      }

      if(dir === 38) {
        var dir = "U";
        if(world[(pacman.x)-1][pacman.y] !== 'b' && pacman.x !== 0) {    //UP
          if(world[(pacman.x)-1][pacman.y] === 1){
            score = score + 10
          }
          if(world[(pacman.x)-1][pacman.y] === 3){
            score = score + 100
            numCherry = 0;
          }
          if(world[(pacman.x)-1][pacman.y] === 'g'){
            score = 0
            alert('lost')
            numCherry = 0;
          }
          world[pacman.x][(pacman.y)] = 0;
          world[(pacman.x-1)][pacman.y] = 'p';
        }
      }
      else if(dir === 39) {
        var dir = "R";
        if(world[pacman.x][(pacman.y)+1] !== "b" && pacman.y !== world[1].length-1) {    //RIGHT
          if(world[pacman.x][(pacman.y)+1] === 1){
            score = score + 10
          }
          if(world[pacman.x][(pacman.y)+1] === 3){
            score = score + 100
            numCherry = 0;
          }
          if(world[pacman.x][(pacman.y)+1] === 'g'){
            score =
            alert('lost')
            numCherry = 0;
          }
          world[pacman.x][(pacman.y)] = 0;
          world[pacman.x][(pacman.y)+1] = 'p';
        }
      }
      else if(dir === 40) {
        var dir = "D";
        if(world[(pacman.x)+1][pacman.y] !== 'b' && pacman.x !== world.length-1) {    //DOWN
          if(world[(pacman.x)+1][pacman.y] === 1) {
              score = score + 10
          }
          if(world[(pacman.x)+1][pacman.y] === 3) {
              score = score + 100
              numCherry = 0;
          }
          if(world[(pacman.x)+1][pacman.y] === 'g') {
              score = 0
              alert('lost')
          }
          world[pacman.x][(pacman.y)] = 0;
          world[(pacman.x+1)][pacman.y] = 'p';
        }
      }


      displayWorld(world, dir);
      $('#score').html(score)

      var remaining = 0;

      for(var i = 0; i < world.length; i++) {
        if(world[i].indexOf(1) >= 0 ) {
          remaining = 1;
          break
        }
      }

      if(remaining === 0) {
        alert('Game Over');
      }




  }); //END KEYDOWN FUNCTION








//$('#world').css('width', ((worldColumns)*20)+37  +'px');

});
