// https://leetcode.com/problems/find-duplicate-subtrees/
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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
  // Store the count of each subtree.
  const map = new Map();
  const duplicates = [];
  function serialize(tree) {
    // tree shouldn't be null.
    // Output - root(left)(right)
    const right = tree.right != null ? `(${serialize(tree.right)})` : "";
    let left = tree.right != null ? "()" : "";
    if (tree.left != null) {
      left = `(${serialize(tree.left)})`;
    }
    const serialized = `${tree.val}${left}${right}`;
    const count = map.get(serialized) || 0;
    map.set(serialized, count + 1);
    if (count === 1) {
      duplicates.push(tree);
    }
    return serialized;
  }
  // Given root not null.
  serialize(root);
  return duplicates;
};
