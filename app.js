var canvas = document.getElementById("chillin-city")
  , context = canvas.getContext("2d")
  , canvasWidth = canvas.width
  , canvasHeight = canvas.height

  , citySeed = 51748

  , buildingRules:
    { dimensions:
      { height: { max: 300, min: 20 }
      , width: { max: 40, min: 20 }
      }
    }

  , cityRules:
    { density: 30
    , gapRate: 1 / 5
    , heightModRate:: 1 / 6
    , verticalOffset: { higher: 20, lower: 60}
    }

  , buildings = []

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
