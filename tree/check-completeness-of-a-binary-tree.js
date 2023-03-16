// https://leetcode.com/problems/check-completeness-of-a-binary-tree/
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
 * @return {boolean}
 */
var isCompleteTree = function (root) {
  // Perform level-order traversal.
  let level = [root]; // Given root not null.
  let seenNull = false;
  while (!seenNull && level.length > 0) {
    const nextLevel = [];
    for (const node of level) {
      if (node == null) {
        seenNull = true;
      } else if (seenNull) {
        // We're encountering a non-null node on this level after seeing a null.
        return false;
      } else {
        nextLevel.push(node.left);
        nextLevel.push(node.right);
      }
    }
    level = nextLevel;
  }
  // If we saw a null on the previous level, this level must only contain nulls.
  return level.every((node) => node == null);
};
