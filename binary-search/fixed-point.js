// https://leetcode.com/problems/fixed-point/
// tags - array, binary-search
/**
 * @param {number[]} arr
 * @return {number}
 */
var fixedPoint = function (arr) {
  function maybeFixedPoint(left, right) {
    return arr[left] <= right && arr[right] >= left;
  }

  // Apply binary search.
  function binarySearch(left, right) {
    if (left > right || !maybeFixedPoint(left, right)) return -1;
    const mid = Math.floor((left + right) / 2);

    const maybeLeft = binarySearch(left, mid - 1);
    if (maybeLeft !== -1) {
      return maybeLeft;
    } else if (arr[mid] === mid) {
      return mid;
    } else {
      return binarySearch(mid + 1, right);
    }
  }

  return binarySearch(0, arr.length - 1);

  // for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] === i) return i;
  // }
  // return -1;
};
