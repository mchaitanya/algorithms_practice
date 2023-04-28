// https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/
// tags - array
/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function (x, y, points) {
  let minIndex;
  let minDist = Infinity;
  for (let i = 0; i < points.length; i++) {
    const [xi, yi] = points[i];
    if (xi === x || yi === y) {
      const dist = Math.abs(x - xi) + Math.abs(y - yi);
      if (dist < minDist) {
        minDist = dist;
        minIndex = i;
      }
    }
  }
  return minIndex ?? -1;
};
