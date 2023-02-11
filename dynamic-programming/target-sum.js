// https://leetcode.com/problems/target-sum
// tags - dynamic-programming
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  // Solve with recursion.
  const memo = new Map();
  // Count #ways to make target from the index 'start' in nums.
  function countWays(start, target) {
    // if (start === nums.length-1) {
    //     if (nums[start] === target || nums[start] === -target) {
    //         return target === 0 ? 2 : 1;
    //     } else {
    //         return 0;
    //     }
    // }
    if (start === nums.length) {
      return target === 0 ? 1 : 0;
    }
    const key = start + "|" + target;
    if (memo.has(key)) return memo.get(key);
    const count =
      countWays(start + 1, target - nums[start]) +
      countWays(start + 1, target + nums[start]);
    memo.set(key, count);
    return count;
  }
  return countWays(0, target);
};
