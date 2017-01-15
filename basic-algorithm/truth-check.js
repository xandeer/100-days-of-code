function truthCheck(collection, pre) {
  return collection.every(function(obj) {
    if (!!obj[pre]) {
      return true;
    } else {
      return false;
    }
  });
}

module.exports = truthCheck;
