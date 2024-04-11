// IMPORTING GAME ASSETS




// SOUNDS
const SOUNDS = {
	menuBackground: "./src/game/assets/sounds/background_menu.wav",
	popMenu: "./src/game/assets/sounds/pop_menu.wav",
	firstIntro: "./src/game/assets/sounds/intro_first.wav",
	reindeer_walking: "./src/game/assets/sounds/reindeer_walking_short.mp3",
	windAmb: "./src/game/assets/sounds/level1_music.wav",
	eat: "./src/game/assets/sounds/eat.wav",
	dropping_snowball: "./src/game/assets/sounds/dropping_snowball.wav",
	hit_by_snowball: "./src/game/assets/sounds/hit_by_snowball.wav",
	fall_sound: "./src/game/assets/sounds/falling.wav"
}

// LOAD SOUNDS
loadGameElements(SOUNDS,"sound")
let soundKeys = Object.keys(SOUNDS);

let windAmbiance = play(soundKeys[4], { loop: true, paused: true});



// FONTS
const FONTS = {
	arctic: "./src/game/assets/fonts/snowy.ttf",
	travel: "./src/game/assets/fonts/travel.ttf",
	marykate: "./src/game/assets/fonts/marykate.ttf"

}
let fontKeys = Object.keys(FONTS);

let marykateFont = fontKeys[2];


// LOAD FONTS
loadGameElements(FONTS,"font")

// SPRITES

const snowball_enemy = "snowball_enemy";
const basic_weapon_player = "basic_weapon_player"
const leftOuter = "leftOuter"
const rightOuter = "rightOuter"
const centerOuter = "centerOuter"
const leftInner = "leftInner"
const rightInner = "rightInner"
const centerInner = "centerInner"
const seagullFly = "seagullFly"
const sea = "sea"
const sky = "sky"
const icelongLeft = "icelongLeft"
const icelongMiddle = "icelongMiddle"
const icelongRight = "icelongRight"
const friendIdle = "friendIdle"
const iceBlock = "iceBlock"
const iceBlock2 = "iceBlock2"
const sign = "sign"
const platformHole = "platform_hole"
const convBox = "convBox"

loadSprite(sea, "./src/game/assets/elements/landscape/arctic/sea_colour_strip.png")
loadSprite(sky, "./src/game/assets/elements/landscape/arctic/sky_colour_strip.png")

loadSprite(iceBlock, "./src/game/assets/elements/landscape/arctic/block1.png");
loadSprite(iceBlock2, "./src/game/assets/elements/landscape/arctic/block2.png");
loadSprite(icelongLeft, "./src/game/assets/elements/landscape/arctic/platform_edge_left_jagged.png");
loadSprite(icelongMiddle, "./src/game/assets/elements/landscape/arctic/platform_short_repeating.png");
loadSprite(icelongRight, "./src/game/assets/elements/landscape/arctic/platform_edge_right_jagged.png");
loadSprite(platformHole, "./src/game/assets/elements/landscape/arctic/platform_hole.png");

loadSprite(convBox, "./src/game/assets/elements/conv/rect-tag-above.png");

loadSprite(sign, "./src/game/assets/elements/obj/sign.png");

const SPRITES = {
}



// PLAYER

loadSprite("playerIdle","./src/game/assets/elements/player/basicReindeer/reindeer_idle.png", {
	// The image contains 9 frames layed out horizontally, slice it into individual frames
	sliceX: 5,
    sliceY: 4,
	// Define animations
	anims: {
		"idle": {
			// Starts from frame 0, ends at frame 3
			from: 0,
			to: 19,
			// Frame per second
			speed: FRAME_SPEED,
			loop: true,
		},

	},
})
loadSprite("playerWalk","./src/game/assets/elements/player/basicReindeer/reindeer_walking.png", {
	// The image contains 9 frames layed out horizontally, slice it into individual frames
	sliceX: 5,
    sliceY: 3,
	// Define animations
	anims: {
		"walk": {
			// Starts from frame 0, ends at frame 3
			from: 0,
			to: 14,
			// Frame per second
			speed: FRAME_SPEED,
			loop: true,
		},

	},
})
loadSprite("playerJump","./src/game/assets/elements/player/basicReindeer/reindeer_jump.png", {
	// The image contains 9 frames layed out horizontally, slice it into individual frames
	sliceX: 5,
    sliceY: 3,
	// Define animations
	anims: {
		"jump": {
			// Starts from frame 0, ends at frame 3
			from: 0,
			to: 14,
			// Frame per second
			speed: FRAME_SPEED,
			loop: false,
		},

	},
})

loadSprite("playerDie","./src/game/assets/elements/player/basicReindeer/reindeer_die.png", {
	// The image contains 9 frames layed out horizontally, slice it into individual frames
	sliceX: 5,
    sliceY: 2,
	// Define animations
	anims: {
		"die": {
			// Starts from frame 0, ends at frame 3
			from: 0,
			to: 9,
			// Frame per second
			speed: FRAME_SPEED,
			loop: false,
		},

	},
})
loadSprite("playerEat","./src/game/assets/elements/player/basicReindeer/reindeer_eat.png", {
	// The image contains 9 frames layed out horizontally, slice it into individual frames
	sliceX: 5,
    sliceY: 2,
	// Define animations
	anims: {
		"eat": {
			// Starts from frame 0, ends at frame 3
			from: 0,
			to: 9,
			// Frame per second
			speed: FRAME_SPEED,
			loop: false,
		},

	},
})
loadSprite("walrusIdle","./src/game/assets/elements/enemy/walrus/walrusWhite/walrus_idle.png", {
	// The image contains 20 frames layed out horizontally, slice it into individual frames
	sliceX: 5,
    sliceY: 4,
	// Define animations
	anims: {
		"w_idle": {
			// Starts from frame 0, ends at frame 3
			from: 0,
			to: 19,
			// Frame per second
			speed: 3 ,
			loop: true,
		},

	},
})
loadSprite("walrusAttack","./src/game/assets/elements/enemy/walrus/walrusWhite/walrus_attack.png", {
	// The image contains 9 frames layed out horizontally, slice it into individual frames
	sliceX: 4,
    sliceY: 2,
	// Define animations
	anims: {
		"w_attack": {
			// Starts from frame 0, ends at frame 3
			from: 0,
			to: 7,
			// Frame per second
			speed: 3 ,
			loop: false,
		},

	},
})

