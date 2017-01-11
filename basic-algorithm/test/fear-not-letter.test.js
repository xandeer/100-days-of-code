var fearNotLetter = require('../fear-not-letter.js');
var expect = require('chai').expect;

describe('Missing letters', () => {
  it('fearNotLetter("abce") should return "d"', () => {
    expect(fearNotLetter("abce")).to.equal('d');
  });
  it('fearNotLetter("abcdefghjklmno") should return "i"', () => {
    expect(fearNotLetter("abcdefghjklmno")).to.equal('i');
  });
  it('fearNotLetter("bcd") should return undefined', () => {
    expect(fearNotLetter("bcd")).to.equal(undefined);
  });
  it('fearNotLetter("xyz") should return undefined', () => {
    expect(fearNotLetter("xyz")).to.equal(undefined);
  });
});
