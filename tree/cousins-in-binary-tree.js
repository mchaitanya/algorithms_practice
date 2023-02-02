// https://leetcode.com/problems/cousins-in-binary-tree
// tags - tree
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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  // Given at least 2 nodes i.e. root can't be null.
  if (root.val === x || root.val === y) return false;
  let level = [root];
  while (level.length > 0) {
    // Store node to parent mapping for the current level.
    const map = new Map();
    const nextLevel = [];
    for (const node of level) {
      if (node.left != null) {
        nextLevel.push(node.left);
        map.set(node.left.val, node.val);
      }
      if (node.right != null) {
        nextLevel.push(node.right);
        map.set(node.right.val, node.val);
      }
    }
    level = nextLevel;
    if (map.has(x) && map.has(y)) {
      // True if both x & y are on the same level & don't have the same parent.
      return map.get(x) !== map.get(y);
    } else if (map.has(x) || map.has(y)) {
      // False if one of them is on this level but not the other.
      return false;
    }
  }
  // Should not reach here - both x & y exist in the tree.
  return false;
};
