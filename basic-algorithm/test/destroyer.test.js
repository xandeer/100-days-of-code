var destroyer = require('../destroyer.js');
var expect = require('chai').use(require('chai-arrays')).expect;

describe('Seek and Destroy', () => {
  it('destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1]', () => {
    expect(destroyer([1, 2, 3, 1, 2, 3], 2, 3)).to.equalTo([1, 1]);
  });
  it('destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1]', () => {
    expect(destroyer([3, 5, 1, 2, 2], 2, 3, 5)).to.equalTo([1]);
  });
  it('destroyer([2, 3, 2, 3], 2, 3) should return []', () => {
    expect(destroyer([2, 3, 2, 3], 2, 3)).to.equalTo([]);
  });
});
