function mutation(arr) {
  var first = arr[0].toLowerCase(),
    second = arr[1].toLowerCase();

  for (var i = 0; i < second.length; i++) {
    if (!~first.indexOf(second[i])) {
      return false;
    }
  }

  return true;
}

module.exports = mutation;
