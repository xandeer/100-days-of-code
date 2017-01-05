function confirmEnding(str, target) {

  return str.lastIndexOf(target) === str.length - target.length;
}

module.exports = confirmEnding;
