const truthCheck = require('../truth-check.js');
const chai = require('chai');
const expect = chai.expect;

describe('Everything Be True', () => {
  it(
    'truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return true',
    () => {
      expect(truthCheck([{
        "user": "Tinky-Winky",
        "sex": "male"
      }, {
        "user": "Dipsy",
        "sex": "male"
      }, {
        "user": "Laa-Laa",
        "sex": "female"
      }, {
        "user": "Po",
        "sex": "female"
      }], "sex")).to.equal(true);
    });
  it(
    'truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return false',
    () => {
      expect(truthCheck([{
        "user": "Tinky-Winky",
        "sex": "male"
      }, {
        "user": "Dipsy"
      }, {
        "user": "Laa-Laa",
        "sex": "female"
      }, {
        "user": "Po",
        "sex": "female"
      }], "sex")).to.equal(false);
    });
  it(
    'truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat") should return false',
    () => {
      expect(truthCheck([{
        "name": "Pete",
        "onBoat": true
      }, {
        "name": "Repeat",
        "onBoat": true
      }, {
        "name": "FastFoward",
        "onBoat": null
      }], "onBoat")).to.equal(false);
    });
  it('truthCheck([{"single": "yes"}], "single") should return true', () => {
    expect(truthCheck([{
      "single": "yes"
    }], "single")).to.equal(true);
  });
  it(
    'truthCheck([{"single": ""}, {"single": "double"}], "single") should return false',
    () => {
      expect(truthCheck([{
        "single": ""
      }, {
        "single": "double"
      }], "single")).to.equal(false);
    });
});
