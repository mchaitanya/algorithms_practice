// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
// tags - array
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  for (let i = 0, j = numbers.length - 1; i < j; ) {
    const sum = numbers[i] + numbers[j];
    if (sum === target) {
      return [i + 1, j + 1];
    } else if (sum > target) {
      j--;
    } else {
      i++;
    }
  }
  // Shouldn't reach here.

  // function binarySearch(left, right, val) {
  //     while (left <= right) {
  //         const mid = Math.floor((left + right)/2);
  //         if (numbers[mid] === val) {
  //             return mid;
  //         } else if (numbers[mid] > val) {
  //             right = mid-1;
  //         } else {
  //             left = mid+1;
  //         }
  //     }
  //     return -1;
  // }

  // for (let i = 0; i < numbers.length; i++) {
  //     const j = binarySearch(i+1, numbers.length-1, target-numbers[i]);
  //     if (j !== -1) return [i+1, j+1];
  // }
  // // Shouldn't reach here - Each testcase has exactly one solution.
};
