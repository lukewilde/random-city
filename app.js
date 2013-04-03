
function generateCoordinates(levelSeed) {

  var total = Math.floor(levelSeed / 4000)
    , points = []

  console.log('Generating ' + total + ' coordinates')

  for (var i = 0; i < total; i++) {

    var currentSeed = getNextPointSeed()
      , point =
        { x: 1
        , y: 2
        }

    points[i] = point
  }

  return points
}

function getNextPointSeed(currentSeed) {

}

var levelSeed = 51747

console.log(generateCoordinates(levelSeed))