// https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  // Solve with recursion.
  if (inorder.length === 0) {
    return null;
  } else if (inorder.length === 1) {
    return new TreeNode(inorder[0], null, null);
  }

  // The last value in postorder is the value of the root.
  const root = postorder[postorder.length - 1];

  const idx = inorder.indexOf(root);
  // The left subarray of inorder up to the root represents the left subtree's inorder traversal.
  // The left subarray of postorder up to the same idx represents the left subtree's postorder traversal.
  const leftSubtree = buildTree(inorder.slice(0, idx), postorder.slice(0, idx));

  // Similarly the build up the right subtree's inorder & postorder traversals.
  const rightSubtree = buildTree(
    inorder.slice(idx + 1),
    postorder.slice(idx, postorder.length - 1)
  );

  return new TreeNode(root, leftSubtree, rightSubtree);
};
