var booWho = require('../boo-who.js');
var expect = require('chai').expect;

describe('Check if a value is classified as a boolean primitive.', () => {
  it('booWho(true) should return true', () => {
    expect(booWho(true)).to.equal(true);
  });
  it('booWho(false) should return true', () => {
    expect(booWho(false)).to.equal(true);
  });
  it('booWho(1) should return false', () => {
    expect(booWho(1)).to.equal(false);
  });
  it('booWho([1,2,3]) should return false', () => {
    expect(booWho([1, 2, 3])).to.equal(false);
  });
  it('booWho({a: "1"}) should return false', () => {
    expect(booWho({
      a: '1'
    })).to.equal(false);
  });
  it('booWho(NaN) should return false', () => {
    expect(booWho(NaN)).to.equal(false);
  });
  it('booWho("true") should return false', () => {
    expect(booWho('true')).to.equal(false);
  });
  it('booWho("false") should return false', () => {
    expect(booWho('false')).to.equal(false);
  });
});
