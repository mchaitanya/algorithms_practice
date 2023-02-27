// https://leetcode.com/problems/minimum-number-of-keypresses/
// tags - string
/**
 * @param {string} s
 * @return {number}
 */
var minimumKeypresses = function (s) {
  // Count how many times each char occurs in the string.
  const map = new Map();
  for (const c of s) {
    const count = map.get(c) || 0;
    map.set(c, count + 1);
  }

  // Sort the chars' frequencies in descending order.
  const freqs = Array.from(map.values()).sort((v1, v2) => v2 - v1);

  let numKeypresses = 0;
  // Track how many chars are assigned to each button.
  const charsAssigned = new Array(9).fill(0);
  for (let i = 0, j = 0; i < freqs.length && j < 9; i++, j = (j + 1) % 9) {
    charsAssigned[j]++;
    numKeypresses += freqs[i] * charsAssigned[j];
  }
  return numKeypresses;
};
