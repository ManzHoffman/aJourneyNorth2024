scene("game", (level) => {

    loadSound("level1BackgroundMusic", "./src/game/assets/sounds/level1_music.wav");
     initPlayer(24,25);

switch (level) {
    case 1:
    

   /*
    add([
        sprite("backgroundDay"),
      
        
      ])
      add([
        sprite("clouds"),
        pos( vec2(-200, -110)),
        
      ])
      add([
        sprite("mountainsDay"),
      
        
      ])
  
      displayLevelOne(-100,200);
    */

        break;

    default:
        break;
}

displayLives();
/*
// jump when player presses "space" key
onKeyPress("space", () => {
    // .jump() is provided by the body() component
    player.jump()
})


// define gravity
setGravity(2400)

// add character to screen, from a list of components
const player = add([
    sprite("bean"),  // renders as a sprite
    pos(120, 80),    // position in world
    area(),          // has a collider
    body(),          // responds to physics and gravity
])

*/





})