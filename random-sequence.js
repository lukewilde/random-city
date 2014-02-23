var RandomSequence = function(seed) {

  this.seed = seed

  var currentSeed = null

  this.get = function() {
    currentSeed = logisticMap(currentSeed)
    return currentSeed
  }

  function logisticMap(x) {
    return 4 * x * (1 - x)
  }

  /**
   *
   */
  function primeChaos() {
    currentSeed = '0.' + seed

    // 100 iterations will provide adequate randomness
    for (var i = 0; i < 100; i++) {
      currentSeed = logisticMap(currentSeed)
    }
  }

  primeChaos()
}
