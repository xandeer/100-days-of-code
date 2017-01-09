function convertToRoman(num) {
  var ROMAN5 = ['V', 'L', 'D'];
  var ROMAN10 = ['I', 'X', 'C', 'M'];

  var arr = (num + '').split('');
  var ret = [];
  var val = '';

  function render(len) {
    if (arr[0] < 4) {
      val = '';
      for (var i = 0; i < arr[0]; i++) {
        val += ROMAN10[len - 1];
      }
    } else if (arr[0] == 4) {
      val = ROMAN10[len - 1] + ROMAN5[len - 1];
    } else if (arr[0] == 5) {
      val = ROMAN5[len - 1];
    } else if (arr[0] < 9) {
      val = ROMAN5[len - 1];
      for (var i = 0; i < arr[0] - 5; i++) {
        val += ROMAN10[len - 1];
      }
    } else if (arr[0] == 9) {
      val = ROMAN10[len - 1] + ROMAN10[len];
    }
    ret.push(val);
    arr.shift();
  }

  while (!!arr.length) {
    render(arr.length);
  }

  return ret.join('');
}

module.exports = convertToRoman;
