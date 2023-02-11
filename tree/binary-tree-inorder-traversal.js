// https://leetcode.com/problems/binary-tree-inorder-traversal/
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
var inorderTraversal = function (root) {
  // Iterative with a stack.
  if (root == null) return [];
  const vals = [];
  const stack = [[root, false]]; // Second value indicates if the left child has been seen.
  while (stack.length > 0) {
    const [node, leftSeen] = stack[stack.length - 1];
    if (node.left != null && !leftSeen) {
      stack[stack.length - 1][1] = true;
      stack.push([node.left, false]);
    } else {
      stack.pop();
      vals.push(node.val);
      if (node.right != null) stack.push([node.right, false]);
    }
  }
  return vals;

  // // Recursive
  // const vals = [];
  // function dfs(node) {
  //     if (node == null) return;
  //     dfs(node.left);
  //     vals.push(node.val);
  //     dfs(node.right);
  // }
  // dfs(root);
  // return vals;
};
