// https://leetcode.com/problems/find-largest-value-in-each-tree-row/
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
var largestValues = function (root) {
  // Perform level-order traversal & pick the largest value on each level.
  if (root == null) return [];
  const result = [];
  let level = [root];
  while (level.length > 0) {
    const nextLevel = [];
    let max = -Infinity;
    for (const node of level) {
      max = Math.max(max, node.val);
      if (node.left) nextLevel.push(node.left);
      if (node.right) nextLevel.push(node.right);
    }
    result.push(max);
    level = nextLevel;
  }
  return result;
};
