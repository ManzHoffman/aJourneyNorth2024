function showDeerThought(content, options = {}) {
    const boxWidth = options.width || 600
    const fontSize = options.size || 24
    const yOffset = options.y || height() - 120
    const duration = options.duration || 4
  
    // Box background
    const box = add([
      rect(boxWidth, 100, { radius: 8 }),
      pos(width() / 2 - boxWidth / 2, yOffset),
      color(0, 0, 0),
      opacity(0),
      z(110),
      fixed(),
      "fadeTarget"
    ])
  
    // Text
    const textBox = add([
      text(content, {
        size: fontSize,
        font: "ussr",
        width: boxWidth - 40,
      }),
      pos(width() / 2 - boxWidth / 2 + 20, yOffset + 20),
      color(255, 255, 255),
      opacity(0),
      z(111),
      fixed(),
      "fadeTarget"
    ])
  
    // Fade in
    tween(box.opacity, 0.5, duration * 0.25, (val) => box.opacity = val)
    tween(textBox.opacity, 1, duration * 0.25, (val) => textBox.opacity = val)
  
    // Wait then fade out
    wait(duration * 0.75, () => {
      tween(box.opacity, 0, duration * 0.25, (val) => box.opacity = val)
      tween(textBox.opacity, 0, duration * 0.25, (val) => textBox.opacity = val)
    })
  
    // Destroy after total duration
    wait(duration + 0.1, () => {
      destroy(box)
      destroy(textBox)
    })
  }
  function showMemoryModal(content, duration) {
    const boxWidth = 600
    const boxHeight = 220
  
    // Dark overlay behind everything
    const overlay = add([
      rect(width(), height()),
      color(0, 0, 0),
      opacity(0),
      z(200),
      fixed(),
    ])
  
    // Modal window
    const box = add([
      rect(boxWidth, boxHeight, { radius: 12 }),
      pos(center().x - boxWidth / 2, center().y - boxHeight / 2),
      color(20, 20, 30),
      opacity(0),
      z(201),
      fixed(),
    ])
  
    // Text content
    const textBox = add([
      text(content, {
        size: 24,
        font: "ussr",
        width: boxWidth - 40,
        lineSpacing: 10,
      }),
      pos(center().x - boxWidth / 2 + 20, center().y - boxHeight / 2 + 30),
      color(WHITE),
      opacity(0),
      z(202),
      fixed(),
    ])
  
    // Fade in everything
    tween(overlay.opacity, 0.5, 0.4, (val) => overlay.opacity = val)
    tween(box.opacity, 0.95, 0.4, (val) => box.opacity = val)
    tween(textBox.opacity, 1, 0.6, (val) => textBox.opacity = val)
  
    play("fragment_get",{ loop: false,volume: 0.3 })
  
    // Auto-close after duration
    wait(duration, () => {
      tween(overlay.opacity, 0, 0.4, (val) => overlay.opacity = val)
      tween(box.opacity, 0, 0.4, (val) => box.opacity = val)
      tween(textBox.opacity, 0, 0.4, (val) => textBox.opacity = val)
  
      wait(0.5, () => {
        destroy(overlay)
        destroy(box)
        destroy(textBox)
      })
    })
  }
  
  function playDeerThoughts(thoughts, onComplete) {
    let timeOffset = 0
  
    for (const t of thoughts) {
      const duration = t.duration || 4
      const delay = t.delay || 1
  
      wait(timeOffset, () => {
        showDeerThought(t.text, {
          duration,
          y: t.y || height() - 120,
        })
      })
  
      timeOffset += duration + delay
    }
  
    // Schedule the callback AFTER the last thought ends
    if (onComplete) {
      wait(timeOffset, () => {
        onComplete()
      })
    }
  }

  function showCodePromptModal(promptText, onSuccess, correctCode = "F27") {
    const boxWidth = 600
    const boxHeight = 250
    let input = ""

    IS_CINEMATIC_MODE_ON = true;
  
    const overlay = add([
      rect(width(), height()),
      color(0, 0, 0),
      opacity(0),
      z(200),
      fixed(),
    ])
  
    const box = add([
      rect(boxWidth, boxHeight, { radius: 12 }),
      pos(center().x - boxWidth / 2, center().y - boxHeight / 2),
      color(20, 20, 30),
      opacity(0),
      z(201),
      fixed(),
    ])
  
    const prompt = add([
      text(promptText, {
        size: 20,
        font: "ussr",
        width: boxWidth - 40,
        lineSpacing: 10,
      }),
      pos(center().x - boxWidth / 2 + 20, center().y - boxHeight / 2 + 30),
      color(WHITE),
      opacity(0),
      z(202),
      fixed(),
    ])
  
    const inputText = add([
      text("> ", { size: 28, font: "ussr" }),
      pos(center().x - boxWidth / 2 + 20, center().y - boxHeight / 2 + 160),
      color(rgb(200, 255, 200)),
      opacity(0),
      z(203),
      fixed(),
    ])
  
    tween(overlay.opacity, 0.5, 0.4, (val) => overlay.opacity = val)
    tween(box.opacity, 0.95, 0.4, (val) => box.opacity = val)
    tween(prompt.opacity, 1, 0.4, (val) => prompt.opacity = val)
    tween(inputText.opacity, 1, 0.6, (val) => inputText.opacity = val)
  
    const updateInput = () => {
      inputText.text = "> " + input
    }
  
    const cancelModal = () => {
      destroy(overlay)
      destroy(box)
      destroy(prompt)
      destroy(inputText)
      offKeyPress("enter")
      offKeyPress("backspace")
      offCharInput()
    }
  
    onCharInput((ch) => {
      if (input.length < 10) {
        input += ch
        updateInput()
      }
    })
  
    onKeyPress("backspace", () => {
      input = input.slice(0, -1)
      updateInput()
    })
  
    onKeyPress("enter", () => {
      if (input.toLowerCase() === correctCode.toLowerCase()) {
        cancelModal()
        play("codeSuccess", { volume: 0.4 })
        onSuccess()
      } else {
        play("error", { volume: 0.3 })
        input = ""
        updateInput()
      }
    })
  }
  
  
