function sumAll(arr) {
  var min = Math.min(arr[0], arr[1]);
  var max = Math.max(arr[0], arr[1]);
  var range = [];
  for (var i = 0; i <= max - min; i++) {
    range[i] = min + i;
  }
  return range.reduce(function(prev, cur) {
    return prev + cur;
  });
}

module.exports = sumAll;
