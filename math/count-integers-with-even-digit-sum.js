// https://leetcode.com/problems/count-integers-with-even-digit-sum/
// tags - math
/**
 * @param {number} num
 * @return {number}
 */
var countEven = function (num) {
  let count = 0;
  for (let i = 1, digitSum = 1; i <= num; i++) {
    if (digitSum % 2 === 0) count++;
    digitSum++;
    if (i % 1000 === 999) {
      digitSum -= 27;
    } else if (i % 100 === 99) {
      digitSum -= 18;
    } else if (i % 10 === 9) {
      digitSum -= 9;
    }
  }
  return count;
};
