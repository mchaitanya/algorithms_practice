// https://leetcode.com/problems/android-unlock-patterns/
// tags - backtracking
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var numberOfPatterns = function (m, n) {
  if (m > n) return 0;
  // Track which dots have thus far been chosen.
  const chosen = new Array(10).fill(false); // dots range from 1 ... 9
  // For a pair of dots, map which dot we must pass through to connect them.
  // The smaller dot appears first in the key.
  const map = new Map([
    ["1-3", 2],
    ["1-7", 4],
    ["1-9", 5],
    ["2-8", 5],
    ["3-7", 5],
    ["3-9", 6],
    ["4-6", 5],
    ["7-9", 8],
  ]);

  let numPatterns = 0;
  // Attempt to choose the ith dot. In the last round, we chose the dot 'prev'.
  function choose(i, prev = null) {
    if (i >= m && i <= n) {
      numPatterns++;
      if (i === n) return;
    }
    for (let dot = 1; dot <= 9; dot++) {
      // The dots in the sequence must be distinct.
      if (chosen[dot]) continue;
      // When we connect 2 dots, any dot the line segment passes through must already be in the sequence.
      if (prev != null) {
        const key = dot > prev ? `${prev}-${dot}` : `${dot}-${prev}`;
        if (map.has(key) && !chosen[map.get(key)]) continue;
      }
      chosen[dot] = true;
      choose(i + 1, dot);
      chosen[dot] = false;
    }
  }
  choose(0);
  return numPatterns;
};
