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
     
    
      ])
    
}