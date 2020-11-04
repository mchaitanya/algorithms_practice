// https://leetcode.com/problems/sum-of-left-leaves/
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
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    // solve recursively
    if (root == null) {
        return 0;
    }
    
    const left = root.left;
    const right = root.right;
    
    let sum = 0;
    if (left != null && left.left == null && left.right == null) {
        sum += left.val;
    }
    
    sum += sumOfLeftLeaves(left);
    sum += sumOfLeftLeaves(right);
    
    return sum;
};