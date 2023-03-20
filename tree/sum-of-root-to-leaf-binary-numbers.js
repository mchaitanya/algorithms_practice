// https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/
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
var sumRootToLeaf = function (root) {
  let result = 0;
  // DFS the tree building up the number till you reach a leaf.
  function dfs(node, numberSoFar) {
    // node should not be null.
    const number = 2 * numberSoFar + node.val;
    if (node.left == null && node.right == null) {
      result += number;
      return;
    }
    if (node.left != null) dfs(node.left, number);
    if (node.right != null) dfs(node.right, number);
  }

  // Given root not null.
  dfs(root, 0);

  return result;
};
