// A Journey North - TITLE 


// Create game menu scene
scene("menu", () => {
     // minimal setup
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
    add([
      sprite("ice"),
      fixed(),
      
    ])
 

    add([
      sprite("borealis"),
        pos( vec2(-200, -110)),
      
    ])
    add([
      sprite("borealisPurple"),
        pos( vec2(-200, -130)),
      
    ])


    add([
      sprite("title"),
      scale(1),
      pos(width()/2-240,height()/2-400),
    ])


    const reindeerAlone = add([
      sprite("playerIdle"),
      pos(300,800),
      scale(1),
      anchor("center"),
      body(),
      area(),
      "reindeer",
      
    ])

    reindeerAlone.flipX = true;
    reindeerAlone.play(ANIM_IDLE);
    let backMusic = play("menuBackground", { loop: true, });
    // Add background
    /*
    add([
      rect(width(), height()),
      icyColor,


    ]);*/

      const optionButton = add([
        text(menu.options,{
          size:78,
        
          font: "arctic",

        }),
        anchor("center"),
        pos(width()/2,height()/2+50),
        { value: 0 },
        area(),
      ])


     const playButton = add([
        text(menu.play,{
          size:78,
        
          font: "arctic",

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
      play("popMenu", { loop: false, });
    
    } )
     playButton.onHoverEnd(() => {changeColor(playButton,icyWhite)  })


     optionButton.onClick(() => {alert("")})
     optionButton.onHover(() => { 
      
      changeColor(optionButton,icyColorDarker) 
      play("popMenu", { loop: false,volume: 0.4 });
    
    
    } )
     optionButton.onHoverEnd(() => {changeColor(optionButton,icyWhite)  })

      const changeColor = ((obj, colorToPut) => {obj.color = colorToPut })
  

});



go("menu")