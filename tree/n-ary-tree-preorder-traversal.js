// https://leetcode.com/problems/n-ary-tree-preorder-traversal/
// tags - tree
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
  if (root == null) return [];
  const result = [];
  (function dfs(node) {
    result.push(node.val);
    for (let child of node.children) {
      dfs(child);
    }
  })(root);
  return result;
};
