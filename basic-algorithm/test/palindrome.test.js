var palindrome = require('../palindrome.js');
var expect = require('chai').expect;

describe('Check for palindrome', () => {
  it('palindrome("eye") should return true', () => {
    expect(palindrome('eye')).to.equal(true);
  });
  it('palindrome("_eye") should return true', () => {
    expect(palindrome('_eye')).to.equal(true);
  });
  it('palindrome("race car") should return true', () => {
    expect(palindrome('race car')).to.equal(true);
  });
  it('palindrome("not a palindrome") should return false', () => {
    expect(palindrome('not a palindrome')).to.equal(false);
  });
  it('palindrome("My age is 0, 0 si ega ym.") should return true', () => {
    expect(palindrome('My age is 0, 0 si ega ym.')).to.equal(true);
  });
  it('palindrome("1 eye for of 1 eye.") should return false', () => {
    expect(palindrome('1 eye for of 1 eye.')).to.equal(false);
  });
  it('palindrome("five|\_/|four") should return false', () => {
    expect(palindrome('five|\_/|four')).to.equal(false);
  });
});
