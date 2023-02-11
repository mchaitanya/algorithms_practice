// https://leetcode.com/problems/clone-graph
// tags - graph
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  // Solve with recursion.
  // Store cloned nodes in the map. Don't try to reclone them.
  const map = new Map();
  function clone(node) {
    if (node == null) return null;
    if (map.has(node.val)) return map.get(node.val);
    const clonedNeighbors = [];
    const cloned = new Node(node.val, clonedNeighbors);
    // Set it in the map here to make it available when the neighbors are processed.
    map.set(node.val, cloned);
    for (const neighbor of node.neighbors) {
      clonedNeighbors.push(clone(neighbor));
    }
    return cloned;
  }
  return clone(node);
};
