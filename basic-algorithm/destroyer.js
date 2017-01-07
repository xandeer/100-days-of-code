function destroyer(arr) {
  var rest = Array.prototype.slice.call(arguments, 1);
  rest.forEach(function(left) {
    arr = arr.filter(function(right) {
      return left !== right;
    });
  });
  return arr;
}

module.exports = destroyer;
