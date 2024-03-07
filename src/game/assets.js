// IMPORTING GAME ASSETS

// SOUNDS

loadSound("menuBackground", "./src/game/assets/sounds/background_menu.wav");
loadSound("popMenu", "./src/game/assets/sounds/pop_menu.wav");
loadSound("firstIntro", "./src/game/assets/sounds/intro_first.wav");

// FONTS

loadFont("arctic", "./src/game/assets/fonts/snowy.ttf")
loadFont("travel", "./src/game/assets/fonts/travel.ttf")
loadFont("marykate", "./src/game/assets/fonts/marykate.ttf")


// SPRITES

// PLAYER

loadSprite("player","./src/game/assets/elements/player/reindeer_idle.png", {
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
			speed: 5,
			loop: true,
		},
        /*
		"run": {
			from: 4,
			to: 7,
			speed: 10,
			loop: true,
		},*/
		// This animation only has 1 frame
		//"jump": 8,
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
const iceBlock =  loadSprite("iceBlock", "./src/game/assets/elements/landscape/04/layers/l8-block.png");




var displayLivesArray =[starNormal,starNormal,starNormal]

