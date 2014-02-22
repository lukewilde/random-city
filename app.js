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

  var totalBuildings = Math.floor(citySeed / 4000)
    , building = []
    , chaosbuilding = getChaos(citySeed, totalbuilding * 2)

  console.log('Generating ' + totalbuilding + ' coordinates')
  console.log('Generating chaos: ', chaosbuilding)

  for (var i = 0; i < totalbuilding; i++) {

      var point =
        { x: Math.floor(chaosbuilding[i] * dimensions.width)
        , y: Math.floor(chaosbuilding[i + 10] * dimensions.height)
        }

    building[i] = point
  }

  return building
}

// buildingSeeds.forEach(function(seed) {
//   buildings.push(generateBuilding(seed))
// })

// console.log('payload', buildings)

context.fillRect(0, 0, canvasWidth, canvasHeight)
