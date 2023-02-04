// https://leetcode.com/problems/smallest-string-starting-from-leaf/
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
 * @return {string}
 */
var smallestFromLeaf = function (root) {
  let smallest;
  function dfs(node, str) {
    // node shouldn't be null.
    const newStr = String.fromCharCode("a".charCodeAt(0) + node.val) + str;
    if (node.left == null && node.right == null) {
      if (smallest == null || newStr.localeCompare(smallest) < 0) {
        smallest = newStr;
      }
    }
    if (node.left != null) dfs(node.left, newStr);
    if (node.right != null) dfs(node.right, newStr);
  }
  dfs(root, ""); // root can't be null.
  return smallest;
};
