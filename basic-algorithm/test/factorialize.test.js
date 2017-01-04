var factorialize = require('../factorialize.js');
var expect = require('chai').expect;

describe('Factorialize a Number', () => {
  it('factorialize(0) should return 1', () => {
    expect(factorialize(0)).to.equal(1);
  });
  it('factorialize(5) should return 120', () => {
    expect(factorialize(5)).to.equal(120);
  });
  it('factorialize(10) should return 3628800', () => {
    expect(factorialize(10)).to.equal(3628800);
  });
  it('factorialize(20) should return 2432902008176640000', () => {
    expect(factorialize(20)).to.equal(2432902008176640000);
  });
});
