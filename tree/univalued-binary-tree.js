// https://leetcode.com/problems/univalued-binary-tree/
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
 * @return {boolean}
 */
var isUnivalTree = function (root) {
  function checkUnivalue(node) {
    if (node == null) return true;
    if (node.val !== root.val) return false;
    return checkUnivalue(node.left) && checkUnivalue(node.right);
  }
  return checkUnivalue(root);
};
