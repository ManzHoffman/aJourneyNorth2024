// A Journey North - TITLE 


// DECLARING MENU VARIABLES
var level = 0;




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
      sprite("mountainsFarAway"),
    
      
    ])
    add([
      sprite("mountains"),
    
      
    ])
    add([
      sprite("mountainsFarAway"),
    
      
    ])
    add([
      sprite("ice"),
    
      
    ])
 

    add([
      sprite("borealis"),
        pos( vec2(-200, -100)),
      
    ])
    add([
      sprite("borealisPurple"),
        pos( vec2(-200, -110)),
      
    ])

  
    let backMusic = play("menuBackground", { loop: true, });
    // Add background
    /*
    add([
      rect(width(), height()),
      icyColor,


    ]);*/
     add([
        text("Score: 0",{
          font: "arctic",

          
        }),
        pos(24, 24),
        { value: 0 },
      ])
      const optionButton = add([
        text(menu.options,{
          size:78,
        
          font: "arctic",

        }),
        anchor("center"),
        pos(width()/2,height()/2-70),
        { value: 0 },
        area(),
      ])


     const playButton = add([
        text(menu.play,{
          size:78,
        
          font: "arctic",

        }),
        anchor("center"),
        pos(width()/2,height()/2-160),
        { value: 0 },
        area(),

      ])

      playButton.onClick(() => {

        backMusic.stop("menuBackground")
        go("intro")

        })
      playButton.onHover(() => { 
        
      changeColor(playButton,icyColorDarker) 
      play("popMenu", { loop: false, });
    
    } )
     playButton.onHoverEnd(() => {changeColor(playButton,icyWhite)  })


     optionButton.onClick(() => {alert("")})
     optionButton.onHover(() => { 
      
      changeColor(optionButton,icyColorDarker) 
      play("popMenu", { loop: false, });
    
    
    } )
     optionButton.onHoverEnd(() => {changeColor(optionButton,icyWhite)  })

      const changeColor = ((obj, colorToPut) => {obj.color = colorToPut })
  

});



//loadScreen(menu)
//loadScreen(background)

function loadScreen(name)
{
    
const script = document.createElement('script');
script.src =  name;
//script.async = true; // Optional: Make sure the script is loaded asynchronously
document.body.appendChild(script)
}


go("menu")