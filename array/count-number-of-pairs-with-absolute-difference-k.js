// https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/
// tags - array
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums, k) {
  const map = new Map();
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  let numPairs = 0;
  for (const num of map.keys()) {
    numPairs += map.get(num) * (map.get(num + k) || 0);
  }
  return numPairs;
};
