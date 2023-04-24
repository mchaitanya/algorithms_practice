// https://leetcode.com/problems/reverse-odd-levels-of-binary-tree/
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
 * @return {TreeNode}
 */
var reverseOddLevels = function (root) {
  // Traverse the tree level-order.
  let curr = [root];
  let oddLevel = false;
  while (curr.length > 0) {
    const childrenLeft = [],
      childrenRight = [];
    for (let i = 0, j = curr.length - 1; i <= j; i++, j--) {
      const nodeLeft = curr[i],
        nodeRight = curr[j];
      if (nodeLeft.left) childrenLeft.push(nodeLeft.left, nodeLeft.right);
      if (i < j) {
        if (nodeRight.right)
          childrenRight.push(nodeRight.right, nodeRight.left);
        if (oddLevel)
          [nodeLeft.val, nodeRight.val] = [nodeRight.val, nodeLeft.val];
      }
    }
    curr = [...childrenLeft, ...childrenRight.reverse()];
    oddLevel = !oddLevel;
  }
  return root;
};
