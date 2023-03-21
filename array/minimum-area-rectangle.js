// https://leetcode.com/problems/minimum-area-rectangle/
// tags - array
/**
 * @param {number[][]} points
 * @return {number}
 */
var minAreaRect = function (points) {
  // Map each x-coordinate to a set of the y-coordinates it occurs with.
  // And each y-coordinate to a set of the x-coordinates.
  const xmap = new Map();
  const ymap = new Map();
  for (const [x, y] of points) {
    if (!xmap.has(x)) xmap.set(x, new Set());
    xmap.get(x).add(y);
    if (!ymap.has(y)) ymap.set(y, new Set());
    ymap.get(y).add(x);
  }

  let minArea;
  for (const [x1, y1] of points) {
    for (const [x2, y2] of points) {
      // Check if (x1,y1) & (x2,y2) can be the  opposite corners of a rectangle.
      if (
        x1 !== x2 &&
        y1 !== y2 &&
        xmap.get(x1).has(y2) &&
        ymap.get(y1).has(x2)
      ) {
        minArea = Math.min(
          minArea || Infinity,
          Math.abs((x2 - x1) * (y2 - y1))
        );
      }
    }
  }
  return minArea || 0;
};
