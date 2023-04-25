// https://leetcode.com/problems/valid-triangle-number
// tags - array, math
/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
  // Sort the numbers
  nums.sort((n1, n2) => n1 - n2);

  const max = nums[nums.length - 1];
  const count = new Array(max + 1).fill(0);
  for (const n of nums) {
    count[n]++;
  }

  // After this, count[i] = how many numbers <= i
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) continue; // The side of a triangle can't be 0.
    for (let j = i + 1; j < nums.length; j++) {
      // Let s1 = nums[i], s2 = nums[j]. Pick s3 such that s2 < s3 < s1+s2.
      // for (let k = j+1; nums[k] < nums[i] + nums[j]; k++) result++;
      const sum = nums[i] + nums[j];
      if (sum > max) {
        result += nums.length - j - 1;
      } else {
        result += count[sum - 1] - j - 1;
      }
    }
  }
  return result;

  // // Brute force - O(n^3) - Gets accepted but only just.
  // let result = 0;
  // for (let i = 0; i < nums.length; i++) {
  //     for (let j = i+1; j < nums.length; j++) {
  //         for (let k = j+1; k < nums.length; k++) {
  //             if (nums[i] + nums[j] <= nums[k]) continue;
  //             if (nums[j] + nums[k] <= nums[i]) continue;
  //             if (nums[k] + nums[i] <= nums[j]) continue;
  //             result++;
  //         }
  //     }
  // }
  // return result;
};
