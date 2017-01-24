var pairwise = require('../pairwise.js');
var expect = require('chai').expect;

describe('Pairwise', () => {
  it('pairwise([1, 4, 2, 3, 0, 5], 7) should return 11', () => {
    expect(pairwise([1, 4, 2, 3, 0, 5], 7)).to.equal(11);
  });
  it('pairwise([1, 3, 2, 4], 4) should return 1', () => {
    expect(pairwise([1, 3, 2, 4], 4)).to.equal(1);
  });
  it('pairwise([1, 1, 1], 2) should return 1', () => {
    expect(pairwise([1, 1, 1], 2)).to.equal(1);
  });
  it('pairwise([[0, 0, 0, 0, 1, 1], 1) should return 10', () => {
    expect(pairwise([0, 0, 0, 0, 1, 1], 1)).to.equal(10);
  });
  it('pairwise([], 100) should return 0', () => {
    expect(pairwise([], 100)).to.equal(0);
  });
});
