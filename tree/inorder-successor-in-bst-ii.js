// https://leetcode.com/problems/inorder-successor-in-bst-ii/
// tags - tree
/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var inorderSuccessor = function (node) {
  let next = node.right;
  while (next != null && next.left != null) {
    next = next.left;
  }

  if (next != null) return next;

  let parent = node.parent;
  while (parent != null && parent.right == node) {
    node = parent;
    parent = parent.parent;
  }
  return parent;

  // // Find the root. Then do in-order traversal.
  // let root = node;
  // while (root.parent != null) {
  //     root = root.parent;
  // }
  // // root is the root of the tree.

  // let prev = null, successor = null;
  // (function dfs(curr) {
  //     if (curr == null) return;
  //     dfs(curr.left);
  //     if (successor != null) return;
  //     if (prev === node) {
  //         successor = curr;
  //     } else {
  //         prev = curr;
  //         dfs(curr.right);
  //     }
  // })(root);
  // return successor;
};
