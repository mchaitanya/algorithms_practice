// https://leetcode.com/problems/minimum-absolute-difference-in-bst/
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
var getMinimumDifference = function (root) {
  let prev;
  let minDiff = Infinity;
  (function inorder(node) {
    if (node == null) return;
    inorder(node.left);
    if (prev != null && node.val - prev.val < minDiff) {
      minDiff = node.val - prev.val;
    }
    prev = node;
    inorder(node.right);
  })(root);
  return minDiff;
};
