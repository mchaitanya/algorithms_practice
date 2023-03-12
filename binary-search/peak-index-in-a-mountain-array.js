// https://leetcode.com/problems/peak-index-in-a-mountain-array/
// tags - binary-search
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  // Apply binary search.
  let left = 1,
    right = arr.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (arr[mid - 1] < arr[mid] && arr[mid] > arr[mid + 1]) {
      return mid;
    } else if (arr[mid] < arr[mid + 1]) {
      left = mid + 1; // The peak is to the right of mid.
    } else {
      right = mid - 1; // The peak is to the left of mid.
    }
  }
  // Shouldn't reach here. arr guaranteed to be a mountain array.
};
