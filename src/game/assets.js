// IMPORTING GAME ASSETS

loadSound("menuBackground", "./src/game/assets/sounds/background_menu.wav");
loadSound("popMenu", "./src/game/assets/sounds/pop_menu.wav");
loadFont("arctic", "./src/game/assets/fonts/snowy.ttf")
loadFont("travel", "./src/game/assets/fonts/travel.ttf")

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

const map =  loadSprite("map", "./src/game/assets/elements/obj/map.png",{

})