loadSprite("walrusDie","./src/game/assets/elements/enemy/walrus/walrusWhite/walrus_die.png", {
	// The image contains 9 frames layed out horizontally, slice it into individual frames
	sliceX: 5,
    sliceY: 3,
	// Define animations
	anims: {
		"w_die": {
			// Starts from frame 0, ends at frame 3
			from: 0,
			to: 7,
			// Frame per second
			speed: 3 ,
			loop: false,
		},

	},
})
 loadSprite(snowball_enemy,"./src/game/assets/elements/projectile/snowball.png", {
	// The image contains 9 frames layed out horizontally, slice it into individual frames
	sliceX: 3,
    sliceY: 2,
	// Define animations
	anims: {
		"fly": {
			// Starts from frame 0, ends at frame 3
			from: 0,
			to: 5,
			// Frame per second
			speed: 3 ,
			loop: true,
		},

	},
})
 loadSprite(basic_weapon_player,"./src/game/assets/elements/projectile/basic_weapon_player.png", {
	// The image contains 9 frames layed out horizontally, slice it into individual frames
	sliceX: 3,
    sliceY: 2,
	// Define animations
	anims: {
		"shot": {
			// Starts from frame 0, ends at frame 3
			from: 0,
			to: 5,
			// Frame per second
			speed: 3 ,
			loop: true,
		},

	},
})
loadSprite(seagullFly,"./src/game/assets/elements/enemy/seagull/seagull_fly.png", {
	sliceX: 4,
    sliceY: 3,
	// Define animations
	anims: {
		"fly": {
			// Starts from frame 0, ends at frame 9
			from: 0,
			to: 9,
			// Frame per second
			speed: 5,
			loop: true,
		},

	},
})
loadSprite(friendIdle,"./src/game/assets/elements/npc/friend/friend_idle.png", {
	// The image contains 9 frames layed out horizontally, slice it into individual frames
	sliceX: 5,
    sliceY: 4,
	// Define animations
	anims: {
		"idle": {
			// Starts from frame 0, ends at frame 3
			from: 0,
			to: 19,
			// Frame per second
			speed: FRAME_SPEED,
			loop: true,
		},

	},
})
const bgImage =  loadSprite("background", "./src/game/assets/elements/landscape/01/layers/l1-background.png");
const bgImageDay =  loadSprite("backgroundDay", "./src/game/assets/elements/landscape/04/layers/l1-backgrounds.png");
const clouds =  loadSprite("clouds", "./src/game/assets/elements/landscape/04/layers/l2-clouds01.png");
const borealisPurple =  loadSprite("borealisPurple", "./src/game/assets/elements/landscape/01/layers/l5-northern-lights02.png")
const borealis =  loadSprite("borealis", "./src/game/assets/elements/landscape/01/layers/l2-northern-lights01.png",{
  anims: {
    
      jump: {
          from: 3,
          to: 1,
      },
 
  },});

const ice =  loadSprite("ice", "./src/game/assets/elements/landscape/01/layers/l9-ground.png")
const stars =  loadSprite("stars", "./src/game/assets/elements/landscape/01/layers/l4-stars.png");
const mountains =  loadSprite("mountains", "./src/game/assets/elements/landscape/01/layers/l7-mountains01.png");
const mountainsFarAway =  loadSprite("mountainsFarAway", "./src/game/assets/elements/landscape/01/layers/l8-mountains02.png");
const mountainsDay =  loadSprite("mountainsDay", "./src/game/assets/elements/landscape/03/layers/l2-mountains01.png");


const map =  loadSprite("map", "./src/game/assets/elements/obj/map.png",{

})


const starNormal =  loadSprite("starNormal", "./src/game/assets/elements/obj/star.png")
const starLocked =  loadSprite("starLocked", "./src/game/assets/elements/obj/star_lock.png")
const pinPoint =  loadSprite("pinPoint", "./src/game/assets/elements/obj/pinpoint.png");

loadSprite("plant", "./src/game/assets/elements/landscape/blocks/herb.png");

const life =  loadSprite("life", "./src/game/assets/elements/obj/health_potion.png");

// BAR RED
loadSprite(leftOuter, "./src/game/assets/elements/lifebar/meter_bar_holder_left_edge_red.png")
loadSprite(rightOuter, "./src/game/assets/elements/lifebar/meter_bar_holder_right_edge_red.png")
loadSprite(centerOuter, "./src/game/assets/elements/lifebar/meter_bar_holder_center-repeating_red.png")
loadSprite(leftInner, "./src/game/assets/elements/lifebar/meter_bar_left_edge_red.png")
loadSprite(rightInner, "./src/game/assets/elements/lifebar/meter_bar_right_edge_red.png")
loadSprite(centerInner, "./src/game/assets/elements/lifebar/meter_bar_center-repeating_red.png")



// TITLE
const gameTitle =  loadSprite("title", "./src/game/assets/elements/title/gameTitle.png");


var displayLivesArray =[starNormal,starNormal,starNormal]

