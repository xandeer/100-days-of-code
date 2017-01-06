var mutation = require('../mutation.js');
var expect = require('chai').expect;

describe('Mutataions', () => {
  it('mutation(["hello", "hey"]) should return false', () => {
    expect(mutation(["hello", "hey"])).to.equal(false);
  });
  it('mutation(["hello", "Hello"]) should return true', () => {
    expect(mutation(["hello", "Hello"])).to.equal(true);
  });
  it('mutation(["floor", "for"]) should return true', () => {
    expect(mutation(["floor", "for"])).to.equal(true);
  });
});
