var convertToRoman = require('../convert-to-roman.js');
var expect = require('chai').expect;

describe('Convert a given number into a Roman number', () => {
  it('convertToRoman(2) should return "II"', () => {
    expect(convertToRoman(2)).to.equal('II');
  });
  it('convertToRoman(4) should return "IV"', () => {
    expect(convertToRoman(4)).to.equal('IV');
  });
  it('convertToRoman(5) should return "V"', () => {
    expect(convertToRoman(5)).to.equal('V');
  });
  it('convertToRoman(9) should return "IX"', () => {
    expect(convertToRoman(9)).to.equal('IX');
  });
  it('convertToRoman(12) should return "XII"', () => {
    expect(convertToRoman(12)).to.equal('XII');
  });
  it('convertToRoman(45) should return "XLV"', () => {
    expect(convertToRoman(45)).to.equal('XLV');
  });
});
