function rot13(str) {
  var ret;
  ret = str.split('').map(function(val) {
    var charCode = val.charCodeAt();
    var rot = charCode + 13;
    if (charCode >= 65 && charCode <= 90) {
      return String.fromCharCode(rot > 90 ? rot - 26 : rot);
    } else if (charCode >= 97 && charCode <= 122) {
      return String.fromCharCode(rot > 122 ? rot - 26 : rot);
    } else {
      return val;
    }
  }).join('');
  return ret;
}

module.exports = rot13;
