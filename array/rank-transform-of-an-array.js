// https://leetcode.com/problems/rank-transform-of-an-array/
// tags - array
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
  // Make a copy of the array & sort it.
  const copy = arr.slice(0);
  copy.sort((n1, n2) => n1 - n2);

  // Map each number to its rank.
  const map = new Map();
  for (let i = 0, rank = 1; i < copy.length; i++) {
    if (i === 0 || copy[i] !== copy[i - 1]) {
      map.set(copy[i], rank);
      rank++;
    }
  }
  return arr.map((n) => map.get(n));
};
