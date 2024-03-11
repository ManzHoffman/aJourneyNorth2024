function initPlayer(posx,posy,player) {

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
/*
const player = add([
	sprite("playerIdle"),
	pos(posx,posy),
    scale(1),
	anchor("center"),
    body(),
	area(),
 
    //scale(0.1),
])*/

const walk =(flipPlayer) => {

    player.use(sprite("playerWalk"))  
    player.play(ANIM_WALK)  
    player.flipX = flipPlayer 
}

const idle =(flipPlayer) => {

    player.use(sprite("playerIdle"))  
    player.play(ANIM_IDLE)  
    player.flipX = flipPlayer 
}

const jump =(flipPlayer) => {

    if (player.isGrounded()) {
        player.use(sprite("playerJump"))  
        player.play(ANIM_JUMP)  
        player.jump(JUMP_FORCE)
        player.flipX = flipPlayer 

     
	}
}

idle(true);


	// action() runs every frame
	player.onUpdate(() => {
        
        camPos(player.worldPos())
		// check fall death
		if (player.pos.y >= FALL_DEATH) {
			go("lose")
		}
	})

    onKeyDown(controls.forward, () => {
    player.move(SPEED, 0)

  

  
})
onKeyPress(controls.forward, () => {
 
    walk(true)
  

  
})



onKeyPress(controls.backward, () => {
    walk(false)
 
})


onKeyDown(controls.backward, () => {
    player.move(-SPEED, 0)
    
 
})




onKeyRelease(controls.backward, () => {
    idle(false)

})
onKeyRelease(controls.forward, () => {
    idle(true)

})



onKeyPress(controls.jump, () => {

jump(player.flipX);


})}
