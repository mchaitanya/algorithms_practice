// https://leetcode.com/problems/search-in-a-binary-search-tree/
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  // Solve with recursion.
  if (root == null || root.val === val) {
    return root;
  } else if (val > root.val) {
    return searchBST(root.right, val); // Search the right subtree.
  } else {
    return searchBST(root.left, val); // Search the left subtree.
  }
};
