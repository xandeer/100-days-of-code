function smallestCommons(arr) {
  var leastCommonMultiple = function(a, b) {
    var cma = a;
    var cmb = b;
    var ia = 2;
    var ib = 2;
    while (cma !== cmb) {
      if (cma < cmb) {
        cma = a * ia++;
      } else {
        cmb = b * ib++;
      }
    }
    return cma;
  };

  var max = Math.max(arr[0], arr[1]);
  var min = arr[0] + arr[1] - max;
  var ret = min;

  for (var i = min; i <= max; i++) {
    ret = leastCommonMultiple(ret, i);
  }

  return ret;
}

module.exports = smallestCommons;
