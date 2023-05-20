// https://leetcode.com/problems/k-diff-pairs-in-an-array/
// tags - array
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  const map = new Map();
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  let numKDiffPairs = 0;
  for (const num of map.keys()) {
    if ((k === 0 && map.get(num) > 1) || (k > 0 && map.has(num + k))) {
      numKDiffPairs++;
    }
  }
  return numKDiffPairs;
};
