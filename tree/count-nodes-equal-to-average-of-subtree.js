// https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/
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
var averageOfSubtree = function (root) {
  let result = 0;
  // Return both the count & sum of nodes in the subtree.
  function dfs(node) {
    if (node == null) return [0, 0];
    const [leftCount, leftSum] = dfs(node.left);
    const [rightCount, rightSum] = dfs(node.right);
    const subtreeSum = leftSum + rightSum + node.val;
    const subtreeCount = leftCount + rightCount + 1;
    if (node.val === Math.floor(subtreeSum / subtreeCount)) result++;
    return [subtreeCount, subtreeSum];
  }
  dfs(root);
  return result;
};
