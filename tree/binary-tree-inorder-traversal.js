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
  if (root == null) return [];

  // Consider the recursive function
  // dfs(node) {
  //     dfs(node.left);
  //     vals.push(node.val);
  //     dfs(node.right);
  // }

  // Idea from:
  // https://leetcode.com/problems/binary-tree-postorder-traversal/solutions/45559/my-accepted-code-with-explaination-does-anyone-have-a-better-idea/comments/45086
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
      // top.left is null / top.left was just popped.
      vals.push(top.val);
      stack.push(top.right);
    } else {
      // top.left is null & top.right is null / one of them isn't null & it was just popped.
      stack.pop();
      lastPopped = top;
      if (top.right == null) vals.push(top.val);
    }
  }
  return vals;

  // if (root == null) return [];
  // const vals = [];
  // let curr = root;
  // const stack = [];
  // while (curr != null || stack.length > 0) {
  //     while (curr != null) {
  //         stack.push(curr);
  //         curr = curr.left;
  //     }
  //     curr = stack.pop();
  //     vals.push(curr.val);
  //     curr = curr.right;
  // }
  // return vals;

  // // Iterative with a stack.
  // if (root == null) return [];
  // const vals = [];
  // const stack = [[root, false]]; // Second value indicates if the left child has been seen.
  // while (stack.length > 0) {
  //     const [node, leftSeen] = stack[stack.length-1];
  //     if (node.left != null && !leftSeen) {
  //         stack[stack.length-1][1] = true;
  //         stack.push([node.left, false]);
  //     } else {
  //         stack.pop();
  //         vals.push(node.val);
  //         if (node.right != null) stack.push([node.right, false]);
  //     }
  // }
  // return vals;

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
