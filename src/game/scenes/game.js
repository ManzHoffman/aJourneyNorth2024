scene("game", (level) => {

    loadSound("level1BackgroundMusic", "./src/game/assets/sounds/level1_music.wav");


switch (level) {
    case 0:
        
        break;

    default:
        break;
}

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



})