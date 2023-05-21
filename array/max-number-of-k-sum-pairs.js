// https://leetcode.com/problems/max-number-of-k-sum-pairs/
// tags - array
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  const map = new Map(); // Count how many times each number occurs.
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  let numOperations = 0;
  for (const num of map.keys()) {
    if (k === 2 * num) {
      numOperations += Math.floor(map.get(num) / 2);
    } else if (map.has(k - num)) {
      numOperations += Math.min(map.get(num), map.get(k - num));
      map.set(num, 0); // Ensure we don't count this again for k-num.
    }
  }
  return numOperations;

  // // Sort nums.
  // nums.sort((n1, n2) => n1-n2);

  // let numOperations = 0;
  // for (let left = 0, right = nums.length-1; left < right; ) {
  //     const sum = nums[left] + nums[right];
  //     if (sum > k) {
  //         right--;
  //     } else if (sum < k) {
  //         left++;
  //     } else {
  //         numOperations++;
  //         left++;
  //         right--;
  //     }
  // }
  // return numOperations;
};
