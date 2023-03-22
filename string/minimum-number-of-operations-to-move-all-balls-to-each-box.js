// https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/
// tags - string, array
/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
  // For each i, sum the distance of all the 1s from it.
  // Store the positions of all the 1s i.e. where all the balls are.
  const positions = [];
  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i] === "1") positions.push(i);
  }

  let result = new Array(boxes.length).fill(0);
  for (let i = 0; i < boxes.length; i++) {
    for (const p of positions) {
      result[i] += Math.abs(p - i);
    }
  }
  return result;
};
