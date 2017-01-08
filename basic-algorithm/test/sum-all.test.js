var sumAll = require('../sum-all.js');
var expect = require('chai').expect;

describe('Sum All Numbers in a Range', () => {
  it('sumAll([1, 4]) should return 10', () => {
    expect(sumAll([1, 4])).to.equal(10);
  });
  it('sumAll([4, 1]) should return 10', () => {
    expect(sumAll([4, 1])).to.equal(10);
  });
  it('sumAll([1, 4]) should return 45', () => {
    expect(sumAll([10, 5])).to.equal(45);
  });
});
