// https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/
// tags - array
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
  // Sort the array.
  arr.sort((n1, n2) => n1 - n2);
  const diff = arr[1] - arr[0]; // Given arr.length >= 2
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== diff) return false;
  }
  return true;
};
