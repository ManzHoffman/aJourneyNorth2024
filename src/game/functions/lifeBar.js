function displayBar(number, isUpdate) {

    if (number > MAX_HEALTH || number < MIN_HEALTH) {
        return;
        
    }

   
    if (isUpdate == true) {
      destroy(rightInnerSprite)



      for (let i = 0; i < centerInnerSpriteArray.length; i++) {
      
        destroy(centerInnerSpriteArray[i])
        
      }
      //destroyAll(centerInnerSprite)
      //destroy(centerInnerSprite)


      destroy(leftInnerSprite)
    }
    
    
    if (number == 10) {
    
    
      rightInnerSprite = add([
       sprite(rightInner),
          pos( vec2(190,68)),
          scale(0.1),
            fixed(),
      ])
    

    
    }
    
    
    
    if ( number > 1 ) {

    let rightNumber;

    if (number > 8) {
        rightNumber =  8;
    }
    else
    {
        rightNumber =  number-1;
    }

 
    for (let i = 0; i < rightNumber*10; i++) {
    
       centerInnerSprite = add([
      sprite(centerInner),
        pos( vec2(34+i*2,68)),
        scale(0.1),
        fixed(),

    ])
    
    centerInnerSpriteArray.push(centerInnerSprite)

     
    }
  
    
    }
    
    if (number > 0) {
    
    
       leftInnerSprite =  add([
     sprite(leftInner),
        pos( vec2(24,68)),
        scale(0.1),
        fixed(),
    ])
  
    }
    
    
    }
    
    function displayOuterBar() {
    
      add([
        sprite(leftOuter),
          pos( vec2(24,68)),
          scale(0.1),
          fixed(),
      ])
    
    
    
    
    for (let i = 0; i < 8; i++) {
    
      add([
        sprite(centerOuter),
          pos( vec2(34+i*21,68)),
          scale(0.1),
          fixed(),
      ])
    
    
       
    }
      add([
        sprite(rightOuter),
          pos( vec2(190,68)),
          scale(0.1),
          fixed(),
      ])
    
    
    
    
    }