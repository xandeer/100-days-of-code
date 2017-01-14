function steamrollArray(arr) {
  var ret = [];

  var steamroll = function steamroll(n) {
    if (!Array.isArray(n)) {
      ret.push(n);
    } else {
      n.forEach(function(val) {
        steamroll(val);
      });
    }
  };

  steamroll(arr);

  return ret;
}

module.exports = steamrollArray;
