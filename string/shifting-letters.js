// https://leetcode.com/problems/shifting-letters/
// tags - string
/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function (s, shifts) {
  // Accumulate the shifts from the right.
  for (let i = shifts.length - 1, prev = 0; i >= 0; i--) {
    shifts[i] = (shifts[i] + prev) % 26;
    prev = shifts[i];
  }

  let result = "";
  const CODE_A = "a".charCodeAt(0);
  for (let i = 0; i < s.length; i++) {
    const offset = s.charCodeAt(i) - CODE_A + shifts[i];
    result += String.fromCharCode(CODE_A + (offset % 26));
  }
  return result;
};
