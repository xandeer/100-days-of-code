function addTogether() {
  var isNumber = function(n) {
    return typeof n == 'number';
  };

  if (!isNumber(arguments[0])) {
    return undefined;
  }

  if (arguments.length == 2) {
    if (!isNumber(arguments[1])) {
      return undefined;
    }
    return arguments[0] + arguments[1];
  } else if (arguments.length == 1) {

    var a = arguments[0];
    return function(b) {
      if (!isNumber(b)) {
        return undefined;
      }
      return a + b;
    };
  }
}

module.exports = addTogether;
