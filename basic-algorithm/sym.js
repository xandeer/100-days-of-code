function sym() {
  var getDiff = function(a1, a2) {
    var sum = a1.concat(a2);
    var intersection = sum.filter((item) => {
      return (-1 != a1.indexOf(item) && -1 != a2.indexOf(item));
    });

    return sum.filter((item) => {
      return (-1 == intersection.indexOf(item));
    });
  };

  var diff = Array.prototype.reduce.call(arguments, getDiff);

  var newArr = [];
  diff.forEach((item) => {
    if (newArr.indexOf(item) == -1) {
      newArr.push(item);
    }
  });

  return newArr;
}

module.exports = sym;
