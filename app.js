// var levelSeed = 51748
var levelSeeds = [51748, 76294, 52836, 97264, 81537]
  , dimensions =
    {  width: 600
    ,  height: 400
    }

function generateCoordinates(levelSeed) {

  var totalPoints = Math.floor(levelSeed / 4000)
    , points = []
    , chaosPoints = getChaos(levelSeed, totalPoints * 2)

  // console.log('Generating ' + totalPoints + ' coordinates')
  // console.log('Generating chaos: ', chaosPoints)

  for (var i = 0; i < totalPoints; i++) {

      var point =
        { x: Math.floor(chaosPoints[i] * dimensions.width)
        , y: Math.floor(chaosPoints[i + 10] * dimensions.height)
        }

    points[i] = point
  }

  return points
}

function logisticMap(x) {
  return 4 * x * (1 - x)
}

function getChaos(seed, total) {

  var data = []
   , currentSeed = '0.' + seed

   // 100 iterations will provide adequate randomness
  for (var i = 0; i < 100 + total; i++) {
    currentSeed = logisticMap(currentSeed)
    data.push(currentSeed)
  }

  return data.splice(100, total)
}

var levels = []

levelSeeds.forEach(function(seed) {
  levels.push(generateCoordinates(seed))
})

console.log('payload', levels)

// console.log('payload', generateCoordinates(levelSeed))