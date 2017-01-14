function findElement(arr, func) {
  return arr.filter(function(val) {
    return func(val);
  })[0];
}

module.exports = findElement;
