var steamrollArray = require('../steamroll-array.js');
var expect = require('chai').use(require('chai-json-equal')).expect;

describe('Steamroll', () => {
  it('steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"]', () => {
    expect(steamrollArray([
      [
        ["a"]
      ],
      [
        ["b"]
      ]
    ])).to.jsonEqual(['a', 'b']);
  });
  it('steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4]', () => {
    expect(steamrollArray([1, [2],
      [3, [
        [4]
      ]]
    ])).to.jsonEqual([1, 2, 3, 4]);
  });
  it('steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4]', () => {
    expect(steamrollArray([1, [],
      [3, [
        [4]
      ]]
    ])).to.jsonEqual([1, 3, 4]);
  });
  it('steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4]', () => {
    expect(steamrollArray([1, {},
      [3, [
        [4]
      ]]
    ])).to.jsonEqual([1, {}, 3, 4]);
  });
});
