// https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/
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
var sumEvenGrandparent = function (root) {
  let result = 0;
  function dfs(node, parent, grandparent) {
    // node shouldn't be null.
    if (grandparent && grandparent.val % 2 === 0) {
      result += node.val;
    }
    if (node.left) dfs(node.left, node, parent);
    if (node.right) dfs(node.right, node, parent);
  }

  // Given root not null.
  dfs(root, null, null);

  return result;
};
