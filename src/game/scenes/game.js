scene("game", (level) => {


// define gravity
setGravity(GRAVITY_AMOUNT)
P_HEALTH = MAX_HEALTH;
    
switch (level) {
    case 0:




      var level = displayLevelZero(100, -600 );
      



    break;
    case 1:
    

  

    
    var level = displayLevelOne(100, -600 );
   
    const player2 = level.get("player")[0]
    //const enemy = level.get("walrusWhite")[0]
 
   // const enemies =  level.get("walrusWhite");
    //const numberOfWalrusWhiteElements = enemies.length;


    initPlayer(110,800,player2);
/*
    for (let i = 0; i < numberOfWalrusWhiteElements ; i++) {
    
      initWhiteWalrus(level.get("walrusWhite")[i],player,W_WHITE_SHOT_FREQUENCY)

    }


      console.log("ENEMIES " + numberOfWalrusWhiteElements);
*/
  
    
    //player.play(ANIM_IDLE) 

    //const player = level.get("player")[0]
    
    

        break;

    default:
        break;
}

displayLives();
displayOuterBar();
displayBar(P_HEALTH,false);



})
/*
// jump when player presses "space" key
onKeyPress("space", () => {
    // .jump() is provided by the body() component
    player.jump()
})


// add character to screen, from a list of components
const player = add([
    sprite("bean"),  // renders as a sprite
    pos(120, 80),    // position in world
    area(),          // has a collider
    body(),          // responds to physics and gravity
])

*/
