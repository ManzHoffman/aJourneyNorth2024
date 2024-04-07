function loadGameElements(objectArray, type)
{
    // Loop through the object properties
for (var key in objectArray) {
    if (objectArray.hasOwnProperty(key)) {
      // Get the title (property name) and value of each entry
      var title = key;
      var value = objectArray[key];
  
      // Output the title and value
      console.log("Title:", title);
      console.log("Value:", value);

        switch (type) {
            case "sound":
                loadSound(title, value);

                break;
                case "font":
                    loadFont(title, value);
    
                    break;
            default:
                break;
        }



    }
  }
}