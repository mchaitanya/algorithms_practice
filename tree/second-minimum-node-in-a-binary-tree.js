// https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/
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
var findSecondMinimumValue = function (root) {
  // Given root not null.
  if (root.left == null && root.right == null) {
    return -1;
  }

  // root must have both left & right sub-nodes.
  if (root.left.val === root.right.val) {
    const left = findSecondMinimumValue(root.left);
    const right = findSecondMinimumValue(root.right);
    if (left === -1) {
      return right;
    } else if (right === -1) {
      return left;
    } else {
      return Math.min(left, right);
    }
  } else if (root.left.val === root.val) {
    const left = findSecondMinimumValue(root.left);
    return left === -1 || left > root.right.val ? root.right.val : left;
  } else {
    const right = findSecondMinimumValue(root.right);
    return right === -1 || right > root.left.val ? root.left.val : right;
  }
};
