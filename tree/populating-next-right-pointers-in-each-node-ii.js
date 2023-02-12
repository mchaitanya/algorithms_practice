// https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/
// tags - tree
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  // O(1) space from LC
  let first = root;
  // first is the first node on the current level.
  // This loop iterates over the levels in the tree.
  while (first != null) {
    let node = first;
    // prev & curr are nodes on the next level.
    let prev = null,
      curr = null;
    // If there are any nodes on the next level, first will be set to the first non-null encountered.
    first = null;
    // This loop iterates over the nodes in the current level.
    while (node != null) {
      for (const child of [node.left, node.right]) {
        if (child != null) {
          prev = curr;
          curr = child;
          if (prev != null) prev.next = curr;
          if (prev == null) first = curr;
        }
      }
      node = node.next;
    }
  }
  return root;

  // // Solve with level-order traversal.
  // if (root == null) return null;
  // let level = [root];
  // while (level.length > 0) {
  //     const nextLevel = [];
  //     for (let i = 0; i < level.length; i++) {
  //         const node = level[i];
  //         if (i < level.length-1) node.next = level[i+1];
  //         if (node.left != null) nextLevel.push(node.left);
  //         if (node.right != null) nextLevel.push(node.right);
  //     }
  //     level = nextLevel;
  // }
  // return root;
};
