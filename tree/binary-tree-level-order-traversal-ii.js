// https://leetcode.com/problems/binary-tree-level-order-traversal-ii
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
var levelOrderBottom = function (root) {
  if (root == null) return [];
  // Do DFS keeping track of the level.
  const result = [];
  function dfs(node, level) {
    if (node == null) return;
    // Insert value into the subarray for its level.
    if (result[level] == null) result[level] = [];
    result[level].push(node.val);
    // Recurse over the children.
    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  }
  dfs(root, 0);
  return result.reverse();

  // // Do level-order traversal & reverse the result.
  // const result = [];
  // let level = [root];
  // while (level.length > 0) {
  //     const nextLevel = [], vals = [];
  //     for (const node of level) {
  //         vals.push(node.val);
  //         if (node.left != null) nextLevel.push(node.left);
  //         if (node.right != null) nextLevel.push(node.right);
  //     }
  //     result.push(vals);
  //     level = nextLevel;
  // }
  // return result.reverse();
};
