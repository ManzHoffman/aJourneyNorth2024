
function displayLevelOne(posx,posy) {
    
return addLevel([
    "                                                                                                ",
    "                                                                                                ",
    "                                                                                                ",
    "                                                                                                ",
    "                                                                                                ",
    "@                                                                                               ",
    "== ==== =   ===== ===  ===================================  ====================================",
], {
    // define the size of tile block
    tileWidth: 288,
    tileHeight: 161,
    pos: vec2(posx, posy),
    // define what each symbol means, by a function returning a component list (what will be passed to add())
    tiles: {
        "@": () => [
            sprite("playerIdle"),
            //pos(posx,posy),
            scale(1),
            //anchor("center"),
            body(),
            area(),
            "player",
        ],
        "=": () => [
            sprite("iceBlock"),
            area(),
            body({ isStatic: true }),
            scale(0.8),
        ],
       


    }
})



}
