function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  var op = function(alt) {
    return Math.round(Math.pow(Math.pow((earthRadius + alt), 3) / GM, 1 / 2) *
      2 * Math.PI);
  };

  return arr.map((item) => {
    return {
      name: item.name,
      orbitalPeriod: op(item.avgAlt)
    };
  });
}

module.exports = orbitalPeriod;
