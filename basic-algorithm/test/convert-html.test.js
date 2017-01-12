var convertHTML = require('../convert-html.js');
var expect = require('chai').expect;

describe('Convert HTML Entities', () => {
  it('convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana', () => {
    expect(convertHTML("Dolce & Gabbana")).to.equal(
      'Dolce &​amp; Gabbana');
  });
  it(
    'convertHTML("Hamburgers < Pizza < Tacos") should return  Hamburgers &​lt; Pizza &​lt; Tacos',
    () => {
      expect(convertHTML("Hamburgers < Pizza < Tacos")).to.equal(
        'Hamburgers &​lt; Pizza &​lt; Tacos');
    });
  it('convertHTML("Sixty > twelve") should return Sixty &​gt; twelve', () => {
    expect(convertHTML("Sixty > twelve")).to.equal('Sixty &​gt; twelve');
  });
  it('convertHTML("Shindler\'s List") should return Shindler&​apos;s List',
    () => {
      expect(convertHTML("Shindler's List")).to.equal(
        'Shindler&​apos;s List');
    });
});
