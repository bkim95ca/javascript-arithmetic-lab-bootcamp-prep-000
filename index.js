function outerFunction() {
  var innerVariable = "I'm sort of a secret."

  return function innerScope() {
    var inaccessible = "nothing can touch me."
  }
}
