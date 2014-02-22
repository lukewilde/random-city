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
    { Numbuildings: { max: 60, min: 40 }
    , density: 30
    , gapRate: 1 / 5
    , heightModRate: 1 / 6
    , verticalOffset: { higher: 20, lower: 60}
    }

function generateCity(citySeed) {

  var buildings = []
    , randomSequence = new RandomSequence(citySeed)
    , numberOfBuildings = getNumberOfBuildings(randomSequence)

  console.log('Generating ' + numberOfBuildings + ' buildings')

  for (var i = 0; i < numberOfBuildings; i++) {

    // var building =
    //   { height:
    //   , width:
    //   , x:
    //   }

    // building[i] = building
  }

  return buildings
}

function getNumberOfBuildings(randomSequence) {
  return ~~getRandomBetween(randomSequence.get(), cityRules.Numbuildings.min, cityRules.Numbuildings.max)
}

function getRandomBetween(random, min, max) {
  return min + ((max - min) * random)
}

// buildingSeeds.forEach(function(seed) {
//   buildings.push(generateBuilding(seed))
// })

// console.log('payload', buildings)

context.fillRect(0, 0, canvasWidth, canvasHeight)
