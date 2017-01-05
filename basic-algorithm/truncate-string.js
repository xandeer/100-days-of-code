function truncateString(str, num) {
  var ret = '';

  if (str.length <= num) {
    ret = str;
  } else {
    num = num > 3 ? num - 3 : num;
    ret = str.slice(0, num) + '...';
  }
  return ret;
}

module.exports = truncateString;
