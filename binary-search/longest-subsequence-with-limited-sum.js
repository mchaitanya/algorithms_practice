// https://leetcode.com/problems/longest-subsequence-with-limited-sum/
// tags - binary-search
/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function (nums, queries) {
  const n = nums.length;
  // Sort nums.
  nums.sort((n1, n2) => n1 - n2);

  // Calculate prefix sums.
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
  }

  function binarySearch(query) {
    let left = 0,
      right = n - 1;
    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      if (nums[mid] <= query) {
        left = mid + 1; // Search right half.
      } else {
        right = mid - 1; // Search left half.
      }
    }
    // Vals at index <= left-1 are <= query.
    return left;
  }

  const result = new Array(queries.length);
  for (let i = 0; i < queries.length; i++) {
    if (queries[i] < nums[0]) {
      result[i] = 0;
    } else if (queries[i] >= nums[n - 1]) {
      result[i] = n;
    } else {
      result[i] = binarySearch(queries[i]);
    }
  }
  return result;
};
