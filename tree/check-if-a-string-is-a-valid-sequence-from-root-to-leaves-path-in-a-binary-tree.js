// https://leetcode.com/problems/check-if-a-string-is-a-valid-sequence-from-root-to-leaves-path-in-a-binary-tree/
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
 * @param {number[]} arr
 * @return {boolean}
 */
var isValidSequence = function (root, arr) {
  if (root == null) return arr.length === 0;
  // i is the index into arr.
  function dfs(node, i) {
    // node shouldn't be null & i <= arr.length.
    if (i === arr.length - 1) {
      return node.val === arr[i] && node.left == null && node.right == null;
    } else if (node.val === arr[i]) {
      if (node.left && dfs(node.left, i + 1)) return true;
      if (node.right && dfs(node.right, i + 1)) return true;
    }
    return false;
  }

  return dfs(root, 0);
};
