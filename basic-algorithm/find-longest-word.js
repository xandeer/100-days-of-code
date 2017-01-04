function findLongestWord(str) {
  var max = 0;

  str.split(' ').map(function(val) {
    return val.length;
  }).forEach(function(val) {
    max = max > val ? max : val;
  });
  return max;
}

module.exports = findLongestWord;
