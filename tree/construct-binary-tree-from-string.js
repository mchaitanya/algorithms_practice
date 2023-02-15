// https://leetcode.com/problems/construct-binary-tree-from-string/
// tags - tree, string
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} s
 * @return {TreeNode}
 */
var str2tree = function (s) {
  // Solve with recursion.
  if (s.length === 0) return null;
  // Cut the string up into root, left & right.
  let val = null,
    left = null,
    right = null;
  for (let i = 0, chunk = "", numLeft = 0, numRight = 0; i < s.length; i++) {
    if (s[i] !== "(" && s[i] !== ")") {
      chunk += s[i];
      if ((i === s.length - 1 || s[i + 1] === "(") && val == null) {
        val = Number(chunk);
        chunk = "";
      }
    } else if (s[i] === "(") {
      numLeft++;
      if (numLeft > 1) chunk += s[i];
    } else {
      // Char must be ')'.
      numRight++;
      if (numLeft > numRight) {
        chunk += s[i];
      } else {
        // numLeft must be equal to numRight.
        if (left == null) {
          left = str2tree(chunk);
        } else {
          right = str2tree(chunk);
        }
        // Reset the chunk.
        chunk = "";
        numLeft = 0;
        numRight = 0;
      }
    }
  }
  return new TreeNode(val, left, right);
};
