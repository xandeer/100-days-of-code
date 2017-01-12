function spinalCase(str) {
  var ret = str.replace(/ |[ _]?[A-Z]/g, function(match) {
    if (match !== ' ') {
      return '-' + match.replace(/[ _]/g, '').toLowerCase();
    }
    return '-';
  });

  ret = ret.replace(/^-/, '');
  ret = ret.replace(/--/g, '-');

  return ret;
}

module.exports = spinalCase;
