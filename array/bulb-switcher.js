// https://leetcode.com/problems/bulb-switcher/
// tags - array
/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function (n) {
  // Say i has f factors from 1 to i. Bulb i will be toggled f times.
  // All factors come in pairs, factor & num/factor.
  // We'll switch the bulb on for 1 & switch if off for the other.
  // Squares have a factor without a counterpart.

  // let numSquares = 0;
  // for (let i = 1; i*i <= n; i++) {
  //     numSquares++;
  // }
  // return numSquares;

  return Math.floor(Math.sqrt(n));
};
