const changeColor = ((obj, colorToPut) => {obj.color = colorToPut })

function addText(textMain,size,color,fontType,align, posx,posy) {
 

    var textToEdit = add([
   
        text(textMain,{
            size: size,
            font: fontType,


          }),
          anchor(align),
        //width()/2,height()/2-200
          pos(posx,posy),
        
          fixed(),
          { value: 0 },
          
    
      ])

  changeColor(textToEdit, color)
    
}



function displayLives() {

   add([
        text("Vies : ",{
          font: "ussr",

          
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


