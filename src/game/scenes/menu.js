// A Journey North - TITLE 
// Create game menu scene
scene("menu", () => {
     // minimal setup
     addVHSEffects() // call the global function
     addAuroras()
     add([
      sprite("background"),
    
      
    ])

    add([
      sprite("stars"),
    
      
    ])
    add([
      sprite("mountains"),
    
      
    ])
    add([
      sprite("mountainsFarAway"),
    
      
    ])
    /*
    add([
      sprite("ice"),
      fixed(),
      
    ])
 */
/*
    add([
      sprite("borealis"),
        pos( vec2(-200, -110)),
      
    ])
    add([
      sprite("borealisPurple"),
        pos( vec2(-200, -130)),
      
    ])

*/




    add([
      sprite("title"),
      scale(0.5),
      pos(width()/2-240,height()/2-600),
    ])

/*
    const  = add([
      sprite("playerIdle"),
      pos(300,800),
      scale(1),
      anchor("center"),
      body(),
      area(),
      "reindeer",
      
    ])*/

    //reindeerAlone.flipX = true;
    //reindeerAlone.play(ANIM_IDLE);
    let backMusic = play("menuBackground", { loop: true,volume: 1 });
    // Add background
    /*
    add([
      rect(width(), height()),
      icyColor,


    ]);*/
    function createMenuButton(label, y, onClick) {
      const width = 400
      const height = 80
    
      const box = add([
        rect(width, height, { radius: 6 }),
        pos(center().x - width / 2, y),
        color(0, 0, 0),
        opacity(0.45), // translucent black
        area(),
        z(10),
        "menu-button"
      ])
    
      const textLabel = add([
        text(label, {
          size: 36,
          font: "ussr",
        }),
        anchor("center"),
        pos(center().x, y + height / 2),
        color(WHITE),
        z(11),
      ])
    
      box.onHover(() => {
        box.opacity = 0.7
        textLabel.color = rgb(180, 220, 255)
        box.scale = vec2(1.02)
        play("popMenu", { loop: false, volume: 0.1 })
      })
    
      box.onHoverEnd(() => {
        box.opacity = 0.45
        textLabel.color = WHITE
        box.scale = vec2(1)
      })
    
      box.onClick(onClick)
    }
    
    createMenuButton(menu.play, height() / 2 - 60, () => {
      backMusic.stop("menuBackground")
      go("intro", 1)
    })
    
    createMenuButton(menu.options, height() / 2 + 60, () => {
      alert("Options coming soon")
    })

    /*
    
      const optionButton = add([
        text(menu.options,{
          size:78,
        
          font: "ussr",

        }),
        anchor("center"),
        pos(width()/2,height()/2+50),
        { value: 0 },
        area(),
      ])


     const playButton = add([
        text(menu.play,{
          size:78,
        
          font: "ussr",

        }),
        anchor("center"),
        pos(width()/2,height()/2-50),
        { value: 0 },
        area(),

      ])

      playButton.onClick(() => {

        backMusic.stop("menuBackground")
        go("intro",1)

        })
      playButton.onHover(() => { 
        
      changeColor(playButton,icyColorDarker) 
      play("popMenu", { loop: false, volume:0.1});
    
    } )
     playButton.onHoverEnd(() => {changeColor(playButton,icyWhite)  })


     optionButton.onClick(() => {alert("")})
     optionButton.onHover(() => { 
      
      changeColor(optionButton,icyColorDarker) 
      play("popMenu", { loop: false,volume:0.1 });
    
    
    } )
     optionButton.onHoverEnd(() => {changeColor(optionButton,icyWhite)  })
*/

}) // END of scene("menu")

go("menu")