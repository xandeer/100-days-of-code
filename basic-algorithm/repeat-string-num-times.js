function repeatStringNumTimes(str, num) {
  var ret = '';

  if (!!str && num > 0) {
    for (var i = 0; i < num; i++) {
      ret += str;
    }
  }

  return ret;
}

module.exports = repeatStringNumTimes;
