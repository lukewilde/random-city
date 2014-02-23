var  buildingRules =
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
    , firstBuildingOffset: 30
    , verticalOffset: { higher: 20, lower: 60}
    }

function generateCity(citySeed) {

  var buildings = []
    , randomSequence = new RandomSequence(citySeed)
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

    building.x = getRandomDistance(randomSequence, currentXOffset, lastBuildingWidth)

    lastBuildingHeight = building.height
    lastBuildingWidth = building.width

    currentXOffset += (building.x - currentXOffset) + building.width

    buildings.push(building)
  }

  console.log(buildings)

  return buildings
}

function getRandomDistance(randomSequence, currentXOffset, lastBuildingWidth) {

  var distance = currentXOffset + lastBuildingWidth;

  if (randomSequence.get() >= cityRules.gapRate) {
    distance += ~~getRandomBetween(randomSequence.get(), cityRules.density)
  }

  console.log('distance:', currentXOffset, distance)

  return distance
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

function drawBuildings(canvas, buildings) {

  var context = canvas.getContext('2d')
    , canvasWidth = canvas.width
    , canvasHeight = canvas.height

  // Draw background.
  context.fillRect(0, 0, canvasWidth, canvasHeight)

  // Set building colour.
  context.fillStyle = "rgb(200,0,0)";

  // Draw the bleeders.
  for (var i = 0; i < buildings.length; i++) {

    var building = buildings[i]
      , y = canvasHeight - building.height
      , x = building.x
      , width = building.width
      , height = building.height


    context.beginPath();
    context.rect(x, y, width, height)
    context.fillStyle = 'yellow';
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = 'black';
    context.stroke();
    context.closePath();
  };

}
