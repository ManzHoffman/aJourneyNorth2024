function spawnElements() {

    const groundWidth = 7110
const repeatCount = 4


    // GENERATING SNOW GROUND
  for (let i = 0; i < repeatCount; i++) {
    add([
      sprite("ground"),
      pos(i * groundWidth, 350),
      //dfdz(1),
    ])
  }

  // END GENERATING SNOW GROUND
// TRIGGERS


const codeTrigger = add([
    area(),
    pos(3000, 510),
    rect(100, 100),
    opacity(0), // fully invisible
    z(10),
    "codeTrigger"
  ])

  

// END TRIGGERS


// INVISIBLE GROUND & LIMITS

  add([
    rect(width()*2, 10*2),
    pos(0, 510),
    area(),
    body({ isStatic: true }), // ← replaces `solid()`
   color(0, 0, 0, 1), // invisible
   opacity(0)
  ])


  add([
    rect(width()*2, 10*2),
    pos(4000, 500),
    area(),
    body({ isStatic: true }), // ← replaces `solid()`
    //color(255, 255, 255, 100), // invisible
    opacity(0)
  ])




  add([
    rect(10, height()),
    pos(0, -510),
    area(),
    body({ isStatic: true }), // ← replaces `solid()`
    color(255, 255, 255, 0), // invisible
    opacity(0)

  ])
  
// END INVISIBLE GROUND & LIMITS
 
 // HOLES

  add([
    sprite("platformHole"),
    pos(3600, 480),
    scale (0.8),
    body({ isStatic: true }),
    
    
  ])

 // END HOLES

// ICE BLOCKS

  add([
    sprite("iceBlock"),
    pos(500, 200),
    area(),
      scale (0.5),
      body({ isStatic: true }),
    
  ])

// END ICE BLOCKS

// ROCKS
add([
    sprite("rock1"),
    pos(-200, 200),
    
      scale (1),
      body({ isStatic: true }),
      //area(),
    
  ])
  

  add([
    sprite("rock3"),
    pos(-600, 100),
    
      scale (1),
      body({ isStatic: true }),
      //area(),
    
  ])
  

  add([
    sprite("rock4"),
    pos(-850, 50),
    
      scale (1),
      body({ isStatic: true }),
      //area(),
    
  ])
  
  add([
    sprite("rock1"),
    pos(5100,-100),
    area(),
  
      scale (1),
      body({ isStatic: true }),
      //area(),
    
  ])

  add([
    sprite("rock3"),
    pos(5000, 100),
    area(),
      scale (1),
      body({ isStatic: true }),
      //area(),
    
  ])
// END ROCKS
}