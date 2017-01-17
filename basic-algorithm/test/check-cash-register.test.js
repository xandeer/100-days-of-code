const checkCashRegister = require('../check-cash-register.js');
const chai = require('chai');
const jsonExpect = chai.use(require('chai-json-equal')).expect;
const expect = chai.expect;

describe('Exact Change', () => {
  it(
    'checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return "Insufficient Funds"',
    () => {
      expect(checkCashRegister(19.50, 20.00, [
        ["PENNY", 0.01],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 1.00],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0]
      ])).to.equal("Insufficient Funds");
    });
  it(
    'checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return "Closed"',
    () => {
      expect(checkCashRegister(19.50, 20.00, [
        ["PENNY", 0.50],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 0],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0]
      ])).to.equal('Closed');
    });
  it(
    'checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) should return [["QUARTER", 0.50]]',
    () => {
      jsonExpect(checkCashRegister(19.50, 20.00, [
        ["PENNY", 1.01],
        ["NICKEL", 2.05],
        ["DIME", 3.10],
        ["QUARTER", 4.25],
        ["ONE", 90.00],
        ["FIVE", 55.00],
        ["TEN", 20.00],
        ["TWENTY", 60.00],
        ["ONE HUNDRED", 100.00]
      ])).to.jsonEqual([
        ["QUARTER", 0.50]
      ]);
    });
  it(
    'checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]]',
    () => {
      jsonExpect(checkCashRegister(3.26, 100.00, [
        ["PENNY", 1.01],
        ["NICKEL", 2.05],
        ["DIME", 3.10],
        ["QUARTER", 4.25],
        ["ONE", 90.00],
        ["FIVE", 55.00],
        ["TEN", 20.00],
        ["TWENTY", 60.00],
        ["ONE HUNDRED", 100.00]
      ])).to.jsonEqual([
        ["TWENTY", 60.00],
        ["TEN", 20.00],
        ["FIVE", 15.00],
        ["ONE", 1.00],
        ["QUARTER", 0.50],
        ["DIME", 0.20],
        ["PENNY", 0.04]
      ]);
    });
});
