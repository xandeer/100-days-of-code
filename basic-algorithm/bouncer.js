function bouncer(arr) {
  var ret = [];

  ret = arr.filter(function(val) {
    return !!val;
  });

  return ret;
}

module.exports = bouncer;
