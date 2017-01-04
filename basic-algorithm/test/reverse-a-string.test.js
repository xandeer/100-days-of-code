var reverseString = require('../reverse-a-string.js');
var expect = require('chai').expect;

describe('Reverse a string', function() {
  it('Reverse hello should be olleh', function() {
    expect(reverseString('hello')).to.be.equal('olleh');
  });
  it('Reverse world should be dlrow', function() {
    expect(reverseString('world')).to.be.equal('dlrow');
  });
});
