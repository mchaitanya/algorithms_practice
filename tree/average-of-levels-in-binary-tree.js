// https://leetcode.com/problems/average-of-levels-in-binary-tree/
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
var averageOfLevels = function (root) {
  // Given >= 1 nodes i.e. root can't be null.
  const result = [];
  let level = [root];
  while (level.length > 0) {
    let sum = 0;
    const nextLevel = [];
    for (const node of level) {
      sum += node.val;
      if (node.left != null) nextLevel.push(node.left);
      if (node.right != null) nextLevel.push(node.right);
    }
    result.push(sum / level.length);
    level = nextLevel;
  }
  return result;
};
