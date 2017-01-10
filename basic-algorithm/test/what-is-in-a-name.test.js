var whatIsInAName = require('../what-is-in-a-name.js');
var expect = require('chai').use(require('chai-json-equal')).expect;

describe('Wherefore art thou', () => {
  it(
    'whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) should return [{ first: "Tybalt", last: "Capulet" }]',
    () => {
      expect(whatIsInAName([{
        first: "Romeo",
        last: "Montague"
      }, {
        first: "Mercutio",
        last: null
      }, {
        first: "Tybalt",
        last: "Capulet"
      }], {
        last: "Capulet"
      })).to.jsonEqual([{
        first: "Tybalt",
        last: "Capulet"
      }]);
    });
});
