function pairwise(arr, arg) {
  var copy = arr.slice(0);
  var sum = 0;

  for (var i = 0; i < copy.length; i++) {
    var rest = copy.slice(i + 1);
    for (var j = 0; j < rest.length; j++) {
      if (rest[j] + copy[i] === arg) {
        sum += i + (i + j + 1);
        copy[i + j + 1] = NaN;
        break;
      }
    }
  }

  return sum;
}

module.exports = pairwise;
