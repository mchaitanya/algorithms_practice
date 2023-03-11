// https://leetcode.com/problems/all-possible-full-binary-trees/
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
var allPossibleFBT = function (n) {
  // For a different approach, see solution to
  // https://leetcode.com/problems/unique-binary-search-trees-ii/

  function findLeaves(node) {
    const leaves = [];
    (function dfs(node) {
      if (node == null) return;
      if (node.left == null && node.right == null) leaves.push(node);
      dfs(node.left);
      dfs(node.right);
    })(node);
    return leaves;
  }

  function clone(node, leaf) {
    if (node == null) return null;
    if (node === leaf) {
      return new TreeNode(0, new TreeNode(0), new TreeNode(0));
    } else {
      return new TreeNode(0, clone(node.left, leaf), clone(node.right, leaf));
    }
  }

  function serialize(node) {
    if (node == null) return "";
    const left = serialize(node.left);
    const right = serialize(node.right);
    return `${node.val}(${left})(${right})`;
  }

  function constructFBTs(n) {
    if (n % 2 === 0) return [];
    if (n === 1) return [new TreeNode(0)];
    // n > 1 && odd here - 3, 5, 7 etc
    const trees = [];
    const smallerTrees = constructFBTs(n - 2);
    const seen = new Set();
    for (const s of smallerTrees) {
      // Find the leaves of t.
      const leaves = findLeaves(s);
      for (const leaf of leaves) {
        // Clone t, attaching 2 nodes at the leaf.
        const tree = clone(s, leaf);
        const serialized = serialize(tree);
        if (!seen.has(serialized)) {
          seen.add(serialized);
          trees.push(tree);
        }
      }
    }
    return trees;
  }

  return constructFBTs(n);
};
