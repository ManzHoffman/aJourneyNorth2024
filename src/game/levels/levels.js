
function displayLevelZero(posx,posy) {
    loadSeaAndSky();
    generateFloe(0,10);
    windAmbiance.paused = false;

    const level0 = addLevel([
        "                                                                                                ",
        "                                                                                                ",
        "                                                                                                ",
        "                                                                                                ",
        "                                                                                                ",
        "@                                                                                               ",
        "                                                                                                ",
        "================================== ",
    ], {
        // define the size of tile block
        tileWidth: 180,
        tileHeight: 80,
        pos: vec2(0, -50),
        // define what each symbol means, by a function returning a component list (what will be passed to add())
        tiles: {

    
            "@": () => [
                sprite("playerIdle"),
                //pos(posx,posy),
                
                //anchor("center"),
                body(),
                area({ shape: new Rect(vec2(0), 100, 160)}),
                anchor("center"),
                health(P_HEALTH),
                "player",
            ],
        
            "$": () => [
              
                sprite(iceBlock2),
                area({ shape: new Rect(vec2(0), 250, 90 )}),
                anchor("center"),
                body({ isStatic: true }),
                scale(0.5),
               // fixed(),
              
            ],
            "H": () => [
              
                sprite("plant"),
                area({ shape: new Rect(vec2(0),20, 20 )}),
                //body({ isStatic: tr ue }),
                anchor("center"),
                scale(0.2),
                "plant",
            ],
            "S": () => [
              
                sprite(seagullFly, {anim: ANIM_S_FLY}),
                area({ shape: new Rect(vec2(0),20, 20 )}),
                //body({ isStatic: tr ue }),
                anchor("center"),
                health(S_HEALTH),
                state("fly", [ "fly", "attack"]),
                scale(0.4),
                seagullFly,
            ],
            "+": () => [
              
                sprite("life"),
                area({ shape: new Rect(vec2(0),20, 20 )}),
                anchor("center"),
    
                //body({ isStatic: tr ue }),
                scale(0.2),
                "life",
            ],
            "W": () => [
                sprite("walrusIdle"),
                  // Define custom behavior for the enemy
                //pos(posx,posy),
           
                //anchor("center"), 
                area({ shape: new Rect(vec2(0), 100, 105)}),
                body({ isStatic: true }),
                anchor("center"),
                health(W_WHITE_HEALTH),
                state("idle", [ "idle", "attack","die"]),
                "walrusWhite",
            ],
            "=": () => [
               // sprite("walrusIdle"),
                  // Define custom behavior for the enemy
                //pos(posx,posy),
           
                //anchor("center"), 
                area({ shape: new Rect(vec2(0), 100, 105)}),
                body({ isStatic: true }),
                anchor("center"),
                health(W_WHITE_HEALTH),
                state("idle", [ "idle", "attack","die"]),
                "walrusWhite",
            ],
          
        }

      

    })

    
  
    //const enemy = level.get("walrusWhite")[0]
 
   // const enemies =  level.get("walrusWhite");
    //const numberOfWalrusWhiteElements = enemies.length;


    initPlayer(110,800,level0.get("player")[0]);

}
function displayLevelOne(posx,posy) {
      

/*
    add([
        sprite("backgroundDay"),
        fixed()
        
      ])
      add([
        sprite("clouds"),
        pos( vec2(-200, -110)),
        fixed(),
        
      ])
      add([
        sprite("mountainsDay"),
        fixed(),
        
      ])*/

   
loadSeaAndSky();

return addLevel([
    "                                                                                                ",
    "                                                                                                ",
    "                                                                                                ",
    "                        S                                                                       ",
    "     H   W          =                                                                           ",
    "     =   $         =    =                                                                       ",
    "@  $            W                                                                               ",
    "=       =   ==  = =         ==============================  ====================================",
], {
    // define the size of tile block
    tileWidth: 180,
    tileHeight: 80,
    pos: vec2(0, -50),
    // define what each symbol means, by a function returning a component list (what will be passed to add())
    tiles: {

        

        "@": () => [
            sprite("playerIdle"),
            //pos(posx,posy),
            
            //anchor("center"),
            body(),
            area({ shape: new Rect(vec2(0), 100, 160)}),
            anchor("center"),
            health(P_HEALTH),
            "player",
        ],
        "=": () => [
          
            sprite(iceBlock),
            area({ shape: new Rect(vec2(0), 135, 90 )}),
            anchor("center"),
            body({ isStatic: true }),
            scale(0.5),
           // fixed(),
          
        ],
        "$": () => [
          
            sprite(iceBlock2),
            area({ shape: new Rect(vec2(0), 250, 90 )}),
            anchor("center"),
            body({ isStatic: true }),
            scale(0.5),
           // fixed(),
          
        ],
        "H": () => [
          
            sprite("plant"),
            area({ shape: new Rect(vec2(0),20, 20 )}),
            //body({ isStatic: tr ue }),
            anchor("center"),
            scale(0.2),
            "plant",
        ],
        "S": () => [
          
            sprite(seagullFly, {anim: ANIM_S_FLY}),
            area({ shape: new Rect(vec2(0),20, 20 )}),
            //body({ isStatic: tr ue }),
            anchor("center"),
            health(S_HEALTH),
            state("fly", [ "fly", "attack"]),
            scale(0.4),
            seagullFly,
        ],
        "+": () => [
          
            sprite("life"),
            area({ shape: new Rect(vec2(0),20, 20 )}),
            anchor("center"),

            //body({ isStatic: tr ue }),
            scale(0.2),
            "life",
        ],
        "W": () => [
            sprite("walrusIdle"),
              // Define custom behavior for the enemy
            //pos(posx,posy),
       
            //anchor("center"), 
            area({ shape: new Rect(vec2(0), 100, 105)}),
            body({ isStatic: true }),
            anchor("center"),
            health(W_WHITE_HEALTH),
            state("idle", [ "idle", "attack","die"]),
            "walrusWhite",
        ],

      
    }
})



}
