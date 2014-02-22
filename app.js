var canvas = document.getElementById('chillin-city')
  , context = canvas.getContext('2d')
  , canvasWidth = canvas.width
  , canvasHeight = canvas.height

  , buildingRules =
    { dimensions:
      { height: { max: 300, min: 20 }
      , width: { max: 40, min: 20 }
      }
    }

  , cityRules =
    { numberOfBuildings: { max: 1000, min: 800 }
    , density: 30
    , gapRate: 1 / 5
    , heightModRate: 1 / 6
    , verticalOffset: { higher: 20, lower: 60}
    }

function generateCity(citySeed) {

  var buildings = []
    , randomSequence = getRandoms(citySeed, 101)
    , numberOfBuildings = randomSequence.shift()

  console.log('Generating ' + numberOfBuildings + ' coordinates')

  // for (var i = 0; i < totalbuilding; i++) {

  //     var point =
  //       { x: Math.floor(randomSequence[i] * dimensions.width)
  //       , y: Math.floor(randomSequence[i + 10] * dimensions.height)
  //       }

  //   building[i] = point
  // }

  return buildings
}

// buildingSeeds.forEach(function(seed) {
//   buildings.push(generateBuilding(seed))
// })

// console.log('payload', buildings)

context.fillRect(0, 0, canvasWidth, canvasHeight)
