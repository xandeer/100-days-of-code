function updateRecords(collection) {
  var collectionCopy = JSON.parse(JSON.stringify(collection));

  return function(id, prop, value) {
    var obj = collectionCopy[id.toString()];
    switch (true) {
      case obj.hasOwnProperty(prop) && value == '':
        delete obj[prop];
        break;
      case prop == 'tracks' && !obj.hasOwnProperty('tracks') && value !== '':
        obj[prop] = [];
        obj[prop].push(value);
        break;
      case prop == 'tracks' && obj.hasOwnProperty('tracks') && value !== '':
        obj[prop].push(value);
        break;
      case value !== '':
        obj[prop] = value;
        break;
      default:
    }
    return collectionCopy;
  };
}

module.exports = updateRecords;
