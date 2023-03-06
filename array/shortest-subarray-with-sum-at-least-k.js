// https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/
// tags - array
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function (nums, k) {
  // Brute force - Test all subarrays.
  let minLen = Infinity;
  for (let i = 0; i < nums.length; i++) {
    // Fix start index at i.
    let sum = 0;
    // End index can be i, i+1, ...., n-1
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      // If the subarray contains a negative prefix, no point checking further.
      // We can always do better by starting from the next index.
      if (sum < 0) break;
      if (sum >= k) {
        minLen = Math.min(minLen, j - i + 1);
        break;
      }
    }
  }
  return minLen === Infinity ? -1 : minLen;
};
