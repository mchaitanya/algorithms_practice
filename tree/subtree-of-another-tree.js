// https://leetcode.com/problems/subtree-of-another-tree/
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  function isSame(root1, root2) {
    if (root1 != null && root2 != null) {
      return (
        root1.val === root2.val &&
        isSame(root1.left, root2.left) &&
        isSame(root1.right, root2.right)
      );
    } else {
      // One of them is null. They are the same only if both are.
      return root1 === root2;
    }
  }

  function containsMatch(node) {
    if (node == null) return subRoot == null;
    return (
      containsMatch(node.left) ||
      containsMatch(node.right) ||
      isSame(node, subRoot)
    );
  }

  return containsMatch(root);
};
