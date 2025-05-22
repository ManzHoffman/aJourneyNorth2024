scene("game", (level) => {


    addAuroras()
    addSnow()
// define gravity
setGravity(GRAVITY_AMOUNT)
P_HEALTH = MAX_HEALTH;
    
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

  add([
    sprite("fog"),
      fixed(),
    
  ])



  
  add([
    rect(width(), 10),
    pos(0, 510),
    area(),
    body({ isStatic: true }), // ← replaces `solid()`
    color(255, 255, 255, 100), // invisible
  ])
  
  add([
    rect(10, height()),
    pos(0, -510),
    area(),
    body({ isStatic: true }), // ← replaces `solid()`
    color(255, 255, 255, 100), // invisible
  ])

  const player = initPlayer(10, 0);
  
//displayLives();
//displayOuterBar();
//displayBar(P_HEALTH,false);

playDeerThoughts([
    { text: "Il fait froid, mais ce n’est pas le froid d’avant.", duration: 4 },
    { text: "Je marche. C’est tout ce que je sais faire.", duration: 4 },
    { text: "Ce monde n’a plus d’odeur. Plus de cri.", duration: 4 },
    { text: "Et pourtant… quelque chose m’appelle.", duration: 5 },
    { text: "Le ciel… il a changé.", duration: 3 },
    { text: "Je ne me souviens pas.", duration: 2 },
    { text: "Mais quelque chose… se souvient de moi.", duration: 4 },
    { text: "Je dois continuer à marcher.", duration: 4 },
  ])


function playDeerThoughts(thoughts) {
    let timeOffset = 0
  
    for (const t of thoughts) {
      wait(timeOffset, () => {
        showDeerThought(t.text, {
          duration: t.duration || 4,
          y: t.y || height() - 120,
        })
      })
  
      timeOffset += (t.duration || 4) + (t.delay || 1)
    }
  }

function showDeerThought(content, options = {}) {
  const boxWidth = options.width || 600
  const fontSize = options.size || 24
  const yOffset = options.y || height() - 120
  const duration = options.duration || 4

  // Box background
  const box = add([
    rect(boxWidth, 100, { radius: 8 }),
    pos(width() / 2 - boxWidth / 2, yOffset),
    color(0, 0, 0),
    opacity(0),
    z(110),
    fixed(),
    "fadeTarget"
  ])

  // Text
  const textBox = add([
    text(content, {
      size: fontSize,
      font: "ussr",
      width: boxWidth - 40,
    }),
    pos(width() / 2 - boxWidth / 2 + 20, yOffset + 20),
    color(255, 255, 255),
    opacity(0),
    z(111),
    fixed(),
    "fadeTarget"
  ])

  // Fade in
  tween(box.opacity, 0.5, duration * 0.25, (val) => box.opacity = val)
  tween(textBox.opacity, 1, duration * 0.25, (val) => textBox.opacity = val)

  // Wait then fade out
  wait(duration * 0.75, () => {
    tween(box.opacity, 0, duration * 0.25, (val) => box.opacity = val)
    tween(textBox.opacity, 0, duration * 0.25, (val) => textBox.opacity = val)
  })

  // Destroy after total duration
  wait(duration + 0.1, () => {
    destroy(box)
    destroy(textBox)
  })
}


})
/*
// jump when player presses "space" key
onKeyPress("space", () => {
    // .jump() is provided by the body() component
    player.jump()
})


// add character to screen, from a list of components
const player = add([
    sprite("bean"),  // renders as a sprite
    pos(120, 80),    // position in world
    area(),          // has a collider
    body(),          // responds to physics and gravity
])

*/
