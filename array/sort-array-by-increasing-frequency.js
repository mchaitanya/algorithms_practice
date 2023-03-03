// https://leetcode.com/problems/sort-array-by-increasing-frequency/
// tags - array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  // Construct a frequency map.
  const map = new Map();
  for (const n of nums) {
    const count = map.get(n) || 0;
    map.set(n, count + 1);
  }

  // Sort the numbers.
  const sorted = Array.from(map.entries()).sort((e1, e2) => {
    if (e1[1] === e2[1]) {
      return e2[0] - e1[0]; // If freq are the same, sort in descending order.
    } else {
      return e1[1] - e2[1];
    }
  });

  const result = [];
  for (const [n, freq] of sorted) {
    for (let i = 0; i < freq; i++) {
      result.push(n);
    }
  }
  return result;
};
