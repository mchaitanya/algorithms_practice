// https://leetcode.com/problems/binary-tree-longest-consecutive-sequence/
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
var longestConsecutive = function (root) {
  let maxLen = 0;
  (function dfs(node, len) {
    // node shouldn't be null.
    if (node.left == null || node.left.val !== node.val + 1) {
      maxLen = Math.max(maxLen, len);
      if (node.left != null) dfs(node.left, 1);
    } else {
      dfs(node.left, len + 1);
    }

    if (node.right == null || node.right.val !== node.val + 1) {
      maxLen = Math.max(maxLen, len);
      if (node.right != null) dfs(node.right, 1);
    } else {
      dfs(node.right, len + 1);
    }
  })(root, 1); // Given root not null.
  return maxLen;
};
