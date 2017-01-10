var myReplace = require('../my-replace.js');
var expect = require('chai').expect;

describe('Search and Replace', () => {
  it(
    'myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall"',
    () => {
      expect(myReplace("Let us go to the store", "store", "mall")).to.equal(
        'Let us go to the mall');
    });
  it(
    'myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return "He is Sitting on the couch"',
    () => {
      expect(myReplace("He is Sleeping on the couch", "Sleeping",
        "sitting")).to.equal('He is Sitting on the couch');
    });
});
