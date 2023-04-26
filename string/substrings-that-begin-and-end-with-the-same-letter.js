// https://leetcode.com/problems/substrings-that-begin-and-end-with-the-same-letter
// tags - string
/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
  // Similar to "Number of Good Pairs"
  // Count how many times each character occurs.
  const map = new Map();
  for (const c of s) {
    const count = map.get(c) || 0;
    map.set(c, count + 1);
  }

  let num = s.length; // To account for substrings of length 1
  // Count how many pairs there are of each character.
  for (const count of map.values()) {
    num += (count * (count - 1)) / 2;
  }
  return num;
};
