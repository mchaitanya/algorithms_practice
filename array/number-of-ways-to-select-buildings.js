// https://leetcode.com/problems/number-of-ways-to-select-buildings/
// tags - array
/**
 * @param {string} s
 * @return {number}
 */
var numberOfWays = function (s) {
  const OFFICE = "0",
    RESTAURANT = "1";
  const officesToLeft = new Array(s.length).fill(0);
  for (let i = 1; i < s.length; i++) {
    officesToLeft[i] = officesToLeft[i - 1] + (s[i - 1] === OFFICE ? 1 : 0);
  }

  const officesToRight = new Array(s.length).fill(0);
  for (let i = s.length - 2; i >= 0; i--) {
    officesToRight[i] = officesToRight[i + 1] + (s[i + 1] === OFFICE ? 1 : 0);
  }

  let result = 0;
  // Choose the middle building.
  // See how many buildings of the other type are to the left/right.
  for (let i = 1; i < s.length - 1; i++) {
    const left = s[i] === RESTAURANT ? officesToLeft[i] : i - officesToLeft[i];
    const right =
      s[i] === RESTAURANT
        ? officesToRight[i]
        : s.length - 1 - i - officesToRight[i];
    result += left * right;
  }
  return result;
};
