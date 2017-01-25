const makeFriendlyDates = require('../make-friendly-dates.js');
const expect = require('chai').use(require('chai-arrays')).expect;

describe('Friendly Date Ranges', () => {
  it(
    'makeFriendlyDates(["2016-12-01", "2018-02-03"]) should return ["December 1st, 2016","February 3rd, 2018"]',
    () => {
      expect(makeFriendlyDates(['2016-12-01', '2018-02-03'])).to.equalTo(
        ['December 1st, 2016', 'February 3rd, 2018']);
    });
  it(
    'makeFriendlyDates(["2017-03-01", "2017-05-05"]) should return ["March 1st, 2017","May 5th"]',
    () => {
      expect(makeFriendlyDates(['2017-03-01', '2017-05-05'])).to.equalTo(
        ['March 1st', 'May 5th']);
    });
  it(
    'makeFriendlyDates(["2018-01-13", "2018-01-13"]) should return ["January 13th, 2018"]',
    () => {
      expect(makeFriendlyDates(['2018-01-13', '2018-01-13'])).to.equalTo(
        ['January 13th, 2018']);
    });
  it(
    'makeFriendlyDates(["2022-09-05", "2023-09-04"]) should return ["September 5th, 2022","September 4th"]',
    () => {
      expect(makeFriendlyDates(['2022-09-05', '2023-09-04'])).to.equalTo(
        ['September 5th, 2022', 'September 4th']);
    });
  it(
    'makeFriendlyDates(["2022-09-05", "2023-09-05"]) should return ["September 5th, 2022","September 5th, 2023"]',
    () => {
      expect(makeFriendlyDates(['2022-09-05', '2023-09-05'])).to.equalTo(
        ['September 5th, 2022', 'September 5th, 2023']);
    });
});
