// https://leetcode.com/problems/construct-k-palindrome-strings/
// tags - string
/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function (s, k) {
  // Map each char in s to its count.
  const map = new Map();
  for (const c of s) {
    const count = map.get(c) || 0;
    map.set(c, count + 1);
  }

  // Each character with an odd count result in at least one palindrome with that character.
  let numOdd = 0;
  for (let count of map.values()) {
    if (count % 2 === 1) numOdd++;
  }

  return k >= numOdd && k <= s.length;
};
