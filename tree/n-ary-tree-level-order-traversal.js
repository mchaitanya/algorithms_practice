// https://leetcode.com/problems/n-ary-tree-level-order-traversal/
// tags - tree
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (root == null) return [];
  const result = [];
  let level = [root];
  while (level.length > 0) {
    const vals = [];
    const nextLevel = [];
    for (const node of level) {
      vals.push(node.val);
      nextLevel.push(...node.children);
    }
    result.push(vals);
    level = nextLevel;
  }
  return result;
};
