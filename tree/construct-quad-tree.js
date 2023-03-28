// https://leetcode.com/problems/construct-quad-tree/
// tags - tree
/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function (grid) {
  const n = grid.length;

  // Create an array of prefix sums for each row.
  const prefixSums = new Array(n);
  for (let r = 0; r < n; r++) {
    prefixSums[r] = new Array(n);
    prefixSums[r][0] = grid[r][0];
    for (let c = 1; c < n; c++) {
      prefixSums[r][c] = prefixSums[r][c - 1] + grid[r][c];
    }
  }

  // Top-left corner (r1, c1) & bottom-right corner (r2, c2)
  function buildQT(r1, c1, r2, c2) {
    let gridSum = 0;
    for (let r = r1; r <= r2; r++) {
      gridSum += prefixSums[r][c2] - prefixSums[r][c1] + grid[r][c1];
    }

    if (gridSum === 0) {
      return new Node(false, true, null, null, null, null);
    } else if (gridSum === (r2 - r1 + 1) * (c2 - c1 + 1)) {
      return new Node(true, true, null, null, null, null);
    } else {
      const rmid = r1 + Math.floor((r2 - r1) / 2);
      const cmid = c1 + Math.floor((c2 - c1) / 2);
      const topLeft = buildQT(r1, c1, rmid, cmid);
      const topRight = buildQT(r1, cmid + 1, rmid, c2);
      const bottomLeft = buildQT(rmid + 1, c1, r2, cmid);
      const bottomRight = buildQT(rmid + 1, cmid + 1, r2, c2);
      return new Node(true, false, topLeft, topRight, bottomLeft, bottomRight);
    }
  }

  return buildQT(0, 0, n - 1, n - 1);
};
