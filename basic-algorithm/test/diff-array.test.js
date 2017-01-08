var diffArray = require('../diff-array.js');
var expect = require('chai').use(require('chai-arrays')).expect;

describe('Diff Two Arrays', () => {
  it(
    '[1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4]',
    () => {
      expect(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4])).to.equalTo(
        ["piglet", 4]);
    });
  it(
    '[1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"]',
    () => {
      expect(diffArray([1, "calf", 3, "piglet"], [7, "filly"])).to.equalTo(
        [1, "calf", 3, "piglet", 7, "filly"]);
    });
  it('[1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4]', () => {
    expect(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])).to.equalTo([4]);
  });
});
