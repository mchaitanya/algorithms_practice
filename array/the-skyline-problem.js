// https://leetcode.com/problems/the-skyline-problem/
// tags - recursion, divide-and-conquer
/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function (buildings) {
  if (buildings.length === 1) {
    const [x, y, h] = buildings[0];
    return [
      [x, h],
      [y, 0],
    ];
  }

  // Divide buildings in half.
  const mid = Math.floor(buildings.length / 2);
  const left = getSkyline(buildings.slice(0, mid));
  const right = getSkyline(buildings.slice(mid));

  // Merge the 2 skylines.
  const skyline = [];
  let leftHeight = 0,
    rightHeight = 0,
    height = 0;
  for (let i = 0, j = 0; i < left.length || j < right.length; ) {
    const [xl, yl] = i < left.length ? left[i] : [Infinity, 0];
    const [xr, yr] = j < right.length ? right[j] : [Infinity, 0];
    // Examine the points in the order of increasing x-coordinate.
    // At each point, compute the height of the skyline. It'll be larger of the left & right heights.
    if (xl < xr) {
      leftHeight = yl;
      i++;
    } else if (xr < xl) {
      rightHeight = yr;
      j++;
    } else {
      leftHeight = yl;
      rightHeight = yr;
      i++;
      j++;
    }
    // If the height is not the same as before, add the point into the skyline.
    const newHeight = Math.max(leftHeight, rightHeight);
    if (newHeight !== height) {
      skyline.push([Math.min(xl, xr), newHeight]);
    }
    height = newHeight;
  }
  return skyline;
};
