var getIndexToIns = require('../get-index-to-ins.js');
var expect = require('chai').expect;

describe('Where do I belong', () => {
  it('getIndexToIns([10, 20, 30, 40, 50], 35) should return 3', () => {
    expect(getIndexToIns([10, 20, 30, 40, 50], 35)).to.equal(3);
  });
  it('getIndexToIns([10, 20, 30, 40, 50], 30) should return 2', () => {
    expect(getIndexToIns([10, 20, 30, 40, 50], 30)).to.equal(2);
  });
  it('getIndexToIns([3, 10, 5], 3) should return 0', () => {
    expect(getIndexToIns([3, 10, 5], 3)).to.equal(0);
  });
});
