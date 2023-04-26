// https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/
// tags - math
/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
  if (low % 2 === 1) low = low - 1;
  if (high % 2 === 1) high = high + 1;
  return (high - low) / 2;

  // let result = 0;
  // for (let i = low; i <= high; i++) {
  //     if (i % 2 === 1) result++;
  // }
  // return result;
};
