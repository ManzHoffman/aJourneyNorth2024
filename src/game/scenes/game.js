scene("game", (level) => {


// define gravity
setGravity(GRAVITY_AMOUNT)
P_HEALTH = MAX_HEALTH;
    
switch (level) {
    case 1:
    
  
    let level1 = play("level1BackgroundMusic", { loop: true, });


    add([
        sprite("backgroundDay"),
        fixed()
        
      ])
      add([
        sprite("clouds"),
        pos( vec2(-200, -110)),
        fixed(),
        
      ])
      add([
        sprite("mountainsDay"),
        fixed(),
        
      ])
      add([
        sprite("ice"),
        fixed(),
        
      ])
   

    
    var level = displayLevelOne(100, -100 );
   
    const player = level.get("player")[0]
    //const enemy = level.get("walrusWhite")[0]
 
    const enemies =  level.get("walrusWhite");
    const numberOfWalrusWhiteElements = enemies.length;


    initPlayer(110,800,player);

    for (let i = 0; i < numberOfWalrusWhiteElements ; i++) {
    
      initWhiteWalrus(level.get("walrusWhite")[i],player,W_WHITE_SHOT_FREQUENCY)

    }


      console.log("ENEMIES " + numberOfWalrusWhiteElements);

  
    
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
