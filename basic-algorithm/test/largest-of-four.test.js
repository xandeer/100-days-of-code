var largestOfFour = require('../largest-of-four.js');
var assertArray = require('chai-arrays');
var expect = require('chai').use(assertArray).expect;

describe('Return Largest Numbers in Arrays', function() {
  it(
    'largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27,5,39,1001]',
    function() {
      expect(largestOfFour([
        [13, 27, 18, 26],
        [4, 5, 1, 3],
        [32, 35, 37, 39],
        [1000, 1001, 857, 1]
      ])).to.equalTo([27, 5, 39, 1001]);
    });
  it(
    'largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) should return [9, 35, 97, 1000000]',
    function() {
      expect(largestOfFour([
        [4, 9, 1, 3],
        [13, 35, 18, 26],
        [32, 35, 97, 39],
        [1000000, 1001, 857, 1]
      ])).to.equalTo([9, 35, 97, 1000000]);
    });
});
