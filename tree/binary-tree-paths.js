// https://leetcode.com/problems/binary-tree-paths
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const paths = [];
  function dfs(node, path) {
    // node shouldn't be null.
    path.push(node.val);
    if (node.left == null && node.right == null) {
      paths.push(path.join("->"));
    } else {
      if (node.left != null) dfs(node.left, path);
      if (node.right != null) dfs(node.right, path);
    }
    path.pop();
  }
  dfs(root, []); // Given root can't be null.
  return paths;
};
