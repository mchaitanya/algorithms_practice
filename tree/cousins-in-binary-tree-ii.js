// https://leetcode.com/problems/cousins-in-binary-tree-ii/
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
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var replaceValueInTree = function (root) {
  // Given root not null. The root won't have any cousins.
  root.val = 0;
  let level = [root];
  while (level.length > 0) {
    const next = [];
    let levelSum = 0;
    for (const node of level) {
      const siblingSum = (node.left?.val || 0) + (node.right?.val || 0);
      levelSum += siblingSum;
      if (node.left) {
        node.left.val = -siblingSum;
        next.push(node.left);
      }
      if (node.right) {
        node.right.val = -siblingSum;
        next.push(node.right);
      }
    }

    for (const node of next) {
      node.val += levelSum;
    }
    level = next;
  }

  return root;
};
