function booWho(bool) {
  var ret = typeof bool == 'boolean' ?
    true : false;
  return ret;
}

module.exports = booWho;
