// https://leetcode.com/problems/merge-two-binary-trees/
// tags - tree, recursion
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    // solve recursively
    if (t1 == null) {
        return t2;
    } else if (t2 == null) {
        return t1;
    }
    
    // we're sure neither is null
    t1.val += t2.val;
    t1.left = mergeTrees(t1.left, t2.left);
    t1.right = mergeTrees(t1.right, t2.right);
    
    return t1;
    
};