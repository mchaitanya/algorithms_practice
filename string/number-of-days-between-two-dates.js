// https://leetcode.com/problems/number-of-days-between-two-dates/
// tags - string, date
/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function (date1, date2) {
  function isLeap(year) {
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
  }

  // Get the days in the given month (value from 1 to 12)
  const HAVE_31 = new Set([1, 3, 5, 7, 8, 10, 12]);
  function getDaysMonth(month, isLeapYear) {
    if (month === 2) {
      return isLeapYear ? 29 : 28;
    } else if (HAVE_31.has(month)) {
      return 31;
    } else {
      return 30;
    }
  }

  // Count the number of days from 01-01-1971.
  function getDays(date) {
    let numDays = 0;
    for (let y = 1971; y < date.year; y++) {
      numDays += isLeap(y) ? 366 : 365;
    }

    let isLeapYear = isLeap(date.year);
    for (let m = 1; m < date.month; m++) {
      numDays += getDaysMonth(m, isLeapYear);
    }

    return numDays + date.day;
  }

  date1 = new MyDate(date1);
  date2 = new MyDate(date2);
  return Math.abs(getDays(date1) - getDays(date2));

  // const MILLIS_IN_DAY = 24 * 60 * 60 * 1000;
  // millis1 = Date.parse(date1);
  // millis2 = Date.parse(date2);
  // return Math.abs(millis1 - millis2) / MILLIS_IN_DAY;
};

class MyDate {
  constructor(str) {
    const [year, month, day] = str.split("-").map(Number);
    this.year = year;
    this.month = month;
    this.day = day;
  }
}
