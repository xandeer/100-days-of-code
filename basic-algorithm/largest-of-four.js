function largestOfFour(arr) {
  var ret;
  var max = 0;
  ret = arr.map(function(val) {
    max = val[0];
    val.forEach(function(n) {
      max = max > n ? max : n;
    });
    return max;
  });
  return ret;
}

module.exports = largestOfFour;
