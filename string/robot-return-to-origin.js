// https://leetcode.com/problems/robot-return-to-origin/
// tags - string
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  let deltaX = 0;
  let deltaY = 0;
  for (let m of moves) {
    if (m === "R") {
      deltaX++;
    } else if (m === "L") {
      deltaX--;
    } else if (m === "U") {
      deltaY++;
    } else {
      // m === 'D'
      deltaY--;
    }
  }
  return deltaX === 0 && deltaY === 0;
};
