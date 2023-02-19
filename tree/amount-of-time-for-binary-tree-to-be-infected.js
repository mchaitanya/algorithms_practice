// https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/
// tags - tree, graph
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
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
 * @param {number} start
 * @return {number}
 */
var amountOfTime = function (root, start) {
  let maxDistance = 0;
  // DFS - Return distance to leaf & infected node.
  // -1 indicates the subtree doesn't contain the infected node.
  function dfs(node) {
    if (node == null) return [0, -1];
    const [leftLeaf, leftInfected] = dfs(node.left);
    const [rightLeaf, rightInfected] = dfs(node.right);
    const depthLeaf = Math.max(leftLeaf, rightLeaf) + 1;
    let depthInfected = -1;
    if (node.val === start) {
      // start is the root.
      maxDistance = Math.max(maxDistance, leftLeaf, rightLeaf);
      depthInfected = 1;
    } else if (leftInfected !== -1) {
      // start is in the left subtree.
      maxDistance = Math.max(
        maxDistance,
        leftInfected + rightLeaf,
        leftLeaf - leftInfected
      );
      depthInfected = leftInfected + 1;
    } else if (rightInfected !== -1) {
      // start is in the right subtree.
      maxDistance = Math.max(
        maxDistance,
        leftLeaf + rightInfected,
        rightLeaf - rightInfected
      );
      depthInfected = rightInfected + 1;
    }
    return [depthLeaf, depthInfected];
  }
  dfs(root); // Given root not null.
  return maxDistance;

  // // Convert the tree into a graph.
  // // Store the neighbours of each node.
  // // Given 1) Root not null 2) Each node has a unique value
  // const map = new Map([[root.val, []]]);
  // (function dfs(node) {
  //     // node shouldn't be null.
  //     if (node.left != null) {
  //         map.get(node.val).push(node.left.val); // The parent should already be in the map.
  //         map.set(node.left.val, [node.val]);
  //         dfs(node.left);
  //     }
  //     if (node.right != null) {
  //         map.get(node.val).push(node.right.val);
  //         map.set(node.right.val, [node.val]);
  //         dfs(node.right);
  //     }
  // })(root);

  // // BFS from start.
  // let minute = 0;
  // let level = [start];
  // const seen = new Set(level);
  // while (level.length > 0) {
  //     const nextLevel = [];
  //     for (const u of level) {
  //         for (const v of map.get(u)) {
  //             if (!seen.has(v)) {
  //                 seen.add(v);
  //                 nextLevel.push(v);
  //             }
  //         }
  //     }
  //     level = nextLevel;
  //     if (nextLevel.length > 0) minute++;
  // }
  // return minute;
};
