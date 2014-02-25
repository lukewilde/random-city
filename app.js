var  buildingRules =
    { dimensions:
      { height: { max: 300, min: 200 }
      , width: { max: 420, min: 120 }
      }
    }

  , cityRules =
    { numBuildings: { max: 40, min: 20 }
    , gap: { max: 800, min: 50, rate: 1 / 5 }
    , heightDelta:
      { up: {min: 10, max: 100, rate: 1 / 6}
      , down: {min: 10, max: 400, rate: 1 / 6}
      }
    , firstBuildingOffset: 30
    }

function generateCity(citySeed) {

  var buildings = []
    , randomSequence = createRandomSequence(citySeed)
    , numberOfBuildings = getNumberOfBuildings(randomSequence)

    , lastBuildingHeight = getRandomHeight(randomSequence)
    , lastBuildingWidth = 0

    , currentXOffset = cityRules.firstBuildingOffset

  console.log('Generating ' + numberOfBuildings + ' buildings')

  for (var i = 0; i < numberOfBuildings; i++) {

    var building =
      { height: getRandomHeight(randomSequence)
      , width: getRandomWidth(randomSequence)
      }

    building.x = getRandomDistance(randomSequence, cityRules.gap, currentXOffset)

    lastBuildingHeight = building.height
    lastBuildingWidth = building.width

    currentXOffset += (building.x - currentXOffset) + building.width

    buildings.push(building)
  }

  console.log(buildings)

  return buildings
}

function getRandomDistance(randomSequence, object, currentXOffset) {

  var distance = currentXOffset
    , result = randomRangeByRate(randomSequence, object)

    console.log(result, object)

  if (result) {
    return distance += result
  }

  return currentXOffset
}

function randomRangeByRate(randomSequence, object) {

  if (randomSequence.get() <= object.rate) {
    return randomRange(randomSequence.get(), object)
  }

  return false;
}

function getRandomWidth(randomSequence) {
  return randomRange(randomSequence.get(), buildingRules.dimensions.width)
}

function getRandomHeight(randomSequence) {
  return randomRange(randomSequence.get(), buildingRules.dimensions.height)
}

function getNumberOfBuildings(randomSequence) {
  return randomRange(randomSequence.get(), cityRules.numBuildings)
}

function randomRange(random, object) {
  return Math.floor(object.min + ((object.max - object.min) * random))
}

function drawBuildings(canvas, buildings) {

  var context = canvas.getContext('2d')
    , canvasWidth = canvas.width
    , canvasHeight = canvas.height

  // Draw background.
  context.fillRect(0, 0, canvasWidth, canvasHeight)

  // Draw the bleeders.
  for (var i = 0; i < buildings.length; i++) {

    var building = buildings[i]
      , y = canvasHeight - building.height
      , x = building.x
      , width = building.width
      , height = building.height

    context.beginPath()
    context.rect(x, y, width, height)
    context.fillStyle = 'yellow'

    if (i === buildings.length -1) {
      context.fillStyle = 'red'
    }

    context.fill()
    context.lineWidth = 2
    context.strokeStyle = 'black'

    context.stroke()
    context.closePath()
  }
}
