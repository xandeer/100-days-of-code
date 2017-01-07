var bouncer = require('../bouncer.js');
var expect = require('chai').use(require('chai-arrays')).expect;

describe('Falsy Bouncer', () => {
  it('bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9]', () => {
    expect(bouncer([7, "ate", "", false, 9])).to.equalTo([7, 'ate', 9]);
  });
  it('bouncer(["a", "b", "c"]) should return ["a", "b", "c"]', () => {
    expect(bouncer(["a", "b", "c"])).to.equalTo(["a", "b", "c"]);
  });
  it('bouncer([false, null, 0, NaN, undefined, ""]) should return []', () => {
    expect(bouncer([false, null, 0, NaN, undefined, ""])).to.equalTo([]);
  });
});
