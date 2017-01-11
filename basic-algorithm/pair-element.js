function pairElement(str) {
  var PAIRS = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C'
  };
  var ret;

  ret = str.split('').map(function(val) {
    var arr = [];
    arr.push(val);
    arr.push(PAIRS[val]);
    return arr;
  });

  return ret;
}

module.exports = pairElement;
