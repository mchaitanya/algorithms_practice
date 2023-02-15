// https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/
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
var longestZigZag = function (root) {
  // Solve with DFS top-down.
  let maxLen = 0;
  function dfs(node, lenFromLeft, lenFromRight) {
    // node shouldn't be null.
    if (node.left != null) {
      dfs(node.left, 0, lenFromLeft + 1);
    } else {
      // The zigzag path coming into this node from the left cannot be extended.
      maxLen = Math.max(maxLen, lenFromLeft);
    }
    if (node.right != null) {
      dfs(node.right, lenFromRight + 1, 0);
    } else {
      maxLen = Math.max(maxLen, lenFromRight);
    }
  }
  // Given root can't be null. Tree contains >= 1 nodes.
  dfs(root, 0, 0);
  return maxLen;
};
