function myReplace(str, before, after) {
  if (!!before.match(/^[A-Z]/)) {
    after = after.replace(/^[a-z]/, after[0].toUpperCase());
  }
  str = str.replace(before, after);

  return str;
}

module.exports = myReplace;
