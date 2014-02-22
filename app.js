var canvas = document.getElementById("chillin-city")
  , context = canvas.getContext("2d")
  , width = canvas.width
  , height = canvas.height
  , buildings = []
  , cities = [51748, 76294, 52836, 97264, 81537]
  , city = cities[0]

function generateCity(citySeed) {

  var totalPoints = Math.floor(citySeed / 4000)
    , points = []
    , chaosPoints = getChaos(citySeed, totalPoints * 2)

  console.log('Generating ' + totalPoints + ' coordinates')
  console.log('Generating chaos: ', chaosPoints)

  for (var i = 0; i < totalPoints; i++) {

      var point =
        { x: Math.floor(chaosPoints[i] * dimensions.width)
        , y: Math.floor(chaosPoints[i + 10] * dimensions.height)
        }

    points[i] = point
  }

  return points
}

// buildingSeeds.forEach(function(seed) {
//   buildings.push(generateBuilding(seed))
// })

// console.log('payload', buildings)

context.fillRect(0, 0, width, height)
