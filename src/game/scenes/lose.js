scene("lose", () => {


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
        sprite("title"),
        scale(1),
        pos(width()/2-240,height()/2-400),
      ])
  
      addText(loose.dead,80,icyWhite,"arctic","center",width()/2,height()/2)

      const reindeerDie= add([
        sprite("playerDie"),
        pos(width()/2,height()/2+250),
        scale(1),
        anchor("center"),
        //body(),
        area(),
        "reindeer",
        
      ])
      reindeerDie.flipX = true;

      reindeerDie.play(ANIM_DIE);
/*
if (lives > 0 ) {
    
}
else {

lives--

}*/

// 3 seconds until explosion! Runnn!
wait(1, () => {
    addText(loose.title,48,icyWhite,"arctic","center",width()/2,height()/2+400)
  
    onKeyPress("space", () => {

      go("game",currentLevel)
  })})
  
})