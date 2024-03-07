
function displayLevelOne(posx,posy) {
    
return addLevel([
    "   ==== =   ===== ===  =========================================================================",
    "                                                                                                ",
    "                                                                                                ",
    "                                                                                                ",
    "                                                                                                ",
    "                                                                                                ",
    "=  ==== =   ===== ===  =========================================================================",
], {
    // define the size of tile block
    tileWidth: 96,
    tileHeight: 96,
    pos: vec2(posx, posy),
    // define what each symbol means, by a function returning a component list (what will be passed to add())
    tiles: {
        "=": () => [
            sprite("iceBlock"),
            area(),
            body({ isStatic: true }),
            scale(0.3),
        ],

    }
})



}
