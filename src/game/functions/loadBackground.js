async function loadBackground(path) {
  
    let bgImage = await loadSprite("background", path);
  
    let background = add([
      sprite("background"),
      // Make the background centered on the screen
      pos(width() / 2, height() / 2),
      anchor("center"),
      // Allow the background to be scaled
      scale(1),
      // Keep the background position fixed even when the camera moves
      fixed()
    ]);
    // Scale the background to cover the screen
    background.scaleTo(Math.max(
      width() / bgImage.tex.width,
      height() / bgImage.tex.height
    ));
  }
  loadBackground("https://www.paulwheeler.us/files/windows-95-desktop-background.jpg");