var sumPrimes = require('../sum-primes.js');
var expect = require('chai').expect;

describe('Sum All Primes', () => {
  it('sumPrimes(10) should return 17', () => {
    expect(sumPrimes(10)).to.equal(17);
  });
  it('sumPrimes(977) should return 73156', () => {
    expect(sumPrimes(977)).to.equal(73156);
  });
});
