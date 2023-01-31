// https://leetcode.com/problems/find-all-the-lonely-nodes/
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
 * @return {number[]}
 */
var getLonelyNodes = function (root) {
  const lonely = [];
  function dfs(node) {
    if (node == null) return;
    // Collect the lonely nodes.
    if (node.left == null && node.right != null) {
      lonely.push(node.right.val);
    } else if (node.left != null && node.right == null) {
      lonely.push(node.left.val);
    }
    // Recurse over the left & right children.
    dfs(node.left);
    dfs(node.right);
  }
  dfs(root);
  return lonely;
};
