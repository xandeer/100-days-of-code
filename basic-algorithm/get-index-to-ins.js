function getIndexToIns(arr, num) {
  function compare(v1, v2) {
    if (v1 < v2) {
      return -1;
    } else if (v1 > v2) {
      return 1;
    } else {
      return 0;
    }
  }

  arr.push(num);
  arr.sort(compare);

  return arr.indexOf(num);
}

module.exports = getIndexToIns;
