scene("game", (level) => {


if (!LEVEL_TESTING) 
{

     IS_CINEMATIC_MODE_ON = true;
}


    addAuroras()
    //addSnow()
// define gravity

setGravity(GRAVITY_AMOUNT)
P_HEALTH = MAX_HEALTH;
    


//const seagull = spawnSeagull(0,0);

spawnMemoryFragment(1000, 370, {
    message: "« Ce mot me hante encore. Le collier de Fenja…  Une lettre gravée. »",
    codePiece: "F"
  })
  
  spawnMemoryFragment(1000, 1500, {
    message: "« Deux cris. Deux pas. Combien de fois suis-je tombé ? »",
    codePiece: "2"
  })
  
  spawnMemoryFragment(1000, 1800, {
    message: "« Sept marches. Sept silences. »",
    codePiece: "7"
  })


add([
    sprite("backgroundNight"),
    fixed(),
    
  ])
  add([
    sprite("mountains"),
    fixed(),
    
  ])


add([
    sprite("stars"),
  
    fixed(),
  ])
/*
  add([
    sprite("fog"),
      fixed(),
    
  ])
*/

  

/*
  add([
    sprite("ground"),
    pos(0,350),dd
  
  ])

*/

 

  let wind = play("windAmb", { loop: true,volume: 0.5 });




  spawnElements()


  const player = initPlayer(160, 348);
//displayLives();
//displayOuterBar();
//displayBar(P_HEALTH,false);

playDeerThoughts([
    { text: "Il fait froid. Mais ce n’est pas le froid que je connais.", duration: 3},
    //{ text: "Je marche. C’est tout ce que je sais faire.", duration: 4 },
    { text: "Le ciel est différent.", duration: 2 },
    { text: "Je ne me souviens de rien.", duration: 2 },
    { text: "Mais quelque chose... m’addttend.", duration: 3 },
    { text: "Alors je continue.", duration: 2 },
  ], () => {
    // 🎯 Trigger next step here:
    // e.g., unlock movement, start snowstorm, fade in next zone
    IS_CINEMATIC_MODE_ON = false;
  

    console.log("All thoughts finished!")
    showMemoryModal(CONTROLS.leftAndRight, 4)
  })



  player.onCollide("memory", (frag) => {
    if (!frag.activated) {
      frag.activated = true
  
      showMemoryModal("Fragement de mémoire...\n\n" + frag.message, 5)
  
      //playerCode.push(frag.codePiece)
  
      frag.opacity = 0.1
      frag.scale = vec2(0.2)
      play("fragment_get")
  
      frag.destroy() // if you want it to disappear completely
    }
  })
})
