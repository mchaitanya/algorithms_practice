// https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays/
// tags - array
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
  const n = A.length;
  const set = new Set();
  const result = new Array(n);
  for (let i = 0, numCommon = 0; i < n; i++) {
    if (set.has(A[i])) {
      numCommon++;
    } else {
      set.add(A[i]);
    }
    if (set.has(B[i])) {
      numCommon++;
    } else {
      set.add(B[i]);
    }
    result[i] = numCommon;
  }
  return result;
};
