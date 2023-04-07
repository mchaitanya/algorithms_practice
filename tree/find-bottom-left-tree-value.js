// https://leetcode.com/problems/find-bottom-left-tree-value/
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
 * @return {number}
 */
var findBottomLeftValue = function (root) {
  let result;
  const queue = [root];
  while (queue.length > 0) {
    result = queue.shift();
    if (result.right) queue.push(result.right);
    if (result.left) queue.push(result.left);
  }
  return result.val;

  // // Traverse the tree level-order.
  // let result;
  // let curr = [root];
  // while (curr.length > 0) {
  //     result = curr[0];
  //     const next = [];
  //     for (let node of curr) {
  //         if (node.left) next.push(node.left);
  //         if (node.right) next.push(node.right);
  //     }
  //     curr = next;
  // }
  // return result.val;
};
