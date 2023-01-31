// https://leetcode.com/problems/minimum-depth-of-binary-tree/
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
var minDepth = function (root) {
  // Solve with level-order traversal.
  if (root == null) return 0;
  let depth = 0;
  let level = [root];
  while (level.length > 0) {
    depth++;
    const nextLevel = [];
    for (const node of level) {
      if (node.left == null && node.right == null) return depth;
      if (node.left != null) nextLevel.push(node.left);
      if (node.right != null) nextLevel.push(node.right);
    }
    level = nextLevel;
  }
  // Should not reach here.
  return -1;

  // // Solve with recursion.
  // if (root == null) {
  //     return 0;
  // } else if (root.left == null) {
  //     return minDepth(root.right) + 1;
  // } else if (root.right == null) {
  //     return minDepth(root.left) + 1;
  // } else {
  //     return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
  // }
};
