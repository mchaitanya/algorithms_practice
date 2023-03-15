// https://leetcode.com/problems/power-of-three/
// tags - math
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n <= 0) return false;

  for (let pow = 1; pow <= n; pow *= 3) {
    if (n === pow) return true;
  }
  return false;

  // const log = Math.log(n)/Math.log(3);
  // return (log - Math.floor(log) < 10**-12);

  // while (n > 1) {
  //     if (n % 3 !== 0) return false;
  //     n /= 3;
  // }
  // return true;
};
