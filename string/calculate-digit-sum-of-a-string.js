// https://leetcode.com/problems/calculate-digit-sum-of-a-string/
// tags - string
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function (s, k) {
  while (s.length > k) {
    let next = "";
    for (let i = 0, count = 0, digitSum = 0; i < s.length; i++) {
      count++;
      digitSum += Number(s[i]);
      if (count === k || i === s.length - 1) {
        next += String(digitSum);
        digitSum = 0;
        count = 0;
      }
    }
    s = next;
  }
  return s;
};
