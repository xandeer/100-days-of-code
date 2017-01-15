function binaryAgent(str) {
  function b2d(s) {
    var dec = 0;
    s.split('').reverse().forEach(function(val, index) {
      dec += val * Math.pow(2, index);
    });
    return dec;
  }

  return str.split(' ').map(function(val) {
    return String.fromCharCode(b2d(val));
  }).join('');
}

module.exports = binaryAgent;
