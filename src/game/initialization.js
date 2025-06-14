kaplay({
    width: 1800,
    height: 1024,
    //font: "sans-serif",
    //canvas: document.querySelector("#mycanvas"),
    //background: [ 0, 0, 10, ],
})

// INITIALIZING CONST GLOBAL VARIABLES
const LEVEL_TESTING = true;

const icyColor = color(121,202,234)
const icyColorDarker = color(12,22,96)
const icyWhite = Color.fromHex("#ffffff")
const icyBlack = Color.fromHex("#000000")
const COLOR_BLACK = '#000000';



const MAX_HEALTH = 10;
const MIN_HEALTH = 0;
const SPEED = 320
const SPEED_JUMP = 1000
const RUN_SPEED = 500
const FRAME_SPEED = 20
const FRAME_SLOW_SPEED = 5
const JUMP_FORCE = 500
const GRAVITY_AMOUNT = 640
const FALL_DEATH = 500
const FALL_DEATH_SOUND = FALL_DEATH - 500
const W_WALRUS_BULLET_SPEED = 900;
const P_BULLET_SPEED = 800;

const W_WHITE_HEALTH = 3;
const W_WHITE_SHOT_FREQUENCY = 1.8;

const S_HEALTH = 2;

const DEFAULT_CINEMATIC_TIME = 7;
const DEFAULT_CINEMATIC_TRIGGER_DISTANCE = 500;


const ANIM_IDLE = "idle";
const ANIM_WALK = "walk";
const ANIM_JUMP = "jump";
const ANIM_DIE = "die";
const ANIM_CHILL= "chill";
const ANIM_ORB= "orbanim";
const ANIM_W_IDLE = "w_idle";
const ANIM_W_ATTACK = "w_attack";
const ANIM_W_DIE = "w_die";
const ANIM_S_FLY = "fly";
const ANIM_SNOWBALL = "fly";
const ANIM_BASIC_WEAPON_P = "shot";


// GLOBAL VARIABLES THAT WILL BE GET FROM LOCAL STORAGE
var PLAYER_SHOT_FORCE = 1
var P_HEALTH = MAX_HEALTH;
var P_SHOT_FREQUENCY = 400;
var PLAYER_NAME = "FROSTELL";
var MUSIC_VOLUME = 0.2;



// INITIALIZING GLOBAL VARIABLES
var cinematicObjPoints = {}
var lives = 3;
var currentLevel = 0;
var IS_CINEMATIC_MODE_ON = false;
var IS_TYPING_CODE = false;

var rightInnerSprite ;
var centerInnerSprite;
var centerInnerSpriteArray = [];
var leftInnerSprite;


// States
var IS_PLAYER_WALKING = 0;

