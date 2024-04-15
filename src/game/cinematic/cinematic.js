function launchCinematic(cinematic)
{
  //IS_CINEMATIC_MODE_ON = true;
  const boxFinal = generateBoxReindeer(cinematic.speaker,cinematic.text)


  wait(cinematic.duration, () => {
		
    RemoveBox(boxFinal);
    IS_CINEMATIC_MODE_ON = false;
  })

}
/*
function friendCinematicLevelZero(player)
{
    //IS_CINEMATIC_MODE_ON = true;
    const boxFinal = generateBoxReindeer(player,PLAYER_SPEECH.intro)


    wait(DEFAULT_CINEMATIC_TIME, () => {
		
      RemoveBox(boxFinal);
      IS_CINEMATIC_MODE_ON = false;
    })

}*/


function RemoveBox(elements)
{
  elements.forEach(element => {
  
    element.destroy();


  });
}

function generateBoxReindeer(element, textToDisplay)
{

var boxShown = [];

let boxPosX = element.pos.x;
let boxPosY = element.pos.y;


if (element.flipX) {

  boxPosX = boxPosX + 50;
  boxPosY = boxPosY - 350;
}
else{
  boxPosX = boxPosX - 450;
  boxPosY = boxPosY - 350;
}

/*
 const box = add([
        sprite(convBox),
        scale(0.7),
        pos( vec2(element.pos.x-190, element.pos.y -350)),
        
      ])*/



      const frameShown = add([
        pos(boxPosX, boxPosY),
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
        pos(boxPosX +5 , boxPosY  +5),
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

  

    boxShown.push(frameShown)
    boxShown.push(textShown)



    return boxShown;

    

}
