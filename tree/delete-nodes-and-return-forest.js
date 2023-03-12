// https://leetcode.com/problems/delete-nodes-and-return-forest/
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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function (root, to_delete) {
  // If we delete a node, its children will become disconnected - they'll become new trees.
  // We have to disconnect the deleted node from the main tree.
  to_delete = new Set(to_delete);
  const newRoots = [];
  if ((root != null) & !to_delete.has(root.val)) {
    newRoots.push(root);
  }

  function remove(node) {
    if (node == null) return null;
    node.left = remove(node.left);
    node.right = remove(node.right);
    if (!to_delete.has(node.val)) {
      return node;
    } else {
      if (node.left != null && !to_delete.has(node.left.val)) {
        newRoots.push(node.left);
      }
      if (node.right != null && !to_delete.has(node.right.val)) {
        newRoots.push(node.right);
      }
      return null;
    }
  }

  remove(root);
  return newRoots;
};
