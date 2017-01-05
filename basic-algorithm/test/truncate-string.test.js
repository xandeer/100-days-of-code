var truncateString = require('../truncate-string.js');
var expect = require('chai').expect;

describe('Truncate a String', function() {
  it(
    'truncateString("Peter Piper picked a peck of pickled peppers", 14) should return "Peter Piper..."',
    function() {
      expect(truncateString("Peter Piper picked a peck of pickled pepers",
        14)).to.equal('Peter Piper...');
    });
  it(
    'truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return "A-tisket a-tasket A green and yellow basket"',
    function() {
      expect(truncateString("A-tisket a-tasket A green and yellow basket",
        "A-tisket a-tasket A green and yellow basket".length)).to.equal(
        'A-tisket a-tasket A green and yellow basket');
    });
  it('truncateString("Absolutely Longer", 2) should return "Ab..."',
    function() {
      expect(truncateString("Absolutely Longer", 2)).to.equal('Ab...');
    });
});
