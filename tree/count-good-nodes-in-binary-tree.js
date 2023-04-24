// https://leetcode.com/problems/count-good-nodes-in-binary-tree/
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
var goodNodes = function (root) {
  let numGood = 0;
  // max is the maximum value seen along the path so far.
  function dfs(node, max) {
    if (node == null) return;
    if (node.val >= max) numGood++;
    max = Math.max(max, node.val);
    dfs(node.left, max);
    dfs(node.right, max);
  }

  dfs(root, -Infinity);

  return numGood;
};
