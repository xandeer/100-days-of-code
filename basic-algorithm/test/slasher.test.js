var slasher = require('../slasher.js');
var expect = require('chai').use(require('chai-arrays')).expect;

describe('Slasher Flick', () => {
  it('slasher([1, 2, 3], 2) should return [3]', () => {
    expect(slasher([1, 2, 3], 2)).to.equalTo([3]);
  });
  it('slasher([1, 2, 3], 0) should return [1, 2, 3]', () => {
    expect(slasher([1, 2, 3], 0)).to.equalTo([1, 2, 3]);
  });
  it('slasher([1, 2, 3], 4) should return []', () => {
    expect(slasher([1, 2, 3], 4)).to.equalTo([]);
  });
});
