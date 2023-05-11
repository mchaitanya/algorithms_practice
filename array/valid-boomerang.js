// https://leetcode.com/problems/valid-boomerang/
// tags - array
/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function (points) {
  // Check if the 3 points form a triangle.
  const [x1, y1] = points[0];
  const [x2, y2] = points[1];
  const [x3, y3] = points[2];

  if (
    (x1 === x2 && y1 === y2) ||
    (x2 === x3 && y2 === y3) ||
    (x3 === x1 && y3 === y1)
  )
    return false;

  if (x1 === x2) {
    return x1 !== x3;
  } else {
    return (y2 - y1) / (x2 - x1) !== (y3 - y1) / (x3 - x1);
  }
};
