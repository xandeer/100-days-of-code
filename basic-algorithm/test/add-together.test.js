const addTogether = require('../add-together.js');
const chai = require('chai');
const expect = chai.expect;

describe('Arguments Optional', () => {
  it('addTogether(2, 3) should return 5', () => {
    expect(addTogether(2, 3)).to.equal(5);
  });
  it('addTogether(2)(3) should return 5', () => {
    expect(addTogether(2)(3)).to.equal(5);
  });
  it('addTogether("http://bit.ly/IqT6zt") should return undefined', () => {
    expect(addTogether("http://bit.ly/IqT6zt")).to.equal(undefined);
  });
  it('addTogether(2, "3") should return undefined', () => {
    expect(addTogether(2, '3')).to.equal(undefined);
  });
  it('addTogether(2)([3]) should return undefined', () => {
    expect(addTogether(2)([3])).to.equal(undefined);
  });
});
