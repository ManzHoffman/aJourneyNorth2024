
 scene("intro", (level) => {

    switch (level) {
        case 1:

        var introMusic = play("firstIntro", { loop: true,volume: 0.5 });
        introMusic.mu
       
              
          add([
            sprite("backgroundDay"),
          
            
          ])
          add([
            sprite("clouds"),
            pos( vec2(-200, -110)),
            
          ])
          add([
            sprite("mountainsDay"),
          
            
          ])
 
          add([
            sprite("map"),
            scale(0.2),
            anchor("center"),
            pos( vec2(width()/2,height()/2+200)),
            
          ])
          add([
            sprite("pinPoint"),
            scale(0.2),
            pos( vec2(width()/2-80,height()/2+235)),
          ])


          addText(level1.title,68,icyWhite,"arctic","center",width()/2,height()/2-350)
          addText(level1.localisation,48,icyWhite,"arctic","center",width()/2,height()/2-200)
         
          addText(level1.description,30,icyWhite,"marykate","center",750,450)

    
            
            break;

            case 2:

              break;
    
        default:
            break;
    }


// 3 seconds until explosion! Runnn!
wait(3, () => {
  addText(level1.start,48,icyWhite,"arctic","center",width()/2,height()/2+400)

  onKeyPress("space", () => {
    introMusic.stop()
    go("game",currentLevel)
})


})

// wait() returns a PromiseLike that can be used with await
/*
  add([
    sprite("map"),
      pos( vec2(100, 200)),
      resizeTo(10,10),
      
    
  ])*/

  
//setBackground(icyBlack)




})