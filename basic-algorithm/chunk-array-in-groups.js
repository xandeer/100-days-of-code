function chunkArrayInGroups(arr, size) {
  var ret = [];
  for (var i = 0; i < arr.length; i += size) {
    ret.push(arr.slice(i, i + size));
  }
  return ret;
}

module.exports = chunkArrayInGroups;
