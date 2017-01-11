var pairElement = require('../pair-element.js');
var expect = require('chai').use(require('chai-json-equal')).expect;

describe('DNA Pairing', () => {
  it(
    'pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]',
    () => {
      expect(pairElement("ATCGA")).to.jsonEqual([
        ["A", "T"],
        ["T", "A"],
        ["C", "G"],
        ["G", "C"],
        ["A", "T"]
      ]);
    });
  it(
    'pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]',
    () => {
      expect(pairElement("TTGAG")).to.jsonEqual([
        ["T", "A"],
        ["T", "A"],
        ["G", "C"],
        ["A", "T"],
        ["G", "C"]
      ]);
    });
  it(
    'pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]',
    () => {
      expect(pairElement("CTCTA")).to.jsonEqual([
        ["C", "G"],
        ["T", "A"],
        ["C", "G"],
        ["T", "A"],
        ["A", "T"]
      ]);
    });
});
