// https://leetcode.com/problems/find-mode-in-binary-search-tree/
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
 * @return {number[]}
 */
var findMode = function (root) {
  let modes = [];
  // Traverse the tree in-order to visit the nodes in sorted order.
  let freq = 0;
  let maxFreq = 0;
  let lastSeen = null;
  (function dfs(node) {
    if (node == null) return;
    dfs(node.left);
    freq = node.val === lastSeen ? freq + 1 : 1;
    if (freq > maxFreq) {
      maxFreq = freq;
      modes = [node.val];
    } else if (freq === maxFreq) {
      modes.push(node.val);
    }
    lastSeen = node.val;
    dfs(node.right);
  })(root);
  return modes;
};
