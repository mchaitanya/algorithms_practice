// https://leetcode.com/problems/pascals-triangle-ii/
// tags - array
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let curr = [1];
  for (let i = 0; i < rowIndex; i++) {
    const next = new Array(curr.length + 1).fill(1);
    for (let j = 1; j < next.length - 1; j++) {
      next[j] = curr[j - 1] + curr[j];
    }
    curr = next;
  }
  return curr;
};
