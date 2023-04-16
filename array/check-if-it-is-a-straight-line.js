// https://leetcode.com/problems/check-if-it-is-a-straight-line/
// tags - array
/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  // Given coordinates.length >= 2.
  const [x0, y0] = coordinates[0];
  const [x1, y1] = coordinates[1];
  const slope = (y1 - y0) / (x1 - x0);
  for (let i = 2; i < coordinates.length; i++) {
    const [x, y] = coordinates[i];
    if (x1 === x0) {
      if (x !== x0) return false;
    } else if ((y - y0) / (x - x0) !== slope) {
      return false;
    }
  }
  return true;
};
