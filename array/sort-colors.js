// https://leetcode.com/problems/sort-colors/
// tags - array
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  // From LC - Dutch National Flag problem
  for (let i = 0, p0 = 0, p2 = nums.length - 1; i <= p2; ) {
    if (nums[i] === 0) {
      [nums[p0], nums[i]] = [nums[i], nums[p0]];
      p0++;
      i++;
    } else if (nums[i] === 2) {
      [nums[p2], nums[i]] = [nums[i], nums[p2]];
      p2--;
    } else {
      i++;
    }
  }

  // // Move all 0s to the front.
  // for (let i = 0, j = nums.length-1; i < j; j--) {
  //     if (nums[j] === 0) {
  //         while (i < j && nums[i] === 0) i++;
  //         [nums[i], nums[j]] = [nums[j], nums[i]];
  //     }
  // }

  // // Move all 1s to the front.
  // for (let i = 0, j = nums.length-1; i < j; j--) {
  //     if (nums[j] === 1) {
  //         while (i < j && (nums[i] === 0 || nums[i] === 1)) i++;
  //         [nums[i], nums[j]] = [nums[j], nums[i]];
  //     }
  // }

  // let numZeros = 0, numOnes = 0;
  // for (let n of nums) {
  //     if (n === 0) {
  //         numZeros++;
  //     } else if (n === 1) {
  //         numOnes++;
  //     }
  // }
  // for (let i = 0; i < nums.length; i++) {
  //     if (i < numZeros) {
  //         nums[i] = 0;
  //     } else if (i < numZeros + numOnes) {
  //         nums[i] = 1;
  //     } else {
  //         nums[i] = 2;
  //     }
  // }
};
