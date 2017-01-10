function whatIsInAName(collection, source) {
  var arr = [];
  var sk = Object.keys(source);
  var flag;
  var key;

  for (var i = 0; i < collection.length; i++) {
    flag = true;
    for (var j = 0; j < sk.length; j++) {
      key = sk[j];
      if (!collection[i].hasOwnProperty(key) || collection[i][key] !== source[
          key]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      arr.push(collection[i]);
    }
  }

  return arr;
}

module.exports = whatIsInAName;
