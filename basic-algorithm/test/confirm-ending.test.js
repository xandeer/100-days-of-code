var confirmEnding = require('../confirm-ending.js');
var expect = require('chai').expect;

describe('Confirm the Ending', function() {
  it('confirmEnding("Connor", "n") should return false', function() {
    expect(confirmEnding("Connor", "n")).to.equal(false);
  });
  it(
    'confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false',
    function() {
      expect(confirmEnding(
        "Walking on water and developing software from a specification are easy if both are frozen",
        "specification")).to.equal(false);
    });
  it('confirmEnding("Open sesame", "same")) should return true', function() {
    expect(confirmEnding("Open sesame", "same")).to.equal(true);
  });
});
