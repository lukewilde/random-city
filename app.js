var levelSeed = 51748

function generateCoordinates(levelSeed) {

  var totalPoints = Math.floor(levelSeed / 4000)
    , points = []
    , chaos = getChaos(levelSeed, totalPoints)

  console.log('Generating ' + totalPoints + ' coordinates')

  console.log('Generating chaos: ', chaos)
  // get chaos array.


  // for (var i = 0; i < totalPoints; i++) {

  //   var currentSeed = getNextPointSeed()
  //     , point =
  //       { x: 1
  //       , y: 2
  //       }

  //   points[i] = point
  // }

  return points
}

function getNextPointSeed(currentSeed) {
  var string = '' + currentSeed
  return string
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

console.log('payload', generateCoordinates(levelSeed))