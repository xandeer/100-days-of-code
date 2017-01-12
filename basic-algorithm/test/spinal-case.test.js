var spinalCase = require('../spinal-case.js');
var expect = require('chai').expect;

describe('Spinal Tap Case', () => {
  it('spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap"',
    () => {
      expect(spinalCase("This Is Spinal Tap")).to.equal(
        "this-is-spinal-tap");
    });
  it('spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap"', () => {
    expect(spinalCase("thisIsSpinalTap")).to.equal("this-is-spinal-tap");
  });
  it(
    'spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show"',
    () => {
      expect(spinalCase("The_Andy_Griffith_Show")).to.equal(
        "the-andy-griffith-show");
    });
  it(
    'spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh"',
    () => {
      expect(spinalCase("Teletubbies say Eh-oh")).to.equal(
        "teletubbies-say-eh-oh");
    });
  it(
    'spinalCase("AllThe-small Things") should return "all-the-small-things"',
    () => {
      expect(spinalCase("AllThe-small Things")).to.equal(
        "all-the-small-things");
    });
});
