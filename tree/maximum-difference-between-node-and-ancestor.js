// https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/
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
 * @return {number}
 */
var maxAncestorDiff = function (root) {
  let maxDiff = 0;
  (function dfs(node, min, max) {
    // Given #nodes >= 2. max & min won't end up +/-Infinity.
    if (node == null) {
      maxDiff = Math.max(maxDiff, max - min);
      return;
    }
    min = Math.min(min, node.val);
    max = Math.max(max, node.val);
    dfs(node.left, min, max);
    dfs(node.right, min, max);
  })(root, Infinity, -Infinity);
  return maxDiff;
};
