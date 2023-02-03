// https://leetcode.com/problems/subarray-sum-equals-k/
// tags - array
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let numSubarrays = 0;
  const map = new Map([[0, 1]]); // Store how many times each prefix sum was seen.
  let prefixSum = 0;
  for (const num of nums) {
    prefixSum += num;
    numSubarrays += map.get(prefixSum - k) || 0;
    // if (prefixSum === k) { // Case 1 - Subarray starts from index 0.
    //     numSubarrays++;
    // } else { // Case 2 - Subarray starts from somewhere in the middle.
    //     numSubarrays += (map.get(prefixSum - k) || 0);
    // }
    // Update the map.
    const count = map.get(prefixSum) || 0;
    map.set(prefixSum, count + 1);
  }
  return numSubarrays;
};
