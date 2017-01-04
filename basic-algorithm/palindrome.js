function palindrome(str) {
  var ret = false;
  var noSpaces = str.replace(/[\W_]/g, '').toLowerCase();
  ret = noSpaces.split('').reverse().join('') == noSpaces ? true : false;
  return ret;
}

module.exports = palindrome;
