// https://leetcode.com/problems/unique-binary-search-trees-ii/
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
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  // Copy the tree, adding offset to the value of each node.
  function copy(tree, offset) {
    if (tree == null) return null;
    const copied = new TreeNode(tree.val + offset);
    copied.left = copy(tree.left, offset);
    copied.right = copy(tree.right, offset);
    return copied;
  }

  // Store the array of BSTs for each n.
  const trees = new Array(n + 1);
  trees[0] = [null];
  trees[1] = [new TreeNode(1)];
  for (let i = 2; i <= n; i++) {
    trees[i] = [];
    // We can choose any node 1 ... i as the root.
    for (let root = 1; root <= i; root++) {
      // The left subtree will contain the nodes 1...root-1
      for (const left of trees[root - 1]) {
        // The right subtree will contain the nodes root+1,...i
        for (const right of trees[i - root]) {
          const tree = new TreeNode(root, left, copy(right, root));
          trees[i].push(tree);
        }
      }
    }
  }
  return trees[n];
};
