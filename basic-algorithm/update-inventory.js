function updateInventory(arr1, arr2) {
  var trim = (arr) => {
    return arr.filter((item) => {
      if (item.length === 0) {
        return false;
      }
      return true;
    });
  };

  arr1 = trim(arr1);
  arr2 = trim(arr2);

  arr2.forEach((item) => {
    var name = item[1];
    var oldItem = [];
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i][1] == name) {
        oldItem = arr1[i];
      }
    }
    if (oldItem.length === 0) {
      arr1.push(item);
    } else {
      oldItem[0] += item[0];
    }
  });

  arr1.sort((item1, item2) => {
    if (item1[1] < item2[1]) {
      return -1;
    } else if (item1[1] > item2[1]) {
      return 1;
    } else {
      return 0;
    }
  });

  return arr1;
}

module.exports = updateInventory;
