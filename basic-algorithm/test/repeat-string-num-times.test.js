var repeatStringNumTimes = require('../repeat-string-num-times.js');
var expect = require('chai').expect;

describe('Repeat a String', function() {
  it('repeatStringNumTimes("abc", 3) should return "abcabcabc"', function() {
    expect(repeatStringNumTimes("abc", 3)).to.equal('abcabcabc');
  });
  it('repeatStringNumTimes("*", 3) should return "***"', function() {
    expect(repeatStringNumTimes("*", 3)).to.equal('***');
  });
  it('repeatStringNumTimes("abc", -3) should return ""', function() {
    expect(repeatStringNumTimes("abc", -3)).to.equal('');
  });
});
