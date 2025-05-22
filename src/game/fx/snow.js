window.addSnow = function () {


loop(0.1, () => {
    add([
      rect(2, 2),
      pos(rand(0, width()), -10),
      color(255, 255, 255),
      opacity(0.2),
      move(DOWN, rand(10, 30)),
      lifespan(rand(4, 6)),
      fixed(),
      z(5),
    ])
  })

}