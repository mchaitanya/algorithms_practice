// https://leetcode.com/problems/count-univalue-subtrees
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
var countUnivalSubtrees = function (root) {
  let numUnival = 0;
  (function isUnival(node) {
    if (node == null) return false;
    const leftUnival = isUnival(node.left);
    const rightUnival = isUnival(node.right);
    const nodeUnival =
      (node.left == null || (node.val === node.left.val && leftUnival)) &&
      (node.right == null || (node.val === node.right.val && rightUnival));
    if (nodeUnival) numUnival++;
    return nodeUnival;
  })(root);

  return numUnival;

  // if (root == null) return 0;
  // let count = 0;
  // // Return whether the subtree rooted at node is univalued.
  // function dfs(node) {
  //   // node shouldn't be null.
  //   let isUnival = true;
  //   if (node.left != null) {
  //     const isLeftUnival = dfs(node.left);
  //     isUnival &&= node.val === node.left.val && isLeftUnival;
  //   }
  //   if (node.right != null) {
  //     const isRightUnival = dfs(node.right);
  //     isUnival &&= node.val === node.right.val && isRightUnival;
  //   }
  //   if (isUnival) count++;
  //   return isUnival;
  // }
  // dfs(root);
  // return count;
};
