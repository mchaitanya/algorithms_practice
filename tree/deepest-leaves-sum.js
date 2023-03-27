// https://leetcode.com/problems/deepest-leaves-sum/
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
var deepestLeavesSum = function (root) {
  let maxDepth = 0;
  let leafSum = 0;
  function dfs(node, depth) {
    // node should not be null.
    if (node.left == null && node.right == null) {
      if (depth > maxDepth) {
        maxDepth = depth;
        leafSum = node.val;
      } else if (depth === maxDepth) {
        leafSum += node.val;
      }
    } else {
      if (node.left != null) dfs(node.left, depth + 1);
      if (node.right != null) dfs(node.right, depth + 1);
    }
  }

  dfs(root, 0); // Given root not null.

  return leafSum;
};
