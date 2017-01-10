var translatePigLatin = require('../translate-pig-latin.js');
var expect = require('chai').expect;

describe('Pig Latin', () => {
  it('translatePigLatin("california") should return "aliforniacay"', () => {
    expect(translatePigLatin("california")).to.equal('aliforniacay');
  });
  it('translatePigLatin("paragraphs") should return "aragraphspay"', () => {
    expect(translatePigLatin("paragraphs")).to.equal('aragraphspay');
  });
  it('translatePigLatin("algorithm") should return "algorithmway"', () => {
    expect(translatePigLatin("algorithm")).to.equal('algorithmway');
  });
});
