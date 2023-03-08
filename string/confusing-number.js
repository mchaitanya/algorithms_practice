// https://leetcode.com/problems/confusing-number/
// tags - string
/**
 * @param {number} n
 * @return {boolean}
 */
var confusingNumber = function (n) {
  // Map digits that can be rotated into a valid digit.
  const mapping = new Map([
    ["0", "0"],
    ["1", "1"],
    ["6", "9"],
    ["8", "8"],
    ["9", "6"],
  ]);

  const s = String(n);
  const mapped = [];
  for (const digit of s) {
    if (!mapping.has(digit)) return false;
    mapped.push(mapping.get(digit));
  }

  const rotated = Number(mapped.reverse().join(""));
  return rotated !== n; // The number is confusing if it's different after rotation.
};
