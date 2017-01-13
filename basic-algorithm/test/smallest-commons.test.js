var smallestCommons = require('../smallest-commons.js');
var expect = require('chai').expect;

describe('Smallest Common Multiple', () => {
  it('smallestCommons([1, 5]) should return 60', () => {
    expect(smallestCommons([1, 5])).to.equal(60);
  });
  it('smallestCommons([5, 1]) should return 60', () => {
    expect(smallestCommons([5, 1])).to.equal(60);
  });
  it('smallestCommons([1, 13]) should return 360360', () => {
    expect(smallestCommons([1, 13])).to.equal(360360);
  });
  it('smallestCommons([23, 18]) should return 6056820', () => {
    expect(smallestCommons([23, 18])).to.equal(6056820);
  });
});
