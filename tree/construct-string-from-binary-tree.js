// https://leetcode.com/problems/construct-string-from-binary-tree/
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
 * @return {string}
 */
var tree2str = function (root) {
  // Solve with recursion.
  if (root == null) return "";
  let rootStr = String(root.val);
  const leftStr = tree2str(root.left);
  const rightStr = tree2str(root.right);
  if (rightStr !== "") {
    return `${rootStr}(${leftStr})(${rightStr})`;
  } else if (leftStr !== "") {
    return `${rootStr}(${leftStr})`;
  } else {
    return rootStr;
  }
};
