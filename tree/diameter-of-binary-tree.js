// https://leetcode.com/problems/diameter-of-binary-tree/
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
var diameterOfBinaryTree = function(root) {
    let diameter = 0;
    // count number of nodes on longest path to a leaf
    (function _getMaxNodesToLeaf(node) {
        if (node == null) {
            return 0;
        }
        
        const left = _getMaxNodesToLeaf(node.left);
        const right = _getMaxNodesToLeaf(node.right);
        // update diameter - `left` nodes below `node` => left edges
        if (left + right > diameter) {
            diameter = left + right;
        }
        
        return Math.max(left, right) + 1;
        
    })(root);
    
    return diameter;
};