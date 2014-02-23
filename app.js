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
    { numBuildings: { max: 60, min: 40 }
    , density: { max: 40, min: 10 }
    , gapRate: 1 / 5
    , heightModRate: 1 / 6
    , verticalOffset: { higher: 20, lower: 60}
    }

function generateCity(citySeed) {

  var buildings = []
    , randomSequence = new RandomSequence(citySeed)
    , numberOfBuildings = getNumberOfBuildings(randomSequence)

    , lastBuildingHeight = getRandomHeight(randomSequence)
    , lastBuildingX = 0

  console.log('Generating ' + numberOfBuildings + ' buildings')

  for (var i = 0; i < numberOfBuildings; i++) {

    var building =
      { height: getRandomHeight(randomSequence)
      , width: getRandomWidth(randomSequence)
      , x: getRandomDistance(randomSequence)
      }

    lastBuildingX = building.x + building.width
    lastBuildingHeight = building.height

    buildings.push(building)
  }

  console.log(buildings)

  return buildings
}

function getRandomDistance(randomSequence, lastBuildingX) {

  var distance = lastBuildingX;

  if (randomSequence.get() >= cityRules.gapRate) {
    return ~~getRandomBetween(randomSequence.get(), cityRules.density)
  } else {
    return distance
  }
}

function getRandomWidth(randomSequence) {
  return ~~getRandomBetween(randomSequence.get(), buildingRules.dimensions.width)
}

function getRandomHeight(randomSequence) {
  return ~~getRandomBetween(randomSequence.get(), buildingRules.dimensions.height)
}

function getNumberOfBuildings(randomSequence) {
  return ~~getRandomBetween(randomSequence.get(), cityRules.numBuildings)
}

function getRandomBetween(random, object) {
  return object.min + ((object.max - object.min) * random)
}

// buildingSeeds.forEach(function(seed) {
//   buildings.push(generateBuilding(seed))
// })

// console.log('payload', buildings)

context.fillRect(0, 0, canvasWidth, canvasHeight)
