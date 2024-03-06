
scene("intro", (level) => {

    switch (level) {
        case 0:
            
            break;
    
        default:
            break;
    }

    add([
        sprite("backgroundDay"),
      
        
      ])
      add([
        sprite("clouds"),
        pos( vec2(-200, -110)),
        
      ])

  addText(level1.title,68,icyWhite,"arctic","center",width()/2,height()/2-200)
  addText(level1.localisation,48,icyWhite,"arctic","center",width()/2,height()/2-100)
 
  addText(level1.description,22,icyWhite,"travel","center",width()/2,height()/2)

/*
  add([
    sprite("map"),
      pos( vec2(100, 200)),
      resizeTo(10,10),
      
    
  ])*/

  
//setBackground(icyBlack)




})