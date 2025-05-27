function initPlayer(posx,posy) {



const player = add([
    sprite("playerLaying"),
    pos(posx, posy),
    scale(1),
    //anchor("center"),
    body(),
    area({ shape: new Rect(vec2(0), 100, 100) }), // custom collision box
    anchor("center"),


  ])

let walkNoise = play("reindeer_walking", { loop: true, volume:0.05, paused:true });

//let falling = play("fall_sound", { loop: false, volume:0.5, paused:true, speed:1.5 });
var firstProjectile = 0;

const walk =(flipPlayer) => {
    if (player.isGrounded()) {
    player.use(sprite("playerWalk"))  
    player.play(ANIM_WALK)  
    player.flipX = flipPlayer 

  

    }
}
const lay =(flipPlayer) => {

    player.use(sprite("playerLaying"))  
    player.play(ANIM_CHILL)  
    player.flipX = flipPlayer 
}
const idle =(flipPlayer) => {

    player.use(sprite("playerIdle"))  
    player.play(ANIM_IDLE)  
    player.flipX = flipPlayer 
}
const die =(flipPlayer) => {

    player.use(sprite("playerDie"))  
    player.play(ANIM_DIE)  
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


lay(true);

const fixedCamY = 80

	// action() runs every frame
	player.onUpdate(() => {
        
        camPos(vec2(player.pos.x, fixedCamY)) // fixedCamY = a low value like 400–500

		// check fall death
   
		if (player.pos.y >= FALL_DEATH) {
			go("lose")
		}
  /*
   
        else if(player.pos.y >= FALL_DEATH_SOUND && !player.isGrounded() && falling.paused == true)
        {
            falling.paused = false
        }*/

        if (player.isGrounded() && player.curAnim() == ANIM_WALK) {
            walkNoise.paused = false;
        }
        else 
        {
            walkNoise.paused = true;

        }


/*
        for (let key in cinematicObjPoints) {
            let cinematicArray = cinematicObjPoints[key];
            for (let i = 0; i < cinematicArray.length; i++) {
        
               // console.log("pos :" + cinematicArray[i].obj.pos)    

                if (player.pos.dist(cinematicArray[i].objTrigger.pos) < DEFAULT_CINEMATIC_TRIGGER_DISTANCE && !cinematicArray[i].played) {

                   
                    cinematicArray[i].played = true;
                    idle(true);

                }


                // Do something with obj and duration
               // console.log(`Object: ${obj}, Duration: ${duration}`);
            }
        }*/


    
    



	})

    player.onGround(() => {

        if (IS_CINEMATIC_MODE_ON) return;

        if (isKeyDown(controls.backward) && !isKeyDown(controls.forward))  
        {
            walk(false)

        }
        else if(isKeyDown(controls.forward) && !isKeyDown(controls.backward))
        {
            walk(true)
        }
        

    })
    player.onCollide("plant", (plant) => {
      
        play("eat", { loop: false, volume:0.5 });

        destroy(plant);
    })
    
	player.onCollide(snowball_enemy, (snEnemy) => {
        

        play("hit_by_snowball", { loop: false, volume:0.5 });

        playerHitAnim(player,0.1)

        P_HEALTH = P_HEALTH - 1
       
        //play("eat", { loop: false, volume:0.5 });
        player.hurt(1)
    
        displayBar(P_HEALTH,true)

        destroy(snEnemy);
    })
    player.onCollide("codeTrigger", (t) => {
        if (!t.activated) {
          t.activated = true // prevent repeat activation
      
          showCodePromptModal("Un mot… un code scellé.\nEntrez-le pour avancer.", () => {
            // ✅ Success!
            destroy(t)
            showMemoryModal("🔓 Le chemin s’ouvre devant vous.")
            // You could also play an animation, open a door, or go to the next level
          })
        }
      })
      

    player.on("death", () => {
		destroy(player)
		go("lose");
		
	
	})




// Function to make player blink
async function playerHitAnim(player, duration) {
// Function to make player blink
player.hidden = true; // Ensure player is visible after animation

wait(duration, () => {
    player.hidden = false; // Ensure player is visible after animation
  })

}



function shoot() {
    // Check if there is no existing projectile or the existing projectile is far enough
    if ((firstProjectile == 0 || !firstProjectile.exists()) || (player.pos.dist(firstProjectile.pos) > P_SHOT_FREQUENCY && firstProjectile.exists())) {
        firstProjectile = spawnPlayerProjectile(player.pos, player);
    }
}

onMousePress("left", async (pos) => {
    if (!IS_CINEMATIC_MODE_ON) {

    //shoot()
    }
   // const projectile = spawnPlayerProjectile(player.pos,player)   
    //spawnBullet(player.pos,player, enemy, true);
 
 
  });


onKeyPress(controls.forward, () => {

    if (IS_CINEMATIC_MODE_ON) return;

    if (!isKeyDown(controls.backward)) {
        
    walk(true)
    }
 
  

  
})



onKeyPress(controls.backward, () => {

    if (IS_CINEMATIC_MODE_ON) return;

    if (!isKeyDown(controls.forward)) {

        walk(false)
    }
   
 
 
})
onKeyDown(controls.forward, () => {

    if (IS_CINEMATIC_MODE_ON) return;

    if (!isKeyDown(controls.backward)) {  
    player.move(SPEED, 0)

    }
    else
    {
        idle(false)
    }

  
})

onKeyDown(controls.backward, () => {

    if (IS_CINEMATIC_MODE_ON) return;

    if (!isKeyDown(controls.forward)) {

    player.move(-SPEED, 0)
    
    }
    else
    {
        idle(true)
    }

})



onKeyRelease(controls.backward, () => {
    

if (IS_CINEMATIC_MODE_ON) return;

if (!isKeyDown(controls.forward)) {
     idle(false)
}
   
    
    

})
onKeyRelease(controls.forward, () => {
    
    if (IS_CINEMATIC_MODE_ON) return;

    if (!isKeyDown(controls.backward)) {
          idle(true)
    }
  
 

})



onKeyPress(controls.jump, () => {

    if (IS_CINEMATIC_MODE_ON) return;


        jump(player.flipX);

    
}




)

return player;

}





