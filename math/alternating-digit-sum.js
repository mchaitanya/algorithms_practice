// https://leetcode.com/problems/alternating-digit-sum/
// tags - math
/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function (n) {
  let result = 0;
  let multiplier = 1;
  while (n > 0) {
    result += (n % 10) * multiplier;
    multiplier *= -1;
    n = Math.floor(n / 10);
  }
  // If the multiplier = 1 when the loop exits, we assigned a negative sign to the most significant digit.
  // Therefore we should multiply the result by -1.
  return multiplier === 1 ? -result : result;
};
