scene("game", (level) => {

    loadSound("level1BackgroundMusic", "./src/game/assets/sounds/level1_music.wav");

// define gravity
setGravity(GRAVITY_AMOUNT)

    
switch (level) {
    case 1:
    
   

    add([
        sprite("backgroundDay"),
        fixed()
        
      ])
      add([
        sprite("clouds"),
        pos( vec2(-200, -110)),
        
      ])
      add([
        sprite("mountainsDay"),
        fixed()
        
      ])
    
    var level = displayLevelOne(100, -100 );
   
    const player = level.get("player")[0]
   
    initPlayer(110,800,player);
    
    //player.play(ANIM_IDLE) 

    //const player = level.get("player")[0]
    //
    

        break;

    default:
        break;
}

displayLives();





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
