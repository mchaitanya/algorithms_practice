// https://leetcode.com/problems/binary-tree-postorder-traversal/
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
var postorderTraversal = function (root) {
  if (root == null) return [];

  // Consider the recursive function.
  // dfs(node) {
  //     // node shoudn't be null.
  //     if (node.left != null) dfs(node.left);
  //     // We'll process the right child if the left child is null or right after it's been popped.
  //     if (node.right != null) dfs(node.right);
  //     // We'll process the node right if the right child is null or right after it's been popped.
  //     vals.push(node.val);
  // }

  const vals = [];
  const stack = [root];
  let lastPopped;
  while (stack.length > 0) {
    const top = stack[stack.length - 1];
    if (
      top.left != null &&
      top.left !== lastPopped &&
      top.right !== lastPopped
    ) {
      stack.push(top.left);
    } else if (top.right != null && top.right !== lastPopped) {
      // Either top.left is null / top.left was just popped.
      stack.push(top.right);
    } else {
      // top.left is null & top.right is null / one of them isn't null & it was just popped.
      stack.pop();
      lastPopped = top;
      vals.push(top.val);
    }
  }
  return vals;

  // if (root == null) return [];
  // const vals = [];
  // const stack = [[root, false]]; // Second value indicates if the children have been seen.
  // while (stack.length > 0) {
  //     const [node, childrenSeen] = stack[stack.length-1];
  //     if ((node.left != null || node.right != null) && !childrenSeen) {
  //         stack[stack.length-1][1] = true;
  //         if (node.right != null) stack.push([node.right, false]);
  //         if (node.left != null) stack.push([node.left, false]);
  //     } else {
  //         stack.pop();
  //         vals.push(node.val);
  //     }
  // }
  // return vals;
};
