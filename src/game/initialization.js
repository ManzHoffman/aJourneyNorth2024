kaboom({
    width: 1280,
    height: 1024,
    //font: "sans-serif",
    //canvas: document.querySelector("#mycanvas"),
    //background: [ 0, 0, 10, ],
})

// INITIALIZING CONST GLOBAL VARIABLES

const icyColor = color(121,202,234)
const icyColorDarker = color(12,22,96)
const icyWhite = Color.fromHex("#ffffff")
const icyBlack = Color.fromHex("#000000")


const SPEED = 320
const SPEED_JUMP = 1000
const RUN_SPEED = 500
const FRAME_SPEED = 20
const JUMP_FORCE = 360
const GRAVITY_AMOUNT = 640
const FALL_DEATH = 2400


const ANIM_IDLE = "idle";
const ANIM_WALK = "walk";
const ANIM_JUMP = "jump";
// INITIALIZING GLOBAL VARIABLES

var lives = 3;
var currentLevel = 1;




