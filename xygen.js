var RandomSequence = function() {

  if (RandomSequence.prototype._singletonInstance) {
    return RandomSequence.prototype._singletonInstance;
  }

  RandomSequence.prototype._singletonInstance = this;

  this.getRandoms = function getRandoms(seed, total) {

    var data = []
     , currentSeed = '0.' + seed

     // 100 iterations will provide adequate randomness
    for (var i = 0; i < 100 + total; i++) {
      currentSeed = logisticMap(currentSeed)
      data.push(currentSeed)
    }

    return data.splice(100, total)
  }

  function logisticMap(x) {
    return 4 * x * (1 - x)
  }
}
