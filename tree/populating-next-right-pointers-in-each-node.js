// https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
// tags - tree
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  // Solve with recursion.
  if (root == null) return null;
  let left = connect(root.left);
  let right = connect(root.right);
  // Set the next pointer of the right-most nodes in the left subtree to the left-most nodes in the right.
  while (left != null) {
    left.next = right;
    left = left.right;
    right = right.left;
  }
  return root;

  // // Solve with level-order traversal.
  // if (root == null) return null;
  // let level = [root];
  // while (level.length > 0) {
  //     // Set the next pointers for nodes on this level.
  //     for (let i = 0; i < level.length; i++) {
  //         level[i].next = (i === level.length-1 ? null : level[i+1]);
  //     }
  //     // Collect the nodes in the next level.
  //     const nextLevel = [];
  //     for (const node of level) {
  //         if (node.left != null) nextLevel.push(node.left);
  //         if (node.right != null) nextLevel.push(node.right);
  //     }
  //     level = nextLevel;
  // }
  // return root;
};
