function createRandomSequence(seed) {

  var self =
      { currentSeed: seed ? '0.' + seed : Math.random()
      , get: function() {
          return self.currentSeed = logisticMap(self.currentSeed)
        }
      }

  function logisticMap(x) {
    return 4 * x * (1 - x)
  }

  /**
   *
   */
  function primeChaos() {
    // 99 iterations will provide adequate randomness.
    for (var i = 0; i < 99; i++) {
      self.currentSeed = logisticMap(self.currentSeed)
    }
  }

  primeChaos()

  return self
}
