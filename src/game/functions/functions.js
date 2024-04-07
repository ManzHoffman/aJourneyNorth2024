function addText(textMain,size,color,fontType,align, posx,posy) {

    add([
        text(textMain,{
            size: size,
            color,
            font: fontType,
    
          }),
          anchor(align),
        //width()/2,height()/2-200
          pos(posx,posy),
    
    
          { value: 0 },
          fixed(),
    
      ])
    
}



function displayLives() {

   add([
        text("Vies : ",{
          font: "arctic",

          
        }),
        pos(24, 24),
        { value: 0 },
        fixed(),
      ])



for (let i = 0; i < displayLivesArray.length; i++) {
        
    let livesSprite =  add([
      sprite(displayLivesArray[i]),
        pos( vec2(100 + i*40, 24 )),
        scale(0.1),
        fixed(),
    ])




    

    
}


}


