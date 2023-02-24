// https://leetcode.com/problems/find-leaves-of-binary-tree/
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
 * @return {number[][]}
 */
var findLeaves = function (root) {
  // In the first round, we'll collect the nodes whose max depth = 0, then 1, & so on.
  const result = [];
  (function maxDepth(node) {
    if (node == null) return 0;
    const max = Math.max(maxDepth(node.left), maxDepth(node.right));
    // Since the traversal is post-order, we'll encounter the depths in increasing order.
    if (result.length === max) result.push([]);
    result[max].push(node.val);
    return max + 1;
  })(root);
  return result;
};
