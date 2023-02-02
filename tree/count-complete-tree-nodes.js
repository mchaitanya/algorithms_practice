// https://leetcode.com/problems/count-complete-tree-nodes/
// tags - tree, binary-search
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  if (root == null) return 0;
  // Find the height.
  let height = 0;
  for (let node = root.left; node != null; node = node.left) {
    height++;
  }

  function doesLeafExist(num) {
    let node = root;
    // Take either the left/right from the root till you possibly hit the leaf.
    for (
      let i = 0, left = 1, right = 2 ** height;
      node != null && i < height;
      i++
    ) {
      const mid = Math.floor((left + right) / 2);
      if (num <= mid) {
        node = node.left;
        right = mid;
      } else {
        node = node.right;
        left = mid;
      }
    }
    return node != null;
  }

  // The leaves on the last level can be in the range [1, 2**height]. Binary search the range.
  let numLeaves = 0;
  let left = 1,
    right = 2 ** height;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (doesLeafExist(mid)) {
      left = mid + 1; // Search the right half.
      numLeaves = mid;
    } else {
      right = mid - 1;
    }
  }
  // Total #nodes = #nodes up to height-1 + #nodes on the last level.
  return 2 ** height - 1 + numLeaves;
};
