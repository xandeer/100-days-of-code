function telephoneCheck(str) {
  var pattern =
    /^((1)? ?)(([0-9]){3}|\(([0-9]){3}\))[ -]?([0-9]){3}[ -]?([0-9]){4}$/;
  return pattern.test(str);
}

module.exports = telephoneCheck;
