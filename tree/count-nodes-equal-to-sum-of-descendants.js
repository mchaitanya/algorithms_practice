// https://leetcode.com/problems/count-nodes-equal-to-sum-of-descendants/
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
var equalToDescendants = function (root) {
  let count = 0;
  // Do DFS post-order.
  function dfs(node) {
    if (node == null) return 0;
    const leftSum = dfs(node.left);
    const rightSum = dfs(node.right);
    // Increment count if node value equals sum of the descendants.
    if (node.val === leftSum + rightSum) count++;
    // Return the sum of the subtree rooted at the given node.
    return node.val + leftSum + rightSum;
  }
  dfs(root);
  return count;
};
