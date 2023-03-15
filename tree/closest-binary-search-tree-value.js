// https://leetcode.com/problems/closest-binary-search-tree-value/
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
 * @param {number} target
 * @return {number}
 */
var closestValue = function (root, target) {
  let prev = null;
  let prevDiff = null,
    currDiff = null;
  (function dfs(node) {
    if (node == null) return;
    dfs(node.left);
    currDiff = Math.abs(node.val - target);
    if (prevDiff == null || currDiff <= prevDiff) {
      prevDiff = currDiff;
      prev = node.val;
      dfs(node.right);
    }
  })(root);
  return prev;
};
