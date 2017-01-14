var dropElements = require('../drop-elements.js');
var expect = require('chai').use(require('chai-arrays')).expect;

describe('Drop it', () => {
  it(
    'dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4]',
    () => {
      expect(dropElements([1, 2, 3, 4], function(n) {
        return n >= 3;
      })).to.equalTo([3, 4]);
    });
  it(
    'dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1]',
    () => {
      expect(dropElements([0, 1, 0, 1], function(n) {
        return n === 1;
      })).to.equalTo([1, 0, 1]);
    });
  it(
    'dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3]',
    () => {
      expect(dropElements([1, 2, 3], function(n) {
        return n > 0;
      })).to.equalTo([1, 2, 3]);
    });
  it(
    'dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return []',
    () => {
      expect(dropElements([1, 2, 3, 4], function(n) {
        return n > 5;
      })).to.equalTo([]);
    });
  it(
    'dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) should return [7, 4]',
    () => {
      expect(dropElements([1, 2, 3, 7, 4], function(n) {
        return n > 3;
      })).to.equalTo([7, 4]);
    });
});
