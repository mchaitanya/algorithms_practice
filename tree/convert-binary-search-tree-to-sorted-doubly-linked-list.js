// https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/
// tags - tree, linked-list
/**
 * // Definition for a Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
  // Solve with recursion.
  // Base case.
  if (root == null) return root;
  const left = treeToDoublyList(root.left);
  let head = root;
  if (left != null) {
    // left is the head of the circular list.
    head = left;
    root.left = left.left;
    left.left.right = root;
  }

  const right = treeToDoublyList(root.right);
  let tail = root;
  if (right != null) {
    tail = right.left;
    root.right = right;
    right.left = root;
  }

  head.left = tail;
  tail.right = head;
  return head;

  // // Not transforming the tree in-place.
  // if (root == null) return null;
  // const nodes = [];
  // // Traverse the tree in-order & collect the nodes.
  // (function dfs(node) {
  //     if (node != null) {
  //         dfs(node.left);
  //         nodes.push(node);
  //         dfs(node.right);
  //     }
  // })(root)

  // for (let i = 0; i < nodes.length; i++) {
  //     nodes[i].left  = i === 0 ? nodes[nodes.length-1] : nodes[i-1];
  //     nodes[i].right = i === nodes.length-1 ? nodes[0] : nodes[i+1];
  // }
  // return nodes[0];
};
