// https://leetcode.com/problems/arithmetic-subarrays/
// tags - array
/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function (nums, l, r) {
  function checkArithmetic(left, right) {
    const size = right - left + 1;
    if (size < 2) return false;

    const set = new Set();
    let min = Infinity,
      max = -Infinity;
    for (let i = left; i <= right; i++) {
      set.add(nums[i]);
      if (nums[i] < min) min = nums[i];
      if (nums[i] > max) max = nums[i];
    }

    if (set.size === 1) return true;
    if (set.size < size) return false;

    const diff = (max - min) / (size - 1);
    for (let val = min + diff; val <= max - diff; val += diff) {
      if (!set.has(val)) return false;
    }
    return true;
  }

  const result = new Array(l.length);
  for (let i = 0; i < l.length; i++) {
    result[i] = checkArithmetic(l[i], r[i]);
  }
  return result;
};
