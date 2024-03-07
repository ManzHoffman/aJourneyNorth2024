function initPlayer(posx,posy) {

    /*
  // add character to screen, from a list of components
const player = add([
    sprite("player"),  // renders as a sprite
    pos(posx, posy),    // position in world
    area(),          // has a collider
    body(),          // responds to physics and gravity
])
*/
// Loading a multi-frame sprite


// Add our player character
const player = add([
	sprite("player"),
	pos(width()/2,height()/2-150),
    scale(2),
	anchor("center"),
	area(),
	body(),
    //scale(0.1),
])

player.play("idle")


onKeyPress("d", () => {
    player.move(SPEED, 0);
    
})

onKeyPress("a", () => {
    alert("");
})

onKeyPress("s", () => {
    alert("");
})


onKeyPress("w", () => {
    alert("");
})  
}
