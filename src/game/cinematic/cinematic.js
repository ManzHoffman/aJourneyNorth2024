function friendCinematicLevelZero(player)
{
    //IS_CINEMATIC_MODE_ON = true;
    const boxFinal = generateBoxReindeer(player,frostell.intro)


    wait(DEFAULT_CINEMATIC_TIME, () => {
		
      RemoveBox(boxFinal);
    })

}


function RemoveBox(elements)
{
  elements.forEach(element => {
  
    element.destroy();


  });
}

function generateBoxReindeer(element, textToDisplay)
{

var boxShown = [];

element.flipX = true
/*
 const box = add([
        sprite(convBox),
        scale(0.7),
        pos( vec2(element.pos.x-190, element.pos.y -350)),
        
      ])*/


      const boxPosX = element.pos.x;
      const boxPosY = element.pos.y;


      const frameShown = add([
        pos(boxPosX + 50, boxPosY - 350),
        rect(400, 200),
        outline(4),
        area(),
        color(icyWhite),
    ])

      const textShown =  add([
        
        //pos(boxPosX + 50 , boxPosY - 350),
        //rect(400, 200),
        //outline(4),
        //area(),
        //color(icyWhite),
        pos(boxPosX + 50 +5 , boxPosY - 350 +5),
        text(textToDisplay,{
          font: marykateFont,
          size: 22,
          width: 400,
          
        }),
        /*
     
     
        { value: 0 },
        fixed(),*/

      ])

    changeColor(textShown,icyBlack)

    boxShown.flipX = true;

    boxShown.push(frameShown)
    boxShown.push(textShown)



    return boxShown;

    

}
