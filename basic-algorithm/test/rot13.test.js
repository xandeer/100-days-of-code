var rot13 = require('../rot13.js');
var expect = require('chai').expect;

describe('Caesars Cipher', () => {
  it('rot13("SERR PBQR PNZC") should decode to "FREE CODE CAMP"', () => {
    expect(rot13("SERR PBQR PNZC")).to.equal('FREE CODE CAMP');
  });
  it('rot13("SERR CVMMN!") should decode to "FREE PIZZA!"', () => {
    expect(rot13("SERR CVMMN!")).to.equal('FREE PIZZA!');
  });
  it('rot13("SERR YBIR?") should decode to "FREE LOVE?"', () => {
    expect(rot13("SERR YBIR?")).to.equal('FREE LOVE?');
  });
});
