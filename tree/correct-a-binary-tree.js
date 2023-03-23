// https://leetcode.com/problems/correct-a-binary-tree/
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
 * @param {number} from
 * @param {number} to
 * @return {TreeNode}
 */
var correctBinaryTree = function (root) {
  // Map each node's val to its height.
  function dfs1(node, h, map) {
    if (node == null) return;
    map.set(node.val, h);
    dfs1(node.left, h + 1, map);
    dfs1(node.right, h + 1, map);
  }

  const hmap = new Map();
  dfs1(root, 0, hmap);

  function dfs2(node) {
    if (node == null) return;
    const left = node.left;
    if (left && left.right && hmap.get(left.val) === hmap.get(left.right.val)) {
      node.left = null; // Delete the node.
    }
    const right = node.right;
    if (
      right &&
      right.right &&
      hmap.get(right.val) === hmap.get(right.right.val)
    ) {
      node.right = null;
    }

    dfs2(node.left);
    dfs2(node.right);
  }

  dfs2(root);

  return root;
};
