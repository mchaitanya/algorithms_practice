// https://leetcode.com/problems/path-sum-ii/
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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  if (root == null) return [];
  const paths = [];
  function dfs(node, sum, path) {
    // node shouldn't be null.
    path.push(node.val);
    if (node.left == null && node.right == null) {
      if (sum + node.val === targetSum) paths.push([...path]);
    } else {
      if (node.left != null) dfs(node.left, sum + node.val, path);
      if (node.right != null) dfs(node.right, sum + node.val, path);
    }
    path.pop();
  }
  dfs(root, 0, []);
  return paths;
};
