function titleCase(str) {

  return str.toLowerCase()
    .split(' ')
    .map((val) => {
      return val.replace(/^([a-z])/, val[0].toUpperCase());
    })
    .join(' ');
}

module.exports = titleCase;
