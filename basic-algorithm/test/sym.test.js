const sym = require('../sym.js');
const chai = require('chai');
const arrays = require('chai-arrays');
const expect = chai.use(arrays).expect;

describe('Symmetric Difference', () => {
  it(
    'sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should return [1, 4, 5]',
    () => {
      expect(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])).to.containingAllOf(
        [1,
          4, 5
        ]);
      expect(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])).to.ofSize(3);
    });
  it(
    'sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should return [2, 3, 4, 6, 7]',
    () => {
      expect(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]))
        .to.containingAllOf([2, 3, 4, 6, 7]);
      expect(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]))
        .to.ofSize(5);
    });
  it(
    'sym([1, 2, 3], [5, 2, 1, 4]) should return [3, 4, 5]',
    () => {
      expect(sym([1, 2, 3], [5, 2, 1, 4])).to.containingAllOf([3,
        4, 5
      ]);
      expect(sym([1, 2, 3], [5, 2, 1, 4])).to.ofSize(3);
    });
});
