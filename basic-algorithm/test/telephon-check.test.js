const telephoneCheck = require('../telephon-check.js');
const chai = require('chai');
var expect = chai.expect;

describe('Validate US Telephone Numbers', () => {
  it('telephoneCheck("1 555)555-5555") should return false', () => {
    expect(telephoneCheck("1 555)555-5555")).to.equal(false);
  });
  it('telephoneCheck("1 555 555 5555") should return true', () => {
    expect(telephoneCheck("1 555 555 5555")).to.equal(true);
  });
  it('telephoneCheck("123**&!!asdf#") should return false', () => {
    expect(telephoneCheck("123**&!!asdf#")).to.equal(false);
  });
  it('telephoneCheck("27576227382") should return false', () => {
    expect(telephoneCheck("27576227382")).to.equal(false);
  });
  it('telephoneCheck("2(757)6227382") should return false', () => {
    expect(telephoneCheck("2(757)6227382")).to.equal(false);
  });
  it('telephoneCheck("1(555)555-5555") should return true', () => {
    expect(telephoneCheck("1(555)555-5555")).to.equal(true);
  });
});
