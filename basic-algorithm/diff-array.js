function diffArray(arr1, arr2) {
  var ret;
  var sum = arr1.concat(arr2);
  var interSection = sum.filter(function(val) {
    return (!~arr1.indexOf(val) && !~arr2.indexOf(val));
  });

  ret = sum.filter(function(val) {
    return !!~interSection.indexOf(val);
  });

  return ret;
}

module.exports = diffArray;
