var titleCase = require('../title-case.js');
var expect = require('chai').expect;

describe('Title Case a Sentence', () => {
  it(
    'titleCase("I\'m a little tea pot") should return "I\'m A Little Tea Pot"',
    () => {
      expect(titleCase("I\'m a little tea pot")).to.equal(
        'I\'m A Little Tea Pot');
    });
  it('titleCase("sHoRt AnD sToUt") should return "Short And Stout"', () => {
    expect(titleCase("sHoRt AnD sToUt")).to.equal('Short And Stout');
  });
  it(
    'titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return "Here Is My Handle Here Is My Spout"',
    () => {
      expect(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")).to.equal(
        'Here Is My Handle Here Is My Spout');
    });
});
