// https://leetcode.com/problems/binary-tree-vertical-order-traversal/
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
 * @return {number[][]}
 */
var verticalOrder = function (root) {
  // Do BFS keeping track of distance from centre.
  if (root == null) return [];
  let level = [[root, 0]];
  const map = new Map();
  let minDist = Infinity;
  while (level.length > 0) {
    const nextLevel = [];
    for (const [node, dist] of level) {
      if (!map.has(dist)) map.set(dist, []);
      if (dist < minDist) minDist = dist;
      map.get(dist).push(node.val);
      if (node.left != null) nextLevel.push([node.left, dist - 1]);
      if (node.right != null) nextLevel.push([node.right, dist + 1]);
    }
    level = nextLevel;
  }

  const result = [];
  for (let i = 0; i < map.size; i++) {
    result.push(map.get(minDist + i));
  }
  return result;

  // // Do DFS keeping track of distance from centre & depth.
  // // Map each distance to an array of tuples containing the value & depth.
  // const map = new Map();
  // function dfs(node, dist, depth) {
  //     if (node == null) return;
  //     if (!map.has(dist)) map.set(dist, []);
  //     map.get(dist).push([node.val, depth]);
  //     dfs(node.left, dist-1, depth+1);
  //     dfs(node.right, dist+1, depth+1);
  // }
  // dfs(root, 0, 0);

  // const result = [];
  // const dists = Array.from(map.keys()).sort((d1, d2) => d1-d2);
  // for (const dist of dists) {
  //     const col = map.get(dist)
  //         .sort((arr1, arr2) => arr1[1] - arr2[1]) // Sort by the depth.
  //         .map((arr) => arr[0]); // Map to the node value.
  //     result.push(col);
  // }
  // return result;
};
