var sumFibs = require('../sum-fibs.js');
var expect = require('chai').expect;

describe('Sum All Odd Fibonacci Numbers', () => {
  it('sumFibs(4) should return 5', () => {
    expect(sumFibs(4)).to.equal(5);
  });
  it('sumFibs(1000) should return 1785', () => {
    expect(sumFibs(1000)).to.equal(1785);
  });
  it('sumFibs(75024) should return 60696', () => {
    expect(sumFibs(75024)).to.equal(60696);
  });
  it('sumFibs(4000000) should return 4613732', () => {
    expect(sumFibs(4000000)).to.equal(4613732);
  });
});
