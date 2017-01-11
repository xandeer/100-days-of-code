/**
 * Find the missing letter in the passed letter range and return it.
 * @param  {String} str All in lower case, and there is at most 1 missing.
 * @return {String|undefined}     The missing letter or undefined.
 */
function fearNotLetter(str) {
  var arr = str.split('');
  var last = arr[0];
  var noMissing = arr.slice(1).every(function(val) {
    if ((last.charCodeAt() + 1) != val.charCodeAt()) {
      return false;
    }
    last = val;
    return true;
  });

  if (noMissing) {
    return undefined;
  } else {
    return String.fromCharCode(last.charCodeAt() + 1);
  }
}

module.exports = fearNotLetter;
