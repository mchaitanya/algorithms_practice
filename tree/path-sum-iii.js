// https://leetcode.com/problems/path-sum-iii/
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
 * @param {number} sum
 * @return {number}
 */
var pathSum = function (root, sum) {
  if (root == null) return 0;
  let numPaths = 0;
  // Store how many times each prefix sum was seen along the path from the root.
  // Initialize the map with 0=>1 for paths that start at the root.
  const map = new Map([[0, 1]]);
  function dfs(node, prefixSum) {
    // node shouldn't be null.
    prefixSum += node.val;
    numPaths += map.get(prefixSum - targetSum) || 0;
    // Increment count of prefixSum in the map.
    const count = map.get(prefixSum) || 0;
    map.set(prefixSum, count + 1);
    // Recurse over the children.
    if (node.left != null) dfs(node.left, prefixSum);
    if (node.right != null) dfs(node.right, prefixSum);
    // Reset the count of prefixSum.
    map.set(prefixSum, count);
  }
  dfs(root, 0);
  return numPaths;

  // // counts the number of paths that start at the node
  // // that add up to any value in the sums array
  // function _countPaths(node, sum) {
  //     if (node == null) {
  //         return 0;
  //     }

  //     // paths that start at this node
  //     let nodePaths = (node.val === sum ? 1 : 0);
  //     nodePaths += _countPaths(node.left, sum - node.val);
  //     nodePaths += _countPaths(node.right, sum - node.val);
  //     return nodePaths;

  // }

  // let numPaths = 0;
  // // traverse the tree calling _countPaths on each node
  // (function _dfs(node) {
  //     numPaths += _countPaths(node, sum);
  //     if (node != null) {
  //         _dfs(node.left);
  //         _dfs(node.right);
  //     }
  // })(root);

  // return numPaths;
};
