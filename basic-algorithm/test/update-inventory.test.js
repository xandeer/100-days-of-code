const updateInventory = require('../update-inventory.js');
const expect = require('chai').use(require('chai-json-equal')).expect;

describe('Inventory Update', () => {
  it(
    'updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) should return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]',
    () => {
      expect(updateInventory([
        [21, "Bowling Ball"],
        [2, "Dirty Sock"],
        [1, "Hair Pin"],
        [5, "Microphone"]
      ], [
        [2, "Hair Pin"],
        [3, "Half-Eaten Apple"],
        [67, "Bowling Ball"],
        [7, "Toothpaste"]
      ])).to.jsonEqual([
        [88, "Bowling Ball"],
        [2, "Dirty Sock"],
        [3, "Hair Pin"],
        [3, "Half-Eaten Apple"],
        [5, "Microphone"],
        [7, "Toothpaste"]
      ]);
    });
  it(
    'updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []) should return [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]]',
    () => {
      expect(updateInventory([
        [21, "Bowling Ball"],
        [2, "Dirty Sock"],
        [1, "Hair Pin"],
        [5, "Microphone"]
      ], [])).to.jsonEqual([
        [21, "Bowling Ball"],
        [2, "Dirty Sock"],
        [1, "Hair Pin"],
        [5, "Microphone"]
      ]);
    });
  it(
    'updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) should return [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]]',
    () => {
      expect(updateInventory([], [
        [2, "Hair Pin"],
        [3, "Half-Eaten Apple"],
        [67, "Bowling Ball"],
        [7, "Toothpaste"]
      ])).to.jsonEqual([
        [67, "Bowling Ball"],
        [2, "Hair Pin"],
        [3, "Half-Eaten Apple"],
        [7, "Toothpaste"]
      ]);
    });
});
