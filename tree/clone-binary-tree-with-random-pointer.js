// https://leetcode.com/problems/clone-binary-tree-with-random-pointer/
// tags - tree
/**
 * // Definition for a Node.
 * function Node(val, left, right, random) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.random = random === undefined ? null : random;
 * };
 */

/**
 * @param {Node} root
 * @return {NodeCopy}
 */
var copyRandomBinaryTree = function (root) {
  // Map each node to its clone.
  const map = new Map();
  (function dfs(node) {
    if (node != null) {
      map.set(node, new NodeCopy(node.val));
      dfs(node.left);
      dfs(node.right);
    }
  })(root);

  // Traverse the tree & set the left, right & random pointers for each node's clone.
  (function dfs(node) {
    if (node != null) {
      const clone = map.get(node);
      clone.left = map.get(node.left) || null;
      clone.right = map.get(node.right) || null;
      clone.random = map.get(node.random) || null;
      dfs(node.left);
      dfs(node.right);
    }
  })(root);

  return map.get(root) || null;

  // const originalNodes = [];
  // const clonedNodes = [];
  // function clone(node) {
  //     if (node == null) return null;
  //     const left = clone(node.left);
  //     const right = clone(node.right);
  //     const cloned = new NodeCopy(node.val, left, right);
  //     originalNodes.push(node);
  //     clonedNodes.push(cloned);
  //     return cloned;
  // }

  // const clonedRoot = clone(root);
  // for (let i = 0; i < originalNodes.length; i++) {
  //     if (originalNodes[i].random == null) continue;
  //     for (let j = 0; j < originalNodes.length; j++) {
  //         if (originalNodes[i].random === originalNodes[j]) {
  //             clonedNodes[i].random = clonedNodes[j];
  //         }
  //     }
  // }
  // return clonedRoot;
};
