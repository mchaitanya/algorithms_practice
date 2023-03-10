// https://leetcode.com/problems/binary-tree-coloring-game/
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
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */
var btreeGameWinningMove = function (root, n, x) {
  // Player 2's best bet is to pick
  // - x's parent
  //  - Player 1 gets all nodes in the subtree rooted at x
  // - x's left/right child
  //  - Player 2 gets all the nodes in the subtree at x's child

  let canPlayer2Win = false;

  // Return the number of nodes in the subtree rooted at node.
  function dfs(node) {
    if (node == null) return 0;
    const left = dfs(node.left);
    const right = dfs(node.right);
    const total = left + right + 1;
    if (node.val === x) {
      canPlayer2Win ||= n - total > total; // Player 2 picks x's parent.
      canPlayer2Win ||= left > n - left; // Player 2 picks x's left child.
      canPlayer2Win ||= right > n - right; // Player 2 picks x's right child.
    }
    return total;
  }

  dfs(root);

  return canPlayer2Win;
};
