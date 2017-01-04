var findLongestWord = require('../find-longest-word.js');
var expect = require('chai').expect;

describe('Find the Longest Word in a String', () => {
  it(
    'findLongestWord("The quick brown fox jumped over the lazy dog") should return 6',
    () => {
      expect(findLongestWord(
        'The quick brown fox jumped over the lazy dog')).to.equal(6);
    });
  it(
    'findLongestWord("May the force be with you") should return 5',
    () => {
      expect(findLongestWord(
        'May the force be with you')).to.equal(5);
    });
  it(
    'findLongestWord("What is the average airspeed velocity of an unladen swallow") should return 8',
    () => {
      expect(findLongestWord(
        'What is the average airspeed velocity of an unladen swallow'
      )).to.equal(8);
    });
  it(
    'findLongestWord("What if we try a super-long word such as otorhinolaryngology") should return 19',
    () => {
      expect(findLongestWord(
        'What if we try a super-long word such as otorhinolaryngology'
      )).to.equal(19);
    });
});
