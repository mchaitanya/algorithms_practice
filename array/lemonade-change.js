// https://leetcode.com/problems/lemonade-change/
// tags - array
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let num5s = 0,
    num10s = 0;
  for (const bill of bills) {
    if (bill === 5) {
      num5s++;
    } else if (bill === 10) {
      if (num5s === 0) return false;
      num10s++;
      num5s--;
    } else {
      // bill === 20
      if (num10s > 0) {
        if (num5s === 0) return false;
        num10s--;
        num5s--;
      } else {
        if (num5s < 3) return false;
        num5s -= 3;
      }
    }
  }
  return true;
};
