function uniteUnique(arr) {
  var args = [];
  var ret = [];
  for (var i = 0; i < arguments.length; i++) {
    args[i] = arguments[i];
  }

  args = args.reduce(function(prev, cur) {
    return prev.concat(cur);
  });

  args.forEach(function(val) {
    var flag = true;
    for (var i = 0; i < ret.length; i++) {
      if (val === ret[i]) {
        flag = false;
      }
    }
    if (flag) {
      ret.push(val);
    }
  });

  return ret;
}

module.exports = uniteUnique;
