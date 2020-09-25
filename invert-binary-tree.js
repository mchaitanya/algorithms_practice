// https://leetcode.com/problems/invert-binary-tree/
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
var invertTree = function(root) {
    if (root != null) {
        const leftInverted = invertTree(root.left);
        root.left = invertTree(root.right);
        root.right = leftInverted;
    }
    return root;
};