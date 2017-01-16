const chai = require('chai');
const jsonEqual = require('chai-json-equal');
const expect = chai.use(jsonEqual).expect;
// Setup
var collection = {
  "2548": {
    "album": "Slippery When Wet",
    "artist": "Bon Jovi",
    "tracks": [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  "2468": {
    "album": "1999",
    "artist": "Prince",
    "tracks": [
      "1999",
      "Little Red Corvette"
    ]
  },
  "1245": {
    "artist": "Robert Palmer",
    "tracks": []
  },
  "5439": {
    "album": "ABBA Gold"
  }
};

const updateRecords = require('../update-records.js')(collection);

describe('Record Collection', () => {
  it('After updateRecords(5439, "artist", "ABBA"), artist should be "ABBA"',
    () => {
      expect(updateRecords(5439, "artist", "ABBA")).to.jsonEqual({
        "2548": {
          "album": "Slippery When Wet",
          "artist": "Bon Jovi",
          "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
          ]
        },
        "2468": {
          "album": "1999",
          "artist": "Prince",
          "tracks": [
            "1999",
            "Little Red Corvette"
          ]
        },
        "1245": {
          "artist": "Robert Palmer",
          "tracks": []
        },
        "5439": {
          "album": "ABBA Gold",
          "artist": "ABBA"
        }
      });
    });
});
