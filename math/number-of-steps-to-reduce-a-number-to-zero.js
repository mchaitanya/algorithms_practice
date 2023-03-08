// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
// tags - number
/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let numSteps = 0;
  while (num > 0) {
    if (num % 2 === 0) {
      num /= 2;
    } else {
      num -= 1;
    }
    numSteps++;
  }
  return numSteps;
};
