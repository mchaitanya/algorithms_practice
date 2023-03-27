// https://leetcode.com/problems/check-array-formation-through-concatenation/
// tags - array
/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function (arr, pieces) {
  // Map each number in arr to its index.
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], i);
  }

  for (const piece of pieces) {
    // Given piece.length >= 1.
    for (let i = 0, index = null; i < piece.length; i++) {
      if (!map.has(piece[i])) return false;
      if (index == null) {
        index = map.get(piece[i]);
      } else if (map.get(piece[i]) !== index + i) {
        return false;
      }
      // map.delete(piece[i]);
    }
  }

  return true;
};
