scene("intro", (level) => {
  addVHSEffects(); // keep your glitchy aesthetic
  setBackground(COLOR_BLACK);

 const introMusic = play("typing", { loop: false,volume:0.6 });

  // Terminal lines (mysterious, non-spoiler)
  const lines = [
    "[Initialisation . . .]",
    "[Instance: 5220]",
    "[69°42’N 147°12’E]",
    "[Janvier 2022]",
  ];

  let lineIndex = 0;

  // Helper to add one line at a time
  function addTerminalLine(text) {
    addText(text, 40, icyWhite, "ussr", "center", width() / 2, height() / 2 - 200 + lineIndex * 50);
    lineIndex++;
  }

  // Type lines with delay
  function displayLinesSequentially() {
    lines.forEach((line, i) => {
      wait(i * 1.2, () => {
        addTerminalLine(line);
      });
    });

    // After all lines are shown, wait a moment and show prompt
    wait(lines.length * 1.2 + 1, () => {
      addText("Appuyer sur ESPACE pour commencer", 36, icyWhite, "ussr", "center", width() / 2, height() / 2 + 180);

      onKeyPress("space", () => {
        introMusic.stop();
        go("game", currentLevel);
      });
    });
  }

  displayLinesSequentially();
});
