var uniteUnique = require('../unite-unique.js');
var expect = require('chai').use(require('chai-json-equal')).expect;

describe('Sorted Union', () => {
  it(
    'uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4]',
    () => {
      expect(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])).to.jsonEqual([
        1, 3, 2, 5, 4
      ]);
    });
  it(
    'uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]]',
    () => {
      expect(uniteUnique(
        [1, 3, 2], [1, [5]], [2, [4]]
      )).to.jsonEqual([1, 3, 2, [5],
        [4]
      ]);
    });
  it(
    'uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8]',
    () => {
      expect(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])).to
        .jsonEqual([1, 2, 3, 5, 4, 6, 7, 8]);
    });
});
