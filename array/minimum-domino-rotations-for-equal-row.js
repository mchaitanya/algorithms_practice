// https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/
// tags - array
/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
var minDominoRotations = function (tops, bottoms) {
  // Given n >= 2.
  const n = tops.length;

  const val1 = tops[0],
    val2 = bottoms[0];
  let isVal1Possible = true,
    isVal2Possible = true;

  let i = 1;
  while (i < n && (isVal1Possible || isVal2Possible)) {
    if (tops[i] !== val1 && bottoms[i] !== val1) isVal1Possible = false;
    if (tops[i] !== val2 && bottoms[i] !== val2) isVal2Possible = false;
    i++;
  }

  if (i < n) return -1;

  const val = isVal1Possible ? val1 : val2;
  let numTop = 0,
    numBottom = 0;
  for (let i = 0; i < n; i++) {
    if (tops[i] === val && bottoms[i] === val) continue;
    if (tops[i] === val) {
      numTop++;
    } else {
      numBottom++;
    }
  }
  return Math.min(numTop, numBottom);
};
