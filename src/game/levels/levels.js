
function displayLevelOne(posx,posy) {
    
return addLevel([
    "         +                                                                                      ",
    "    =  ===                                                                                      ",
    "             =                                                                                  ",
    "               = =                                                                              ",
    "     H   W          =                                                                           ",
    "     ==  =         =                                                                            ",
    "@  =            W                                                                               ",
    "=       =   == == =         ==============================  ====================================",
], {
    // define the size of tile block
    tileWidth: 180,
    tileHeight: 80,
    pos: vec2(0, 0),
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
          
            sprite("iceBlock"),
            area({ shape: new Rect(vec2(0), 135, 90 )}),
            anchor("center"),
            body({ isStatic: true }),
            scale(0.6),
            
        ],
        "H": () => [
          
            sprite("plant"),
            area({ shape: new Rect(vec2(0),20, 20 )}),
            //body({ isStatic: tr ue }),
            anchor("center"),
            scale(0.2),
            "plant",
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
