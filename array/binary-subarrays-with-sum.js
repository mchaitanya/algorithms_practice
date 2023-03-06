// https://leetcode.com/problems/binary-subarrays-with-sum/
// tags - array, prefix-sum
/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
  // Solve with prefix sums.
  // Identical to https://leetcode.com/problems/subarray-sum-equals-k
  let numSubarrays = 0;
  let prefixSum = 0;
  const map = new Map([[0, 1]]); // Store how many times each prefix sum occurs.
  for (const n of nums) {
    prefixSum += n;
    numSubarrays += map.get(prefixSum - goal) || 0;
    // Update the map.
    const count = map.get(prefixSum) || 0;
    map.set(prefixSum, count + 1);
  }
  return numSubarrays;
};
